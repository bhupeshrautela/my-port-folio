import {cardsData} from "../data.js"
import Card from "../Components/Card"
function Skills(){
    console.log(cardsData)
return(
    <>
    <section id="skills">
    
    <h2>tech stack</h2>
    <div id="cardBox">
    {cardsData.map((card)=>{
        return(
            <Card key={card.id} titleName={card.title} cardImage={card.image}/>
        )
    })
}
        
    </div>
    </section>
    
    </>

)
  
}
export default Skills