import React from 'react'

const ImageComponent = ({setData}) => {
  return (
    <>
    <div className='flex relative h-[500px]'>
    <div onMouseEnter={()=>
      {
         setData(1)
      }
    }
    onMouseLeave={()=>[
      setData(0)
    ]}
    className='w-[200px] md:w-[300px] absolute top-[10%] left-[10%] hover:z-20 transition-all duration-300 hover:outline outline-[10px] outline-offset-[20px] outline-blue-300 hover:rotate-[10deg] hover:scale-[120%]'>
       <img src="https://images.pexels.com/photos/3217156/pexels-photo-3217156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
    </div>
    <div 
    onMouseEnter={()=>
      {
         setData(2)
      }
    }
    onMouseLeave={()=>[
      setData(0)
    ]}
    
    className='w-[200px] md:w-[300px] absolute top-[40%] left-[18%] z-10 hover:z-20 transition-all duration-300 hover:outline outline-[10px] outline-offset-[20px] outline-green-300 hover:scale-[120%]'>
       <img src="https://images.pexels.com/photos/12725424/pexels-photo-12725424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
    </div>
    <div 
    onMouseEnter={()=>
      {
         setData(3)
      }
    }
    onMouseLeave={()=>[
      setData(0)
    ]}
    className='w-[200px] md:w-[300px] absolute top-[25%] right-[10%] hover:z-20 transition-all duration-300 hover:outline outline-[10px] outline-offset-[20px] outline-red-300 hover:rotate-[-10deg] hover:scale-[120%]'>
       <img src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 " alt="" />
    </div>
    </div>

    </>
    
  )
}

export default ImageComponent
