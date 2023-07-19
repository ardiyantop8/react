// import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client';
import App from './App'
import './index.css'

// ReactDOM.render(<App/>, document.querySelector("#root"))
const container = document.querySelector("#root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />)