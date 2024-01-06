import classes from "./Navbar.module.scss"
import {classNames} from "shared/lib/classNames/classNames"
import {NavLink} from "shared/ui/NavLink/ui/NavLink"
import {FormattedMessage} from "react-intl"

interface NavbarProps {
  className?: string
}

export function Navbar ({className}: NavbarProps) {
  return (
    <div className={classNames(classes.navbar, {}, [className])}>
      <div>

      </div>
      <div className={classNames(classes.links)}>
        <NavLink to={"/"}>
          <FormattedMessage id={"Main"}/>
        </NavLink>
        <NavLink to={"/about"}>
          <FormattedMessage id={"About"}/>
        </NavLink>
      </div>
    </div>
  )
}
