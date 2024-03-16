import Image from "next/image";
import Link from 'next/link'

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        about
        <ul>
      <li><Link href="/">top</Link></li>
      </ul>
      </div>
    </main>
  );
}