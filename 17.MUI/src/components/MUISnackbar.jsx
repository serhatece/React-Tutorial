import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

function MUISnackbar() {

    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleClick = () => {
        setOpenSnackbar(true)
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnackbar(false);
    };

    const action = (
        <>
            <Button size='small' color='info' onClick={handleClose}>Kapat</Button>
            <IconButton sx={{ color: '#fff' }} onClick={handleClose}>
                <CloseIcon />
            </IconButton>
        </>
    )

    return (
        <div>
            <hr />
            MUISnackbar

            <Button onClick={handleClick}>SnackBar Aç</Button>

            <Snackbar
                open={openSnackbar}
                message="HATA OLUŞTU"
                action={action}
                autoHideDuration={3000}
                onClose={handleClose}
            />
        </div>
    )
}

export default MUISnackbar