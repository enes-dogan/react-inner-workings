import { IconButtonProps } from '../../types.ts';
import { log } from '../../log.ts';

export default function IconButton({
  children,
  icon,
  ...props
}: IconButtonProps) {
  log('<IconButton /> rendered', 2);

  const Icon = icon;
  return (
    <button {...props} className="button">
      <Icon className="button-icon" />
      <span className="button-text">{children}</span>
    </button>
  );
}
