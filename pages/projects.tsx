import Project from '@/components/Project'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Projects: NextPage = () => {
  return (
    <div className="pt-16 lg:pt-24">
      <Head>
        <title>German-Brazilian EdTech Hackathon</title>

        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>

      {/* <MainImage /> */}

      <main className="container mx-auto px-4">
        <div className="my-40">
          <p className="text-center text-4xl font-bold lg:text-6xl">Projects</p>
        </div>
        <div className="my-4">
          <Project
            name="Project #1"
            members="Name 1, Name 2, Name 3, Name 4"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            image={require('@/assets/images/bg.png')}
          />
          <Project
            name="Project #2"
            members="Name 1, Name 2, Name 3, Name 4"
            description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
            image={require('@/assets/images/bg.png')}
          />
        </div>
      </main>
    </div>
  )
}

export default Projects
