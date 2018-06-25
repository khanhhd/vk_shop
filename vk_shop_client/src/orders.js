import React from 'react';
import {
  Show, NumberInput,DateInput, NumberField, DateField, List, Edit, Create, SimpleShowLayout,DeleteButton,
  Datagrid, ReferenceField, TextField, EditButton, ShowButton, DisabledInput, LongTextInput, RichTextField,
  ReferenceInput, required, SelectInput, SimpleForm, TextInput, EmailInput, Filter } from 'admin-on-rest';
import { AutocompleteInput } from 'admin-on-rest';
import AutoComplete from 'material-ui/AutoComplete';

const OrdersFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search Phone Number" source="phone" alwaysOn />
    </Filter>
);


export const OrderList = (props) => (
    <List title="All Orders" {...props} filters={<OrdersFilter />}>
        <Datagrid>
            <TextField source="name" label="Customer Name"/>
            <TextField source="phone" />
            <DateField source="order_time" showTime/>
            <TextField source="address" />
            <ReferenceField label="Products" source="product_id" reference="products">
              <TextField source="name" />
            </ReferenceField>
            <NumberField source="total_price" />
            <TextField source="order_status" />
            <ShowButton />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

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

          <ReferenceInput label="Products" source="product_id" reference="products">
              <AutocompleteInput optionText="name" filter={AutoComplete.caseInsensitiveFilter}/>
          </ReferenceInput>

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


export const OrderShow = (props) => (
  <Show {...props} >
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="fb_url" />
      <DateField source="order_time" showTime/>
      <TextField source="phone" />
      <TextField source="address" />
      <TextField source="size" />

      <NumberField source="original_price" />
      <NumberField source="shipping_fee" />
      <TextField source="shipping_code" />
      <TextField source="shipping_method" />
      <TextField source="order_status" />
      <TextField source="user_order_info" />
      <TextField source="note" />
      <TextField source="staff_id" />
      <ReferenceField label="Product Name" source="product_id" reference="products">
          <TextField source="name" />
      </ReferenceField>
      <ReferenceField label="Product Code" source="product_id" reference="products">
          <TextField source="product_code" />
      </ReferenceField>
      <ReferenceField label="Color" source="product_id" reference="products">
          <TextField source="color" />
      </ReferenceField>

    </SimpleShowLayout>
  </Show>
)
