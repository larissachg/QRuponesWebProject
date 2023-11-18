import {
  business,
  dashboard,
  marketing,
  qr,
  sales,
  store,
  whatsApp,
} from "../../assets/images";

export const InfoPage = () => {
  return (
    <>
      <div className="info container">
        <div className="info__text">
          <h2>Escanea, ahorra, disfruta!</h2>
          <p>
            Impulsando lealtad, generando ahorro. Incentiva a tus clientes a
            volver a tu negocio, beneficiándolos con cupones de descuentos para
            premiar su fidelidad e incentivar las recompras!
          </p>
        </div>

        <div className="info__grid">
          <div className="info__grid-col">
            <div className="info__grid-text">
              <img src={business} alt="icon-business" />
              <h3>Controla tu negocio</h3>
              <p>Ofrecemos reportes en tiempo real de todas tus ventas.</p>
            </div>

            <div className="info__grid-text">
              <img src={marketing} alt="icon-mkt" />
              <h3>Marketing y Publicidad</h3>
              <p>
                Puedes medir el éxito de tus campañas publicitarias mediante el
                control de las compras por QR.
              </p>
            </div>

            <div className="info__grid-text">
              <img src={store} alt="icon-store" />
              <h3>Tu negocio crece</h3>
              <p>
                Potenciamos la retención de clientes para que vuelvan una y otra
                vez, ¡haciendo crecer tu negocio!
              </p>
            </div>
          </div>

          <img className="info__grid-img" src={dashboard} alt="dashboard" />

          <div className="info__grid-col">
            <div className="info__grid-text">
              <img src={qr} alt="icon-qr" />
              <h3>Cupones digitales</h3>
              <p>
                Fomentamos la recompra de tus clientes mediante cupones
                generados en tiempo real.
              </p>
            </div>

            <div className="info__grid-text">
              <img src={whatsApp} alt="icon-wp" />
              <h3>Envíos sin límites</h3>
              <p>
                Los clientes recibirán los cupones QR en sus dispositivos
                móviles mediante WhatsApp.
              </p>
            </div>

            <div className="info__grid-text">
              <img src={sales} alt="icon-sales" />
              <h3>Impulsa tus ventas</h3>
              <p>
                El objetivo es aumentar la recompra de los clientes y generar
                mayores ventas
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
