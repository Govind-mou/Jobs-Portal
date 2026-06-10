// src/utils/helpers.js

export const truncateText = (
  text,
  maxLength = 100
) => {
  if (!text) return "";

  return text.length > maxLength
    ? `${text.substring(0, maxLength)}...`
    : text;
};

export const generateJobSlug = (
  title
) => {
  return title
    .toLowerCase()
    .replace(/\s+/g, "-");
};

export const capitalize = (text) => {
  if (!text) return "";

  return (
    text.charAt(0).toUpperCase() +
    text.slice(1)
  );
};

export const calculateMatchScore = (
  matchedSkills,
  totalSkills
) => {
  if (!totalSkills) return 0;

  return Math.round(
    (matchedSkills / totalSkills) * 100
  );
};