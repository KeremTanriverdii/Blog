import React from 'react'
import Science from '../Topics/Science/Science'
import Programming from '../Topics/Programming/Programming'
import AI from '../Topics/AI'
import Technology from '../Topics/Technology'

function Home({ navigate }) {
    return (
        <div >
            <Science navigate={navigate} />
            <Programming navigate={navigate} />
            <AI navigate={navigate} />
            <Technology navigate={navigate} />
        </div>
    )
}

export default Home