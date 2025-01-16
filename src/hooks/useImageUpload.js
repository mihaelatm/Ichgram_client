// src/hooks/useImageUpload.js

import { useDispatch } from "react-redux";
import { useRef } from "react";
import { setProfileImage } from "../redux/slices/imageSlice"; // Poți schimba această acțiune pentru alte nevoi de postări

const useImageUpload = () => {
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);

  const handleImageUpload = (event, setImage) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64Image = reader.result;
        // Dacă se transmite setImage, o folosim pentru a seta imaginea într-o stare
        if (setImage) {
          setImage(base64Image); // Folosit în alte părți (ex: postări)
        } else {
          dispatch(setProfileImage(base64Image)); // Folosit pentru profil
        }
      };

      reader.readAsDataURL(file);
    }
  };

  return {
    fileInputRef,
    handleImageUpload,
  };
};

export default useImageUpload;
