import { motion } from "framer-motion";
import {
  logoHeader,
  phoneDesk,
  phoneMob,
  phoneTablet,
} from "../../assets/images";
import { FadeIn } from "./FadeIn";

export const HeroPage = () => {
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
            {/* <FadeIn delay={0.2} direction='down'> */}
            <motion.h1
              variants={{
                hidden: {
                  opacity: 0,
                  y: 200,
                },
              }}
              initial="hidden"
              transition={{
                duration: 1,
                type: "tween",
                ease: [0.25, 0.25, 0.25, 0.75],
              }}
              animate={{ y: 0, opacity: 1 }}
              className="content__info-title"
            >
              Potencia la reCompra y fidelización de tus clientes
            </motion.h1>
            {/* </FadeIn> */}

            <motion.p 
            initial={{
                opacity: 0,
            }} 
            transition={{
              duration: 3,
            }}
            animate={{ opacity: 1 }}
            className="content__info-slogan">
              Tu negocio crece, tus clientes ahorran.
            </motion.p>

            <button className="content__info-btn">Empezar</button>
          </div>

          <motion.img
            initial={{ y: 500 }}
            transition={{ duration: 1 }}
            animate={{ y: 0 }}
            className="content__img content__img-desk"
            src={phoneDesk}
            alt="Iphone"
          />

          <motion.img
            initial={{ y: 500 }}
            transition={{ duration: 1 }}
            animate={{ y: 0 }}
            className="content__img content__img-tablet"
            src={phoneTablet}
            alt="Iphone"
          />

          <motion.img
            initial={{ y: 500 }}
            transition={{ duration: 1 }}
            animate={{ y: 0 }}
            className="content__img content__img-mob"
            src={phoneMob}
            alt="Iphone"
          />
        </div>
      </div>
    </>
  );
};
