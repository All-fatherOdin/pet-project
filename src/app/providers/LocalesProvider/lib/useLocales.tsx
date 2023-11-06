import React, {useContext} from "react"
import {LocalesContext, LocalesContextProps} from "app/providers/LocalesProvider/lib/LocalesContext"

export function useLocales():LocalesContextProps {
  return useContext(LocalesContext)
}