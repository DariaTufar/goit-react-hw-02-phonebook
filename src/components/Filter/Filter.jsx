import PropTypes from 'prop-types';
import { FilterTitle, FilterInput } from './Filter.styled';

export const Filter = ({ handleUpdateFilter, filterValue }) => (
  <div>
    <FilterTitle>Find contacts by name</FilterTitle>
    <FilterInput
      name="filter"
      onChange={handleUpdateFilter}
      value={filterValue}
    ></FilterInput>
  </div>
);


Filter.propTypes = {
    handleUpdateFilter: PropTypes.func.isRequired,
    filterValue: PropTypes.string.isRequired,
};