import {headerLogo} from "../assets/images"
import {hamburger} from "../assets/icons"
import { navLinks } from "../constants"
import { useState } from "react"
// const Nav = () => {

//   const [open,setOpen] = useState(false);

  
//   return (
//     <header className="padding-x py-8 absolute z-10 w-full">
//         <nav className="justify-between max-container items-center flex">
//             <a href="/">
//                 <img 
//                     src={headerLogo} 
//                     alt="Logo"
//                     width={130}
//                     height={29} 
//                 />
//             </a>

//             <ul className={`md:flex  gap-16 md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100':'top-[-490px]'}md:opacity-100 opacity-0`}>
//               {navLinks.map((item) => (
//                 <li key={item.label}>
//                   <a href={item.href}
//                      className="font-montserrat leading-normal text-lg text-slate-gray"
//                   >
//                     {item.label}
//                   </a>
//                 </li>
//               )) }
//             </ul>

            
//             <div className='hidden max-lg:block cursor-pointer'>
//               <button onClick={()=>setOpen(!open)}>
//                 {open ? <p X /> : <img src={hamburger} alt='hamburger icon' width={25} height={25} />}
//               </button>
//             </div>

//             {/* <div className="hidden max-lg:block">
//               <img 
//                 src={hamburger} 
//                 alt="Hamburger"
//                 width={25}
//                 height={25} 
//               />
//             </div> */}
//         </nav>
//     </header>
//   )
// }

// export default Nav



const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="justify-between max-container items-center flex">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>

        {/* Hamburger icon for mobile */}
        <div className="block max-lg:hidden cursor-pointer">
          <button onClick={() => setOpen(!open)}>
            {open ? <p>X</p> : <img src={hamburger} alt="hamburger icon" width={25} height={25} />}
          </button>
        </div>

        {/* Navigation links */}
        <ul
          className={`${
            open ? 'block' : 'hidden'
          } max-lg:flex gap-16 md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in md:opacity-100 opacity-0`}
        >
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;



