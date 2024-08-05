import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button } from '@mui/material';
import { useState } from 'react';


function MUICheckbox() {

    const [isConfirm, setisConfirm] = useState(false);

    const submit = () => {
        if (!isConfirm) {
            alert("Sözleşmeyi onaylamadiniz")
        } else {
            alert("Başarili")
        }
    }

    return (
        <div>
            <hr />
            MUICheckbox
            <hr />
            <FormControl component="fieldset">
                <FormLabel>Eğitim Durumu</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox />}
                        label="İlkokul"
                        labelPlacement="end"
                    />

                    <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="Lise"
                        labelPlacement="end"
                    />

                    <FormControlLabel
                        control={<Checkbox />}
                        label="Üniversite"
                        labelPlacement="end"
                    />
                </FormGroup>
            </FormControl>
            <hr />
            <hr />


            <FormControl component="fieldset">
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox checked={isConfirm} onChange={(e) => setisConfirm(e.target.checked)} />}
                        label="Kullanim Koşullarini Kabul Ediyorum."
                        labelPlacement="end"
                    />
                    <Button onClick={submit} variant='contained'>Formu Gönder</Button>

                </FormGroup>
            </FormControl>
            <hr />

        </div>
    )
}

export default MUICheckbox