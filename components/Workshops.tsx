import Image from 'next/image'
import { useRouter } from 'next/router'

const posts = [
  {
    id: 1,
    title: 'senseBox',
    href: '#',
    description:
      'The senseBox is a modular, open-source, and easy-to-use sensor box for environmental monitoring. It is designed for use in schools and citizen science projects. The senseBox is a great tool for learning about environmental monitoring and data analysis. In this workshop, we will show you how to build your own senseBox and how to use it to collect data.',
    date: 'Mar 16, 2020',
    website: 'https://sensebox.de/en/',
    datetime: '2020-03-16',
    category: { title: 'Physical Computing', href: '#' },
    author1: {
      name: 'Felix',
      role: 'Co-Founder / CTO',
      href: '#',
      image: 'felix.jpeg',
    },
    author2: {
      name: 'Mario',
      role: 'Co-Founder / CTO',
      href: '#',
      image: 'mario.jpeg',
    },
  },
  {
    id: 2,
    title: 'AI education in schools',
    href: '#',
    description:
      'Last year, the Brazilian School Computing Standard was approved, and according to the Ministry of Education, the implementation in schools should start in 2023. The Computing Standard includes a variety of computing topics that need to be addressed in schools, such as logic, data structures, artificial intelligence. Therefore, this workshop aims to demonstrate how educational technologies can support students in acquiring this expected computing knowledge and skills. For this, we chose one computing topic to address in the workshop: Artificial Intelligence (AI). This workshop will address what AI is and its main techniques and demonstrate some educational tools developed to teach AI in schools. Finally, we will explore an educational technology designed to teach how AI works to students and see how educational technologies can practically support computing education through a German use case.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'AI', href: '#' },
    author1: {
      name: 'Kamilla',
      role: 'Co-Founder / CTO',
      href: '#',
      image: 'kamilla.jpeg',
    },
  },
  {
    id: 3,
    title: 'Do-It-Yourself Learning: Taking Control with AI-Driven Education',
    href: '#',
    description:
      'The world of learning is evolving rapidly with the rise of AI algorithms, offering diverse opportunities, perspectives, but also risks for learning. With a focus on the proper use of these new technologies, sustainable potentials arise for self-organized and independent learning. In the workshop, everything revolves around the central question of how new digital technologies can be used for sustainable learning outcomes. As the maker of your own learning journey, we will discover how to expand digital competences to foster self-determined learning.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'AI', href: '#' },
    author1: {
      name: 'Anna',
      role: 'Co-Founder / CTO',
      href: '#',
      image: 'anna.jpg',
    },
    author2: {
      name: 'Tobias',
      role: 'Co-Founder / CTO',
      href: '#',
      image: 'tobias.jpg',
    },
  },
  {
    id: 4,
    title: 'Prototyping and Speculative Design',
    href: '#',
    description:
      'In the current global economic, demographic, and ecological crises, imagination and speculation are necessary skills. It is almost impossible to define a service, a product, or a change of habit based only on the present. On the other hand, speculative scenarios can make us use external contexts to reveal possible futures and come up with tangible and usable proposals. The Prototyping workshop will present theory and use questions to invite participants to build and test prototypes within future scenarios.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'UX and Design', href: '#' },
    author1: {
      name: 'Kim',
      role: 'Co-Founder / CTO',
      href: '#',
      image: 'kim.png',
    },
  },
  {
    id: 5,
    title: 'Introduction Labrador da Caninos Loucos',
    href: '#',
    description:
      'The workshop will give a Brief presentation of the Caninos Labrador board capabilities. The workshop will cover the following topics: Linux terminal and package manager basics, GPIO programming on Labrador using the caninos-sdk library for Python, PWM usage on the caninos-sdk Library, External access to the Labrador board (SSH, serial)',
    date: 'Mar 16, 2020',
    website: 'https://caninosloucos.org/pt/',
    datetime: '2020-03-16',
    category: { title: 'Physical Computing' },
    author1: {
      name: 'Augusto Machado',
      role: 'Co-Founder / CTO',
      href: '#',
      image: 'augusto.jpeg',
    },
  },

  // More posts...
]

const Workshops = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Workshops
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            We will have 5 different pre hack Workshops to help you get started
            with your project.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map(post => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="relative z-10 flex items-center gap-x-4 rounded-full bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-100">
                {post.category.title}
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <span className="absolute inset-0" />
                  {post.title}
                </h3>
                <p className="line-clamp-3 mt-5 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <div className="h-10 w-10 rounded-full bg-gray-50">
                  <Image
                    src={require(`@/assets/images/mentors/${post.author1.image}`)}
                    layout="responsive"
                    className="h-10 w-10 rounded-full bg-gray-50"
                    alt="mentor"
                    placeholder="blur"
                  />
                </div>

                {post.author2 ? (
                  <div className="h-10 w-10 rounded-full bg-gray-50">
                    <Image
                      src={require(`@/assets/images/mentors/${post.author2.image}`)}
                      layout="responsive"
                      className="h-10 w-10 rounded-full bg-gray-50"
                      alt="mentor"
                      placeholder="blur"
                    />
                  </div>
                ) : null}

                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <span className="absolute inset-0" />
                    {post.author1.name}{' '}
                    {post.author2 ? <span>and {post.author2.name}</span> : null}
                  </p>

                  {post.website ? (
                    <a href={post.website}>
                      {' '}
                      <span className="absolute inset-0" /> {post.website}
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Workshops
