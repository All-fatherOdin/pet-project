import React, {useState} from "react"
import {classNames} from "helpers/classNames/classNames"
import classes from "./Sidebar.module.scss"
import {ThemeSwitcher} from "widgets/ThemeSwitcher"
import {LocaleSwitcher} from "widgets/LocaleSwitcher"


interface SidebarProps {
  className?: string
}


export function Sidebar({className}: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const onToggle = () => {
    setIsOpen(prevState => !prevState)
  }
  return (
    <div className={classNames(classes.Sidebar, {[classes.close]: !isOpen}, [className])}>
      <button onClick={onToggle}>toggle</button>
      <div className={"switchers"}>
        <ThemeSwitcher/>
        <LocaleSwitcher/>
      </div>
    </div>
  )
}