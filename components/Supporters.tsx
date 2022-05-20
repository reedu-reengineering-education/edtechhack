/* eslint-disable @next/next/no-img-element */
const Supporters = () => {
  return (
    <div className="pt-28" id="supporters">
      <div className="text-center">
        <h1 className="text-5xl">Supporters</h1>
      </div>
      <div className="my-32 md:flex">
        <div className="mx-12 flex-1">
          <img
            src={require('@/assets/images/supporters/diwh.png').default.src}
            alt="cert"
            className="mx-auto"
          />
        </div>
        <div className="mx-12 flex-1">
          <img
            src={require('@/assets/images/supporters/bwk.png').default.src}
            alt="cert"
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  )
}

export default Supporters
