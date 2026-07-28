import { css } from 'lit';

export const styles = css`
  :host {
    --status-on-time: var(--custom-on-time-color, #4caf50);
    --status-minor-delay: var(--custom-minor-delay-color, #ff9800);
    --status-major-delay: var(--custom-major-delay-color, #f44336);
    --status-cancelled: var(--custom-cancelled-color, #d32f2f);
    --status-no-service: var(--custom-no-service-color, #9e9e9e);
    --status-unknown: #9e9e9e;

    --card-padding: 16px;
    --row-padding: 12px;
    --border-radius: 8px;

    display: block;
  }

  ha-card {
    padding: 0;
    overflow: hidden;
    position: relative;
  }

  /* ==================== HEADER ==================== */

  .card-header {
    padding: var(--card-padding);
    border-bottom: 1px solid var(--divider-color, #e0e0e0);
    background: var(--card-background-color, #fff);
  }

  .dev-marker {
    background: #ff4444;
    color: white;
    font-size: 0.6rem;
    font-weight: 700;
    padding: 1px 4px;
    border-radius: 3px;
    margin-left: 4px;
  }

  .header-content {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 1.2rem;
    font-weight: 500;
  }

  .header-title {
    flex: 1;
  }

  .route {
    margin-top: 4px;
    font-size: 0.9rem;
    color: var(--secondary-text-color, #757575);
  }

  .route.clickable-route {
    cursor: pointer;
  }

  .route.clickable-route:hover {
    filter: brightness(0.85);
  }

  .return-toggle {
    background: none;
    border: 1px solid var(--divider-color, #e0e0e0);
    border-radius: 50%;
    width: 32px;
    height: 32px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--secondary-text-color, #757575);
    padding: 0;
    margin-left: auto;
    flex-shrink: 0;
    transition: background 0.2s, color 0.2s, border-color 0.2s;
  }

  .return-toggle:hover {
    background: var(--secondary-background-color, #f5f5f5);
  }

  .return-toggle.active {
    background: var(--primary-color, #03a9f4);
    color: #fff;
    border-color: var(--primary-color, #03a9f4);
  }

  /* ==================== DISRUPTION BANNER ==================== */

  .disruption-banner {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px var(--card-padding);
    background: var(--status-major-delay);
    color: #fff;
    font-size: 0.9rem;
    font-weight: 500;
    border-left: 4px solid rgba(0, 0, 0, 0.25);
    transition: filter 0.15s ease;
  }

  .disruption-banner.disruption-minor {
    background: var(--status-minor-delay);
    border-left-color: rgba(0, 0, 0, 0.2);
  }

  .disruption-banner.disruption-major {
    background: #e65100;
    border-left-color: rgba(0, 0, 0, 0.25);
  }

  .disruption-banner.disruption-severe {
    background: var(--status-major-delay);
    border-left-color: rgba(0, 0, 0, 0.25);
  }

  .disruption-banner.disruption-critical {
    background: #7f0000;
    border-left-color: rgba(0, 0, 0, 0.35);
  }

  .disruption-banner.disruption-clickable {
    cursor: pointer;
  }

  .disruption-banner.disruption-clickable:hover {
    filter: brightness(1.1);
  }

  .disruption-icon {
    --mdc-icon-size: 22px;
    color: #fff;
    flex-shrink: 0;
  }

  .disruption-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .disruption-label {
    font-weight: 600;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.4px;
  }

  .disruption-message {
    font-size: 0.82rem;
    font-weight: 400;
    opacity: 0.9;
  }

  .disruption-chevron {
    --mdc-icon-size: 18px;
    color: rgba(255, 255, 255, 0.75);
    flex-shrink: 0;
  }

  ha-card.departure-board .disruption-banner {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 16px;
    background: #d4a017;
    color: #000000;
    font-size: 0.9rem;
    cursor: pointer;
    transition: filter 0.15s ease;
  }

  ha-card.departure-board .disruption-banner:hover {
    filter: brightness(0.9);
  }

  ha-card.departure-board .disruption-banner .disruption-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  ha-card.departure-board .disruption-banner .disruption-label {
    font-weight: 600;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.4px;
  }

  ha-card.departure-board .disruption-banner .disruption-message {
    font-size: 0.82rem;
    font-weight: 400;
  }

  /* ==================== CONTENT ==================== */

  .card-content {
    padding: 0;
  }

  /* ==================== DEPARTURE BOARD VIEW ==================== */

  ha-card.departure-board {
    background: #000000;
    color: #ffffff;
    font-family: Helvetica, Arial, sans-serif;
  }

  .board-content {
    padding: 0;
  }

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
    font-size: 1.1rem;
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

  .board-header-row .board-header-route.clickable-route {
    cursor: pointer;
  }

  .board-header-row .board-header-route.clickable-route:hover {
    filter: brightness(1.2);
  }

  .board-header-row .col-logo {
    width: 20%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    overflow: visible;
  }

  .board-header-row .col-logo ha-icon {
    --mdc-icon-size: 32px;
    color: #ffffff;
  }

  .board-header-row .col-logo svg {
    height: 36px;
    width: auto;
    max-width: 100%;
    display: block;
  }

  .board-row {
    display: flex;
    align-items: flex-start;
    padding: 10px 16px;
    cursor: pointer;
    transition: background-color 0.2s ease;
    box-sizing: border-box;
    height: 106px;
  }

  .board-row-even {
    background: #00045A;
  }

  .board-row-odd {
    background: #010EA0;
  }

  .board-row:hover {
    filter: brightness(1.2);
  }

  .board-row.cancelled .row-time {
    color: #ffcc00;
    text-decoration: line-through;
  }

  .board-row.cancelled .cancelled-label {
    color: #ffcc00;
    font-size: 0.85rem;
    margin-top: 2px;
  }

  .board-row .row-time {
    width: 10%;
    min-width: max-content;
    flex-shrink: 0;
    display: flex;
    align-items: flex-start;
    font-size: 1.1rem;
    color: #ffffff;
    margin-right: 12px;
  }

  .board-row .row-expected {
    width: 7%;
    min-width: max-content;
    flex-shrink: 0;
    display: flex;
    align-items: flex-start;
    font-size: 1.1rem;
    color: #ffcc00;
    margin-right: 12px;
  }

  .board-row .row-dest {
    width: 65%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-right: 12px;
  }

  .board-row .row-dest .destination {
    font-size: 1.1rem;
    color: #ffffff;
    font-weight: 700;
  }

  .board-row .row-dest .calling-points-zone {
    overflow: hidden;
    height: 42px;
    margin-top: 1px;
  }

  .board-row .row-dest .calling-points-scroll {
    font-size: 0.85rem;
    line-height: 14px;
    color: #ffffff;
    word-wrap: break-word;
    white-space: normal;
  }

  .board-row .row-dest .calling-points-scroll div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .board-row .row-dest .delay-reason {
    font-size: 0.85rem;
    color: #ffcc00;
    margin-top: 1px;
    line-height: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .board-row .row-train {
    width: 10%;
    display: flex;
    flex-direction: column;
  }

  .board-row .row-train .category {
    font-size: 1.1rem;
    color: #ffffff;
  }

  .board-row .row-train .number {
    font-size: 0.85rem;
    color: #ffffff;
  }

  .board-row .row-platform {
    width: 8%;
    min-width: max-content;
    flex-shrink: 0;
    text-align: right;
    font-size: 1.1rem;
    color: #ffffff;
  }

  /* ==================== EMPTY STATE ==================== */

  .card-content.empty {
    padding: 48px var(--card-padding);
    text-align: center;
  }

  .empty-icon {
    --mdc-icon-size: 64px;
    color: var(--disabled-text-color, #bdbdbd);
    margin-bottom: 16px;
  }

  .empty-message {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 8px;
    color: var(--primary-text-color, #212121);
  }

  .empty-submessage {
    font-size: 0.9rem;
    color: var(--secondary-text-color, #757575);
  }

  /* ==================== LOADING STATE ==================== */

  .card-content.loading {
    padding: 48px var(--card-padding);
    text-align: center;
  }

  .loading-spinner {
    display: inline-block;
    width: 40px;
    height: 40px;
    border: 4px solid var(--divider-color, #e0e0e0);
    border-top-color: var(--primary-color, #03a9f4);
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .loading-message {
    margin-top: 16px;
    font-size: 0.9rem;
    color: var(--secondary-text-color, #757575);
  }

  /* ==================== REFRESH TOAST ==================== */

  .refresh-toast {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 12px 24px;
    border-radius: 24px;
    font-size: 0.9rem;
    animation: fadeInOut 2s ease-in-out;
    pointer-events: none;
    z-index: 1000;
  }

  @keyframes fadeInOut {
    0% { opacity: 0; }
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { opacity: 0; }
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-16px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  /* ==================== HISTORY PANEL (Departure Board) ==================== */

  ha-card.departure-board .card-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6px 16px;
    background: #00045A;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    min-height: 32px;
  }

  ha-card.departure-board .history-toggle {
    background: none;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    width: 28px;
    height: 28px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(255, 255, 255, 0.6);
    padding: 0;
    margin-left: auto;
    flex-shrink: 0;
    transition: background 0.2s, color 0.2s, border-color 0.2s;
  }

  ha-card.departure-board .history-toggle:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #ffffff;
  }

  ha-card.departure-board .history-toggle.active {
    background: #010EA0;
    color: #4fc3f7;
    border-color: #4fc3f7;
  }

  ha-card.departure-board .history-panel {
    padding: 12px 16px;
    background: #00045A;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
  }

  ha-card.departure-board .history-empty {
    text-align: center;
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.85rem;
    padding: 16px 0;
  }

  ha-card.departure-board .history-kpis {
    display: flex;
    gap: 8px;
    margin-bottom: 12px;
    flex-wrap: wrap;
  }

  ha-card.departure-board .kpi-pill {
    flex: 1;
    min-width: 60px;
    text-align: center;
    padding: 8px 4px;
    border-radius: 6px;
    font-size: 0.75rem;
    display: flex;
    flex-direction: column;
    gap: 4px;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  ha-card.departure-board .kpi-pill .kpi-value {
    font-size: 1.1rem;
    font-weight: 700;
  }

  ha-card.departure-board .kpi-pill .kpi-label {
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    opacity: 0.8;
  }

  ha-card.departure-board .kpi-pill.kpi-good {
    background: rgba(76, 175, 80, 0.2);
    border-color: #4caf50;
    color: #81c784;
  }

  ha-card.departure-board .kpi-pill.kpi-moderate {
    background: rgba(255, 152, 0, 0.2);
    border-color: #ff9800;
    color: #ffb74d;
  }

  ha-card.departure-board .kpi-pill.kpi-poor {
    background: rgba(244, 67, 54, 0.2);
    border-color: #f44336;
    color: #e57373;
  }

  ha-card.departure-board .kpi-pill.kpi-neutral {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.15);
    color: rgba(255, 255, 255, 0.6);
  }

  ha-card.departure-board .history-days {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(44px, 1fr));
    gap: 4px;
    margin-bottom: 12px;
  }

  ha-card.departure-board .day-sq {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4px 2px;
    border-radius: 4px;
    font-size: 0.65rem;
    cursor: default;
    border: 1px solid rgba(255, 255, 255, 0.08);
    min-width: 0;
  }

  ha-card.departure-board .day-sq .day-sq-label {
    font-size: 0.6rem;
    text-transform: uppercase;
    opacity: 0.7;
  }

  ha-card.departure-board .day-sq .day-sq-pct {
    font-size: 0.7rem;
    font-weight: 600;
  }

  ha-card.departure-board .day-sq.day-sq-good {
    background: rgba(76, 175, 80, 0.25);
    border-color: #4caf50;
    color: #81c784;
  }

  ha-card.departure-board .day-sq.day-sq-moderate {
    background: rgba(255, 152, 0, 0.25);
    border-color: #ff9800;
    color: #ffb74d;
  }

  ha-card.departure-board .day-sq.day-sq-poor {
    background: rgba(244, 67, 54, 0.25);
    border-color: #f44336;
    color: #e57373;
  }

  ha-card.departure-board .day-sq.day-sq-nodata {
    background: rgba(255, 255, 255, 0.03);
    border-color: rgba(255, 255, 255, 0.06);
    color: rgba(255, 255, 255, 0.3);
  }

  ha-card.departure-board .history-bestworst {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    font-size: 0.75rem;
  }

  ha-card.departure-board .history-best {
    color: #81c784;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  ha-card.departure-board .history-best ha-icon {
    --mdc-icon-size: 14px;
  }

  ha-card.departure-board .history-worst {
    color: #e57373;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  ha-card.departure-board .history-worst ha-icon {
    --mdc-icon-size: 14px;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }

  @media (max-width: 600px) {
    .board-row > span {
      padding: 6px 8px;
      font-size: 0.85rem;
    }
  }
`;