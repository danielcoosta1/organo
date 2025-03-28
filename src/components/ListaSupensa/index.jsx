import { FormularioLabel, FormularioSelect } from "./styles";
import { useState } from "react";


const ListaSupensa = ({ label, id, defaultValue = "", ref, ...props }) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);
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
      <FormularioSelect
        id={id}
        value={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)}
        
      >
        <option value="" disabled hidden>
          {defaultValue || "Selecione"}
        </option>
        {timeOptions.map((option) => (
          <option key={option} value={option} >
            {option}
          </option>
        ))}
      </FormularioSelect>
    </>
  );
};

export default ListaSupensa;
