import "./App.css";
import TableTracker from "./components/organims/table/TableTracker";

function App() {
  const dummyItems = [
    { id: 1, name: "Laptop", category: "Electronics", price: "$1200" },
    { id: 2, name: "Coffee Maker", category: "Appliances", price: "$80" },
    { id: 3, name: "Gaming Chair", category: "Furniture", price: "$250" },
    { id: 4, name: "Smartphone", category: "Electronics", price: "$900" },
    { id: 5, name: "Backpack", category: "Accessories", price: "$60" },
  ];

  return (
    <>
      <TableTracker items={dummyItems} />
    </>
  );
}

export default App;
