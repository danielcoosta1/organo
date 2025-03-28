import { FormularioInput, FormularioLabel } from "./styles";

const InputDefault = ({ label, id, type, ...props }) => {
  return (
    <>
      <FormularioLabel htmlFor={id}>{label}</FormularioLabel>
      <FormularioInput 
        id={id}
        type={type} 
        {...props} 
      />
    </>
  );
};

export default InputDefault;