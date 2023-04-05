import React from "react";
import { useLocation} from 'react-router-dom'
import Map from '../components/map'
import { useNavigate} from 'react-router-dom'

function DetailPage(){
    const redirect = useNavigate();

    const handleClick = () => {
        redirect('/',)
      }
    const location = useLocation();
    return(
    <div className="buttonPage">
        <div className="detailPage">
            <h1 className="Title">Event Details!</h1>
            <div>Venue Name: {location.state.Venue}</div>
            <div>Event Address: {location.state.address}</div>
            <a href={location.state.Ticket}>
                Buy your tickets here
            </a>
            <p>Location of Venue on Map:</p>
            <Map
                lat = {location.state.latitude}
                lon = {location.state.longitude}
            />
            
        </div>
        <button onClick={handleClick}>Return to Home Page</button>
    </div>
    )
}

export default DetailPage;