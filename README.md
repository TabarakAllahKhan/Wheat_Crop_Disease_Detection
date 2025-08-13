# 🌾 Wheat Doc – Wheat Disease Detection Web App

Wheat Doc is my **Final Year Project** built using **React**, **Tailwind CSS**, and **FastAPI**.  
It helps farmers quickly diagnose wheat crop diseases by simply **uploading a picture** of their crop.  
The app predicts the disease, provides the **confidence score**, and suggests **treatments**.

---

## 📌 Features

- **Image Upload Interface** (React + Tailwind CSS)
- **FastAPI Backend** for model inference
- **Pre-trained Deep Learning Model** with 95% accuracy
- **13 Wheat Disease Classes**
- **Treatment Recommendation** for each disease
- **Confidence Score** for predictions

---

## 🧠 How It Works

1. **Farmer uploads a picture** of wheat leaves or affected area via the web app.
2. The **FastAPI backend** loads the model (only once for efficiency).
3. The image is **preprocessed** and passed to the model for prediction.
4. The backend returns:
   - Predicted Disease Name
   - Confidence Score (%)
   - Recommended Treatment
5. The frontend displays results in a clean and user-friendly way.

---

## 📊 Dataset & Model

- **Classes (13 Diseases + Healthy):**
  - Aphid
  - Black Rust
  - Blast
  - Brown Rust
  - Common Root Rot
  - Fusarium Head Blight
  - Healthy
  - Leaf Blight
  - Mildew
  - Mite
  - Septoria
  - Smut
  - Stem Fly
  - Tan Spot
  - Yellow Rust
- **Accuracy:** 95% (on validation set)

---

## 🖥️ Tech Stack

### **Frontend**
- React.js
- Tailwind CSS

### **Backend**
- FastAPI
- TensorFlow/Keras
- Pillow & NumPy

---

---
## 2️⃣ Backend Setup (FastAPI)

```

pip install -r requirements.txt
uvicorn main:app --reload
```

## 🎥 Project Demo

[Watch The Demo](https://www.youtube.com/watch?v=q1l4LOHdoco)


# 🔮 Future Plans
+ User Onboarding & Authentication (Database Integration)

+ Personalized Dashboards for each user

+ Historical Prediction Records

+ Multi-Language Support for regional farmers


