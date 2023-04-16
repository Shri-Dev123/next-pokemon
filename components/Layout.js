import React from 'react';
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Layout = ({children, title}) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <header className="bg-amber-200 py-10 mb-10">
                <Link legacyBehavior href="/">
                     <span>
                       
                        <h1 className="capitalize text-6xl text-center text-amber-400">{title}</h1>
                        </span>

                </Link>
            </header>

            <main className="container mx-auto">
                {children}
            </main>

            <footer className="flex justify-center items-center mt-10 mb-5">
                <a
                    className="flex flex-col items-center"
                    href="https://web-portfolio-ten.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"   
                >
                Made with ❤️ by {' Shrikant Kallshetty '}
                </a>
            </footer>
        </div>
    );
};

export default Layout;