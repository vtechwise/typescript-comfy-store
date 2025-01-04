import { Input } from "../ui/input";
import { Label } from "../ui/label";

type FormInputProps = {
  name: string;
  label?: string;
  type: string;
  defaultValue?: string;
};

function FormInput({ label, name, type, defaultValue }: FormInputProps) {
  return (
    <div>
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>
      <Input
        id="search"
        name={name}
        type={type}
        defaultValue={defaultValue}
        className="outline-none   focus:outline-none focus:border-none"
      />
    </div>
  );
}
export default FormInput;
