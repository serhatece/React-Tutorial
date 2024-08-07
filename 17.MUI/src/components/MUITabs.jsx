import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react';
import CustomTabPanel from './CustomTabPanel';

function MUITabs() {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <div>
            <hr />

            MUITabs

            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Kişisel Bilgiler" />
                        <Tab label="Eğitim Bilgisi" />
                        <Tab label="İletişim" />
                    </Tabs>
                </Box>

                <CustomTabPanel value={value} index={0}>
                    Serhat Ece
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    Siirt Üniversitesi
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    serhatece123@gmail.com
                </CustomTabPanel>
            </Box>

        </div>
    )
}

export default MUITabs