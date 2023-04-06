import React from "react";

export default function Translation({ AskMe, setInput,result }) {
  return (
    <div>
      <h3>
        <textarea
          className="text-area"
          cols={55}
          rows={3}
      
          onChange={(e) => setInput(e.target.value)}
        ></textarea>
        <br />
        <button className="action-btn" onClick={AskMe}>
          Ask Me?
        </button>
        <h3 className="result-text">{result.length>0 ?  result : " "}</h3>
      </h3>
    </div>
  );
}
