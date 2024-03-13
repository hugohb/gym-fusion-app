import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Chip from "@mui/material/Chip";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import Downshift from "downshift";

const useStyles = makeStyles((theme) => ({
  chip: {
    margin: theme.spacing(0.5, 0.25),
  },
}));

export default function TagsInput({ ...props }) {
  const classes = useStyles();
  const { selectedTags, placeholder, tags, ...other } = props;
  const [inputValue, setInputValue] = React.useState("");
  const [selectedItem, setSelectedItem] = React.useState([]);
  useEffect(() => {
    setSelectedItem(tags);
  }, [tags]);

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      const newSelectedItem = [...selectedItem];
      const duplicatedValues = newSelectedItem.indexOf(event.target.value.trim());

      if (duplicatedValues !== -1) {
        setInputValue("");
        return;
      }
      if (!event.target.value.replace(/\s/g, "").length) return;

      newSelectedItem.push(event.target.value.trim());
      setSelectedItem(newSelectedItem);
      setInputValue("");
      selectedTags(newSelectedItem);
    }
    if (selectedItem.length && !inputValue.length && event.key === "Backspace") {
      const newSelectedItem = selectedItem.slice(0, selectedItem.length - 1);
      setSelectedItem(newSelectedItem);
      selectedTags(newSelectedItem);
    }
  }
  const handleChange = (item) => {
    let newSelectedItem = [...selectedItem];
    if (newSelectedItem.indexOf(item) === -1) {
      newSelectedItem = [...newSelectedItem, item];
    }
    setInputValue("");
    setSelectedItem(newSelectedItem);
  };

  const handleDelete = (item) => () => {
    const newSelectedItem = [...selectedItem];
    newSelectedItem.splice(newSelectedItem.indexOf(item), 1);
    setSelectedItem(newSelectedItem);
    selectedTags(newSelectedItem);
  };

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }
  return (
    <Downshift
      id="downshift-multiple"
      inputValue={inputValue}
      onChange={handleChange}
      selectedItem={selectedItem}
    >
      {({ getInputProps }) => {
        const { onBlur, onChange, onFocus, ...inputProps } = getInputProps({
          onKeyDown: handleKeyDown,
          placeholder,
        });
        return (
          <div>
            <TextField
              onKeyPress={(e) => e.key === "Enter" && e.preventDefault()}
              InputProps={{
                startAdornment: selectedItem.map((item) => (
                  <Chip
                    key={item}
                    tabIndex={-1}
                    label={item}
                    className={classes.chip}
                    onDelete={handleDelete(item)}
                  />
                )),
                onBlur,
                onChange: (event) => {
                  handleInputChange(event);
                  onChange(event);
                },
                onFocus,
              }}
              {...other}
              {...inputProps}
            />
          </div>
        );
      }}
    </Downshift>
  );
}
TagsInput.defaultProps = {
  tags: [],
};
TagsInput.propTypes = {
  selectedTags: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};
