import { useState } from 'react';
import { JourneyPicker } from '../../components/JourneyPicker';
import { JourneyDetail } from '../../components/JourneyDetail';
import { SelectedSeat } from '../../components/SelectedSeat';

export const HomePage = () => {
  const [journey, setJourney] = useState(null);

  const handleJourneyChange = (journeyData) => {
    setJourney(journeyData);
  };

  const handleBuy = async () => {

    const resp = await fetch('https://apps.kodim.cz/daweb/leviexpress/api/reservation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'create',
        seat: journey.autoSeat,
        journeyId: journey.journeyId,
      }),
    });
    const data = await resp.json();
    console.log(data.results.reservationId)
  }
  
  

  return (
    <main>
      <JourneyPicker value={journey} onJourneyChange={handleJourneyChange} />
      {journey !== null ? <JourneyDetail journey={journey} /> : ''}
      {journey !== null ? <SelectedSeat number={journey.autoSeat} /> : ''}

      <div className="controls container">
      <button className="btn btn--big" type="button" onClick={handleBuy}>Rezervovat</button>
      </div>

    </main>
  );
};
