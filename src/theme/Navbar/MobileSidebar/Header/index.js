import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import { translate } from '@docusaurus/Translate';
import IconClose from '@theme/Icon/Close';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import NavbarLogo from '@theme/Navbar/Logo';
import clsx from 'clsx';
import React from 'react';

import styles from './styles.module.css';

function CloseButton() {
  const mobileSidebar = useNavbarMobileSidebar();
  return (
    <button
      type="button"
      aria-label={translate({
        id: 'theme.docs.sidebar.closeSidebarButtonAriaLabel',
        message: 'Close navigation bar',
        description: 'The ARIA label for close button of mobile sidebar',
      })}
      className="clean-btn navbar-sidebar__close"
      onClick={() => mobileSidebar.toggle()}
    >
      <IconClose color="var(--ifm-color-emphasis-600)" />
    </button>
  );
}
export default function NavbarMobileSidebarHeader() {
  return (
    <div
      className={clsx('navbar-sidebar__brand', styles.navbar_sidebar__brand)}
    >
      <NavbarLogo />
      <div className={styles.navbar_sidebar__brand_right}>
        <NavbarColorModeToggle className="margin-right--md" />
        <CloseButton />
      </div>
    </div>
  );
}
