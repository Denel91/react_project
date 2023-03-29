import TodoItem from "./TodoItem";

const todos = [
    {id: 1, done: false, text: "Prima attività"},
    {id: 2, done: false, text: "Seconda attività"},
    {id: 3, done: false, text: "Terza attività"}
];

export default function TodoList() {
    const todoItems = todos.map((t) => (<TodoItem key={t.id} done={t.done} text={t.text}/>));
    return <ul className="list-group pb-3">{todoItems}</ul>
}