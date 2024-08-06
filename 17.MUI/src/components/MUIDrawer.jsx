import { useState } from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

function MUIDrawer() {

    const [isOpen, setIsOpen] = useState(false);



    return (
        <div>
            <hr />
            MUIDrawer
            <hr />

            <Button variant='contained' onClick={() => setIsOpen(true)}>Aç</Button>
            <Drawer open={isOpen} onClose={() => setIsOpen(false)} anchor='right'>
                <Box sx={{ width: '300px', textAlign: 'center' }}>
                    <h1>Başlik</h1>
                    <p>Lorem ipsum dolor sit amet.</p>
                </Box>
            </Drawer>
        </div>
    )
}

export default MUIDrawer