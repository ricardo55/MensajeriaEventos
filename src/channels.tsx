import './App.css';

import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';


function Channels() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant='h5' color="text.secondary" gutterBottom>
          Selección de canales
        </Typography>
        <FormControl>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Correo electrónico" />
            <FormControlLabel control={<Checkbox  />} label="Mensaje de texto" />
            <FormControlLabel control={<Checkbox  />} label="Whatsapp" />
        </FormControl>
      </CardContent>
      <Button variant="outlined" size="medium">Cancelar</Button>
      <Button variant="contained">Siguiente</Button>
    </Card>
    </div>
  );
}

export default Channels;
