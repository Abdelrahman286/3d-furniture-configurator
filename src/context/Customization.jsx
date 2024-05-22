import { createContext, useContext, useState } from "react";

const CustomizationContext = createContext({});

export const CustomizationProvider = (props) => {
  const [material, setMaterial] = useState("Oak");

  const [isDoorOpen, setIsDoorOpen] = useState(false);
  //   const [legs, setLegs] = useState(1);
  //   const [chairColor, setChairColor] = useState(chairColors[0]);
  //   const [cushionColor, setCushionColor] = useState(cushionColors[0]);

  return (
    <CustomizationContext.Provider
      value={{
        material,
        setMaterial,
        isDoorOpen,
        setIsDoorOpen,
      }}
    >
      {props.children}
    </CustomizationContext.Provider>
  );
};

export const useCustomization = () => {
  const context = useContext(CustomizationContext);
  return context;
};
