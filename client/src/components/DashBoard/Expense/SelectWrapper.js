import CreatableSelect from "react-select/creatable";
import React from "react";
import {
  setExpenseCategories,
  getExpenseCategories,
} from "../../../utils/localStorage";

const SelectExpenseWrapper = () => {
  const optionsHt = [
    "General",
    "Health",
    "Entertainment",
    "Shopping",
    "Travel",
    "Food",
  ].map((option) => ({ value: option, label: option }));

  const [options, setOptions] = React.useState(optionsHt);
  const [selectedOption, setSelectedOption] = React.useState(null);

  const handleCreateOption = (inputValue) => {
    const firstLetterUppercase =
      inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
    const newOption = {
      value: firstLetterUppercase,
      label: firstLetterUppercase,
    };
    const newOptions = [...options, newOption];

    setOptions(newOptions);
    setSelectedOption(newOption);

    // set options to local storage
    setExpenseCategories(newOptions);
  };

  React.useEffect(() => {
    const optionsLS = getExpenseCategories();
    if (!optionsLS) return;

    setOptions(optionsLS);
  }, []);

  return (
    <CreatableSelect
      name="expense-category"
      isClearable
      options={options}
      value={selectedOption}
      onChange={setSelectedOption}
      onCreateOption={handleCreateOption}
      placeholder="Select / Create Category"
      required
    />
  );
};

export default SelectExpenseWrapper;
