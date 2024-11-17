import { Separator } from "../ui/separator";

const SectionTitle = ({ text }: { text: string }) => {
  return (
    <div>
      <h2 className="text-3xl mb-8 font-medium capitalize tracking-wider">
        {text}
      </h2>
      <Separator />
    </div>
  );
};
export default SectionTitle;
