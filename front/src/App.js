import './App.css';
import React from 'react';

function App() {
  const [analise, setAnalise]  = React.useState({
    identification: ''  
  });

  React.useEffect(() => {
    fetch("/analysis?identification=11102768774")
    .then(res => res.json())
    .then(data => { 
      debugger;
      console.log(data);
      setAnalise((prevAnalise) => ({...prevAnalise, identification: data}) );
    });    
  }, []);

  return (

    <div className="App">
      {analise && <p>{analise.identification}</p>}
    </div>
  );
}

export default App;
