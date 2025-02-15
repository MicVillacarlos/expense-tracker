import ExpenseModalForm from "@/components/organims/dialog/ExpenseDialogForm";
import ExpenseTable from "@/components/organims/table/ExpenseTable";
import { Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { LOCAL_STORAGE_KEY } from "@/config/config";

const Home = () => {
  const [isOpenAddExpenseForm, setIsOpenAddExpenseForm] = useState(false);
  const [expenseData, setExpenseData] = useState([]);

  useEffect(() => {
    if (!isOpenAddExpenseForm) {
      const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (storedData) {
        setExpenseData(JSON.parse(storedData));
      }
    }
  }, [isOpenAddExpenseForm]);
  console.log("Expense Data:", expenseData)

  return (
    <>
      <Button onClick={() => setIsOpenAddExpenseForm(true)}>Add Expense</Button>
      <ExpenseModalForm
        isFormOpened={isOpenAddExpenseForm}
        setIsFormOpened={setIsOpenAddExpenseForm}
      />
      <ExpenseTable items={expenseData} />
    </>
  );
};

export default Home;
