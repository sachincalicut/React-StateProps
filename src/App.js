import React from 'react'
import ParentToChild from './ParentToChild/ParentToChild';
import ChildToParent from './ChildToParent/ChildToParent';

function App() {
  return (
    <div className="App">
        {/* Parent To Child */}
        <ParentToChild/>

        {/* Child to Parent */}
        <ChildToParent/>
    </div>
)
}

export default App;
