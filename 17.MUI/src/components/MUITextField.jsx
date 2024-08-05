import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



function MUITextField() {
    return (

        <div style={{ marginBottom: '50px' }}>
            <div>
                MUITextField
            </div>
            <hr />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" color='error' />
            <TextField id="filled-basic" label="Filled" variant="filled" color='info' />
            <TextField id="standard-basic" label="Standard" variant="standard" color='success' />
            <hr />

            <div>
                <TextField InputProps={{
                    startAdornment: <InputAdornment position='start'><AccountCircleIcon /></InputAdornment>
                }} variant="outlined" />

                <TextField InputProps={{
                    endAdornment: <InputAdornment position='end'><AccountCircleIcon /></InputAdornment>
                }} variant="outlined" />
            </div>

        </div>
    )
}

export default MUITextField