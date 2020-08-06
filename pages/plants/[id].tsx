// Pages that begin with [ and end with ] are dynamic pages in Next.js.
import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'
import Layout from '../../components/layout'
import Date from '../../components/date'
import { getAllPostIds, getPlantData } from '../../lib/posts'
import utilStyles from '../../styles/utils.module.css'

export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const plantData = await getPlantData(params.id)
  return {
    props: {
      plantData
    }
  }
}


// The array of possible values for id must be the value of the paths key of the returned object.
// Ignore fallback: false for now — we’ll explain that later.
export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export default function Plant({ plantData }: {
  plantData: {
    title: string
    date: string
    contentHtml: string
  }}) {
  return (
    <Layout>
      <Head>
        <title>{plantData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{plantData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={plantData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: plantData.contentHtml }} />
      </article>
    </Layout>
  )
}