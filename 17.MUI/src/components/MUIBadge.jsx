import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';


function MUIBadge() {
    return (
        <div>
            <hr />
            MUIBadge
            <hr />

            <Badge badgeContent={4} color="primary">
                <MailIcon color="action" />
            </Badge>

        </div>
    )
}

export default MUIBadge