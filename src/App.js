import ProfileCard from './ProfileCard';
import alexaImage from './images/alexa.png';
import siriImage from './images/siri.png';
import cortanaImage from './images/cortana.png';
import 'bulma/css/bulma.css';

function App() {
  const siri = ['Siri', "Siri is made by apple and is being phased out", siriImage, "@siri01"];
  const alexa = ['Alexa', "Alexa was created by Amazon to help buy things", alexaImage, "@alexa99"];
  const google = ['Cortana', "Cortana is made by microsoft", cortanaImage, "@cortana32"];
  const profile = [siri, alexa, google];
  return (
    <div>
      <section className="hero is-primary">
        <div className='hero-body'>
          <p className='title'>Personal Digital Assistants</p>
        </div>
      </section>

      <div className='container'>
        <section className='section'>
          <div className='columns'>
          {profile.map((profile, index)=>{
  return <div className='column is-4'><ProfileCard name={profile[0]} intro={profile[1]} image={profile[2]} key={index} handle={profile[3]} /></div>
})}  
          </div>
        </section>

      </div>
    
    </div>
  );
}

export default App;
