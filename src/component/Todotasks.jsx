import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editTodo, deleteTodo } from '../todo/todoSlices';
import './Todotask.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Todoedit from './Todoedit';



const TodoTasks = (todo) => {
    const dispatch = useDispatch();
    const[updateModal,setUpdateModal]=useState(false)
    const todos = useSelector((state) => state.todos);

  
    const handleEditTodo = () => {
        dispatch( editTodo(id))
        setUpdateModal(true);
        toast.success('Todo updated successfully');
      };
      
      const handleDeleteTodo = (id) => {
        dispatch(deleteTodo(id));
        toast.error('Todo deleted');
        };

    const handleCheckboxChange = (id) => {
      const updatedTodos = todos.todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            status: item.status === "Complete" ? "Incomplete" : "Complete",
          };
        }
        return item;
      });
  
      dispatch(editTodo({
        todos: updatedTodos
      }));
    };
  
    return (
      <div>
        {todos.todos.length > 0 ? (
          todos.todos.map((item) => (
            <div className="todotask" key={item.id}>
              <div>
                <input
                  className="checkbox"
                  type="checkbox"
                  defaultChecked={item.status == "Complete" ? true : false}
                  onChange={(e) => {
                    dispatch(editTodo(
                      {
                        ...item,
                        status: item.status == "Complete" ? "Incomplete" : "Complete"
                      }
                    ))
                  }}
                />
              </div>
              <div>
                <div
                  className="title"
                  style={item.status === "Complete" ? { textDecoration: "line-through" } : {}}
                >
                  {item.title}
                </div>
                <div className="container">
                  <p
                    style={item.status === "Complete" ? { textDecoration: "line-through" } : {}}
                  >
                    {item.date}
                  </p>
                </div>
              </div>
              <div className="button">
                <button
                  style={{ border: "none" }}
                  className="fas fa-pencil-alt me-3"
                  onClick={handleEditTodo}

                ></button>
                <button
                  style={{ border: "none" }}
                  className="fas fa-trash-alt"
                  onClick={() => handleDeleteTodo(item.id)}
                ></button>
              </div>
            </div>
          ))
        ) : (
          <h5 style={{ textAlign: "center" }}>NO TODOS</h5>
        )}
        <Todoedit
        type="update"
        todo={todos}
        modalOpen={updateModal}
        setmodalOpen={setUpdateModal}
        />
      </div>
    
    );
  };
export default TodoTasks;  