/* eslint-disable react/prop-types */
import { Button, HStack, Input, Textarea } from "@chakra-ui/react";
import {
  DialogActionTrigger,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
} from "@/components/chakra/dialog";
import { toaster } from "@/components/chakra/toaster";

import { Field } from "@/components/chakra/field";
import { useEffect, useState } from "react";
import { LOCAL_STORAGE_KEY } from "@/config/config";
import { generateRandomId, today } from "@/utils/utils";

// eslint-disable-next-line react/prop-types
const ExpenseModalForm = ({
  isFormOpened,
  setIsFormOpened,
  mode,
  setMode,
  selectedExpenseId,
  setSelectedExpenseId,
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    expense: "",
    price: "",
    date: "",
    description: "",
  });

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      expense: "",
      price: "",
      date: "",
      description: "",
    });
    setIsFormOpened(false);
    setMode("add");
    setSelectedExpenseId("");
  };

  useEffect(() => {
    if (mode === "edit") {
      const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
      const expenses = storedData ? JSON.parse(storedData) : [];
      const selectedExpense = expenses.find(
        (item) => item.id === selectedExpenseId
      );

      if (selectedExpense) {
        setFormData(selectedExpense);
      }
    }
  }, [isFormOpened, mode, selectedExpenseId]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    const expenses = storedData ? JSON.parse(storedData) : [];

    if (mode === "add") {
      const newExpense = { ...formData, id: generateRandomId() };
      const updatedExpenses = [...expenses, newExpense];

      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedExpenses));

      toaster.success({
        description: "Expense Added Successfully",
        type: "Success",
      });
    } else {
      // Edit mode: update the existing expense
      const updatedExpenses = expenses.map((expense) =>
        expense.id === selectedExpenseId
          ? { ...formData, id: selectedExpenseId }
          : expense
      );

      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedExpenses));

      toaster.success({
        description: "Expense Successfully Updated",
        type: "Success",
      });
    }

    resetForm();
  };

  const onCancelHandler = () => {
    resetForm();
  };

  return (
    <DialogRoot
      lazyMount
      open={isFormOpened}
      onOpenChange={(e) => setIsFormOpened(e.open)}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{mode == "edit" ? "Edit" : "Add"}Expense</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <form onSubmit={handleSubmit}>
            <HStack gap="8" width="full" marginBottom={10}>
              <Field label="First Name" required>
                <Input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Input First Name"
                  variant="subtle"
                />
              </Field>
              <Field label="Last Name" required>
                <Input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Input Last Name"
                  variant="outline"
                />
              </Field>
            </HStack>

            <HStack gap="10" width="full">
              <Field label="Expense" required>
                <Input
                  name="expense"
                  value={formData.expense}
                  onChange={handleChange}
                  placeholder="Input Expense"
                  variant="subtle"
                />
              </Field>
            </HStack>

            <HStack gap="8" width="full" marginTop={10}>
              <Field label="Price" required>
                <Input
                  name="price"
                  type="number"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="Input Price"
                  variant="subtle"
                />
              </Field>
              <Field label="Date" required>
                <Input
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  placeholder="Input Date"
                  variant="subtle"
                  max={today}
                />
              </Field>
            </HStack>

            <HStack gap="8" width="full" marginTop={10}>
              <Field label="Description">
                <Textarea
                  name="description"
                  value={formData.description}
                  onChange={(e) => {
                    if (e.target.value.length <= 100) {
                      handleChange(e);
                    }
                  }}
                  placeholder="Input Description"
                  helperText="Max 100 characters"
                  maxLength={100}
                />
              </Field>
            </HStack>

            <DialogFooter marginTop={10}>
              <DialogActionTrigger asChild>
                <Button type="button" onClick={onCancelHandler}>
                  Cancel
                </Button>
              </DialogActionTrigger>
              <Button type="submit">Save</Button>
            </DialogFooter>
          </form>
        </DialogBody>
      </DialogContent>
    </DialogRoot>
  );
};

export default ExpenseModalForm;
