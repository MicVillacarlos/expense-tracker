/* eslint-disable react/prop-types */
import DeleteIcon from "@/components/atoms/icons/DeleteIcon";
import { EditIcon } from "@/components/atoms/icons/EditIcon";
import { darkTheme } from "@/theme/theme";
import { Table, Button } from "@chakra-ui/react";
import { useMemo } from "react";
import EmptyTable from "./EmptyTable";

const ExpenseTable = ({ items, onEditExpense, onDeleteExpense }) => {
  const { Header, Body, Row, ColumnHeader, Cell, Root, ScrollArea } = Table;

  const totalPrice = useMemo(() => {
    return items
      .reduce((acc, expense) => acc + Number(expense.price), 0)
      .toFixed(2);
  }, [items]);

  return items.length ? (
    <ScrollArea borderWidth="0.5px" rounded="md">
      <Root size="sm" showColumnBorder background={darkTheme.primary} marginTop={"10px"}>
        <Header>
          <Row background={darkTheme.primary}>
            <ColumnHeader>First Name</ColumnHeader>
            <ColumnHeader>Last Name</ColumnHeader>
            <ColumnHeader>Expense</ColumnHeader>
            <ColumnHeader>Description</ColumnHeader>
            <ColumnHeader textAlign="end">Price</ColumnHeader>
            <ColumnHeader color={darkTheme.primary} textAlign="start">
              Date
            </ColumnHeader>
            <ColumnHeader color={darkTheme.primary} textAlign="center">
              Action
            </ColumnHeader>
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
                  variant={"ghost"}
                  size="xs"
                  mr={2}
                  onClick={() => onEditExpense(item.id)}
                >
                  <EditIcon />
                </Button>
                <Button
                  variant={"ghost"}
                  colorScheme="red"
                  size="xs"
                  onClick={() => onDeleteExpense(item.id)}
                >
                  <DeleteIcon color={darkTheme.danger} />
                </Button>
              </Cell>
            </Row>
          ))}

          <Row background={darkTheme.primary}>
            <Cell colSpan={6} fontWeight="bold" textAlign="right">
              Total Price:
            </Cell>
            <Cell colSpan={1} fontWeight="bold" textAlign="left">
              ${totalPrice}
            </Cell>
          </Row>
        </Body>
      </Root>
    </ScrollArea>
  ) : (
    <EmptyTable />
  );
};

export default ExpenseTable;
