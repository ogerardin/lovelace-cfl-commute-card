# CFL Commute Card - Usage Guide

## Setup

### Configure your commutes
Install as described in https://github.com/ogerardin/hacs-cfl-commute/blob/main/README.md

Create at least one commute. This will create sensors like:
- `sensor.your_commute_name_summary`
- `sensor.your_commute_name_status`
- `sensor.your_commute_name_next_train`

### Add the Card to Your Dashboard

#### Visual Editor
1. Enter **Edit Dashboard** mode
2. Click **Add Card**
3. Search for "CFL Commute Card"
4. Select your summary entity
5. Configure options as desired
6. Save

#### YAML Configuration

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
