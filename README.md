# 🌿 Lumepath

**Lumepath** is a modern full-stack web app that helps users build and track habits for personal growth.  


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

open at **http://localhost:3000** (or similar), connecting to the backend at **http://localhost:5000/api**.

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
- [x] Add authentication (JWT or OAuth)
- [ ] Add notifications / reminders
- [x] Add analytics dashboard for progress tracking
- [ ] Convert to Progressive Web App (PWA)
- [x] Improve mobile layout
- [ ] Add change password
- [ ] Add AI chat boxes
- [ ] Add community part
- [ ] Add profile pages

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

UNDER CONTROL OF SMK PENANTI, THIS REPO MADE FOR COMPETITION PURPOSE.
THIS REPO IS NOT FOR PRODUCTION USE YET UNTIL COMPETITION OR THE END OF CONTRACT.


---

### 💬 Team information
**Author:** [@Craglitch](https://github.com/Craglitch)  
Feel free to open an *Issue* or *Pull Request* for suggestions or bugs.

---

