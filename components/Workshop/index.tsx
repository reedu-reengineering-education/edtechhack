import { useState } from 'react'
import { Button } from '../Elements/Button'

const Workshop = ({ workshop }: { workshop: any }) => {
  const [showMore, setShowMore] = useState(false)

  return (
    <div className="mx-12 flex-1 text-center">
      <img
        src={require(`@/assets/images/workshops/${workshop.image}`).default.src}
        alt="cert"
        className="mx-auto"
      />
      <h2 className="my-4 text-2xl font-semibold">{workshop.title}</h2>
      <h4 className="text-l my-4">with: {workshop.person}</h4>
      <h6>
        {showMore
          ? workshop.description
          : `${workshop.description.substring(0, 250)}`}
      </h6>
      <Button className="mx-auto" onClick={() => setShowMore(!showMore)}>
        {showMore ? 'Show less' : 'Show more'}
      </Button>
    </div>
  )
}

export default Workshop
