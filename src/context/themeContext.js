import { useState, createContext, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(true);

  useEffect(()=>{
    if(theme){
        document.body.classList.remove('dark');
        document.body.classList.add('light');
    }else{
        document.body.classList.remove('light');
        document.body.classList.add('dark');
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {props.children}
    </ThemeContext.Provider>
  );
};
