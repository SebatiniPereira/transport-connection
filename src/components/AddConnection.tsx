import React, { useState } from 'react';
import { Wrapper, Header, Content, CardContainer, Footer } from './style';
import { Button, MenuItem, Select, TextField, Typography } from '@mui/material';
import { stopList } from '../data';

const AddConnection = ({ onAddConnection, goBack }) => {
  
  const [title, setTitle] = useState("");
  const [stops, setStops] = useState([]);
  const [stopsList, setStopsList] = useState(stopList);

   const handleSelect = event =>{
    setStops([...stops,event.target.value])
   }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newConnection = {
      title,
      stops
    };
    onAddConnection(newConnection);
  };

  return (
    <Wrapper>
      <Header><Typography variant="h4" component="h5"> Add New connection </Typography></Header>
        <Content>
        
          <TextField
            id="outlined-basic"
            label="Add Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            variant="outlined" />
          <br />
          
          <Select onChange={handleSelect}>
            {
              stopsList.map((stop,i) => {
                return (
                  <MenuItem key={stop.id} value={stop.id}>{stop.title}</MenuItem>
                )
              })
            }
          </Select>
          <br />
          
          <Select onChange={handleSelect}>
            {
              stopsList.map((stop,i) => {
                return (
                  <MenuItem key={stop.id} value={stop.id}>{stop.title}</MenuItem>
                )
              })
            }
          </Select>
           <br/>

          <Select onChange={handleSelect}>
            {
              stopsList.map((stop,i) => {
                return (
                  <MenuItem key={stop.id} value={stop.id}>{stop.title}</MenuItem>
                )
              })
            }
          </Select>
          <br/>
        </Content>

        <Footer>
        <Button onClick={goBack} variant="contained" color='secondary'>Back</Button>
        <Button onClick={handleSubmit} variant="contained" color='secondary'>Save</Button>
        </Footer>

    </Wrapper>
  );
};

export default AddConnection;