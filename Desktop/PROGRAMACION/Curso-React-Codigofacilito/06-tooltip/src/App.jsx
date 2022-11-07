import TooltipText from "./tooltip/TooltipText"

function App() {
  
  return (
    <div className="App">
      <p><TooltipText tooltip={"texto generado"}>Lorem ipsum</TooltipText> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <TooltipText tooltip={"Soy un texto"}>Academia</TooltipText></p>
    </div>
  )
}

export default App
