import "./buttonsside.css"
import Samebtn from "../samebtn/samebtn"
function buttonsside (){
    const array= [
        {btnname:"GitHub" ,
            uniqueID:1
        },
        {btnname:"Frontend Mentor",uniqueID:2 },
{btnname:"LinkedIn",uniqueID:3},
{btnname:"Twitter",uniqueID:4},
{btnname:"Instagram",uniqueID:5},
    ]

    return(
        <div className="multiblebtns">
        {array.length>0 ? ( array.map((item) => {
    return(
<Samebtn 
key={item.uniqueID} 
 btnname={item.btnname}></Samebtn>
                )
            })):(<h1> this array is empty </h1>)}
        </div>
    )
}
export default buttonsside