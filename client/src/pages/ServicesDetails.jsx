import React from 'react'
import Layout from '../components/shared/Layout'
import CHeader from '../components/About/CHeader'
import ComponentTwo from '../components/Services/ComponentTwo'
import ServiceShowcase from '../components/Services/ServiceShowcase'
import Blogs from '../components/Home/Blogs'
import ServicesRow from '../components/Services/ServicesRow'
import { useLocation } from 'react-router-dom'

function ServicesDetails() {
    const location = useLocation()

    const data = location.state;
    return (
        <Layout header={<CHeader title={data?.header?.title} image={data?.header?.image} />}>
            <ComponentTwo data={data?.component2} />
            <ServicesRow data={data?.servicesRowImages} />
            <ServiceShowcase data={data?.showcase} />
            <Blogs />
        </Layout>
    )
}

export default ServicesDetails