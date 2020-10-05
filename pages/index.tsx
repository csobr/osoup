import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { InferGetStaticPropsType } from 'next';
export type Soups = {
  id: number;
  name: string;
  image: string;
};

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/soups');
  const soups: Soups[] = await res.json();

  return {
    props: {
      soups,
    },
  };
};

export default function Home({
  soups,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Osoup</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <img src='/logo.png' className={styles.logo} />
        <div className={styles.hero}>
          <h1 className={styles.title}>
            Fresh from the farm right to your door
          </h1>
          <section className={styles.adressBar}>
            {' '}
            <label htmlFor='adress'>
              <input
                type='text'
                className={styles.input}
                placeholder=' Enter your delivery adress'
              />
            </label>
            <input
              type='submit'
              value='Pick soup'
              className={styles.adressPick}
            />
          </section>
          <div className={styles.heroImage} />
        </div>
        <h2 className={styles.h2}>Popular</h2>
        <div className={styles.popularSlider}>
          {soups.map((soup) => (
            <div key={soup.id} className={styles.popularImage}>
              <img width='110' height='110' alt='' src={soup.image} />
              <p>{soup.name}</p>
            </div>
          ))}
        </div>
        <h2>All our soup</h2>
        <div className={styles.cardContainer}>
          {soups.map((soup) => [
            <div key={soup.id} className={styles.card}>
              <a href='/soups'>
                <img alt='soup' src={soup.image} />
              </a>
              <p style={{ fontSize: 16 }}>{soup.name}</p>
              <p style={{ fontSize: 14, float: 'right', fontWeight: 'bold' }}>
                129 SEK
              </p>
              <p style={{ fontSize: 12 }}>Swedish</p>
            </div>,
          ])}
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Online soup delivery</p>
      </footer>
    </div>
  );
}
