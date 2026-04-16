# CFL Commute Card

[![HACS Badge](https://img.shields.io/badge/HACS-Frontend-41BDF5.svg)](https://github.com/hacs/integration)
[![GitHub Release](https://img.shields.io/github/release/ogerardin/lovelace-cfl-commute-card.svg?style=flat-square)](https://github.com/ogerardin/lovelace-cfl-commute-card/releases)
[![License](https://img.shields.io/github/license/ogerardin/lovelace-cfl-commute-card.svg?style=flat-square)](LICENSE)

A custom Lovelace card for Home Assistant that displays CFL (Luxembourg Railways) train departures in a realistic station departure board style. Designed to work with the [CFL Commute](https://github.com/ogerardin/ha-cfl-commute) integration.

For full, compact, and next-train-only views, use the [original lovelace-my-rail-commute-card](https://github.com/adamf83/lovelace-my-rail-commute-card) which also works with CFL integration data.

![CFL Commute Card](screenshots/full-view.png)

## Features

- **Station Departure Board**: Realistic CFL-style LED departure board with current time
- **Real Train Destinations**: Shows each train's actual destination from the `direction` field
- **Calling Points**: Displays intermediate stops as bullet-separated list
- **Delay Information**: Yellow highlighted expected times for delayed trains
- **Cancelled Trains**: Yellow strikethrough on scheduled time with "Train supprimé" label
- **Disruption Banner**: Color-coded disruption alerts (minor, major, severe, critical)
- **Interactive**: Tap for more info, long-press to refresh
- **Return Journey**: Toggle button to switch between outbound and return journeys

## Requirements

- Home Assistant 2024.1.0 or higher
- [CFL Commute](https://github.com/ogerardin/ha-cfl-commute) integration v1.8.1+ (for calling points and expected departure data)
- [HACS](https://www.hacs.xyz/docs/use/) (recommended for easy installation)

## Installation

### Via HACS (Recommended)
1. Open HACS
2. Click on "⋮" (top right), then "Custom repositories"
3. Fill in as follows:
    - Repository: `https://github.com/ogerardin/lovelace-cfl-commute-card`
    - Type: 'Dashboard'
4. Click "ADD"; after a few seconds the new integration appears under the "New" heading
5. Click on "⋮", then "Download"
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

## Usage

See [USAGE.md](USAGE.md) for detailed configuration options.

## Other View Modes

This card provides the departure board view only. For other view modes (full, compact, next-only), use the [lovelace-my-rail-commute-card](https://github.com/adamf83/lovelace-my-rail-commute-card) by adamf83, which is compatible with CFL integration data.

## Related Projects

- [HA CFL Commute](https://github.com/ogerardin/ha-cfl-commute) - The integration this card is designed for
- [lovelace-my-rail-commute-card](https://github.com/adamf83/lovelace-my-rail-commute-card) - The original UK Rail card with full/compact/next-only views

---

Made with ❤️ for the Home Assistant community