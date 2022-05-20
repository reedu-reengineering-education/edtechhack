import Bar from './Elements/Bar'
import { Button } from './Elements/Button'

const Challenges = () => {
  return (
    <div className="pt-28 text-center" id="challenges">
      <h1 className="text-5xl">The challanges</h1>
      <div className="my-32 md:flex">
        <div className="mx-12 flex-1 text-center">
          <img
            src={require('@/assets/cert.png').default.src}
            alt="cert"
            className="mx-auto"
          />
          <h2 className="my-4 text-2xl font-semibold">Topic 1</h2>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem.
          </p>
        </div>
        <div className="mx-12 flex-1 text-center">
          <img
            src={require('@/assets/cert.png').default.src}
            alt="cert"
            className="mx-auto"
          />
          <h2 className="my-4 text-2xl font-semibold">Topic 1</h2>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem.
          </p>
        </div>
        <div className="mx-12 flex-1 text-center">
          <img
            src={require('@/assets/cert.png').default.src}
            alt="cert"
            className="mx-auto"
          />
          <h2 className="my-4 text-2xl font-semibold">Topic 1</h2>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem.
          </p>
        </div>
      </div>
      <Button className="mx-auto">Submit a challange</Button>
    </div>
  )
}

export default Challenges
