import './App.css'
import Main from './Main/Main'
import Header from './Header/Header'
import Footer from './Footer/Footer'

function App({ userData }) {
  return (
    <>
      <Header user={userData.user} />
      <Main avatar={userData.avatar} />
      <Footer />
    </>
  )
}

export default App
