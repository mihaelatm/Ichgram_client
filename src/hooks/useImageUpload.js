import { useDispatch } from "react-redux";
import { useRef } from "react";
import { setProfileImage } from "../redux/slices/imageSlice";

const useImageUpload = () => {
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);

  const handleImageUpload = (event, setImage) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64Image = reader.result;

        if (setImage) {
          setImage(base64Image);
        } else {
          dispatch(setProfileImage(base64Image));
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
