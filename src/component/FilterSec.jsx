import {React, useState} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°C`;
}

export default function FilterSec() {
    const [selectList, setSelectList] = useState([]);
    const [value, setValue] = useState([20, 37]);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const subCategory = [
        { id: 1, name: "Duffle Bag" },
        { id: 2, name: "Suitcases" },
        { id: 3, name: "Travel Tote" },
        { id: 4, name: "Weekenders" },
        { id: 5, name: "A carry-on" },
        { id: 6, name: "Backpack" },
      ];

      const brands = [
        { id: 1, name: "VIP" },
        { id: 2, name: "Safari" },
        { id: 3, name: "Aristocrat" },
        { id: 4, name: "American Tourister" },
      ];

      const allCategory = [
        { name: "Travelling Bags" },
        { name: "Student Bags" },
        { name: "Kids Bags" },
        { name: "Camera Bags" },
        { name: "Men Essentials" },
        { name: "Women Essentials" },
        { name: "Winter Wear" },
        { name: "Monsoon Wear" },
        { name: "Sports Wear" },
        { name: "Gift Articles" },
        { name: "Thermoware" },
        { name: "Glassware" },
        { name: "Corporate Gifts" },
        { name: "Helmet" },
      ];
      
    
    
      const [activeIndices, setActiveIndices] = useState([]);
    
      const handleClick = (index) => {
        setActiveIndices((prevIndices) => {
          if (prevIndices.includes(index)) {
            return prevIndices.filter((i) => i !== index);
          } else {
            return [...prevIndices, index];
          }
        });
      };

      const [activeIndices2, setActiveIndices2] = useState([]);
    
      const handleClick2 = (index) => {
        setActiveIndices2((prevIndices) => {
          if (prevIndices.includes(index)) {
            return prevIndices.filter((i) => i !== index);
          } else {
            return [...prevIndices, index];
          }
        });
      };


  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<p style={{marginBottom:"0px", fontSize:"24px", fontWeight:"bolder", color:"rgb(58, 58, 58)"}}><ArrowDownwardIcon /></p>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography><p style={{marginBottom:"0px", fontSize:"18px", fontWeight:"bolder", color:"rgb(58, 58, 58)"}}>Sub Categories</p></Typography>
        </AccordionSummary>
        <AccordionDetails>
        <ul class="widget-body filter-items item-check">
        {subCategory.map((item, index) => (
        <li
          key={item.id}
          className={activeIndices.includes(index) ? 'active' : 'inactive'}
          onClick={() => handleClick(index)}
        >
          <a href="#" style={{ textAlign: "left" }}>{item.name}</a>
        </li>
      ))}
                                        </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<p style={{marginBottom:"0px", fontSize:"24px", fontWeight:"bolder", color:"rgb(58, 58, 58)"}}><ArrowDownwardIcon /></p>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography><p style={{marginBottom:"0px", fontSize:"18px", fontWeight:"bolder", color:"rgb(58, 58, 58)"}}>All Categories</p></Typography>
        </AccordionSummary>
        <AccordionDetails>
                                        <ul class="widget-body filter-items search-ul">
                                        {allCategory.map((item, index) => (
                                            <li><a href="#" style={{textAlign:"left"}}>{item.name}</a></li>
      ))}
                                        </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<p style={{marginBottom:"0px", fontSize:"24px", fontWeight:"bolder", color:"rgb(58, 58, 58)"}}><ArrowDownwardIcon /></p>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography><p style={{marginBottom:"0px", fontSize:"18px", fontWeight:"bolder", color:"rgb(58, 58, 58)"}}>Brands</p></Typography>
        </AccordionSummary>
        <AccordionDetails>
        <ul class="widget-body filter-items item-check">
        {brands.map((item, index) => (
        <li
          key={item.id}
          className={activeIndices2.includes(index) ? 'active' : 'inactive'}
          onClick={() => handleClick2(index)}
        >
          <a href="#" style={{ textAlign: "left" }}>{item.name}</a>
        </li>
      ))}
                                        </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<p style={{marginBottom:"0px", fontSize:"24px", fontWeight:"bolder", color:"rgb(58, 58, 58)"}}><ArrowDownwardIcon /></p>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography><p style={{marginBottom:"0px", fontSize:"18px", fontWeight:"bolder", color:"rgb(58, 58, 58)"}}>Price Range</p></Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Box>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
