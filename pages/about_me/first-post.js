import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout/layout';
import Image from 'next/image';
 
 
export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
    </>
  );
}