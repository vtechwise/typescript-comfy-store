import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type selectProps = {
  name: string;
  label?: string;
  options: string[];
  defaultValue?: string;
};

function FormSelect({ label, name, defaultValue, options }: selectProps) {
  return (
    <div>
      <Label className="capitalize " htmlFor={name}>
        {label}
      </Label>
      <Select defaultValue={defaultValue || options[0]} name={name}>
        <SelectTrigger id={name}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {options.map((item) => {
            return (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
}
export default FormSelect;
