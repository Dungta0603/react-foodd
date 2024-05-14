import React from "react";
import "./Home.css";
import MultiltemCarousel from "./MultiltemCarousel";
import RestaurantCard from "../Restaurant/RestaurantCard";
import { Auth } from "../Auth/Auth";
import { Link } from "react-router-dom";
const restaurant = [1];
const Home = () => {
  return (
    <div className="pb-10">
      <section className="banner -z-50 relative flex flex-col justify-center items-center">
        <div className=" w-[50vw] z-10 text-center">
          <p className="text-2xl lg:text-6xl font-bold z-10 py-5 ">Zosh Food</p>
          <p className="z-10 text-gray-300 text-xl lg:text-4xl ">
            Tast the Convenience: Food, Fast and Delivered.
          </p>
        </div>
        <div className=" cover absolute top-0 left-0 right-0"></div>
        <div className="fadout"></div>
      </section>
      <section className="py-10 lg:py-10 lg:px-20">
        <p className="text-2xl font-semiboid text-gray-400 py-3 pb-10 ">
          Top meels
        </p>
        <MultiltemCarousel></MultiltemCarousel>
      </section>
      <section className="px-5 lg:px-20 pt-5">
        <h1 className="text-2xl font-semibold text-gray-400 pb-8">
          From our Handpick Favorites
        </h1>
        <Link
          to="/RestaurantDetails"
          className="flex flex-wrap items-center justify-around gap-5"
        >
          {restaurant.map(item => (
            <RestaurantCard />
          ))}
        </Link>
      </section>
    </div>
  );
};

export default Home;
