import { useState } from 'react'
import { DatePicker } from './components'

function App() {
  const [today, setToday] = useState(new Date())
  
  return <div className='p-4'>
    <DataPicker startDate={today} setStartDate={setToday} />
  </div>;
}

export default App;
