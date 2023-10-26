import classes from "./Navbar.module.scss"
import {classNames} from "helpers/classNames/classNames"
import {NavLink} from "shared/NavLink/ui/NavLink"
import {ThemeSwitcher} from "widgets/ThemeSwitcher"


interface NavbarProps {
  className?: string
}

export function Navbar({className}: NavbarProps) {

  return (
    <div className={classNames(classes.navbar, {}, [className])}>
      <div>

      </div>
      <div className={classNames(classes.links)}>
        <NavLink to={"/"}>Main</NavLink>
        <NavLink to={"/about"}>About</NavLink>
      </div>
      <ThemeSwitcher/>
    </div>
  )
}