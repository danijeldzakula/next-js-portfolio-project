import Head from "next/head";
import { ReactNode } from "react";
import { Inter } from 'next/font/google';
import { concatClassNames as cn } from "@/helpers/concatClassNames";
import Link from "next/link";

const inter = Inter({ subsets: ['latin'], weight: ['300'] });

interface Props {
  children: ReactNode
  metadata: {
    title: string
  }
}

export function Layout({ children, metadata }: Props) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
      </Head>

      <div className={cn("__app", inter.className)}>
        <header>
          <div className="container">
            <Link href='/' className="logo">Logo</Link>

            <ul>
              <li>
                <Link href='/'>Home</Link>
              </li>
              <li>
                <Link href='/about'>About</Link>
              </li>
              <li>
                <Link href='/contact'>Contact</Link>
              </li>
            </ul>
          </div>
        </header>

        <main>{children}</main>

        <footer>
          <div className="container">
            Footer
          </div>
        </footer>
      </div>
    </>
  )
}
