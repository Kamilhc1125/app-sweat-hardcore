import { navLinks } from "@/constants";

const NavLinks = ({ direction = "flex-row" }) => {
  return (
    <li className={`flex ${direction}`}>
      {navLinks.map((link, index) => {

        const { name, href } = link;

        return <a key={index} href={href} className="mx-1 uppercase text-primary hover:text-accent font-bangers text-2xl">{name}</a>

      })}
    </li>
  )
}

export default NavLinks;