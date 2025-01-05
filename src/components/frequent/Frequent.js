import React from 'react'

import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

const Frequent = () => {
  return (
    <div>
      <div className='question-contain'>
        <h1>Frequently Asked Questions.</h1>
        <div className='flex flex-col items-center gap-5 w-[70%]'>
          <Accordion className='accord-backg'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">How can I be sure of the quality of the produce?</Typography>
            </AccordionSummary>
            <AccordionDetails className='accord-text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
          </Accordion>
          <Accordion className='accord-backg'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography component="span">How can I trust an online platform for such an essential purchase?</Typography>
            </AccordionSummary>
            <AccordionDetails className='accord-text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
          </Accordion>
          <Accordion className='accord-backg'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography component="span">What if I can’t personally pick the produce myself?</Typography>
            </AccordionSummary>
            <AccordionDetails className='accord-text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded className='accord-backg'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography component="span">What if the item i want is out of stuck?</Typography>
            </AccordionSummary>
            <AccordionDetails className='accord-text'>
              We understand how important it is to get the produce you need. That’s why we work hard to keep our inventory updated in real time. If an item is out of stock, you can sign up for notifications to be instantly alerted when it’s available again
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export default Frequent