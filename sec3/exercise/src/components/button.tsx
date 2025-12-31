interface Props {
  children: string;
  onClick: () => void;
}

function Button({ children, onClick }: Props) {
  return (
    <button onClick={onClick} type="button" className="btn btn-primary">
      {children}
    </button>
  );
}

export default Button;
