// Jyoti Watch Company - React App
const App = () => {
  const watches = [
    {
      id: 1,
      name: 'Classic Elegance',
      price: '$199.99',
      image: 'https://via.placeholder.com/300x300?text=Classic+Watch',
      description: 'Timeless design with premium craftsmanship'
    },
    {
      id: 2,
      name: 'Modern Minimalist',
      price: '$249.99',
      image: 'https://via.placeholder.com/300x300?text=Modern+Watch',
      description: 'Sleek and sophisticated timepiece'
    },
    {
      id: 3,
      name: 'Sporty Dash',
      price: '$299.99',
      image: 'https://via.placeholder.com/300x300?text=Sport+Watch',
      description: 'Performance meets style'
    }
  ];

  const handleAddToCart = (watchName) => {
    alert(`${watchName} added to cart!`);
  };

  return `
    <div class="website-container">
      <!-- Navigation Header -->
      <header class="header animate-fade-in">
        <div class="container">
          <nav class="navbar">
            <div class="logo">
              <h1>🕐 Jyoti Watch Company</h1>
            </div>
            <ul class="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <!-- Hero Section -->
      <section id="home" class="hero animate-slide-up">
        <div class="container">
          <div class="hero-content">
            <h2>Premium Watches for Every Moment</h2>
            <p>Discover timeless elegance and precision craftsmanship</p>
            <button class="cta-button" onclick="document.getElementById('products').scrollIntoView({behavior: 'smooth'})">
              Shop Now
            </button>
          </div>
        </div>
      </section>

      <!-- Products Section -->
      <section id="products" class="products-section">
        <div class="container">
          <h2>Our Collection</h2>
          <div class="products-grid">
            ${watches.map((watch, index) => `
              <div class="product-card animate-scale-in" style="animation-delay: ${index * 100}ms;">
                <img src="${watch.image}" alt="${watch.name}" class="product-image">
                <h3>${watch.name}</h3>
                <p class="description">${watch.description}</p>
                <p class="price">${watch.price}</p>
                <button class="add-to-cart-btn" onclick="handleAddToCart('${watch.name}')">
                  Add to Cart
                </button>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="about-section">
        <div class="container">
          <h2>About Jyoti</h2>
          <div class="about-content">
            <p>At Jyoti Watch Company, we believe that a watch is more than just a timekeeper. It's a statement of style, a symbol of precision, and a companion for life's precious moments.</p>
            <p>Since our founding, we've been committed to creating exceptional timepieces that combine traditional craftsmanship with modern design.</p>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="contact-section">
        <div class="container">
          <h2>Get In Touch</h2>
          <form class="contact-form" onsubmit="handleContactSubmit(event)">
            <input type="text" placeholder="Your Name" required>
            <input type="email" placeholder="Your Email" required>
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit" class="submit-btn">Send Message</button>
          </form>
        </div>
      </section>

      <!-- Footer -->
      <footer class="footer">
        <div class="container">
          <p>&copy; 2024 Jyoti Watch Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  `;
};

// DOM Rendering
function renderApp() {
  const root = document.getElementById('root');
  if (root) {
    root.innerHTML = App();
    addGlobalStyles();
    addEventListeners();
  }
}

// Global Styles
function addGlobalStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .website-container {
      width: 100%;
      overflow-x: hidden;
    }

    /* Header & Navigation */
    .header {
      background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
      color: white;
      padding: 1rem 0;
      position: sticky;
      top: 0;
      z-index: 100;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
    }

    .logo h1 {
      font-size: 1.8rem;
      margin: 0;
      font-weight: 600;
    }

    .nav-links {
      display: flex;
      list-style: none;
      gap: 2rem;
      margin: 0;
      padding: 0;
    }

    .nav-links a {
      color: white;
      transition: color 150ms ease;
    }

    .nav-links a:hover {
      color: #ffd700;
      text-decoration: none;
    }

    /* Hero Section */
    .hero {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 6rem 0;
      text-align: center;
    }

    .hero-content h2 {
      font-size: 3rem;
      margin-bottom: 1rem;
      font-weight: 600;
    }

    .hero-content p {
      font-size: 1.2rem;
      margin-bottom: 2rem;
      opacity: 0.95;
    }

    .cta-button {
      background: #ffd700;
      color: #1a1a1a;
      padding: 0.875rem 2rem;
      font-size: 1.1rem;
      font-weight: 600;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      transition: all 150ms ease;
      box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
    }

    .cta-button:hover {
      background: #ffed4e;
      transform: translateY(-3px);
      box-shadow: 0 6px 20px rgba(255, 215, 0, 0.4);
    }

    /* Products Section */
    .products-section {
      padding: 4rem 0;
      background: #f9fafb;
    }

    .products-section h2 {
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: 3rem;
      color: #1a1a1a;
    }

    .products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
    }

    .product-card {
      background: white;
      border-radius: 0.75rem;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      transition: all 300ms ease;
    }

    .product-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    }

    .product-image {
      width: 100%;
      height: 250px;
      object-fit: cover;
      background: #e5e7eb;
    }

    .product-card h3 {
      padding: 1.5rem 1.5rem 0.5rem;
      font-size: 1.5rem;
      margin: 0;
    }

    .product-card .description {
      padding: 0 1.5rem;
      color: #666;
      font-size: 0.95rem;
    }

    .product-card .price {
      padding: 0.5rem 1.5rem;
      font-size: 1.5rem;
      font-weight: 600;
      color: #667eea;
      margin: 0;
    }

    .add-to-cart-btn {
      width: calc(100% - 3rem);
      margin: 1rem 1.5rem;
      background: #667eea;
      color: white;
      padding: 0.75rem;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      font-weight: 500;
      transition: all 150ms ease;
    }

    .add-to-cart-btn:hover {
      background: #764ba2;
      transform: translateY(-2px);
    }

    /* About Section */
    .about-section {
      padding: 4rem 0;
      background: white;
    }

    .about-section h2 {
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: 2rem;
      color: #1a1a1a;
    }

    .about-content {
      max-width: 700px;
      margin: 0 auto;
      text-align: center;
      line-height: 1.8;
      color: #555;
      font-size: 1.1rem;
    }

    .about-content p {
      margin-bottom: 1.5rem;
    }

    /* Contact Section */
    .contact-section {
      padding: 4rem 0;
      background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
      color: white;
    }

    .contact-section h2 {
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: 2rem;
    }

    .contact-form {
      max-width: 500px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .contact-form input,
    .contact-form textarea {
      padding: 0.875rem;
      border: 1px solid #444;
      border-radius: 0.5rem;
      background: rgba(255, 255, 255, 0.1);
      color: white;
      font-family: inherit;
      transition: all 150ms ease;
    }

    .contact-form input::placeholder,
    .contact-form textarea::placeholder {
      color: rgba(255, 255, 255, 0.6);
    }

    .contact-form input:focus,
    .contact-form textarea:focus {
      outline: none;
      background: rgba(255, 255, 255, 0.2);
      border-color: #ffd700;
      box-shadow: 0 0 0 3px rgba(255, 215, 0, 0.1);
    }

    .submit-btn {
      background: #ffd700;
      color: #1a1a1a;
      padding: 0.875rem;
      border: none;
      border-radius: 0.5rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 150ms ease;
    }

    .submit-btn:hover {
      background: #ffed4e;
      transform: translateY(-2px);
    }

    /* Footer */
    .footer {
      background: #0f0f0f;
      color: #999;
      text-align: center;
      padding: 2rem 0;
      border-top: 1px solid #333;
    }

    .footer p {
      margin: 0;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .navbar {
        flex-direction: column;
        gap: 1rem;
      }

      .nav-links {
        gap: 1rem;
        font-size: 0.95rem;
      }

      .hero-content h2 {
        font-size: 2rem;
      }

      .hero-content p {
        font-size: 1rem;
      }

      .products-grid {
        grid-template-columns: 1fr;
      }

      .products-section h2,
      .about-section h2,
      .contact-section h2 {
        font-size: 2rem;
      }
    }
  `;
  document.head.appendChild(style);
}

// Event Listeners
function addEventListeners() {
  window.handleAddToCart = function(watchName) {
    alert(\`🛒 \${watchName} has been added to your cart!\`);
  };

  window.handleContactSubmit = function(event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    event.target.reset();
  };
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderApp);
} else {
  renderApp();
}
