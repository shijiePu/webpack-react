import ListItem from "./listItem";

const List = ({ tasks, dispatch }) => {
  return (
    <ul>
      {tasks.length > 0 &&
        tasks.map((item, index) => {
          return (
            <ListItem
              dispatch={dispatch}
              id={item.id}
              name={item.name}
              index={index}
              key={item.id}
            ></ListItem>
          );
        })}
    </ul>
  );
};

export default List;
