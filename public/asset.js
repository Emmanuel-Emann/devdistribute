import G99 from "./GroupG99.png"
import Lady30 from "./GroupLady30.png"
import Man42 from "./GroupMan42.png"
import G15 from "./Group15.png"
import G16 from "./Group16.png"
import G17 from "./Group17.png"
import G18 from "./Group18.png"
import G19 from "./Group19.png"
import { FaLocationDot } from "react-icons/fa6"
import { RiMailDownloadLine } from "react-icons/ri";
import { MdOutlinePhoneIphone } from "react-icons/md";

export const asset = [
  {
    id: 1,
    image: G99
  },
    {
    id: 2,
    image: Lady30
  },
  {
    id: 3,
    image: Man42
  },
  {
    id: 4,
    image: Man42
  },
  // {
  //   id: 4,
  //   image: Rectangle
  // },
  // {
  //   id: 5,
  //   image: Rectangle
  // },
  // {
  //   id: 6,
  //   image: Rectangle
  // }
]

export const slickasset = [
  {
    id: 1,
    image: G15,
    name: "Indomie Carton"
  },
    {
    id: 2,
    image: G16,
    name: "Power oil 4.5 litres"
  },
  {
    id: 3,
    image: G17,
    name: "Dolmio pasta"
  },
  {
    id: 4,
    image: G18,
    name: "Mama’s choice rice"
  },
  {
    id: 5,
    image: G19,
    name: "Basmati rice"
  },
  // {
  //   id: 5,
  //   image: Rectangle
  // },
  // {
  //   id: 6,
  //   image: Rectangle
  // }
]

export const contact = [
  {
    id: 1,
    text: "P9800 Mt. Pyramid Court, Suite 360. Englewood, CO 80112",
    name: "Office address",
    icon: <FaLocationDot size={30}/>
  },
  {
    id: 2,
    text: "buylocalafrica@gmail.com  contactlocalafrica@gmail.com",
    name: "Email Address",
    icon: <RiMailDownloadLine size={30}/>
  },
  {
    id: 3,
    text: "Phone: 720.974.7878 Toll Free: 550.974.7711",
    name: "Phone number",
    icon: <MdOutlinePhoneIphone size={30}/>
  }
]