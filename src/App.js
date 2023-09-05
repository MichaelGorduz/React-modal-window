import { useState } from 'react';
import './App.scss';
import Button from './button';
import Modal from './modal';

function App() {
  const [firstModalOpen, setFirstModalOpen] = useState(false);
  const [secondModalOpen, setSecondModalOpen] = useState(false);

  const openFirstModal = () => {
    setFirstModalOpen(true);
  };

  const openSecondModal = () => {
    setSecondModalOpen(true);
  };

  const closeFirstModal = () => {
    setFirstModalOpen(false);
  };

  const closeSecondModal = () => {
    setSecondModalOpen(false);
  };

  return (
    <div className="App">
      <Button
        backgroundColor="#007bff"
        text="Open first modal"
      onClick={openFirstModal}
      />

      <Button
        backgroundColor="#28a745"
        text="Open second modal"
        onClick={openSecondModal}
      />

{firstModalOpen && (
        <Modal
          header="First Modal"
          closeButton={true}
          text="This is the content of the first modal."
          actions={<Button backgroundColor="#007bff" text="Close" onClick={closeFirstModal} />}
          onClose={closeFirstModal}
        />
      )}

      {secondModalOpen && (
        <Modal
          header="Second Modal"
          closeButton={true}
          text="This is the content of the second modal."
          actions={<Button backgroundColor="#28a745" text="Close" onClick={closeSecondModal} />}
          onClose={closeSecondModal}
        />
      )}
    </div>
  );
}

export default App;

