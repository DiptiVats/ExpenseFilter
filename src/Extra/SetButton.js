import Buttons from "./Buttons";
import "./SetButton.css";
const SetButton=()=>{
        const val=['file','edit','format','view'];
    return(
        <div className="fix-button1">
           <div><Buttons name={val[0]} ></Buttons></div>
            <div><Buttons name={val[1]}></Buttons></div>
            <div><Buttons name={val[2]}></Buttons></div>
            <div><Buttons name={val[3]}></Buttons></div>
        </div>
    )
}
export default SetButton;