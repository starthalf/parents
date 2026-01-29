import { NavLink } from 'react-router-dom';
import { Home, Calendar, Settings } from 'lucide-react';

const navItems = [
  { icon: Home, label: '홈', path: '/' },
  { icon: Calendar, label: '기록', path: '/history' },
  { icon: Settings, label: '설정', path: '/settings' }
];

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-white border-t border-gray-100 px-4 pb-safe z-50">
      <div className="flex justify-around items-center h-16">
        {navItems.map(({ icon: Icon, label, path }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-colors ${
                isActive
                  ? 'text-purple-600'
                  : 'text-gray-400 hover:text-gray-600'
              }`
            }
          >
            <Icon size={24} />
            <span className="text-xs font-medium">{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
