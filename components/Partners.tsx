const Partners = () => {
  return (
    <div className="">
      <div className="text-center">
        <h1 className="text-5xl">Partners</h1>
      </div>
      <div className="my-32 items-center md:flex">
        <div className="mx-12 flex-1">
          <img
            src={require('@/assets/tum.png').default.src}
            alt="cert"
            className="mx-auto"
          />
        </div>
        <div className="mx-12 flex-1">
          <img
            src={require('@/assets/goethe.png').default.src}
            alt="cert"
            className="mx-auto"
          />
        </div>
        <div className="mx-12 flex-1">
          <img
            src={require('@/assets/fub.png').default.src}
            alt="cert"
            className="mx-auto"
          />
        </div>
      </div>
      <div className="my-32 items-center md:flex">
        <div className="mx-12 flex-1">
          <img
            src={require('@/assets/wwu.png').default.src}
            alt="cert"
            className="mx-auto"
          />
        </div>
        <div className="mx-12 flex-1">
          <img
            src={require('@/assets/reedu.png').default.src}
            alt="cert"
            className="mx-auto"
          />
        </div>
        <div className="mx-12 flex-1">
          <img
            src={require('@/assets/gast.png').default.src}
            alt="cert"
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  )
}

export default Partners
