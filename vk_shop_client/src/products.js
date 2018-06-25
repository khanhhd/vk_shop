// in src/staffs.js
import React from 'react';
import {
  Show, NumberInput,DateInput, NumberField, DateField, List, Edit, Create, SimpleShowLayout,DeleteButton,
  Datagrid, ReferenceField, TextField, EditButton, ShowButton, DisabledInput, LongTextInput, RichTextField,
  ReferenceInput, required, SelectInput, SimpleForm, TextInput, EmailInput, ReferenceManyField
,ChipField,SingleFieldList } from 'admin-on-rest';

export const ProductList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="name" />
            <TextField source="product_code" />
            <TextField source="provider" />
            <TextField source="category_id" />
            <TextField source="color" />
            <TextField source="made_in" />
            <TextField source="sold_out" />
            <RichTextField source="note" />
            <EditButton />
        </Datagrid>
    </List>
);



export const ProductShow = (props) => (
  <Show {...props} >
    <SimpleShowLayout>
        <TextField source="name" />
        <ReferenceManyField label="Orders" reference="orders" target="product_id">
           <Datagrid>
               <TextField source="name" />
               <TextField source="phone" />
               <TextField source="fb_url" />

           </Datagrid>
        </ReferenceManyField>
    </SimpleShowLayout>
  </Show>
);
