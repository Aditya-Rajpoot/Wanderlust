# 🧭 WanderLust

WanderLust is a full-stack **Airbnb-style travel listing platform** built with Node.js, Express, and MongoDB. Users can browse curated stays, create their own listings with images and map locations, leave star ratings and reviews, and manage their own properties — all wrapped in a clean, custom-styled, fully responsive UI.

**🔗 Live Demo:** [wanderlust-ye90.onrender.com](https://wanderlust-ye90.onrender.com)

---

## ✨ Features

- 🏡 **Browse Listings** — Explore stays with images, pricing, and location, filterable by category (Trending, Mountains, Castles, Boats, etc.)
- 🔍 **Search & Category Filters** — Quickly find stays that match what you're looking for
- 📸 **Image Uploads** — Listings support image upload and storage via **Cloudinary**
- 🗺️ **Interactive Maps** — Every listing shows its location on an interactive **Mapbox** map
- ⭐ **Reviews & Ratings** — Logged-in users can leave star ratings and written reviews on any listing
- 🔐 **Authentication** — Secure signup/login system using **Passport.js**, with sessions stored in MongoDB
- 🛠️ **Full CRUD** — Authenticated owners can create, edit, and delete their own listings
- 💰 **Tax Toggle** — Optionally display total price including GST
- 📱 **Fully Responsive** — Polished experience across desktop, tablet, and mobile
- 🎨 **Custom Premium UI** — Hand-styled interface with smooth animations, hover effects, and a cohesive design system (no default Bootstrap look)

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB with Mongoose (hosted on MongoDB Atlas) |
| **Templating** | EJS with `ejs-mate` for layouts |
| **Authentication** | Passport.js (`passport-local`), `express-session`, `connect-mongo` |
| **Image Storage** | Cloudinary + Multer (`multer-storage-cloudinary`) |
| **Maps** | Mapbox GL JS |
| **Styling** | Bootstrap 5 + custom CSS, Font Awesome icons, Google Fonts (Plus Jakarta Sans) |
| **Validation** | Joi (server-side schema validation) |
| **Deployment** | Render |

---
