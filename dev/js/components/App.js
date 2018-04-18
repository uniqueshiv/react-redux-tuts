import React from 'react';
require('../../scss/style.scss');
import UserList from '../containers/user-list';
import UserDetail from '../containers/user-detail';
const App=()=>(
  <div>
    <h2>User List:</h2>
    <UserList />
    <hr />
    <h2>User Details</h2>
    <UserDetail />
  </div>
);


export default App;
