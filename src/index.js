import React from "react";
import { render } from 'react-dom';
import { AppContextProvider } from './context/AppContext';

import {App} from "./App";

render(
    <AppContextProvider>
      <App />
    </AppContextProvider>,
    document.getElementById('root')
  );
