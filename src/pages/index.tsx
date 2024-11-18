import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container" style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <div style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <p style={{width: '50%', textAlign: 'justify'}}>
                        Wordly is a worldbuilding tool designed to help you create
                        your own universe by providing you with all the tools you need to do so.
                    </p>
                </div>

                <img
                    src="/img/logo_no_slogan.svg"
                    alt="Wordly"
                    className={styles.float}
                    width={400}
                />
            </div>
        </header>
    );
}

function ReadyToGetStarted() {
    return (
        <div className={clsx('hero hero--secondary', styles.heroBanner)}>
            <div className="container">
                <div className="text--center">
                    <Heading as="h2">Your workspace, your choices</Heading>

                    <div style={{textAlign: 'left'}}>
                        <div style={{width: '50%', display: 'inline-block'}}>
                            <h3>I want to use wordly servers</h3>
                            <p>
                                Wordly provides you with a server to host your world.
                                Join the community, share your world with others and create and use assets from other
                                users.
                            </p>
                        </div>
                    </div>

                    <div style={{textAlign: 'right'}}>
                        <div style={{width: '50%', display: 'inline-block'}}>
                            <h3>I want to host my own server</h3>
                            <p>
                                You can host your own server and have full control over it.
                                Choose who get to use it, what features are available and more.
                            </p>
                        </div>
                    </div>

                    <div style={{textAlign: 'left'}}>
                        <div style={{width: '50%', display: 'inline-block'}}>
                            <h3>I want to use wordly offline</h3>
                            <p>
                                You can download the Wordly app and use it offline.
                                This way, no account is needed and you can use it wherever you want !
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

function Roadmap() {
    return (
        <div className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <div style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Heading as="h2">Roadmap</Heading>
                    <p>
                        Wordly is still in early development. Here are the features that are planned to be added in the future.<br/>
                        The roadmap is subject to change and more features may be added.
                    </p>
                    <div style={{display: 'grid', textAlign: 'left', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10rem'}}>
                        <div>
                        <h3>Version 0.1</h3>
                        <ul>
                            <li>World creation ✔️</li>
                            <li>Character Template creation️</li>
                            <li>Character creation</li>
                            <li>character sheet png export</li>
                        </ul>
                        </div>

                        <div>
                        <h3>Version 0.2</h3>
                        <ul>
                            <li>Map : random map generation</li>
                            <li>Map : map editing</li>
                            <li>Map png export</li>
                        </ul>
                        </div>

                        <div>
                        <h3>Version 0.3</h3>
                        <ul>
                            <li>World wiki generation</li>
                        </ul>
                        </div>
                    </div>

                    <div style={{paddingTop: '1rem'}}>
                        <h3>Planned features</h3>

                        <ul style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', columnGap: '5rem', textAlign: 'left', paddingTop: '1rem'}}>
                            <li>Family trees</li>
                            <li>Character relationships</li>
                            <li>Character sheets pdf export</li>
                            <li>Map pdf export</li>
                            <li>Teams and collaboration</li>
                            <li>Timelines</li>
                            <li>offline mode (desktop app)</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}

function Collaborate() {
    return (
        <div className={clsx('hero hero--secondary', styles.heroBanner)}>
            <div className="container">
                <div className="text--center">
                    <Heading as="h2">Collaborate with the community</Heading>
                    <p>
                        Wordly is an open-source project. You can contribute to the project on GitHub.
                    </p>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/contributing">
                        Learn more
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <HomepageHeader/>
            <main>
                <HomepageFeatures/>
                <ReadyToGetStarted/>
                <Roadmap/>
                <Collaborate/>
            </main>
        </Layout>
    );
}
