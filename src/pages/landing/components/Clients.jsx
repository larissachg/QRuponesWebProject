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
} from "../../../assets/images";
import { FadeIn } from "../../../components";
import { motion } from "framer-motion";

export const Clients = () => {
  return (
    <>
      <div className="clients">
        <motion.img
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          className="clients__figure clients__figure-plus"
          src={plusFigure}
          alt="Plus Figure"
        />

        <img
          className="clients__figure clients__figure-star"
          src={starFigure}
          alt="Star Figure"
        />

        <motion.img
          initial={{ translateY: -50 }}
          animate={{ translateY: 50 }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
            repeatType: "mirror",
          }}
          className="clients__figure clients__figure-roll"
          src={rollFigure}
          alt="Roll Figure"
        />

        <motion.img
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          className="clients__figure clients__figure-plus2"
          src={plusSmallFigure}
          alt="Plus2 Figure"
        />

        <motion.img
          initial={{ translateX: 0 }}
          animate={{ rotate: 360, translateX: 100 }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear",
            repeatType: "mirror",
          }}
          className="clients__figure clients__figure-line"
          src={lineFigure}
          alt="Line Figure"
        />

        <motion.img
          initial={{ translateY: 100 }}
          animate={{ translateY: -10 }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
            repeatType: "mirror",
          }}
          className="clients__figure clients__figure-circle"
          src={circleFigure}
          alt="Circle Figure"
        />

        <div className="clients__container container">
          <FadeIn as="h2" origin={"bottom"} className="clients__title">
            Nuestros Clientes
          </FadeIn>

          <div className="clients__grid">
            <div className="clients__grid-box">
              <FadeIn
                duration={500}
                delay={100}
                as="img"
                src={bretoLogo}
                alt="Breto Logo"
              />
            </div>

            <div className="clients__grid-box">
              <FadeIn
                duration={500}
                delay={100}
                as="img"
                src={fergusLogo}
                alt="Fergus Logo"
              />
            </div>

            <div className="clients__grid-box">
              <FadeIn
                duration={500}
                delay={100}
                as="img"
                src={sergiosLogo}
                alt="Sergios Logo"
              />
            </div>

            <div className="clients__grid-box">
              <FadeIn
                duration={500}
                delay={100}
                as="img"
                src={empacarLogo}
                alt="Empacar Express Logo"
              />
            </div>

            <div className="clients__grid-box">
              <FadeIn
                duration={500}
                delay={100}
                as="img"
                src={raphaellaLogo}
                alt="Raphaella Booz Logo"
              />
            </div>

            <div className="clients__grid-box">
              <FadeIn
                duration={500}
                delay={100}
                as="img"
                src={acaiLabLogo}
                alt="Acai Lab Logo"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
