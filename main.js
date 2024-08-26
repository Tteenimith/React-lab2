


function App(){


    return (
        <div>
            <h1>Quick Start</h1>
            <p className='tagP'>Welcome to the React documentation! This page will give you an introduction to the 80% of React concepts that you will use on a daily basis.</p>
            <div className="border1">
                <h4>You will learn</h4>
                <ul>
                <li>How to create and nest components</li>
                <li>How to add markup and styles</li>
                <li>How to display data</li>
                <li>How to render conditions and lists</li>
                <li>How to respond to events and update the screen</li>
                <li>How to share data between components</li>
                </ul>
            </div>
        </div>
    )
}











ReactDOM.createRoot(document.querySelector('.root'))
.render(<App/>)