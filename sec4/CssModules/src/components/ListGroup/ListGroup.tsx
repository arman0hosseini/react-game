import { Fragment } from "react/jsx-runtime";
import { MouseEvent, useState } from "react";
import styles from "./ListGroup.module.css";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: Props) {
  // Event Handler
  // const handleClick = (event: MouseEvent) => console.log(event);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <Fragment>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      {/* {items.length === 0 ? <p>No item found</p> : null} */}
      <ul className={[styles.listGroup, styles.container].join(" ")}>
        {items.map(function (item, index) {
          return (
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={item}
              onClick={() => {
                setSelectedIndex(index);
                onSelectItem(item);
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
}

// if we wrap the tags between empty brackets "<>", we're telling react to use a fragment to
// wrap all the children

export default ListGroup;
