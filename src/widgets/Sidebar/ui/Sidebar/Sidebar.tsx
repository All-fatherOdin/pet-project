import React, {useState} from "react"
import {classNames} from "shared/lib/classNames/classNames"
import classes from "./Sidebar.module.scss"
import {ThemeSwitcher} from "widgets/ThemeSwitcher"
import {LocaleSwitcher} from "widgets/LocaleSwitcher"
import {useIntl} from "react-intl"
import {Button} from "shared/ui/Button"
import {Color} from "shared/config/themeConfig/themeConfig"
import {VariantButton} from "shared/ui/Button/types/ButtonTypes"

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
       <Button
         onClick={onToggle}
         variant={VariantButton.CONTAINED}
         color={Color.SECONDARY}
         data-testid="sidebar-toggle"
       >
         {intl.formatMessage({id: "toggle"})}
       </Button>
       <div className={"switchers"}>
         <ThemeSwitcher/>
         <LocaleSwitcher/>
       </div>
    </div>
  )
}
