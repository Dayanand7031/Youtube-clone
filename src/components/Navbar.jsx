import React, { useEffect, useState } from 'react';
import Avatar from 'react-avatar';
import { FiAlignJustify } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddFill } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import logo from "../../public/logo.png";
import profile from "../../public/profile.jpg";
import { useNavigate } from 'react-router-dom';
import { useUtils } from '../context/UtilsContext';
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";


function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const { setIsSidebar, isSidebar, mobileShow, setMobileShow } = useUtils();

  const [searchbar, setSearchbar] = useState(false);

  useEffect(() => {
    console.log(isSidebar, mobileShow);
  }, [isSidebar])


  const searchQueryHandler = (event) => {
    if ((event?.key === "Enter" || event === "searchButton") && searchQuery?.length > 0) {
      navigate(`/search/${searchQuery}`)
      setSearchQuery("")
    }
  };

  const handleSidebar = () => {
    if (window.innerWidth <= 1280) {
      setIsSidebar(!isSidebar);
      setMobileShow(!mobileShow);
    }
    setIsSidebar(!isSidebar);
  };

  if(searchbar){
    return <div className='flex justify-between fixed top-0 w-[100%] bg-white px-6 py-2 items-center'>
      <IoMdArrowRoundBack size={20} onClick={()=>setSearchbar(!searchbar)} />
         <div className='flex flex-grow items-center mx-4 '>
        <div className='w-[100%] px-4 py-2 border border-gray-400 rounded-l-full'>
          <input type="text" placeholder='Search' className='outline-none'
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            value={searchQuery}
          />
        </div>
        <button className='px-4 py-2 border border-gray-400 bg-gray-100 rounded-r-full'
          onClick={() => searchQueryHandler("searchButton")}
        >
          <CiSearch size={"24px"} />
        </button>
       
      </div>
      <IoMdMic size={"42px"} className='p-2 ml-1 border border-gray-500 rounded-full cursor-pointer hover:bg-gray-200 ' />
    </div>
  }

  return (
    <div className='flex justify-between fixed top-0 w-[100%] bg-white px-6 py-2'>
      <div className='flex space-x-4 items-center'>
        <FiAlignJustify className='text-3xl p-1 border rounded-full hover:bg-gray-200 ' onClick={handleSidebar} />
        <img src={logo} alt="" className='w-28' />
      </div>
      <div className=' hidden md:flex w-[35%] '>
        <div className='w-[100%] px-4 py-2 border border-gray-400 rounded-l-full'>
          <input type="text" placeholder='Search' className='outline-none'
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            value={searchQuery}
          />
        </div>
        <button className='px-4 py-2 border border-gray-400 bg-gray-100 rounded-r-full'
          onClick={() => searchQueryHandler("searchButton")}
        >
          <CiSearch size={"24px"} />
        </button>
        <IoMdMic size={"42px"} className='p-2 ml-1 border border-gray-500 rounded-full cursor-pointer hover:bg-gray-200 ' />
      </div>
      <div className='flex space-x-4 items-center '>
        <IoIosSearch className='text-2xl xl:hidden' onClick={()=> setSearchbar(!searchbar)} />
        <RiVideoAddFill className='text-2xl' />
        <AiOutlineBell className='text-2xl' />
        <Avatar src={profile} alt="" size="32" round={true} />
      </div>
    </div>
  );
}

export default Navbar;
