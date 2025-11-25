import { useState, useEffect, useContext } from "react";
import CurrentUserContext from "../../context/CurrentUserContext";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function EditProfileModal({ isOpen, onClose, onUpdateUser, isLoading }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  // Populate form with current user data when modal opens
  useEffect(() => {
    if (isOpen && currentUser) {
      setName(currentUser.name || "");
      setAvatar(currentUser.avatar || "");
    }
  }, [isOpen, currentUser]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser({ name, avatar });
  };

  // Reset form when modal closes
  const handleClose = () => {
    setName("");
    setAvatar("");
    onClose();
  };

  return (
    <ModalWithForm
      title="Change profile data"
      buttonText={isLoading ? "Saving..." : "Save changes"}
      isOpen={isOpen}
      onClose={handleClose}
      onSubmit={handleSubmit}
    >
      <label htmlFor="edit-name" className="modal__label">
        Name *
        <input
          type="text"
          className="modal__input"
          id="edit-name"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
          required
          minLength={2}
          maxLength={30}
        />
      </label>
      <label htmlFor="edit-avatar" className="modal__label">
        Avatar URL *
        <input
          type="url"
          className="modal__input"
          id="edit-avatar"
          placeholder="Avatar URL"
          value={avatar}
          onChange={handleAvatarChange}
          required
        />
      </label>
    </ModalWithForm>
  );
}

export default EditProfileModal;
