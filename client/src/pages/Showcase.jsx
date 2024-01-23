import React from 'react'
import Layout from '../components/shared/Layout'
import CHeader from '../components/About/CHeader'
import image from '../assets/headerImages/showcase.png'
import Blogs from '../components/Home/Blogs'
import Showcase from '../components/Home/Showcase'
import Showreel from '../components/Showcase/Showreel'

function ShowcasePage() {
  return (
    <Layout header={<CHeader title={"SHOW CASE"} image={image} />}>
      <Showreel />
      <Showcase />
      <Blogs />
    </Layout>
  )
}

export default ShowcasePage