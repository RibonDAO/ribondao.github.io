import Link from '@docusaurus/Link';
import { useColorMode } from '@docusaurus/theme-common';
import clsx from 'clsx';
import React from 'react';

import styles from './styles.module.css';

function CardContainer({ href, children }) {
  return (
    <Link href={href} className={clsx(styles.cardContainer)}>
      {children}
    </Link>
  );
}
export default function CardSocial({
  icon,
  href,
  title,
  description,
  bgColor,
}) {
  const { colorMode } = useColorMode();

  return (
    <CardContainer href={href}>
      <div
        className={clsx(styles.cardSocial, {
          [styles.cardSocialLight]: colorMode === 'light',
          [styles.cardSocialDark]: colorMode === 'dark',
        })}
      >
        <div
          className={styles.cardSocialItems}
          style={{ backgroundColor: bgColor }}
        >
          <img src={icon} alt="" />
          <div className={styles.cardSocialDescription}>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </CardContainer>
  );
}
