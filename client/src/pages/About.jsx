import React from 'react'
import Layout from '../components/shared/Layout'
import CHeader from '../components/About/CHeader'
import chaplin from '../assets/headerImages/about.png'
import Blogs from '../components/Home/Blogs'
import TheProcess from '../components/Home/TheProcess'
import JoinTD from '../components/Home/JoinTD'
import Quote from '../components/Home/Quote'
import TheShowreel from '../components/About/TheShowreel'
import VisionMission from '../components/About/VisionMission'
import CoreValues from '../components/About/CoreValues'

function About() {
  return (
    <Layout header={<CHeader title={'WE/US'} image={chaplin}/>}>
        <VisionMission/>
        <CoreValues/>
        <TheShowreel/>
        <Quote/>
        <JoinTD/>
        <TheProcess/>
        <Blogs/>
    </Layout>
  )
}

export default About