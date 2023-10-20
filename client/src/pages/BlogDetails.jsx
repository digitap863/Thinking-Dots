import React from 'react'
import Layout from '../components/shared/Layout'
import Navbar from '../components/shared/Navbar'
import Blogs from '../components/Home/Blogs'
import BlogDetailComponent from '../components/Blogs/BlogDetailComponent'

function BlogDetails() {
  return (
    <Layout header={<Navbar/>}>
        <BlogDetailComponent/>
        <Blogs/>
    </Layout>
  )
}

export default BlogDetails