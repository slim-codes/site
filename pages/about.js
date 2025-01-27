import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { MdCode,MdDownload,MdPerson } from "react-icons/md";

export default function About() {
    return (
        <div className={'container'}>
            <Head>
                <title>About Shastra</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="keywords" content="Shastra, ShastraOS, Shastra linux, shastraos, Shastra OS, ShastraOS websites, Linux, Linux OS, OS, Gnome, Web3 OS, Web3 based OS, Web3 based Operating System, Vivek Pal, Arch Linux " />
                <meta name="theme-color" content="#317EFB"/>
                <link rel="icon" href="/favicon.ico" />
				<link rel='manifest' href='/manifest.json' />
                <link rel='apple-touch-icon' href='/icons/icon-192x192.png' />
            </Head>
            <Header />
            <main className={styles.main}>
                <div className={styles.duoGrid}>
                    <section>
                        <h1 className={styles.title}>Shastra OS</h1>
                        <h3>A Linux based OS that comes with privacy and security.</h3>
                    </section>
                    <div className={styles.aboutScroll}>
                        <br></br>
                        <br></br>
                        <br></br>
                        <h2>About ShastraOS</h2>
                        ShastraOS is decentralised Linux Desktop OS. Which is built on top of Arch Linux and uses ShastraOS flavoured Gnome Desktop environment.
                        ShastraOS is currently under development.
	                    It is going to be completely free and open-source, code is available on Github.
                        <h3>What makes it different?</h3>
                        It is the operating system that is completely built for users who prioritises privacy and security.
                        ShastraOS will have its own decentralised packages repositories. We are giving you freedom to backup all user data on decentralised ways.
                        Which gives ShastraOS capablity to easily shift your desktop from one instance to another.
                        It is optimized for fast browsing and privacy and security.

                        <ul>
                            <ol>Ships with pre-installed Brave Browser</ol>
                            <ol>Latest Gnome Desktop with multiple flavours</ol>
                            <ol>Your Wallet for Ethereum and Bitcoin</ol>
                            <ol>Backup your data in decentralised way</ol>
                        </ul>

                        <h3>Why Shastra?</h3>
                        <p>You must be wondering, what makes ShastraOS different from other linux distros. Here are some answers to your queries</p>
                        <br></br>
                        <ul>
                            <li>Completely yours</li>
                            <li>Customize it in your way</li>
                            <li>We need a new OS for a new generation</li>
                            <li>Have a smooth gaming experience</li>
                            <li>We respect your privacy</li>
                            <li>Ideal for Web3 Developers</li>
                        </ul>
                        <br></br>

                        <h3>When is it going to release officially?</h3>
                        {/* <br></br> */}

                        <p>
                        Shastra OS is currently under development.
                        The beta release is out there. We are working hard for you to ship the first version very soon.
                        The first release of Shastra-Dignity would be released in 2022.
                        </p>

                        <h3>
                            ShastraOS Preview
                        </h3>
                        ShastraOS Preview is a rolling release version of Shastra OS.
                        Which means we will ship updates as soon we have them.
                        But you will not be able to install it into your system.
                        Supports latest Nvidia GPUs with Latest Nvidia open drivers.

                        <hr />
                        <h2>Beta Release</h2>
                        <p>The beta release will be available very soon.  Developers are working hard to give you public release as soon as possible. It is an unstable version for now. But you can test it out and contribute to this open-source project.</p>
                        <div className={styles.buttonGap}>
                            <button className={styles.whiteBtn} onClick={() => { window.open('https://github.com/shastra-os', "_blank") }}><MdCode className={styles.icon}/>GitHub</button>
                            <button className={styles.whiteBtn} onClick={() => { window.open('https://osdn.net/frs/redir.php?m=gigenet&f=shastraos%2F77132%2FShastra-Beta-2022.07.22-x86_64.iso', "_blank") }}><MdDownload className={styles.icon}/>Get Pre</button>
                        </div>

                        <hr />
                        <p>Latest Realeses <a href="https://github.com/shastra-os/iso-build/releases">GitHub</a></p>
                        <p>Thanks for Visiting us</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
