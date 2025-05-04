# EduTrack – Learning Management System (LMS)

EduTrack is a full-featured Learning Management System (LMS) built with the MERN stack (MongoDB, Express.js, React, Node.js). It enables users to browse, purchase, and learn from online courses efficiently. This platform includes Stripe-powered payments, course management, secure file uploads, and a custom checkout interface.

## 🚀 Features

- 🎓 User authentication and role-based access (admin, instructor, student)
- 🧑‍🏫 Instructors can create and manage courses
- 💳 Stripe integration for secure payments
- 🎥 Cloudinary for storing course thumbnails and media content (Video file size less than 35 MB, Photo file size under 50KB)
- 📂 File upload handling via Multer
- 🧾 Stripe Webhook support for post-payment logic
- 📈 Course progress tracking (planned)
- 📚 Modern and responsive UI/UX built with React and Tailwind CSS

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS, React Router
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Payment Gateway**: Stripe API
- **Media Handling**: Multer (server) + Cloudinary (cloud storage)

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/itsksohail/lms_EduTrack.git
cd lms_EduTrack
````
---

### 2. Set Up Environment Variables

Create a `.env` file in `server/` directory.

**server/.env**

```env
PORT=3000
MONGO_URI=your_mongodb_uri
SECRET_KEY=your_jwt_secret

#cloudinary setup
API_KEY=your_cloud_api_secret
API_SECRET=your_cloud_api_key
CLOUD_NAME=your_cloud_name

#stripe setup
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_secret_key

WEBHOOK_ENDPOINT_SECRET=your_webhook_secret

FRONTEND_URL=http://localhost:5173
```
---

### 3. Install Dependencies

**Server:**

```bash
cd server
npm install
```

**Client:**

```bash
cd client
npm install
```
---

### 4. Run the Application

**Start the backend:**

```bash
cd server
npm run dev
```

**Start the frontend:**

```bash
cd client
npm run dev
```

---

### 5. Install Stripe CLI Application

Note: You need to install the stripe CLI application from the stripe official account
for listening webook events, webhook secret key and paring code in your pc without the 
application the stripe purchase will not be successfull and face errors. 

https://github.com/stripe/stripe-cli/releases/tag/v1.27.0

stripe_1.27.0_windows_x86_64.zip

After installation set the environment variable path.
And run theses command line codes.

```bash
stripe --version
stripe login
stripe listen --forward-to http://localhost:3000/api/v1/purchase/webhook
```
---

## 🧾 Instructor Account

```
Username: iweruo@dsf.com
Password: sdior32
```

---


## 📁 Project Structure

```
/client          # React Frontend
/server          # Express Backend API
```

---

## 🧩 Key Components

* `CourseDetail.jsx`: Initializes a Stripe session with course details
* `LectureTab.jsx`: Upload and manage course materials
* `coursePurchase.controller.js`: Listens to Stripe webhook events (e.g., payment success)
---

## 💡 Future Improvements

* Add real-time notifications for students and instructors
* Implement quizzes and certificates
* Enable video streaming with playback tracking
* Add dashboard analytics for instructors

---

### ⚠️ Warning

> **Important Notice:**
> This repository contains `.env` secret keys and instructor account credentials **shared strictly for educational and testing purposes only**.
>
> These credentials are made public **to help others learn and test** in a development environment.
>
> ❌ **Do not misuse these credentials for any unethical or unauthorized purposes.**
>
> Any such misuse will be considered a reflection of poor moral values and is **strongly discouraged**.
>
> ✅ Use them with **integrity** and for **good intentions only**—such as learning, testing, or replicating the environment for personal study.

