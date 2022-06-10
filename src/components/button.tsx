export type ButtonProps = {
  text: string;
  onClick: (...args: any) => any | void;
};

export const Button = (props: ButtonProps) => {
  const { onClick, text } = props;

  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  );
};
