import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('ha-hyperion-apr16-card')
export class HaHyperionApr16Card extends LitElement {
  @property({ attribute: false }) public hass: any;
  @property({ type: Object }) private config: any;

  // Local UI state for tab/menu switching and info modal
  @state() private activeMenu: 'main' | 'config' | 'system' = 'main';
  @state() private showInfoModal: boolean = false;
  private customChannelLayout: string = '7.3.6';

  public setConfig(config: any): void {
    if (!config.entity) {
      throw new Error('Please define a media_player entity');
    }
    this.config = config;
    if (config.channel_layout || config.channels) {
      this.customChannelLayout = config.channel_layout || config.channels;
    }
  }

  public getCardSize(): number {
    return 5;
  }

  private _togglePower(): void {
    const stateObj = this.hass.states[this.config.entity];
    const isOnline = stateObj?.state !== 'unavailable' && stateObj.state !== 'off';
    this.hass.callService('media_player', isOnline ? 'turn_off' : 'turn_on', {
      entity_id: this.config.entity,
    });
  }

  private _toggleMute(): void {
    const stateObj = this.hass.states[this.config.entity];
    const isMuted = stateObj?.attributes?.is_volume_muted ?? false;
    this.hass.callService('media_player', 'volume_mute', {
      entity_id: this.config.entity,
      is_volume_muted: !isMuted,
    });
  }

  private _setVolume(e: Event): void {
    const val = parseFloat((e.target as HTMLInputElement).value);
    this.hass.callService('media_player', 'volume_set', {
      entity_id: this.config.entity,
      volume_level: val,
    });
  }

  private _selectSource(e: Event): void {
    const source = (e.target as HTMLSelectElement).value;
    this.hass.callService('media_player', 'select_source', {
      entity_id: this.config.entity,
      source: source,
    });
  }

  private _selectSoundMode(e: Event): void {
    const mode = (e.target as HTMLSelectElement).value;
    this.hass.callService('media_player', 'select_sound_mode', {
      entity_id: this.config.entity,
      sound_mode: mode,
    });
  }

  private _setCustomAttr(attrName: string, e: Event): void {
    const val = parseFloat((e.target as HTMLInputElement).value);
    this.hass.callService('hyperion_apr16', 'set_audio_config', {
      entity_id: this.config.entity,
      [attrName]: val,
    });
  }

  private _setBrightness(e: Event): void {
    const val = parseInt((e.target as HTMLInputElement).value, 10);
    this.hass.callService('hyperion_apr16', 'set_display_brightness', {
      entity_id: this.config.entity,
      brightness: val,
    });
  }

  private _rebootDevice(): void {
    if (confirm('Are you sure you want to reboot the AudioControl Hyperion APR-16?')) {
      this.hass.callService('hyperion_apr16', 'reboot', {
        entity_id: this.config.entity,
      });
    }
  }

  private _triggerHpd(): void {
    this.hass.callService('hyperion_apr16', 'trigger_hpd', {
      entity_id: this.config.entity,
    });
  }

