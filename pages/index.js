import Link from 'next/link'
import Layout from '../components/Layout'

const Index = () => (
  <Layout title='home'>
    <Link href='/about'>
      <a>Go to about</a>
    </Link>
    <div>Welcom to the home page</div>
  </Layout>
)

export default Index