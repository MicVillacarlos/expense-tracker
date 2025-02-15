import ExpenseModalForm from "@/components/organims/dialog/ExpenseDialogForm";
import ExpenseTable from "@/components/organims/table/ExpenseTable";
import { Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { LOCAL_STORAGE_KEY } from "@/config/config";
import { Toaster } from "@/components/chakra/toaster";

const Home = () => {
  //dialog states
  const [isOpenAddExpenseForm, setIsOpenAddExpenseForm] = useState(false);
  const [dialogMode, setDialogMode] = useState("add");
  const [selectedExpenseId, setSelectedExpenseId] = useState("");

  const [expenseData, setExpenseData] = useState([]);

  useEffect(() => {
    if (!isOpenAddExpenseForm) {
      const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (storedData) {
        setExpenseData(JSON.parse(storedData));
      }
    }
  }, [isOpenAddExpenseForm]);

  const onAddExpenseHandler = () => {
    setIsOpenAddExpenseForm(true);
    setDialogMode("add");
  };

  const onEditExpenseHandler = (expenseId) => {
    setIsOpenAddExpenseForm(true);
    setDialogMode("edit");
    setSelectedExpenseId(expenseId);
  };

  return (
    <>
      <Button onClick={onAddExpenseHandler}>Add Expense</Button>
      <ExpenseModalForm
        isFormOpened={isOpenAddExpenseForm}
        setIsFormOpened={setIsOpenAddExpenseForm}
        mode={dialogMode}
        setMode={setDialogMode}
        selectedExpenseId={selectedExpenseId}
        setSelectedExpenseId={setSelectedExpenseId}
      />
      <ExpenseTable items={expenseData} onEditExpense={onEditExpenseHandler} />
      <Toaster />
    </>
  );
};

export default Home;
