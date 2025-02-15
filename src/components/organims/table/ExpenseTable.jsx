/* eslint-disable react/prop-types */
import { Table, Button } from "@chakra-ui/react";
import { useMemo } from "react";

const ExpenseTable = ({ items, onEditExpense, onDeleteExpense }) => {
  const { Header, Body, Row, ColumnHeader, Cell, Root } = Table;

  const totalPrice = useMemo(() => {
    return items
      .reduce((acc, expense) => acc + Number(expense.price), 0)
      .toFixed(2);
  }, [items]);

  return (
    <Root size="sm" showColumnBorder>
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
            <Cell textAlign="end">{"$" + Number(item.price).toFixed(2)}</Cell>
            <Cell textAlign="start">{item.date}</Cell>
            <Cell textAlign="center">
              <Button
                colorScheme="blue"
                size="sm"
                mr={2}
                onClick={() => onEditExpense(item.id)}
              >
                Edit
              </Button>
              <Button
                colorScheme="red"
                size="sm"
                onClick={() => onDeleteExpense(item.id)}
              >
                Delete
              </Button>
            </Cell>
          </Row>
        ))}

        <Row>
          <Cell colSpan={6} fontWeight="bold" textAlign="right">
            Total Price:
          </Cell>
          <Cell colSpan={1} fontWeight="bold" textAlign="left">
            ${totalPrice}
          </Cell>
        </Row>
      </Body>
    </Root>
  );
};

export default ExpenseTable;
