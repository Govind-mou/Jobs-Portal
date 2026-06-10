// src/utils/validators.js

export const validateEmail = (
  email
) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
    email
  );
};

export const validatePassword = (
  password
) => {
  return password.length >= 6;
};

export const validatePhone = (
  phone
) => {
  return /^[0-9]{10}$/.test(phone);
};

export const validateRequired = (
  value
) => {
  return (
    value !== null &&
    value !== undefined &&
    value.toString().trim() !== ""
  );
};

export const validateResumeFile = (
  file
) => {
  if (!file) return false;

  const allowedTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];

  return allowedTypes.includes(file.type);
};