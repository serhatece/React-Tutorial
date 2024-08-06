import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Menu, MenuItem, Stack } from '@mui/material';
import { useState } from 'react';

function MUIAppbar() {

    const [anchorEl, setAnchorEl] = useState(null);

    const openMenu = (e) => {
        setAnchorEl(e.currentTarget);
    }

    const openControl = anchorEl ? true : false;


    return (
        <div>
            <hr />
            MUIAppbar
            <hr />

            <AppBar position='static'>
                <Toolbar>
                    <IconButton>
                        <MenuIcon sx={{ color: '#fff' }} />
                    </IconButton>
                    <Typography variant='h6'>
                        MUI
                    </Typography>

                    <Stack direction='row' sx={{ marginLeft: 'auto' }}>
                        <Button sx={{ color: '#fff' }}>Ana Sayfa</Button>
                        <Button sx={{ color: '#fff' }}>Hakkimizda</Button>
                        <Button sx={{ color: '#fff' }} onClick={openMenu}>Ürünler</Button>
                        <Button sx={{ color: '#fff' }}>İletişim</Button>
                    </Stack>

                    <Menu anchorEl={anchorEl} open={openControl}>
                        <MenuItem>Lastik</MenuItem>
                        <MenuItem>Bijon</MenuItem>
                        <MenuItem>Body Kit</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default MUIAppbar