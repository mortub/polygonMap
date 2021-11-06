import React from 'react';
import Typography from '@mui/material/Typography';
import '../App.css';

const FormTitle = ({ title }) => {
    return (
        <Typography variant="h3" className="themeColor">
            {title}
        </Typography>
    )

}

export default FormTitle;