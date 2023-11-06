import {useContext} from "react"
import {LocalesContext, type LocalesContextProps} from "app/providers/LocalesProvider/lib/LocalesContext"

export function useLocales (): LocalesContextProps {
  return useContext(LocalesContext)
}
