import Project from '@/components/Project'
import type { NextPage } from 'next'
import Head from 'next/head'
import ProjectCollection from '@/assets/collections/projects/projects2023.json'
import ImageGallery from '@/components/ImageGallery'

const Projects: NextPage = () => {
  return (
    <div className="pt-16 lg:pt-24">
      <Head>
        <title>German-Brazilian EdTech Hackathon 2023</title>

        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>

      {/* <MainImage /> */}

      <main className="container mx-auto px-4">
        <div className="my-40">
          <p className="text-center text-4xl font-bold lg:text-6xl">
            Impressions
          </p>
          <ImageGallery />
          <div className="mx-auto my-8 aspect-video max-h-[40rem] w-full">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube-nocookie.com/embed/Fjb_gJ1ZsP4"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </div>
        <div className="my-40">
          <p className="text-center text-4xl font-bold lg:text-6xl">
            Projects 2023
          </p>
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
