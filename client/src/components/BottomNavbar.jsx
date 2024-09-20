
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BottomNavbar() {
  const Menus = [
    { name: "Home", icon: "home-outline", path:"/" },
    { name: "Leader Board", icon: "list-outline" },
  ];
  
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  const handleNavigation = (index, path) => {
    setActive(index);
    navigate(path); 
  };


  return (
    <div className=''>
      <div className="fixed bottom-0 inset-x-0 bg-yellow-50 border-gray-300 max-w-2xl mx-auto  rounded-lg">
        <div className=' w-[75%] md:w-[57%] mx-auto'>
          <ul className="flex justify-between items-center relative h-16">
            {Menus.map((menu, i) => (
              <li key={i} className="w-16">
                <a
                  className="flex flex-col items-center text-center pt-6"
                  // onClick={() => setActive(i)}
                  onClick={() => handleNavigation(i, menu.path)}
                >
                  <span
                    className={`text-xl md:text-2xl cursor-pointer duration-500 ${
                      i === active ? "-mt-6 text-red-500" : "text-black"
                    }`}
                  >
                    <ion-icon  name={menu.icon}></ion-icon>
                  </span>
                  <span
                    className={`whitespace-nowrap ${
                      active === i
                        ? "translate-y-0 duration-700 opacity-100"
                        : "opacity-0 translate-y-10"
                    }`}
                  >
                    {menu.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}



