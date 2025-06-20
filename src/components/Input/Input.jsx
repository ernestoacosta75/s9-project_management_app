const Input = ({ label, isTextArea, ...props }) => {
  return (
    <p>
      <label>{label}</label>
      {isTextArea ? <textarea {...props}></textarea> : <input {...props} />}      
    </p>
  );
};

export default Input;
