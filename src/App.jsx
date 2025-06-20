import ProjectSidebar from "@components/ProjectSidebar/ProjectSidebar.jsx";
import NewProject from "./components/NewProject/NewProject";

function App() {
  return (
    <main className="flex gap-8 flex-col md:flex-row h-screen my-8">
      <ProjectSidebar />
      <NewProject />
    </main>
  );
}

export default App;
