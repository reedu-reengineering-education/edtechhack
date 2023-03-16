import Image from 'next/image'
import { useRouter } from 'next/router'

const ImageGallery = () => {
  const router = useRouter()

  return (
    <div className="mx-auto grid grid-cols-3 gap-2">
      <div className="w-full rounded">
        <Image
          src={require(`@/assets/images/hack2022/DSCF0758.jpeg`)}
          alt="image"
        />
      </div>
      <div className="w-full rounded">
        <Image
          src={require(`@/assets/images/hack2022/EdTechHack-12.jpeg`)}
          alt="image"
        />
      </div>
      <div className="w-full rounded">
        <Image
          src={require(`@/assets/images/hack2022/EdTechHack-142.jpeg`)}
          alt="image"
        />
      </div>
      <div className="w-full rounded">
        <Image
          src={require(`@/assets/images/hack2022/EdTechHack-33.jpeg`)}
          alt="image"
        />
      </div>
      <div className="w-full rounded">
        <Image
          src={require(`@/assets/images/hack2022/EdTechHack-23.jpeg`)}
          alt="image"
        />
      </div>
      <div className="w-full rounded">
        <Image
          src={require(`@/assets/images/hack2022/EdTechHack-152.jpeg`)}
          alt="image"
        />
      </div>
    </div>
  )
}

export default ImageGallery
