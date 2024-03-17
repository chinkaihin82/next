import Image from "next/image";
import Link from 'next/link'
import Footer from "src/app/components/Footer/page";
import Header from "src/app/components/Header/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header></Header>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <>
      <h1>Link Test44477</h1>
      <ul>
      <li><a href="#">Page Test</a></li>
      <li><Link href="about">aboutPage Test</Link></li>
      </ul>
     
    </>
      </div>
      <Footer></Footer>
    </main>
  );
}
