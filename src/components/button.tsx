
export type ButtonProps = {

	text: string,
	onClick: (args: any)  => {}

}

export const Button = (props:ButtonProps) => {

	const { onClick, text } = props;


  return <button className="button" onClick={onClick}>{text}</button>;

};
