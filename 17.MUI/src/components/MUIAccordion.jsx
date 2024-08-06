import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

function MUIAccordion() {

    const [expanded, setExpanded] = useState('' | false);

    const handleChange = (panelName) => (event, expanded) => {
        setExpanded(expanded ? panelName : false);
    }

    return (
        <div>
            <hr />
            MUIAccordion

            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>Bölüm 1</AccordionSummary>
                <AccordionDetails>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure quisquam quia veritatis veniam vitae voluptatum doloribus eligendi illo saepe vel.</AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>Bölüm 2</AccordionSummary>
                <AccordionDetails>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure quisquam quia veritatis veniam vitae voluptatum doloribus eligendi illo saepe vel.</AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>Bölüm 3</AccordionSummary>
                <AccordionDetails>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure quisquam quia veritatis veniam vitae voluptatum doloribus eligendi illo saepe vel.</AccordionDetails>
            </Accordion>
        </div>
    )
}

export default MUIAccordion