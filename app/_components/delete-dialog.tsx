import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

type Props = {
  open: boolean;
  onToggleOpen: () => void;
  onCommit: () => void;
};

export default function DeleteDialog(props: Props): React.JSX.Element {
  return (
    <AlertDialog open={props.open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>ゴミ箱を空にする</AlertDialogTitle>
          <AlertDialogDescription>
            ゴミ箱を空にしますか？
            <br />
            この操作を取り消すことはできません。
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="gap-2">
          <AlertDialogCancel onClick={(e) => props.onToggleOpen()}>
            もどる
          </AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90"
            onClick={(e) => {
              props.onToggleOpen();
              props.onCommit();
            }}
          >
            削除する
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
