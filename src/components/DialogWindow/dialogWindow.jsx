import { useState } from "react";
import { Modal, Box, Typography } from "@mui/material";

const DialogWindow = ({ open, onClose, onDelete, postId }) => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = async (buttonName) => {
    setActiveButton(buttonName);
    if (buttonName === "Delete") {
      onDelete(postId);
      onClose();
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          width: "400px",
          height: "240px",
          bgcolor: "#FFFFFF",
          borderRadius: "12px",
          mx: "auto",
          mt: "32vh",
          p: 0,
          overflow: "hidden",
          border: "none",
        }}
      >
        <Typography
          variant="body1"
          onClick={() => handleButtonClick("Delete")}
          sx={{
            textAlign: "center",
            py: 1.5,
            color: "#ED4956",
            borderBottom: "1px solid #DBDBDB",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: activeButton === "Delete" ? 700 : 400,
            fontFamily: "Roboto, sans-serif",
          }}
        >
          Delete
        </Typography>
        <Typography
          variant="body1"
          onClick={() => handleButtonClick("Edit")}
          sx={{
            textAlign: "center",
            py: 1.5,
            borderBottom: "1px solid #e0e0e0",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: activeButton === "Edit" ? 700 : 400,
            fontFamily: "Roboto, sans-serif",
          }}
        >
          Edit
        </Typography>
        <Typography
          variant="body1"
          onClick={() => handleButtonClick("GoToPost")}
          sx={{
            textAlign: "center",
            py: 1.5,
            borderBottom: "1px solid #DBDBDB",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: activeButton === "GoToPost" ? 700 : 400,
            fontFamily: "Roboto, sans-serif",
          }}
        >
          Go to post
        </Typography>
        <Typography
          variant="body1"
          onClick={() => {
            navigator.clipboard.writeText(`https://example.com/post/${postId}`);
            console.log("Link copied");
          }}
          sx={{
            textAlign: "center",
            py: 1.5,
            borderBottom: "1px solid #DBDBDB",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: activeButton === "CopyLink" ? 700 : 400,
            fontFamily: "Roboto, sans-serif",
          }}
        >
          Copy link
        </Typography>
        <Typography
          variant="body1"
          onClick={onClose}
          sx={{
            textAlign: "center",
            py: 1.5,
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: activeButton === "Cancel" ? 700 : 400,
            fontFamily: "Roboto, sans-serif",
          }}
        >
          Cancel
        </Typography>
      </Box>
    </Modal>
  );
};

export default DialogWindow;
