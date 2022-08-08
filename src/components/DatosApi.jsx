// https://www.themoviedb.org/ : Web de Peliculas

const productos = [
    {
      id: '1',
      name: 'Lucifer',      
      url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wQh2ytX0f8IfC3b2mKpDGOpGTXS.jpg',
      price: 75,
      stock: 3,
      description : "La serie se centrará en Lucifer (Tom Ellis) quien, aburrido e infeliz como el Señor del Infierno, dimite de su trono y abandona su reino para trasladarse a la ciudad de Los Angeles y abrir un lujoso piano-bar llamado Lux. Una vez allí ayudará a la policía a castigar a los más peligrosos criminales de la ciudad.",
      category : "Accion"
     },
     {
        id: '2',
        name: 'Peaky Blinders (2013)',
        url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yjX3ocrYTBUj3v5crEQgm03F4Zu.jpg',
        price: 31,
        stock: 5,
        description : "En Gran Bretaña, Reino Unido se recuperan de la desesperación de la Gran Guerra, las personas sobreviven a como pueden, y las bandas criminales proliferan en una nación sacudida económicamente. Es justamente aquí donde una familia de gánsteres irlandeses de origen nómada (a veces llamados gitanos o chatarreros) asentada en Birmingham (los Peaky Blinders) justo después de la Primera Guerra Mundial, dirigen un local de apuestas hípicas en la ciudad. Las acciones del ambicioso, respetado, temerario y peligroso jefe de la banda, Thomas Shelby, llaman la atención del Inspector jefe Chester Campbell, un detective de la Real Policía Irlandesa que es enviado por el mismo Winston Churchill desde Belfast donde había sido enviado a limpiar la ciudad del Ejército Republicano Irlandés (IRA), comunistas, pandillas y delincuentes comunes.",
        category : "Espionaje"
      },
      {
        id: '3',
        name: "Malnazidos",
        url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4z9fsQTypbwzaWa4kLERtJjjM83.jpg",        
        price: 26,
        stock: 1,
        description : "Durante la Guerra Civil Española, meses de sangrientos combates han dejado tras de sí miles de muertos en las trincheras. Jan Lozano, capitán de la quinta brigada, cae prisionero. La única posibilidad de escapar a la sentencia de muerte es hacer frente a una misión imposible en campo enemigo. Pero un peligro mayor del esperado obligará a los bandos rivales a unirse contra un nuevo y desconocido adversario. Tendrán que dejar de lado el odio mutuo y así evitar convertirse en infectados.",
        category : "Accion"
      },
      {
        id: '4',
        name: "UnCharted",        
        url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6hlI9Ea1O4IeJ2cj7OiNinqg8Qd.jpg",
        price: 67,
        stock: 6,        
        description : "Un descendiente del famoso corsario Sir Francis Drake descubre la ubicación de la legendaria ciudad de El Dorado. Con la ayuda de su mentor Victor Sullivan y la ambiciosa periodista Elena Fischer, Nathan Drake trabajará para descubrir sus secretos, mientras sobreviven en una isla llena de piratas, mercenarios, y un misterioso enemigo, se embarcarán en una búsqueda sin precedentes por alcanzar el tesoro antes que sus perseguidores. Adaptación del aclamado videojuego homónimo.",
        category : "Accion"
      },
      {
        id: '5',
        name: "Juego de tronos",
        url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/z9gCSwIObDOD2BEtmUwfasar3xs.jpg",
        price: 11,
        stock: 3,
        description : "En una tierra donde los veranos duran décadas y los inviernos pueden durar toda una vida, los problemas acechan. Desde las maquinaciones del sur a las salvajes tierras del este, pasando por el helado norte y el milenario muro que protege el reino de las fuerzas tenebrosas, dos poderosas familias mantienen un enfrentamiento letal por gobernar los Siete Reinos de Poniente. Mientras la traición, la lujuria y las fuerzas sobrenaturales sacuden los pilares de los reinos, la sangrienta batalla por el trono de Hierro tendrá consecuencias imprevistas y trascendentales. El invierno se acerca. Que empiece 'Juego de tronos'.",
        category : "Suspenso"
      },
      {
        id: '6',
        name: "Asesino sin Memoria",
        url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zfC8bfoMZhaCxswi41CjesysfhZ.jpg",
        price: 88,
        stock: 9,
        description : "Alex, un asesino a sueldo, descubre que se ha convertido en un objetivo después de que se niega a completar un trabajo para una peligrosa organización criminal. Con el sindicato del crimen y el FBI persiguiéndolo, Alex tiene las habilidades para mantenerse a la vanguardia, excepto por una cosa: está luchando con una pérdida de memoria severa que afecta todos sus movimientos. Alex debe cuestionar cada una de sus acciones y en quién puede confiar en última instancia.",
        category : "Policial"
      },
      {
        id: '7',
        name: "Maleficio",
        url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gE2yLl3uhdSLla9urAR7HoYL3Yo.jpg",        
        price: 74,
        stock: 3,
        description : "En 1818, la familia Bell empieza a percibir extraños fenómenos. Al principio, son simples sonidos: pequeños ruidos inexplicables, una respiración dificultosa, pasos; pero con el tiempo la potencia de estas manifestaciones paranormales aumenta. El espíritu que las produce se vuelve agresivo y empieza a descargar su ira sobre John Bell y su hija Betsy, víctima de violentos y constantes ataques. En 1998 fue hallado un manuscrito de un maestro de escuela (que había convivido con los Bell), en el que se revelaba la causa del maleficio.",
        category : "Terror"
      },
      {
        id: '8',
        name: "The Walking Dead",
        url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hUblG1KZCTRpHc3wqqoU0DW98Q3.jpg",
        price: 70,
        stock: 8,
        description : "The Walking Dead está ambientada en un futuro apocalíptico con la Tierra devastada por el efecto de un cataclismo, que ha provocado la mutación en zombies de la mayor parte de los habitantes del planeta. La serie, explora las dificultades de los protagonistas para sobrevivir en un mundo poblado por el horror, así como las relaciones personales que se establecen entre ellos, en ocasiones también una amenaza para su supervivencia.",
        category : "Terror"
      },
      {
        id: '9',
        name: "Halo",
        url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lfTm372lHNjQnnUwpdumVfUB0rh.jpg",
        price: 63,
        stock: 4,        
        description : "Thomas Lasky llega a la Academia de Ciencias Militares para empezar su entrenamiento, siguiendo los pasos de su madre y su hermano. Thomas se siente atormentado por los fantasmas de su pasado. Película de acción ambientada en el universo de la franquicia de videojuegos Halo",
        category : "Ciencia Ficcion"
      },
      {
        id: '10',
        name: "The Good Doctor",
        url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ubOaaQjDQ4lWtw1dkXhqsQWTsEY.jpg",
        price: 18,
        stock: 6, 
        description : "Shaun Murphy es un joven cirujano con autismo y síndrome del sabio de una pequeña ciudad, donde tuvo un pasado problemático. Se traslada para unirse al prestigioso departamento de cirugía en San José St. Bonaventure Hospital.",
        category : "Drama"
      },
      {
        id: '11',
        name: "La Princesa",
        url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7uEh9kpQWJgaebgPXVCPf88wsFe.jpg",
        price: 18,
        stock: 6,                
        description : "Cuando una princesa se niega a casarse con un sociópata cruel, es secuestrada y encerrada en una torre del castillo de su padre. Con su vengativo pretendiente decidido a tomar el trono de su padre, la princesa debe salvar el reino.",
        category : "Accion"
      },
      {
        id: '12',
        name: "Colision",
        url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/t2Bw6Yl4aiflTUXKW3CZ6xtjciy.jpg",
        price: 18,
        stock: 6,                
        description : "Protagonizada por Langley Kirkwood (Warrior), Vuyo Dabula y Tessa Jubber, y rodada en Johannesburgo (Sudáfrica), la película se desarrolla en el transcurso de un fatídico día: en el que un hombre de negocios corrupto y su esposa de la alta sociedad escapan para salvar a su hija -que mantiene una relación con un pequeño traficante de drogas- de un importante señor del crimen.",
        category : "Accion"
      },
      {
        id: '13',
        name: "SandMan",
        url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/b7EIwmXtQBEyrLHcUEyuJxPoARk.jpg",
        price: 18,
        stock: 6,                
        description : "El señor de los sueños ha sido invocado y capturado por unos mortales. Cuando escape de su cautiverio, descubrirá que sus problemas no han hecho más que empezar. Sandman es una serie de Netflix basada en los rompedores cómics de Neil Gaiman para DC. Con la producción ejecutiva de Neil Gaiman, Allan Heinberg y David S. Goyer.",
        category : "Terror"
      },
      {
        id: '14',
        name: "Elvis",
        url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/FTBDId0Ntc8YmJpolZe8fLJcoI.jpg",
        price: 18,
        stock: 6,                
        description : "La película explora la vida y la música de Elvis Presley (Butler) a través del prisma de su relación con el coronel Tom Parker (Hanks), su enigmático manager. La historia profundiza en la compleja dinámica que existía entre Presley y Parker que abarca más de 20 años, desde el ascenso de Presley a la fama hasta su estrellato sin precedentes, en el contexto de la revolución cultural y la pérdida de la inocencia en Estados Unidos. Y en el centro de ese periplo está Priscilla Presley (Olivia DeJonge), una de las personas más importantes e influyentes en la vida de Elvis.",
        category : "Musical"
      }
]

export const data = new Promise((resolve, reject) => {
    var condicion = true
    setTimeout(() => {
        if(condicion){
            resolve(productos)
        }else{
            reject("Algo Salio Mal no cargo la lista de productos")
        }
    } ,2000)           
})
