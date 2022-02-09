import React, {useCallback, useState} from 'react'

const Settings = ({settings, setSettings})=> {
    const [workMinute, setWorkMinute] = useState(settings.workMinutes)
    const [workSecond, setWorkSecond] = useState(settings.workSeconds)
    const [breakMinute, setBreakMinute] = useState(settings.breakMinutes)
    const [breakSecond, setBreakSecond] = useState(settings.breakSeconds)

    const save = () => setSettings(()=>{

            return {
               workMinutes: workMinute,
               workSeconds: workSecond,
               breakMinutes: breakMinute,
               breakSeconds: breakSecond
            }
        })
  return (
        <div class="setting">  
            <h5>temps de travaile : </h5>
            <div class="setting_work">
                <input type="number" name="workMinute"  onChange={(e)=>setWorkMinute(parseInt(e.target.value)) } value={workMinute} />
                <span> : </span>
                <input type="number" onChange={(e)=>setWorkSecond(parseInt(e.target.value))} value={workSecond}/> 
            </div>
            <h5>temps de pause : </h5>
            <div class="setting_break">
                <input type="number" onChange={(e)=>setBreakMinute(parseInt(e.target.value))} value={breakMinute}/>
                <input type="number" onChange={(e)=>setBreakSecond(parseInt(e.target.value))} value={breakSecond}/>
            </div>
            <button onClick={save}>save</button>
        </div>
  )
}

export default Settings;