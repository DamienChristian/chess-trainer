import { ImageResponse } from 'next/og';

export const alt = 'Chess Trainer - Master Your Chess Openings';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        background: 'linear-gradient(135deg, #2C3333, #2E4F4F)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative large pawn in background */}
      <div
        style={{
          position: 'absolute',
          right: '-40px',
          top: '-60px',
          opacity: 0.07,
          display: 'flex',
        }}
      >
        <svg viewBox="0 0 104.38 122.88" width="520" height="620">
          <path
            fillRule="evenodd"
            fill="#CBE4DE"
            d="M35.73,32.57a20.45,20.45,0,1,1,32.91,0Zm35.06,3.88a7.1,7.1,0,0,1,6.17,7h0a7.11,7.11,0,0,1-6.61,7.06H34a7.1,7.1,0,0,1-6.6-7.06h0a7.1,7.1,0,0,1,6.17-7ZM63.33,54.4c.91,14.57,6,26.07,18.75,31.85V91.6H22.3V86.25c12-3.8,17.68-15,18.73-31.85ZM82.39,95.45a14.39,14.39,0,0,1,12.67,14.23v.22H9.32v-.22A14.39,14.39,0,0,1,22,95.45l.31,0H82.08l.31,0ZM94.9,113.77a12,12,0,0,1,9.48,9.11H0a12,12,0,0,1,9.47-9.11Z"
          />
        </svg>
      </div>

      {/* Left side: pawn icon */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '350px',
          flexShrink: 0,
        }}
      >
        <svg viewBox="0 0 104.38 122.88" width="180" height="220">
          <path
            fillRule="evenodd"
            fill="#0E8388"
            d="M35.73,32.57a20.45,20.45,0,1,1,32.91,0Zm35.06,3.88a7.1,7.1,0,0,1,6.17,7h0a7.11,7.11,0,0,1-6.61,7.06H34a7.1,7.1,0,0,1-6.6-7.06h0a7.1,7.1,0,0,1,6.17-7ZM63.33,54.4c.91,14.57,6,26.07,18.75,31.85V91.6H22.3V86.25c12-3.8,17.68-15,18.73-31.85ZM82.39,95.45a14.39,14.39,0,0,1,12.67,14.23v.22H9.32v-.22A14.39,14.39,0,0,1,22,95.45l.31,0H82.08l.31,0ZM94.9,113.77a12,12,0,0,1,9.48,9.11H0a12,12,0,0,1,9.47-9.11Z"
          />
        </svg>
      </div>

      {/* Right side: text */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingRight: '80px',
        }}
      >
        <div
          style={{
            fontSize: '80px',
            fontWeight: 800,
            color: '#CBE4DE',
            lineHeight: 1.1,
            letterSpacing: '-2px',
          }}
        >
          Chess
        </div>
        <div
          style={{
            fontSize: '80px',
            fontWeight: 300,
            color: '#0E8388',
            lineHeight: 1.1,
            letterSpacing: '-2px',
          }}
        >
          Trainer
        </div>
        <div
          style={{
            fontSize: '26px',
            color: '#CBE4DE',
            opacity: 0.65,
            marginTop: '24px',
            letterSpacing: '3px',
          }}
        >
          MASTER YOUR OPENINGS
        </div>
        <div
          style={{
            width: '300px',
            height: '2px',
            background: '#0E8388',
            opacity: 0.4,
            marginTop: '16px',
          }}
        />
        <div
          style={{
            fontSize: '20px',
            color: '#CBE4DE',
            opacity: 0.5,
            marginTop: '16px',
          }}
        >
          Import PGN · Practice Moves · Track Progress
        </div>
      </div>
    </div>,
    {
      ...size,
    }
  );
}
