import Input from "@components/Input/Input.jsx";

const NewProject = () => {
  return (
    <div>
      <menu>
        <li>
          <button>Cancel</button>
        </li>
        <li>
          <button>Save</button>
        </li>
      </menu>
      <div>
        <Input label="Title"/>
        <Input label="Description" isTextArea/>
        <Input label="Due Date"/>
      </div>
    </div>
  );
};

export default NewProject;
