import { useState, useEffect } from 'react'
import loader from './loader.gif'
import './App.css'

function App() {
	const [apiData, setApiData] = useState({})
	const [getState, setGetState] = useState(97223)
	const [state, setState] = useState(97223)

	const apiKey = process.env.REACT_APP_API_KEY;
	const apiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${state}&units=imperial&appid=${apiKey}`

	useEffect(() => {
		fetch(apiUrl)
			.then((res) => res.json())
			.then((data) => setApiData(data));
	}, [apiUrl])
	const inputHandler = (e) => {
		setGetState(e.target.value);
	}
	const submitHandler = (e) => {
		e.preventDefault();
		setState(getState);
	}

	return (
		<div className='container'>
			<div id='head-container'>
				<h1>How's the weather in<br /><span id='city' >{' '}{apiData.name}</span></h1>
			</div>
			<div id='form-container'>
				<form onSubmit={submitHandler}>
					<input type='number' onChange={inputHandler} value={getState} />
					<button>GO</button>
				</form>
			</div>
			<div id='weather-wrapper'>
				{apiData.main ? (
					<div id='weather-container'>
						<div className='weather-item'>
							<img
								src={`http://openweathermap.org/img/wn/${apiData.weather[0].icon}.png`}
								alt='Weather status icon'
								className='weather-icon'
							/>
							<p className='weather-value'>
								{' '}{apiData.weather[0].main}
							</p>
						</div>
						<div className='weather-item'>
							<i className="fas fa-thermometer-half weather-icon"></i>
							<p className='weather-value'>
								{' '}{parseInt(apiData.main.temp)}&deg;F
							</p>
						</div>
						<div className='weather-item'>
							<i className="fas fa-wind weather-icon"></i>
							<p className='weather-value'>
								{' '}{parseInt(apiData.wind.speed)}mph
							</p>
						</div>
						<div className='weather-item'>
							<i className="far fa-compass weather-icon"></i>
							<p className='weather-value'>
								{' '}{apiData.name},<br />{' '}{apiData.sys.country}
							</p>
						</div>
					</div>
				) : (
					<img src={loader} alt='Loading...' style={{ width: '64px', margin: 'auto', display: 'block' }} />
				)}
			</div>
			<div id='credit-container'>
				<p>
					<a href='https://github.com/kylewb94'><i className="fab fa-github"></i></a>
					<a href='https://www.linkedin.com/in/kylewb94/' style={{ paddingLeft: '1rem' }}><i className="fab fa-linkedin-in"></i></a>
				</p>
				<p>Powered by <a href='https://openweathermap.org/api'>OpenWeatherMap</a></p>
			</div>
		</div>
	)
}

export default App