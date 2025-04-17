import { useSearchParams } from "react-router-dom";
import Button from "../component/Button";
import Header from "../component/Header";
import Edit from "./Edit";
import Editor from "../component/Editor";

const Home = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    // console.log(searchParams.get("sort"));

    return (
        <div>
            <Editor />
        </div>
    );
};

export default Home;