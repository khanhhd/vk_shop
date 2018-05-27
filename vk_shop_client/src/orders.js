// in src/staffs.js
import React from 'react';
import {NumberInput,DateInput, NumberField, DateField, List, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, required, SelectInput, SimpleForm, TextInput, EmailInput } from 'admin-on-rest';


export const OrderList = (props) => (
    <List title="All Orders" {...props}>
        <Datagrid>
            <TextField source="name" />
            <TextField source="fb_url" />
            <DateField source="order_time" showTime/>
            <TextField source="phone" />
            <TextField source="address" />
            <TextField source="size" />
            <TextField source="product_id" />
            <NumberField source="original_price" />
            <NumberField source="shipping_fee" />
            <NumberField source="total_price" />
            <TextField source="shipping_code" />
            <TextField source="shipping_method" />
            <TextField source="order_status" />
            <TextField source="user_order_info" />
            <TextField source="note" />
            <TextField source="staff_id" />
            <EditButton />
        </Datagrid>
    </List>
);
//
//
// export const PostEdit = (props) => (
//     <Edit title="Edit staffs" {...props}>
//         <SimpleForm>
//             <DisabledInput source="id" />
//             <ReferenceInput label="Staff" source="staffId" reference="staffs" validate={required}>
//                 <SelectInput optionText="name" />
//             </ReferenceInput>
//             <TextInput source="email" label="Email" Type="email"/>
//         </SimpleForm>
//     </Edit>
// );
//
export const OrderCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
          <TextInput source="name" label="Name" validate={required} />
          <TextInput source="fb_url" validate={required} />
          <DateInput source="order_time" options={{

          }}/>
          <TextInput source="phone" validate={required} />
          <TextInput source="address" validate={required} />
          <TextInput source="size" />
          <TextInput source="product_id" />
          <NumberInput source="original_price" />
          <NumberInput source="shipping_fee" />
          <NumberInput source="total_price" />
          <TextInput source="shipping_code" />
          <TextInput source="shipping_method" />
          <TextInput source="order_status" />
          <TextInput source="user_order_info" />
          <LongTextInput source="note" />
          <TextInput source="staff_id" />
        </SimpleForm>
    </Create>
);

const OrderTitle = ({ record }) => {
    return <span>Order {record ? `"${record.name}"` : ''}</span>;
};

export const OrderEdit = (props) => (
  <Edit title={<OrderTitle />}  {...props}>
    <SimpleForm>
      <DisabledInput label="Id" source="id" />
      <TextInput source="name" label="Name" validate={required} />
      <TextInput source="fb_url" validate={required} />
      <DateInput source="order_time" options={{

      }}/>
      <TextInput source="phone" validate={required} />
      <TextInput source="address" validate={required} />
      <TextInput source="size" />
      <TextInput source="product_id" />
      <NumberInput source="original_price" />
      <NumberInput source="shipping_fee" />
      <NumberInput source="total_price" />
      <TextInput source="shipping_code" />
      <TextInput source="shipping_method" />
      <TextInput source="order_status" />
      <TextInput source="user_order_info" />
      <LongTextInput source="note" />
      <TextInput source="staff_id" />
    </SimpleForm>
  </Edit>
);
