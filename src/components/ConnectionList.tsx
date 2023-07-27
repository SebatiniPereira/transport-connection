import React from 'react';
import { CardContainer, Content, Footer, Header, Wrapper } from './style';
import { Button, Typography } from '@mui/material';
import { Connection } from '../data';

function ConnectionList(props) {

  let connections: Connection[] = props.connections;

  return (
    <Wrapper>
      <Header>
        <Typography variant="h4" component="h5"> My Commute List </Typography>
      </Header>

      <Content>
         {connections.map((connection) => (
           <CardContainer key={connection.title} onClick={() => props.goToConnection(connection.title)}>
             <label>{connection.title}</label>
          </CardContainer>
        ))}
      </Content>

      <Footer>
        <Button onClick={props.goToAddConnection} variant="contained" color='secondary'>Add Connection</Button>
      </Footer>

    </Wrapper>
  );
};

export default ConnectionList;