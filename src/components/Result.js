// components/Result.js
import React from 'react';

const Result = ({ result }) => {
  const { annualConsumption, annualCost } = result;

  return (
    <div>
      {annualConsumption && annualCost ? (
        <>
          <h2>Odhadovaná roční spotřeba plynu a náklady</h2>
          <p>
            Roční spotřeba plynu: {annualConsumption.toFixed(2)} m³ (
            {((annualConsumption * 10.35) / 1000).toFixed(3)} MWh)
          </p>
          <p>Roční náklady na plyn: {annualCost.toFixed(2)} CZK</p>
        </>
      ) : (
        <p>Zadejte požadované informace a klikněte na "Vypočítat" pro zobrazení výsledků.</p>
      )}
    </div>
  );
};

export default Result;
