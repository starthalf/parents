import { Tag } from '../ui/Tag';

interface HashtagListProps {
  tags: string[];
  maxVisible?: number;
}

export function HashtagList({ tags, maxVisible }: HashtagListProps) {
  const visibleTags = maxVisible ? tags.slice(0, maxVisible) : tags;

  return (
    <div className="flex flex-wrap gap-2">
      {visibleTags.map((tag, index) => (
        <div
          key={tag}
          className="opacity-0 animate-pop-in"
          style={{
            animationDelay: `${index * 50}ms`,
            animationFillMode: 'forwards'
          }}
        >
          <Tag text={tag} />
        </div>
      ))}
    </div>
  );
}
