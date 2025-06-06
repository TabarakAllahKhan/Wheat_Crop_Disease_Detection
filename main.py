from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from utils import predict_disease
from PIL import Image, UnidentifiedImageError
import io
import traceback

app = FastAPI()

# Allow React frontend running on localhost:3000 to access this API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Change this to your React frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    try:
        contents = await file.read()
        image_bytes = io.BytesIO(contents)

        # Validate image by trying to open it with PIL
        Image.open(image_bytes).verify()
        image_bytes.seek(0)  # Reset pointer after verify

        # Predict disease
        result = predict_disease(image_bytes)
        return result

    except UnidentifiedImageError:
        raise HTTPException(status_code=400, detail="Uploaded file is not a valid image.")
    except Exception as e:
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=f"Prediction failed: {str(e)}")
