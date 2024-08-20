import {Line} from 'rc-progress'

const ProgressBar = () => {
    const percent = 90; // Set the percentage here
  
    return (
      <>
        <div data-tip={`${percent}% complete`} className="progress-bar">
          <Line percent={percent} strokeWidth={4} strokeColor="#FFBE18" trailWidth={4} trailColor="#e0e0e0" style={{ borderRadius: '8px', }} />
        </div>
        <style jsx>
              {`
                .progress-bar:hover {
                    transform: scale(1.02);
                    transition: transform 0.3s ease;
                }
              `}
        </style>
      </>
    );
  };
  
  export default ProgressBar;