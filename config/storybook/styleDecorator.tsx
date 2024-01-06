import "app/styles/index.scss"
import {Decorator} from "@storybook/react"
import React, {useState} from "react"
import {Theme} from "shared/config/themeConfig/themeConfig"
import {BrowserRouter} from "react-router-dom"


export const StyleDecorator: Decorator = Story => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT)
  function toggleTheme (){
    setTheme(theme === "light" ? Theme.DARK : Theme.LIGHT)
  }
  return (
    <BrowserRouter>
      <div
        className={`app ${theme}`}
        style={{
          minHeight: "50vh",
          paddingTop: "40px",
      }}
      >
        <button
          onClick={toggleTheme}
          style={{
            position: "fixed",
            right: "16px",
            top: "16px"
        }}
        >
          Switch theme
        </button>
        {Story()}
      </div>
    </BrowserRouter>
  )
}