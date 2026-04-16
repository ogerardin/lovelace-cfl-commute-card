import { LitElement, html, css } from 'lit';

class CflCommuteCardEditor extends LitElement {
  static get properties() {
    return {
      hass: { type: Object },
      _config: { type: Object }
    };
  }

  static get styles() {
    return css`
      .card-config {
        padding: 16px;
      }

      .option {
        margin-bottom: 16px;
      }

      .section-header {
        font-size: 1.1rem;
        font-weight: 600;
        margin: 24px 0 12px 0;
        padding-bottom: 8px;
        border-bottom: 1px solid var(--divider-color);
      }

      .section-header:first-child {
        margin-top: 0;
      }

      ha-textfield {
        width: 100%;
      }

      .switches {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      ha-formfield {
        display: block;
        padding: 8px 0;
      }

      .info {
        font-size: 0.9rem;
        color: var(--secondary-text-color);
        margin-top: 4px;
      }

      .native-select-label {
        display: block;
        font-size: 0.75rem;
        color: var(--secondary-text-color);
        margin-bottom: 4px;
      }

      .native-select-container {
        position: relative;
        width: 100%;
      }

      .native-select-container select {
        width: 100%;
        height: 56px;
        padding: 0 36px 0 16px;
        border: 1px solid var(--divider-color, rgba(0,0,0,0.38));
        border-radius: 4px;
        background: transparent;
        color: var(--primary-text-color);
        font-size: 1rem;
        font-family: inherit;
        cursor: pointer;
        -webkit-appearance: none;
        appearance: none;
        box-sizing: border-box;
      }

      .native-select-container select:hover {
        border-color: var(--primary-text-color);
      }

      .native-select-container select:focus {
        outline: none;
        border-color: var(--primary-color);
        border-width: 2px;
        padding: 0 35px 0 15px;
      }

      .native-select-container::after {
        content: '';
        position: absolute;
        right: 13px;
        top: 50%;
        transform: translateY(-50%);
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 6px solid var(--secondary-text-color, rgba(0,0,0,0.54));
        pointer-events: none;
      }
    `;
  }

  setConfig(config) {
    this._config = { ...config };
    this.requestUpdate();
  }

  set hass(hass) {
    this._hass = hass;
    this.requestUpdate();
  }

  get hass() {
    return this._hass;
  }

  _filterSummaryEntities(entity) {
    const entityInfo = this._hass.states[entity.entity_id];
    if (entityInfo?.attributes?.integration === 'cfl_commute') {
      return true;
    }
    const entityId = entity.entity_id.toLowerCase();
    return entityId.endsWith('_summary') ||
           entityId.includes('commute') ||
           entityId.includes('cfl');
  }

