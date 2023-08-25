import Icons from "../Icons/Icons.js"
import './Card.css'
function Card({IconName}){
return (
   <div className="card">
    <Icons name={IconName} />
   </div>
)
}

export default Card;