import Link from '@docusaurus/Link';
import { useColorMode } from '@docusaurus/theme-common';
import clsx from 'clsx';
import React from 'react';

import styles from './styles.module.css';

function Footer() {
  const { colorMode } = useColorMode();

  return (
    <div
      className={clsx(styles.containerFooter, {
        [styles.footerLight]: colorMode === 'light',
        [styles.footerDark]: colorMode === 'dark',
      })}
    >
      <footer className={styles.footer}>
        <div className={styles.linksRight}>
          <div className={styles.cardLink}>
            <h3 className={styles.title}>Docs</h3>
            <div className={styles.linkFooter}>
              <Link to="/docs/what-is-ribon">What is Ribon</Link>
              <Link to="/docs/category/contract">Smart contract overview</Link>
              <Link to="/docs/category/integration">
                How to integrate with Ribon
              </Link>
              <Link href="https://ribon.io/wp-content/uploads/2021/08/Protocolo-Ribon-Whitepaper-v.0.2.pdf">
                Whitepaper
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.linksLeft}>
          <div className={styles.cardLink}>
            <h3 className={styles.title}>Developer links</h3>
            <div className={styles.linkFooter}>
              <Link href="https://github.com/RibonDAO/core-protocol-v1">
                core-protocol-v1
              </Link>
              <Link href="https://github.com/RibonDAO/interface">
                interface
              </Link>
              <Link href="https://github.com/RibonDAO/app">app</Link>
              <Link href="https://github.com/RibonDAO/core-api">core-api</Link>
              <Link href="https://github.com/RibonDAO/shared">shared</Link>
              <Link href="https://github.com/RibonDAO/integrations-dashboard">
                integrations-dashboard
              </Link>
              <Link href="https://github.com/RibonDAO/patrons-dashboard">
                patrons-dashboard
              </Link>
              <Link href="https://github.com/Uniswap/v3-periphery/blob/main/deploys.md">
                integration API example
              </Link>
            </div>
          </div>
          <div className={styles.cardLink}>
            <h3>Community</h3>
            <div className={styles.linkFooter}>
              <Link href="https://discord.com/invite/Y6Nkv8DrAT">Discord</Link>
              <Link href="https://github.com/RibonDAO">Github</Link>
              <Link href="https://twitter.com/ribondao">Twitter</Link>
            </div>
          </div>
        </div>
      </footer>
      <img
        src={
          colorMode === 'light'
            ? '/docs/img/ribon.svg'
            : '/docs/img/ribonDark.svg'
        }
        alt=""
        className={styles.logoFooter}
      />
    </div>
  );
}

export default Footer;
