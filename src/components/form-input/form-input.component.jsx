import "./form-input.styles.scss";

const FormInput = ({ forr, label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
          htmlFor={forr}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
