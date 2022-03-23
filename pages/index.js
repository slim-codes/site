import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import { WindowMockup } from 'react-mockup'
import 'react-mockup/dist/index.css'
import Header from './Header'
import { MdOutlineOpenInBrowser,MdCode, MdOutlineDownload } from "react-icons/md";

export default function Home() {
  const [versionData, setVersionData] = useState();

  return (
    <div className={'container'}>
      <Head>
        <title>ShastraOS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <main className={styles.main}>
        <div className={styles.duoGrid}>
          <section className={styles.padding2em}>
            <h2>An OS for the Web3</h2>
            <div className={styles.headStyle}>
              <h1>ShastraOS- Dignity</h1>
              {/* <span>v{versionData}</span> */}
            </div>
            <div className={styles.buttonGap}>
              <button className={styles.blueBtn} onClick={() => { window.open('https://sourceforge.net/projects/shastra/files/latest/download', "_blank") }}><MdOutlineDownload className={styles.icon}/>Download</button>
              <button className={styles.whiteBtn} onClick={() => { window.open('https://github.com/shastra-os', "_blank") }}><MdCode className={styles.icon}/>GitHub</button>
            </div>
          </section>
          <section className="mockupContainer">
            <WindowMockup
              src="/screen02.png"
              type="mac"
              color="black"
            />
          </section>
        </div>

        <div className={styles.duoGrid}>
          <section>
            <ul>
              <li>An OS for The Next Gen of the Web</li>
              <li>Privacy Redefined- Comes with Brave Default Browser</li>
              <li>Easy to Use</li>
              <li>Enhanced privacy and protection</li>
              <li>Latest Gnome Desktop Environment</li>
              <li>Easy to install applications through PaMac</li>
            </ul>
          </section>
          <section className={styles.padding2em}>
            <h1 className={styles.title}>Shastra Pre-Realese</h1>
            <h2>Download pre-release version of Shastra from Sourceforge</h2>
            <p className={styles.description}>
              This is a pre-release version of Shastra. You may face some installation issues but hold on till official first release od Shastra OS.
              Which is Shastra Dignity coming with latest gnome 42.
            </p>
          </section>
        </div>


        <div className={styles.duoGrid}>
          <section className={styles.padding2em}>
            <h1 className={styles.title}>Upcoming flavours of Shastra</h1>
            <h2>Gnome &rarr;</h2>
            <h2>Cinnamon &rarr;</h2>
            <h2>Budgie (Not Developed) &rarr;</h2>
          </section>
          <div className={styles.carousel}>
            <div className={styles.card}>
              <WindowMockup src="/gnomescreen01.png" />
            </div>
            <div className={styles.card}>
              <WindowMockup src="/cinnamon.webp" />
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="usage">GUIDE</a>
        <a href="about">ABOUT</a>
        <a
          href="https://bit.ly/3tPOaOz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Akshat Sharma
        </a>
        <a
          href="https://vivekpal.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vivek Pal
        </a>
    <div class="theme-btn">
        <i class="fas fa-adjust"></i>
    </div>
      </footer>
    </div >
  )
}
