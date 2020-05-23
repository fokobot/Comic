import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {

  //private hero:any[]=
  private hero: Hero[] =
    [
      {
        id: 0,
        tipo: "Heroe",
        nombre: "Aquaman",
        bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
        img: "assets/img/aquaman.png",
        aparicion: "1941-11-01",
        casa: "DC"
      },
      {
        id: 1,
        nombre: "Batman",
        tipo: "Heroe",
        bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
        img: "assets/img/batman.png",
        aparicion: "1939-05-01",
        casa: "DC"
      },
      {
        id: 2,
        nombre: "Daredevil",
        tipo: "Heroe",
        bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
        img: "assets/img/daredevil.png",
        aparicion: "1964-01-01",
        casa: "Marvel"
      },
      {
        id: 3,
        nombre: "Hulk",
        tipo: "Heroe",
        bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
        img: "assets/img/hulk.png",
        aparicion: "1962-05-01",
        casa: "Marvel"
      },
      {
        id: 4,
        nombre: "Linterna Verde",
        tipo: "Heroe",
        bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
        img: "assets/img/linterna-verde.png",
        aparicion: "1940-06-01",
        casa: "DC"
      },
      {
        id: 5,
        nombre: "Spider-Man",
        tipo: "Heroe",
        bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
        img: "assets/img/spiderman.png",
        aparicion: "1962-08-01",
        casa: "Marvel"
      },
      {
        id: 6,
        nombre: "Wolverine",
        tipo: "Heroe",
        bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
        img: "assets/img/wolverine.png",
        aparicion: "1974-11-01",
        casa: "Marvel"
      },
      {
        id: 7,
        nombre: "Doctor Doom",
        tipo: "Villano",
        bio: "Victor Von Doom es un matemático, científico e inventor que posee un intelecto de nivel genio. Doom ha inventado varias máquinas y robots del día del juicio final durante su carrera como supervillano, entre ellos sus Doombots. Doctor Doom puede ejercer control tecnopático sobre ciertas máquinas, especialmente sus Doombots.",
        img: "assets/img/doctor-doom.png",
        aparicion: "1962-07-01",
        casa: "Marvel"
      },
      {
        id: 8,
        nombre: "Magneto",
        tipo: "Villano",
        bio: "Max Eisenhardt, también conocido como Magneto, es un poderoso mutante y uno de los principales antagonistas de Marvel Comics. Él es el archienemigo de los X-Men, y también sirve como enemigo de los Vengadores. También ha servido a un anti-villano en muchas ocasiones.",
        img: "assets/img/magneto.png",
        aparicion: "1963-09-01",
        casa: "Marvel"
      },
      {
        id: 9,
        nombre: "Venom",
        tipo: "Villano",
        bio: "Venom es un personaje ficticio que aparece en los cómics estadounidenses publicados por Marvel Comics, comúnmente en asociación con Spider-Man. El personaje es un simbionte alienígena sensible con una forma amorfa, similar a un líquido, que sobrevive uniéndose a un huésped, generalmente humano.",
        img: "assets/img/venom.png",
        aparicion: "1984-05-01",
        casa: "Marvel"
      },
      {
        id: 10,
        nombre: "Juggernaut",
        tipo: "Villano",
        bio: "Cain Marko, más conocido como Juggernaut, es un personaje de larga data en la franquicia de X-Men y ha variado a lo largo de los años desde un villano hasta un antihéroe e incluso un héroe completo, aunque parece mejor conocido por sus inicios como matón y guerrero místico se unen al servicio del dios-demonio conocido como Cyttorak.",
        img: "assets/img/juggernaut.png",
        aparicion: "1974-11-01",
        casa: "Marvel"
      },
      {
        id: 11,
        nombre: "Deathstroke",
        tipo: "Villano",
        bio: "Slade Wilson es un mercenario y asesino a sueldo sin reparos en cruzar líneas para hacer el trabajo, sin importar dónde se dibujen esas líneas. Un agente formidable para el ejército de los EE. UU., El Coronel Slade Wilson acordó someterse a un proceso experimental que aumentó sus habilidades mentales y físicas a niveles sobrehumanos. En lugar de continuar su carrera como soldado, Slade se convirtió en el mercenario enmascarado Deathstroke. Esta decisión resultó en que su esposa lo dejara a él y a su hijo Joseph heridos permanentemente, así como a la muerte de su hijo Grant, quien trató de emular a Slade.",
        img: "assets/img/deathstroke.png",
        aparicion: "1980-12-01",
        casa: "DC"
      },
      {
        id: 12,
        nombre: "Bane",
        tipo: "Villano",
        bio: "Criado en una prisión en la isla de Santa Prisca por los crímenes de su padre, Bane dedicó su vida a perfeccionar su mente y cuerpo en un arma perfecta. Para librar su guerra interminable contra la injusticia, Batman ha desarrollado su cuerpo tan perfectamente como tiene su mente. Pero hay un hombre que lo ha roto. Un hombre que se destaca en muchos sentidos como exactamente lo contrario: una maravilla física y un genio sin igual. Pero mientras que el Caballero Oscuro nació para luchar contra el crimen, Bane estaba destinado a una vida de corrupción.",
        img: "assets/img/bane.png",
        aparicion: "1993-01-01",
        casa: "DC"
      },
      {
        id: 13,
        nombre: "Thanos",
        tipo: "Villano",
        bio: "Thanos es un miembro mutante de la raza de superhumanos conocida como los Eternos Titanian. El personaje posee habilidades comunes a los Eternos, pero se amplifica en mayor medida a través de una combinación de su herencia mutante-Eterna, amplificación biónica, misticismo y poder conferido por la entidad abstracta, la Muerte.",
        img: "assets/img/thanos.png",
        aparicion: "1973-02-01",
        casa: "Marvel"
      }
    ];

  constructor() {
    console.log("Servicio listo para usar!!");
  }

  //getHeros(){
  getHeros(): Hero[] {
    let heroArr: Hero[] = [];
    for (let hero of this.hero) {
      if (hero.tipo == "Heroe") {
        heroArr.push(hero);
      }
    }
    return heroArr;
  }

  getVillains(): Hero[] {
    let villainArr: Hero[] = [];
    for (let hero of this.hero) {
      if (hero.tipo == "Villano") {
        villainArr.push(hero);
      }
    }
    return villainArr;
  }

  getHero(id: number) {
    for (let heroe of this.hero) {
      if (heroe.id == id) {
        return heroe;
      }
    }
  }

  buscarHeroe(palabra: string): Hero[] {
    let heroArr: Hero[] = [];
    palabra = palabra.toLowerCase();
    for (let hero of this.hero) {
      let nombre = hero.nombre.toLowerCase();
      if (nombre.indexOf(palabra) >= 0) {
        heroArr.push(hero);
      }
    }
    return heroArr;
  }

}

export interface Hero {
  id: number,
  nombre: string,
  tipo: string,
  bio: string,
  img: string,
  aparicion: string,
  casa: string
}