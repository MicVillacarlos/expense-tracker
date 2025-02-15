import ExpenseModalForm from "@/components/organims/dialog/ExpenseDialogForm";
import ExpenseTable from "@/components/organims/table/ExpenseTable";
import { Button } from "@chakra-ui/react";
import { useState } from "react";

const Home = () => {
  const [isOpenAddExpenseForm, setIsOpenAddExpenseForm] = useState(false);

  const dummyItems = [
    { id: 1, name: "Laptop", category: "Electronics", price: "$1200" },
    { id: 2, name: "Coffee Maker", category: "Appliances", price: "$80" },
    { id: 3, name: "Gaming Chair", category: "Furniture", price: "$250" },
    { id: 4, name: "Smartphone", category: "Electronics", price: "$900" },
    { id: 5, name: "Backpack", category: "Accessories", price: "$60" },
  ];

  return (
    <>
      <Button onClick={() => setIsOpenAddExpenseForm(true)}>Add Expense</Button>
      <ExpenseModalForm
        isFormOpened={isOpenAddExpenseForm}
        setIsFormOpened={setIsOpenAddExpenseForm}
      />
      <ExpenseTable items={dummyItems} />
    </>
  );
};

export default Home;
