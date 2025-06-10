import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive" )

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >

    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button onClick={()=> setColor('red')}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"red"}}
        >Red</button>

        <button onClick={()=> setColor('lightgreen')}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"lightgreen"}}
        >green</button>

        <button onClick={()=> setColor('pink')}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"pink"}}
        >pink</button>

        <button onClick={()=> setColor('lightblue')}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"lightblue"}}
        >blue</button>
      </div>
    </div>
    </div>
  )
}

export default App


// Rendering: Converting your React components (JSX/JavaScript) 
// into real DOM elements that the browser can understand and display.
// Example:

// You write JSX in your component:
//           function Welcome() {
//             return <h2>Welcome to React!</h2>;
//           }

// You mount it using:
//           const root = createRoot(document.getElementById('root'));
//           root.render(<Welcome />);   

//React transforms the JSX into:
//           <h2>Welcome to React!</h2>

// And inserts it into the HTML DOM like this:
//          <div id="root">
//             <h2>Welcome to React!</h2>
//          </div>          

// Rendering = turning your React code (JSX) into visible UI in the browser.
// Types of Rendering in React
// Re-rendering
// Client-side Rendering
// Server-side Rendering
// Initial Rendering