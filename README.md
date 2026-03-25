# CFL Commute Card

[![HACS Badge](https://img.shields.io/badge/HACS-Frontend-41BDF5.svg)](https://github.com/hacs/integration)
[![GitHub Release](https://img.shields.io/github/release/ogerardin/lovelace-cfl-commute-card.svg?style=flat-square)](https://github.com/ogerardin/lovelace-cfl-commute-card/releases)
[![License](https://img.shields.io/github/license/ogerardin/lovelace-cfl-commute-card.svg?style=flat-square)](LICENSE)

A beautiful, feature-rich custom Lovelace card for Home Assistant that displays CFL (Luxembourg Railways) train departure information. Designed to work seamlessly with the [HACS CFL Commute](https://github.com/ogerardin/ha-cfl-commute) integration.

![CFL Commute Card](screenshots/full-view.png)

## Features

- **Multiple View Modes**: Full, Compact, Next-Only, and Departure Board views
- **Beautiful Design**: Mimics real railway station departure boards
- **Theme Support**: Auto, Light, and Dark themes
- **Customizable**: Show/hide platform, operator, calling points, delay reasons
- **Disruption Alerts**: Banner showing service disruptions
- **Interactive**: Tap for more info, hold to refresh

## Requirements

- Home Assistant 2024.1.0 or higher
- [HA CFL Commute](https://github.com/ogerardin/ha-cfl-commute) integration installed
- (optionnal, recommended for easy installation): [HACS](https://www.hacs.xyz/docs/use/)

## Installation

### Via HACS (Recommended)
1. Open HACS
2. Click on "⋮" (top right), then "Custom repositories"
3. Fill in as follows:
    - Repository: `https://github.com/ogerardin/lovelace-cfl-commute-card`
    - Type: 'Dashboard'
4. Click "ADD"; after a few seconds the new integration appears under the "New" heading
5. Click on "⋮"  , then "Download"
6. Accept the suggestion to refresh your browser

### Manual Installation

1. Download the latest `cfl-commute-card.js` from [Releases](https://github.com/ogerardin/lovelace-cfl-commute-card/releases)
2. Copy the file to `/config/www/cfl-commute-card.js`
3. Add to your `configuration.yaml`:

```yaml
resources:
  - url: /local/cfl-commute-card.js
    type: module
```

4. Restart Home Assistant

## Related Projects

- [HA CFL Commute](https://github.com/ogerardin/ha-cfl-commute) - The integration this card is designed for
- [lovelace-my-rail-commute-card](https://github.com/adamf83/lovelace-my-rail-commute-card) - The inspiration for this card (UK Rail version)

---

Made with ❤️ for the Home Assistant community
