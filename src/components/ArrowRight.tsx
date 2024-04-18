import { FunctionComponent } from 'react'

export interface ArrowRightProps {
    onClick: any,
}

const ArrowRight: FunctionComponent<ArrowRightProps> = ({ onClick }) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 20 20"
    className="w-6 h-6"
    onClick={onClick}
  >
    <path
      fillRule="evenodd"
      d="M13.707 15.293a1 1 0 0 1-1.414 0L7 10.414V13a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H8.414l5.293 5.293a1 1 0 0 1 0 1.414z"
      clipRule="evenodd"
    />
  </svg>
  );
  
  export default ArrowRight;