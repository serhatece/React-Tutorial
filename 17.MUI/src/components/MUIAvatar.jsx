import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function MUIAvatar() {
    return (
        <div>
            <hr />
            MUIAvatar
            <hr />
            <Stack direction="row" spacing={2}>
                <Avatar alt="Remy Sharp" src="https://randomuser.me/api/portraits/men/17.jpg"
                    sx={{ width: '60px', height: '60px' }} />
                <Avatar alt="Travis Howard" src="https://randomuser.me/api/portraits/men/51.jpg"
                    sx={{ width: '60px', height: '60px' }} />
                <Avatar alt="Cindy Baker" src="https://randomuser.me/api/portraits/men/20.jpg"
                    sx={{ width: '60px', height: '60px' }} />
            </Stack>
        </div>
    )
}

export default MUIAvatar