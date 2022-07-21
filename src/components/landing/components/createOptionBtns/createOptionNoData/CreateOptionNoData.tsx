import "./createOptionNoData.css";
type Props = {};

function CreateOptionNoData({}: Props) {
    return (
        <div className="create__container__no__data">
            <div className="create__option">Create template for expanses</div>
            <div className="create__option">Create new budget expanses</div>
        </div>
    );
}

export default CreateOptionNoData;
