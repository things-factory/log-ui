import { html } from 'lit-html'
import { store, navigate } from '@things-factory/shell'
import { ADD_MORENDA } from '@things-factory/more-base'

export default function bootstrap() {
  store.dispatch({
    type: ADD_MORENDA,
    morenda: {
      icon: html`
        <mwc-icon>ballot</mwc-icon>
      `,
      name: html`
        <i18n-msg msgid="text.logs"></i18n-msg>
      `,
      action: () => {
        navigate('logs')
      }
    }
  })
}
