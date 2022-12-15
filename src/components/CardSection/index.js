import Link from '@docusaurus/Link';
import { useColorMode } from '@docusaurus/theme-common';
import clsx from 'clsx';
import React from 'react';

import ExternalLink from '../../theme/Icon/ExternalLink';

import styles from './styles.module.css';

function CardContainer({ href, children }) {
  return (
    <Link href={href} className={clsx(styles.cardContainer)}>
      {children}
    </Link>
  );
}

export default function CardSection({ href, iconLeft, title, description }) {
  const { colorMode } = useColorMode();

  return (
    <CardContainer href={href}>
      <div
        className={clsx(styles.cardSection, {
          [styles.cardSectionLight]: colorMode === 'light',
          [styles.cardSectionDark]: colorMode === 'dark',
        })}
      >
        <div className={styles.cardSectionHeader}>
          {iconLeft}
          <ExternalLink
            color={
              colorMode === 'light'
                ? 'var(--ifm-color-externalLink)'
                : 'var(--ifm-color-externalLink)'
            }
            width="12px"
            height="12px"
            className={styles.iconRight}
          />
        </div>
        <div className={styles.cardSectionInfos}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </CardContainer>
  );
}
