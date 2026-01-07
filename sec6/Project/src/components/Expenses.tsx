import { useState } from "react";
import Form from "./Form";
import Table from "./Table";
import type { FormData } from "./Form";

function Expenses() {
  const [list, setList] = useState<FormData[]>([]);

  function handleAddItem(item: FormData) {
    setList((prev) => [...prev, item]);
  }

  function handleDeleteItem(index: number) {
    setList((prev) => prev.filter((_, i) => i !== index));
  }
  return (
    <>
      <Form onAddItem={handleAddItem} />
      <Table onDeleteItem={handleDeleteItem} items={list} />
    </>
  );
}

export default Expenses;
