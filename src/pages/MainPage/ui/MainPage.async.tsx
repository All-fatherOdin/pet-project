import {lazy} from "react"

export const MainPageAsync = lazy(async () => {
  await new Promise((resolve) => {
    setTimeout(() => { resolve(1) }, 1000)
  })
  return await import("./MainPage")
})
