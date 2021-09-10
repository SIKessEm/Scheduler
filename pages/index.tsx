import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>SIKessEm's Scheduler</title>
        <meta name="description" content="Idea and task planner based on job-time" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <p>
          <span className={styles.icon}>
            <Image width={128} height={128} src="/logo192.png" alt="Scheduler" />
          </span>
        </p>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://sikessem.com/">SIKessEm</a>'s Scheduler
        </h1>

        <p className={styles.description}>
          Plan your tasks and organize your ideas to focus on the most important: <strong>achieving your projects in time</strong>.
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://sikessem.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Produced by{' '}
          <span className={styles.logo}>
            <Image src="/SIKessEm.svg" alt="SIKessEm" width={80} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
