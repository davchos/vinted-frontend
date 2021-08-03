import "./css/Input.css";

const Input = ({ type, label, value, setValue }) => {
  const cols = "40";
  const rows = "20";
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="input">
      <label>{label}</label>
      <input type={type} onChange={handleChange} cols={100} rows={rows} />
    </div>
  );
};
export default Input;
