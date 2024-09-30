
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function DifferentSocialmedia() {

    const navigate = useNavigate();

    const handleClick1 = () => {
      navigate('/instagram'); 
    };

    const handleClick2 = () => {
      navigate('/facebook'); 
    };
    const handleClick3 = () => {
      navigate('/twitter'); 
    }
    const handleClick4 = () => {
      navigate('/youtube'); 
    }
    const handleClick5 = () => {
      navigate('/telegram'); 
    }
    const handleClick6 = () => {
      navigate('/linkedin'); 
    }

  return (
    <div className='border flex justify-evenly gap-2 mx-2 md:mx-12 flex-wrap rounded-xl mt-10 shadow-xl'>
      <div  onClick={handleClick1} className='cursor-pointer relative flex flex-col items-center w-[25%] md:w-[20%] my-5 mx-3 py-2 rounded-xl border'>
        <img
          src="https://png.pngtree.com/png-clipart/20180626/ourmid/pngtree-instagram-icon-instagram-logo-png-image_3584853.png"
          alt="Icon"
          className="w-16 h-16  "  
        />
        <span className="text-base font-medium text-center">
          Instagram ksajja
        </span>
        <span className='absolute -top-3 right-0 text-sm bg-red-500 border px-3 rounded-xl'>50+</span>
      </div>
      <div onClick={handleClick2} className='cursor-pointer relative flex flex-col items-center w-[25%] md:w-[20%] my-5 mx-3 py-2 rounded-xl border'>
        <img
          src="https://thumbs.dreamstime.com/b/facebook-logo-vector-eps-file-squared-coloured-easily-editable-have-white-background-high-resolution-255556941.jpg"
          alt="Icon"
          className="w-16 h-16  "  
        />
        <span className="text-base font-medium text-center">
          Facebook
        </span>
        <span className='absolute -top-3 right-0 text-sm bg-red-500 border px-3 rounded-xl'>50+</span>
      </div>
      <div onClick={handleClick3} className='cursor-pointer relative flex flex-col items-center w-[25%] md:w-[20%] my-5 mx-3 py-2 rounded-xl border'>
        <img
          src="https://img.freepik.com/free-vector/twitter-new-2023-x-logo-white-background-vector_1017-45422.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1726531200&semt=ais_hybrid"
          alt="Icon"
          className="w-16 h-16  "  
        />
        <span className="text-base font-medium text-center">
          Twitter
        </span>
        <span className='absolute -top-3 right-0 text-sm bg-red-500 border px-3 rounded-xl'>50+</span>
      </div>
      <div onClick={handleClick4} className='cursor-pointer relative flex flex-col items-center w-[25%] md:w-[20%] my-5 mx-3 py-2 rounded-xl border'>
        <img
          src="data:image/png;base64,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"
          alt="Icon"
          className="w-16 h-16  "  
        />
        <span className="text-base font-medium text-center">
          Youtube
        </span>
        <span className='absolute -top-3 right-0 text-sm bg-red-500 border px-3 rounded-xl'>50+</span>
      </div>
      <div onClick={handleClick5} className='cursor-pointer relative flex flex-col items-center w-[25%] md:w-[20%] my-5 mx-3 py-2 rounded-xl border'>
        <img
          src="https://download.logo.wine/logo/Telegram_(software)/Telegram_(software)-Logo.wine.png"
          alt="Icon"
          className="w-16 h-16  "  
        />
        <span className="text-base font-medium text-center">
          Telegram
        </span>
        <span className='absolute -top-3 right-0 text-sm bg-red-500 border px-3 rounded-xl'>50+</span>
      </div>
      <div onClick={handleClick6} className='cursor-pointer relative flex flex-col items-center w-[25%] md:w-[20%] my-5 mx-3 py-2 rounded-xl border'>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s"
          alt="Icon"
          className="w-12 h-12 my-2 "  
        />
        <span className="text-base font-medium text-center">
          Linkedin
        </span>
        <span className='absolute -top-3 right-0 text-sm bg-red-500 border px-3 rounded-xl'>50+</span>
      </div>
    </div>
  );
}
