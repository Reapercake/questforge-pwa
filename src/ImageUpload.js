import React from "react";

export default function ImageUpload({ image, setImage }) {
  const handleImageChange = e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => setImage(ev.target.result);
    reader.readAsDataURL(file);
  };

  return (
    <div className="mb-2">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        aria-label="Upload card art"
      />
      {image && (
        <div>
          <img
            src={image}
            alt="Uploaded"
            style={{
              width: 120,
              height: 60,
              objectFit: "cover",
              marginTop: 8,
              borderRadius: 6,
            }}
          />
        </div>
      )}
    </div>
  );
}
