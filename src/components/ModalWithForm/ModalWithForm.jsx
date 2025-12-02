import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
  buttonText = "Submit",
  title,
  isOpen,
  onClose,
  onSubmit,
  alternativeButtonText,
  onAlternativeClick,
}) => (
  <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
    <div className="modal__content">
      <h2 className="modal__title">{title}</h2>

      <button onClick={onClose} type="button" className="modal__close"></button>
      <form className="modal__form" onSubmit={onSubmit}>
        {children}
        <div className="modal__buttons">
          <button type="submit" className="modal__submit">
            {buttonText}
          </button>
          {alternativeButtonText && (
            <button
              type="button"
              className="modal__alternative-button"
              onClick={onAlternativeClick}
            >
              {alternativeButtonText}
            </button>
          )}
        </div>
      </form>
    </div>
  </div>
);

export default ModalWithForm;
