import { i18next, localize } from '@things-factory/i18n-base'
import { client } from '@things-factory/shell'
import gql from 'graphql-tag'
import { css, html, LitElement } from 'lit-element'

class LogDetail extends localize(i18next)(LitElement) {
  static get properties() {
    return {
      log: Object,
      logName: String,
      logDetail: String
    }
  }

  static get styles() {
    return [
      css`
        :host {
          display: flex;
          flex-direction: column;
          background-color: #fff;
        }

        input {
          display: flex;
          width: 100%;
        }

        .CodeMirror {
          font-family: monospace;
          height: 95%;
          color: black;
          direction: ltr;
      }
      `
    ]
  }

  render() {
    return html`
      <!--<label>${i18next.t('label.name')}</label>-->
      <input value="${this.logName}"/>
      <things-editor-code id="log-txt" value="${this.logDetail}"></things-editor-code>
    `
    // @keypress="${this._handleLogNameKeyPress.bind(this)}"
    // @change="${this.queryLogDetail(this)}"/>
  }

  firstUpdated() {
    console.log(this.log)
    this.logName = this.log.name

    this.queryLogDetail()
  }

  // _handleLogNameKeyPress(e) {
  //   if (e.key == 'Enter') {
  //     queryLogDetail()
  //   }
  // }

  async queryLogDetail() {
    if (!this.logName) {
      return
    }

    const response = await client.query({
      query: gql`
        query {
          log(name: "${this.logName}") {
            text
          }
        }
      `
    })

    this.logDetail = response.data && response.data.log && response.data.log.text
    return this.logDetail
  }
}

window.customElements.define('log-detail', LogDetail)