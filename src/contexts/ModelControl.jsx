import { useControls } from "leva";
import { createContext, useContext, useState, useEffect } from "react";

const CharacterAnimationsContext = createContext({});

export const CharacterAnimationsProvider = (props) => {
  const [IsDrag, SetDrag] = useState(false);
 
  let path = window.location.pathname.substring(1);
  const [currentModelName, setCurrentModelName] = useState(path);

  const { Color } = useControls({
    
    Model: {
      value: currentModelName,
      options: {
        "House 1": "model1",
        "House 2": "model2",
        "House 3": "model3",
        
      },
      onChange: (value) => {
        setCurrentModelName(value);
      },
    },
  });

  useEffect(() => {
    setCurrentModelName((prevModelName) => {
      if (path !== prevModelName) {
        return path;
      }
      return prevModelName;
    });
  }, [path]);

  return (
    <CharacterAnimationsContext.Provider
      value={{
        currentModelName,
        setCurrentModelName,
        Color,
        IsDrag,
        SetDrag,
        
      }}
    >
      {props.children}
    </CharacterAnimationsContext.Provider>
  );
};

export const useCharacterAnimations = () => {
  return useContext(CharacterAnimationsContext);
};
