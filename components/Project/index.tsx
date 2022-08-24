import Image from 'next/image'

type Props = {
  name: string
  members: string
  description: string
  image: string
}

const Project = ({ name, members, description, image }: Props) => (
  <div className="mb-40 flex-none md:flex">
    <div className="my-auto flex-1">
      <p className="my-2 text-4xl font-bold text-royal-blue">{name}</p>
      <p className="mb-4 font-semibold text-zinc-600">{members}</p>
      <p>{description}</p>
    </div>
    <div className="my-auto flex-1 md:ml-4">
      <div className="my-4">
        <Image
          src={image}
          alt="Logo"
          layout="responsive"
          placeholder="blur"
          className="overflow-hidden"
        />
      </div>
    </div>
  </div>
)

export default Project
