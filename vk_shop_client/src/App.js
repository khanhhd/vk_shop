import React from 'react';
import { jsonServerRestClient, Admin, Resource , Delete} from 'admin-on-rest';
// import { PostList, PostEdit, PostCreate } from './posts';
import { StaffList, StaffCreate, StaffEdit } from './staffs';
import { OrderList, OrderCreate, OrderEdit, OrderShow } from './orders';
import authClient from './authClient';
import {ProductShow} from './products';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';



const App = () => (
    <Admin  restClient={jsonServerRestClient('http://localhost:3001')} authClient={authClient}>
        <Resource name="orders" list={OrderList} create={OrderCreate}  edit={OrderEdit} show={OrderShow} remove={Delete}/>
        <Resource name="staffs" list={StaffList} create={StaffCreate}   />
        <Resource name="products" show={ProductShow} />
    </Admin>
);

export default App;
