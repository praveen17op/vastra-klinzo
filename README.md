# Vastra Klinzo — Official Website

The official website for **Vastra Klinzo** by Klinzo One Private Limited. A modern, full-featured marketing and lead generation website for a doorstep laundry and dry-cleaning service based in Thane, Maharashtra.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Build Tool | Vite 7 |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Icons | Lucide React |
| Routing | React Router DOM |
| SEO | React Helmet |
| Forms | Tally.so (embedded) |
| Monorepo | Hostinger Horizons export (`apps/web`) |

---

## Project Structure

```
vastra-klinzo-final/
├── apps/
│   └── web/                  # Main React application
│       ├── src/
│       │   ├── components/   # Shared components (Header, Footer, etc.)
│       │   ├── pages/        # Page components
│       │   │   ├── HomePage.jsx
│       │   │   ├── ServicesPage.jsx
│       │   │   ├── PricingPage.jsx
│       │   │   ├── BusinessPage.jsx
│       │   │   ├── BusinessFranchisePage.jsx
│       │   │   ├── BusinessLaundryPage.jsx
│       │   │   ├── CareersPage.jsx
│       │   │   ├── PrivacyPolicyPage.jsx
│       │   │   └── TermsAndConditionsPage.jsx
│       │   ├── App.jsx       # Root component + router
│       │   ├── main.jsx      # Entry point
│       │   └── index.css     # Global styles + CSS variables
│       ├── public/           # Static assets
│       ├── package.json
│       └── vite.config.js
├── dist/
│   └── apps/
│       └── web/              # Production build output — this is what gets deployed
└── package.json              # Monorepo root
```

---

## Pages & Routes

| Route | Page |
|---|---|
| `/` | Home |
| `/services` | Services |
| `/pricing` | Pricing |
| `/business` | Business Landing |
| `/business/franchise` | Get Franchise |
| `/business/laundry` | Business Laundry |
| `/careers` | Careers |
| `/privacy-policy` | Privacy Policy |
| `/terms-and-conditions` | Terms & Conditions |

---

## Running Locally

### Prerequisites
- Node.js v18+ ([nodejs.org](https://nodejs.org))

### Steps

```bash
# 1. Navigate into the web app
cd apps/web

# 2. Install dependencies
npm install

# 3. Build for production
npm run build

# 4. Serve the build locally
cd ../../dist/apps/web
python3 -m http.server 8080
```

Open `http://localhost:8080` in your browser.

> **Note:** `npm run dev` from the root may loop due to Horizons editor plugins bundled in the export. Always build from `apps/web` and serve the `dist` folder for a clean local preview.

---

## Deployment

The production-ready files live in `dist/apps/web/` after running the build. Deploy the **contents** of this folder (not the folder itself) to the web server root.

### On AWS (S3 + CloudFront)
- Upload contents of `dist/apps/web/` to your S3 bucket
- In CloudFront, set the error page: `404 → /index.html → 200` to support React Router

### On Vercel (recommended)
- Connect the GitHub repository
- Set **Root Directory** to `apps/web`
- Build command: `npm run build`
- Output directory: `../../dist/apps/web`
- Vercel handles routing automatically

### On any server (Nginx)
Add this to your Nginx config to support React Router:
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

### On Apache / cPanel
Add a `.htaccess` file in the server root:
```
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```

---

## Forms & Lead Capture

All forms use **Tally.so** embeds. Data is stored in connected Google Sheets and triggers email notifications on every submission.

| Form | Tally ID Constant | Google Sheet |
|---|---|---|
| Franchise Enquiry | `TALLY_FORM_ID_FRANCHISE` | Vastra Klinzo – Franchise Leads |
| Business Laundry Enquiry | `TALLY_FORM_ID_BUSINESS` | Vastra Klinzo – Business Leads |
| Careers Application | `TALLY_FORM_ID_CAREERS` | Vastra Klinzo – Careers Applications |

To update a form ID, find the constant at the top of the relevant page component and replace the placeholder with the live Tally form ID.

---

## Assets

Garment icons, category icons, and hero images are hosted on GitHub raw CDN:
```
https://raw.githubusercontent.com/praveen17op/vastra-klinzo-assets/main/[filename]
```

To add or update an asset, push the new file to the `vastra-klinzo-assets` repository and reference it by filename.

---

## Brand Tokens

All brand colours are defined as CSS variables in `apps/web/src/index.css`:

| Token | Value | Usage |
|---|---|---|
| `--teal` | `#14C8A4` | Primary accent, buttons, icons |
| `--sky-blue` | `#1E9FE0` | Gradient endpoint, highlights |
| `--dark-navy` | `#0E3A53` | Headings, hero backgrounds, footer |
| `--background` | `#FFFFFF` | Page background |
| `--light-sky-bg` | `#F4F7F9` | Alternate section backgrounds |

---

## Contact

**Klinzo One Private Limited**
Hill Garden, Manpada, Thane West, Maharashtra 400610
support@vastraklinzo.com | +91 97020 25755

[vastraklinzo.com](https://vastraklinzo.com) · [Instagram](https://instagram.com/vastraklinzo) · [LinkedIn](https://linkedin.com/company/vastra-klinzo)
