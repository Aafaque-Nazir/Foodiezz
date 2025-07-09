import  {useState} from 'react'
import  { FaBars, FaTimes } from 'react-icons/fa'
import { NavLink} from 'react-router-dom'
 

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };
  return (
    <>
      <nav className='flex items-center justify-center bg-gradient-to-b from-bg-zinc-900 to-bg-black text-white pt-4 lg:h-26 fixed top-0 left-0 w-full  backdrop-blur-sm lg:backdrop-blur-sm text-xl'>
        <div>
          <NavLink smooth to="/">
          <img src="Logo.png" alt="LOGO" width={100} className='hidden lg:flex gap-4' />
          </NavLink>
        </div>
        <div className="lg:hidden z-20 mb-4 cursor-pointer" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24}/> : <FaBars size={24}/>}
      </div>
           <ul className='hidden lg:flex gap-7'>
            {[ 'About', 'Menu','Reviews' ,'Contact '].map((text) => (
            <li key={text} className=' font-bold tracking-wider active:text-gray-400 hover:text-yellow-400 transition duration-300'>
              <NavLink  to={`/${text.toLowerCase()}`}>{text}</NavLink>
            </li>
          ))}
        </ul>

        {isOpen && (
          <div className='absolute backdrop-filter top-14 left-0 w-full py-3  backdrop-blur-sm bg-black/90 z-10'>\
          <NavLink smooth to="/" onClick={() => setIsOpen(false)}>
            <img src="Logo.png" alt="LOGO" width={100} className=' lg:hidden mx-auto' />
          </NavLink>
            <ul className='flex flex-col items-center justify-center gap-8 text-lg'>
              {[ 'About', 'Menu', 'Reviews','Contact '].map((text) => (
                <li key={text} className='
                  font-bold tracking-wider active:text-gray-400 hover:text-yellow-400 transition duration-300'>
                  <NavLink to={`/${text.toLowerCase()}`} onClick={() => setIsOpen(false)}>
                    {text} 
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}

        
      </nav>
    </>
  )
}

export default Navbar
