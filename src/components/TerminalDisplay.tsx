import { useState, useEffect } from 'react';

// Using sci-fi themed terminal commands instead of real system commands
// to avoid exposing any potentially sensitive system information
const terminalCommands = [
  'initialize_portfolio.sequence()',
  'rendering_interface.start()',
  'activate_holographic_display()',
  'security_protocols.engage()',
  'connect_neural_network(95.2%)',
  'portfolio_system.online()'
];

export const TerminalDisplay = () => {
  const [commands, setCommands] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Using a randomly selected subset of commands each time to vary the display
    const selectedCommands = [...terminalCommands].sort(() => 0.5 - Math.random()).slice(0, 4);
    
    const interval = setInterval(() => {
      if (currentIndex < selectedCommands.length) {
        setCommands(prev => [...prev, selectedCommands[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
      } else {
        // Reset after all commands are shown
        setTimeout(() => {
          setCommands([]);
          setCurrentIndex(0);
        }, 3000);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="bg-background/20 border border-primary/20 rounded-lg p-3 md:p-4 font-mono text-xs md:text-sm">
      <div className="flex items-center space-x-2 mb-2 md:mb-3 border-b border-primary/20 pb-2">
        <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500"></div>
        <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
        <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500"></div>
        <span className="text-xs text-muted-foreground ml-2 hidden md:inline">system_terminal.exe</span>
      </div>
      
      <div className="space-y-1 h-24 md:h-32 overflow-hidden">
        <div className="terminal-text">visitor@portfolio:~$</div>
        {commands.map((command, index) => (
          <div key={index} className="terminal-text animate-pulse truncate">
            {'> '}{command}
          </div>
        ))}
        <div className="terminal-text animate-typing">
          {currentIndex < commands.length && '> _'}
        </div>
      </div>
    </div>
  );
};