import React from "react";
import TextPressure from '../TextPressure';
import DecryptedText from '../DecryptedText';

const Hero = () => {
  return (
    <div className="max-w-screen h-screen flex justify-center items-center">
      <div style={{ position: 'relative', height: '300px', width: '100%' }} className="w-[75%] flex justify-center items-center">
        <TextPressure
          text="ICAISCDS 2025"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#ffffff"
          strokeColor="#4a90e2"
          minFontSize={50}
        />
      </div>
      <div className="w-[75%] flex justify-center items-center">
        <DecryptedText
          text="PUDUCHERRY TECHNOLOGICAL UNIVERSITY
          DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING
          ICAISCDS 2025"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#ffffff"
          strokeColor="#4a90e2"
          minFontSize={50}
        />
      </div>  
    </div>
  );
};

export default Hero;
