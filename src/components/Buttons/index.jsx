export default function Buttons({increment,decrement,reset}){
return (<div style={{display:"flex", justifyContent:"space-around"}}>
    <button onClick={()=>increment()}>+</button>
    <button onClick={()=>reset()}>Reset</button>
    <button onClick={()=>decrement()}>-</button>
</div>);
}
