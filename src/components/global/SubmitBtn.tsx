import { useNavigation } from "react-router-dom";
import { Button } from "../ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";

type SubmitBtnProps = {
  text: string;
  className?: string;
};

const SubmitBtn = ({ text, className }: SubmitBtnProps) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Button type="submit" className={className} disabled={isSubmitting}>
      {isSubmitting ? (
        <span className="flex items-center">
          {" "}
          <ReloadIcon className="h-4 w-4 animate-spin mr-2" /> submitting...{" "}
        </span>
      ) : (
        text
      )}
    </Button>
  );
};
export default SubmitBtn;
