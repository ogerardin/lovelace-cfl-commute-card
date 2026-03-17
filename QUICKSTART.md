# Quick Start Guide

## Prerequisites

1. **Home Assistant** installed and running
2. **HACS** (Home Assistant Community Store) installed
3. **HACS CFL Commute** integration installed: https://github.com/ogerardin/hacs-cfl-commute

## Step 1: Install the Card

### Via HACS (Recommended)

1. Open Home Assistant
2. Navigate to **HACS** → **Frontend**
3. Click the **+** button
4. Search for "CFL Commute Card"
5. Click **Install**
6. Refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)

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

## Step 2: Configure the Integration

Before using the card, set up the CFL Commute integration:

1. Go to **Settings** → **Devices & Services**
2. Click **Add Integration**
3. Search for "CFL Commute"
4. Follow the setup wizard

This will create sensors like:
- `sensor.your_commute_name_summary`
- `sensor.your_commute_name_status`
- `sensor.your_commute_name_next_train`

## Step 3: Add the Card

### Visual Editor

1. Enter **Edit Dashboard** mode
2. Click **Add Card**
3. Search for "CFL Commute Card"
4. Select your summary entity
5. Configure options as desired
6. Save

### YAML Configuration

```yaml
type: custom:cfl-commute-card
entity: sensor.your_commute_summary
title: My Commute
```

## Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `entity` | string | Required | Your CFL Commute summary sensor |
| `title` | string | 'CFL Commute' | Card title |
| `view` | string | 'full' | View mode: full, compact, next-only, board |
| `theme` | string | 'auto' | Theme: auto, light, dark |
| `show_header` | boolean | true | Show card header |
| `show_route` | boolean | true | Show origin → destination |
| `show_platform` | boolean | true | Show platform numbers |
| `show_operator` | boolean | true | Show train operator |
| `show_calling_points` | boolean | false | Show calling points |
| `show_delay_reason` | boolean | true | Show delay reasons |
| `status_icons` | boolean | true | Show status icons (✓ ⚠ ✗) |

## Troubleshooting

### Card not showing
- Refresh browser cache (Ctrl+Shift+R)
- Verify resource is added correctly
- Check browser console for errors

### No trains displayed
- Verify CFL Commute integration is working
- Check entity exists in Developer Tools → States
- Ensure sensor has data in `all_trains` attribute

## Need Help?

- [Open an issue](https://github.com/ogerardin/lovelace-cfl-commute-card/issues)
