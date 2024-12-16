import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Conquistas',
    Svg: require('@site/static/img/medalha.svg').default,
    description: (
      <>
        Ser a melhor biblioteca do país é um reconhecimento de excelência, inovação e impacto cultural.
         Mais do que livros, é um espaço que inspira, liga e transforma comunidades.
      </>
    ),
  },
  {
    title: 'Diversidade',
    Svg: require('@site/static/img/diversidade.svg').default,
    description: (
      <>
        É um espaço de diversidade, com livros para todos os gostos.
         Desde romances a aventuras, de clássicos a autores contemporâneos,
         acolhe leitores de todas as idades.
      </>
    ),
  },
  {
    title: 'Localização',
    Svg: require('@site/static/img/localizacao.svg').default,
    description: (
      <>
        Esta prestigiada biblioteca situa-se no coração do Algarve, Faro.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
