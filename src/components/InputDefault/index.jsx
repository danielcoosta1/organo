import { FormularioInput, FormularioLabel } from "./styles";

const InputDefault = ({ value, label, id, type, ...props }) => {

  



  return (
    <>
      <FormularioLabel htmlFor={id}>{label}</FormularioLabel>
      <FormularioInput value={value} id={id} type={type} {...props} />
    </>
  );
};

export default InputDefault;
