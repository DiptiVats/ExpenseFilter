import "./WrittingBoard.css";
import SetButton from "./SetButton";
const WrittingBoard=()=>{
    return(
        <div>
        <SetButton/>
        <textarea className="writting-board-structure">
        </textarea>
        </div>
    ) 
}
export default WrittingBoard;
