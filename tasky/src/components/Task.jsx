import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import { Check } from '@mui/icons-material';



const Task = (props) => {

    const priorityColors = { // DIFFERENT PRIORITY COLOURS
    low: "#28a745", 
    medium: "#fd7e14", 
    high: "#dc3545"    
  };

    const priorityKey = props.priority ? props.priority.toLowerCase() : "low"; // gets the priority of that card, if not just set to low
    const backgroundColor = priorityColors[priorityKey] || "#28a745"; //gets the color of above priority if not, just green

    return (
        <Grid
        key={props.id}
        size={{ xs: 12,sm:6, md: 4 }}
        >
        <Card
            sx={{
            backgroundColor: props.done ? 'lightgrey' : 'lightblue',
            padding: '20px'
            }}
        >
            <CardHeader
            title={props.title}
            sx={{
                backgroundColor: backgroundColor,
                borderRadius: '3px',
                padding: '20px',
                textAlign: 'center',
                boxShadow: 4
            }}
            />
            <CardContent>
            <Box
                sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'baseline',
                mb: 2,
                padding: '20px'
                }}
            >
                <Typography
                component="p"
                variant="subtitle2"
                color="text.primary"
                >
                Due: {props.deadline}
                </Typography>
            </Box>

            <Typography
                component="p"
                variant="subtitle1"
                align="center"
                sx={{ fontStyle: 'italic' }}
            >
                {props.description}
            </Typography>
            </CardContent>

            <CardActions
            sx={{
                justifyContent: 'space-between',
                padding: '20px'
            }}
            >
            <Button
                variant="contained"
                size="small"
                color="success"
                onClick={props.markDone}
            >
                Done
                <CheckIcon/>
            </Button>

            <Button
                variant="contained"
                size="small"
                color="error"
                onClick={props.deleteTask}
            >
                Delete
                <DeleteIcon />
            </Button>
            </CardActions>
            
        </Card>
        </Grid>


    )
    
}

export default Task;