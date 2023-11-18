import {
  business,
  dashboard,
  marketing,
  qr,
  sales,
  store,
  whatsApp
} from '../../../assets/images'
import { InfoCard } from '../../../components'

export const Info = () => {
  return (
    <>
      <div className='info container'>
        <div className='info__text'>
          <h2>Escanea, ahorra, disfruta!</h2>
          <p>
            Impulsando lealtad, generando ahorro. Incentiva a tus clientes a
            volver a tu negocio, beneficiándolos con cupones de descuentos para
            premiar su fidelidad e incentivar las recompras!
          </p>
        </div>

        <div className='info__grid'>
          <div className='info__grid-col'>
            <InfoCard
              img={business}
              title={'Controla tu negocio'}
              text={'Ofrecemos reportes en tiempo real de todas tus ventas.'}
            />

            <InfoCard
              img={marketing}
              title={'Marketing y Publicidad'}
              text={`Puedes medir el éxito de tus campañas publicitarias mediante el
              control de las compras por QR.`}
            />

            <InfoCard
              img={store}
              title={'Tu negocio crece'}
              text={` Potenciamos la retención de clientes para que vuelvan una y otra
              vez, ¡haciendo crecer tu negocio!`}
            />
          </div>

          <img className='info__grid-img' src={dashboard} alt='dashboard' />

          <div className='info__grid-col'>
            <InfoCard
              img={qr}
              title={'Cupones digitales'}
              text={`Fomentamos la recompra de tus clientes mediante cupones
              generados en tiempo real.`}
            />

            <InfoCard
              img={whatsApp}
              title={'Envíos sin límites'}
              text={`Los clientes recibirán los cupones QR en sus dispositivos
              móviles mediante WhatsApp.`}
            />

            <InfoCard
              img={sales}
              title={'Impulsa tus ventas'}
              text={`El objetivo es aumentar la recompra de los clientes y generar
              mayores ventas`}
            />
          </div>
        </div>
      </div>
    </>
  )
}
