// import reactDOM from 'react-dom/client';
// import App from './app';
// function Index(){
//     return <App/>
// }

// const root =  reactDOM.createRoot(document.getElementById("root"));
// root.render(<Index/>);


import reactDOM from 'react-dom/client';
import { App } from './app';
function Index() {
    return <div>
        <App />
        <App />
        <App />
        <App />
    </div>
}

const root = reactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);