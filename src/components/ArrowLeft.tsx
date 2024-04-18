import { FunctionComponent } from 'react'

export interface ArrowLeftProps {
    onClick: any,
}

const ArrowLeft: FunctionComponent<ArrowLeftProps> = ({ onClick }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
      className="w-6 h-6"
      onClick={onClick}
    >
      <path
        fillRule="evenodd"
        d="M6.293 15.293a1 1 0 0 0 1.414 0l5.293-5.293V13a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1H8a1 1 0 1 0 0 2h4.586L6.293 13.293a1 1 0 0 0 0 1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
  
  export default ArrowLeft;