import React, { useState } from "react"
import { Connect, connect } from "react-redux"


import Navigation from "../Navigation/Navigation"
import Gallery from "../Gallery/Gallery"
import Data from '../Data/Data'

import { addFav, removeFav } from "../../redux/action"

import cardStyle from './card.module.css'

// CharDisp --> CharacterDisplay --> Visualizar Personaje.
// prevCharFunc --> previousCharacterFunction --> Funcion Personaje previo.
// prevCharI --> previousCharacterIndex --> Indice del Personaje Previo.
// prevChar --> previousCharacter --> Personaje Previo.
// setCurrCharI --> setCurrentCharacterIndex --> Establecer el Indice del Personaje Actual.
// currCharI --> currentCharacterIndex --> Indice del Personaje Actual.
// currChar --> currentCharacter --> Personaje Actual.
// nextCharFunc --> nextCharacterFunction --> Funcion Personaje Posterior.
// nextCharI --> nextCharacterIndex --> Indice del Personaje Posterior.
// nextChar --> nextCharacter --> Personaje Posterior.

const CharDisp = ({characters, removeFav, addFav}) => {
   const [currCharI, setCurrCharI] = useState(0) // Define a state variable 'currCharI' and a function 'setCurrCharI' to update it
   const [isFav, setIsFav] = useState(false)

   const prevCharFunc = () => { // Define a function 'prevCharFunc' that decrements the 'currCharI' state variable
      setCurrCharI(index => index === 0 ? characters.length - 1 : index - 1)  // If 'currCharI' is 0, set it to the last index of 'characters', otherwise decrement it by 1
   }

   const nextCharFunc = () => {  // Define a function 'nextCharFunc' that increments the 'currCharI' state variable
      setCurrCharI(index => index === characters.length - 1 ? 0 : index + 1)  // If 'currCharI' is equal to the last index of 'characters', set it to 0, otherwise increment it by 1
   }

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false)
         removeFav(characters.id)
      }else{
         setIsFav(true)
         addFav(characters)
      }
   }

   const prevCharI = currCharI - 1 >= 0 ? currCharI - 1 : characters?.length - 1  // Calculate the index of the previous character based on 'currCharI'
   const prevChar = characters[prevCharI] // Get the previous character object from 'characters' based on 'prevCharI'

   const currChar = characters[currCharI]  // Get the current character object from 'characters' based on 'currCharI'

   const nextCharI = (currCharI + 1) % characters?.length // Calculate the index of the next character based on 'currCharI'
   const nextChar = characters[nextCharI] // Get the next character object from 'characters' based on 'nextCharI'

   const SearchResultIndex = characters.findIndex(character => character?.id === currChar?.id)
   const searchBar = characters[SearchResultIndex]

   return(
      <>
         <div className={cardStyle.card}>
            <Navigation
               prevCharFunc={prevCharFunc}
               nextCharFunc={nextCharFunc}
               currCharI={currCharI}
               searchBar={searchBar}
            />
            <Gallery
               characters={characters}
               prevChar={prevChar}
               currChar={currChar}
               nextChar={nextChar}
               searchBar={searchBar}
               prevCharFunc={prevCharFunc}
               nextCharFunc={nextCharFunc}
               isFav={isFav}
               handleFavorite={handleFavorite}
            />
            <Data currChar={currChar} searchBar={searchBar} />
         </div>
         {/* <div className={cardStyle.favoritesContainer}>
            <p>hola</p>
         </div> */}
      </>
   )
}

const mapDispatchToProps = {
   addFav,
   removeFav
}

export default connect(null, mapDispatchToProps)(CharDisp) 
