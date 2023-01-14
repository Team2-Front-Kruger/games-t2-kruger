export const HeroGames = ({ name, background_image }) => {
  // TODO: Para resolver los multiples HERO´s se debe enviar el objeto completo
  //* y en este componente realizar el map y CREAR UN SLIDE para evitar multipicidad

  return (
    <div
      className="hero"
      style={{ backgroundImage: `url(${background_image})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content justify-between items-end w-full text-left text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{name}</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
        <div className="carousel w-96">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={background_image} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
