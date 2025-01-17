import { useState, useRef, useEffect } from "react";
import EmojiPicker from "emoji-picker-react";
import styles from "./EmojiPicker.module.css";

function EmojiPickerComponent({ onEmojiSelect }) {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const emojiPickerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(event.target)
      ) {
        setShowEmojiPicker(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleEmojiClick = (emojiObject) => {
    onEmojiSelect(emojiObject.emoji);
  };

  return (
    <div className={styles.emoji_picker_container} ref={emojiPickerRef}>
      <button
        className={styles.emoji_button}
        onClick={() => setShowEmojiPicker(!showEmojiPicker)}
      >
        😊
      </button>
      {showEmojiPicker && (
        <div className={styles.emoji_picker}>
          <EmojiPicker
            onEmojiClick={handleEmojiClick}
            width={400}
            className={styles.custom_emoji_picker}
          />
        </div>
      )}
    </div>
  );
}

export default EmojiPickerComponent;
