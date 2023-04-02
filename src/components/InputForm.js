// components/InputForm.js
import React, { useState } from 'react';
const InputForm = ({ onSubmit }) => {
    const [month, setMonth] = useState('');
    const [startReading, setStartReading] = useState('');
    const [endReading, setEndReading] = useState('');
    const [pricePerMWh, setPricePerMWh] = useState('');
  
    const monthsInCzech = [
      { value: 'January', label: 'Leden' },
      { value: 'February', label: 'Únor' },
      { value: 'March', label: 'Březen' },
      { value: 'April', label: 'Duben' },
      { value: 'May', label: 'Květen' },
      { value: 'June', label: 'Červen' },
      { value: 'July', label: 'Červenec' },
      { value: 'August', label: 'Srpen' },
      { value: 'September', label: 'Září' },
      { value: 'October', label: 'Říjen' },
      { value: 'November', label: 'Listopad' },
      { value: 'December', label: 'Prosinec' },
    ];
  
    return (
      <form onSubmit={e => onSubmit(e, { month, startReading, endReading, pricePerMWh })}>
        <div>
          <label htmlFor="month">Měsíc:</label>
          <select id="month" value={month} onChange={e => setMonth(e.target.value)} required>
            <option value="">-- Vyberte měsíc --</option>
            {monthsInCzech.map((m, index) => (
              <option key={index} value={m.value}>
                {m.label}
              </option>
            ))}
          </select>
        </div>  
        <div>
        <label htmlFor="startReading">Počáteční stav plynoměru:</label>
        <input type="number" id="startReading" value={startReading} onChange={e => setStartReading(e.target.value)} required />
        </div>
        <div>
            <label htmlFor="endReading">Koncový stav plynoměru:</label>
            <input type="number" id="endReading" value={endReading} onChange={e => setEndReading(e.target.value)} required />
        </div>
        <div>
            <label htmlFor="pricePerMWh">Cena za MWh:</label>
            <input type="number" id="pricePerMWh" value={pricePerMWh} onChange={e => setPricePerMWh(e.target.value)} required />
        </div>
        <button type="submit">Vypočítat</button>
    </form>
    );
};



export default InputForm;
