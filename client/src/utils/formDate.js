// src/utils/formatDate.js

export const formatDate = (
  dateString
) => {
  if (!dateString) return "";

  const date = new Date(dateString);

  return date.toLocaleDateString(
    "en-IN",
    {
      day: "numeric",
      month: "short",
      year: "numeric",
    }
  );
};

export const formatDateTime = (
  dateString
) => {
  if (!dateString) return "";

  const date = new Date(dateString);

  return date.toLocaleString("en-IN");
};

export const getDaysAgo = (
  dateString
) => {
  const date = new Date(dateString);

  const now = new Date();

  const diffTime =
    now.getTime() - date.getTime();

  const diffDays = Math.floor(
    diffTime / (1000 * 60 * 60 * 24)
  );

  return diffDays;
};