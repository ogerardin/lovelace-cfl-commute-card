# Agent Guidelines for CFL Commute Card

## Overview

This is a Home Assistant Lovelace custom card written in JavaScript using [Lit](https://lit.dev/) web components. It displays CFL (Luxembourg Railways) train departure information.

## Project Structure

```
HACFL-lovelace/
├── src/                    # Source files
│   ├── cfl-commute-card.js # Main card component
│   ├── styles.js           # CSS styles (Lit css tagged template)
│   ├── utils.js            # Utility functions
│   └── editor.js           # Card configuration editor
├── dist/                   # Built output (do not edit manually)
│   └── cfl-commute-card.js
├── examples/               # YAML configuration examples
├── package.json
└── rollup.config.js
```

## Build Commands

```bash
npm run build    # Build for production (minified)
npm run watch    # Build with watch mode for development
npm run dev      # Alias for watch mode
```

The build uses Rollup to bundle `src/cfl-commute-card.js` into `dist/cfl-commute-card.js`.

**Note:** There are no linting or testing commands configured. Run `npm run build` to verify the code compiles without errors.

## Code Style Guidelines

### General

- Use ES modules (`import`/`export`)
- No TypeScript - plain JavaScript only
- No semicolons at end of statements
- Use template literals for string interpolation
- Use `const` by default; `let` only when reassignment is needed; never use `var`

### Lit Components

- Extend `LitElement` from the `lit` package
- Use `static get properties()` to declare reactive properties
- Use `static get styles()` for component styles (returns `css` tagged template)
- Use `html` tagged template for rendering
- Use camelCase for property names (converted to kebab-case for attributes)

### Imports

```javascript
// Good
import { LitElement, html } from 'lit';
import { styles } from './styles.js';
import { formatTime, getStatusText } from './utils.js';

// Avoid
import * as utils from './utils.js';
```

### CSS Styles

```javascript
// Good - use css tagged template
static get styles() {
  return css`
    :host {
      display: block;
    }
    ha-card {
      padding: 0;
    }
  `;
}

// Avoid - no inline style objects
```

### Naming Conventions

| Element | Convention | Example |
|---------|------------|---------|
| Files | kebab-case | `cfl-commute-card.js` |
| Classes | PascalCase | `CflCommuteCard` |
| Methods | camelCase | `_handleTap()` |
| Properties | camelCase | `this._trains` |
| Constants | SCREAMING_SNAKE | `MAX_CALLING_POINTS` |
| Private members | prefix with `_` | `_hass`, `_trains` |

### Property Types

```javascript
static get properties() {
  return {
    hass: { type: Object },
    config: { type: Object },
    _trains: { type: Array },
    _loading: { type: Boolean },
    _origin: { type: String },
  };
}
```

- Use `{ type: Object }` for complex objects
- Use `{ type: Array }` for arrays
- Use `{ type: Boolean }` for booleans
- Use `{ type: String }` for strings
- Prefix internal state with `_` (e.g., `_trains`, `_hass`)

### Error Handling

```javascript
// Good - specific error with context
if (!summaryEntity) {
  console.error('Entity not found:', this.config.entity);
  this._loading = false;
  this._trains = [];
  return;
}

// Good - try/catch for potentially failing operations
try {
  const date = new Date(str);
  if (isNaN(date.getTime())) return str;
  return date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
} catch (e) {
  console.warn('formatTime: could not parse time value:', str, e);
  return str;
}
```

### Console Output

- Use `console.info()` for startup/version messages (formatted with colors)
- Use `console.error()` for errors
- Use `console.warn()` for recoverable issues
- Use `console.debug()` sparingly for development

```javascript
console.info(
  '%c CFL-COMMUTE-CARD \n%c Version 1.0.0 ',
  'color: cyan; font-weight: bold; background: black',
  'color: white; font-weight: bold; background: dimgray',
);
```

### Component Registration

```javascript
// Register the custom element
customElements.define('cfl-commute-card', CflCommuteCard);

// Register with Lovelace card picker
window.customCards = window.customCards || [];
window.customCards.push({
  type: 'cfl-commute-card',
  name: 'CFL Commute Card',
  description: 'Display CFL train departure information',
  preview: true,
  documentationURL: 'https://github.com/ogerardin/lovelace-cfl-commute-card',
});
```

### Home Assistant Integration

- Access Home Assistant state via `this._hass.states[entityId]`
- Call services via `this._hass.callService(domain, service, data)`
- Dispatch events for navigation/more-info:
  ```javascript
  const event = new Event('hass-more-info', { bubbles: true, composed: true });
  event.detail = { entityId: someEntityId };
  this.dispatchEvent(event);
  ```

## Adding New Features

1. Add properties to `static get properties()` if they should be reactive
2. Add corresponding initialization in `constructor()`
3. Update `set hass()` if the property comes from Home Assistant entities
4. Update `render()` to display the new data
5. Add helper methods as private methods (prefixed with `_`)
6. Run `npm run build` to verify compilation

## Build Before Push

Always run `npm run build` before committing/pushing to ensure the dist/ folder is updated with the latest changes.

## Commits

Use conventional commit format:
```
feat: add compact view mode
fix: handle missing train data gracefully
docs: update README with new examples
refactor: extract disruption detection logic
```

## Version Tags

Use plain version numbers (no "v" prefix) for git tags:
- **Correct:** `2.0.0`
- **Incorrect:** `v2.0.0`, `V2.0.0`

Release titles should be: `Release X.Y.Z`

Note: Older tags with `v` or `V` prefixes exist from the upstream repo before the fork and should not be emulated.
