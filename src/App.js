// App.js
import React from 'react';
import './App.css';
import InputForm from './components/InputForm';
import Result from './components/Result';

function App() {
  const [result, setResult] = React.useState({});


  const handleSubmit = (e, { month, startReading, endReading, pricePerMWh }) => {
    e.preventDefault();

    console.log(month, startReading, endReading, pricePerMWh);

    // Input validation and error handling should be added here

    const hddValues = {
      January: 550,
      February: 480,
      March: 390,
      April: 250,
      May: 120,
      June: 50,
      July: 20,
      August: 30,
      September: 100,
      October: 250,
      November: 380,
      December: 530,
    };

    const monthName = month;

    const monthlyHdd = hddValues[monthName];

    const gasConsumption = endReading - startReading;

    console.log(monthlyHdd, gasConsumption);

    const hddRatio = monthlyHdd / 4000; // Assuming 4000 as the annual HDD value for Prague

    // Estimate the annual gas consumption
    const annualConsumption = gasConsumption / hddRatio;

    // Estimate the annual cost of gas consumption
    const annualEnergyConsumptionMWh = annualConsumption * 10.35 / 1000;
    const annualCost = annualEnergyConsumptionMWh * pricePerMWh;

    console.log(annualConsumption, annualCost);

    // Update the result state
    setResult({
      annualConsumption,
      annualCost,
    });
  };


  return (
    <div className="App">
      <h1>Odhad spotřeby plynu</h1>
      <InputForm onSubmit={handleSubmit} />
      <Result result={result} />

      <div className="footer">
        <p className="footnote">
        Odhad je založen na HDD (heating degree days) a spotřebě plynu za měsíc v Praze. Skutečné hodnoty mohou lišit
        v závislosti na mnoha faktorech, jako jsou teploty, účinnost topného systému, izolace domu a chování obyvatel.
        </p>
      </div>

    </div>
  );
}

export default App;
