import * as React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography} from '@mui/material';

export default function CardAccordion(props) {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          style={{color: c, backgroundColor: bgd, border: 0}}
        >
          <Typography 
            style={{ 
              position: 'absolute',
              left: '50%', 
              top: '50%',
              transform: 'translate(-50%, -50%)'}}
          >לצפיה בתקציר</Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor: bgd}}>
          <Typography style={{color: c, textAlign: "right"}}>
            {props.description}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
const c = "#9e9e9e";
const bgd = "#212121";
