
import './App.css';
import Header from './componenets/Header';
import Middle from './componenets/Middle';
import React , {useState} from 'react';
import Alert from './componenets/Alert';
//import About from './componenets/About';
//import {BrowserRouter as Router,Route} from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light');
  const [alert , setAlert]=useState(null);
const showAlert=(message, type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(() => {
    setAlert(null);
  }, 1500);
}


   const toggleMode=()=>{
     if(mode==='light'){
     setMode('dark')
     document.body.style.backgroundColor='black';
     showAlert("dark mode enabled","success")
     }
     else{
       setMode('light')
       document.body.style.backgroundColor='white';
       showAlert("light mode enabled","success")
  
     }
   }
  
    return (
 
      <div className="App">
       <Header title="Textutils" mode={mode}  toggleMode={toggleMode}/>
       <Alert alert={alert}/>
      <div className='container'  >
       <Middle  mode={mode} showAlert={showAlert}/>
       </div>
      </div>
    
    );
  }
//remove <Alert alert={alert}/> to see result without alert
export default App;
