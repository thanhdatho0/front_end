import Logo from "./NavbarComponents/Logo";
import logo_img from "../assets/logo.svg";
import Navigation from "./NavbarComponents/Navigation";
// import navigateData from "../JsonData/Navigation.json";
import Search from "./NavbarComponents/Search";
import Cart from "./NavbarComponents/Cart";
import { ChangeEvent, useState } from "react";
import { Navigator } from "../Navigator";
import {getAllNavigator} from "../api.tsx";

const Navbar = () => {
  //Search Handle Events
  const [search, setSearch] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e);
  };
  //End
  const [navigatorData, setNavigatorData] = useState<Navigator[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchApi = async() => {
    const result = await getAllNavigator();
    if(typeof result === "string"){
      setError(result);
      console.log("Error Message", error);
    }else if(Array.isArray(result.data)){
      setNavigatorData(result.data);
    }
  }

  fetchApi();
  return (
    <nav
      id="head-navbar"
      className="flex flex-row justify-around items-center shadow-sm w-full"
    >
      <div className="left-side flex gap-8 items-center p-3 ">
        <Logo logo_src={logo_img} />
        <Navigation navigator={navigatorData} />
      </div>
      <div className="righ-side flex flex-row items-center gap-8 p-3 text-center">
        <Search handleChange={handleChange} search={search} />
        <Cart />
      </div>
    </nav>
  );
};

export default Navbar;
