import React from "react";
import Styles from "../../styles/scss/withdraw.module.scss";

interface PropsCheckbox {
  idCheckbox?: string;
  isChecked?: boolean;
  onChange?: (e: any) => void;
  classname?: string;
  nameCheckBox?: string;
}

const Checkbox: React.FC<PropsCheckbox> = ({
  classname,
  idCheckbox,
  isChecked,
  nameCheckBox = "",
  onChange,
}) => {
  return (
    <input
      className={`form-check-input checked:bg-white-600 checked:border-brown-600 float-left mt-1 mr-2 h-0 w-0 cursor-pointer appearance-none rounded-[0.1875rem] border-2  bg-contain bg-center bg-no-repeat align-top transition duration-200 focus:outline-none ${
        Styles.withdrawCheckbox
      } ${classname ? classname : "border-gray-800 bg-white"} p-[0.5625rem]`}
      type='checkbox'
      id={idCheckbox}
      name={nameCheckBox}
      checked={isChecked}
      onChange={onChange}
    />
  );
};

export default Checkbox;
