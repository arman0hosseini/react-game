import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

interface Props {
  onClick: () => void;
}

function Icon({ onClick }: Props) {
  const [status, setStatus] = useState(false);
  function toggle() {
    setStatus(!status);
    onClick();
  }

  if (status) {
    return <FaHeart color="red" size={50} onClick={toggle}></FaHeart>;
  } else {
    return <CiHeart size={50} onClick={toggle}></CiHeart>;
  }
}

export default Icon;
