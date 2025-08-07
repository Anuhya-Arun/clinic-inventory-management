# Clinic Inventory Management System

This is a simple full-stack demo for clinic inventory management.
- **Backend**: Node.js/Express + SQLite
- **Frontend**: React
- **Run online:** GitHub Codespaces (recommended)

## How to run in Codespaces

1. Open this repository in GitHub Codespaces.
2. Open two terminals:
   - Terminal 1:  
     ```
     cd backend  
     npm install  
     node server.js  
     ```
   - Terminal 2:  
     ```
     cd frontend  
     npm install  
     npm start  
     ```
3. Access the frontend at the provided Codespaces URL (or `localhost:3000` if local).
4. The backend runs at port 5000; the frontend is configured to proxy API requests to backend.

## Features

- Inventory dashboard
- Alerts for low stock/expiring items
- Supplier management

---

This is a basic demo. You can add more features (forms, barcode scanning, authentication, etc.) as needed!