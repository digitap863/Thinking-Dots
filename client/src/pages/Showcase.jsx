import React from 'react'
import Layout from '../components/shared/Layout'
import CHeader from '../components/About/CHeader'
import mj from '../assets/headerImages/MJ.mp4'
import Blogs from '../components/Home/Blogs'
import Showcase from '../components/Home/Showcase'
import Showreel from '../components/Showcase/Showreel'

function ShowcasePage() {
  return (
    <Layout header={<CHeader title={"SHOW CASE"} image={mj} />}>
      <Showreel />
      <Showcase />
      <Blogs />
    </Layout>
  )
}

export default ShowcasePage