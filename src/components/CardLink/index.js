import Link from '@docusaurus/Link';
import { useColorMode } from '@docusaurus/theme-common';
import clsx from 'clsx';
import React from 'react';

import IconExternalLink from '../../theme/Icon/ExternalLink';
import IconGithub from '../Icon/Github';

import styles from './styles.module.css';

function CardContainer({ href, children }) {
  return (
    <Link href={href} className={clsx(styles.cardContainer)}>
      {children}
    </Link>
  );
}

export default function CardLink({ href, title }) {
  const { colorMode } = useColorMode();

  return (
    <CardContainer href={href}>
      <div
        className={clsx(styles.cardLink, {
          [styles.cardLinkLight]: colorMode === 'light',
          [styles.cardLinkDark]: colorMode === 'dark',
        })}
      >
        <div className={styles.cardLinkItems}>
          <IconGithub />
          <h3>{title}</h3>
        </div>
        <IconExternalLink
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
