import Alert from '@mui/material/Alert';

function MUIAlert() {
    return (
        <div>
            <hr />
            MUIAlert

            <Alert severity="success" variant='filled'>Başari Mesaji.</Alert>
            <Alert severity="info" variant='outlined'>Bilgilendirme Mesaji.</Alert>
            <Alert severity="warning" variant='filled'>Hata Mesaji.</Alert>
            <Alert severity="error" variant='outlined'>Error Mesaji.</Alert>
        </div>
    )
}

export default MUIAlert