import { navLinks } from "../constants"

const Navlink = () => {
  return (
    <ul className="flex flex-1 gap-16 items-center justify-center max-lg:hidden">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href}
                     className="font-montserrat leading-normal text-lg text-slate-gray"
                  >
                    {item.label}
                  </a>
                </li>
              )) }
    </ul>
  )
}

export default Navlink