import { html } from 'lit-element'
import { connect } from 'pwa-helpers/connect-mixin.js'
import { store, PageView } from '@things-factory/shell'

import logo from '../../assets/images/hatiolab-logo.png'

class LogUiMain extends connect(store)(PageView) {
  static get properties() {
    return {
      logUi: String
    }
  }
  render() {
    return html`
      <section>
        <h2>LogUi</h2>
        <img src=${logo}></img>
      </section>
    `
  }

  stateChanged(state) {
    this.logUi = state.logUi.state_main
  }
}

window.customElements.define('log-ui-main', LogUiMain)
