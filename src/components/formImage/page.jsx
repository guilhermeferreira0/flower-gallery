'use client';

import Image from "next/image";
import { useRef, useState } from "react";
import {useFormState} from 'react-dom';

export default function FormImage({ action }) {
  const [ formState, formAction ] = useFormState(action, {});
  const [pickedImage, setPickedImage] = useState();
  const imageUrl = useRef();

  function handlePickClick() {
    imageUrl.current.click();
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
      <form action={formAction}>
        <div className="upload-content">
          <input
            type="file"
            name="upload"
            id="upload"
            accept="image/png, image/jpeg"
            onChange={handleImageChange}
            ref={imageUrl}
            required
          />
          <button className="button" type="button" onClick={handlePickClick}>
              Pick An Image
          </button>
          <div className="image-upload">
            {!pickedImage && <p>No image insert</p>}
            {pickedImage && <Image src={pickedImage} alt="The image selected by the user." fill />}
          </div>
        </div>
        {
          formState && <p>{formState.errors}</p>
        }
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
