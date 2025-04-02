import { FormularioLabel, FormularioSelect } from "./styles";



// ListaSupensa.js
const ListaSupensa = ({ label, id, value, onChange, options, ...props }) => {

  return (
    <>
      <FormularioLabel htmlFor={id}>{label}</FormularioLabel>
      <FormularioSelect
        id={id}
        value={value} // Recebe o valor do pai
        onChange={onChange} // Recebe a função do pai
        required
      >
        <option value="" disabled hidden>
          Selecione seu time
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </FormularioSelect>
    </>
  );
};

export default ListaSupensa;
