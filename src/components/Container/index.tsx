import { ReactNode } from "react"

type ContainerProps = {
  children: ReactNode
}

export function Container({children}: ContainerProps) {
  return (
    <div className="">
      <div className="max-w-screen-lg mx-auto px-4">
        {children}
      </div>
    </div>
  )
}