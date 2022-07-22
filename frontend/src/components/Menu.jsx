import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Menu.css';

export default function Menu() {
  return (
    <header className='menu'>
      <h1 className='menu-title'>Notes App</h1>
      <nav className='menu-nav'>
        <ul className='menu-nav__list'>
          <li className='menu-nav__item'>
            <Link className='menu-nav__link' to='/'>
              Notes
            </Link>
          </li>
          <li className='menu-nav__item'>
            <Link className='menu-nav__link' to='create'>
              Create
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
