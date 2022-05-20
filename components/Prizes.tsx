const Prizes = () => {
  return (
    <div className="pt-28 text-center" id="prizes">
      <h1 className="text-5xl">The prizes</h1>
      <div className="my-32 md:flex">
        <div className="mx-12 flex-1 text-center">
          <img
            src={require('@/assets/1.png').default.src}
            alt="cert"
            className="mx-auto"
          />
          <h2 className="my-4 text-2xl font-semibold">1st Prize</h2>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem.
          </p>
        </div>
        <div className="mx-12 flex-1 text-center">
          <img
            src={require('@/assets/1.png').default.src}
            alt="cert"
            className="mx-auto"
          />
          <h2 className="my-4 text-2xl font-semibold">1st Prize</h2>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem.
          </p>
        </div>
        <div className="mx-12 flex-1 text-center">
          <img
            src={require('@/assets/1.png').default.src}
            alt="cert"
            className="mx-auto"
          />
          <h2 className="my-4 text-2xl font-semibold">1st Prize</h2>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Prizes
