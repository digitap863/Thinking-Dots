import React from 'react'
import Layout from '../components/shared/Layout'
import CHeader from '../components/About/CHeader'
import image from '../assets/headerImages/blogs.png'
import Blogs from '../components/Home/Blogs'
import BlogsComponent from '../components/Blogs/BlogsComponent'

function BlogsPage() {
  return (
     <Layout header={<CHeader title={"BLOGS"} image={image} />}>
        <BlogsComponent/>
        <Blogs/>
     </Layout>
  )
}

export default BlogsPage