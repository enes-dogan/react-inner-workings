import { useState } from 'react';
import { CounterHistoryProps } from '../../types.ts';
import { log } from '../../log.ts';

function HistoryItem({ count }: { count: number }) {
  log('<HistoryItem /> rendered', 3);

  const [selected, setSelected] = useState(false);

  function handleClick() {
    setSelected(prevSelected => !prevSelected);
  }

  return (
    <li onClick={handleClick} className={selected ? 'selected' : undefined}>
      {count}
    </li>
  );
}

export default function CounterHistory({ history }: CounterHistoryProps) {
  log('<CounterHistory /> rendered', 2);

  return (
    <ol>
      {history.map(count => (
        <HistoryItem key={count.id} count={count.value} />
      ))}
    </ol>
  );
}
