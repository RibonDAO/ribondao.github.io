import { useColorMode } from '@docusaurus/theme-common';
import clsx from 'clsx';
import React from 'react';

import styles from './styles.module.css';

export default function IconExternalLink({
  width = 8.87,
  height = 8.87,
  color = '',
  className = '',
}) {
  const { colorMode } = useColorMode();

  const currentColor = color || (colorMode === 'light' ? '#025B37' : '#D4CEC3');

  return (
    <svg
      width={width}
      height={height}
      aria-hidden="true"
      viewBox="0 0 12 13"
      className={clsx(styles.iconExternalLink, className)}
    >
      <path
        d="M1.35929 0L11.7206 0.0678175L11.7885 10.6641L9.59876 10.6607L9.55562 3.92058L1.60201 12.0557L0 10.4176L7.95362 2.28249L1.36831 2.24485L1.35929 0Z"
        fill={currentColor}
      />
    </svg>
  );
}
