import "./dataside.css"
import image from "../../assets/avatar-jessica.jpeg"

function dataside (){

    return(
<div id="datadiv">
    <img src={image}/>
<h1 id="name">Jessica Randall</h1>
<label id="labelplace">London, United Kingdom</label>
<p>"Front-end developer and avid reader." </p>
</div>
    )
}
export default dataside