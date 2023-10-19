import React from 'react'
import Layout from '../components/shared/Layout'
import Header from '../components/Home/Header'
import BrandCreate from '../components/Home/BrandCreate'
import OurServices from '../components/Home/OurServices'
import JoinTD from '../components/Home/JoinTD'
import Blogs from '../components/Home/Blogs'
import Attention from '../components/Home/Attention'
import Quote from '../components/Home/Quote'
import TheProcess from '../components/Home/TheProcess'
import Showcase from '../components/Home/Showcase'

function Home() {
  return (
    <Layout header={<Header />}>
      <BrandCreate />
      <OurServices />
      <JoinTD />
      <Showcase/>
      <TheProcess/>
      <Quote/>
      <Attention/>
      <Blogs/>
    </Layout>
  )
}

export default Home