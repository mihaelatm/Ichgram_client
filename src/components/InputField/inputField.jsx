import styles from "./inputField.module.css";

function InputField({ type, name, placeholder, value, onChange, error }) {
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.input}
      />
      {error && <p style={{ color: "red", marginTop: "4px" }}>{error}</p>}
    </div>
  );
}

export default InputField;
