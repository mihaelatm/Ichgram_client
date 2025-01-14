import { useNavigate } from "react-router-dom";
import InputField from "../InputField/inputField";
import Button from "../Button/button";
import SignupLinks from "../SignupLinks/signupLinks";
import styles from "./registerForm.module.css";
import { useRegistration } from "../../hooks/useRegistration";
function RegisterForm() {
  const navigate = useNavigate();
  const {
    email,
    setEmail,
    fullName,
    setFullName,
    username,
    setUsernameLocal,
    password,
    setPassword,
    errors,
    successMessage,
    handleSubmit,
  } = useRegistration();

  if (successMessage) {
    setTimeout(() => {
      navigate("/");
    }, 1500);
  }

  return (
    <form className={styles.register_form} onSubmit={handleSubmit}>
      <div>
        <InputField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className={styles.error}>{errors.email}</p>}
      </div>

      <div>
        <InputField
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        {errors.fullName && <p className={styles.error}>{errors.fullName}</p>}
      </div>

      <div>
        <InputField
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsernameLocal(e.target.value)}
        />
        {errors.username && <p className={styles.error}>{errors.username}</p>}
      </div>

      <div>
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p className={styles.error}>{errors.password}</p>}
      </div>

      {errors.message && <p className={styles.error}>{errors.message}</p>}

      <SignupLinks />
      <Button
        type="submit"
        text="Sign up"
        textColor="#ffffff"
        bgColor="#0095F6"
        width="268px"
        marginTop="7px"
        marginBottom="28px"
      />

      {successMessage && <p className={styles.success}>{successMessage}</p>}
    </form>
  );
}

export default RegisterForm;
