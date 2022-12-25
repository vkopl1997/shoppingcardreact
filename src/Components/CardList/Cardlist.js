import { useReducer } from "react";
import '../CardList/CardList.css'

const reducer = (state,action) =>{
    switch (action.type){
        case 'increment':
            return{
                count: state.count +1
            };
        case 'decrement':
            return{
                count: state.count>0 ? state.count-1: state.count
            };
        default:
            return state;
    }
 
}

const CardList = ({ cart }) =>{
    const [countState,dispatch]= useReducer(reducer,{count:1})
    return(
        <div className="cardlistmain">
            {
                cart.map((cartItem,cartIndex)=>{
                    return(
                        <div className="cartitem">
                            <img className="imgforcartitem" src={cartItem.url} width={40} alt="product"/>
                            <span>{cartItem.name}</span>
                            <button className="minusplus" onClick={()=>dispatch({type:'decrement'})}>-</button>
                            <span>{countState.count}</span>
                            <button className="minusplus" onClick={()=>dispatch({type:'increment'})}>+</button>
                            <span>{cartItem.price *countState.count}$</span>
                        </div>
                    )
                })
            }
            <p>total price:  {' '}
                {cart.map(item=>item.price * countState.count).reduce((total,value)=> total + value,0)}$
            </p>
            
        </div>
    )
};
export default CardList;