import React, { useEffect }  from 'react' //Importing UseEffect from react
import Game from './components/game' //importing Game.js file fom Components folder

const App = () => {
    useEffect(() => {
        document.title = "TIC TAC TOE"
    }, [])
    //Bellow is the styling of App component
    const mystyle={
        background:"blue",
        fontSize: "45px",
        textAlign:"center",
        fontWeight: "800",
      };
    return(
        <div style={mystyle}>
            <div>TIC TAC TOE</div>
            <div><Game/></div>
        </div>
    ); 
}
export default App;