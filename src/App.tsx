import React from 'react';
import './App.css';
import FarstRow from './component/farst-row/farstrow';
import FiveRow from './component/five-row/five';
import FourRow from './component/four-row/four';
import Menu from './component/menu/menu';
import SecondRow from './component/second-row/secondrow';
import SevenRow from './component/sevenrow/sevenrow';
import SixRow from './component/sixrow/sixrow';
import ThreeRow from './component/three-row/threerow';

function App() {
  return (
    <div className="mt-8">
    <Menu/>
    <FarstRow/>
    <SecondRow/>
    <ThreeRow/>
    <FourRow/>
    <FiveRow/>
    <SixRow/>
    <SevenRow/>
    </div>
  );
}

export default App;
