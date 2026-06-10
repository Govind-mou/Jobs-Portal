import { useState } from "react";

export default function JobSearchBar({
  onSearch,
}) {
  const [filters, setFilters] =
    useState({
      keyword: "",
      location: "",
      experience: "",
      jobType: "",
    });

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSearch(filters);
  };

  return (
    <form
      className="advanced-search-bar"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="keyword"
        placeholder="Job title, skill..."
        value={filters.keyword}
        onChange={handleChange}
      />

      <input
        type="text"
        name="location"
        placeholder="Location"
        value={filters.location}
        onChange={handleChange}
      />

      <select
        name="experience"
        value={filters.experience}
        onChange={handleChange}
      >
        <option value="">
          Experience
        </option>

        <option value="0-1">
          Fresher
        </option>

        <option value="1-3">
          1-3 Years
        </option>

        <option value="3-5">
          3-5 Years
        </option>

        <option value="5+">
          5+ Years
        </option>
      </select>

      <select
        name="jobType"
        value={filters.jobType}
        onChange={handleChange}
      >
        <option value="">
          Job Type
        </option>

        <option value="Full Time">
          Full Time
        </option>

        <option value="Part Time">
          Part Time
        </option>

        <option value="Remote">
          Remote
        </option>

        <option value="Internship">
          Internship
        </option>
      </select>

      <button type="submit">
        Search Jobs
      </button>
    </form>
  );
}