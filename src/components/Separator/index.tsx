import Image from "next/image";


export function Separator() {
  return (
    <div className="my-12 flex justify-center items-center">
      <div>

      <Image
        className="mr-auto"
        aria-hidden
        src="star-4sides.svg"
        alt="4 sides star"
        width={256}
        height={256}
      />
      </div>
    </div>
  )
}