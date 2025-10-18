import './Home.css';

function Home() {
    return (
        <div className="home-container">
            <div className="home-content">
                <section id="bienvenida" className="bienvenida">
                    <h1>Bienvenido</h1>
                    <p>Si estas pensando en comprar, piensa en nosotros. 
                        Somos <span>ECOMMERCE STORE</span> y trabajamos 
                        con los mejores productos del mercado.
                    </p>
                </section>
            </div>
        

            <section id="nosotros" className="nosotros">
                <h2>NOSOTROS</h2>
                <p>En ECOMMERS STORE, creemos que comprar debería ser una experiencia tan satisfactoria como el producto que recibís. 
                    Nacimos con una misión clara: acercarte lo mejor del mercado, con la comodidad de hacerlo desde donde estés, 
                    cuando quieras. Somos más que una tienda online. Somos un equipo apasionado por la calidad, la innovación y el 
                    servicio. Cada artículo que ves en nuestra plataforma ha sido cuidadosamente seleccionado para ofrecerte lo 
                    ltimo en tendencias, funcionalidad y estilo. Ya sea que estés buscando renovar tu hogar, actualizar tu guardarropa 
                    o encontrar ese regalo perfecto, estamos acá para ayudarte a elegir con confianza.
                </p>
                <p className='centro'>🌐 Transparencia, rapidez y confianza son los pilares que nos definen.</p>
                <p className='centro'>📦 Enviamos a todo el país, con seguimiento en tiempo real.</p>
                <p className='centro'>🤝 Y si algo no te convence, nuestro equipo de atención está listo para ayudarte.</p>
                <p>Gracias por elegirnos. Porque detrás de cada clic, hay una historia que queremos compartir con vos.</p>
            </section>


            <section id="container-preguntas">
                <h2 class="title-preguntas">PREGUNTAS</h2>

                <details>
                    <summary>¿Qué tipo de productos ofrece Ecommers Store?</summary>
                    <p class="repuesta">
                        Ofrecemos una selección curada de productos de tecnología, hogar, moda y regalos. Cada artículo está elegido por su calidad, funcionalidad y estilo.
                    </p>
                </details>

                <details>
                    <summary>¿Necesito estar registrado para comprar?</summary>
                    <p class="repuesta">
                        No es obligatorio registrarse para navegar, pero sí para realizar compras y acceder al carrito personalizado. El registro permite guardar tu historial y gestionar tus pedidos.
                    </p>
                </details>

                <details>
                    <summary>¿Cómo funciona el carrito de compras?</summary>
                    <p class="repuesta">
                        El carrito se asocia a tu usuario logueado. Podés agregar productos, modificar cantidades y confirmar la compra cuando estés listo. Se sincroniza con MockAPI para mantener stock real.
                    </p>
                </details>

                <details>
                    <summary>¿Qué métodos de pago están disponibles?</summary>
                    <p class="repuesta">
                        Actualmente aceptamos pagos por transferencia bancaria, tarjeta de crédito y débito. Pronto se integrarán más opciones como billeteras virtuales.
                    </p>
                </details>

                <details>
                    <summary>¿Cómo puedo hacer seguimiento de mi pedido?</summary>
                    <p class="repuesta">
                        Una vez realizada la compra, recibirás un número de seguimiento. Podés consultarlo desde tu perfil o en la sección de pedidos. El envío tiene actualización en tiempo real.
                    </p>
                </details>

                <details>
                    <summary>¿Qué hago si tengo un problema con mi compra?</summary>
                    <p class="repuesta">
                        Podés contactarnos desde el formulario de atención al cliente. Nuestro equipo está disponible para resolver cualquier inconveniente con tu pedido, producto o entrega.
                    </p>
                </details>

                <details>
                    <summary>¿Dónde están ubicadas nuestras oficinas?</summary>
                    <p class="repuesta">
                        Has clic <a href="#ubicacion">aquí</a> para ver la ubicación de nuestras oficinas y puntos de retiro.
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
                    loading="lazy">
                </iframe>
            </section>
        </div>
    );
};

export default Home;