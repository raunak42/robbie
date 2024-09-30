import React, { useState, useEffect } from "react";

interface KeyboardKeyProps {
  children: React.ReactNode;
}

const KeyboardKey: React.FC<KeyboardKeyProps> = ({ children }) => (
  <div className="w-10 h-10 border border-[#E0FF00] flex items-center justify-center rounded-md text-[#E0FF00] font-bold">
    {children}
  </div>
);

interface IntroModalProps {
  onClose: () => void;
}

const IntroModal: React.FC<IntroModalProps> = ({ onClose }) => {
  const [timeLeft, setTimeLeft] = useState<number>(10);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      onClose();
    }
  }, [timeLeft, onClose]);

  const handleStartMission = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4">
      <div className="bg-black border-2 border-[#E0FF00] rounded-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[#E0FF00] text-2xl font-bold tracking-wider">
            MEET ROBBIE
          </h2>
          <div
            className={` ${
              timeLeft < 10 && "animate-ping"
            } w-10 h-10 border border-[#E0FF00] rounded-full flex items-center justify-center text-[#E0FF00] font-bold`}
          >
            {timeLeft}
          </div>
        </div>
        <div className="space-y-4 text-[#E0FF00] font-mono">
          <p className="text-lg">
            Guide Robbie&apos;s head to reunite with his body!
          </p>
          <div className="bg-black p-3 rounded border border-[#E0FF00]">
            <p className="mb-2">Controls:</p>
            <div className="flex flex-col items-center space-y-2">
              <KeyboardKey>W</KeyboardKey>
              <div className="flex space-x-2">
                <KeyboardKey>A</KeyboardKey>
                <KeyboardKey>S</KeyboardKey>
                <KeyboardKey>D</KeyboardKey>
              </div>
            </div>
            <div className="mt-4 text-center">
              <p>W - Up, S - Down, A - Left, D - Right</p>
            </div>
            <div className="mt-4 flex justify-center">
              <div className="h-10 px-4 border border-[#E0FF00] flex items-center justify-center rounded-md text-[#E0FF00] font-bold">
                SPACE
              </div>
            </div>
            <div className="mt-2 text-center">
              <p>SPACE - Jump</p>
            </div>
          </div>
        </div>
        <button
          autoFocus={true}
          className="pointer-events-auto mt-6 w-full bg-[#E0FF00] text-black font-bold py-2 px-4 rounded hover:bg-[#9aab1e] transition-colors uppercase tracking-wider"
          onClick={handleStartMission}
        >
          Start Mission
        </button>
      </div>
    </div>
  );
};

// Example usage of the IntroModal component
const App: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(true);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return <div>{showModal && <IntroModal onClose={handleCloseModal} />}</div>;
};

export default App;
