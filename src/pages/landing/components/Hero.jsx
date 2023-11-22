import { motion } from "framer-motion";
import {
  logoHeader,
  phoneDesk,
  phoneMob,
  phoneTablet,
} from "../../../assets/images";
import { isMobile, isDesktop } from 'react-device-detect';

import { FadeIn, MyOptimizedImage } from "../../../components";

export const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="header container">
          <a href="#">
            <MyOptimizedImage srcDesk={logoHeader} preLoad={true}>
              <img
                className="header__img"
                alt="QRupones logo"
                loading="eager"
              />
            </MyOptimizedImage>
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

          <MyOptimizedImage
            srcDesk={phoneDesk}
            srcMob={phoneMob}
            srcTablet={phoneTablet}
            preLoad={isDesktop}
          >
            <motion.img
              initial={{ translateY: isMobile ? 10 : 0 }}
              animate={{ translateY: isMobile ? -10 : -40 }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
                repeatType: "mirror",
              }}
              className="content__img"
              alt="Iphone"
              loading="eager"
            />
          </MyOptimizedImage>

        </div>
      </div>
    </>
  );
};
