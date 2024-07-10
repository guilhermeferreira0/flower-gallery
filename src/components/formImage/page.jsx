'use client';

import Image from "next/image";
import { useState } from "react";

export default function FormImage() {
  const [pickedImage, setPickedImage] = useState();

  function handleRemoveImage() {
    setPickedImage(prev => prev = '');
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (!file) return;

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    }

    fileReader.readAsDataURL(file);
  }

  return (
    <div className="form">
      <h2>Upload your image</h2>
      <form action="">
        <div className="upload">
          <label htmlFor="upload">Image</label>
          <input
            type="file"
            name="upload"
            id="upload"
            accept="image/png, image/jpeg"
            onChange={handleImageChange}
            required
          />
          <div className="image-upload">
            {!pickedImage && <p>No image insert</p>}
            {pickedImage && <Image src={pickedImage} alt="The image selected by the user." fill onClick={handleRemoveImage}/>}
          </div>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
