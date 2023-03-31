import React from 'react'
import "../Defination/Definitions.css"
function Definitions({category,word,meanings,LightTheme}) {
  return (
    <div className='meanings'>
         <div>
         {meanings[0] && word && category === "en" && (
        <audio
          style={{ backgroundColor: "#fff", borderRadius: "10px",width:"100%" }}
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          controls
        />

      )} 
         </div>
        {
            word===""?(<span className='subtitle'>Start by typing a word in Search</span>):
            meanings.map((mean)=>
               mean.meanings.map((item)=>
               item.definitions.map((def)=>(
                <div className="singleMean"
                style={{
                    backgroundColor: LightTheme ? "#3b5360" : "white",
                    color: LightTheme ? "white" : "black",
                  }}>
                <b>{def.definition}</b>
                <hr style={{backgroundColor:"black", width:"100%"}}/>
                {def.example &&(
                    <span>
                        <b>Example:</b>
                        {def.example}
                    </span>
                )}
                {def.synonyms &&(
                    <span>
                        <b>Synonyms:</b>
                        {def.synonyms.map((s)=>`${s}, `)}
                    </span>
                )}
                </div>
               ))))
        }
    </div>
  )
}

export default Definitions