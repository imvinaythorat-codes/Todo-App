{/* Handles individual todo item rendering */}

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
  const isEditing = editingId === todo.id;

  return (
    <div className="todo-item">
      {/* LEFT SIDE */}
      <div className="todo-left">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />

        {isEditing ? (
          <input
            type="text"
            className="edit-input"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
        ) : (
          <span className={todo.completed ? "completed" : ""}>
            {todo.text}
          </span>
        )}
      </div>

      {/* RIGHT SIDE */}
      <div className="todo-actions">
        {isEditing ? (
          <button onClick={onSave}>Save</button>
        ) : (
          <button onClick={() => onEdit(todo.id, todo.text)}>Edit</button>
        )}

        <button onClick={() => onDelete(todo.id)}>Delete</button>
      </div>
    </div>
  );
}

export default ToDoItem;

