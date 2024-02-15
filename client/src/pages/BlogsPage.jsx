import React from 'react'
import Layout from '../components/shared/Layout'
import CHeader from '../components/About/CHeader'
import jd from '../assets/headerImages/JD.mp4'
import Blogs from '../components/Home/Blogs'
import BlogsComponent from '../components/Blogs/BlogsComponent'

function BlogsPage() {
  return (
     <Layout header={<CHeader title={"BLOGS"} image={jd} />}>
        <BlogsComponent/>
        <Blogs/>
     </Layout>
  )
}

export default BlogsPage