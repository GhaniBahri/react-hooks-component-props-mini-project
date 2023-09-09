import React from 'react'

function Article({title, date="January 1, 1970", preview, mins}) {
    function emojiText (){
        let number=1
        const text =[]
        if(mins > 30){
             number = Math.ceil(mins/10)
             for(let i=0; i<number; i++){
                text.push('🍱')
            }
        }else{
            number= Math.ceil(mins/5)
            for(let i=0; i<number; i++){
                text.push('☕️')
            }
        }
        return text.join('')
    }
    // console.log('emoji',emoji, 'min', mins)
  return (
   
    <article>
        <h3>{title}</h3>
        <small>{date} 
            <span> {emojiText()} </span>
            {mins} minutes to read </small>
        <p>{preview}</p>
    </article>
  )
}

export default Article