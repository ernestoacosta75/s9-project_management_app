import ProjectSidebar from "@components/ProjectSidebar/ProjectSidebar.jsx";
import NewProject from "./components/NewProject/NewProject";
import NoProjectSelected from "@components/NoProjectSelected/NoProjectSelected.jsx";

function App() {
  return (
    <main className="flex gap-8 flex-col md:flex-row h-screen my-8">
      <ProjectSidebar />
      <NoProjectSelected />
    </main>
  );
}

export default App;
