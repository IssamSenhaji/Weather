

import React, { Component } from 'react'
import Form from './components/Form';
import Weather from './components/Weather';
import Image from './ch.jpg'

//const API_KEY="9fbdfc3fc4287690a3d3cf9992f59663"
const API_KEY="dbb067d527e0cea3af95a9beec8ca4cf"
// dbb067d527e0cea3af95a9beec8ca4cf
// https://api.openweathermap.org/data/2.5/weather?q=cairo,egypt&appid=dbb067d527e0cea3af95a9beec8ca4cf
// https://api.openweathermap.org/data/2.5/weather?q=martil&appid=9fbdfc3fc4287690a3d3cf9992f59663

class App extends Component {
  state={
    tempreature:'',
    city:'',
    country:'',
    humidity:'',
    description:'',
    error:''
  }
  getWeather=async(e)=>{
    e.preventDefault()
    const city =e.target.elements.city.value;
    const country =e.target.elements.country.value;
    const api=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
   
    const data=await api.json()
    console.log(data)

    if(city && country){
      this.setState({
        tempreature:data.main.temp,
        city:data.name,
        country:data.sys.country,
        humidity:data.main.humidity,
        description:data.weather[0].description,
        error:''
  
      })
      
      
    }else{
      this.setState({
        tempreature:'',
        city:'',
        country:'',
        humidity:'',
        description:'',
        error:'Please Enter Data'
      })
    }
    
  
  }
  render() {
    return (
      <div className='wrapper'>
        <div className='form-container'>
        <Form getweather={this.getWeather}/>
        <img src={Image} className="img" alt='#'/>
        <Weather 
          tempreature={this.state.tempreature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
          />
        </div>
        
      </div>
    )
  }
}
export default App;