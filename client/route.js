export default function route(page) {
  switch (page) {
    case 'log-ui-main':
      import('./pages/main')
      return page
    case 'logs':
      import('./pages/logs')
      return page
  }
}
