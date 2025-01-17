
import ProfWindow from './components/ProfWindow'
import Language from './components/Language'
import YesNoButtons from './components/YesNoButtons'
import profileImage from './assets/images.jpeg'
import ColorPicker from './components/ColorPicker'


function App() {
  let user = {
    img: profileImage,
    username: "alSheiy5h",
    role: "admin",
    bio: "creating random code, just remembring the react skills",
    contributions: 28,
    languages: [
      { name: "html", more: 50},
      { name: "css", more: 40},
      { name: "js", more: 60},
      { name: "python", more: 55},
      { name: "rust", more: 49},
      { name: "C", more: 20}
    ]
  }

  return (
    <div className='cards'>
      <ProfWindow user={user}/>
      <Language user={user}/>
      <YesNoButtons user={user}/>
      <ColorPicker />
    </div>
  )
}

export default App
