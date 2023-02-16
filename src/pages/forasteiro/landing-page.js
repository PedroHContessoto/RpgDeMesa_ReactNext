import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Link from "next/link"

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Bem vindo ao <p className='gradient'>RPG <br></br>BROS</p>
        </h1>

        <p className={styles.descriptions}>
          Já tem acesso?{' '}
          <code className={styles.code}> <Link href="/forasteiro/login">clique aqui</Link></code>
        </p>
        {/* <iframe src="https://embed.lottiefiles.com/animation/113519"></iframe> */}
      </div>
    </main>
  )
}


