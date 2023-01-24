import Link from '@docusaurus/Link';
import clsx from 'clsx';
import React from 'react';

import styles from './styles.modules.css';

export default function PaginatorNavLink(props) {
  const { permalink, title, subLabel, isNext } = props;
  return (
    <Link
      className={clsx(
        'pagination-nav__link',
        styles.pagination_nav_link,
        isNext ? 'pagination-nav__link--next' : 'pagination-nav__link--prev',
      )}
      to={permalink}
    >
      {subLabel && (
        <div
          className={clsx(
            'pagination-nav__sublabel',
            styles.pagination_nav__sublabel,
          )}
        >
          {subLabel}
        </div>
      )}
      <div
        className={clsx('pagination-nav__label', styles.pagination_nav_label)}
      >
        {title}
      </div>
    </Link>
  );
}
