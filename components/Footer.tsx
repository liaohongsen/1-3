import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#fdf2e9] px-6 pt-6 pb-7 text-center">
      <div className="max-w-xs mx-auto">
        <h2 className="text-[#f39200] text-[22px] font-black mb-1">YUSHI (博睿医智)</h2>
        <p className="text-[#7f4f2a] text-[11px] font-bold leading-tight">
          以医学与心理学为核心<br />
          提供覆盖学术成长与职业发展的全程支持
        </p>

        <div className="h-px w-full bg-[#f39200]/25 my-5"></div>

        <div className="flex items-start justify-between text-left">
          <div>
            <h4 className="text-[#f39200] text-[12px] font-black mb-2">联系我们</h4>
            <div className="space-y-1">
              <p className="text-[#7f4f2a] text-[12px] font-black">+86 13162611127 (中国)</p>
              <p className="text-[#7f4f2a] text-[12px] font-black">+44 07419735373 (英国)</p>
            </div>
          </div>
          <div className="w-px h-12 bg-[#f39200]/25 mx-4"></div>
          <div className="text-center">
            <h4 className="text-[#f39200] text-[12px] font-black mb-2">官方微信</h4>
            <div className="bg-white p-1 rounded shadow-sm">
              <img
                src="./images/wechat.jpg"
                alt="QR Code"
                className="w-14 h-14 object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 text-[#f39200]/40 text-[10px] font-black tracking-[0.2em]">
          © 2026 YUSHI MEDICAL EDUCATION
        </div>
      </div>
    </footer>
  );
};
