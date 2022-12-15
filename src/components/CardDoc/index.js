import Link from '@docusaurus/Link';
import { useColorMode } from '@docusaurus/theme-common';
import clsx from 'clsx';
import React from 'react';

import IconExternalLink from '../../theme/Icon/ExternalLink';

import styles from './styles.module.css';

function CardContainer({ href, children }) {
  return (
    <Link href={href} className={clsx(styles.cardContainer)}>
      {children}
    </Link>
  );
}

export default function CardDoc({ href, title, description }) {
  const { colorMode } = useColorMode();

  return (
    <CardContainer href={href}>
      <div
        className={clsx(styles.cardDoc, {
          [styles.cardDocLight]: colorMode === 'light',
          [styles.cardDocDark]: colorMode === 'dark',
        })}
      >
        <div className={styles.cardDocInfos}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <IconExternalLink
          className={styles.iconExternalLink}
          color={
            colorMode === 'light'
              ? 'var(--ifm-color-externalLink)'
              : 'var(--ifm-color-externalLink)'
          }
          width="12px"
          height="12px"
        />
      </div>
    </CardContainer>
  );
}
