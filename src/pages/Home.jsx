import React,{useEffect} from "react";
import MainImage from "../Components/Home/MainImage";
import Exploremenu from "../Components/Home/Exploremenu";
import CategorySelcect from "../Components/Home/CategorySelcect";
import Info from "../Components/Home/Info";
import HomePageCards from "../Components/Home/HomePageCards";
import useFetch from "../hooks/FetchHook";
import { useDispatch,useSelector } from "react-redux";
import {AddAllCategories} from '../Store/categorySlice'
import ReviewSection from "../Components/Home/ReviewSection";

const Home =  () => {
  
  const URL = import.meta.env.VITE_URL;
  const dispatch = useDispatch()
  const { data :  categories, error: caterror } = useFetch(
    `${URL}/api/categories`
  );


  useEffect(() => {
    if (categories) {
      console.log("runesss")
      dispatch(AddAllCategories(categories));
    }
  }, [categories, dispatch]);
  
  const categoriesList =useSelector((state)=>state.category.categories)

  console.log(categoriesList)
    

  return (
    <div>
      <MainImage />
      <Info />
      <Exploremenu />
      <CategorySelcect />
      <HomePageCards catId={categoriesList[0]?._id} text={categoriesList[0]?.description} name={categoriesList[0]?.name}/>
      <HomePageCards catId={categoriesList[1]?._id} text={categoriesList[1]?.description} name={categoriesList[1]?.name} /> 
     
      {/* <ReviewSection/> */}
 {/* <HomePageCards catId={categoriesList[2]?._id} text={categoriesList[2]?.description} name={categoriesList[2]?.name} /> */}
    </div>
  );
};

export default Home;
