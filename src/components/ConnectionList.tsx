import React from 'react';
import { CardContainer, Content, Footer, Header, Wrapper } from './style';
import { Button, Typography } from '@mui/material';
import { Connection } from '../data';
import XUIButton from '@xero/xui/react/button';
import XUIPanel, { XUIPanelSection } from '@xero/xui/react/panel';
import XUIPageHeader from '@xero/xui/react/pageheader';

function ConnectionList(props) {

  let connections: Connection[] = props.connections;

  return (
    <Wrapper>
            <XUIPageHeader title="My Commute List" />

      <XUIPanel style={{margin:'10px'}}>
         {connections.map((connection) => (
           <XUIPanelSection style={{height:'50px'}} key={connection.title} onClick={() => props.goToConnection(connection.title)}>
             <label>{connection.title} </label>
          </XUIPanelSection>
        ))}
      </XUIPanel>

      <Footer>
         <XUIButton className="xui-margin-right-small" variant="main" onClick={props.goToAddConnection}>
          Add Connection
        </XUIButton>
      </Footer>

    </Wrapper>
  );
};

export default ConnectionList;