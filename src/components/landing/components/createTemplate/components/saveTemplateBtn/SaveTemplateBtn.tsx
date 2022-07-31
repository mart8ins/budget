import "./saveTemplateBtn.css";

type Props = {
    saveTemplate: () => void;
};

function SaveTemplateBtn({ saveTemplate }: Props) {
    return (
        <div>
            <button className="save__template__btn" onClick={saveTemplate}>
                Save template
            </button>
        </div>
    );
}

export default SaveTemplateBtn;
