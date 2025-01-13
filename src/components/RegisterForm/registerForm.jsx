import InputField from "../InputField/inputField";
import styles from "./registerForm.module.css";

function RegisterForm() {
  return (
    <form className={styles.register_form}>
      <div>
        <InputField type="email" placeholder="Email" />
      </div>

      <div>
        <InputField type="text" placeholder="Full Name" />
      </div>

      <div>
        <InputField type="text" placeholder="Username" />
      </div>

      <div>
        <InputField type="password" placeholder="Password" />
      </div>
    </form>
  );
}

export default RegisterForm;
