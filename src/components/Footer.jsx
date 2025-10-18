import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
        <div className='sociales'>
            <a href="https://www.linkedin.com/in/jose-luis-espinola-a036b7125/" target="_blank" title="Ir a LinkedIn">
                <img class="linkedin" src="/Linkedin.png" alt="Linkedin" />
            </a>
            <a href="#" target="_blank" title="Sin github">
                <img class="github" src="/github1.png" alt="Github" />
            </a>
            <a href="https://www.facebook.com/joseluis.espinola1" target="_blank" title="Ir a Facebook">
                <img class="facebook" src="/Facebook.png" alt="Facebook" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=+543487616158&text=Hola%2C%20me%20gustaría%20realizar%20una%20página%20web...%20podrías%20contarme?" target="_blank" title="Ir a Whatsapp">
                <img class="whatsapp" src="/whatsapp.png" alt="Whatsapp" />
            </a>
            <p>© 2025 Ecommerce Store. Todos los derechos reservados.</p>
        </div>
     </footer>
  );
}

export default Footer;