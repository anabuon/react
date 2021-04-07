import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const store = {
  user: {
    firstName: 'Ana',
    lastName: 'Buon',
  },
  avatar: {
    image: 'https://img.icons8.com/ios/452/javascript.png',
    alt: 'JavaScript',
  },
}

ReactDOM.render(<App userData={store} />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
