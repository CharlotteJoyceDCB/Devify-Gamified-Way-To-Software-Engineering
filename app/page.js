import styles from '../styles/globals.scss';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Welcome to Devify</h1>
        <p>Your gamified journey to mastering software development</p>
      </header>

      <section className={styles.intro}>
        <h2>Start Your Adventure</h2>
        <p>
          Choose your path, embark on coding quests, and level up your skills as you progress
          through different stages of development. Whether you’re a novice or an experienced coder,
          Devify makes learning fun and engaging.
        </p>
        <div className={styles.cta}>
          <Link href="/code-challenge">
            <button className={styles.button}>Start Coding</button>
          </Link>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>Join the Devify community and conquer the coding world!</p>
      </footer>
    </div>
  );
}