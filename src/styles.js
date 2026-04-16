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
    background: #b71c1c;
    color: #ffcc00;
    font-family: 'Courier New', Courier, monospace;
    letter-spacing: 1px;
    border-left-color: rgba(0, 0, 0, 0.4);
  }

  ha-card.departure-board .disruption-banner.disruption-minor {
    background: #e65100;
    color: #ffcc00;
  }

  ha-card.departure-board .disruption-banner.disruption-major {
    background: #bf360c;
    color: #ffcc00;
  }

  ha-card.departure-board .disruption-banner.disruption-severe {
    background: #b71c1c;
    color: #ffcc00;
  }

  ha-card.departure-board .disruption-banner.disruption-critical {
    background: #4a0000;
    color: #ffcc00;
  }

  ha-card.departure-board .disruption-icon {
    color: #ffcc00;
  }

  ha-card.departure-board .disruption-chevron {
    color: rgba(255, 204, 0, 0.7);
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
    height: 60px;
    box-sizing: border-box;
  }

  .board-header-row .col-time {
    font-size: 1.5rem;
    color: #ffffff;
    width: 20%;
  }

  .board-header-row .col-title {
    font-size: 1.8rem;
    color: #ffffff;
    text-align: center;
    font-weight: 700;
    letter-spacing: 2px;
    width: 60%;
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
    padding: 12px 16px;
    cursor: pointer;
    transition: background-color 0.2s ease;
    box-sizing: border-box;
    min-height: 60px;
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
    font-size: 1rem;
    margin-top: 2px;
  }

  .board-row .row-time {
    width: 10%;
    display: flex;
    align-items: flex-start;
    font-size: 1.4rem;
    color: #ffffff;
  }

  .board-row .row-expected {
    width: 7%;
    display: flex;
    align-items: flex-start;
    font-size: 1.4rem;
    color: #ffcc00;
  }

  .board-row .row-dest {
    width: 65%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-right: 12px;
  }

  .board-row .row-dest .destination {
    font-size: 1.4rem;
    color: #ffffff;
    font-weight: 700;
  }

  .board-row .row-dest .calling-stations {
    font-size: 1rem;
    color: #ffffff;
    margin-top: 2px;
    white-space: normal;
    word-wrap: break-word;
  }

  .board-row .row-dest .delay-reason {
    font-size: 1rem;
    color: #ffcc00;
    margin-top: 2px;
  }

  .board-row .row-train {
    width: 10%;
    display: flex;
    flex-direction: column;
  }

  .board-row .row-train .category {
    font-size: 1.4rem;
    color: #ffffff;
  }

  .board-row .row-train .number {
    font-size: 1rem;
    color: #ffffff;
  }

  .board-row .row-platform {
    width: 8%;
    text-align: right;
    font-size: 1.4rem;
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