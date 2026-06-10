import { useState } from "react";
import "./Profile.css";
export default function Profile() {
  const [profile, setProfile] = useState({
    name: "Govind Bharadwaj",
    email: "govind@example.com",
    phone: "+91 9876543210",
    location: "Meerut, Uttar Pradesh",
    skills: "React, JavaScript, Node.js, MongoDB",
    experience: "2 Years",
    bio: "Frontend Developer passionate about building modern web applications."
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = (e) => {
    e.preventDefault();

    console.log(profile);

    alert("Profile Updated Successfully!");
  };

  return (
    <div className="profile-page">

      <div className="profile-card">

        <div className="profile-header">
          <div className="profile-avatar">
            👤
          </div>

          <h1>{profile.name}</h1>

          <p>{profile.email}</p>
        </div>

        <form onSubmit={handleSave}>

          <div className="form-group">
            <label>Full Name</label>

            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Phone</label>

            <input
              type="text"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Location</label>

            <input
              type="text"
              name="location"
              value={profile.location}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Skills</label>

            <input
              type="text"
              name="skills"
              value={profile.skills}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Experience</label>

            <input
              type="text"
              name="experience"
              value={profile.experience}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>About Me</label>

            <textarea
              rows="5"
              name="bio"
              value={profile.bio}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="save-btn"
          >
            Save Profile
          </button>

        </form>

      </div>

    </div>
  );
}