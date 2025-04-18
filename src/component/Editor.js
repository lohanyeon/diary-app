import { useState } from "react";
import "./Editor.css";
import { getFormattedDate } from "../util";
import Button from "./Button";

const Editor = ({ initData, onSubmit }) => {
    const [state, setState] = useState({
        date: getFormattedDate(new Date()),
        emotionId: 3,
        content: "",
    });
    const handleChangeDate = (e) => {
        setState({
            ...state,
            date: e.target.value,
        });
    };
    const handleChangeContent = (e) => {
        setState({
            ...state,
            content: e.target.value,
        });
    };
    return (
        <div className="Editor">
            <div className="editor_section">
                <h4>오늘의 날짜</h4>
                <div className="input_wrapper">
                    <input 
                        type="date" 
                        value={state.date} 
                        onChange={handleChangeDate} 
                    />
                </div>
            </div>
            <div className="editor_section">
                <h4>오늘의 감정</h4>
            </div>
            <div className="editor_section">
                <h4>오늘의 일기</h4>
                <div className="input_wrapper">
                    <textarea 
                        placeholder="오늘은 어땠나요?"
                        value={state.content}
                        onChange={handleChangeContent}
                    />
                </div>
            </div>
            <div className="editor_section">
                <Button text={"취소하기"} />
                <Button text={"작성완료"} type={"positive"} />
            </div>
        </div>
    );
};

export default Editor;