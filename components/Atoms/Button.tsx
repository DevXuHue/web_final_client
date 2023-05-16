import React, { useCallback } from "react";

interface PropsButton {
  setRef?: React.LegacyRef<HTMLButtonElement> | undefined;
  children?: React.ReactNode | string;
  className?: string;
  onClick?: (e: React.FormEvent<HTMLButtonElement | HTMLInputElement>) => void;
}

const Button: React.FC<PropsButton> = ({
  onClick,
  setRef,
  children,
  ...rest
}) => {
  const handleClickButton = useCallback(
    (e: React.FormEvent<HTMLButtonElement | HTMLInputElement>): void => {
      onClick && onClick(e);
    },
    [onClick]
  );

  return (
    <button onClick={() => handleClickButton} ref={setRef} {...rest}>
      {children}
    </button>
  );
};

export default React.memo(Button);
