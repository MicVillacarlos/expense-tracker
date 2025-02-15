/* eslint-disable react/prop-types */
import {
  DialogActionTrigger,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
} from "@/components/chakra/dialog";
import { Button } from "@chakra-ui/react";
import { LOCAL_STORAGE_KEY } from "@/config/config";

const AlertDialog = ({
  selectedExpenseId,
  setSelectedExpenseId,
  isOpenDeleteExpenseAlert,
  setIsOpenDeleteExpenseAlert,
}) => {
  const onDeleteHandler = () => {
    // Get stored expenses
    const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!storedData) return;

    const expenses = JSON.parse(storedData);
    const updatedExpenses = expenses.filter(expense => expense.id !== selectedExpenseId);

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedExpenses));

    // Close dialog
    setSelectedExpenseId("");
    setIsOpenDeleteExpenseAlert(false);
  };

  return (
    <DialogRoot
      role="alertdialog"
      open={isOpenDeleteExpenseAlert}
      onOpenChange={(e) => setIsOpenDeleteExpenseAlert(e.open)}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <p>
            This action cannot be undone. This will permanently your Expense.
          </p>
        </DialogBody>
        <DialogFooter>
          <DialogActionTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </DialogActionTrigger>
          <Button colorPalette="red" onClick={onDeleteHandler}>
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </DialogRoot>
  );
};

export default AlertDialog;
