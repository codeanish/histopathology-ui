import { Button, withStyles } from "@mui/material";

const StyledFileSelectorButton = withStyles({
    root: {
        background: "",
        '&:hover': {
            background: ""
        },
        borderRadius: '4px 0px 0px 4px',
        border: 0,
        color: "",
        height: 40,
        padding: '12px 20px',
        boxShadow: '3px 3px 6px -3px rgba(0,0,0,0.6)'
    },
    label: {
        textTransform: 'capitalize'
    }
});

export default StyledFileSelectorButton;