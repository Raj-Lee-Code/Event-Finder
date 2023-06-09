import React from 'react'

const card = ({id, type,date_event,location,performer,cheap,expensive,listings,address,extendedAddress, ClickHandler,lat,lon,venue,ticket }) => {
    let date_date = new Date(date_event).toDateString()
    let date_time = new Date(date_event).toLocaleTimeString()
    date_time = date_time.substring(0,9)+date_time.substring(17,date_time.length)
    let event_type = type.toUpperCase()
    event_type = event_type.replace(/_/g, " ")
    let cheapest_ticket = cheap.toLocaleString('en-US',{style:'currency', currency:'USD'})
    let expensive_ticket = expensive.toLocaleString('en-US',{style:'currency', currency:'USD'})
    let eventAddress = address+" "+extendedAddress
    let Lat = lat
    let Lon = lon
  return (
    <div className = "infoCard">
        <li key = {id}>
            <table>
                <tr>
                    <th>Type of Event</th>
                    <th>Event Date</th> 
                    <th>Event Time</th>
                    <th>Event Location</th>
                    <th>Performer</th>
                    <th>Cheapest available ticket price</th>
                    <th>Most expensive available ticket price</th>
                    <th>Amount of tickets available</th>
                    <th>Click for more event information</th>
                </tr>
                <tr>
                    <td>{event_type}</td>
                    <td>{date_date}</td>
                    <td>{date_time}</td>
                    <td>{location}</td>
                    <td>{performer}</td>
                    <td>{cheapest_ticket}</td>
                    <td>{expensive_ticket}</td>
                    <td>{listings}</td>
                    <td><button onClick={() => ClickHandler(id,eventAddress,Lat,Lon,venue,ticket)}>Click for more info</button></td>
                </tr>
                   
            </table>
        </li>
    </div>
  )
}

export default card