import { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [input, setInput] = useState("");

  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(0);

  function addTodo(title) {
    if (title === "") {
      return;
    }

    const newTodo = Array.from(todoList);
    newTodo.push(title);
    setTodoList(newTodo);
  }

  function editTodo(index, newTitle) {
    const newTodo = Array.from(todoList);
    newTodo[index] = newTitle;
    setTodoList(newTodo);
  }

  function finishTodo(index) {
    const newTodo = [];
    for (let i = 0; i < todoList.length; i++) {
      if (i !== index) {
        newTodo.push(todoList[i]);
      }
    }
    setTodoList(newTodo);
  }

  return (
    <>
      <h1 className="text-3xl font-bold mb-8">React + Tailwind Workshop</h1>
      <div>
        <input
          placeholder="Title..."
          className="bg-gray-900 rounded px-4 py-2 mr-4"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-blue-500 rounded"
          onClick={() => addTodo(input)}
        >
          Add Todo
        </button>
      </div>
      <div>
        {todoList.map((todo, index) => (
          <div key={index} className="mt-4 items-center">
            {isEditing && editIndex === index ? (
              <>
                <input
                  className="bg-gray-900 rounded px-4 py-2 mr-4"
                  value={todo}
                  onChange={(e) => editTodo(index, e.target.value)}
                />
                <button
                  className="px-2 py-1 mr-4 bg-green-500 text-white rounded"
                  onClick={() => setIsEditing(false)}
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <span className="px-4 py-2 mr-4">{todo}</span>
                <button
                  className="px-2 py-1 mr-4 bg-yellow-500 text-white rounded"
                  onClick={() => {
                    setIsEditing(true);
                    setEditIndex(index);
                  }}
                >
                  Edit
                </button>
              </>
            )}

            <button
              className="px-2 py-1 bg-red-500 text-white rounded"
              onClick={() => finishTodo(index)}
            >
              Finish
            </button>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
