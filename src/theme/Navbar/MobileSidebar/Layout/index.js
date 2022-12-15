import { useNavbarSecondaryMenu } from '@docusaurus/theme-common/internal';
import clsx from 'clsx';
import React from 'react';

import styles from './styles.modules.css';

export default function NavbarMobileSidebarLayout({
  header,
  primaryMenu,
  secondaryMenu,
}) {
  const { shown: secondaryMenuShown } = useNavbarSecondaryMenu();
  return (
    <div className="navbar-sidebar">
      {header}
      <div
        className={clsx('navbar-sidebar__items', {
          'navbar-sidebar__items--show-secondary': secondaryMenuShown,
        })}
      >
        <div
          className={clsx(
            'navbar-sidebar__item menu',
            styles.navbar_sidebar_item,
          )}
        >
          {primaryMenu}
        </div>
        <div
          className={clsx(
            'navbar-sidebar__item menu',
            styles.navbar_sidebar_item,
          )}
        >
          {secondaryMenu}
        </div>
      </div>
    </div>
  );
}
