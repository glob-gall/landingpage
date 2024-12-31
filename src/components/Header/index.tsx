
type HeaderLinkProps = {
  text: string
  link: string
}
function HeaderLink({link,text}:HeaderLinkProps) {
  return (
    <a
      className="font-bold flex items-center gap-2 hover:text-neutral-400 duration-200"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
     {text}
    </a>
  )
}

export function Header() {
  return (
    <header className="mt-3">
      <nav className="flex justify-between flex-wrap gap-4">
        <HeaderLink
          link="https://github.com/glob-gall"
          text="GITHUB"
        />
        <HeaderLink
          link="https://www.linkedin.com/in/luis-felipe-galleguillos-3947b113a/"
          text="LINKEDIN"
        />
        <HeaderLink
          link="https://wa.me/5549991075283"
          text="(49) 99107-5283"
        />
        <HeaderLink
          link="mailto: luisfelipecampos@alunos.utfpr.edu.br"
          text=" luisfelipecampos@alunos.utfpr.edu.br"
        />
      </nav>
    </header>
  )
}