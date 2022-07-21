import "./landing.css";
import CreateOptionNoData from "./components/createOptionBtns/createOptionNoData/CreateOptionNoData";
import { data } from "../navigationContext";

type Props = {};

function Landing({}: Props) {
    return <div className="landing__container">{!data && <CreateOptionNoData />}</div>;
}

export default Landing;
