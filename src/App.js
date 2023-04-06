import "./App.css";
import {Configuration,OpenAIApi} from 'openai'
import OptionSelection from "./components/OptionSelection";
import { arrayItems } from "./AIOption";
import Translation from "./components/Translation";
import { useState } from "react";

function App() {
  const configuration = new Configuration({
    apiKey:process.env.REACT_APP_OPENAI_API_KEY,
  
  });

  const openai = new OpenAIApi(configuration)

  const [option, setOption] = useState({});
  const [input, setInput] = useState("");
  const [result,setResult] = useState('')

  const selectOption = (option) => {
    setOption(option);
  };

  const AskMe = async() => {
    let object={...option, prompt:input}
console.log(object,"line number 25")
    const response = await openai.createCompletion(object) 
    setResult(response.data.choices[0].text);
  };
 

  return (
    <div className="App">
      {Object.values(option).length === 0 ? (
        <OptionSelection arrayItems={arrayItems} selectOption={selectOption} />
      ) : (
        <Translation AskMe={AskMe} setInput={setInput} result={result} />
      )}
    </div>
  );
}

export default App;

// const API_KEY = process.env.REACT_APP_API_KEY;
// console.log(API_KEY);
// const API_KEY=`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`
