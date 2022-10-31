import ReactLogo from "./assets/react.svg"
import data from "./helper/data"
import Card from "./components/Card"
import "./App.css"
import "./components/Card.css"

function App() {
  return (
  <div className="container">
      <header className='header'>
        <img src={ReactLogo} alt="reactlogo" />
      </header>
      <main className='main'>
        <h1>Languages</h1>
        <div className='cards'>
          {data.map ((item,index) => <Card {...item} keys={index} />)}
        </div>
      </main>
  </div>
  );
}

export default App;