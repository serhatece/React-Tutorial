import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Mercedes_image from '../images/merco.jpg'

function MUICard() {
    return (
        <div>
            <hr />
            MUICard
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="Mercedes-AMG G63"
                    height="200"
                    image={Mercedes_image}
                />

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Mercedes-AMG G63
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos voluptate assumenda, quod porro debitis laboriosam rerum animi. Libero, facilis cupiditate!
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button size="small">Satin Al</Button>
                    <Button size="small">İletişime Geç</Button>
                </CardActions>

            </Card>
        </div>
    )
}

export default MUICard