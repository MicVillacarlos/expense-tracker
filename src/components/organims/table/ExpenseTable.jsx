/* eslint-disable react/prop-types */
import { Table } from "@chakra-ui/react";

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
        </Row>
      </Header>
      <Body>
        {items.map((item) => (
          <Row key={item.id}>
            <Cell>{item.name}</Cell>
            <Cell>{item.category}</Cell>
            <Cell textAlign="end">{item.price}</Cell>
          </Row>
        ))}
      </Body>
    </Root>
  );
};

export default ExpenseTable;
