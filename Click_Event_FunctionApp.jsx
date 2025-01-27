

function App() {

  function Callfun() {
    alert("Function Called")
  }

  // arrow Function 

  let fruit = () => {
    let mes = alert("Apple");

  }

  // parmeter pass

  function names(name) {
    alert(name)
  }
  return (
    <>
      <h1> Event and Function in ReactJs</h1>
      <button onClick={Callfun}>Click me</button>
      <h1> Fruit Event in ReactJs</h1>
      <button onClick={fruit}>Click me</button>

      <h1> Students Names passed in parameter </h1>
      <button onClick={()=>names ("harshal")}>harshal</button>
      <button onClick={()=>names ("Bhavesh")}>Bhavesh</button>
      <button onClick={()=>names ("Ganesh")}>Ganesh</button>
    </>
  )
}

export default App;
