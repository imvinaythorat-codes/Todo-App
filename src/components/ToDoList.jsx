import ToDoItem from "./ToDoItem";

function ToDoList({
  todos,
  onToggle,
  onDelete,
  onEdit,
  editingId,
  editText,
  setEditText,
  onSave
}) {
  return (
    <div>
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
          editingId={editingId}
          editText={editText}
          setEditText={setEditText}
          onSave={onSave}
        />
      ))}
    </div>
  );
}

export default ToDoList;
