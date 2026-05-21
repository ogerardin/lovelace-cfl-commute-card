# Upstream Features — To Be Evaluated

Features from [adamf83/lovelace-my-rail-commute-card](https://github.com/adamf83/lovelace-my-rail-commute-card) that may or may not be ported.
These depart from the card's goal of providing a realistic CFL departure board display.

## 1. Journey Time Display

**Upstream commits:** `1979ded`, `6ff6795`

Show travel duration in each train row (e.g. "On time · 45m"). Adds `show_journey_time` config option, `calculateJourneyDuration()` utility, and `journey_time_approx` flag for estimated durations.

- Effort: Low
- Data: `journey_duration` attr already in card model; would need `calculateJourneyDuration()` and `journey_time_approx`
- Note: Real departure boards don't show journey time per train

## 2. History / Reliability Panel

**Upstream commits:** `4e60c60`, `b9b2d3d`, `15e6af9`

Expandable panel showing daily reliability, KPIs (on-time %), best/worst days, with dark-mode styles for board view.

- Effort: High (UI code + backend integration)
- Data: Requires `sensor.{base}_historical_reliability` and `sensor.{base}_historical_delays` sensors that `ha-cfl-commute` does not provide
- Note: No real departure board shows historical reliability data

## 3. Multi-Destination Grouping

**Upstream commit:** `383d113`

Group trains by destination with headers and status dots for "all departures from station X" sensors.

- Effort: Medium (board layout redesign for group headers)
- Data: Per-train `direction` exists; `multi_destination` entity attribute does not
- Note: Real departure boards show flat lists, not grouped views