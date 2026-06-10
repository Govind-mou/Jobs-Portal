import api from "./api";

export const analyzeResume = async (
  formData
) => {
  const response = await api.post(
    "/ai/analyze-resume",
    formData,
    {
      headers: {
        "Content-Type":
          "multipart/form-data",
      },
    }
  );

  return response.data;
};

export const getJobRecommendations =
  async (userId) => {
    const response = await api.get(
      `/ai/recommendations/${userId}`
    );

    return response.data;
  };

export const getMatchScore =
  async (jobId, resumeId) => {
    const response = await api.post(
      "/ai/match-score",
      {
        jobId,
        resumeId,
      }
    );

    return response.data;
  };