export const Select = ({
  field_type,
  field_id,
  field_label,
  field_placeholder,
  field_value,
  field_options
}) => {
  return (
    <>
      <select class="form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
        {field_options.length> 0 && field_options.map((option, i) => 
          <option value={option.option_label} key={i}>{option.option_label}</option>
        )}
      </select>
    </>
  );
};