import { useState } from "react";

export default function JobFilter({
  onFilter,
}) {
  const [filters, setFilters] =
    useState({
      location: "",
      type: "",
      experience: "",
    });

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleFilter = () => {
    onFilter(filters);
  };

  return (
    <div className="job-filter">

      <h3>Filter Jobs</h3>

      <input
        type="text"
        name="location"
        placeholder="Location"
        value={filters.location}
        onChange={handleChange}
      />

      <select
        name="type"
        value={filters.type}
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

      <select
        name="experience"
        value={
          filters.experience
        }
        onChange={handleChange}
      >
        <option value="">
          Experience
        </option>

        <option value="Fresher">
          Fresher
        </option>

        <option value="Junior">
          Junior
        </option>

        <option value="Mid-Level">
          Mid-Level
        </option>

        <option value="Senior">
          Senior
        </option>
      </select>

      <button
        onClick={handleFilter}
      >
        Apply Filter
      </button>

    </div>
  );
}