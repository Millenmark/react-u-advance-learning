/* eslint-disable no-unused-vars */
import UseStateTuts from "./tutorial/useState/UseStateTuts";
import UseEffectTuts from "./tutorial/useEffect/UseEffectTuts";
import ConditionalRendering from "./tutorial/useEffect/ConditionalRendering";
import CleanUpFunc from "./tutorial/useEffect/CleanUpFunc";
import ControlledInputs from "./tutorial/Forms/ControlledInputs";
import UseRefTuts from "./tutorial/useRef/UseRefTuts";
import ToggleExample from "./tutorial/CustomHooks/SampleUseCase/ToggleExample";
import Navbar from "./tutorial/ContextAPI/Navbar";
import UseReducerTuts from "./tutorial/useReducer/UseReducerTuts";

function App() {
  return (
    <div className="container">
      {/* <UseStateTuts /> */}
      {/* <UseEffectTuts /> */}
      {/* <ConditionalRendering /> */}
      {/* <CleanUpFunc /> */}
      {/* <ControlledInputs /> */}
      {/* <UseRefTuts /> */}
      {/* <ToggleExample /> */}
      {/* <Navbar /> */}
      <UseReducerTuts />
    </div>
  );
}

export default App;
