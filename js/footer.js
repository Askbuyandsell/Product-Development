document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('footer-include');
  if(!el) return;
  el.innerHTML = `
    <div class="wrap">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="index.html" class="brand" style="margin-bottom:6px;">
            <svg class="brand-mark" viewBox="0 0 26 26"><circle cx="13" cy="4" r="2.4" fill="#6FE7DD"/><circle cx="4" cy="20" r="2.4" fill="#3E6AE1"/><circle cx="22" cy="20" r="2.4" fill="#3E6AE1"/><path d="M13 6.4 4 17.8 M13 6.4 22 17.8 M4 20h18" stroke="#F6F5F0" stroke-width="1.3" fill="none"/></svg>
            <span>AI-Solutions</span>
          </a>
          <p>Innovating, promoting and delivering the future of the digital employee experience — with a strong focus on supporting people at work.</p>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><a href="solutions.html">Solutions</a></li>
            <li><a href="work.html">Our Work</a></li>
            <li><a href="articles.html">Articles</a></li>
            <li><a href="events.html">Events</a></li>
          </ul>
        </div>
        <div>
          <h4>Get in touch</h4>
          <ul>
            <li><a href="contact.html">Contact Us</a></li>
            <li><a href="gallery.html">Gallery</a></li>
            <li><a href="testimonials.html">Testimonials</a></li>
          </ul>
        </div>
        <div>
          <h4>Visit</h4>
          <ul>
            <li>Software Centre North</li>
            <li>Sunderland, SR1 3XY</li>
            <li>United Kingdom</li>
            <li><a href="mailto:hello@ai-solutions.example">hello@ai-solutions.example</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 AI-Solutions Ltd. All rights reserved.</span>
        <span><a href="admin/login.html" style="color:var(--slate-soft);">Admin</a> &nbsp;·&nbsp; Privacy &nbsp;·&nbsp; Terms</span>
      </div>
    </div>
  `;
});
