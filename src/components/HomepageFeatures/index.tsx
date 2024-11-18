import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Let place to your creativity',
    image: '/img/space.png',
    description: (
      <>
        Wordly has been designed to give you all the tools you need to create your own universe.
      </>
    ),
  },
  {
    title: 'Add features on the go',
    image: '/img/modules.png',
    description: (
      <>
        No need to be overwhelmed by the amount of features. You can add them as you go with our panel system !
      </>
    ),
  },
  {
    title: 'Showcase your world',
    image: '/img/share.png',
    description: (
      <>
        Publish your world, share it with your friends, export your character sheets, and more !
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div>
      <div className="text--center">
          <img src={image}/>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '40px',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
