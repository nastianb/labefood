import  React,{useState, useContext} from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { GlobalContext } from '../../global/GlobalContext'

const ScroolableTabs = () => {
  const [value, setValue] = useState(0);
  const {setters} = useContext(GlobalContext);
  const {setFilter} = setters; 

 
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const filterResult = (catItem) => {
    setFilter(catItem)
  }

  return (
    <>
     
        <Tabs 
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"          
        >
          <Tab  onClick={()=>filterResult("")} label="Todos"/>
          <Tab  onClick={()=>filterResult("Árabe")} label="Árabe"/>
          <Tab  onClick={()=>filterResult("Asiática")} label="Asiática"/>
          <Tab  onClick={()=>filterResult("Hamburguer")} label="Hamburguer"/>
          <Tab  onClick={()=>filterResult("Italiana")} label="Italiana"/>
          <Tab  onClick={()=>filterResult("Sorvetes")} label="Sorvetes"/>
          <Tab  onClick={()=>filterResult("Carnes")} label="Carnes"/>
          <Tab  onClick={()=>filterResult("Baiana")} label="Baiana"/>
          <Tab  onClick={()=>filterResult("Petiscos")} label="Petiscos"/>
          <Tab  onClick={()=>filterResult("Mexicana")} label="Mexicana "/>         
        </Tabs>
      
    </>
  );
};
export default ScroolableTabs;
