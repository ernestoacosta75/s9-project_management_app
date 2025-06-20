const ProjectSidebar = () => {
  return (
    <aside className="px-4 py-2">
        <h2 className="py-4">Your Projects</h2>
        <div>
            <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
                + Add Project
            </button>
        </div>
        <ul></ul>
    </aside>
  );
};

export default ProjectSidebar;