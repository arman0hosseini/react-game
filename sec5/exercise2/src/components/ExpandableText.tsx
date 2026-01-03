import { useState } from "react";

interface Props {
  maxChars?: number;
  children: string;
}

const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  const [isExpanded, setExpanded] = useState(false);
  function handleButton() {
    setExpanded(!isExpanded);
  }

  if (children.length <= maxChars) {
    return <p>{children}</p>;
  }

  const text = isExpanded ? children : children.substring(0, maxChars);

  return (
    <>
      <p>{text}...</p>
      <button onClick={handleButton}>
        {isExpanded ? "Show Less" : "Show More"}
      </button>
    </>
  );

  //   if (isExpanded) {
  //     return (
  //       <>
  //         <p>{children.substring(0, maxChars)}...</p>
  //         <button onClick={handleButton}>
  //           {isExpanded ? "Show More" : "Show Less"}
  //         </button>
  //       </>
  //     );
  //   } else {
  //     return (
  //       <>
  //         <p>{children}</p>
  //         <button onClick={handleButton}>
  //           {isExpanded ? "Show More" : "Show Less"}
  //         </button>
  //       </>
  //     );
  //   }
};

export default ExpandableText;
