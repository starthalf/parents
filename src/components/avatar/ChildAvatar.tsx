import { getAvatarUrl } from '../../utils/statUtils';

interface ChildAvatarProps {
  name: string;
  grade: number;
  age: number;
  size?: 'sm' | 'md' | 'lg';
}

const sizeStyles = {
  sm: {
    container: 'w-14 h-14',
    image: 'w-12 h-12',
    nameText: 'text-sm',
    infoText: 'text-xs'
  },
  md: {
    container: 'w-20 h-20',
    image: 'w-16 h-16',
    nameText: 'text-lg',
    infoText: 'text-sm'
  },
  lg: {
    container: 'w-24 h-24',
    image: 'w-20 h-20',
    nameText: 'text-xl',
    infoText: 'text-base'
  }
};

export function ChildAvatar({
  name,
  grade,
  age,
  size = 'md'
}: ChildAvatarProps) {
  const avatarUrl = getAvatarUrl(name);
  const styles = sizeStyles[size];

  return (
    <div className="flex flex-col items-center gap-2 animate-scale-in">
      <div
        className={`${styles.container} rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center overflow-hidden`}
      >
        <img
          src={avatarUrl}
          alt={`${name} 아바타`}
          className={`${styles.image} rounded-full`}
        />
      </div>
      <div className="text-center">
        <h2 className={`${styles.nameText} font-bold text-gray-900`}>{name}</h2>
        <p className={`${styles.infoText} text-gray-500`}>
          초{grade} · {age}세
        </p>
      </div>
    </div>
  );
}
