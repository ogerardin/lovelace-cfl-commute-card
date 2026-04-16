# CFL Commute Card - Usage Guide

## Setup

### Configure your commutes
Install as described in https://github.com/ogerardin/ha-cfl-commute/blob/main/README.md

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

## View Modes

### Full View (default)
Shows all train details in a card format with origin → destination header, train times, platform, operator, and status.

### Compact View
A condensed view showing essential information in less space.

### Next-Only View
Shows only the next departing train with detailed information.

### Board View
A departure board styled like real CFL station displays:
- Current time with seconds in the header
- CFL logo
- Each train shows its actual destination (from the `direction` field)
- Delayed times shown in yellow
- Cancelled trains marked with "Train supprimé" and strikethrough
- Calling points (intermediate stops) displayed as bullet-separated list
- Alternating row colors (light/dark blue)

**Note:** Board view requires integration v1.8.0+ for full calling points and expected departure data.

## Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `entity` | string | Required | Your CFL Commute summary sensor |
| `title` | string | 'CFL Commute' | Card title |
| `view` | string | 'full' | View mode: full, compact, next-only, board |
| `font_size` | string | 'medium' | Font size: small, medium, large |
| `show_header` | boolean | true | Show card header |
| `show_route` | boolean | true | Show origin → destination |
| `show_platform` | boolean | true | Show platform numbers |
| `show_operator` | boolean | true | Show train operator |
| `show_calling_points` | boolean | false | Show calling points |
| `show_delay_reason` | boolean | true | Show delay reasons |
| `show_journey_time` | boolean | true | Show journey duration |
| `show_service_type` | boolean | true | Show service type (category) |
| `show_last_updated` | boolean | false | Show last updated timestamp |
| `status_icons` | boolean | true | Show status icons (✓ ⚠ ✗) |
| `show_animations` | boolean | true | Enable row animations |
| `max_calling_points` | number | 999 | Maximum number of calling points to display |
| `min_delay_to_show` | number | 0 | Minimum delay in minutes to show a train |
| `hide_on_time_trains` | boolean | false | Hide trains that are on time |
| `only_show_disrupted` | boolean | false | Only show trains with disruptions |
| `auto_refresh` | boolean | true | Auto-refresh data |
| `refresh_interval` | number | 60 | Refresh interval in seconds |

### Board View Example

```yaml
type: custom:cfl-commute-card
entity: sensor.morning_commute_summary
view: board
show_platform: true
max_calling_points: 10
```

## Troubleshooting

### Card not showing / Visual editor not supported
- Refresh browser cache (Ctrl+Shift+R)
- Verify resource is added correctly
- Check browser console for errors
- Ensure you're using the latest version of the card

### No trains displayed
- Verify CFL Commute integration is working
- Check entity exists in Developer Tools → States
- Ensure sensor has data in `all_trains` attribute

### Platform shows [object Object]
- Update to the latest card version (1.0.6+)
- The HAFAS API can sometimes return platform as an object; this is now handled correctly

### Board view shows commute destination instead of train destination
- Update the CFL Commute integration to v1.8.0+
- The `direction` field is required for per-train destinations

### Board view missing calling points
- Update the CFL Commute integration to v1.8.0+
- Calling points are now included in the summary sensor's `all_trains` attribute

## Need Help?

- [Open an issue](https://github.com/ogerardin/lovelace-cfl-commute-card/issues)