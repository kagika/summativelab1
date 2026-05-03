
function ProjectList({ searchedProject }) {
  return (
    <ul className="projectList">
      {searchedProject.map((project, index) => (
        <li key={index} className="projectCard">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </li>
      ))}
    </ul>
  );
}

export default ProjectList;