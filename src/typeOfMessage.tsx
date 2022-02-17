import './App.css';

import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';


function typeOfMessage() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant='h5' color="text.secondary" gutterBottom>
          Selección de tipo de mensaje
        </Typography>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="Invitación"
            name="radio-buttons-group"
          >
            <FormControlLabel value="Invitación" control={<Radio />} label="Invitación" />
            <FormControlLabel value="Recordatorio de proceso" control={<Radio />} label="Recordatorio de proceso" />
            <FormControlLabel value="Personalizado" control={<Radio />} label="Personalizado" />
          </RadioGroup>
        </FormControl>
      </CardContent>
      <Button variant="outlined" size="medium">Cancelar</Button>
      <Button variant="contained">Siguiente</Button>
    </Card>
    </div>
  );
}

export default typeOfMessage;
