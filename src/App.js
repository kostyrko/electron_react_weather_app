
import './App.css';
import ReactWeather, { useOpenWeather } from 'react-open-weather';


function App() {
  // const { data, isLoading, errorMessage } = useOpenWeather({
  //   key: 'place_Api_key_here',
  //   lat: '1.2921',
  //   lon: '36.8219',
  //   lang: 'en',
  //   unit: 'metric', // values are (metric, standard, imperial)
  // });
  return (
    <div className="App">
      LOL
      {/* <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel="Nairobi"
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast
      /> */}
    </div>
  );
}

export default App;
