import {
  facebookIcon,
  instagramIcon,
  logoFooter,
  waveBlack
} from '../../../assets/images'

export const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <img className='footer__wave' src={waveBlack} alt='wave' />
        <div className='footer__container container'>
          <img className='footer__container-logo' src={logoFooter} alt='logo' />

          <button className='footer__container-btn'>Estoy Listo</button>

          <div>
            <a
              href='https://www.facebook.com/qrupones'
              target='_blank'
              rel='noreferrer'
            >
              <img
                className='footer__container-icon'
                src={facebookIcon}
                alt='facebook'
              />
            </a>

            <a
              href='https://www.instagram.com/qrupones'
              target='_blank'
              rel='noreferrer'
            >
              <img
                className='footer__container-icon'
                src={instagramIcon}
                alt='instagram'
              />
            </a>
            <p className='footer__container-copyright'>
              Copyright © 2023 - All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
