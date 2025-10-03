import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <section id="bienvenida" className="bienvenida">
          <h1>Bienvenido</h1>
          <p>Si estas pensando en comprar, piensa en nosotros. Somos ECOMMERCE
            y trabajamos con los mejores productos del mercado.
          </p>
        </section>
      </div>
      
      <section id="nosotros" className="nosotros">
          <h2>NOSOTROS</h2>
          <p>En ECOMMERS, creemos que comprar debería ser una experiencia tan satisfactoria como el producto que recibís. Nacimos con una misión clara: acercarte lo mejor del mercado, con la comodidad de hacerlo desde donde estés, cuando quieras.
              Somos más que una tienda online. Somos un equipo apasionado por la calidad, la innovación y el servicio. Cada artículo que ves en nuestra plataforma ha sido cuidadosamente seleccionado para ofrecerte lo último en tendencias, funcionalidad y estilo. Ya sea que estés buscando renovar tu hogar, actualizar tu guardarropa o encontrar ese regalo perfecto, estamos acá para ayudarte a elegir con confianza.
          </p>
          <p className='centro'>🌐 Transparencia, rapidez y confianza son los pilares que nos definen.</p>
          <p className='centro'>📦 Enviamos a todo el país, con seguimiento en tiempo real.</p>
          <p className='centro'>🤝 Y si algo no te convence, nuestro equipo de atención está listo para ayudarte.</p>
          <p>Gracias por elegirnos. Porque detrás de cada clic, hay una historia que queremos cpmpartir con vos.</p>
      </section>

      <section id="container-preguntas">
        <h2 class="title-preguntas">PREGUNTAS</h2>
        <details>
            <summary>¿Qué servicios ofrece Administración Bourget?</summary>
            <p class="repuesta">
                Administramos consorcios, edificios y departamentos, asegurando una gestión 
                eficiente de mantenimiento, cobro de expensas, pago de servicios, atención a 
                propietarios e inquilinos, y cumplimiento de normativas legales.
            </p>
        </details>

        <details>
            <summary>¿Cómo puedo contactar a Administración Bourget?</summary>
            <p class="repuesta">
                Puedes comunicarte con nosotros a través de nuestro sitio web, correo 
                electrónico o línea telefónica. También ofrecemos atención personalizada en 
                nuestra oficina para consultas y asesoramiento.
            </p>
        </details>

        <details>
            <summary>¿Cómo se manejan los pagos de expensas?</summary>
            <p class="repuesta">
                Las expensas pueden abonarse mediante transferencia bancaria, pago online, 
                débito automático o en nuestras oficinas. Ofrecemos opciones flexibles para 
                arantizar comodidad en la administración de pagos.
            </p>
        </details>

        <details>
            <summary>¿Qué hacer en caso de una urgencia en el consorcio?</summary>
            <p class="repuesta">
                Si surge una urgencia, como problemas de plomería, electricidad o seguridad, 
                debes comunicarte con nuestra línea de atención prioritaria, disponible las 
                24 horas. Nos encargamos de coordinar la solución de manera rápida y eficiente.
            </p>
        </details>

        <details>
            <summary> ¿Cómo puedo acceder a la documentación del consorcio?</summary>
            <p class="repuesta">
                Los propietarios pueden acceder a la documentación, balances, reglamentos y 
                actas de reuniones a través de nuestra plataforma online o solicitarlos 
                directamente en nuestra oficina.
            </p>
        </details>

        <details>
            <summary>¿Cómo puedo reportar una queja o solicitar un mantenimiento?</summary>
            <p class="repuesta">
                Si tienes una queja o necesitas solicitar un mantenimiento, puedes hacerlo a 
                través de nuestro formulario de contacto en la web, por correo electrónico o 
                personalmente en nuestra oficina. Nos aseguramos de dar seguimiento y resolver 
                cada solicitud en el menor tiempo posible.
            </p>
        </details>

        <details>
            <summary>¿Cuál es la ubicación de las oficinas?</summary>
            <p class="repuesta">
                Has clic <a href="#container-sucursales">aquí</a> para ver la ubicación de nuestras oficinas.
            </p>
        </details>
    </section>

      <section id="ubicacion" className="ubicacion">
          <h2>UBICACION</h2>
          <iframe
            title="Mapa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.736446264443!2d-58.38614968477091!3d-34.60373848045916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb2e6b1e6e7b%3A0x7f8c2f2b2e2e2e2e!2sObelisco%2C%20CABA!5e0!3m2!1ses!2sar!4v1633024800000!5m2!1ses!2sar"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
      </section>
    </div>
  );
};

export default Home;