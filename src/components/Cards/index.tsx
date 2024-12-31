import { Card } from "../Card"



export function Cards() {
  return (
    <div className="text-stone-950 font-bold mt-10 flex gap-4 flex-wrap">
      <Card
        title="Habilidades"
        color="bg-green-600"
        icon="half-circle.svg"
        iconAlt="a circle cuted in half"
      >
          <p className="mb-4">
            Criação de sites & aplicativos
          </p>
          <p>
            Modelagem e desenvolimento de softwares
          </p>
      </Card>
      <Card
        title="Formação"
        color="bg-yellow-500"
        icon="star.svg"
        iconAlt="star with 8 sides"
      >
          <p className="mb-4">
            Ciência da Computação - UTFPR
          </p>
          <p>
            Certificados e cursos online variados 
          </p>
      </Card>
      <Card
        title="Hobbies"
        color="bg-red-600"
        icon="hashtag.svg"
        iconAlt="star with 8 sides"
      >
          <p className="mb-4">
            Powerlifting, Academia, Trilhas, Caminhas
          </p>
          <p>
          Pesca, ciclismo, Jogos de tabileiro, Leitura 
          </p>
      </Card>

      <Card
        title="Influências"
        color="bg-blue-600"
        icon="circles.svg"
        iconAlt="two circles"
      >
          <p className="mb-4">
            FreeCodeCamp, Fabio Akita
          </p>
          <p>
            Rocketseat, Luke Smith
          </p>
      </Card>
    </div>
  )
}