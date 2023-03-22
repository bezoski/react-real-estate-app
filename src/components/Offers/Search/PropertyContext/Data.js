//Houses
import House1 from "./../../../../assets/house1.png";
import House2 from "./../../../../assets/house2.png";
import House3 from "./../../../../assets/house3.png";
import House4 from "./../../../../assets/house4.png";
import House5 from "./../../../../assets/house5.png";
//Apartments
import Apartment1 from "./../../../../assets/apartment1.png";
import Apartment2 from "./../../../../assets/apartment2.png";
import Apartment3 from "./../../../../assets/apartment3.png";
import Apartment4 from "./../../../../assets/apartment4.png";
import Apartment5 from "./../../../../assets/apartment5.png";
//Offices
import Office1 from "./../../../../assets/office1.png";
import Office2 from "./../../../../assets/office2.png";
import Office3 from "./../../../../assets/office3.png";
import Office4 from "./../../../../assets/office4.png";
import Office5 from "./../../../../assets/office5.png";
//Vacant Lands
import VacantLand1 from "./../../../../assets/vacantland1.png";
import VacantLand2 from "./../../../../assets/vacantland2.png";
import VacantLand3 from "./../../../../assets/vacantland3.png";
import VacantLand4 from "./../../../../assets/vacantland4.png";
import VacantLand5 from "./../../../../assets/vacantland5.png";
//Agents
import Agent1 from "./../../../../assets/agent1.png";
import Agent2 from "./../../../../assets/agent2.png";
import Agent3 from "./../../../../assets/agent3.png";
import Agent4 from "./../../../../assets/agent4.png";
import Agent5 from "./../../../../assets/agent5.png";
import Agent6 from "./../../../../assets/agent6.png";
import Agent7 from "./../../../../assets/agent7.png";

