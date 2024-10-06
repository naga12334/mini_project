import React from 'react';
import { Hello, Welcome } from './Hello'; // 1

const App = () => {
  return (
    <div>
      <Hello />    {/* 2 */}
      <Welcome />  {/* 3 */}
    </div>
  );
}

export default App;
