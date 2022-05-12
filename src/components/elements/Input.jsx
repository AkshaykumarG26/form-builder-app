export const Input = ({
  field_type,
  field_id,
  field_label,
  field_placeholder,
  field_value,
}) => {
  return (
    <>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          {field_label}
        </label>
        <input
          type={field_type}
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder={field_placeholder ? field_placeholder : ""}
          // value={field_value}
        />
      </div>
    </>
  );
};
