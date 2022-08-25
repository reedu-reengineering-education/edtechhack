import Project from '@/components/Project'
import type { NextPage } from 'next'
import Head from 'next/head'

import ProjectCollection from '@/assets/collections/projects/projects.json'

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
          {ProjectCollection.map((p, i) => (
            <Project
              key={i}
              name={p.name}
              members={p.members}
              description={p.description}
              image={
                p.image
                  ? require(`@/assets/images/projects/${p.image}`)
                  : undefined
              }
              prize={
                p.prize === 'first'
                  ? 'first'
                  : p.prize === 'second'
                  ? 'second'
                  : undefined
              }
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default Projects
