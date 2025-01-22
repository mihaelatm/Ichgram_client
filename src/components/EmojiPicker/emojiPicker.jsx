import EmojiPicker from "emoji-picker-react";
import styles from "./EmojiPicker.module.css";
import { useState } from "react";

function EmojiPickerComponent({ onEmojiSelect }) {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleEmojiClick = (emojiObject) => {
    onEmojiSelect(emojiObject.emoji);
  };

  return (
    <div className={styles.emoji_picker_container}>
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
            height={360}
            emojiStyle={{ emojiSize: "0.2em" }} // Dimensiune mai mică
            className={styles.custom_emoji_picker}
          />
        </div>
      )}
    </div>
  );
}

export default EmojiPickerComponent;
