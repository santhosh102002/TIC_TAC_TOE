import Card from "../Card/Card.js"
import './Grid.css'
function Grid({numberOfCards}){

    return (
        <div className="grid">
          {Array(numberOfCards).fill(<Card/>).map((el,indx)=>{
            return <Card key={indx}/>
          })}

        </div>
      

    )

}

export default Grid;