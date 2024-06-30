import React, { useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "./index.css"; // Ensure Tailwind is imported

const CodeEditor = () => {
  const [code, setCode] = useState('');

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  return (
    <div className="relative w-full h-96 bg-gray-100 rounded-md shadow-md">
      <pre
        className="absolute top-0 left-0 w-full h-full m-0 pointer-events-none whitespace-pre-wrap break-words p-4 rounded-md overflow-hidden"
        dangerouslySetInnerHTML={{ __html: Prism.highlight(code, Prism.languages.javascript, 'javascript') }}
      />
      <textarea
        className="absolute top-0 left-0 w-full h-full bg-transparent text-transparent caret-black border-none outline-none resize-none font-mono whitespace-pre-wrap break-words p-4 rounded-md"
        value={code}
        onChange={handleChange}
        spellCheck="false"
      />
    </div>
  );
};

export default CodeEditor;
