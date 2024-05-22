import { createContext, useContext, useState } from "react";

const CustomizationContext = createContext({});

export const CustomizationProvider = (props) => {
  const [outerMaterial, setOuterMaterial] = useState("Oak");
  const [innerMaterial, setInnerMaterial] = useState("White");
  const [handlesMaterial, setHandlesMaterial] = useState("White");
  const [isDoorOpen, setIsDoorOpen] = useState(false);
  //   const [legs, setLegs] = useState(1);
  //   const [chairColor, setChairColor] = useState(chairColors[0]);
  //   const [cushionColor, setCushionColor] = useState(cushionColors[0]);

  return (
    <CustomizationContext.Provider
      value={{
        outerMaterial,
        setOuterMaterial,
        innerMaterial,
        setInnerMaterial,
        handlesMaterial,
        setHandlesMaterial,
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
