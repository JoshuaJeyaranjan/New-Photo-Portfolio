import * as React from 'react'
import Nav from '../../components/Nav/Nav';

// Props interface (if needed, you can define properties here)
export interface IAppProps {}

// Functional component
const App: React.FC<IAppProps> = (props) => {
  return (
    <>
    <Nav/>
      <p>I am the street page</p>
    </>
  );
};

export default App;
