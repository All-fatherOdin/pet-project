import React, {useState} from "react"
import {classNames} from "shared/lib/classNames/classNames"
import classes from "./Sidebar.module.scss"
import {ThemeSwitcher} from "widgets/ThemeSwitcher"
import {LocaleSwitcher} from "widgets/LocaleSwitcher"
import {useIntl} from "react-intl"

interface SidebarProps {
  className?: string
}

export function Sidebar ({className}: SidebarProps) {
  const intl = useIntl()
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
         {intl.formatMessage({id: "toggle"})}
       </button>
       <div className={"switchers"}>
         <ThemeSwitcher/>
          <LocaleSwitcher/>
       </div>
    </div>
  )
}
