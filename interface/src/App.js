import logo from './logo.svg';
import './App.css';

const DEBUG = true;

// todo: consider if we want to use an App class instead of a function :p
function getDataWithParams(url, params) {
  axios.get('http://your-flask-server-endpoint')
  .then(response => {
    // Handle the response from the server if needed
    if (DEBUG) {
      console.log("[DEBUG] Received following from GET Request:", response.data);
    }
  })
  .catch(error => {
    console.error('Unable to perform GET request.';
  });
}

function postDataWithParams(endpoint, params) {
  axios.post('http://your-flask-server-endpoint')
  .then(response => {
    // Handle the response from the server if needed
    if (DEBUG) {
      console.log("[DEBUG] Received following from POST Request:", response.data);
    }
  })
  .catch(error => {
    console.error('Unable to perform POST request.';
  });
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
