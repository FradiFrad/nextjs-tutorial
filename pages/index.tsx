import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import React, { useState } from 'react';

import Layout, { siteTitle } from '../components/layout'
import Date from '../components/date'
import NewPlantModal, {showNewPlantModal} from '../components/new-plant-modal'
import utilStyles from '../styles/utils.module.css'
// import { getSortedPlantsData } from '../lib/plants'

// getStaticProps fetches data before pre-rendering
// data put in props allPlantData
// export async function getStaticProps() {
//   const allPlantsData = getSortedPlantsData()
//   return {
//     props: {
//       allPlantsData
//     }
//   }
// }

// Once this is set up, the allPlantsData prop will be passed to the Home component. 
export default function Home( {
  // allPlantsData: {
  //   date: string
  //   title: string
  //   id: string
  // }[]
}) {
  const [visible, setVisibility] = useState(false);
  
  return (
    // Q: by simply adding home, does it mean it's set up to true ?
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Plants Manager</p>
        <p>
          Grow, love and cherish your plants in one app !
        </p>
      </section>

    {/* ------------------------------- Add a plant ----------------------- */}
      <button type="button" onClick={() => setVisibility(true)}>Add a plant</button>
      { visible && <NewPlantModal></NewPlantModal>}

    {/* Listing of the plants */}
      
    </Layout>
  )
}


