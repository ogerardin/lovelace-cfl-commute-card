# Show Route Option on Departure Board

## Summary

Add a `show_route` config toggle (default `true`) to display the commute route
(`Luxembourg → Ettelbruck`) in the blue departure-board header, under the
"Départ/Abfahrt" title, in small font.

## Motivation

The route (origin → destination) is already shown in the card header for
empty/loading states, but the board view has its own header that omits it.
This adds context for which commute is being displayed, matching functionality
from the upstream repo.

## Changes

### 1. Configuration

- **Key**: `show_route` (boolean)
- **Default**: `true`
- **Editor**: `ha-switch` in the "Configuration" section

### 2. Board Header Template

In `_renderBoard()`, the header changes from a single flat row to a wrapped layout:

```html
<div class="board-header-row">
  <span class="col-time">${this._currentTime}</span>
  <div class="col-title-wrapper">
    <span class="col-title">Départ/Abfahrt</span>
    ${this.config.show_route && this._origin && this._destination ? html`
      <span class="board-header-route">${this._origin} → ${this._destination}</span>
    ` : ''}
  </div>
  <span class="col-logo">
    <svg>...</svg>
  </span>
</div>
```

The `.col-title-wrapper` is a new flex column container that replaces the old
`.col-title` span as the middle child.

### 3. CSS

Current `.board-header-row` has `height: 60px`. With the route line, this
needs to grow to accommodate two lines. The row should still use `display: flex`
with `align-items: center` so both children are vertically centered.

New/Modified CSS:

```css
.board-header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: #010EA0;
  height: 72px;           /* bumped from 60px */
  box-sizing: border-box;
}

.board-header-row .col-title-wrapper {
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
}

.board-header-row .col-title-wrapper .col-title {
  font-size: 1.8rem;
  color: #ffffff;
  font-weight: 700;
  letter-spacing: 2px;
}

.board-header-row .board-header-route {
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.2;
  white-space: nowrap;
}
```

The existing `.board-header-row .col-title` rule should be removed (it becomes
`.board-header-row .col-title-wrapper .col-title`).

### 4. Editor

Add inside the existing "Configuration" section, after the Status Sensor option:

```javascript
<ha-formfield label="Show Route">
  <ha-switch
    .checked=${this._config.show_route !== false}
    @change=${this._toggleChanged('show_route')}
  ></ha-switch>
</ha-formfield>
```

Note `.checked=${this._config.show_route !== false}` to reflect the `true`
default — the switch is on unless explicitly set to `false`.

### 5. Default Config

In `setConfig()`:

```javascript
this.config = {
  hide_on_time_trains: false,
  only_show_disrupted: false,
  min_delay_to_show: 0,
  auto_refresh: true,
  refresh_interval: 60,
  calling_points_scroll_interval: 5000,
  show_route: true,
  ...config
};
```

## Files Modified

| File | Change |
|------|--------|
| `src/cfl-commute-card.js` | Default config, `_renderBoard()` route line |
| `src/styles.js` | New `.board-header-route` class, `.col-title-wrapper` restructure |
| `src/editor.js` | `show_route` toggle switch |

## Edge Cases

- **No origin/destination**: Route line not rendered, header stays at 72px
  (consistent appearance regardless of data availability)
- **show_route=false**: Header remains unchanged from current layout
- **Long station names**: 0.7rem + `white-space: nowrap` fits comfortably in
  60% width (~400px typical). If names are very long, text will overflow
  hidden — acceptable for edge-case scenarios
- **Non-board modes**: The existing route in `_renderHeader()` is unchanged
  (not gated behind `show_route` — it's already always shown, and changing
  that would be a breaking behavioral change for empty/loading states)
