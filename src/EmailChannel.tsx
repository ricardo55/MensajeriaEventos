import './App.css';

import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';


function EmailChannel() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant='h5' color="text.secondary" gutterBottom>
          Correo Electrónico
        </Typography>
        <FormControl>
            <Typography>Asunto</Typography>
            <TextField id="outlined-basic" label="Escribe..." variant="outlined" />
            <Typography>Mensaje</Typography>
            <TextField
              id="outlined-multiline-static"
              label="Escribe..."
              multiline
              rows={4}
              defaultValue="Default Value"
            />
        </FormControl>
      </CardContent>
      <Button variant="outlined" size="medium">Cancelar</Button>
      <Button variant="contained">Siguiente</Button>
    </Card>
    </div>
  );
}

export default EmailChannel;
