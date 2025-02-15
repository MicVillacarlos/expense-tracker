import ExpenseModalForm from "@/components/organims/dialog/ExpenseDialogForm";
import ExpenseTable from "@/components/organims/table/ExpenseTable";
import { Button } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { LOCAL_STORAGE_KEY } from "@/config/config";
import { Toaster } from "@/components/chakra/toaster";
import AlertDialog from "@/components/organims/dialog/AlertDialog";
import SearchInput from "@/components/atoms/inputs/SearchInput";

const Home = () => {
  //dialog states
  const [isOpenAddExpenseForm, setIsOpenAddExpenseForm] = useState(false);
  const [isOpenDeleteExpenseAlert, setIsOpenDeleteExpenseAlert] =
    useState(false);
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
  }, [isOpenAddExpenseForm, isOpenDeleteExpenseAlert]);

  const onAddExpenseHandler = () => {
    setIsOpenAddExpenseForm(true);
    setDialogMode("add");
  };

  const onEditExpenseHandler = useCallback((expenseId) => {
    setIsOpenAddExpenseForm(true);
    setDialogMode("edit");
    setSelectedExpenseId(expenseId);
  }, []);

  const onDeleteExpenseHandler = useCallback((expenseId) => {
    setIsOpenDeleteExpenseAlert(true);
    setSelectedExpenseId(expenseId);
    console.log("here");
  }, []);

  return (
    <>
      <SearchInput placeHolder={"Search by description"}/>
      <Button onClick={onAddExpenseHandler}>Add Expense</Button>
      <ExpenseModalForm
        isFormOpened={isOpenAddExpenseForm}
        setIsFormOpened={setIsOpenAddExpenseForm}
        mode={dialogMode}
        setMode={setDialogMode}
        selectedExpenseId={selectedExpenseId}
        setSelectedExpenseId={setSelectedExpenseId}
      />
      <AlertDialog
        selectedExpenseId={selectedExpenseId}
        setSelectedExpenseId={setSelectedExpenseId}
        isOpenDeleteExpenseAlert={isOpenDeleteExpenseAlert}
        setIsOpenDeleteExpenseAlert={setIsOpenDeleteExpenseAlert}
      />
      <ExpenseTable
        items={expenseData}
        onEditExpense={onEditExpenseHandler}
        onDeleteExpense={onDeleteExpenseHandler}
      />
      <Toaster />
    </>
  );
};

export default Home;
