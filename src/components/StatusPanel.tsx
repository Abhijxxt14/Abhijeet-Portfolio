import { Activity, Cpu, Database, Wifi, Zap, Shield } from 'lucide-react';

interface StatusData {
  label: string;
  value: string;
  status: 'online' | 'active' | 'standby';
  icon: typeof Activity;
}

const statusData: StatusData[] = [
  { label: 'Portfolio', value: 'ACTIVE', status: 'active', icon: Activity },
  { label: 'Core System', value: 'ONLINE', status: 'online', icon: Cpu },
  { label: 'Projects', value: '2 LIVE', status: 'active', icon: Database },
  { label: 'Contact', value: 'READY', status: 'online', icon: Wifi },
  { label: 'Skills', value: '100%', status: 'active', icon: Zap },
  { label: 'Status', value: 'AVAILABLE', status: 'online', icon: Shield }
];

export const StatusPanel = () => {
  return (
    <div className="space-y-2 md:space-y-3">
      <h3 className="text-xs md:text-sm font-orbitron font-bold text-primary mb-3 md:mb-4 tracking-wider text-center md:text-left">
        SYSTEM STATUS
      </h3>
      {statusData.map((item, index) => {
        const Icon = item.icon;
        return (
          <div key={item.label} className="status-indicator group">
            <Icon className="w-3 h-3 md:w-4 md:h-4 text-primary flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="text-xs text-muted-foreground">{item.label}</div>
              <div className="text-xs font-mono text-primary truncate">{item.value}</div>
            </div>
            <div 
              className={`status-dot ${
                item.status === 'online' ? 'bg-green-400' : 
                item.status === 'active' ? 'bg-primary' : 'bg-yellow-400'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            />
          </div>
        );
      })}
    </div>
  );
};