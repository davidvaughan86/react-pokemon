import React from 'react'


export default function pokeButton (props) {
    return (
        <nav>
            <button onClick={props.poke}
            >
                GET POKE 
            </button>
        </nav>
    )
}