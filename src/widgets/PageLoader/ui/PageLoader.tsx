import React from "react"
import {classNames} from "shared/lib/classNames/classNames"
import classes from "widgets/PageLoader/ui/PageLoader.module.scss"
import {Spiner} from "shared/Spiner"

interface PageLoaderProps {
  className?: string
}

export function PageLoader ({className}: PageLoaderProps) {
  return (
    <div className={classNames(classes.PageLoader, {}, [className])}>
      <Spiner/>
    </div>
  )
}
