import Image from "next/image"
import { ReactNode } from "react"

type CardProps = {
  color: string
  title:string
  icon: string
  iconAlt:string
  children:ReactNode
}

export function Card({color,children,title,icon,iconAlt}: CardProps) {
  return (
    <div className={`${color} p-4 rounded-xl flex-1`}>
      
      <Image
        className="rounded-xl h-16"
        aria-hidden
        src={icon}
        alt={iconAlt}
        width={64}
        height={64}
      />
      <h4 className="text-3xl mt-2">
        {title}
      </h4>
      <div className="mt-6">
        {children}
      </div>
    </div>
  )
}