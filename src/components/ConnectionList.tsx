import { Footer, Wrapper } from './style';
import XUIButton from '@xero/xui/react/button';
import XUIPanel, { XUIPanelSection } from '@xero/xui/react/panel';
import XUIPageHeader from '@xero/xui/react/pageheader';
import { useSelector } from 'react-redux';
import { allReducers } from '../reducers';

function ConnectionList(props) {
 let connections = useSelector((state:allReducers) => {
    return state.connection;
 });
  
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