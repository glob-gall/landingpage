import Image from "next/image"
type ListProps = {
  title:string
  items:string[]
}

export function List({items,title}: ListProps) {
  return (
    <div className="border-solid border-neutral-200 border-8 rounded-xl p-4 min-w-72 max-w-72 flex flex-col">
      <Image
        className="mr-auto"
        aria-hidden
        src="lines.svg"
        alt="lines"
        width={32}
        height={32}
      />

      <div className=" m-auto">
        <h4 className="font-bold text-2xl">
          {title}
        </h4>
        <ul className="">
          {items.map(item => (
            <li key={item}>  
              {item}
            </li>
          ))}
        </ul>
      </div>

      <Image
        className="ml-auto"
        aria-hidden
        src="lines.svg"
        alt="lines"
        width={32}
        height={32}
      />
    </div>
  )
}