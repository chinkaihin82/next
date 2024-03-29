import Image from "next/image";
import Link from 'next/link';
import Footer from "src/app/components/Footer/page";
import Header from "src/app/components/Header/page";
import styles from '../styles/styles.module.css'

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header></Header>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        about
        <ul>
          <div></div>
      <li><Link href="/">top</Link></li>
      </ul>
      <button className={styles.button}>Click me!</button>
      </div>
      <Footer></Footer>
    </main>
  );
}
