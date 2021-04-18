import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import { App } from './components'
import reportWebVitals from './reportWebVitals'
const store = {
  user: {
    firstName: 'ATTACK ON',
    lastName: 'TITAN',
  },
  avatar: {
    image:
      'https://avatanplus.ru/files/resources/original/56ee322955b3a1539273f187.png',
    alt: 'logo',
  },
}

ReactDOM.render(
  <React.StrictMode>
    <App data={store} />
  </React.StrictMode>,
  document.getElementById('root')
)
reportWebVitals()
