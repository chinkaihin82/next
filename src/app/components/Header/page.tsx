import Image from "next/image";
import Link from 'next/link';
import styles from './header.module.css'
import Footer from "../Footer/page";




export default function Header() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        hea
        <ul>
          <div></div>
      <li><Link href="/">top</Link></li>
      </ul>
      <button className={styles.button}>Click me!</button>
      </div>
    </main>
  );
}
