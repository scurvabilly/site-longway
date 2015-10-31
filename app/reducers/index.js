import { combineReducers} from 'redux';
import segmentEditor from './segmentEditor';

// Bundle all of our reducers into a single root reducer
const rootReducer = combineReducers({
  segmentEditor
});

export default rootReducer;
