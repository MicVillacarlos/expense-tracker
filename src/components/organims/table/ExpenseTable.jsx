/* eslint-disable react/prop-types */
import { Table } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

const ExpenseTable = (props) => {
  const { items } = props;
  const { Header, Body, Row, ColumnHeader, Cell, Root } = Table;
  return (
    <Root size="sm">
      <Header>
        <Row>
          <ColumnHeader>Product</ColumnHeader>
          <ColumnHeader>Category</ColumnHeader>
          <ColumnHeader textAlign="end">Price</ColumnHeader>
          <ColumnHeader textAlign="center">Action</ColumnHeader>
        </Row>
      </Header>
      <Body>
        {items.map((item) => (
          <Row key={item.id}>
            <Cell>{item.name}</Cell>
            <Cell>{item.category}</Cell>
            <Cell textAlign="end">{item.price}</Cell>
            <Cell textAlign='center'> <Button>Edit</Button> <Button>Delete</Button></Cell>
          </Row>
        ))}
      </Body>
    </Root>
  );
};

export default ExpenseTable;
