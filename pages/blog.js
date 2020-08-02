import Layout from '../components/Layout'
import Link from 'next/link'

const PostLink = ({ url }) => (
  <li>
    <Link href={`/post?title=${url}`}>
    <a>{url}</a>
    </Link>
  </li>
)

const Blog = () => (
  <Layout title='my Bog'>
    <ul>
      <PostLink url='React'/>
    </ul>
  </Layout>
)

export default Blog