import './App.css';

function FancyBorder(props) {
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
      </div>
    );
  }

function App() {
    return ( 
        <div className = "App">
            <header className = "App-header" >
            Welcome to Sextant!
            </header> 

        </div>

    );
}

export default App;