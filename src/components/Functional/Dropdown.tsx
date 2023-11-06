import { useState } from "react";

export const Dropdown = (props: {
  options: string[];
  initialValue?: string;
  onChange: (value: string) => void;
}) => {
  const [current, setCurrent] = useState(
    props.initialValue ?? props.options[0]
  );
  const [open, setOpen] = useState(false);

  const renderOptions = () => {
    const handleClick = (option: string) => {
      setOpen(false);
      setCurrent(option);

      props.onChange(option)
    };

    const restOptions = props.options.filter((option) => option !== current);
    return restOptions.map((option) => (
      <button
        onClick={() => {
          handleClick(option);
        }}
      >
        {option}
      </button>
    ));
  };

  return (
    <div className="">
      <button
        className="border-2 border-neutral-text py-2 px-4"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {current}
      </button>
      <div className={"border-2 border-neutral-text " + (open ? "" : "hidden")}>
        {renderOptions()}
      </div>
    </div>
  );
};
