import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from './ContextApi';


import ReachartsWeather from './ReachartsWeahter';



// &units=imperial






function SecondWeather() {
    const {temps, setTemps} = useContext(ThemeContext)


    const [data, setData] = useState({});
    const [location, setLocation] = useState('');
    const [count, setCount] =useState(0);
    const [devs,setDevs] = useState(['Moscow', 'London', 'Seoul', 'Tashkent', 'Stambul'])
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=070d5d04583a6ac070eb60163f484dbd`
  
  
  
  
    //const url = 'https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=070d5d04583a6ac070eb60163f484dbd'
    // const searchLocation = (event) => {
    //     if (event.key === 'Enter') {
    //         axios.get(url).then((response) => {
    //             setData(response.data)
    //             console.log(response.data);
    //         })
    //         setLocation('')
    //     }
    // }



    

    const searchLocation = evt => {
        if(evt.key === 'Enter'){
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=070d5d04583a6ac070eb60163f484dbd`)
            .then(res => res.json())
            .then(response => {
                setData(response);
                setLocation('');
                console.log(response);
            })
        }
    }




    useEffect(() => {
        setCount(count+1)
        if(count<devs.length){
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${devs[count]}&appid=070d5d04583a6ac070eb60163f484dbd`)
            .then(res => res.json())
            .then(response => {
                setTemps([...temps, {'temps':Math.round(response.main.temp - 273), 'id':devs[count]}])
            });
        }
        console.log(temps);
    }, [temps])
    
    
    console.log("top 5:", temps);

    return (
        <div className="app">
           <div>
           <div className='search'>
                <input
                    value={location}
                    onChange={event => setLocation(event.target.value)}
                    onKeyPress={searchLocation}
                    placeholder='Search location ...'
                    type="text"
                />
            </div>
            <div className='container'>
                <div className='top'>
                    <div className='location'>
                        <p>{data.name}</p>
                    </div>
                    <div className='temp'>
                        {data.main ? <h1>{Math.round(data.main.temp - 273)} °C</h1> : null}

                    </div>
                    <div className='description'>
                        {data.weather ? <p>{data.weather[0].main}</p> : null}

                    </div>
                </div>

                {data.name != undefined &&
                    <div className='bottom'>
                        <div className='feels'>
                            {data.main ? <p className='bold'>{Math.round(data.main.feels_like - 273)}°C</p> : null}
                            <p className='bold'>Feels Like</p>
                        </div>
                        <div className='humidity'>
                            {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
                            <p className='bold'>Humidity</p>
                        </div>
                        <div className='wind'>
                            {data.wind ? <p className='bold'>{data.wind.speed} MPH</p> : null}
                            <p className='bold'>Wind Speed</p>
                        </div>
                    </div>
                }
            </div>
           </div>
            <div className='rechart'>
            <ReachartsWeather />
            </div>
        </div>
    );
    
}
export default SecondWeather;