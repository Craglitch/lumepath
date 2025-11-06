# 🌿 Lumepath

**Lumepath** is a modern full-stack web app that helps users build and track habits for personal growth.  
It’s lightweight (~5 MB), easy to deploy, and built for productivity-focused users.

---

## 🚀 Features
- ✅ Create, view, and manage daily habits  
- 📅 Track streaks and habit history  
- 📊 Progress dashboard (planned)  
- 💡 Clean, responsive UI for mobile and desktop  
- 🔐 Ready for authentication and cloud deployment  
- 🧩 Split structure: `client` (frontend) + `server` (backend)

---

## 🧱 Project Structure
```
/lumepath
├── client/      → React frontend (UI)
├── server/      → Node.js / Express backend (API)
└── README.md
```

---

## 🛠️ Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Craglitch/lumepath.git
cd lumepath
```

### 2️⃣ Install Dependencies

#### Backend
```bash
cd server
npm install
# or yarn
```

If using environment variables, create a `.env` file:
```env
PORT=5000
DB_URL=<your_database_url>
```

Run the server:
```bash
npm run dev
# or node index.js
```

#### Frontend
```bash
cd ../client
npm install
# or yarn
```

Start the React app:
```bash
npm start
```

Your app will open at **http://localhost:3000** (or similar), connecting to the backend at **http://localhost:5000/api**.

---

## 🌐 Deployment

| Layer | Recommended Platform |
|--------|----------------------|
| **Frontend** | Vercel / Netlify |
| **Backend** | Render / Railway / Fly.io |
| **Temporary Hosting (Local Dev)** | ngrok |

After deployment, connect your own domain (via Cloudflare, Namecheap, etc.) and map DNS records.

---

## 🧠 Built With
- **Frontend:** React, Tailwind CSS, Shadcn/UI  
- **Backend:** Node.js, Express  
- **Database:** (Optional) MongoDB / PostgreSQL  
- **Tools:** Git, ngrok, Vercel, Render

---

## 🧩 Folder Info
- `client/` → Handles user interface, components, and routing  
- `server/` → Handles API routes, logic, and database connection  
- `.gitignore` → Ignores `node_modules`, `.env`, and build files  

---

## 📌 Roadmap / To-Do
- [ ] Add authentication (JWT or OAuth)
- [ ] Add notifications / reminders
- [ ] Add analytics dashboard for progress tracking
- [ ] Convert to Progressive Web App (PWA)
- [ ] Improve mobile layout
- [ ] Deploy production version with custom domain

---

## 🧑‍💻 Contributing
Contributions are welcome!

1. **Fork** this repo  
2. **Create** a branch (`feature/new-feature`)  
3. **Commit** changes  
4. **Push** to your fork and **open a Pull Request**

Please keep code clean and consistent.

---

## 🧾 License
Released under the **MIT License**.  
You’re free to use, modify, and share this project with credit.

---

### 💬 Contact
**Author:** [@Craglitch](https://github.com/Craglitch)  
Feel free to open an *Issue* or *Pull Request* for suggestions or bugs.

---

### ⭐ Support
If you like **Lumepath**, please ⭐ this repo — it helps more than you think!
