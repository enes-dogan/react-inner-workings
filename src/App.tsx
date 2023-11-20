import { useState } from 'react';

import Header from './components/Header.tsx';
import ConfigureCounter from './components/Counter/ConfigureCounter.tsx';
import Counter from './components/Counter/Counter.tsx';
import { log } from './log.ts';

function App() {
  log('<App /> rendered');

  const [chosenCount, setChosenCount] = useState(0);

  function handleSetCount(newCount: number) {
    setChosenCount(newCount);
  }

  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSet={handleSetCount} />
        <Counter initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;
