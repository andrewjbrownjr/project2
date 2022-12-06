import logo from './logo.svg';
import './App.css';
import Chart from 'chart.js/auto';
import {ScatterChart} from './ScatterChart'

async function getCensusData() {
  fetch ("https://api.census.gov/data/2020/dec/pl?get=NAME&P1_001N&for=COUNTY:*&key=e5e4b322e57046dac2afb3d07b8f7d9df48fc197",{
      method: "GET",
      searchParams: {"year":"2020"}
  })
  .then((response)=> { response.json()
  .then(data=> {
    console.log(data);
    return data;})});
}

async function getNYData() {
  fetch ("https://data.ny.gov/resource/rikd-mt35.json?year=2020",{
      searchParams: {"year":"2020"},
      method: "GET",
  })
  .then((response)=> { return response.json()
  .then((data)=> {
    console.log(data);
    return data;})});
}

function App() {
  getCensusData();
  getNYData();
  return (
    <div className="App">
      <ScatterChart />
    </div>
  );
}

export default App;
