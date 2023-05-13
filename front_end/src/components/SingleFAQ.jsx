import React, { useState } from "react";
import { ExpandLessOutlined, ExpandMoreOutlined } from "@mui/icons-material";

export default function SingleFAQ({ question, answer }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <article>
        <header
          onClick={toggleExpand}
          className="flex justify-between border-b border-gray-400 font-roboto cursor-pointer"
        >
          <p>{question}</p>
          {isExpanded ? <ExpandLessOutlined /> : <ExpandMoreOutlined />}
        </header>
        <footer
          className={`pl-0 text-justify ${
            isExpanded
              ? "max-h-96 transition-max-height ease-in-out duration-300"
              : "max-h-0 overflow-hidden transition-max-height ease-in-out duration-300"
          }`}
        >
          <p>{answer}</p>
        </footer>
      </article>
    </>
  );
}
