import './App.css';
import React from 'react';

function App() {
  const [analise, setAnalise]  = React.useState({
    identification: ''  
  });

  React.useEffect(() => {
    
    debugger;
    const postOptions = {      
      method: 'POST',      
      headers: { 'Content-Type': 'application/json' },      
      body: { 'identification': '11102768774' }
    };

    const getOptions = {      
      method: 'GET'              
    };

    fetch("/analysis/proposal/",  getOptions)
    .then(res => res.json())
    .then(data => {     
      console.log(data);
      setAnalise(prevAnalise => ({...prevAnalise, identification: data.message}) );
    }).catch((error) => {
      console.log(error);
    }) 
  }, []);

    const element = <p>{analise.identification}</p>

  return (

    <div className="App">
      {element}
    </div>
  );
};


export default App;
