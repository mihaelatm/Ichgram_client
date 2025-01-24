import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProfileImage } from "../../redux/slices/imageSlice";
import getUserProfile from "../../helpers/getUserProfile"; // Funcție care face request către server
import "/src/styles/globalStyles.css";
import border_photo from "../../assets/images/border_photo.svg";

function ProfileImage() {
  const dispatch = useDispatch();
  const profileImage = useSelector((state) => state.image.profile_image);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // Obține datele profilului, inclusiv imaginea, de la server
        const profileData = await getUserProfile();
        if (profileData.profile_image) {
          dispatch(setProfileImage(profileData.profile_image)); // Actualizează starea Redux și localStorage
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    // Verifică dacă există deja o imagine în localStorage
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      dispatch(setProfileImage(savedImage)); // Folosește imaginea din localStorage
    } else {
      fetchProfile(); // Dacă nu există, face request către server
    }
  }, [dispatch]);

  return (
    <div className="container">
      <img src={border_photo} alt="border_image" className="border " />
      {profileImage && (
        <img src={profileImage} alt="Profile" className="profile_image" />
      )}
    </div>
  );
}

export default ProfileImage;
