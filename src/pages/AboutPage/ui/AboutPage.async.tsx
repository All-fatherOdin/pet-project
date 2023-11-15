import {lazy} from "react"

export const AboutPageAsync = lazy(async () => {
  await new Promise((resolve) => {
    setTimeout(() => { resolve(1) }, 1000)
  })
  return await import("./AboutPage")
})
