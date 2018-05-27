import React from 'react';
import { jsonServerRestClient, Admin, Resource , Delete} from 'admin-on-rest';
// import { PostList, PostEdit, PostCreate } from './posts';
import { StaffList, StaffCreate, StaffEdit } from './staffs';
import { OrderList, OrderCreate, OrderEdit } from './orders';
import authClient from './authClient';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';



const App = () => (
    <Admin theme={getMuiTheme(darkBaseTheme)}  restClient={jsonServerRestClient('http://localhost:3001')} authClient={authClient}>
        <Resource name="orders" list={OrderList} create={OrderCreate}  edit={OrderEdit}/>
        <Resource name="staffs" list={StaffList} create={StaffCreate}   />
    </Admin>
);

export default App;
