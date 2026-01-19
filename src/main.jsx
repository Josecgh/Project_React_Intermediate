import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux"
import taskReducer from './reducers/taskReducer.js'
import { createStore } from 'redux'

const store = createStore(taskReducer)

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  // </StrictMode>,
)
