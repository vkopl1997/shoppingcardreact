import '../Header/Header.css';
function Header(props) {
    return (
       <div className='headermain'>
        <div className='shoppingcard' onClick={()=>props.handleShow(false)}>shopping card</div>
        <div className='shoppingcard' onClick={()=>props.handleShow(true)}>card
            <sup>{props.count}</sup>
        </div>
       </div>
    );
  }
  
  export default Header;