import { Settings, User, Bell, Shield, LogOut, ChevronRight } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { useAuth } from '../contexts/AuthContext';
import { useChildData } from '../contexts/ChildDataContext';

export function SettingsPage() {
  const { user, logout } = useAuth();
  const { weeklyReports } = useChildData();
  const child = weeklyReports[0]?.child;

  const menuItems = [
    { icon: User, label: '프로필 관리', description: '내 정보 수정' },
    { icon: Bell, label: '알림 설정', description: '푸시 알림 관리' },
    { icon: Shield, label: '개인정보 보호', description: '데이터 관리' }
  ];

  const handleLogout = () => {
    logout();
    window.location.href = '/login';
  };

  return (
    <div className="py-6 space-y-6">
      <div className="flex items-center gap-2">
        <Settings size={24} className="text-purple-500" />
        <h1 className="text-xl font-bold text-gray-800">설정</h1>
      </div>

      <Card>
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
            <User size={28} className="text-white" />
          </div>
          <div>
            <h2 className="font-semibold text-gray-800">{user?.name || '부모님'}</h2>
            <p className="text-sm text-gray-500">{user?.email}</p>
            {child && (
              <p className="text-sm text-purple-500 mt-1">
                {child.name} 보호자
              </p>
            )}
          </div>
        </div>
      </Card>

      <Card className="divide-y divide-gray-100">
        {menuItems.map(({ icon: Icon, label, description }) => (
          <button
            key={label}
            className="w-full flex items-center justify-between py-3 first:pt-0 last:pb-0 hover:bg-gray-50 -mx-4 px-4 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center">
                <Icon size={20} className="text-purple-500" />
              </div>
              <div className="text-left">
                <p className="font-medium text-gray-800">{label}</p>
                <p className="text-sm text-gray-500">{description}</p>
              </div>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </button>
        ))}
      </Card>

      <Card>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 text-red-500 hover:bg-red-50 -mx-4 px-4 py-2 rounded-xl transition-colors"
        >
          <LogOut size={20} />
          <span className="font-medium">로그아웃</span>
        </button>
      </Card>

      <p className="text-center text-sm text-gray-400">
        버전 1.0.0
      </p>
    </div>
  );
}
