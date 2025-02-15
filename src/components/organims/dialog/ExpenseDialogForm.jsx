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

import { Field } from "@/components/chakra/field";
import { useEffect, useState } from "react";
import { LOCAL_STORAGE_KEY } from "@/config/config";

// eslint-disable-next-line react/prop-types
const ExpenseModalForm = ({ isFormOpened, setIsFormOpened }) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    expense: "",
    price: "",
    date: "",
    description: "",
  });

  useEffect(() => {
    setOpen(isFormOpened);
  }, [isFormOpened]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
    console.log("Expense Data:", formData);
    setIsFormOpened(false);
    setFormData({
      firstName: "",
      lastName: "",
      expense: "",
      price: "",
      date: "",
      description: "",
    });
  };

  const onCancelHandler = () => {
    setFormData({
      firstName: "",
      lastName: "",
      expense: "",
      price: "",
      date: "",
      description: "",
    });
    setIsFormOpened(false);
  };

  return (
    <DialogRoot
      lazyMount
      open={open}
      onOpenChange={(e) => setIsFormOpened(e.open)}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Expense</DialogTitle>
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
                <Button type="button" onClick={onCancelHandler}>Cancel</Button>
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
