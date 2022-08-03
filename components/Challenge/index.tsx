import { useState } from 'react'
import { Button } from '../Elements/Button'

const Challenge = ({ c }: { c: any }) => {
  const [showMore, setShowMore] = useState(false)

  return (
    <div className="mx-12 flex-1 text-center">
      <img
        src={require(`@/assets/images/challenges/${c.image}`).default.src}
        alt="cert"
        className="mx-auto"
      />
      <h2 className="my-4 text-2xl font-semibold">{c.title}</h2>
      <h6>{showMore ? c.description : `${c.description.substring(0, 250)}`}</h6>
      <Button className="mx-auto" onClick={() => setShowMore(!showMore)}>
        {showMore ? 'Show less' : 'Show more'}
      </Button>
      {/* <p className="w-32 truncate ">{c.description}</p> */}
    </div>
  )
}

export default Challenge
