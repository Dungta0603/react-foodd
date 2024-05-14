import {
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useState } from "react";
import MenuCard from "./MenuCard";
const categories = ["pizza", "biryani", "burger ", "chinken", "rice"];
const foodTypes = [
  { label: "All", value: "all" },
  { label: "vagetarrian only", value: "vagetarrian" },
  { label: "Non-vafetarruan", value: "non-vesdftuanfs" },
  { label: "seasonl", value: "aseasonll" },
];
const menu = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const RestaurantDetails = () => {
  const [foodType, setfoodType] = useState("all");

  return (
    <div className="px-5 lg:px-20">
      <section>
        <h3 className="text-gray-400 py-2 my-10">
          Home/india/indian fast food/3
        </h3>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <img
                className=" w-full h-[40vh] object-cover"
                src="https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt=""
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <img
                className=" w-full h-[40vh] object-cover"
                src="https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt=""
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <img
                className=" w-full h-[40vh] object-cover"
                src="https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt=""
              />
            </Grid>
          </Grid>
        </div>
        <div className=" pt-3 pb-5">
          <h1 className="text-4xl font-semibold"> Indeuan fioan food</h1>
          <p className=" text-gray-500 mt-1 ">
            ndclksmldckmsldnc sdmcalskdmckasn asndcvs dnskmls oinw ncjomv
            adjncsakdjc dsncsndcbs dnsjcnosnc ndsicskokm mdkscksnb nchsbhcsin
            ncisiocan nchsbhcaonc ncsiocsncn
          </p>
          <div className="space-y-3 mt-3 ">
            <p className="text-gray-500 flex items-center gap-3">
              <LocationOnIcon />
              <span>lroiwn riosn</span>
            </p>
            <p className="text-gray-500 flex items-center gap-3">
              <CalendarMonthIcon />
              <span>20-11-2024</span>
            </p>
          </div>
        </div>
      </section>
      <Divider />
      <section className="pt-[2rem] lg:flex relative">
        <div className="space-y-10 lg:w-[20%] filter">
          <div className="box space-y-5 lg:sticky top-28">
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Food Type
              </Typography>
              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                <RadioGroup name="food_type" value={foodType}>
                  {foodTypes.map(item => (
                    <FormControlLabel
                      key={item.value}
                      value={item.value}
                      control={<Radio />}
                      label={item.label}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
            <Divider />
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Food categories
              </Typography>
              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                <RadioGroup name="categories" value={foodType}>
                  {categories.map(item => (
                    <FormControlLabel
                      key={item}
                      value={item}
                      control={<Radio />}
                      label={item}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>
        <div className="space-y-15 lg:w-[80%] lg:pl-10 ">
          {menu.map(item => (
            <MenuCard />
          ))}
        </div>
      </section>
    </div>
  );
};

export default RestaurantDetails;
