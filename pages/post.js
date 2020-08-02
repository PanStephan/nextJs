import Layout from '../components/Layout'

const Post = ({ url }) => (
  <Layout title={url.query.title}>
    <span>{url.query.title}</span>
    <p>lorem</p>
  </Layout>
)

export default Post