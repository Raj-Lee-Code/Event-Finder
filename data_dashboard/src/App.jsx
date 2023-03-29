import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  const [list, setList] = useState(null);
  const [city, setCity] = useState("")


  useEffect(() => { const fetchAllSeats = async () => {
      const response = await fetch(`https://api.seatgeek.com/2/events?listing_count.gt=0&page=1&client_id=MzI2ODczMjh8MTY4MDAyMTQ0Ni40NDQ0MTAz`);
      const json = await response.json();
      setList(json);
    
    }
    fetchAllSeats().catch(console.error);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch(`https://api.seatgeek.com/2/events?listing_count.gt=0&venue.city=${city}&page=1&client_id=MzI2ODczMjh8MTY4MDAyMTQ0Ni40NDQ0MTAz`)
    const json = await response.json()
    if (json.meta.total === 0) {
      alert(`No events found in ${city}`)
    }
    setList(json)
  }
  


  return (
    <>
    <div className="App">
      <img src='.\src\assets\singer.png' className='logo'/>
      <h1>Event Finder!</h1>
    </div>
    <div className='searchBar'>
      <form onSubmit={handleSubmit}>
        <input type="text" id="citySearch" name="citySearch" size="30" placeholder='Search events in specific city' onChange={(e) => {setCity(e.target.value)}}/>
        <input type="submit" value = 'Search for city'/>
      </form>
    </div>
    <div className='infoDiv'>
      <ul>

        {list && Object.entries(list.events).map(([seat]) => 
                
                <Card 
                  id = {list.events[seat].id} 
                  type = {list.events[seat].type}
                  date_event = {list.events[seat].datetime_utc}
                  location = {list.events[seat].venue.display_location}
                  performer = {list.events[seat].performers[0].name}
                  cheap = {list.events[seat].stats.lowest_price}
                  expensive = {list.events[seat].stats.highest_price}
                  listings = {list.events[seat].stats.listing_count} 
                />
          )
        }

      </ul>
    </div>
    </>
  )
}

export default App
