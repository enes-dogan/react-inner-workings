import { useState } from 'react';
import { ConfigureCounterProps } from '../../types.ts';
import { log } from '../../log.ts';

function ConfigureCounter({ onSet }: ConfigureCounterProps) {
  log('<ConfigureCounter /> rendered', 1);

  const [enteredNumber, setEnteredNumber] = useState(0);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEnteredNumber(+event.target.value);
  }

  function handleSetClick() {
    onSet(enteredNumber);
    setEnteredNumber(0);
  }

  return (
    <section id="configure-counter">
      <h2>Set Counter</h2>
      <input type="number" onChange={handleChange} value={enteredNumber} />
      <button onClick={handleSetClick}>Set</button>
    </section>
  );
}

export default ConfigureCounter;
