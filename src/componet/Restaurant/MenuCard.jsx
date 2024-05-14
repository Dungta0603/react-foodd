import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// const ingredients = [
//   {
//     category: "Nuts & seeds",
//     ingredients: "Cashews",
//   },
//   {
//     category: "Protein",
//     ingredients: "rotein",
//   },
//   {
//     category: "Protein",
//     ingredients: "Bacon strips",
//   },
// ];
const demo = [
  {
    category: "Nuts & seeds",
    ingredients: ["Cashews"],
  },
  {
    category: "Protein",
    ingredients: ["rotein", "Bacon strips"],
  },
];
const MenuCard = () => {
  const handleCheckBoxChange = value => {
    console.log("value");
  };
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <div className="lg:flex items-center justify-between">
          <div className="lg:flex items-center lg:gap-5">
            <img
              className="w-[7rem] h-[7rem] object-cover"
              src="https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
              <p className="font-semiblod text-xl"> Burger</p>
              <p>$400</p>
              <p className="text-gray-400">nice food</p>
            </div>
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <from>
          <div className="flex gap-5 flex-wrap ">
            {demo.map(item => (
              <div>
                <p className=""> {item.category}</p>
                <FormGroup>
                  {item.ingredients.map(item => (
                    <FormControlLabel
                      control={
                        <Checkbox onChange={() => handleCheckBoxChange(item)} />
                      }
                      label={item}
                    />
                  ))}
                </FormGroup>
              </div>
            ))}
          </div>
          <div className="pt-5">
            <Button variant="contained" disabled={false} type="submit">
              {true ? "Add to Cart " : "Out of Stock "}
            </Button>
          </div>
        </from>
      </AccordionDetails>
    </Accordion>
  );
};

export default MenuCard;
