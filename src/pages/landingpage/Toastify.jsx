import React from "react";
import { ToastContainer, toast } from "react-toastify";
import styled from "@emotion/styled";
import "react-toastify/dist/ReactToastify.css";

// Styled Toast Container
const StyledToastContainer = styled((props) => (
  <ToastContainer {...props} newestOnTop />
))({
  "& .Toastify__toast": {
    boxShadow: "none",
    padding: "10px",
    minHeight: "50px",
    borderRadius: "8px",
    fontFamily: "Arial, sans-serif",
  },
  "& .Toastify__toast-body": {
    margin: 0,
  },
  "& .Toastify__toast-theme--light": {
    backgroundColor: "#f0f4f8",
    color: "#333",
  },
  "& .Toastify__toast-theme--dark": {
    backgroundColor: "#333",
    color: "#fff",
  },
});

// Active Toast Tracker
const activeToasts = new Set();

// ToastMessage Component
const ToastMessage = ({ title, content, handleClose }) => (
  <div onClick={handleClose}>
    <strong>{title}</strong>
    <p>{content}</p>
  </div>
);

// showCustomToast function
const showCustomToast = ({ title = "", content = "", type = "default", autoClose = 3000 }) => {
  const toastKey = `${type}-${title}-${content}`;
  if (activeToasts.has(toastKey)) return; // Prevent duplicate toasts

  const toastId = toast(
    <ToastMessage
      title={title}
      content={content}
      handleClose={() => {
        toast.dismiss(toastId);
        activeToasts.delete(toastKey);
      }}
    />,
    {
      hideProgressBar: true,
      closeButton: false,
      pauseOnHover: false,
      draggable: false,
      onClose: () => activeToasts.delete(toastKey),
      autoClose,
      type,
    }
  );

  activeToasts.add(toastKey);
};

// Exported Toast Functions
export const toastSuccess = (props) => showCustomToast({ ...props, type: "success" });
export const toastError = (props) => showCustomToast({ ...props, type: "error" });
export const toastDefault = (props) => showCustomToast({ ...props, type: "default" });

export const ToastProvider = () => <StyledToastContainer />;

export default toastSuccess;
