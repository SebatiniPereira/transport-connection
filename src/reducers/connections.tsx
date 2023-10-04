import { connectionList } from "../data";

let list = connectionList;

const connectionReducer = (state = list, action) => {
  switch (action.type) {
    case 'GETCONNECTIONLIST':
      return list;
    default:
      return list;
  }
}

export default connectionReducer;