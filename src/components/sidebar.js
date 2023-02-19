
import React, { useState } from 'react';
import options from './menus/bros';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from '@/styles/Sidebar.module.css'
import Link from 'next/link';


const BrosSideBar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleMenuClick = (menuIndex) => {
    setActiveMenu(menuIndex === activeMenu ? null : menuIndex);
  };

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div className={styles.container}>
        <button className={styles['toggle-button']} onClick={handleSidebarToggle}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`${styles['sidebar-container']} ${sidebarOpen ? styles['sidebar-open'] : ''}`}>
          <div className={styles.logo}>
            <h1>BROS</h1>
          </div>
          <div className={styles['menu-container']}>
            {options.menus.map((menu, index) => (
              <div
                key={index}
                className={`${styles.menu} ${activeMenu === index ? styles.active : ''}`}
                onClick={() => handleMenuClick(index)}
              >
                <span className={styles['menu-name']}>{menu.name}</span>
                <ul className={styles.submenu}>
                  {activeMenu === index &&
                    menu.links.map((link, index) => (
                      <li key={index}>
                        <Link href={link.url}>
                          <span className={styles['menu-link']}>{link.name}</span>
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BrosSideBar;