import route from './client/route'
import bootstrap from './client/bootstrap'

export default {
  route,
  routes: [
    {
      tagname: 'log-ui-main',
      page: 'log-ui-main'
    },
    {
      tagname: 'logs-page',
      page: 'logs'
    }
  ],
  bootstrap
}
