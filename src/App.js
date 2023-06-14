import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import { useState} from 'react';
import User from './User';
import ProfileCard from './ProfileCard';
import Siri from './images/siri.png';
import Cortana from './images/cortana.png';
import Alexa from './images/alexa.png'

console.log(Siri); //55kb
console.log(Alexa); //4kb

var shoppingList = ["milk", "eggs", "shoes", "butter", "bread", "Omlette", "Brush", "Toothpaste"];

function App() {
  const name = 'Billionaire - Mudit Arora'
  const companyName = 'Grand Events'
  const [isHovering, setIsHovering] = useState(false);
  function NestedComponent() {
    return <div>We can use One component inside another component</div>
  }
  function onClickMessage() {
    console.log("I am clicked");
    }

  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  }
  
  return (
    <div className="App">
      <User />
      <img src = {Cortana} />
      <h2>This application is created by {name} in association with {companyName} </h2>
      <h1>The time Now is {new Date().toLocaleTimeString()}</h1>
      <User />
      <Input />
      {NestedComponent()}
      <br></br>
      <div className='is-family-sans-serif'>*************************************************************IMAGE CONCEPTS FROM UDEMY - STEPHEN GRIDER***********************************************************</div>
      <div> 
      <section className='hero is-primary'>
        <div className='hero-body'>
      <div className='is-size-4 has-text-weight-bold '>Personal Digital Assistants</div>
      </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard title = "Alexa" handle="@alexa99" image={Alexa} description="Alexa is Amazon's cloud-based voice service available on more than 100 million devices from Amazon and third-party device manufacturers. With Alexa, you can build natural voice experiences that offer customers a more intuitive way to interact with the technology they use every day." />
            </div>
            <div className="column is-4">
             <ProfileCard title = "Siri" handle="@siri01" image={Siri} description="Siri is Apple's virtual assistant for iOS, macOS, tvOS and watchOS devices that uses voice recognition and is powered by artificial intelligence (AI)." />
            </div>
            <div className="column is-4">
      <ProfileCard title = "Cortana" handle="@cortana32" image={Cortana} description="Cortana is Microsoft's personal productivity assistant that helps you save time and focus attention on what matters most. To get started, select the Cortana icon on the taskbar. If you're not sure what to say, try asking" />

            </div>
            </div>
        </section>
      </div>
      </div>
      <div className='App'>
      <h1 className="has-text-weight-bold is-size-4">Hey Mudit! These are various Buttons!</h1>
      <br></br>
      <div className='has-text-centered' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
           
      <button title="ClickMe" onMouseOver={handleMouseOver} onMouseDown={handleMouseOut} className="mx-* button is-black" onClick={onClickMessage}> ClickMe</button>
      <button title="Info" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} class="button is-info " description="This is a Info Button">Info</button>
      <button title="Success" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} class="button is-success">Success</button>
      <button title="Warning" class="button is-warning">Warning</button>
      <button title="Danger" class="button is-danger">Danger</button>
 
      </div>

      <h1>Print my shopping list</h1>
      <ul>
        {
          shoppingList.map(function(item){
            console.log(item)
            return <li> {item} </li>
          })
        }
      </ul>

      </div>
    </div>

  );
}


function Input() {
  return <textarea style = {{border : '2px solid' }}autoFocus = {true} maxLength={5}/>;
  //return <input spellCheck={false} />
  // you need to miss the most important components of the Tanisha Industries.
  // SANTAN OVERSEAS PRIVATE LIMITED
  // M4 Group Of Industries Panipat 
  // 
}

export default App;

