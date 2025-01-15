// LogoutModal.js
import { Modal } from "antd";

function LogoutModal({ open, onConfirm, onCancel }) {
  return (
    <Modal
      title="Confirm Logout"
      open={open} // înlocuim `visible` cu `open`
      onOk={onConfirm}
      onCancel={onCancel}
      okText="Yes, Logout"
      cancelText="Cancel"
    >
      <p>Are you sure you want to log out?</p>
    </Modal>
  );
}

export default LogoutModal;
