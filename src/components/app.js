import React from 'react';
import CommentBox from './commentBox';
import CommentList from './commentList';

const App = (props) => {
    return (  <div><CommentBox/>
        <CommentList/>
        </div>);
}
 
export default App;