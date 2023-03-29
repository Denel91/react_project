import Layout, {LeftCol, RightCol} from "./components/Layout";
import User from "./components/User";
import ListNames from "./components/ListNames";
import TodoList from "./components/TodoList";

const user = {
    id: 1,
    name: "Daniele",
    image: "https://github.com/lifeisfoo.png",
};

export default function App() {
    return (
        <Layout>
            <LeftCol>
                <User name={user.name} image={user.image}/>
                <hr/>
                <ListNames/>
            </LeftCol>
            <RightCol>
                <TodoList/>
            </RightCol>
        </Layout>
    );
}


