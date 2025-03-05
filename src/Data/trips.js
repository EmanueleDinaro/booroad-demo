const trips = [
  {
    id: 1,
    destination: "Norway - Cities and Fjords",
    destination_image:
      "https://cdn.audleytravel.com/2799/1999/79/15993621-norwegian-fjords.jpg",
    startDate: "2023-11-15",
    endDate: "2023-11-22",
    groupLeader: { firstName: "Marco", lastName: "Rossi" },
    description:
      "Explore Norway's stunning fjords, vibrant cities like Bergen and Oslo, and experience the magic of the Northern Lights.",
    participants: [
      {
        firstName: "Giulia",
        lastName: "Bianchi",
        codiceFiscale: "GLLBNC83M12H501X",
        email: "giulia.bianchi@example.com",
        phone: "+393331112233",
      },
      {
        firstName: "Luca",
        lastName: "Verdi",
        codiceFiscale: "LCVRDI84M13H502Y",
        email: "luca.verdi@example.com",
        phone: "+393332223344",
      },
      {
        firstName: "Sofia",
        lastName: "Russo",
        codiceFiscale: "SFARSS85M14H503Z",
        email: "sofia.russo@example.com",
        phone: "+393333334455",
      },
      {
        firstName: "Matteo",
        lastName: "Ferrari",
        codiceFiscale: "MTTFRR86M15H504W",
        email: "matteo.ferrari@example.com",
        phone: "+393334445566",
      },
      {
        firstName: "Alessia",
        lastName: "Esposito",
        codiceFiscale: "ALSSPT87M16H505V",
        email: "alessia.esposito@example.com",
        phone: "+393335556677",
      },
      {
        firstName: "Francesco",
        lastName: "Romano",
        codiceFiscale: "FRCRMN88M17H506U",
        email: "francesco.romano@example.com",
        phone: "+393336667788",
      },
    ],
  },
  {
    id: 2,
    destination: "Portugal",
    destination_image:
      "https://www.state.gov/wp-content/uploads/2023/07/shutterstock_1714807885v2.jpg",
    startDate: "2023-12-01",
    endDate: "2023-12-08",
    groupLeader: { firstName: "Anna", lastName: "Conti" },
    description:
      "Discover Portugal's rich history, vibrant cities like Lisbon and Porto, and stunning coastal landscapes.",
    participants: [
      {
        firstName: "Elena",
        lastName: "Galli",
        codiceFiscale: "ELNGLI89M18H507T",
        email: "elena.galli@example.com",
        phone: "+393337778899",
      },
      {
        firstName: "Davide",
        lastName: "Marchetti",
        codiceFiscale: "DVDMCH90M19H508S",
        email: "davide.marchetti@example.com",
        phone: "+393338889900",
      },
      {
        firstName: "Chiara",
        lastName: "Moretti",
        codiceFiscale: "CHRMRT91M20H509R",
        email: "chiara.moretti@example.com",
        phone: "+393339990011",
      },
      {
        firstName: "Gabriele",
        lastName: "Barbieri",
        codiceFiscale: "GBRBRB92M21H510Q",
        email: "gabriele.barbieri@example.com",
        phone: "+393340001122",
      },
      {
        firstName: "Martina",
        lastName: "Ferrara",
        codiceFiscale: "MRTFRR93M22H511P",
        email: "martina.ferrara@example.com",
        phone: "+393341112233",
      },
      {
        firstName: "Simone",
        lastName: "Santoro",
        codiceFiscale: "SMNSTR94M23H512O",
        email: "simone.santoro@example.com",
        phone: "+393342223344",
      },
    ],
  },
  {
    id: 3,
    destination: "Morocco",
    destination_image:
      "https://www.goafrique.it/wp-content/uploads/sites/118/2020/10/Gran-Tour-del-Marocco_646014336_L.jpg",
    startDate: "2024-01-10",
    endDate: "2024-01-17",
    groupLeader: { firstName: "Giovanni", lastName: "Rizzo" },
    description:
      "Experience the vibrant culture, bustling souks, and breathtaking landscapes of Morocco, from Marrakech to the Sahara Desert.",
    participants: [
      {
        firstName: "Valentina",
        lastName: "Mancini",
        codiceFiscale: "VLNMNC95M24H513N",
        email: "valentina.mancini@example.com",
        phone: "+393343334455",
      },
      {
        firstName: "Riccardo",
        lastName: "Longo",
        codiceFiscale: "RCCLNG96M25H514M",
        email: "riccardo.longo@example.com",
        phone: "+393344445566",
      },
      {
        firstName: "Alessandra",
        lastName: "Leone",
        codiceFiscale: "ALSLNE97M26H515L",
        email: "alessandra.leone@example.com",
        phone: "+393345556677",
      },
      {
        firstName: "Federico",
        lastName: "Martini",
        codiceFiscale: "FDRMRT98M27H516K",
        email: "federico.martini@example.com",
        phone: "+393346667788",
      },
      {
        firstName: "Elisa",
        lastName: "Coppola",
        codiceFiscale: "ELSCPP99M28H517J",
        email: "elisa.coppola@example.com",
        phone: "+393347778899",
      },
      {
        firstName: "Daniele",
        lastName: "Parisi",
        codiceFiscale: "DNLPRS00M29H518I",
        email: "daniele.parisi@example.com",
        phone: "+393348889900",
      },
    ],
  },
  {
    id: 4,
    destination: "Indonesia",
    destination_image:
      "https://journhey-resource.s3.eu-south-1.amazonaws.com/country/id/id_what_1jpg",
    startDate: "2024-02-05",
    endDate: "2024-02-19",
    groupLeader: { firstName: "Laura", lastName: "Greco" },
    description:
      "A two-week adventure exploring Indonesia's tropical paradise, from Bali's beaches to Java's ancient temples.",
    participants: [
      {
        firstName: "Roberto",
        lastName: "Marino",
        codiceFiscale: "RBRMRN01M30H519H",
        email: "roberto.marino@example.com",
        phone: "+393349990011",
      },
      {
        firstName: "Silvia",
        lastName: "Giordano",
        codiceFiscale: "SLVGRD02M31H520G",
        email: "silvia.giordano@example.com",
        phone: "+393350001122",
      },
      {
        firstName: "Paolo",
        lastName: "Serra",
        codiceFiscale: "PAOSRR03M32H521F",
        email: "paolo.serra@example.com",
        phone: "+393351112233",
      },
      {
        firstName: "Greta",
        lastName: "Pellegrini",
        codiceFiscale: "GRTPLL04M33H522E",
        email: "greta.pellegrini@example.com",
        phone: "+393352223344",
      },
      {
        firstName: "Antonio",
        lastName: "Villa",
        codiceFiscale: "ANTVLL05M34H523D",
        email: "antonio.villa@example.com",
        phone: "+393353334455",
      },
      {
        firstName: "Beatrice",
        lastName: "Riva",
        codiceFiscale: "BTRRVA06M35H524C",
        email: "beatrice.riva@example.com",
        phone: "+393354445566",
      },
    ],
  },
  {
    id: 5,
    destination: "Thailand",
    destination_image:
      "https://images.lonelyplanetitalia.it/static/places/bangkok-355.jpg?q=90&p=96%7C96%7Ccrop&s=1c4471b8f7a0e1b6a2d0e317391e6653",
    startDate: "2024-03-15",
    endDate: "2024-03-26",
    groupLeader: { firstName: "Sara", lastName: "De Luca" },
    description:
      "A 12-day journey through Thailand's vibrant cities, lush jungles, and pristine beaches.",
    participants: [
      {
        firstName: "Michele",
        lastName: "Cattaneo",
        codiceFiscale: "MHLCNT07M36H525B",
        email: "michele.cattaneo@example.com",
        phone: "+393355556677",
      },
      {
        firstName: "Eva",
        lastName: "Ferri",
        codiceFiscale: "EVAFRR08M37H526A",
        email: "eva.ferri@example.com",
        phone: "+393356667788",
      },
      {
        firstName: "Giorgio",
        lastName: "Mariani",
        codiceFiscale: "GRGMNR09M38H527Z",
        email: "giorgio.mariani@example.com",
        phone: "+393357778899",
      },
      {
        firstName: "Claudia",
        lastName: "Testa",
        codiceFiscale: "CLDTST10M39H528Y",
        email: "claudia.testa@example.com",
        phone: "+393358889900",
      },
      {
        firstName: "Fabio",
        lastName: "Gentile",
        codiceFiscale: "FBEGNT11M40H529X",
        email: "fabio.gentile@example.com",
        phone: "+393359990011",
      },
      {
        firstName: "Monica",
        lastName: "Palumbo",
        codiceFiscale: "MNCPLM12M41H530W",
        email: "monica.palumbo@example.com",
        phone: "+393360001122",
      },
    ],
  },
  {
    id: 6,
    destination: "Chile",
    destination_image:
      "https://elitevoyage.com/wp-content/uploads/2022/11/chile-7-scaled.jpg",
    startDate: "2024-04-10",
    endDate: "2024-04-21",
    groupLeader: { firstName: "Lorenzo", lastName: "Vitale" },
    description:
      "A 12-day adventure through Chile's diverse landscapes, from the Atacama Desert to Patagonia's glaciers.",
    participants: [
      {
        firstName: "Stefano",
        lastName: "Lombardi",
        codiceFiscale: "STFLMB13M42H531V",
        email: "stefano.lombardi@example.com",
        phone: "+393361112233",
      },
      {
        firstName: "Arianna",
        lastName: "Fontana",
        codiceFiscale: "ARNFTN14M43H532U",
        email: "arianna.fontana@example.com",
        phone: "+393362223344",
      },
      {
        firstName: "Enrico",
        lastName: "Sanna",
        codiceFiscale: "ENCSNN15M44H533T",
        email: "enrico.sanna@example.com",
        phone: "+393363334455",
      },
      {
        firstName: "Veronica",
        lastName: "Ruggiero",
        codiceFiscale: "VRNRGG16M45H534S",
        email: "veronica.ruggiero@example.com",
        phone: "+393364445566",
      },
      {
        firstName: "Massimo",
        lastName: "Sorrentino",
        codiceFiscale: "MSSSRT17M46H535R",
        email: "massimo.sorrentino@example.com",
        phone: "+393365556677",
      },
      {
        firstName: "Camilla",
        lastName: "D'Angelo",
        codiceFiscale: "CMLDNG18M47H536Q",
        email: "camilla.dangelo@example.com",
        phone: "+393366667788",
      },
    ],
  },
];

export default trips;
