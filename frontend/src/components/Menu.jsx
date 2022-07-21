import React from 'react';
import '../styles/Menu.css';

export default function Menu() {
  return (
    <header className='menu'>
      <h1 className='menu-title'>Notes App</h1>
      <nav className='menu-nav'>
        <ul className='menu-nav__list'>
          <li className='menu-nav__item'>
            <a className='menu-nav__link' href='#'>
              Notes
            </a>
          </li>
          <li className='menu-nav__item'>
            <a className='menu-nav__link' href='#'>
              Create
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
