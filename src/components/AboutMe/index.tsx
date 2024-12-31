import Image from "next/image"


export function AboutMe() {
  return (
    <section className="flex justify-between mt-16 max-md:flex-wrap-reverse gap-6 max-md:items-center max-md:justify-center">
      <div>
        <h1 className="text-2xl font-black">
          Luis Felipe Galleguillos
        </h1>
        <p className="text-lg mt-3 flex-1">
        Estudante de Ciências da Computação na <b>UTFPR</b> e desenvolvedor <b>Full-Stack</b> Conheço e já utilizei uma grande gama de tecnologias, bibliotecas e frameworks <b>JavaScript/TypeScript</b>  no <b>Frontend</b>, <b>Mobile</b> e <b>Backend</b>. Atualmente utilizando a stack: <b>NestJS</b>, <b>NextJS</b> e <b>React Native</b>
        </p>
      </div>
      
      <div className="">
        <Image
          className="rounded-xl md:mx-auto md:min-w-64"
          aria-hidden
          src="/profile.jpg"
          alt="Profile picture"
          width={256}
          height={256}
        />
      </div>
    </section>
  )
}