import { useState } from "react";
import { useNavigate } from "react-router-dom";
interface LocationRequest {
    location: string;
  }
  
function Dashboard() {
    const navigate = useNavigate();
    const [locationdetails,setLocationdetails] = useState<string[]>([])
    const [location,setLocation] = useState("");
    async function searchLocation(){
        try {
            const data: LocationRequest = { location }; // Create a location object
            const response = await fetch('http://localhost:8080/locationData', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data), // Convert the location object to JSON
            });
      
            const responseData = await response.json();
            setLocationdetails(responseData);
            console.log(locationdetails);
            // Join array items for display
          } catch (error) {
            console.error('Error fetching location data:', error);
          }
    }
    return (
        <div className = "mt-5 justify-content-center col-sm-8">
                <form className ="input-group">
                    <input onChange = {(e) => setLocation(e.target.value)} type="text" className ="form-control" placeholder="Enter any State of India ...."></input>
                    <div className ="input-group-append">
                        <button onClick = {searchLocation} className ="btn btn-primary" type="button">Search</button>
                    </div>
                </form>
                <div className = "mt-5 row justify-content-center">
                    Temperature(Celsius) : {locationdetails[0]}<br></br>
                    Humidity(%) : {locationdetails[1]}<br></br>
                    Pressure(Pa) : {locationdetails[2]}<br></br>
                    Windspeed(km/hr) : {locationdetails[3]}
                </div>
        </div>
    )
}

export default Dashboard;