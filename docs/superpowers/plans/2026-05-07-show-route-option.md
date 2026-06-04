# Show Route Option Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a `show_route` config toggle that displays the commute origin→destination under "Départ/Abfahrt" in the board header.

**Architecture:** Three files touched: main component (defaults + template), styles (new class + layout restructure), editor (ha-switch). No new files needed.

**Tech Stack:** LitElement, JavaScript

---

### Task 1: Add `show_route` default + board header route

**Files:**
- Modify: `src/cfl-commute-card.js` — `setConfig()` defaults and `_renderBoard()` template

- [ ] **Step 1: Add default in `setConfig()`**

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

Find the `setConfig()` method around line 178 and add `show_route: true,` before `...config`.

- [ ] **Step 2: Update `_renderBoard()` template**

Current (lines 560-571):
```javascript
<div class="board-header-row">
  <span class="col-time">${this._currentTime}</span>
  <span class="col-title">Départ/Abfahrt</span>
  <span class="col-logo">
```

Replace with:
```javascript
<div class="board-header-row">
  <span class="col-time">${this._currentTime}</span>
  <div class="col-title-wrapper">
    <span class="col-title">Départ/Abfahrt</span>
    ${this.config.show_route && this._origin && this._destination ? html`
      <span class="board-header-route">${this._origin} → ${this._destination}</span>
    ` : ''}
  </div>
  <span class="col-logo">
```

- [ ] **Step 3: Build to verify**

```bash
npm run build
```

Expected: Build succeeds (dist/cfl-commute-card.js created)

- [ ] **Step 4: Commit**

```bash
git add src/cfl-commute-card.js
git commit -m "feat: add show_route config with board header route display"
```

---

### Task 2: Update styles for board header route

**Files:**
- Modify: `src/styles.js` — restructure `.col-title` to `.col-title-wrapper` + add `.board-header-route`

- [ ] **Step 1: Restructure board header CSS**

Replace the existing `.board-header-row` block (lines 206-249) with:

```css
.board-header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: #010EA0;
  height: 72px;
  box-sizing: border-box;
}

.board-header-row .col-time {
  font-size: 1.5rem;
  color: #ffffff;
  width: 20%;
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
  text-align: center;
  font-weight: 700;
  letter-spacing: 2px;
  width: 100%;
}

.board-header-row .board-header-route {
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.2;
  white-space: nowrap;
  text-align: center;
  width: 100%;
}

.board-header-row .col-logo {
  width: 20%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  overflow: visible;
}
```

The old `.board-header-row .col-title` rule (with `width: 60%`) should be completely removed since the title is now inside `.col-title-wrapper`.

- [ ] **Step 2: Build to verify**

```bash
npm run build
```

Expected: Build succeeds

- [ ] **Step 3: Commit**

```bash
git add src/styles.js
git commit -m "feat: restructure board header CSS for route line"
```

---

### Task 3: Add editor toggle

**Files:**
- Modify: `src/editor.js` — add `show_route` switch

- [ ] **Step 1: Add switch in editor template**

Find the "Configuration" section in the editor's `render()` (around line 155-173). Add after the Status Sensor option:

```javascript
<div class="switches">
  <ha-formfield label="Show Route">
    <ha-switch
      .checked=${this._config.show_route !== false}
      @change=${this._toggleChanged('show_route')}
    ></ha-switch>
  </ha-formfield>
</div>
```

- [ ] **Step 2: Build to verify**

```bash
npm run build
```

Expected: Build succeeds

- [ ] **Step 3: Commit**

```bash
git add src/editor.js
git commit -m "feat: add show_route toggle in editor"
```

---

### Task 4: Final verification

- [ ] **Step 1: Run build**

```bash
npm run build
```

Expected: Build succeeds with no errors

- [ ] **Step 2: Verify dist output**

```bash
rg 'show_route|board-header-route|col-title-wrapper' dist/cfl-commute-card.js | head -10
```

Expected: All three patterns present in the bundled output

- [ ] **Step 3: View diff for completeness**

```bash
git diff main --stat
```

Expected: 3 modified files (cfl-commute-card.js, styles.js, editor.js)
