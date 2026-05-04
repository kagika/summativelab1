import { useEffect, useState } from "react";
import "./App.css";
import ProjectList from "./components/ProjectList";
import HeroSection  from "./components/hero-section-navbar/HeroSection";
// import AddProject from './components/AddProject'
// import DisplayProjects from './components/DisplayProjects'

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [projects, setproject] = useState([]);
  const [search, setSearch] = useState("");
  const [searchedProject, setsearchedProject] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    setproject([...projects, { title, description }]);
    setTitle("");
    setDescription("");
  }

  function handleSearchSubmit(event) {
    event.preventDefault();
    if (search.trim() ===""){
      setsearchedProject([...projects]);
      return 
    }

    const filter = projects.filter((project) =>
      project.title.toLowerCase().includes(search.toLowerCase()),
    );
    setsearchedProject(filter);
  }
  useEffect(() => {
    console.log(searchedProject);
  });
  return (
    <main>
    {/* Hero section and navbar*/}
    <HeroSection />
      {/* project adding and searching section */}
      <section className ='projectSection'>
      <div className="projectBody">
        {/* adding projects  */}
        <div className="addProject">
          <h1>ADD PROJECT</h1>
          <form action="" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="lol"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <textarea
                type="text"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div>
              <button type="submit" className="addProjectButton">
                Add Project
              </button>
            </div>
          </form>
        </div>
        {/* Searching for the project  */}
        <div className="searchProject">
          <form action="" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search for projects"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit">Search for a project</button>
          </form>
          <ProjectList searchedProject = {searchedProject.length ? searchedProject :projects} />
        </div>
      </div>
      </section>
    </main>
  );
}

export default App;
