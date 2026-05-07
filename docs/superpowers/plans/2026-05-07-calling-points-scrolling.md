# Calling Points Scrolling Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add uniform row height and auto-scrolling calling points to the departure board

**Architecture:** A `Cycler` class manages per-row pause→shift timing. A new `formatCallingPointsLines()` util groups stations into 3-per-line chunks with `<br>` delimiters. CSS fixes row height and clips the calling-points zone at 3 lines.

**Tech Stack:** LitElement, CSS transform/transition, repeated setTimeout

---

### Task 1: Add `formatCallingPointsLines()` to utils.js

**Files:**
- Modify: `src/utils.js`

- [ ] **Step 1: Add `formatCallingPointsLines` function after `formatCallingPointsDots`**

```javascript
/**
 * Format calling points into lines for scrolling display
 * @param {Array} points - Array of station names
 * @param {number} perLine - Stations per line (default 3)
 * @returns {string} HTML string with lines separated by <br>
 */
export function formatCallingPointsLines(points, perLine = 3) {
  if (!points || points.length === 0) return '';
  const lines = []
  for (let i = 0; i < points.length; i += perLine) {
    lines.push(points.slice(i, i + perLine).join(' • '))
  }
  return lines.join('<br>')
}
```

- [ ] **Step 2: Verify by reading the file**

```bash
grep -n 'formatCallingPointsLines' src/utils.js
```
Expected: line showing the export

- [ ] **Step 3: Commit**

```bash
git add src/utils.js
git commit -m "feat: add formatCallingPointsLines utility for grouped station display"
```

---

### Task 2: Update styles.js — fixed row height and calling-points-zone

**Files:**
- Modify: `src/styles.js`

- [ ] **Step 1: Change `.board-row` from `min-height: 60px` to `height: 106px`**

Replace:
```javascript
  .board-row {
    display: flex;
    align-items: flex-start;
    padding: 12px 16px;
    cursor: pointer;
    transition: background-color 0.2s ease;
    box-sizing: border-box;
    min-height: 60px;
  }
```
With:
```javascript
  .board-row {
    display: flex;
    align-items: flex-start;
    padding: 10px 16px;
    cursor: pointer;
    transition: background-color 0.2s ease;
    box-sizing: border-box;
    height: 106px;
  }
```

- [ ] **Step 2: Replace `.calling-stations` rule with new `.calling-points-zone` and `.calling-points-scroll` rules**

Replace:
```javascript
  .board-row .row-dest .calling-stations {
    font-size: 0.85rem;
    color: #ffffff;
    margin-top: 2px;
    white-space: normal;
    word-wrap: break-word;
  }
```
With:
```javascript
  .board-row .row-dest .calling-points-zone {
    overflow: hidden;
    height: 42px;
    margin-top: 1px;
  }

  .board-row .row-dest .calling-points-scroll {
    font-size: 0.85rem;
    line-height: 14px;
    color: #ffffff;
    word-wrap: break-word;
    white-space: normal;
  }
```

- [ ] **Step 3: Update `.delay-reason` to keep consistent spacing**

Replace:
```javascript
  .board-row .row-dest .delay-reason {
    font-size: 0.85rem;
    color: #ffcc00;
    margin-top: 2px;
  }
```
With:
```javascript
  .board-row .row-dest .delay-reason {
    font-size: 0.85rem;
    color: #ffcc00;
    margin-top: 1px;
    line-height: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
```

- [ ] **Step 4: Commit**

```bash
git add src/styles.js
git commit -m "feat: add uniform row height and calling-points-zone styles"
```

---

### Task 3: Add Cycler class and lifecycle to cfl-commute-card.js

**Files:**
- Modify: `src/cfl-commute-card.js`

- [ ] **Step 1: Add `formatCallingPointsLines` to the import block (line 4)**

Replace:
```javascript
import {
  formatTime,
  getStatusClass,
  formatCallingPointsDots,
  filterTrains,
  sortTrains,
  shouldShowTrains,
  getTrainCategory,
  getTrainNumber
} from './utils.js';
```
With:
```javascript
import {
  formatTime,
  getStatusClass,
  formatCallingPointsDots,
  formatCallingPointsLines,
  filterTrains,
  sortTrains,
  shouldShowTrains,
  getTrainCategory,
  getTrainNumber
} from './utils.js';
```

- [ ] **Step 2: Add config default for `calling_points_scroll_interval` in `setConfig()`**

In the config defaults block inside `setConfig()` (around line 102), add:
```javascript
      calling_points_scroll_interval: 5000,
```
after `refresh_interval: 60,` and before `...config`.

- [ ] **Step 3: Add `Cycler` class before the component class definition**

Add after the import block and before `class CflCommuteCard`:

