import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './reducers'
const AppProvider = ({children})=>(
    <Provider store={createStore(rootReducer,{counter:0})}>
        {children}
    </Provider>
)

export default AppProvider