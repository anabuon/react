import { useSelector } from 'react-redux';
import Profile from './Profile';

const ProfileContainer = () => {
	const profile = useSelector(state => state.profile)
	return <Profile {...profile} />;
};

export default ProfileContainer;
