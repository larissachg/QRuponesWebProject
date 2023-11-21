import { motion } from "framer-motion";
import {
  logoHeader,
  phoneDesk,
  phoneMob,
  phoneTablet,
} from "../../../assets/images";
import { FadeIn } from "../../../components";

export const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="header container">
          <a href="#">
            <img className="header__img" src={logoHeader} alt="QRupones logo" />
          </a>
          <button className="header__button">Ingresar</button>
        </div>

        <div className="hero__content content container">
          <div className="content__info">
            <FadeIn as="h1" duration={3000} className="content__info-title">
              Potencia la reCompra y fidelización de tus clientes
            </FadeIn>

            <FadeIn
              as="p"
              duration={3000}
              delay={300}
              className="content__info-slogan"
            >
              Tu negocio crece, tus clientes ahorran.
            </FadeIn>

            <button className="content__info-btn">Empezar</button>
          </div>

          <motion.img
            initial={{ translateY: 0 }}
            animate={{ translateY: -40 }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
              repeatType: "mirror",
            }}
            className="content__img content__img-desk"
            src={phoneDesk}
            alt="Iphone"
          />

          <motion.img
            initial={{ translateY: 10 }}
            animate={{ translateY: -10 }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
              repeatType: "mirror",
            }}
            className="content__img content__img-tablet"
            src={phoneTablet}
            alt="Iphone"
          />

          <motion.img
            initial={{ translateY: 10 }}
            animate={{ translateY: -10 }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
              repeatType: "mirror",
            }}
            className="content__img content__img-mob"
            src={phoneMob}
            alt="Iphone"
          />
        </div>
      </div>
    </>
  );
};
