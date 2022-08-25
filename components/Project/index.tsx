import Image from 'next/image'

type Props = {
  name: string
  members: string
  description: string
  image?: string
  prize?: 'first' | 'second'
}

const Project = ({ name, members, description, image, prize }: Props) => (
  <div className="mb-40 flex-none md:flex">
    <div className="my-auto flex-1">
      {prize && prize === 'first' && (
        <span className="mb-2 rounded bg-orange-500 py-2 px-4 font-semibold text-white">
          1st prize
        </span>
      )}
      {prize && prize === 'second' && (
        <span className="mb-2 rounded bg-orange-500 py-2 px-4 font-semibold text-white">
          2nd prize
        </span>
      )}
      <p className="my-2 text-4xl font-bold text-royal-blue">{name}</p>
      <p className="mb-4 font-semibold text-zinc-600">{members}</p>
      <p>{description}</p>
    </div>
    <div className="my-auto flex-1 md:ml-4">
      <div className="my-4">
        {image && (
          <Image
            src={image}
            alt="Logo"
            layout="responsive"
            placeholder="blur"
            className="overflow-hidden"
          />
        )}
      </div>
    </div>
  </div>
)

export default Project
