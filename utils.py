from tensorflow.keras.models import load_model
from PIL import Image
import numpy as np
import io

# Load model once globally
model = load_model('wheat_disease_model.h5')

class_labels = [
    'Aphid', 'Black Rust', 'Blast', 'Brown Rust', 'Common Root Rot',
    'Fusarium Head Blight', 'Healthy', 'Leaf Blight', 'Mildew', 'Mite',
    'Septoria', 'Smut', 'Stem fly', 'Tan spot', 'Yellow Rust'
]

treatments = {
    'Aphid': 'Use insecticides like imidacloprid.',
    'Black Rust': 'Apply fungicides such as propiconazole.',
    'Blast': 'Use resistant cultivars and control nitrogen.',
    'Brown Rust': 'Use protective fungicides at early stages.',
    'Common Root Rot': 'Improve drainage and crop rotation.',
    'Fusarium Head Blight': 'Use tolerant varieties and fungicides.',
    'Healthy': 'No treatment needed.',
    'Leaf Blight': 'Use fungicides and avoid overhead watering.',
    'Mildew': 'Improve air circulation and apply fungicide.',
    'Mite': 'Spray with acaricides like dicofol.',
    'Septoria': 'Use fungicide and crop rotation.',
    'Smut': 'Treat seeds with fungicides.',
    'Stem fly': 'Apply suitable systemic insecticide.',
    'Tan spot': 'Remove debris and apply fungicide.',
    'Yellow Rust': 'Apply rust-specific fungicides.'
}

def preprocess_image(img_bytes):
    """Preprocess image bytes for model prediction"""
    img = Image.open(img_bytes).convert('RGB')
    img = img.resize((255, 255))  # Match model input shape
    img_array = np.array(img) / 255.0  # Normalize to [0,1]
    img_array = np.expand_dims(img_array, axis=0)  # Add batch dimension
    return img_array

def predict_disease(img_bytes):
    print("[INFO] Preprocessing image...")  # Debug
    processed = preprocess_image(img_bytes)

    print("[INFO] Predicting...")  # Debug
    preds = model.predict(processed)
    print(f"[INFO] Prediction raw output: {preds}")  # Debug

    confidence = float(np.max(preds))
    class_index = np.argmax(preds)
    disease = class_labels[class_index]
    treatment = treatments[disease]

    print(f"[INFO] Disease: {disease}, Confidence: {confidence}")  # Debug
    return {
        "disease": disease,
        "confidence": round(confidence * 100, 2),
        "treatment": treatment
    }

if __name__ == "__main__":
    # For testing locally with a sample image
    with open("Russian-What-Aphids-on-leaves.jpg", "rb") as f:
        result = predict_disease(io.BytesIO(f.read()))
    print(result)

print("Model input shape:", model.input_shape)
