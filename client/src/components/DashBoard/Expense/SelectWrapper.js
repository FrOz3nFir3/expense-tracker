import CreatableSelect from 'react-select/creatable';
import React from 'react';

const SelectWrapper = () => {
    // get this options from backend or local storage
    const [options, setOptions] = React.useState([
        {
            value: "General",
            label: "General"
        },
        {
            value: "health",
            label: "Health"
        },
        {
            value: "entertainment",
            label: "Entertainment"
        },
        {
            value: "shopping",
            label: "Shopping"
        },
        {
            value: "travel",
            label: "Travel"
        },
        {
        value: "food",
        label: "Food"
        }
    ]);
    const [selectedOption, setSelectedOption] = React.useState(null);

    const handleCreateOption = (inputValue) => {
        setOptions([...options, { value: inputValue, label: inputValue }]);
        setSelectedOption({ value: inputValue, label: inputValue });
    }

    return (
        <CreatableSelect
            name="expense-category"
            isClearable
            options={options}
            value={selectedOption}
            onChange={setSelectedOption}
            onCreateOption={handleCreateOption}
            placeholder="Select Category"
            required
        />
    );
}

export default SelectWrapper;