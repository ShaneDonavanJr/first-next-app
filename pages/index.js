import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout/layout';
import utilStyles from '../styles/utils.module.css';
 
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>

        {/* <p>[Your Self Introduction]</p> */}
        <p>
          Hello, about me. I am currently working at Circle Logistics, where I leverage MongoDB, React, and Python to help with automation, web scraping, and our own in-house website with applications and reports. I also work with Power BI, SQL, Google Sheets, and a machine that makes espressos for me several times a day.
        </p>
        <b></b>
        <p>
        In my freetime I won’t turn down a poker game, I run several times a week, and travel every year. I also like talking about the tools I use if you have any questions.{' '}
        </p>
      </section>
    </Layout>
  );
}