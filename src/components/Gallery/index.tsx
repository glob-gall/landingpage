import Image from "next/image";


export function Gallery() {
  return (
  <div className="flex md:-m-2">
    
    <div>
      <div className=" p-1 md:p-2 gap-2">
        <Image
          alt="gallery"
          className="block  h-full w-full rounded-lg object-cover object-center"
          src="/imgs/gato.jpg" 
          width={249}  
          height={249}  
        />
      </div>
      <div className=" p-1 md:p-2 gap-2">
        <Image
          alt="gallery"
          className="block  h-full w-full rounded-lg object-cover object-center"
          src="/imgs/estatua.jpg" 
          width={249}  
          height={332}  
        />
      </div>
    </div>



    <div className=" p-1 md:p-2 gap-2">
      <Image
        alt="gallery"
        className="block  h-full w-full rounded-lg object-cover object-center"
        src="/imgs/chuva.jpg" 
        width={395}  
        height={589}  
      />
    </div>



    <div>
      <div className=" p-1 md:p-2 gap-2">
        <Image
          alt="gallery"
          className="block  h-full w-full rounded-lg object-cover object-center"
          src="/imgs/sol.jpg" 
          width={327}  
          height={303}  
        />
      </div>
      <div className=" p-1 md:p-2 gap-2">
        <Image
          alt="gallery"
          className="block  h-full w-full rounded-lg object-cover object-center"
          src="/imgs/mar.jpg" 
          width={327}  
          height={279}  
        />
      </div>
    </div>

  </div>

  )
}