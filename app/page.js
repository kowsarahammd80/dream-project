import CategoryItems from "@/Components/CategoryItems/CategoryItems";
import HomeHeroSection from "@/Components/HomeHeroSection/HomeHeroSection";
import TrandingItems from "@/Components/TrandingItems/TrandingItems";
import ItemsAirrval from "./itemsArrival/page";
import Branding from "@/Components/Branding/Branding";


const Home =() => {

  return (

    <main className="">
        <HomeHeroSection/> 
        {/* <CategoryItems/> */}
        {/* <TrandingItems/> */}
        <ItemsAirrval/>
        <Branding/>
    </main>

  );
  
}

export default Home;