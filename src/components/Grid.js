import Card from "./Card";
const cards=[1,2,3,4,5,6,7,8,9];
function Grid(){
   
    return(
        <div>
            {cards.map((single_value,idx)=>{
                return(
                    <>
                    <Card key={idx}/><br></br>
                    </>
                )
            })}
        </div>
    )
}

export default Grid;