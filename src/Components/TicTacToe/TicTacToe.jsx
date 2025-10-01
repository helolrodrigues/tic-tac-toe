import React from 'react' 
import './TicTacToe.css'
import circulo_icon from '../Assets/circulo.png'
import xis_icon from '../Assets/xis.png'

let data = ["","","","","","","","",""];

const TicTacToe = () => {



let [count,setCount]= useState(0);
let [lock,setLock] = useState(false);


    const toggle =(w, num) =>{
if(lock){
    return 0;
}
if (count%2===0)
{
    e.target.innerHTML = ` <img src= '${cross_icon}'`;
    data[num]=x;
    

}
    }




    return (
        <div className='container'>
            <h1 className= "title">Jogo da velha em  <span> React</span></h1>
            <div className="board">
                <div className="row1">
                    <div className="boxes"></div>
                    <div className="boxes"></div>
                    <div className="boxes"></div>                
                    </div>
                    <div className="row2">
                    <div className="boxes"></div>
                    <div className="boxes"></div>
                    <div className="boxes"></div>                
                    </div>
                    <div className="row3">
                    <div className="boxes"></div>
                    <div className="boxes"></div>
                    <div className="boxes"></div>                
                    </div>
            </div>
            <button className="reset">Reset</button>
        </div>
    )
}

 export default TicTacToe