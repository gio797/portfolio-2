import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <a href="mailto:g.muchaidze@yahoo.com" className="footer__link">
        g.muchaidze@yahoo.com
      </a>
      <ul class="social-list">
        <li class="social-list__item">
          <a class="social-list__link" href="https://codepen.io">
            <i class="fab fa-codepen"></i>
          </a>
        </li>
        <li class="social-list__item">
          <a class="social-list__link" href="http://dribbble.com">
            <i class="fab fa-dribbble"></i>
          </a>
        </li>
        <li class="social-list__item">
          <a class="social-list__link" href="https://twitter.com">
            <i class="fab fa-twitter"></i>
          </a>
        </li>
        <li class="social-list__item">
          <a class="social-list__link" href="https://github.com">
            <i class="fab fa-github"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
