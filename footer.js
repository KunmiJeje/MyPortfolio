class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: #1e40af;
          color: white;
          padding: 3rem 2rem;
          text-align: center;
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
        }
        .social-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin: 1.5rem 0;
        }
        .social-links a {
          color: white;
          transition: transform 0.3s, color 0.3s;
        }
        .social-links a:hover {
          color: #93c5fd;
          transform: translateY(-3px);
        }
        .copyright {
          margin-top: 1.5rem;
          opacity: 0.8;
        }
        .motto {
          font-style: italic;
          margin-top: 0.5rem;
        }
      </style>
      <footer>
        <div class="footer-content">
        <div class="container mx-auto text-center">
      <p class="text-gray-400 mb-2">📞 Phone: +447562901924</p>
      <p class="text-gray-400 mb-4">✉️ Email: kunmi.jeje2013@gmail.com</p>
          <div class="social-links">
            <a href="https://github.com/KunmiJeje" aria-label="GitHub"><i data-feather="github"></i></a>
            <a href="+447562901924" aria-label="Whatsapp"><i data-feather="whatsapp"></i></a>
            <a href="kunmi.jeje2013@gmail.com" aria-label="Mail"><i data-feather="mail"></i></a>
          </div>
          <p class="copyright">© 2025 Kunmi Jeje — All Rights Reserved.</p>
          <p class="motto">Building ideas through code — one project at a time.</p>
        </div>
        </div>
      </footer>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);