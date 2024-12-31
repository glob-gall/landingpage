import { Gallery } from "../Gallery"
import { List } from "../List"

const techs= [
 " HTML & CSS",  
  "JavaScript",
  "TypeScript",
  "React",
  "NextJS",
  "React Native", 
  "NestJS", 
  "NodeJS", 
  "Python", 
  "Solidity", 
  "C & C++", 
  "Git", 
  "Docker", 
  "Linux", 
  "Figma",
]

export function AditionalInfo() {
  return (
    <div className="mt-12 flex gap-4 items-center flex-wrap max-md:flex-col max-md:items-center">
      <List
        title="Techs"
        items={techs}
      />

      <div className="flex-1">
        <Gallery/>
      </div>
    </div>
  )
}