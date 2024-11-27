import EditorLayout from './editor/EditorLayout';
import Image from 'next/image';
import NavBarLayout from './nav-bar/NavBarLayout';
import ResumeHeader from './resume/components/ResumeHeader';
import { ResumeLayout } from './resume/ResumeLayout';
import Tooltip from '@mui/material/Tooltip';

const BuilderLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar Layout */}
      <NavBarLayout />

      <main className="flex flex-1 max-h-[calc(100vh_-_3.5rem)] print:max-h-fit">
        <div className="flex flex-col flex-1 justify-center bg-custom-grey100 print:bg-white px-4 py-6">
          {/* Header (Hidden in print mode) */}
          <header className="w-[210mm] mt-5 mb-3 mx-auto print:hidden">
            <ResumeHeader />
          </header>

          {/* Resume Layout */}
          <div className="overflow-auto no-scrollbar">
            <ResumeLayout />
          </div>
        </div>

        {/* Editor Sidebar (Hidden in print mode) */}
        <aside className="w-[25vw] min-w-[20rem] print:hidden bg-white shadow-md rounded-lg p-4">
          <EditorLayout />
        </aside>
      </main>

      {/* Feedback Button (Fixed Position) */}
      <footer className="print:hidden">
        <Tooltip title="Share feedback">
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="fixed w-14 h-14 rounded-full bottom-6 left-6 flex justify-center items-center bg-resume-50 shadow-xl hover:shadow-2xl transition-shadow duration-200 ease-in-out"
          >
            <Image src="/icons/rate-review.svg" alt="Feedback button" width="24" height="24" />
          </a>
        </Tooltip>
      </footer>
    </div>
  );
};

export default BuilderLayout;
