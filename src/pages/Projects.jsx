// src/pages/Projects.jsx
import Footer from "../components/Fo oter";
// Projects Page 
export default function Projects() {
  const projects = [
    {
      title: "AI Text Summerizer",
      demo: "https://colab.research.google.com/github/Praise-CS/Text-Summerizer-AI/blob/main/TextSummerizerModel.ipynb",
    },
    {
      title: "Restaurant Website",
      demo: "https://praise-cs.github.io/Restaurant-Website/",
    },
    {
      title: "Weather Website",
      demo: "https://praise-cs.github.io/Weather-Website/",
    },
  ];
    // Render Projects PagGE  
  return (
    <>
    <link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
/>

      <section id="projects" className="py-5">
        <div className="container">
  <h1 className="text-center text-primary mb-3">My Projects</h1>
    
          <p className="text-center text-secondary mb-5">
            These are some of my recent projects showcasing my practical skills, problem-solving abilities, and creativity.
          </p>

          <div className="row g-4">
            {projects.map((project, index) => (
           <div className="col-md-6 col-lg-4" key={index}>

                <div className="card h-100 shadow-sm">
          <div className="card-body d-flex flex-column">
<div className="text-center mb-3 bg-body-tertiary p-3 rounded-4 border">
             <h5 className="card-title text-center text-dark">{project.title}</h5>
            </div>
                    <div className="mt-auto d-flex justify-content-center">
                      <button
                        className="btn btn-primary"
                        onClick={() => window.open(project.demo, "_blank")}
                      >
                        Live Demo
                      </button>



                    </div>
                  </div>

                </div>
              </div>
            ))}
            
          </div>
        </div>
      </section>

    </>
  );
}
