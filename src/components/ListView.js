import {useState} from "react";
import TodoCreator from "./TodoCreator";
import TodoList from "./TodoList";
import DeleteButton from "./DeleteButton";
import ReactModal from "react-modal";
import DeleteModal from "./DeleteModal";

export default function ListView({list, todos, onTodoUpdate, onTodoDelete, onTodoCreate, onListDelete}) {
    const [delModal, setDelModal] = useState(false)
    const notCompleted = todos.filter((t) => !t.done);
    const completed = todos.filter((t) => t.done);

    return (
        <>
            <div className="d-flex align-items-center position-relative">
                <h2 className="flex-grow-1">{list.name}</h2>
                <DeleteButton onClick={() => setDelModal(true)}/>
            </div>
            <ReactModal isOpen={delModal}>
                <DeleteModal message={`Vuoi eliminare l'elenco "${list.name}" con ${todos.length} attività?`} onDelete={() => onListDelete(list.id)} onCancel={() => setDelModal(false)}/>
            </ReactModal>
            <TodoList
                todos={notCompleted}
                onTodoUpdate={onTodoUpdate}
                onTodoDelete={onTodoDelete}
            />
            {completed.length > 0 && (
                <>
                    <h6>Completate</h6>
                    <TodoList
                        todos={completed}
                        onTodoUpdate={onTodoUpdate}
                        onTodoDelete={onTodoDelete}
                    />
                </>
            )}
            <TodoCreator onCreate={onTodoCreate}/>
        </>
    );
}
