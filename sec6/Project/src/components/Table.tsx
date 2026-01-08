import { useState } from "react";
import type { FormData } from "./Form";

interface TableProps {
  items: FormData[];
  onDeleteItem: (index: number) => void;
}

function Table({ items, onDeleteItem }: TableProps) {
  const [filter, setFilter] = useState<"all" | FormData["category"]>("all");
  const filteredItems =
    filter === "all" ? items : items.filter((item) => item.category === filter);
  const total = filteredItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <select
        className="form-control mb-2"
        value={filter}
        onChange={(e) => setFilter(e.target.value as typeof filter)}
      >
        <option value="all">All</option>
        <option value="Groceries">Groceries</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
      </select>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((item, index) => (
            <tr key={index}>
              <td>{item.description}</td>
              <td>{item.price.toFixed(2)}$</td>
              <td>{item.category}</td>
              <td>
                <button
                  onClick={() => onDeleteItem(index)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>Total</th>
            <th>{total.toFixed(2)}$</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </>
  );
}

export default Table;
