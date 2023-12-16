import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './navigation.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';

export default function Navigation() {
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
          <Link className='nav-link' to='/sign-in'>
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}
