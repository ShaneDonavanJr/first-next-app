import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout/layout';
import Image from 'next/image';
 
 
export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
        <Image
          src="/images/profilePic.png" // Route of the image file
          height={144} // Desired size with correct aspect ratio
          width={144} // Desired size with correct aspect ratio
          alt="Shane Smith"
        />
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
    </Layout>
  );
}