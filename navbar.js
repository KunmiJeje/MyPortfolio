class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background-color: white;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        .logo {
          color: #1e40af;
          font-weight: bold;
          font-size: 1.5rem;
          font-family: 'Roboto Mono', monospace;
        }
        ul {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        a {
          color: #4b5563;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
          position: relative;
          padding: 0.5rem 0;
        }
        a:hover {
          color: #1e40af;
        }
        a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #1e40af;
          transition: width 0.3s;
        }
        a:hover::after {
          width: 100%;
        }
        @media (max-width: 768px) {
          ul {
            display: none;
          }
        }
      </style>
      <nav>
        <div class="logo">Kunmi Jeje</div>
        <ul>
          <li><a href="index.html#hero">Home</a></li>
          <li><a href="index.html#about">About</a></li>
          <li><a href="portfolio.html">Projects</a></li>
          <li><a href="index.html#contact">Contact</a></li>
        </ul>
</nav>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);