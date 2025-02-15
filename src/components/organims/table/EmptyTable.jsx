import { EmptyState, VStack } from "@chakra-ui/react"


const EmptyTable = () => {
  return <EmptyState.Root>
  <EmptyState.Content>
    <EmptyState.Indicator>
    </EmptyState.Indicator>
    <VStack textAlign="center">
      <EmptyState.Title>No results found</EmptyState.Title>
      <EmptyState.Description>
        Add your first Expense now.
      </EmptyState.Description>
    </VStack>
  </EmptyState.Content>
</EmptyState.Root>;
};

export default EmptyTable;
