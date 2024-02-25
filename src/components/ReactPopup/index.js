import Popup from "reactjs-popup";
import "./index.css";

const ReactPopup = () => (
  <div className="popup-container">
    <Popup
      trigger={
        <button type="button" className="trigger-button">
          Trigger
        </button>
      }
      position="bottom left"
    >
      <p className="modal-msg">
        React is a popular and widely used programming language
      </p>
    </Popup>
    <Popup
      modal
      trigger={
        <button type="button" className="trigger-button">
          Trigger
        </button>
      }
      overlayStyle={{ background: "#fff" }}
    >
      {(close) => (
        <div className="modal-container">
          <p className="modal-msg">
            React is a popular and widely used programming language
          </p>
          <button
            type="button"
            onClick={() => close()}
            className="trigger-button"
          >
            Close
          </button>
        </div>
      )}
    </Popup>
  </div>
);
export default ReactPopup;
