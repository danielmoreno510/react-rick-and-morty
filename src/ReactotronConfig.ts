import Reactotron from "reactotron-react-js";
import { reactotronRedux } from "reactotron-redux";
import sagaPlugin from "reactotron-redux-saga";

declare global {
  interface Console {
    tron: any;
  }
}

const reactotron = Reactotron.configure({ name: "Docred" })
  .use(reactotronRedux())
  .use(sagaPlugin({ except: [""] }))
  .connect();

// so you can use console.tron(var) anywhere, be careful when in production, this file is not loaded, console.tron not defined, sanitize
console.tron = reactotron.log!;

export default reactotron;
