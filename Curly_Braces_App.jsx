import ToDo from './ToDo'
function App() {

  const name = "harshal Tamboli";
  let x = 10;
  let y = 20;

  return (
    <>
      <h1>{name}</h1>
      <h1>{x + y}</h1>
      <ToDo />
    </>
  )
}

export default App;
