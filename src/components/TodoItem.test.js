import {fireEvent, render, screen} from "@testing-library/react";
import TodoItem from "./TodoItem";

test("load and displays greeting", async () => {
    render(<TodoItem done={false} id="1" text="a todo"/>);
    fireEvent.click(screen.getByRole("button"));
    expect("Elimina").toBe("Elimina");
});