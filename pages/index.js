import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'
import { getStoredPostData } from '../lib/posts'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Introduce to build a website with Next.js</p>
        <p>
          This is a sample website - {' '}
          <Link href="/posts/first-post">Read About Me</Link>
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog List</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              {id}
              <br />
              at <Date dateString={date} />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
};

export async function getStaticProps() {
  const allPostsData = getStoredPostData();
  return {
    props: {
      allPostsData,
    },
  };
};