  protected render() {
    if (!this.hass || !this.config) {
      return html``;
    }

    const stateObj = this.hass.states[this.config.entity];

    if (!stateObj) {
      return html`
        <ha-card style="padding: 16px; color: #ef4444; background: #12151c;">
          Entity not found: ${this.config.entity}
        </ha-card>
      `;
    }

    const attr = stateObj.attributes;
    const isOnline = stateObj.state !== 'unavailable' && stateObj.state !== 'off';
    const volumeDb = attr.volume_level_db ?? '-20.0';
    const volumeLevel = attr.volume_level ?? 0.5;
    const isMuted = attr.is_volume_muted ?? false;
    const activeInput = attr.source ?? 'HDMI 1';
    const audioMode = attr.sound_mode ?? 'DTS NEURAL:X';
    const availableSources = attr.source_list || ['HDMI 1', 'HDMI 2', 'eARC', 'Media', 'Analog'];
    const availableSoundModes = attr.sound_mode_list || ['DTS:NEURAL:X', 'Dolby Atmos', 'Native', 'Stereo Direct'];

    // System attributes & Info modal data
    const channelLayout = attr.channel_layout || attr.channels || this.customChannelLayout;
    const displayBrightness = attr.display_brightness ?? 100;
    const fwVersion = attr.firmware_version ?? 'v1.4.2-build88';
    const ipAddress = attr.ip_address ?? '192.168.1.150';
    const macAddress = attr.mac_address ?? '00:1A:2B:3C:4D:5E';
    const uptime = attr.uptime ?? '4 days, 12 hours';

    // Per-input config attributes (defaults to 0 if not set)
    const bass = attr.bass ?? 0;
    const treble = attr.treble ?? 0;
    const trim = attr.channel_trim ?? 0;
    const lipsync = attr.lipsync_delay ?? 0;

    return html`
      <ha-card class="hyperion-display">
        <!-- Info Modal Overlay -->
        ${this.showInfoModal ? html`
          <div class="info-modal">
            <div class="modal-header">
              <span>HARDWARE SYSTEM INFO</span>
              <button class="close-modal-btn" @click="${() => this.showInfoModal = false}">✕</button>
            </div>
            <div class="modal-body">
              <div class="info-row"><span>Device Model:</span> <strong>AudioControl Hyperion APR-16</strong></div>
              <div class="info-row"><span>Firmware Version:</span> <strong>${fwVersion}</strong></div>
              <div class="info-row"><span>Channel Layout:</span> <strong>${channelLayout}</strong></div>
              <div class="info-row"><span>IP Address:</span> <strong class="mono">${ipAddress}</strong></div>
              <div class="info-row"><span>MAC Address:</span> <strong class="mono">${macAddress}</strong></div>
              <div class="info-row"><span>System Uptime:</span> <strong>${uptime}</strong></div>
              <div class="info-row"><span>DSP Core:</span> <strong>SHARC Audio Engine (48kHz)</strong></div>
            </div>
            <div class="modal-footer">
              <button class="modal-action-btn" @click="${() => this.showInfoModal = false}">CLOSE</button>
            </div>
          </div>
        ` : ''}

        <div class="header">
          <span class="brand brand-clickable" @click="${() => this.showInfoModal = true}" title="Click for System Info">
            AUDIOCONTROL HYPERION APR-16 ℹ️
          </span>
          <div class="badges">
            <button class="badge-btn ${isOnline ? 'online' : 'offline'}" @click="${this._togglePower}" title="Click to toggle power">
              ${isOnline ? '🟢 ONLINE' : '🔴 OFFLINE'}
            </button>
            <span class="badge channel">${channelLayout}</span>
          </div>
        </div>

        <div class="nav-tabs">
          <button class="tab-btn ${this.activeMenu === 'main' ? 'active' : ''}" @click="${() => this.activeMenu = 'main'}">FRONT PANEL</button>
          <button class="tab-btn ${this.activeMenu === 'config' ? 'active' : ''}" @click="${() => this.activeMenu = 'config'}">AUDIO CONFIG</button>
          <button class="tab-btn ${this.activeMenu === 'system' ? 'active' : ''}" @click="${() => this.activeMenu = 'system'}">SYSTEM</button>
        </div>

        ${this.activeMenu === 'main' ? html`
          <div class="display-core">
            <div class="decoder-info">
              <span class="codec-tag">${audioMode}</span>
              <span class="sub-meta">Dirac Live ART Active • 48kHz</span>
            </div>

            <div class="volume-container">
              <div class="volume-header-row">
                <span class="section-label">MASTER VOLUME</span>
                <div class="volume-numeric">${volumeDb} <span class="unit">dB</span></div>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                .value="${volumeLevel}"
                @input="${this._setVolume}"
                class="hyperion-slider"
              />
            </div>

            <div class="status-row">
              <span class="source-indicator">ACTIVE INPUT: <strong>${activeInput}</strong></span>
              <button class="mute-btn ${isMuted ? 'active' : ''}" @click="${this._toggleMute}">
                ${isMuted ? '🔇 MUTE: ON' : '🔊 MUTE: OFF'}
              </button>
            </div>
          </div>

          <div class="selectors-grid">
            <div class="selector-group">
              <label>INPUT SOURCE</label>
              <select .value="${activeInput}" @change="${this._selectSource}">
                ${availableSources.map((src: string) => html`<option value="${src}" ?selected="${activeInput === src}">${src}</option>`)}
              </select>
            </div>

            <div class="selector-group">
              <label>AUDIO UPMIXER</label>
              <select .value="${audioMode}" @change="${this._selectSoundMode}">
                ${availableSoundModes.map((mode: string) => html`<option value="${mode}" ?selected="${audioMode === mode}">${mode}</option>`)}
              </select>
            </div>
          </div>
        ` : this.activeMenu === 'config' ? html`
          <div class="config-panel">
            <div class="config-title">PER-INPUT AUDIO CONFIGURATION</div>

            <div class="center-slider-group">
              <div class="slider-info"><span>BASS</span><span class="val">${bass > 0 ? `+${bass}` : bass} dB</span></div>
              <div class="slider-track-wrapper">
                <input type="range" min="-12" max="12" step="0.5" .value="${bass}" @input="${(e: Event) => this._setCustomAttr('bass', e)}" class="center-slider" />
                <div class="track-ticks">
                  <span class="tick"></span>
                  <span class="tick"></span>
                  <span class="tick center-tick"></span>
                  <span class="tick"></span>
                  <span class="tick"></span>
                </div>
              </div>
              <div class="slider-ticks"><span>-12dB</span><span>-6dB</span><span>0dB</span><span>+6dB</span><span>+12dB</span></div>
            </div>

            <div class="center-slider-group">
              <div class="slider-info"><span>TREBLE</span><span class="val">${treble > 0 ? `+${treble}` : treble} dB</span></div>
              <div class="slider-track-wrapper">
                <input type="range" min="-12" max="12" step="0.5" .value="${treble}" @input="${(e: Event) => this._setCustomAttr('treble', e)}" class="center-slider" />
                <div class="track-ticks">
                  <span class="tick"></span>
                  <span class="tick"></span>
                  <span class="tick center-tick"></span>
                  <span class="tick"></span>
                  <span class="tick"></span>
                </div>
              </div>
              <div class="slider-ticks"><span>-12dB</span><span>-6dB</span><span>0dB</span><span>+6dB</span><span>+12dB</span></div>
            </div>

            <div class="center-slider-group">
              <div class="slider-info"><span>CHANNEL TRIM</span><span class="val">${trim > 0 ? `+${trim}` : trim} dB</span></div>
              <div class="slider-track-wrapper">
                <input type="range" min="-12" max="12" step="0.5" .value="${trim}" @input="${(e: Event) => this._setCustomAttr('channel_trim', e)}" class="center-slider" />
                <div class="track-ticks">
                  <span class="tick"></span>
                  <span class="tick"></span>
                  <span class="tick center-tick"></span>
                  <span class="tick"></span>
                  <span class="tick"></span>
                </div>
              </div>
              <div class="slider-ticks"><span>-12dB</span><span>-6dB</span><span>0dB</span><span>+6dB</span><span>+12dB</span></div>
            </div>

            <div class="center-slider-group">
              <div class="slider-info"><span>LIPSYNC DELAY</span><span class="val">${lipsync} ms</span></div>
              <div class="slider-track-wrapper">
                <input type="range" min="0" max="250" step="5" .value="${lipsync}" @input="${(e: Event) => this._setCustomAttr('lipsync_delay', e)}" class="center-slider" />
                <div class="track-ticks">
                  <span class="tick"></span>
                  <span class="tick"></span>
                  <span class="tick center-tick"></span>
                  <span class="tick"></span>
                  <span class="tick"></span>
                </div>
              </div>
              <div class="slider-ticks"><span>0ms</span><span>62ms</span><span>125ms</span><span>187ms</span><span>250ms</span></div>
            </div>
          </div>
        ` : html`
          <div class="config-panel">
            <div class="config-title">SYSTEM MAINTENANCE & UTILITIES</div>

            <div class="center-slider-group">
              <div class="slider-info"><span>FRONT PANEL BRIGHTNESS</span><span class="val">${displayBrightness}%</span></div>
              <div class="slider-track-wrapper">
                <input type="range" min="0" max="100" step="10" .value="${displayBrightness}" @input="${this._setBrightness}" class="center-slider" />
                <div class="track-ticks">
                  <span class="tick"></span>
                  <span class="tick"></span>
                  <span class="tick"></span>
                  <span class="tick"></span>
                  <span class="tick"></span>
                </div>
              </div>
              <div class="slider-ticks"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span></div>
            </div>

            <div class="system-actions-grid">
              <button class="system-action-btn hpd-btn" @click="${this._triggerHpd}">
                ⚡ TRIGGER HPD
              </button>
              <button class="system-action-btn reboot-btn" @click="${this._rebootDevice}">
                🔄 SYSTEM REBOOT
              </button>
            </div>
          </div>
        `}
      </ha-card>
    `;
  }

