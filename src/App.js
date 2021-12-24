import './App.css';
import Temperature from './components/temperature';

function App() {
    return (
        <div className="App">
        <header className="App-header">
            <h3>convert from fahrenheit to celsius</h3>
            <Temperature />
        </header>
        </div>
    );
}

export default App;
