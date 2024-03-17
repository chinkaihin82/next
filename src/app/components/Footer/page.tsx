import Image from "next/image";
import Link from 'next/link';
import styles from './footer.module.css'

export default function Footer() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        footer
        <ul>
          <div></div>
      <li><Link href="/">top</Link></li>
      </ul>
      <button className={styles.button}>Click me!</button>
      </div>
    </main>
  );
}
