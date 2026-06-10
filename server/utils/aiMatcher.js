export const calculateMatchScore = (
  jobSkills,
  resumeSkills
) => {
  if (
    !jobSkills.length ||
    !resumeSkills.length
  ) {
    return {
      score: 0,
      matchedSkills: [],
    };
  }

  const matchedSkills =
    resumeSkills.filter((skill) =>
      jobSkills.some(
        (jobSkill) =>
          jobSkill.toLowerCase() ===
          skill.toLowerCase()
      )
    );

  const score = Math.round(
    (matchedSkills.length /
      jobSkills.length) *
      100
  );

  return {
    score,
    matchedSkills,
  };
};