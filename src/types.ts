export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ComponentType<{ className?: string }>;
}

export interface ConfigureCounterProps {
  onSet: (newCount: number) => void;
}

export interface CounterHistoryProps {
  history: { id: number; value: number }[];
}
