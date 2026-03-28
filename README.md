# 🏛️ Garrison | Premium Dining Experience
**Architected by NCS Safety** *Jerusalem Square, Tbilisi, Georgia*

---

## 🌐 Live Project
You can view the live site here:  
[**https://restaurant.ncssafety.site**](https://restaurant.ncssafety.site)

---

## 📝 Description
Garrison is a high-end web platform designed for a boutique restaurant in the heart of Tbilisi. The project combines a minimalist "Dark Mode" aesthetic (Garrison Green & Gold) with a solid and secure technical architecture.

This development is part of the **NCS Safety** portfolio, showcasing skills in web deployment, subdomain management, and infrastructure security.

## 🛠️ Tech Stack
* **Frontend:** HTML5, CSS3, Tailwind CSS (via CDN for optimization).
* **Typography:** Playfair Display (Serif) and Inter (Sans) for premium contrast.
* **Logic & Animations:** Vanilla JavaScript (DOM Manipulation, Intersection Observer API).
* **Infrastructure & DNS:** GitHub Pages, Cloudflare (WAF & Proxy), Namecheap.
* **Integrations:** Formspree (Secure reservation management).

## 🛡️ Security & Infrastructure
As a **Cyberdefense** student, this project implements:
* **Enforced HTTPS:** SSL/TLS certification via Let's Encrypt and Cloudflare.
* **Domain Isolation:** Deployment on an independent subdomain to mitigate cross-site risks.
* **Cloudflare Protection:** DDoS mitigation and origin IP cloaking via Reverse Proxy.
* **Asset Integrity:** Local management of visual assets to avoid vulnerable external dependencies.

## 📁 Project Structure
```text
ncs-restaurant-engine/
├── assets/
│   ├── css/
│   │   └── styles.css      # Custom additional styling
│   ├── images/             # Visual assets (Dishes & Hero)
│   └── js/
│       └── animations.js   # Burger menu logic and scroll animations
├── CNAME                   # Custom subdomain configuration
├── index.html              # Core website structure
└── README.md               # Project documentation
