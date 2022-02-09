import react, {useEffect, useState} from 'react'
import classNames from 'classnames'
import Timer from './view/timer/'
import Settings from './view/settings'
import  "./App.css"


const App = () => {
  const [isSetting, setIsSetting] = useState(false)
  const [settings, setSettings] = useState({
    workMinutes: 20,
    workSeconds: 0,
    breakMinutes:5,
    breakSeconds:0
  })
  
  const defaultClass = (isHover) => (isHover)?"menu_btn menu_btn--white":"menu_btn"; 
  useEffect(()=>{
    console.log(settings)
  }, [settings])

  return (
    <div className='contenaire'>
      {(isSetting)?(<Settings settings={settings} setSettings={setSettings}/>):(<Timer settings={settings}/>)}
      <div class="actionbar">
        <button className={defaultClass(!isSetting)}onClick={()=> setIsSetting(false)}></button>
        <button className={defaultClass(isSetting)} onClick={()=> setIsSetting(true)}></button>
      </div>
      
    </div>
  );
}

export default App;