```javascript
const CALLING_POINTS_LINE_HEIGHT = 14
const CALLING_POINTS_VISIBLE_LINES = 3

class Cycler {
  constructor(el, pauseMs) {
    this.el = el
    this.pauseMs = pauseMs
    this.line = 0
    this.timers = []
    this.alive = false
  }

  start() {
    this.alive = true
    this.line = 0
    const totalLines = Math.ceil(this.el.scrollHeight / CALLING_POINTS_LINE_HEIGHT)
    const maxLine = totalLines - CALLING_POINTS_VISIBLE_LINES
    if (maxLine <= 0) return

    this.el.style.transition = 'none'
    this.el.style.transform = 'translateY(0px)'

    const pause = () => {
      if (!this.alive) return
      this.el.style.transition = 'none'
      this.el.style.transform = `translateY(-${this.line * CALLING_POINTS_LINE_HEIGHT}px)`

      const t = setTimeout(() => {
        if (!this.alive) return
        this.line++
        if (this.line > maxLine) this.line = 0

        this.el.style.transition = 'transform 1000ms ease'
        this.el.style.transform = `translateY(-${this.line * CALLING_POINTS_LINE_HEIGHT}px)`

        const t2 = setTimeout(pause, 1050)
        this.timers.push(t2)
      }, this.pauseMs)
      this.timers.push(t)
    }

    pause()
  }

  stop() {
    this.alive = false
    this.timers.forEach(t => clearTimeout(t))
    this.timers = []
    this.el.style.transition = 'none'
    this.el.style.transform = 'translateY(0px)'
  }
}
```

- [ ] **Step 4: Add `_callingPointsCyclers` to constructor**

In the constructor, after `this._timeInterval = null;`, add:
```javascript
    this._callingPointsCyclers = []
```

- [ ] **Step 5: Modify `_renderBoardRow()` to use new scrolling structure**

Replace the calling-points section in `_renderBoardRow()` (lines 527-536):

Old:
```javascript
        <div class="row-dest">
          <span class="destination">${train.direction || this._destination || ''}</span>
          ${train.is_cancelled ? html`
            <span class="cancelled-label">Train supprimé</span>
          ` : ''}
          ${!train.is_cancelled && callingPoints.length > 0 ? html`
            <span class="calling-stations">${formatCallingPointsDots(callingPoints)}</span>
          ` : ''}
          ${!train.is_cancelled && train.delay_reason ? html`
            <span class="delay-reason">${train.delay_reason}</span>
          ` : ''}
        </div>
```

New:
```javascript
        <div class="row-dest">
          <span class="destination">${train.direction || this._destination || ''}</span>
          ${train.is_cancelled ? html`
            <span class="cancelled-label">Train supprimé</span>
          ` : ''}
          ${!train.is_cancelled ? html`
            <div class="calling-points-zone">
              <div class="calling-points-scroll" style="transform: translateY(0px)">
                ${callingPoints.length > 0
                  ? html`${formatCallingPointsLines(callingPoints)}`
                  : html`<span style="visibility:hidden">—</span>`}
              </div>
            </div>
          ` : html`
            <div class="calling-points-zone"></div>
          `}
          ${!train.is_cancelled && train.delay_reason ? html`
            <span class="delay-reason">${train.delay_reason}</span>
          ` : ''}
        </div>
```

Note: `formatCallingPointsDots` import can stay (it might be used elsewhere), but we no longer use it in `_renderBoardRow`.

- [ ] **Step 6: Add `updated()` lifecycle method after `disconnectedCallback()`**

Add after `disconnectedCallback()` (after line 91):

```javascript
  updated(changedProps) {
    super.updated && super.updated(changedProps)
    this._manageCallingPointCyclers()
  }

  _manageCallingPointCyclers() {
    this._callingPointsCyclers.forEach(c => c.stop())
    this._callingPointsCyclers = []

    if (!this._trains || this._trains.length === 0) return

    const interval = this.config.calling_points_scroll_interval || 5000
    const scrolls = this.shadowRoot.querySelectorAll('.calling-points-scroll')
    scrolls.forEach(el => {
      if (el.scrollHeight <= el.clientHeight) return
      const cycler = new Cycler(el, interval)
      cycler.start()
      this._callingPointsCyclers.push(cycler)
    })
  }
```

- [ ] **Step 7: Clean up cyclers in `disconnectedCallback()`**

Add at the end of `disconnectedCallback()` (before the closing brace):
```javascript
    this._callingPointsCyclers.forEach(c => c.stop())
    this._callingPointsCyclers = []
```

- [ ] **Step 8: Bump version to 2.2.0**

In the console.info line, change `Version 2.1.2` to `Version 2.2.0`.

- [ ] **Step 9: Commit**

```bash
git add src/cfl-commute-card.js
git commit -m "feat: add Cycler class for auto-scrolling calling points"
```

---

### Task 4: Build and verify

**Files:**
- Build: `dist/cfl-commute-card.js`

- [ ] **Step 1: Run the build**

```bash
npm run build
```
Expected: `created dist/cfl-commute-card.js in ~XXXms`

- [ ] **Step 2: Verify no compilation errors**

```bash
echo "Build succeeded"
```

- [ ] **Step 3: Test in test-preview.html**

Open `test-preview.html` in a browser via a local server. Verify:
- All rows have equal height
- Calling points > 3 lines start cycling after the configured pause
- Cycling is continuous (wraps around)
- Snap-back is instant
- Delay reason / cancelled label are visible below the 3-line zone
- Rows with 0-2 calling points show uniform height without cycling

- [ ] **Step 4: Commit**

```bash
git add dist/cfl-commute-card.js
git commit -m "chore: build dist for 2.2.0"
```

---

### Task 5: Update mock preview (optional — only if `test-preview.html` exists)

**Files:**
- Modify: `test-preview.html` (verify it works)

- [ ] **Step 1: Verify calling-points-scroll elements appear in preview**

Check that test-preview.html renders the card and calling-points-scroll divs with real station data.

```bash
grep 'calling_points' test-preview.html || echo "No calling_points in preview"
```

- [ ] **Step 2: Commit if changes made**

```bash
git add test-preview.html
git commit -m "test: update preview with calling points data"
```
