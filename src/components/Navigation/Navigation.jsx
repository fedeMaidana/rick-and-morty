import React, {useEffect} from 'react'
import {BsArrowLeft, BsArrowRight} from 'react-icons/bs'
import {AiOutlineQuestion} from 'react-icons/ai'
import navigationStyle from './navigation.module.css'

const Navigation = (props) => {
    const {prevCharFunc, nextCharFunc, currCharI, searchBar} = props

    useEffect(() => {
        const handleKeyPress = (event) => {
            if(event.key === 'ArrowLeft' || event.key === 'a') prevCharFunc()
            else if(event.key === 'ArrowRight' || event.key === 'd') nextCharFunc()
        }

        document.addEventListener('keydown', handleKeyPress)

        return () => {
            document.removeEventListener('keydown', handleKeyPress)
        }
    }, [prevCharFunc, nextCharFunc])


    return(
        <>
            <div className={navigationStyle.navigation}>
                <button onClick={prevCharFunc}>
                    <BsArrowLeft  fill='rgb(250, 250, 250)' />
                </button>
                <p>
                    {searchBar ? (currCharI + 1) : <AiOutlineQuestion fill='rgb(250, 250, 250)' />}
                </p>
                <button onClick={nextCharFunc}>
                    <BsArrowRight fill='rgb(250, 250, 250)' />
                </button>
            </div>
        </>
    )
}

export default Navigation