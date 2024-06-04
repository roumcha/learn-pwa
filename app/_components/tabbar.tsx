import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Filter } from './todo-types';

type Props = {
  filter: Filter;
  onFilter: (filter: Filter) => void;
};

export default function TabBar(props: Props): React.JSX.Element {
  return (
    <Tabs
      value={props.filter}
      onValueChange={(s) => props.onFilter(s as Filter)}
    >
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="all">すべて</TabsTrigger>
        <TabsTrigger value="checked">完了</TabsTrigger>
        <TabsTrigger value="unchecked">現在</TabsTrigger>
        <TabsTrigger value="removed">ゴミ箱</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
