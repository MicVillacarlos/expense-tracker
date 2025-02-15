import { Button, HStack, Input, Textarea } from "@chakra-ui/react";
import {
  DialogActionTrigger,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/chakra/dialog";

import { Field } from "@/components/chakra/field";
import { useState } from "react";

const ExpenseModalForm = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    expense: "",
    price: "",
    date: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Expense Data:", formData);
    setOpen(false);
  };

  return (
    <DialogRoot lazyMount open={open} onOpenChange={(e) => setOpen(e.open)}>
      <DialogTrigger asChild>
        <Button onClick={() => setOpen(true)}>Add Expense</Button>
      </DialogTrigger>

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

            <HStack gap="8" width="full" marginTop={5}>
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

            <HStack gap="8" width="full" marginTop={5}>
              <Field label="Description" required>
                <Textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Input Description"
                />
              </Field>
            </HStack>

            <DialogFooter marginTop={5}>
              <DialogActionTrigger asChild>
                <Button type="button" onClick={() => setOpen(false)}>
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
