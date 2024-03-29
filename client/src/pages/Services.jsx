import React from 'react'
import Layout from '../components/shared/Layout'
import CHeader from '../components/About/CHeader'
// import image from '../assets/headerImages/serviceshead.png'
import apj from '../assets/headerImages/APJ.mp4'
import ServicesGrid from '../components/About/ServicesGrid'
import Attention from '../components/Home/Attention'
import Blogs from '../components/Home/Blogs'
import WorkTiming from '../components/Services/WorkTiming'

function Services() {
  return (
    <Layout header={<CHeader title={"SERVICES"} image={apj} />}>
      <WorkTiming />
      <ServicesGrid />
      <Attention />
      <Blogs />
    </Layout>
  )
}

export default Services