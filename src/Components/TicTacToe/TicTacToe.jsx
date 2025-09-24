import React from 'react' 
import './TicTacToe.css'
import circulo_icon from '../Assets/circulo.png'
import xis_icon from '../Assets/xis.png'

const TicTacToe = () => {
    return (
        <div className='container'>
            <h1 className= "title">Jogo da velha em  <span> React</span></h1>
            <div className="board">

            </div>
            <button className="reset">Reset</button>
        </div>
    )
}

 export default TicTacToe