// in src/staffs.js
import React from 'react';
import {EmailField, List, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, required, SelectInput, SimpleForm, TextInput, EmailInput } from 'admin-on-rest';


export const StaffList = (props) => (
    <List title="All Staffs" {...props}>
        <Datagrid>
            <TextField source="id" />
            <EmailField source="email" />
        </Datagrid>
    </List>
);


export const PostEdit = (props) => (
    <Edit title="Edit staffs" {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <ReferenceInput label="Staff" source="staffId" reference="staffs" validate={required}>
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="email" label="Email" Type="email"/>
        </SimpleForm>
    </Edit>
);

export const StaffCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="email"  />
        </SimpleForm>
    </Create>
);
