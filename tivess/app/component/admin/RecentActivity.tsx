import { Plus, CheckCircle, AlertTriangle, Clock, X } from 'lucide-react';

interface ActivityItem {
  id: number;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  iconBg: string;
  text: string;
  time: string;
  unread?: boolean;
}

const activities: ActivityItem[] = [
  {
    id: 1,
    icon: Plus,
    iconBg: 'bg-gray-600',
    text: 'You have been assigned to the Material XD Version project.',
    time: '2 min ago',
    unread: true,
  },
  {
    id: 2,
    icon: CheckCircle,
    iconBg: 'bg-green-600',
    text: 'Fix Platform Errors task has been completed successfully.',
    time: '1 hour ago',
    unread: true,
  },
  {
    id: 3,
    icon: AlertTriangle,
    iconBg: 'bg-yellow-600',
    text: 'Project budget has exceeded 80% of allocated funds.',
    time: '2 hours ago',
    unread: true,
  },
  {
    id: 4,
    icon: Clock,
    iconBg: 'bg-blue-600',
    text: 'Sophie B. has joined your team.',
    time: '1 day ago',
  },
  {
    id: 5,
    icon: X,
    iconBg: 'bg-red-600',
    text: 'Scheduled maintenance will occur tonight from 2-4 AM.',
    time: '2 days ago',
  },
];

export default function RecentActivity() {
  return (
    <div className="bg-[#1a1a1a] rounded-lg p-4 sm:p-5 md:p-6 border border-gray-800 w-full min-w-0">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-2">
        <h2 className="text-white text-base sm:text-lg font-semibold">Recent Activity</h2>
        <button className="text-blue-500 hover:text-blue-400 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap">
          Mark all as read
        </button>
      </div>
      <div className="space-y-3 sm:space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <div key={activity.id} className="flex items-start space-x-3 sm:space-x-4 relative">
              <div className={`${activity.iconBg} rounded-full p-1.5 sm:p-2 flex-shrink-0`}>
                <Icon size={14} className="sm:w-4 sm:h-4 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed break-words">{activity.text}</p>
                <p className="text-gray-500 text-[10px] sm:text-xs mt-1">{activity.time}</p>
              </div>
              {activity.unread && (
                <div className="absolute right-0 top-2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

