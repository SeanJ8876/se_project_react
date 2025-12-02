import ModalWithForm from "../ModalWithForm/ModalWithForm";
import useForm from "../../hooks/useForm";

function LoginModal({ isOpen, onClose, onLogin, onSignUpClick }) {
  const { values, handleChange, resetForm } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(values);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  return (
    <ModalWithForm
      title="Log in"
      buttonText="Log in"
      isOpen={isOpen}
      onClose={handleClose}
      onSubmit={handleSubmit}
      alternativeButtonText="or Sign up"
      onAlternativeClick={onSignUpClick}
    >
      <label htmlFor="login-email" className="modal__label">
        Email*
        <input
          id="login-email"
          className="modal__input"
          type="email"
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="login-password" className="modal__label">
        Password*
        <input
          id="login-password"
          className="modal__input"
          type="password"
          name="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
          required
          minLength={6}
        />
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
