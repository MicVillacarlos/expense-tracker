import ExpenseModalForm from "@/components/organims/dialog/ExpenseDialogForm";
import ExpenseTable from "@/components/organims/table/ExpenseTable";
import { Button, Text } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { LOCAL_STORAGE_KEY } from "@/config/config";
import { Toaster } from "@/components/chakra/toaster";
import AlertDialog from "@/components/organims/dialog/AlertDialog";
import SearchInput from "@/components/atoms/inputs/SearchInput";
import WeekPicker from "@/components/atoms/date-picker/WeekPicker";
import { filterExpensesByDate, weekToDateRange } from "@/utils/utils";
import {
  SearchContainer,
  HeaderContainer,
  WeekPickerContainer,
  PageContainer,
} from "./homeStyle";
import { darkTheme } from "@/theme/theme";

const Home = () => {
  //dialog states
  const [isOpenAddExpenseForm, setIsOpenAddExpenseForm] = useState(false);
  const [isOpenDeleteExpenseAlert, setIsOpenDeleteExpenseAlert] =
    useState(false);
  const [dialogMode, setDialogMode] = useState("add");
  const [selectedExpenseId, setSelectedExpenseId] = useState("");

  //data
  const [expenseData, setExpenseData] = useState([]);

  const fetchData = () => {
    const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedData) {
      setExpenseData(JSON.parse(storedData));
    }
  };

  useEffect(() => {
    if (!isOpenAddExpenseForm || !isOpenDeleteExpenseAlert) {
      fetchData();
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

  const onSelectWeekPicker = (event) => {
    const dateRange = weekToDateRange(event.target.value);
    const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    const parsedStoredData = JSON.parse(storedData);
    const updatedData = filterExpensesByDate(parsedStoredData, dateRange);
    setExpenseData(updatedData);
  };

  return (
    <PageContainer>
      <HeaderContainer>
        <Text textStyle={"3xl"}>Expense Tracker</Text>
        <Button background={darkTheme.primary} onClick={onAddExpenseHandler}>
          Add Expense
        </Button>
      </HeaderContainer>
      <HeaderContainer>
        <SearchContainer>
          <SearchInput
            placeHolder={"Search by description"}
            onChange={onSearchDescription}
          />
        </SearchContainer>
        <WeekPickerContainer>
          <Text>
            Filter:
          </Text>
          <WeekPicker onChange={onSelectWeekPicker} />
        </WeekPickerContainer>
      </HeaderContainer>
      <ExpenseTable
        items={expenseData}
        onEditExpense={onEditExpenseHandler}
        onDeleteExpense={onDeleteExpenseHandler}
      />
      <Toaster />
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
    </PageContainer>
  );
};

export default Home;
