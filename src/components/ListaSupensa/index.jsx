import { FormularioLabel, FormularioSelect } from "./styles";

const ListaSupensa = ({ label, id, defaultValue = "", ...props }) => {
  const timeOptions = [
    "Programação",
    "Front-End",
    "Data Science",
    "DevOps",
    "UX e Design",
    "Mobile",
  ];

  return (
    <>
      <FormularioLabel htmlFor={id}>{label}</FormularioLabel>
      <FormularioSelect id={id} defaultValue={defaultValue} required>
        {/* Opção placeholder (vazia) */}
        <option value="" disabled hidden>
          {defaultValue || "Selecione..."}
        </option>
        {/* Opções da lista */}
        {timeOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </FormularioSelect>
    </>
  );
};

export default ListaSupensa;
