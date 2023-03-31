// @mui
import { useState } from 'react';
import PropTypes from 'prop-types';
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils
import { Button } from 'react-bootstrap';
import { fShortenNumber } from '../../../utils/formatNumber';
// components
import Iconify from '../../../components/iconify';
import './style.css'

// ----------------------------------------------------------------------

const StyledIcon = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
}));

// ----------------------------------------------------------------------

AppWidgetSummary.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  // total: PropTypes.number.isRequired,
  sx: PropTypes.object,
};

export default function AppWidgetSummary({ title, total, icon, color = 'primary',sx, ...other })
 {
  const [change, setchange] = useState("ON")
  // const [bgcolora] = useState(sx.theme.palette[color].lighter)
  return (
    <>
    <Button variant="outline-primary" className='button_light' onClick={()=>{if(change==="ON") {setchange("OFF")} else setchange("ON")}}
    >    
    {/* <Button variant="outline-primary" className='button_light'
    > */}
    <Card
      sx={{
        py: 5,
        boxShadow: 0,
        textAlign: 'center',
        color: (theme) => theme.palette[color].darker,
        bgcolor:(theme) => theme.palette[color].lighter,
        ...sx,
      }}
      {...other}
    >

      <StyledIcon
        sx={{
          color: (theme) => theme.palette[color].dark,
          backgroundImage: (theme) =>
            `linear-gradient(135deg, ${alpha(theme.palette[color].dark, 0)} 0%, ${alpha(
              theme.palette[color].dark,
              0.24
            )} 100%)`,
        }}
      >
        <Iconify icon={icon} width={24} height={24} />
      </StyledIcon>

      {/* <Typography variant="h3">{fShortenNumber(total)}</Typography> */}
      <Typography variant="h3">{change}</Typography>

      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        {title}
      </Typography>

    </Card>
    </Button>
    </>
  );
}

