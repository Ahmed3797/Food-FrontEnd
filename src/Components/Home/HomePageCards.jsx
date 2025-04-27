import useFetch from "../../hooks/FetchHook";
import ItemsCard from "./ItemsCard";
import { ThreeDots } from "react-loader-spinner";


const HomePageCards = ({catId,text,name}) => {
const URL = import.meta.env.VITE_URL;

const { data: Products, error: productError ,loading } = useFetch(
    `${URL}/api/categories/category/${catId}`
  );

  if (loading)
  {
    return ( <div className="h-[400px] flex justify-center items-center ">
      <ThreeDots
        height={80}
        width={80}
        color="#FFCDB2"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
    )
  }

  return (

    <div className='mb-[60px] mt-[60px]'>
      <h1 className='text-[20px] font-extrabold  text-orange-400'>
        {name?.toUpperCase()}
        </h1>
        <h1 className='mb-3 text-[14px] font-semibold text-gray-400'>
        {text?.toUpperCase()}
        </h1>
       
    <div className='flex gap-6 overflow-x-auto scrollbar-hide whitespace-nowrap'> 
        {Products?.map((item)=>
        {
            return <ItemsCard item={item} key={item._id} />;
        })}
    </div>
    </div>
  )
}

export default HomePageCards
