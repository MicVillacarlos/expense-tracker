/* eslint-disable react/prop-types */
import { Table, Button } from "@chakra-ui/react";

const ExpenseTable = ({ items, onEditExpense }) => {
  const { Header, Body, Row, ColumnHeader, Cell, Root } = Table;

  return (
    <Root size="sm">
      <Header>
        <Row>
          <ColumnHeader>First Name</ColumnHeader>
          <ColumnHeader>Last Name</ColumnHeader>
          <ColumnHeader>Expense</ColumnHeader>
          <ColumnHeader>Description</ColumnHeader>
          <ColumnHeader textAlign="end">Price</ColumnHeader>
          <ColumnHeader textAlign="start">Date</ColumnHeader>
          <ColumnHeader textAlign="center">Action</ColumnHeader>
        </Row>
      </Header>
      <Body>
        {items.map((item) => (
          <Row key={item.id}>
            <Cell>{item.firstName}</Cell>
            <Cell>{item.lastName}</Cell>
            <Cell>{item.expense}</Cell>
            <Cell>{item.description}</Cell> 
            <Cell textAlign="end">{item.price}</Cell>
            <Cell textAlign="start">{item.date}</Cell> 
            <Cell textAlign="center">
              <Button colorScheme="blue" size="sm" mr={2} onClick={()=>onEditExpense(item.id)}>Edit</Button>
              <Button colorScheme="red" size="sm">Delete</Button>
            </Cell>
          </Row>
        ))}
      </Body>
    </Root>
  );
};

export default ExpenseTable;
