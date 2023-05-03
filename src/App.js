import './App.css';
import DrumPad from './components/DrumPad';
import { useState,useEffect } from "react"
import { soundKeys } from './constants/constants';


function App() {
  const [displayText, setDisplayText] = useState('')
  
  
  const handleKeyPress =(e) => {
    const id = e.key.toUpperCase()
    const audio = document.getElementById(id)
    const pad = document.getElementById(`drum-${id}`)

    if(audio) {
      pad.classList.add('active')
      setTimeout(() => {
        pad.classList.remove('active')
      },100)
    audio.currentTime=0
    audio.play()
    switch(id) {
      case 'Q':
        setDisplayText("HEATER 1")
        break
      case 'W':
        setDisplayText("HEATER 2")
        break
      case 'E':
        setDisplayText("HEATER 3")
        break
      case 'A':
        setDisplayText("HEATER 4")
        break
      case 'S':
        setDisplayText("CLAP")
        break
      case 'D':
        setDisplayText("OPEN HH")
        break
      case 'Z':
        setDisplayText("KICK N' HAT")
        break
      case 'X':
        setDisplayText("KICK")
        break
      case 'C':
        setDisplayText("CLOSED HH")
        break
      default:
        break
    }
    } 
    }
  
  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const onPlaySoundClick = (e) => {
    const sound = e.target.querySelector('audio')
    sound.play()
    switch(sound.id) {
      case 'Q':
        setDisplayText("HEATER 1")
        break
      case 'W':
        setDisplayText("HEATER 2")
        break
      case 'E':
        setDisplayText("HEATER 3")
        break
      case 'A':
        setDisplayText("HEATER 4")
        break
      case 'S':
        setDisplayText("CLAP")
        break
      case 'D':
        setDisplayText("OPEN HH")
        break
      case 'Z':
        setDisplayText("KICK N' HAT")
        break
      case 'X':
        setDisplayText("KICK")
        break
      case 'C':
        setDisplayText("CLOSED HH")
        break
      default:
        break
    }
  }
  
  
  

  return (
    <div>
      <div id="drum-machine" className='flex flex-wrap justify-center items-center w-[360px] bg-[#82ccdd] rounded-xl p-5 shadow-[2px_2px_5px_rgba(0,0,0,0.4)] border-[6px] border-[#f6b93b]'>
        <h1 id="display" className="w-full h-[60px] text-center bg-[#60a3bc] mb-3 text-[42px]" onKeyDown={handleKeyPress}>{displayText}</h1>
        {soundKeys.map((sound, index) => (
          <DrumPad text={sound.key} key={index} src={sound.sound} onPlaySoundClick={onPlaySoundClick} handleKeyPress={handleKeyPress}/>
        ))}
      </div>
    </div>
  );
}

export default App;
