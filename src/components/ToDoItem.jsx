// Handles individual todo item rendering


function ToDoItem({
  todo,
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
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />

      {editingId === todo.id ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={onSave}>Save</button>
        </>
      ) : (
        <>
          <span>{todo.text}</span>
          <button onClick={() => onEdit(todo.id, todo.text)}>Edit</button>
        </>
      )}

      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
}

export default ToDoItem;
