import React, { useCallback } from "react";

interface InputProps {
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  setRef?: React.LegacyRef<HTMLInputElement> | undefined;
}

const Input: React.FC<InputProps> = ({ onChange, setRef, ...rest }) => {
  const handleChangeInput = useCallback(
    (e: React.FormEvent<HTMLInputElement>): void => {
      onChange && onChange(e);
    },
    [onChange]
  );

  return (
    <input
      onChange={onChange ? handleChangeInput : undefined}
      ref={setRef}
      {...rest}
    />
  );
};

export default React.memo(Input);
