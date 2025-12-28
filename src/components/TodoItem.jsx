import { useContext, useState } from "react";
import { TodoContext } from "../context/todocontext";

const TodoItem = ({ todo }) => {
  const { deleteTodos, updateTodos } = useContext(TodoContext);

  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleUpdate = () => {
    updateTodos(todo.id, text);
    setIsEditing(false);
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this todo?"
    );

    if (confirmDelete) {
      deleteTodos(todo.id);
    }
  };

  return (
    <div>
      {isEditing ? (
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      ) : (
        <span>{todo.text}</span>
      )}

      <div>
        {isEditing ? (
          <button onClick={handleUpdate}>Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}

        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
