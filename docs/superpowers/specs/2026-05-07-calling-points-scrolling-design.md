# Uniform Row Height + Scrolling Calling Points

## Problem

Train rows in the departure board have inconsistent heights — calling stations text wraps to a variable number of lines depending on how many stations exist. Rows with 15 calling stations are much taller than rows with 2, breaking the uniform departure board aesthetic.

## Requirements

1. All train rows must be the **same fixed height**
2. Height accommodates: destination line + max 3 lines of calling stations + delay_reason/cancelled line + vertical padding
3. If calling stations exceed 3 lines, cycle through them: pause → shift up by 1 line → repeat
4. Continuous loop (wraps around to start)
5. Instant snap-back after last batch (no transition)
6. `delay_reason` and `cancelled_label` are **not** part of the scrolling area — always visible below

## Row Layout

```
┌─────────────────────────────────────────┐
│  destination text              1 line   │
│─────────────────────────────────────────│
│  calling station line 1                 │
│  calling station line 2       3 lines   │  ← overflow: hidden
│  calling station line 3                 │
│─────────────────────────────────────────│
│  delay_reason / cancelled     1 line   │  ← may be empty, same height
└─────────────────────────────────────────┘
```

All rows: **106px** fixed height regardless of content.

## Cycling Behavior

- `line-height: 14px` (11px font)
- Calling-points container: `height: 42px` (= 3 × 14px), `overflow: hidden`
- Inner scrolling div uses CSS `transform: translateY()` with `transition: transform 1000ms ease`
- Pause between shifts: 5000ms (configurable: `calling_points_scroll_interval`)
- After shift animation completes (1000ms), wait 50ms buffer, then pause cycle repeats
- Continuous loop: after showing last batch → snap to Y=0 instantly (no transition) → pause → shift

## What Changes

### `src/cfl-commute-card.js`

- **Config**: new optional property `calling_points_scroll_interval` (Number, ms, default 5000), added to `setConfig()` defaults
- **`_renderBoardRow()`**: wrap calling stations in:
  - outer `.calling-points-zone` (overflow hidden, fixed 3-line height)
  - inner `.calling-points-scroll` div with stations grouped into lines (~3 per line), joined by ` • ` within each line, and `<br>` between lines
- **Cycling lifecycle**: after render, measure each `.calling-points-scroll` element's `scrollHeight`. If > 3-line height → start pause→shift loop; if ≤ 3 lines or empty → stop any existing cycler
- **`Cycler` class** (private, inside component):
  - `constructor(el, interval)`: stores el, pauseMs, line counter, timers, alive flag
  - `start()`: measure lines with `scrollHeight/lineHeight`; if > 3, begin pause→shift→shift-animation cycle
  - `stop()`: clear timers, reset transform, set alive=false
  - Uses recursive `setTimeout`, not `setInterval`, for precise pause-first timing
- `disconnectedCallback`: stop all `Cycler` instances

### `src/styles.js`

- `.board-row`: change from `min-height: 60px` with `align-items: flex-start` to `height: 106px` (fixed)
- New `.calling-points-zone`: `overflow: hidden; height: 42px; margin-top: 1px;`
- Keep `white-space: normal` on `.calling-stations` (fallback if a line exceeds container width)

### `src/utils.js` — new function `formatCallingPointsLines`

- New exported function `formatCallingPointsLines(points, perLine = 3)`:
  - Groups calling points into chunks of `perLine` stations each
  - Joins each chunk with ` • `
  - Joins chunks with `<br>`
  - Returns the HTML string
- `formatCallingPointsDots()` stays unchanged for any other callers

## Edge Cases

| Case | Behavior |
|------|----------|
| 0 calling points | Empty 3-line zone, uniform height maintained |
| 1-3 lines fit | No cycling, shown as-is in the 3-line zone |
| 4+ lines | Cycling activates |
| Cancelled train | "Train supprimé" in the zone, no cycling |
| Delay reason | Always visible below the 3-line zone, outside clip area |
| Card resized | `ResizeObserver` or re-render → re-measure, restart cycling |
| `disconnectedCallback` | All `Cycler` instances stopped, timers cleared |
| Reduced motion preference | CSS `@media (prefers-reduced-motion: reduce)` — animation disabled |
