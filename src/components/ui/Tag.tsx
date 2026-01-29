interface TagProps {
  text: string;
}

export function Tag({ text }: TagProps) {
  return (
    <span className="text-sm text-purple-600">
      #{text}
    </span>
  );
}
