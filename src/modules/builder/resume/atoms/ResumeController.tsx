import Image from 'next/image';
import { ReactNode } from 'react';
import Tooltip from '@mui/material/Tooltip';

const ResumeController = ({
  zoomIn,
  zoomOut,
  resetZoom,
}: {
  zoomIn: () => void;
  zoomOut: () => void;
  resetZoom: () => void;
}) => {
  return (
    <div className="flex gap-4 items-center">
      <TooltipRenderer title="Zoom out">
        <Image
          src="/icons/zoom-out.svg"
          className="cursor-pointer hover:scale-110 transition-transform duration-200"
          alt="Zoom out"
          width="24"
          height="24"
          onClick={zoomOut}
          aria-label="Zoom out"
        />
      </TooltipRenderer>
      <TooltipRenderer title="Zoom in">
        <Image
          src="/icons/zoom-in.svg"
          className="cursor-pointer hover:scale-110 transition-transform duration-200"
          alt="Zoom in"
          width="24"
          height="24"
          onClick={zoomIn}
          aria-label="Zoom in"
        />
      </TooltipRenderer>
      <TooltipRenderer title="Reset zoom">
        <Image
          src="/icons/reset-zoom.svg"
          className="cursor-pointer hover:scale-110 transition-transform duration-200"
          alt="Reset zoom"
          width="24"
          height="24"
          onClick={resetZoom}
          aria-label="Reset zoom"
        />
      </TooltipRenderer>
    </div>
  );
};

export default ResumeController;

function TooltipRenderer({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Tooltip title={title}>
      <div className="flex items-center justify-center">{children}</div>
    </Tooltip>
  );
}
