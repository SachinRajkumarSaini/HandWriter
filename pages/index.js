import React from 'react';
import TextToHandwriter from '../components/TextToHandwriter';
import ToolsInformation from '../components/ToolsInformation';

const Home = () => {
  return (
    <div style={{ backgroundColor: "#f8f9fb" }}>
      <TextToHandwriter />
      <ToolsInformation />
    </div>
  )
}

export default React.memo(Home);
