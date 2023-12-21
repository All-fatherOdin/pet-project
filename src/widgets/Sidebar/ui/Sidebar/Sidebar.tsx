import React, {useState} from "react"
import {classNames} from "shared/lib/classNames/classNames"
import classes from "./Sidebar.module.scss"
import {ThemeSwitcher} from "widgets/ThemeSwitcher"
import {LocaleSwitcher} from "widgets/LocaleSwitcher"

interface SidebarProps {
  className?: string
}

export function Sidebar ({className}: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const onToggle = () => {
    setIsOpen(prevState => !prevState)
  }
  return (
    <div
      data-testid="sidebar"
      className={classNames(classes.Sidebar, {[classes.collapsed]: !isOpen}, [className])}
    >
       <button
         onClick={onToggle}
         data-testid="sidebar-toggle"
       >
         toggle
       </button>
       <div className={"switchers"}>
         <ThemeSwitcher/>
          <LocaleSwitcher/>
       </div>
    </div>
  )
}
