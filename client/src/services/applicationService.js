import api from "./api";

export const applyForJob = async (
  applicationData
) => {
  const response = await api.post(
    "/applications",
    applicationData
  );

  return response.data;
};

export const getMyApplications =
  async () => {
    const response = await api.get(
      "/applications/my"
    );

    return response.data;
  };

export const getApplicantsByJob =
  async (jobId) => {
    const response = await api.get(
      `/applications/job/${jobId}`
    );

    return response.data;
  };