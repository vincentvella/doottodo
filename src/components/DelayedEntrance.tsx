import React from 'react';

type DelayedEntranceProps = {
  children: React.ReactNode;
  delay: number;
};

const DelayedEntrance: React.FC<DelayedEntranceProps> = ({ children, delay }) => {
  const [isShown, setIsShown] = React.useState(false);
  React.useEffect(() => {
    let isMounted = true;
    const timeout = setTimeout(() => {
      if (isMounted) {
        setIsShown(true);
      }
    }, delay);
    return () => {
      isMounted = false;
      clearTimeout(timeout);
    };
  }, [delay]);
  if (!isShown) return null;
  return <>{children}</>;
};

export default DelayedEntrance;
