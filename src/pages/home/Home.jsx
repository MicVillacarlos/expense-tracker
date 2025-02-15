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

  //data
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
  }, []);

  const onSearchDescription = (event) => {
    const query = event.target.value.toLowerCase();
    const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedData) {
      const filteredData = JSON.parse(storedData).filter((expense) =>
        expense.description.toLowerCase().includes(query)
      );
      setExpenseData(filteredData);
    }
  };

  return (
    <>
      <SearchInput placeHolder={"Search by description"} onChange={onSearchDescription}/>
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
