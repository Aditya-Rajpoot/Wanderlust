<div align="center">

# 🧭 WanderLust

**A full-stack Airbnb-style travel listing platform built with Node.js, Express, and MongoDB.**

[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js&logoColor=white)](https://nodejs.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com)
[![Passport.js](https://img.shields.io/badge/Auth-Passport.js-34E27A?logo=passport&logoColor=white)](http://www.passportjs.org)
[![Cloudinary](https://img.shields.io/badge/Images-Cloudinary-3448C5?logo=cloudinary&logoColor=white)](https://cloudinary.com)

[Live Demo](https://wanderlust-jcg7.onrender.com/listings) · [Report a Bug](#) · [Request a Feature](#)

</div>

---

## Overview

WanderLust is a full-stack Airbnb-style travel listing platform. Users can browse curated stays, create their own listings with images and map locations, leave star ratings and reviews, and manage their own properties — all wrapped in a clean, custom-styled, fully responsive UI.

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


## ⚙️ Getting Started

### Prerequisites
- Node.js and npm
- A MongoDB connection string (e.g. from MongoDB Atlas)
- Cloudinary account credentials
- A Mapbox access token

### 1. Clone the repo
```bash
git clone https://github.com/Aditya-Rajpoot/WanderLust.git
cd WanderLust
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env` file in the root directory:
```env
ATLASDB_URL=your_mongodb_connection_string
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
MAP_TOKEN=your_mapbox_access_token
SECRET=your_session_secret
```

### 4. Run the app
```bash
node app.js
```

The app will be running at `http://localhost:8080`.

## 🗺️ Roadmap

- [ ] Wishlist / saved listings
- [ ] Booking & availability calendar
- [ ] In-app messaging between hosts and guests
- [ ] Payment gateway integration

## 👤 Author

Built by **Aditya Rajpoot**

---

<div align="center">
Made with a lot of Mapbox API key confusion along the way.
</div>
