import { useTemplates } from 'src/stores/useTemplate';
import { useZoom } from 'src/stores/useZoom';
import ResumeController from '../atoms/ResumeController';
import { ResumeTitle } from '../atoms/ResumeTitle';

const ResumeHeader = () => {
  const { zoomIn, zoomOut, resetZoom } = useZoom.getState();
  const templateName = useTemplates((state) => state.activeTemplate.name);

  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-blue-500 to-indigo-600 p-4 rounded-lg shadow-lg mb-6">
      {/* Template Title with responsive font size */}
      <ResumeTitle title={templateName}/>
      
      {/* Resume Control buttons (zoom controls) */}
      <div className="flex space-x-4">
        <ResumeController zoomIn={zoomIn} zoomOut={zoomOut} resetZoom={resetZoom} />
      </div>
    </div>
  );
};

export default ResumeHeader;
