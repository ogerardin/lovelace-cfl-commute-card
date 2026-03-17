# CFL Commute Card

[![HACS Badge](https://img.shields.io/badge/HACS-Frontend-41BDF5.svg)](https://github.com/hacs/integration)
[![GitHub Release](https://img.shields.io/github/release/ogerardin/lovelace-cfl-commute-card.svg?style=flat-square)](https://github.com/ogerardin/lovelace-cfl-commute-card/releases)
[![License](https://img.shields.io/github/license/ogerardin/lovelace-cfl-commute-card.svg?style=flat-square)](LICENSE)

A beautiful, feature-rich custom Lovelace card for Home Assistant that displays CFL (Luxembourg Railways) train departure information. Designed to work seamlessly with the [HACS CFL Commute](https://github.com/ogerardin/hacs-cfl-commute) integration.

![CFL Commute Card](screenshots/full-view.png)

## Features

- **Multiple View Modes**: Full, Compact, Next-Only, and Departure Board views
- **Beautiful Design**: Mimics real railway station departure boards
- **Theme Support**: Auto, Light, and Dark themes
- **Customizable**: Show/hide platform, operator, calling points, delay reasons
- **Disruption Alerts**: Banner showing service disruptions
- **Interactive**: Tap for more info, hold to refresh

## Installation

### HACS (Recommended)

1. Open HACS in Home Assistant
2. Go to "Frontend"
3. Click the "+" button
4. Search for "CFL Commute Card"
5. Click "Install"
6. Refresh your browser

### Manual Installation

1. Download `cfl-commute-card.js` from the [latest release](https://github.com/ogerardin/lovelace-cfl-commute-card/releases)
2. Copy it to `/config/www/cfl-commute-card.js`
3. Add the resource to your Lovelace configuration:

```yaml
resources:
  - url: /local/cfl-commute-card.js
    type: module
```

4. Refresh your browser

## Quick Start

### Basic Configuration

```yaml
type: custom:cfl-commute-card
entity: sensor.your_commute_summary
```

### Using the Visual Editor

1. In edit mode, click "Add Card"
2. Search for "CFL Commute Card"
3. Select your CFL Commute summary entity
4. Configure options using the visual interface
5. Save!

## Requirements

- Home Assistant 2024.1.0 or higher
- [HACS CFL Commute](https://github.com/ogerardin/hacs-cfl-commute) integration installed

## Configuration

See [QUICKSTART.md](QUICKSTART.md) for detailed configuration options.

## Related Projects

- [HACS CFL Commute](https://github.com/ogerardin/hacs-cfl-commute) - The integration this card is designed for
- [lovelace-my-rail-commute-card](https://github.com/adamf83/lovelace-my-rail-commute-card) - The inspiration for this card (UK Rail version)

---

Made with ❤️ for the Home Assistant community
