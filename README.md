
# GVHD Chatbot Setup Guide

This guide explains the steps to set up and run the **GVHD Chatbot** project.

---

### 0. Create and Activate a Virtual Environment and Base Directory

1. Create a new directory:
   ```bash
   mkdir GVHD_Chatbot
   cd GVHD_Chatbot
   ```

2. Create and activate a virtual environment.

   #### On Windows:
   ```bash
   python -m venv venv
   venv\Scripts\activate
   ```

   #### On macOS/Linux:
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```

---

### 1. Clone the Repository

Download the project files to your local machine:

```bash
git clone https://github.com/tarikalim/GVHD_Chatbot.git
cd GVHD_Chatbot
```

---

### 2. Install Required Python Packages

Install the required Python dependencies using `pip`:

```bash
pip install -r requirements.txt
```

---

### 3. Initialize the GraphRAG Environment

Initialize the GraphRAG environment for the chatbot:

```bash
graphrag init --root ./chatbot
```

---

### 4. Configure Environment Variables
Add your API key to the `.env` file (created in the chatbot directory) created after "graphrag init --root ./chatbot" command :
   ```
   GRAPHRAG_API_KEY=your_api_key_here
   ```

---

### 5. Build the GraphRAG Index

Run the following command to build the index for the chatbot:

```bash
graphrag index --root ./chatbot
```

---

### 6. Install Frontend Dependencies

Navigate to the `frontend` directory and install the necessary dependencies:

```bash
cd frontend
npm install
```

---

### 7. Run the Backend

Navigate to the `backend` directory and start the backend service:

```bash
cd ../backend
python -m backend.app
```

---

### 8. Start the Frontend

Go back to the `frontend` directory and start the frontend application:

```bash
cd ../frontend
npm start
```

---

### 9. Access the Chatbot

Once the frontend is running, open your browser and go to `http://localhost:3000` to interact with the chatbot.

