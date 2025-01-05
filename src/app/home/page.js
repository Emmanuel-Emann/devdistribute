import Image from 'next/image'
import React from 'react'
import Welcome from '@/components/welcome/Welcome'
import { FaMobileScreenButton } from "react-icons/fa6";
import { FiBox } from "react-icons/fi";
import { FaTruckArrowRight } from "react-icons/fa6";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import Link from 'next/link';
import Unique from '@/components/unique/Unique';
import Business from '@/components/business/Business';
import Pproduct from '@/components/pproduct/Pproduct';
import GetApp from '@/components/getapp/GetApp';
import EmblaCarousel from '@/components/carousel/EmblaCarousel';
import Advert from '@/components/ads/Advert';
import Current from '@/components/current/Current';

import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Frequent from '@/components/frequent/Frequent';

const HomePage = () => {

  return (
    <div>
      <Welcome/>
      <Unique/>
      <Business/>
      <Pproduct/>
      <GetApp/>
      <Frequent/>
      <Current/>
      <EmblaCarousel/>
      <Advert/>
    </div>
  )
}

export default HomePage