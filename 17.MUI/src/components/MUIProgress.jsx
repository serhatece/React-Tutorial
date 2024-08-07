import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';

function MUIProgress() {
    return (
        <div>
            <hr />
            MUIProgress
            <CircularProgress />
            <CircularProgress color='secondary' />
            <hr />
            <LinearProgress />
            <hr />
            <LinearProgress color='secondary' />
        </div>
    )
}

export default MUIProgress