// Centralized Footer HTML (matches index.html)
const footerInnerHTML = `
  <div class="container footer-grid">
    <div class="footer-section footer-company">
      <h3>PromoMonster</h3>
      <p>1563 Barclay Blvd<br>Buffalo Grove, Illinois 60089<br>(847) 877-2240</p>
    </div>
    <div class="footer-section footer-links">
      <h3>Quick Links</h3>
      <ul>
        
        <li><a href="contact.html">Contact Us</a></li>
        
        <li><a href="contact.html">Feedback and Suggestions</a></li>
      </ul>
    </div>
    <div class="footer-section footer-social">
      <h3>Follow Us</h3>
      <div class="social-icons">
        <a href="https://www.facebook.com/promomonsterinc" target="_blank" aria-label="Facebook">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="https://x.com/promomonsterinc" target="_blank" aria-label="X (Twitter)">
          <i class="fab fa-x-twitter"></i>
        </a>
        <a href="https://www.instagram.com/promomonsterinc/" target="_blank" aria-label="Instagram">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/company/promomonster-inc-/" target="_blank" aria-label="LinkedIn">
          <i class="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>
  </div>
  <div class="container copyright">
    <p>&copy; <span id="current-year"></span> PromoMonster. All rights reserved.</p>
  </div>
`;

function loadFooter() {
  try {
    let footerEl = document.querySelector('footer');
    if (!footerEl) {
      footerEl = document.createElement('footer');
      document.body.appendChild(footerEl);
    }
    footerEl.innerHTML = footerInnerHTML;
  } catch (e) {
    console.error('Error injecting footer:', e);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadFooter);
} else {
  loadFooter();
}

