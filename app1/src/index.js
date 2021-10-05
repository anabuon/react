import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import { App } from './components'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'

// const store = {
//   user: {
//     firstName: 'ATTACK ON',
//     lastName: 'TITAN',
//   },
//   avatar: {
//     image:
//       'https://avatanplus.ru/files/resources/original/56ee322955b3a1539273f187.png',
//     alt: 'logo',
//   },
// }

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)
reportWebVitals()
