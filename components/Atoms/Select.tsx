import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/solid";
import React, { Fragment } from "react";
import { OptionItem } from "@/interfaces";

interface SelectProps {
  className?: string;
  placeholder?: string;
  classNameButton?: string;
  error?: boolean;
  options: OptionItem[];
  selected: any;
  onChange: (e: any) => void;
  disabled: boolean;
}

const Select: React.FC<SelectProps> = ({
  className = "w-[9.5rem]",
  classNameButton = "",
  options = [],
  selected = "",
  onChange,
  error = false,
  placeholder = "",
  disabled = false,
}) => {
  return (
    <>
      <Listbox
        value={selected}
        onChange={(e) => onChange(e)}
        disabled={disabled}
      >
        <div className={`${className} relative`}>
          <Listbox.Button
            className={`${
              error && "border-site-red"
            } relative h-[1.875rem] w-full cursor-default border-2 bg-white py-0 pl-4 pr-10 text-left outline-none lg:h-10 ${classNameButton}`}
            autoFocus={false}
          >
            <span className="block truncate text-site-gray">
              {selected
                ? options[options.findIndex((val) => val.value == selected)]
                    ?.name
                : placeholder}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-[0.625rem] lg:pr-4">
              <ChevronDownIcon
                className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {options.map((optionItem, optionIndex) => (
              <Listbox.Option
                key={optionIndex}
                className={({ active }) =>
                  `relative cursor-default select-none p-2 ${
                    active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                  }`
                }
                value={optionItem.value}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate pl-[1.125rem] lg:pl-8 ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {optionItem.name}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-[0.375rem] text-amber-600 lg:pl-3">
                        <CheckIcon
                          className="h-4 w-4 lg:h-5 lg:w-5"
                          aria-hidden="true"
                        />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Transition>
        </div>
      </Listbox>
    </>
  );
};

export default Select;
