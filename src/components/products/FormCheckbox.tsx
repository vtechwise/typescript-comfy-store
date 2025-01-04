import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

type FormCheckboxProps = {
  name: string;
  label?: string;
  defaultValue?: string;
};

const FormCheckbox = ({ name, label, defaultValue }: FormCheckboxProps) => {
  const defaultChecked = defaultValue === "on" ? true : false;

  return (
    <div className="mb-2 justify-between flex self-end">
      <Label htmlFor={name}>{label}</Label>
      <Checkbox id={name} defaultChecked={defaultChecked} name={name} />
    </div>
  );
};
export default FormCheckbox;
