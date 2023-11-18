import { plusIcon, wave } from "../../assets/images";

export const QuestionsPage = () => {
  return (
    <>
      <div className="questions">
        <img className="questions__wave" src={wave} alt="wave" />
        <div className="questions__container container">
          <div className="questions__text">
            <h2>Preguntas Frecuentes</h2>
            <p>
              Si tienes dudas acerca de si Qrupones es la opción adecuada para
              ti, no te preocupes. Estamos a tu disposición para proporcionarte
              toda la información que necesites y responder a todas tus
              preguntas.
            </p>
          </div>

          <div className="questions__list">
            <div className="questions__list-box">
              <h3>¿Por qué usar QRupones?</h3>
              <img src={plusIcon} alt="more" />
            </div>

            <div className="questions__list-box">
              <h3>¿Cómo se beneficia mi negocio con QRupones?</h3>
              <img src={plusIcon} alt="more" />
            </div>

            <div className="questions__list-box">
              <h3>¿Como puedo supervisar mi negocio con QRupones?</h3>
              <img src={plusIcon} alt="more" />
            </div>

            <div className="questions__list-box">
              <h3>¿QRupones ofrece ayuda para mi personal?</h3>
              <img src={plusIcon} alt="more" />
            </div>

            <div className="questions__list-box">
              <h3>
                What is the difference between Draft and a traditional bank
                account?
              </h3>
              <img src={plusIcon} alt="more" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
