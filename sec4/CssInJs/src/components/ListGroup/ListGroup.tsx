import { Fragment } from "react/jsx-runtime";
import { MouseEvent, useState } from "react";
import "./ListGroup.css";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 10px;
  background-color: tomato;
`;

const ListItem = styled.li<ListItemProps>`
  padding: 5px;
  background-color: ${(props: ListItemProps) =>
    props.active ? "blue" : "none"};
`;

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

interface ListItemProps {
  active: boolean;
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
      <List>
        {items.map(function (item, index) {
          return (
            <ListItem
              active={selectedIndex === index}
              key={item}
              onClick={() => {
                setSelectedIndex(index);
                onSelectItem(item);
              }}
            >
              {item}
            </ListItem>
          );
        })}
      </List>
    </Fragment>
  );
}

// if we wrap the tags between empty brackets "<>", we're telling react to use a fragment to
// wrap all the children

export default ListGroup;
