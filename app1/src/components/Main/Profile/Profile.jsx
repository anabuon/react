// import styles from "./Profile.module.scss";
import Home from './Home'
import About from './About'

const Profile = ({ fullName, position, info }) => {
  return (
    <>
      <Home fullName={fullName} position={position} />
      <About info={info} />
    </>
  )
}

export default Profile
