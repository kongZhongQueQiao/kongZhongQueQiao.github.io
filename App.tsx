import React from 'react';
import GestureTree from './components/GestureTree';

const App: React.FC = () => {
  return (
    <div className="relative w-full h-screen bg-black text-white overflow-hidden">
      <GestureTree />
    </div>
  );
};

export default App;