  static styles = css`
    :host {
      display: block;
    }
    .hyperion-display {
      position: relative;
      background: linear-gradient(145deg, #12151c 0%, #0a0c10 100%);
      border: 1px solid #0066ff;
      border-radius: 16px;
      padding: 20px;
      color: #ffffff;
      font-family: var(--paper-font-common-base_-font-family, sans-serif);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6), inset 0 0 20px rgba(0, 165, 255, 0.05);
      overflow: hidden;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      padding-bottom: 12px;
      margin-bottom: 12px;
    }
    .brand {
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 1.5px;
      color: #94a3b8;
    }
    .brand-clickable {
      cursor: pointer;
      transition: color 0.2s;
    }
    .brand-clickable:hover {
      color: #00a5ff;
    }
    .badges {
      display: flex;
      gap: 8px;
    }
    .badge-btn {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.2);
      font-size: 10px;
      padding: 3px 8px;
      border-radius: 4px;
      font-weight: 600;
      cursor: pointer;
      color: #ffffff;
      transition: all 0.2s;
    }
    .badge-btn.online { background: rgba(16, 185, 129, 0.2); color: #34d399; border-color: rgba(52, 211, 153, 0.4); }
    .badge-btn.offline { background: rgba(239, 68, 68, 0.2); color: #fca5a5; border-color: rgba(239, 68, 68, 0.4); }
    .badge-btn:hover { opacity: 0.85; transform: scale(1.02); }
    .badge.channel { background: rgba(0, 165, 255, 0.15); color: #00a5ff; border: 1px solid rgba(0, 165, 255, 0.3); font-size: 10px; padding: 3px 8px; border-radius: 4px; font-weight: 600; display: inline-flex; align-items: center; }

    .nav-tabs {
      display: flex;
      gap: 6px;
      margin-bottom: 16px;
    }
    .tab-btn {
      flex: 1;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: #64748b;
      padding: 6px 0;
      border-radius: 6px;
      font-size: 9.5px;
      font-weight: 700;
      letter-spacing: 0.8px;
      cursor: pointer;
      transition: all 0.2s;
      text-align: center;
    }
    .tab-btn.active {
      background: rgba(0, 165, 255, 0.15);
      border-color: #00a5ff;
      color: #00a5ff;
    }

    .display-core {
      padding: 4px 0;
    }
    .decoder-info {
      text-align: center;
      margin-bottom: 16px;
    }
    .codec-tag {
      display: inline-block;
      color: #00a5ff;
      font-size: 16px;
      font-weight: 700;
      letter-spacing: 1px;
      text-shadow: 0 0 12px rgba(0, 165, 255, 0.5);
    }
    .sub-meta {
      display: block;
      font-size: 11px;
      color: #64748b;
      margin-top: 3px;
    }
    .volume-container {
      background: rgba(0, 0, 0, 0.25);
      border: 1px solid rgba(255, 255, 255, 0.06);
      border-radius: 12px;
      padding: 14px 16px;
      margin-bottom: 14px;
    }
    .volume-header-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
    }
    .section-label {
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 1px;
      color: #64748b;
    }
    .volume-numeric {
      font-size: 26px;
      font-weight: 800;
      color: #00a5ff;
      font-family: monospace;
      letter-spacing: -0.5px;
      text-shadow: 0 0 12px rgba(0, 165, 255, 0.3);
    }
    .unit {
      font-size: 14px;
      color: #ffffff;
      font-weight: 600;
    }
    .hyperion-slider {
      width: 100%;
      accent-color: #00a5ff;
      height: 6px;
      cursor: pointer;
      margin-top: 4px;
    }
    .status-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 14px;
      font-size: 12px;
      color: #94a3b8;
    }
    .status-row strong {
      color: #ffffff;
    }
    .mute-btn {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.15);
      color: #cbd5e1;
      padding: 6px 12px;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 600;
      font-size: 11px;
      transition: all 0.2s;
    }
    .mute-btn.active {
      background: rgba(239, 68, 68, 0.2);
      border-color: #ef4444;
      color: #fca5a5;
      box-shadow: 0 0 10px rgba(239, 68, 68, 0.2);
    }
    
    .selectors-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding-top: 14px;
    }
    .selector-group label {
      display: block;
      font-size: 10px;
      font-weight: 700;
      color: #64748b;
      margin-bottom: 6px;
      letter-spacing: 0.5px;
    }
    .selector-group select {
      width: 100%;
      background: rgba(0, 0, 0, 0.3);
      border: 1px solid rgba(255, 255, 255, 0.15);
      color: #ffffff;
      padding: 8px 10px;
      border-radius: 8px;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
      outline: none;
      transition: border-color 0.2s;
    }
    .selector-group select:hover, .selector-group select:focus {
      border-color: #00a5ff;
    }

    .config-panel {
      padding: 4px 0;
    }
    .config-title {
      font-size: 11px;
      font-weight: 700;
      color: #00a5ff;
      letter-spacing: 1px;
      margin-bottom: 14px;
      text-align: center;
    }
    .center-slider-group {
      background: rgba(0, 0, 0, 0.2);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 10px;
      padding: 10px 14px;
      margin-bottom: 10px;
    }
    .slider-info {
      display: flex;
      justify-content: space-between;
      font-size: 11px;
      font-weight: 700;
      color: #94a3b8;
      margin-bottom: 4px;
    }
    .slider-info .val {
      color: #00a5ff;
      font-family: monospace;
    }
    .slider-track-wrapper {
      position: relative;
      padding: 2px 0;
    }
    .center-slider {
      width: 100%;
      accent-color: #00a5ff;
      height: 5px;
      cursor: pointer;
      position: relative;
      z-index: 2;
      background: transparent;
    }
    .track-ticks {
      position: absolute;
      top: 50%;
      left: 6px;
      right: 6px;
      transform: translateY(-50%);
      display: flex;
      justify-content: space-between;
      pointer-events: none;
      z-index: 1;
    }
    .track-ticks .tick {
      width: 1px;
      height: 8px;
      background: rgba(255, 255, 255, 0.25);
    }
    .track-ticks .center-tick {
      height: 12px;
      background: #00a5ff;
      box-shadow: 0 0 6px rgba(0, 165, 255, 0.5);
    }
    .slider-ticks {
      display: flex;
      justify-content: space-between;
      font-size: 9px;
      color: #64748b;
      margin-top: 2px;
      padding: 0 2px;
    }

    .system-actions-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      margin-top: 14px;
    }
    .system-action-btn {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.15);
      color: #ffffff;
      padding: 12px;
      border-radius: 8px;
      font-size: 11px;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.2s;
      letter-spacing: 0.5px;
    }
    .system-action-btn:hover {
      border-color: #00a5ff;
      background: rgba(0, 165, 255, 0.1);
    }
    .reboot-btn:hover {
      border-color: #ef4444;
      background: rgba(239, 68, 68, 0.15);
      color: #fca5a5;
    }

    /* Info Modal Styling */
    .info-modal {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(10, 12, 16, 0.96);
      z-index: 20;
      border-radius: 16px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      backdrop-filter: blur(8px);
      animation: fadeIn 0.2s ease-in-out;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: scale(0.98); }
      to { opacity: 1; transform: scale(1); }
    }
    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      padding-bottom: 10px;
      font-size: 12px;
      font-weight: 800;
      letter-spacing: 1.5px;
      color: #00a5ff;
    }
    .close-modal-btn {
      background: none;
      border: none;
      color: #94a3b8;
      font-size: 16px;
      cursor: pointer;
    }
    .close-modal-btn:hover {
      color: #ffffff;
    }
    .modal-body {
      padding: 10px 0;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .info-row {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      color: #94a3b8;
      background: rgba(255, 255, 255, 0.02);
      padding: 8px 12px;
      border-radius: 6px;
      border: 1px solid rgba(255, 255, 255, 0.04);
    }
    .info-row strong {
      color: #ffffff;
    }
    .info-row .mono {
      font-family: monospace;
      color: #00a5ff;
    }
    .modal-footer {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding-top: 12px;
      text-align: center;
    }
    .modal-action-btn {
      width: 100%;
      background: rgba(0, 165, 255, 0.2);
      border: 1px solid #00a5ff;
      color: #00a5ff;
      padding: 10px;
      border-radius: 8px;
      font-size: 11px;
      font-weight: 700;
      cursor: pointer;
      letter-spacing: 1px;
      transition: all 0.2s;
    }
    .modal-action-btn:hover {
      background: rgba(0, 165, 255, 0.35);
      color: #ffffff;
    }
  `;
}

// Register with Home Assistant custom card picker
(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'ha-hyperion-apr16-card',
  name: 'Hyperion APR-16 Card',
  description: 'Custom front-panel display card for AudioControl Hyperion APR-16',
});