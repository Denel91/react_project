import TodoItem from "./TodoItem";

const itemClasses = "list-group-item border rounded-1 my-1";

export default function TodoList () {
    return (
        <ul className="list-group pb-3">
            <TodoItem done={false} text="Prima attività"/>
            <TodoItem done={true} text="Seconda attività"/>
            <TodoItem done={false} text="Terza attività"/>
        </ul>
    );
}