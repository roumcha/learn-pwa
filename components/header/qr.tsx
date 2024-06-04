import packageJson from '@/package.json';
import React from 'react';
import { QRCode } from 'react-qrcode-logo';
import Backdrop from '../ui/backdrop';

type Props = {
  open: boolean;
  onOpenChange: () => void;
};

export default function QR(props: Props): React.JSX.Element {
  return (
    <Backdrop {...props}>
      <div className="overflow-hidden rounded-xl bg-white p-4 shadow-md">
        <QRCode value={packageJson.homepage} size={180} />
      </div>
    </Backdrop>
  );
}
