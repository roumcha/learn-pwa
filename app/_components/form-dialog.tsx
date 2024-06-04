import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

type Props = {
  text: string;
  dialogOpen: boolean;
  onSubmit: () => void;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onToggleDialog: () => void;
};

export default function FormDialog(props: Props): React.JSX.Element {
  return (
    <form
      className="flex flex-row gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        props.onSubmit();
      }}
    >
      <Input
        type="text"
        placeholder="タスクを入力"
        value={props.text}
        onChange={(e) => props.onChange(e)}
      />
      <Button type="submit" onSubmit={props.onSubmit}>
        追加
      </Button>
    </form>
  );
}
