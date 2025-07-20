import { useState, useEffect } from 'react';

const terminalCommands = [
  'system_core.initialize()',
  'network_link.establish()',
  'hologram.render()',
  'security.scan()',
  'data.synchronize(98.7%)',
  'system.status.operational'
];

export const TerminalDisplay = () => {
  const [commands, setCommands] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < terminalCommands.length) {
        setCommands(prev => [...prev, terminalCommands[currentIndex]]);
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
        <div className="terminal-text">abhijeet@portfolio-system:~$</div>
        {commands.map((command, index) => (
          <div key={index} className="terminal-text animate-pulse truncate">
            {'> '}{command}
          </div>
        ))}
        <div className="terminal-text animate-typing">
          {currentIndex < terminalCommands.length && '> _'}
        </div>
      </div>
    </div>
  );
};