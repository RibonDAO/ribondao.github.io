import Logo from '@theme/Logo';
import clsx from 'clsx';
import React from 'react';

import styles from './styles.module.css';

export default function NavbarLogo() {
  return (
    <Logo
      className="navbar__brand"
      imageClassName={clsx('navbar_logo', styles.navbar_logo)}
      titleClassName="navbar__title text--truncate"
    />
  );
}
