import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({ isOpen, onClose, onRegister, onSignInClick }) {
  const [email, setEmail, useForm] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({ email, password, name, avatar });
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setName("");
    setAvatar("");
    useForm("");
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  return (
    <ModalWithForm
      title="Sign up"
      buttonText="Sign up"
      isOpen={isOpen}
      onClose={handleClose}
      onSubmit={handleSubmit}
      alternativeButtonText="or Log in"
      onAlternativeClick={onSignInClick}
    >
      <label htmlFor="register-email" className="modal__label">
        Email*
        <input
          id="register-email"
          className="modal__input"
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </label>
      <label htmlFor="register-password" className="modal__label">
        Password*
        <input
          id="register-password"
          className="modal__input"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
          minLength={6}
        />
      </label>
      <label htmlFor="register-name" className="modal__label">
        Name*
        <input
          id="register-name"
          className="modal__input"
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
          required
        />
      </label>
      <label htmlFor="register-avatar" className="modal__label">
        Avatar URL
        <input
          id="register-avatar"
          className="modal__input"
          type="url"
          name="avatar"
          placeholder="Avatar URL"
          value={avatar}
          onChange={handleAvatarChange}
        />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
