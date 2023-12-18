import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './navigation.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase.utils';

export default function Navigation() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  console.log(currentUser);

  const signOuthandler = async () => {
    await signOutUser();
    // @ts-ignore
    setCurrentUser(null);
  };

  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <Logo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          {currentUser ? (
            <span className='nav-link' onClick={signOuthandler}>
              Sign Out
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
}
