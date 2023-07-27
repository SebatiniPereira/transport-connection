import { Button, Typography } from '@mui/material';
import { Wrapper, Header, Content, CardContainer, Footer } from './style';
import { Connection, Stop } from '../data';

const DisplayConnection = (props) => {

  let stops: Stop[] = props.stops;
  let connection: Connection = props.connection;
  
  return (
     <Wrapper>
      <Header>{connection.title}</Header>
      <Content>
         {stops.map((s) => (
           <CardContainer key={s.title}>
             <Typography variant="body1" > {s.title}</Typography>
            <Typography variant="body1" >{s.departures.join(", ")}</Typography>
          </CardContainer>
        ))}
      </Content>
      <Footer>
      <Button onClick={props.goBack} variant="contained" color='secondary'>Back</Button>
      </Footer>
    </Wrapper>
  );
};

export default DisplayConnection;