import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

function MUIDialog() {

    const [dialogOpen, setdialogOpen] = useState(false);

    const type = {
        YES: 'YES',
        NO: 'NO'
    }

    const result = (typeParam) => {
        console.log("Kullanici sonucu : ", typeParam)
        if (typeParam == type.YES) {
            console.log("Yes")
        }
        setdialogOpen(false);
    }

    return (
        <div>
            <hr />
            MUIDialog

            <Button onClick={() => setdialogOpen(true)}>Dialog</Button>
            <Dialog open={dialogOpen} onClose={() => setdialogOpen(false)}>
                <DialogTitle>Soru</DialogTitle>
                <DialogContent>
                    <DialogContentText>Lorem ipsum dolor sit amet.</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => result(type.YES)}>Evet</Button>
                    <Button onClick={() => result(type.NO)}>Hayir</Button>
                </DialogActions>
            </Dialog>

        </div>
    )
}

export default MUIDialog