  render() {
    if (!this._hass || !this._config) {
      return html``;
    }

    return html`
      <div class="card-config">
        <div class="section-header">Configuration</div>

        <div class="option">
          <ha-entity-picker
            label="Summary Entity (Required)"
            .hass=${this._hass}
            .value=${this._config.entity || ''}
            .includeDomains=${['sensor']}
            .entityFilter=${this._filterSummaryEntities.bind(this)}
            @value-changed=${this._entityChanged}
            allow-custom-entity
          ></ha-entity-picker>
          <div class="info">Select your CFL Commute summary sensor (from cfl_commute integration)</div>
        </div>

        <div class="option">
          <ha-textfield
            label="Title (Optional)"
            .value=${this._config.title || ''}
            @input=${this._titleChanged}
          ></ha-textfield>
        </div>

        <div class="option">
          <ha-entity-picker
            label="Status Sensor (Optional)"
            .hass=${this._hass}
            .value=${this._config.status_entity || ''}
            .includeDomains=${['sensor']}
            @value-changed=${this._statusEntityChanged}
            allow-custom-entity
          ></ha-entity-picker>
          <div class="info">Sensor for disruption banner. Expected states: Normal, Minor Delays, Major Delays, Severe Disruption, Critical. Auto-discovered if not set.</div>
        </div>

        <div class="section-header">Filtering</div>

        <div class="switches">
          <ha-formfield label="Hide On-Time Trains">
            <ha-switch
              .checked=${this._config.hide_on_time_trains === true}
              @change=${this._toggleChanged('hide_on_time_trains')}
            ></ha-switch>
          </ha-formfield>

          <ha-formfield label="Only Show When Disrupted">
            <ha-switch
              .checked=${this._config.only_show_disrupted === true}
              @change=${this._toggleChanged('only_show_disrupted')}
            ></ha-switch>
          </ha-formfield>
        </div>

        <div class="option">
          <ha-textfield
            label="Minimum Delay to Show (minutes)"
            type="number"
            min="0"
            .value=${this._config.min_delay_to_show || 0}
            @input=${this._minDelayChanged}
          ></ha-textfield>
          <div class="info">Only show trains delayed by at least this many minutes (0 = show all)</div>
        </div>

        <div class="section-header">Advanced</div>

        <div class="switches">
          <ha-formfield label="Auto Refresh">
            <ha-switch
              .checked=${this._config.auto_refresh !== false}
              @change=${this._toggleChanged('auto_refresh')}
            ></ha-switch>
          </ha-formfield>
        </div>

        <div class="option">
          <ha-textfield
            label="Refresh Interval (seconds)"
            type="number"
            min="10"
            max="600"
            .value=${this._config.refresh_interval || 60}
            @input=${this._refreshIntervalChanged}
          ></ha-textfield>
        </div>

        <div class="section-header">Interaction</div>

        <div class="option">
          <span class="native-select-label">Tap Action</span>
          <div class="native-select-container">
            <select @change=${this._tapActionChanged}>
              <option value="more-info" ?selected=${(this._config.tap_action?.action || 'more-info') === 'more-info'}>Show More Info</option>
              <option value="url" ?selected=${(this._config.tap_action?.action || 'more-info') === 'url'}>Open URL</option>
              <option value="navigate" ?selected=${(this._config.tap_action?.action || 'more-info') === 'navigate'}>Navigate</option>
              <option value="none" ?selected=${(this._config.tap_action?.action || 'more-info') === 'none'}>None</option>
            </select>
          </div>
        </div>

        ${this._config.tap_action?.action === 'url' ? html`
          <div class="option">
            <ha-textfield
              label="URL Path"
              .value=${this._config.tap_action?.url_path || ''}
              @input=${this._urlPathChanged}
            ></ha-textfield>
          </div>
        ` : ''}

        ${this._config.tap_action?.action === 'navigate' ? html`
          <div class="option">
            <ha-textfield
              label="Navigation Path"
              .value=${this._config.tap_action?.navigation_path || ''}
              @input=${this._navigationPathChanged}
            ></ha-textfield>
          </div>
        ` : ''}

        <div class="option">
          <span class="native-select-label">Hold Action</span>
          <div class="native-select-container">
            <select @change=${this._holdActionChanged}>
              <option value="refresh" ?selected=${(this._config.hold_action?.action || 'refresh') === 'refresh'}>Refresh Data</option>
              <option value="more-info" ?selected=${(this._config.hold_action?.action || 'refresh') === 'more-info'}>Show More Info</option>
              <option value="none" ?selected=${(this._config.hold_action?.action || 'refresh') === 'none'}>None</option>
            </select>
          </div>
        </div>
      </div>
    `;
  }

  _entityChanged(ev) {
    if (!this._config || !this._hass) return;
    this._config = { ...this._config, entity: ev.detail.value };
    this._fireConfigChanged();
  }

  _titleChanged(ev) {
    if (!this._config || !this._hass) return;
    this._config = { ...this._config, title: ev.target.value };
    this._fireConfigChanged();
  }

  _toggleChanged(key) {
    return (ev) => {
      if (!this._config || !this._hass) return;
      this._config = { ...this._config, [key]: ev.target.checked };
      this._fireConfigChanged();
    };
  }

  _minDelayChanged(ev) {
    if (!this._config || !this._hass) return;
    const value = parseInt(ev.target.value, 10) || 0;
    this._config = { ...this._config, min_delay_to_show: value };
    this._fireConfigChanged();
  }

  _statusEntityChanged(ev) {
    if (!this._config || !this._hass) return;
    this._config = { ...this._config, status_entity: ev.detail.value };
    this._fireConfigChanged();
  }

  _refreshIntervalChanged(ev) {
    if (!this._config || !this._hass) return;
    const value = parseInt(ev.target.value, 10) || 60;
    this._config = { ...this._config, refresh_interval: value };
    this._fireConfigChanged();
  }

  _tapActionChanged(ev) {
    if (!this._config || !this._hass) return;
    this._config = { ...this._config, tap_action: { action: ev.target.value } };
    this._fireConfigChanged();
  }

  _urlPathChanged(ev) {
    if (!this._config || !this._hass) return;
    this._config = { ...this._config, tap_action: { ...this._config.tap_action, url_path: ev.target.value } };
    this._fireConfigChanged();
  }

  _navigationPathChanged(ev) {
    if (!this._config || !this._hass) return;
    this._config = { ...this._config, tap_action: { ...this._config.tap_action, navigation_path: ev.target.value } };
    this._fireConfigChanged();
  }

  _holdActionChanged(ev) {
    if (!this._config || !this._hass) return;
    this._config = { ...this._config, hold_action: { action: ev.target.value } };
    this._fireConfigChanged();
  }

  _fireConfigChanged() {
    const event = new CustomEvent('config-changed', {
      detail: { config: this._config },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }
}

customElements.define('cfl-commute-card-editor', CflCommuteCardEditor);

export default CflCommuteCardEditor;