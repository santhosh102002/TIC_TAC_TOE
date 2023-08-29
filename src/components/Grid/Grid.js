import Card from "../Card/Card.js"
import './Grid.css'
function Grid({numberOfCards}){

    return (
      <>
        <h1 className="turn-highlight">Current Turn: </h1>
         <div className="grid">
          {Array(numberOfCards).fill(<Card/>).map((el,indx)=>{
            return <Card key={indx}/>
          })}

        
        </div>
      </>
     
      

    )

}

export default Grid;