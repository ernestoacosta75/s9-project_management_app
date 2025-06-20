import ProjectSidebar from "@components/ProjectSidebar/ProjectSidebar.jsx";
import NewProject from "./components/NewProject/NewProject";
import NoProjectSelected from "@components/NoProjectSelected/NoProjectSelected.jsx";
import { useState } from "react";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined, // undefined means we're doing nothing. Null instead means we're' adding a new project.
    projects: []
  });

  const handleStartAddProject = () => {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: null
    }));
  };

  const handleAddProject = (projectData) => {
    setProjectsState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random()
      };

      return {
        ...prevState,
        selectedProjectId: undefined, // Reset to undefined after adding a project
        projects: [...prevState.projects, newProject]
      };
    });
  };

  console.log("Projects State:", projectsState); 

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAddProject={handleAddProject}/>;
  } else {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="flex gap-8 flex-col md:flex-row h-screen my-8">
      <ProjectSidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
