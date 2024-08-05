import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

function MUIButton() {
    return (
        <div>
            <div>
                MUIButton
            </div>
            <hr />

            <div style={{ marginBottom: '50px' }}>
                <Button variant='text'>Kaydol</Button>
                <Button variant='contained'>Kaydol</Button>
                <Button variant='outlined'>Kaydol</Button>
            </div>

            <div style={{ marginBottom: '50px' }}>
                <Button color='primary'>Giriş Yap</Button>
                <Button color='error'>Giriş Yap</Button>
                <Button color='info'>Giriş Yap</Button>
                <Button color='inherit'>Giriş Yap</Button>
                <Button color='success' variant='contained'>Giriş Yap</Button>
            </div>

            <div style={{ marginBottom: '50px' }}>
                <Button size='large' variant='outlined'>Geri Dön</Button>
                <Button size='medium' variant='outlined'>Geri Dön</Button>
                <Button size='small' variant='outlined'>Geri Dön</Button>
            </div>

            <div style={{ marginBottom: '50px' }}>
                <Button size='large' variant='outlined' startIcon={<AddIcon />}>Geri Dön</Button>
            </div>

            <div style={{ marginBottom: '50px' }}>
                <Button size='large' variant='contained' endIcon={<AddIcon />}>Geri Dön</Button>
            </div>

        </div>
    )
}

export default MUIButton