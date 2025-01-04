type SelectProductColorProps = {
  colors: Array<string>;
  productColor: string;
  setProductColor: React.Dispatch<React.SetStateAction<string>>;
};

const SelectProductColor = ({
  colors,
  productColor,
  setProductColor,
}: SelectProductColorProps) => {
  return (
    <div className="mt-6">
      <h4 className="text-md font-md tracking-wider capitalize">colors </h4>
      <div className="mt-2">
        {colors.map((color) => {
          return (
            <button
              key={color}
              onClick={() => setProductColor(color)}
              type="button"
              className={`rounded-full w-6 h-6 border-2 mr-2 ${
                color === productColor && "border-primary"
              }`}
              style={{ backgroundColor: color }}
            ></button>
          );
        })}
      </div>
    </div>
  );
};
export default SelectProductColor;
