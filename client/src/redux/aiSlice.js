import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,

  resume: {
    file: null,
    uploaded: false,
    analyzedAt: null,
  },

  scores: {
    ats: 0,
    recruiter: 0,
    resumeQuality: 0,
    jobFit: 0,
  },

  analysis: {
    summary: "",
    strengths: [],
    weaknesses: [],
    recommendations: [],
  },

  skills: {
    found: [],
    missing: [],
    matchedPercentage: 0,
    skillGap: [],
  },

  jobs: {
    recommended: [],
    saved: [],
    applied: [],
  },

  interview: {
    questions: [],
    answers: [],
    score: 0,
    feedback: [],
  },

  salaryInsights: {
    estimatedSalary: "",
    marketAverage: "",
    topLocations: [],
  },

  careerPath: {
    currentLevel: "",
    nextRoles: [],
    certifications: [],
  },

  aiChat: [],

  analytics: {
    totalMatches: 0,
    profileViews: 0,
    recruiterInteractions: 0,
  },
};

const aiSlice = createSlice({
  name: "ai",
  initialState,

  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },

    uploadResume: (state, action) => {
      state.resume.file = action.payload;
      state.resume.uploaded = true;
      state.resume.analyzedAt =
        new Date().toISOString();
    },

    setATSScore: (state, action) => {
      state.scores.ats = action.payload;
    },

    setRecruiterScore: (
      state,
      action
    ) => {
      state.scores.recruiter =
        action.payload;
    },

    setResumeQuality: (
      state,
      action
    ) => {
      state.scores.resumeQuality =
        action.payload;
    },

    setJobFitScore: (
      state,
      action
    ) => {
      state.scores.jobFit =
        action.payload;
    },

    setSummary: (state, action) => {
      state.analysis.summary =
        action.payload;
    },

    setStrengths: (
      state,
      action
    ) => {
      state.analysis.strengths =
        action.payload;
    },

    setWeaknesses: (
      state,
      action
    ) => {
      state.analysis.weaknesses =
        action.payload;
    },

    setRecommendations: (
      state,
      action
    ) => {
      state.analysis.recommendations =
        action.payload;
    },

    setSkillsFound: (
      state,
      action
    ) => {
      state.skills.found =
        action.payload;
    },

    setMissingSkills: (
      state,
      action
    ) => {
      state.skills.missing =
        action.payload;
    },

    setSkillGap: (
      state,
      action
    ) => {
      state.skills.skillGap =
        action.payload;
    },

    setMatchedPercentage: (
      state,
      action
    ) => {
      state.skills.matchedPercentage =
        action.payload;
    },

    setRecommendedJobs: (
      state,
      action
    ) => {
      state.jobs.recommended =
        action.payload;
    },

    saveJob: (state, action) => {
      state.jobs.saved.push(
        action.payload
      );
    },

    removeSavedJob: (
      state,
      action
    ) => {
      state.jobs.saved =
        state.jobs.saved.filter(
          (job) =>
            job.id !== action.payload
        );
    },

    addAppliedJob: (
      state,
      action
    ) => {
      state.jobs.applied.push(
        action.payload
      );
    },

    setInterviewQuestions: (
      state,
      action
    ) => {
      state.interview.questions =
        action.payload;
    },

    setInterviewScore: (
      state,
      action
    ) => {
      state.interview.score =
        action.payload;
    },

    setInterviewFeedback: (
      state,
      action
    ) => {
      state.interview.feedback =
        action.payload;
    },

    setSalaryInsights: (
      state,
      action
    ) => {
      state.salaryInsights =
        action.payload;
    },

    setCareerPath: (
      state,
      action
    ) => {
      state.careerPath =
        action.payload;
    },

    addChatMessage: (
      state,
      action
    ) => {
      state.aiChat.push(
        action.payload
      );
    },

    clearChat: (state) => {
      state.aiChat = [];
    },

    updateAnalytics: (
      state,
      action
    ) => {
      state.analytics = {
        ...state.analytics,
        ...action.payload,
      };
    },

    clearAIData: () => {
      return initialState;
    },
  },
});

export const {
  setLoading,
  setError,
  uploadResume,

  setATSScore,
  setRecruiterScore,
  setResumeQuality,
  setJobFitScore,

  setSummary,
  setStrengths,
  setWeaknesses,
  setRecommendations,

  setSkillsFound,
  setMissingSkills,
  setSkillGap,
  setMatchedPercentage,

  setRecommendedJobs,
  saveJob,
  removeSavedJob,
  addAppliedJob,

  setInterviewQuestions,
  setInterviewScore,
  setInterviewFeedback,

  setSalaryInsights,
  setCareerPath,

  addChatMessage,
  clearChat,

  updateAnalytics,

  clearAIData,
} = aiSlice.actions;

export default aiSlice.reducer;