import { Stack, Divider } from '@mui/material'

function MUIStack() {
    return (
        <div>
            <hr />
            MUIStack
            <Stack direction={"column"} spacing={2} divider={<Divider orientation='horizontal' flexItem />}>
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
            </Stack>

        </div>
    )
}

export default MUIStack