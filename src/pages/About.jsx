import { useState } from "react";
import Footer from "../components/Footer";

// About Page Component
export default function About() {
  const allSkills = [
    { name: "HTML", category: "Technical" },
    { name: "CSS", category: "Technical" },
    { name: "OOP", category: "Technical" },
    { name: "Java", category: "Technical" },
    { name: "Git", category: "Technical" },
    { name: "Linux", category: "Technical" },
    { name: "Agile", category: "Technical" },
    { name: "Strong Communication", category: "Interpersonal" },
    { name: "Collaboration Skills", category: "Interpersonal" },
    { name: "Time Management", category: "Interpersonal" },
    { name: "Problem Solving", category: "Interpersonal" },
    { name: "Self-Management", category: "Interpersonal" },
    { name: "Creativity", category: "Interpersonal" },
    { name: "Bilingual (English & Yoruba)", category: "Interpersonal" },
    { name: "Team Player", category: "Interpersonal" },
  ];

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = allSkills.filter((skill) => {
    const matchesSearch = skill.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "All" || skill.category === activeCategory;
    return matchesSearch && matchesCategory;
  });
// Render About Page
  return (
    <>
      <header className="bg-primary text-white py-4 shadow-sm">
        <div className="container">
          <h1 className="text-center fw-bold display-5 mb-0">About Me</h1>
        </div>
      </header>

      <section id="home" className="container my-5">
    
        {/* Force all text inside to be dark */}
        <div className="p-4 p-md-5 rounded-4 shadow bg-body text-dark">
          <div className="row g-4 mb-5">
            <div className="col-12 col-md-6">
           <div className="p-3 rounded-4 border bg-body-tertiary h-100 text-dark">
            <h2 className="h4 fw-bold mb-3">Experience</h2>
            <ul className="mb-0">
                  <li>Tech & Program Supervisor</li>
                   <li>Tech & Youth Supervisor</li>
                   <li>Counselor Assistant</li>
                </ul>
                 </div>
                  </div>

            <div className="col-12 col-md-6">
              <div className="p-3 rounded-4 border bg-body-tertiary h-100 text-dark">
                <h2 className="h4 fw-bold mb-3">Education</h2>
                <ul className="mb-0">
                  <li>Dalhousie University — BASc</li>
                <li>Minor in Management</li>
            </ul>
            </div>
            </div>
          </div>

          <div className="text-center mb-3 bg-body-tertiary p-3 rounded-4 text-dark">
            <p className="mb-1">Explore My</p>
            <h2 className="fw-bold mb-0">Skill Sets</h2>
          </div>

          <div className="d-flex justify-content-center">
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Search skills…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
             style={{ maxWidth: "400px" }}
            />
          </div>

          <div className="d-flex justify-content-center mb-4">
        <div className="btn-group">

              <button
             className={`btn btn-outline-primary ${activeCategory === "All" ? "active" : ""}`}
             onClick={() => setActiveCategory("All")}
              >
                All
              </button>
              <button
                className={`btn btn-outline-primary ${activeCategory === "Technical" ? "active" : ""}`}
                onClick={() => setActiveCategory("Technical")}
              >
                Technical
              </button>
              <button
                className={`btn btn-outline-primary ${activeCategory === "Interpersonal" ? "active" : ""}`}
                onClick={() => setActiveCategory("Interpersonal")}
              >
                Interpersonal
              </button>
            </div>
          </div>

          <div className="row g-3">
            {filteredSkills.map((skill, index) => (
            <div className="col-12 col-sm-6 col-lg-4" key={index}>
            <div className="p-3 rounded-4 border bg-body-tertiary h-100 text-dark">
                  <h3 className="h5 mb-1">{skill.name}</h3>
                  <p className="mb-0">{skill.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
