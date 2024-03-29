import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React from 'react';

import CardDoc from '../components/CardDoc';
import CardLink from '../components/CardLink';
import CardSection from '../components/CardSection';
import CardSocial from '../components/CardSocial';
import Container from '../components/Container';
import IconBook from '../components/Icon/Book';
import IconInformation from '../components/Icon/Information';
import ExternalLink from '../theme/Icon/ExternalLink';

import styles from './index.module.scss';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <section className={styles.mainSection}>
          <div className={styles.bg}>
            <img src="img/bg1.svg" alt="" />
            <img src="img/bg2.svg" alt="" />
            <img src="img/bg3.svg" alt="" />
            <img src="img/bg4.svg" alt="" />
          </div>

          <Container>
            <h1 className={styles.mainTitle}>Welcome to the Ribon Docs</h1>
            <section className={styles.containerCardSection}>
              <CardSection
                to="docs/what-is-ribon"
                iconLeft={<IconInformation />}
                title="What is Ribon"
                description="Learn about the core concepts of the Ribon Protocol. Promoters, Integrations, Donations and more."
              />
              <CardSection
                to="docs/category/contract"
                iconLeft={<IconBook />}
                title="Smart contract overview"
                description="Learn about the architecture of the Ribon Protocol smart contracts made up of the Core and Periphery libraries."
              />
              <CardSection
                href="docs/category/how-to-integrate-with-ribon"
                iconLeft={<IconBook />}
                title="How to integrate with Ribon"
                description="Learn how to integrate with Ribon using javascript."
              />
            </section>
          </Container>
        </section>

        <Container>
          <section className={styles.linksContainer}>
            <div className={styles.containerDocs}>
              <h2>Getting Started</h2>
              <p>
                Explore these docs to get started integrating the Ribon Protocol
                in your dApp, smart contract or project.
              </p>
              <div className={styles.containerCardDoc}>
                <CardDoc
                  href="docs/what-is-ribon"
                  title="What is Ribon"
                  description="Integrate with the Ribon Protocol using JavaScript"
                />
              </div>{' '}
            </div>
            <div className={styles.containerLinks}>
              <h2>Developer Links</h2>
              <p>
                The Ribon codebase is comprised of an ecosystem of open source
                components.
              </p>
              <div className={styles.containerCardLink}>
                <CardLink
                  href="https://github.com/RibonDAO/core-protocol-v1"
                  title="core-protocol-v1"
                />
                <CardLink
                  href="https://github.com/RibonDAO/interface"
                  title="interface"
                />
                <CardLink href="https://github.com/RibonDAO/app" title="app" />
                <CardLink
                  href="https://github.com/RibonDAO/core-api"
                  title="core-api"
                />
                <CardLink
                  href="https://github.com/RibonDAO/shared"
                  title="shared"
                />
                <CardLink
                  href="https://github.com/RibonDAO/integrations-dashboard"
                  title="integrations-dashboard"
                />
                <CardLink
                  href="https://github.com/RibonDAO/patrons-dashboard"
                  title="patrons-dashboard"
                />
                <CardLink
                  href="https://github.com/Uniswap/v3-periphery/blob/main/deploys.md"
                  title="Integration API Example"
                />
              </div>
            </div>
          </section>
        </Container>

        <section className={styles.containerQuickLinks}>
          <Container>
            <div className={styles.quickLinkItems}>
              <img src="img/ribonQuickLink.svg" alt="" />
              <div className={styles.quickLinkInfo}>
                <h2>Quick Links</h2>
                <div className={styles.quickLink}>
                  <div className={styles.link}>
                    <Link to="docs/contract/smart-contract-overview">
                      Smart Contracts
                    </Link>
                    <ExternalLink width="12" height="12" />
                  </div>
                  <div className={styles.link}>
                    <Link href="https://ribon.io/wp-content/uploads/2021/08/Protocolo-Ribon-Whitepaper-v.0.2.pdf">
                      Whitepaper
                    </Link>
                    <ExternalLink width="12" height="12" />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <Container>
          <section className={styles.containerCardSocial}>
            <CardSocial
              href="https://discord.com/invite/Y6Nkv8DrAT"
              icon="img/discordSocial.svg"
              title="Discord"
              description="Talk directly to our team."
              bgColor="#FF9661"
            />
            <CardSocial
              href="https://github.com/RibonDAO"
              icon="img/githubSocial.svg"
              title="Github"
              description=" Access all Ribon repositories."
              bgColor=" #FFEB7A"
            />
            <CardSocial
              href="https://twitter.com/ribondao"
              icon="img/twitterSocial.svg"
              title="Twitter"
              description=" Stay tuned in everything we are doing. "
              bgColor="#8CE0BE
              "
            />
          </section>
        </Container>
      </main>
    </Layout>
  );
}
