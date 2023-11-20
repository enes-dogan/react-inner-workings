import { memo } from 'react';
import { IconButtonProps } from '../../types.ts';
import { log } from '../../log.ts';

const IconButton = memo(({ children, icon, ...props }: IconButtonProps) => {
  log('<IconButton /> rendered', 2);

  const Icon = icon;
  return (
    <button {...props} className="button">
      <Icon className="button-icon" />
      <span className="button-text">{children}</span>
    </button>
  );
});

export default IconButton;
