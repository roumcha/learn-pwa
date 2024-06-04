'use client';

import { ModeToggle } from '@/components/header/mode-toggle';
import { TaskListSquareLtrFilled } from '@fluentui/react-icons';
import clsx from 'clsx';
import Link from 'next/link';
import { useState } from 'react';
import HeaderOthers from './others';
import QR from './qr';

type Props = {
  className?: string;
};

export default function Header(props: Props): React.JSX.Element {
  const [qrOpen, setQrOpen] = useState(false);

  function handleToggleQR() {
    setQrOpen((qrOpen) => !qrOpen);
  }

  return (
    <header
      className={clsx(
        'grid-col-3 bg- grid h-14 w-full items-center bg-[--background-color] px-4 py-2',
        props.className
      )}
    >
      <Link
        href="/"
        id="header-app-title"
        className="col-[1] flex w-fit gap-1 text-slate-600 dark:text-slate-400"
      >
        <div className="content-center">
          <TaskListSquareLtrFilled fontSize="1.75rem" />
        </div>
        <span className="select-none content-center text-xl font-bold">
          The ToDo App
        </span>
      </Link>

      <div
        id="header-buttons"
        className="col-[3] flex content-center justify-end gap-2 text-right"
      >
        <ModeToggle />
        <HeaderOthers onToggleQR={() => handleToggleQR()} />
      </div>

      <QR open={qrOpen} onOpenChange={() => handleToggleQR()} />
    </header>
  );
}
