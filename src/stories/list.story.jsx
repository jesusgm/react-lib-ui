import React from "react";
import { List } from "../components/list/list";

export default {
  title: "List",
};

export const SimpleList = () => (
  <div>
    <h3>List</h3>
    <List
      identifier="id"
      selected={2}
      itemProps={{ isList: true, otherProp: "value" }}
      ListItem={(item) => (
        <li className={item.selected ? "selected" : ""}>{item.name}</li>
      )}
    >
      {[
        {
          id: 1,
          name: "element1",
        },
        {
          id: 2,
          name: "element2",
        },
        {
          id: 3,
          name: "element3",
        },
        {
          id: 4,
          name: "element4",
        },
      ]}
    </List>
  </div>
);
