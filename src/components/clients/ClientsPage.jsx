import {
  acaiLabLogo,
  bretoLogo,
  circleFigure,
  empacarLogo,
  fergusLogo,
  lineFigure,
  plusFigure,
  plusSmallFigure,
  raphaellaLogo,
  rollFigure,
  sergiosLogo,
  starFigure,
} from "../../assets/images";

export const ClientsPage = () => {
  return (
    <>
      <div className="clients">
        <img
          className="clients__figure clients__figure-plus"
          src={plusFigure}
          alt="Plus Figure"
        />

        <img
          className="clients__figure clients__figure-star"
          src={starFigure}
          alt="Star Figure"
        />

        <img
          className="clients__figure clients__figure-roll"
          src={rollFigure}
          alt="Roll Figure"
        />

        <img
          className="clients__figure clients__figure-plus2"
          src={plusSmallFigure}
          alt="Plus2 Figure"
        />

        <img
          className="clients__figure clients__figure-line"
          src={lineFigure}
          alt="Line Figure"
        />

        <img
          className="clients__figure clients__figure-circle"
          src={circleFigure}
          alt="Circle Figure"
        />

        <div className="clients__container container">
          <h2 className="clients__title">Nuestros Clientes</h2>

          <div className="clients__grid">
            <div className="clients__grid-box">
              <img src={bretoLogo} alt="Breto Logo" />
            </div>

            <div className="clients__grid-box">
              <img src={fergusLogo} alt="Fergus Logo" />
            </div>

            <div className="clients__grid-box">
              <img src={sergiosLogo} alt="Sergios Logo" />
            </div>

            <div className="clients__grid-box">
              <img src={empacarLogo} alt="Empacar Express Logo" />
            </div>

            <div className="clients__grid-box">
              <img src={raphaellaLogo} alt="Raphaella Booz Logo" />
            </div>

            <div className="clients__grid-box">
              <img src={acaiLabLogo} alt="Acai Lab Logo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
