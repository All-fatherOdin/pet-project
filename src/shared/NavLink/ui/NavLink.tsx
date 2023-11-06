import React from "react"
import {classNames} from "helpers/classNames/classNames"
import {Link, type LinkProps, useLocation} from "react-router-dom"
import classes from "./NavLink.module.scss"

interface NavLinkProps extends LinkProps {
  className?: string
}

export function NavLink ({className, children, to}: NavLinkProps) {
  const location = useLocation()
  const active = location.pathname === to

  return (
    <Link to={to} className={classNames(classes.NavLink, {[classes.active]: active}, [className])}>
      {children}
    </Link>
  )
}
