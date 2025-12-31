interface Props {
  text: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

function Button({ text, onClick, color = "primary" }: Props) {
  return (
    <button onClick={onClick} className={"btn btn-" + color}>
      {text}
    </button>
  );
}

export default Button;
