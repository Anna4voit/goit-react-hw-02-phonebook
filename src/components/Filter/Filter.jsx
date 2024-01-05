import css from './Filter.module.css';

export const Filter = ({ filter, changeFilter }) => (
  <label className={css.label}>
    Find contacts by name
    <input
      type="text"
      name="filter"
      value={filter}
      onChange={changeFilter}
      required
    />
  </label>
);
