import { Select } from "./elements/Select";
import { Input } from "./elements/Input";
import { Checkbox } from "./elements/Checkbox";
import { Button } from "./elements/Button";

export const Form = ({
  field: { field_type, field_id, field_label, field_placeholder, field_value, field_options },
}) => {
  // console.log({ field: { field_type } });
  switch (field_type) {
    case "text":
      return (
        <Input
          field_id={field_id}
          field_label={field_label}
          field_placeholder={field_placeholder}
          field_value={field_value}
        />
      );
    case "select":
      return (
        <Select
          field_id={field_id}
          field_label={field_label}
          field_placeholder={field_placeholder}
          field_value={field_value}
          field_options={field_options}
        />
      );
    case "checkbox":
      return (
        <Checkbox
          field_id={field_id}
          field_label={field_label}
          
          field_value={field_value}
        />
      );
    case "button":
      return <Button />;
    case "password":
      return (
        <Input
          field_id={field_id}
          field_label={field_label}
          field_placeholder={field_placeholder}
          field_value={field_value}
        />
      );
    case "email":
      return (
        <Input
          field_id={field_id}
          field_label={field_label}
          field_placeholder={field_placeholder}
          field_value={field_value}
        />
      );
    default:
      break;
  }
};