export const propertiesData = [
  {
    id: 1,
    type: "House & Apartment",
    name: "House 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: House1,
    country: "Poland",
    address: "Szczecin, ul. Mianowskiego Józefa 139, 70-824",
    bedrooms: "2",
    bathrooms: "2",
    surface: "850 sq m",
    price: "225000",
    priceRent: "80500",
    agent: {
      image: Agent1,
      name: "Bartosz Mazurek",
    },
  },
  {
    id: 2,
    type: "House & Apartment",
    name: "Apartment 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: Apartment1,
    country: "Germany",
    address: "Hamburg Stellingen, Los-Angeles-Platz 11, 20255",
    bedrooms: "2",
    bathrooms: "2",
    surface: "80 sq m",
    price: "90000",
    priceRent: "30000",
    agent: {
      image: Agent2,
      name: "Michaela Meza",
    },
  },
  {
    id: 3,
    type: "Office",
    name: "Office 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: Office1,
    country: "Poland",
    address: "Katowice, ul. Przyjazna 27, 40-467",
    bedrooms: "0",
    bathrooms: "2",
    surface: "115 sq m",
    price: "110000",
    priceRent: "40000",
    agent: {
      image: Agent7,
      name: "Marcin Kwiatkowski",
    },
  },
  {
    id: 4,
    type: "Vacant Land",
    name: "Vacant Land 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: VacantLand1,
    country: "France",
    address: "Villeprinte, 44 place de Miremont, 93420",
    bedrooms: "0",
    bathrooms: "0",
    surface: "600 sq m",
    price: "170000",
    priceRent: "Not applicable",
    agent: {
      image: Agent6,
      name: "Isabel Huber",
    },
  },
  {
    id: 5,
    type: "House & Apartment",
    name: "House 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: House2,
    country: "France",
    address: "Marseille, 30 boulevard de la Liberation, 13012",
    bedrooms: "3",
    bathrooms: "2",
    surface: "700 sq m",
    price: "330000",
    priceRent: "120000",
    agent: {
      image: Agent3,
      name: "Asa Chambers",
    },
  },
  {
    id: 6,
    type: "House & Apartment",
    name: "Apartment 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: Apartment2,
    country: "Poland",
    address: "Warszawa, ul. Czarnieckiego Stefana 134, 01-541",
    bedrooms: "2",
    bathrooms: "1",
    surface: "100 sq m",
    price: "150000",
    priceRent: "45000",
    agent: {
      image: Agent1,
      name: "Bartosz Mazurek",
    },
  },
  {
    id: 7,
    type: "Office",
    name: "Office 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: Office2,
    country: "France",
    address: "Rennes, 44 rue Lenotre, 35000",
    bedrooms: "0",
    bathrooms: "1",
    surface: "60 sq m",
    price: "100000",
    priceRent: "30000",
    agent: {
      image: Agent5,
      name: "Evelyn Valencia",
    },
  },
  {
    id: 8,
    type: "Vacant Land",
    name: "Vacant Land 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: VacantLand2,
    country: "Germany",
    address: "Villeprinte, 44 place de Miremont, 93420",
    bedrooms: "0",
    bathrooms: "0",
    surface: "800 sq m",
    price: "250000",
    priceRent: "Not applicable",
    agent: {
      image: Agent4,
      name: "Jared Hickman",
    },
  },
  {
    id: 9,
    type: "House & Apartment",
    name: "House 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: House3,
    country: "Germany",
    address: "Merzig, Hallesches Ufer 18, 66654",
    bedrooms: "3",
    bathrooms: "2",
    surface: "850 sq m",
    price: "200000",
    priceRent: "80500",
    agent: {
      image: Agent2,
      name: "Michaela Meza",
    },
  },
  {
    id: 10,
    type: "House & Apartment",
    name: "Apartment 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: Apartment3,
    country: "France",
    address: "Nice, 46 rue des Chaligny, 06100",
    bedrooms: "4",
    bathrooms: "2",
    surface: "170 sq m",
    price: "420000",
    priceRent: "120000",
    agent: {
      image: Agent3,
      name: "Asa Chambers",
    },
  },
  {
    id: 11,
    type: "Office",
    name: "Office 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: Office3,
    country: "Germany",
    address: "München, Rhinstrasse 12, 81214",
    bedrooms: "0",
    bathrooms: "2",
    surface: "150 sq m",
    price: "300000",
    priceRent: "115000",
    agent: {
      image: Agent4,
      name: "Jared Hickman",
    },
  },
  {
    id: 12,
    type: "Vacant Land",
    name: "Vacant Land 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: VacantLand3,
    country: "Poland",
    address: "Zielona Góra, ul. Dębowa 37, 65-124",
    bedrooms: "0",
    bathrooms: "0",
    surface: "870 sq m",
    price: "270000",
    priceRent: "Not applicable",
    agent: {
      image: Agent7,
      name: "Marcin Kwiatkowski",
    },
  },
  {
    id: 13,
    type: "House & Apartment",
    name: "House 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: House4,
    country: "Norway",
    address: "LØrenskog, Trygves vei 84, 1473 ",
    bedrooms: "3",
    bathrooms: "2",
    surface: "650 sq m",
    price: "415000",
    priceRent: "180000",
    agent: {
      image: Agent2,
      name: "Michaela Meza",
    },
  },
  {
    id: 14,
    type: "House & Apartment",
    name: "Apartment 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: Apartment4,
    country: "Italy",
    address: "Torino, Via Enrico Fermi 110, 10021 ",
    bedrooms: "1",
    bathrooms: "1",
    surface: "60 sq m",
    price: "60000",
    priceRent: "30000",
    agent: {
      image: Agent3,
      name: "Asa Chambers",
    },
  },
  {
    id: 15,
    type: "Office",
    name: "Office 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: Office4,
    country: "Norway",
    address: "Oslo, Karen Platous vei 108, 0988 ",
    bedrooms: "0",
    bathrooms: "1",
    surface: "75 sq m",
    price: "55000",
    priceRent: "20000",
    agent: {
      image: Agent5,
      name: "Evelyn Valencia",
    },
  },
  {
    id: 16,
    type: "Vacant Land",
    name: "Vacant Land 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: VacantLand4,
    country: "Norway",
    address: "Stavanger, Eikebergveien 49, 4017 ",
    bedrooms: "0",
    bathrooms: "0",
    surface: "400 sq m",
    price: "130000",
    priceRent: "Not applicable",
    agent: {
      image: Agent7,
      name: "Marcin Kwiatkowski",
    },
  },
  {
    id: 17,
    type: "House & Apartment",
    name: "Apartment 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: Apartment5,
    country: "Norway",
    address: "Lillehammer, Morterudvegen 194, 2609 ",
    bedrooms: "1",
    bathrooms: "1",
    surface: "70 sq m",
    price: "80000",
    priceRent: "34000",
    agent: {
      image: Agent2,
      name: "Michaela Meza",
    },
  },
  {
    id: 18,
    type: "House & Apartment",
    name: "House 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: House5,
    country: "Italy",
    address: "San Possidonio, Via Giacinto Gigante 108, 41039 ",
    bedrooms: "4",
    bathrooms: "2",
    surface: "910 sq m",
    price: "395000",
    priceRent: "118000",
    agent: {
      image: Agent3,
      name: "Asa Chambers",
    },
  },
  {
    id: 19,
    type: "Office",
    name: "Office 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: Office5,
    country: "Italy",
    address: "Tessello, Via Partenope 140, 47020 ",
    bedrooms: "0",
    bathrooms: "1",
    surface: "55 sq m",
    price: "43000",
    priceRent: "20000",
    agent: {
      image: Agent4,
      name: "Jared Hickman",
    },
  },
  {
    id: 20,
    type: "Vacant Land",
    name: "Vacant Land 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: VacantLand5,
    country: "Italy",
    address: "Verona, Via Rocca de Baldi 140, 37137",
    bedrooms: "0",
    bathrooms: "0",
    surface: "950 sq m",
    price: "350000",
    priceRent: "Not applicable",
    agent: {
      image: Agent6,
      name: "Isabel Huber",
    },
  },
];
