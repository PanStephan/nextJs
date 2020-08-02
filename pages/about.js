import Link from 'next/link'
import Layout from '../components/Layout'
import { useEffect, useState } from 'react'
import axios from 'axios'

const About = ({ profile }) => {

  // const [user, setUser] = useState(null)

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const profile = await fetch('https://api.github.com/users/PanStephan')
  //       setUser(await profile.json())
  //     } catch (e) { console.log(e) }
  //   })()
  // }, [])

  return (
    <Layout>
      { profile.login }
      <h1>About page</h1> 
        <Link href='/'>
          <a>Go to home</a>
        </Link>
      <p> JS programmer </p>
      <img src='/static/js-logo.png' alt='logo'/>
    </Layout>
  )
}

export async function getStaticProps() { 

  let profile

  try {
    profile = await axios('https://api.github.com/users/PanStephan')
  } catch (e) { console.log(e) }

  return {
    props: {
      profile: profile.data
    }
  }
}

export default About
