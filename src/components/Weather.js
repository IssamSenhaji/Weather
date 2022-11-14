import React from 'react'

const Weather =(props)=>{
    const spitOutCelcius = (kelvin) => {
        const celcius = Math.round(kelvin - 273.15);
        return celcius;
    }
  
    return (
      <div className='info'>
         {
            props.country && 
            <p  className='info_key'>Country:
           <span className='info_value'> {props.country}</span>
            </p>
        }

        {
            props.city && 
            <p className='info_key'>City:
                <span className='info_value'>{props.city}</span>
            </p>
        }
       


        {
            props.tempreature && 
            <p className='info_key'>Tempreature:
                <span className='info_value'>{spitOutCelcius(props.tempreature)}&deg;C</span>
            </p>
        }
       
        {
            props.humidity &&
             <p  className='info_key'>Humidity:
                <span className='info_value'>{props.humidity}%</span>
             </p>
        }
        {
            props.description &&
             <p className='info_key'>Description:
                <span className='info_value'>{props.description}</span>
             </p>
        }
        {
            props.error && 
            <p  className='info_key'>Error:
                <span className='info_value'>{props.error}</span>
            </p>
        }
      </div>
    )
  }
export default Weather;
