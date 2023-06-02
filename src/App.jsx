import { useState, useEffect } from 'react'
import { DatePicker } from './components'

const birthday = new Date(2001, 1, 14)

function App() {
  const [today, setToday] = useState(new Date())
  const [selectedBirthday, setSelectedBirthday] = useState(false)

  useEffect(() => {
    if (
      today.getDate() === birthday.getDate() && 
      today.getMonth() === birthday.getMonth() &&
      today.getFullYear() === birthday.getFullYear()
    ) {
      setSelectedBirthday("Yayy, Happyyy Birthday !!! (^^)✨")
      return
    }
    setSelectedBirthday(false)
  }, [today])
  
  return <div className='p-4 flex flex-col gap-2'>
    <label htmlFor="date">Select Your birthday <span className="text-primary-red">*</span></label>
    <DatePicker startDate={today} setStartDate={setToday} />
    <h2>
      {selectedBirthday}
    </h2>
  </div>;
}

export default App;
