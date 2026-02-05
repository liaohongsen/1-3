
import React from 'react';

export const PageTwo: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="px-5 py-6 space-y-8">
        
        {/* Suitable For Section - Tighter Layout */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-5 bg-[#f39200] rounded-full"></div>
            <h3 className="text-[17px] font-black text-gray-800 uppercase tracking-tight">适合哪些学生</h3>
          </div>

          <div className="space-y-3">
            <div className="bg-green-50/30 p-4 rounded-[20px] border border-green-100">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" /></svg>
                </div>
                <h4 className="text-green-700 text-[14px] font-black">适合的情况</h4>
              </div>
              <ul className="space-y-1.5 pl-1">
                {[
                  '面临医学/心理学考核压力，希望系统提升',
                  'GPA 遇到瓶颈，目标冲刺一等学位',
                  '希望在 Essay 中展现更强学术逻辑',
                  '需要长期培养与升学/职业指导'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-green-800/80 text-[12px] font-bold">
                    <span className="text-green-400 mt-0.5">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-50/30 p-4 rounded-[20px] border border-red-100">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M6 18L18 6M6 6l12 12" /></svg>
                </div>
                <h4 className="text-red-700 text-[14px] font-black">不适合的情况</h4>
              </div>
              <ul className="space-y-1 pl-1">
                {[
                  '拒绝参与学习过程，只追求结果',
                  '寻求代写等违反学术诚信行为'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-red-800/80 text-[12px] font-bold">
                    <span className="text-red-400 mt-0.5">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Reordered: 1v1 课时方案 placed above Service Content */}
        <section>
           <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-5 bg-gray-800 rounded-full"></div>
            <h3 className="text-[17px] font-black text-gray-800 uppercase tracking-tight">1v1 课时方案</h3>
          </div>
          <div className="grid grid-cols-2 gap-2">
              {[
                { pkg: '1课时', total: '¥1,200' },
                { pkg: '5课时', total: '¥5,500' },
                { pkg: '15课时', total: '¥15,000', popular: true },
                { pkg: '30课时', total: '¥28,500' },
                { pkg: '50课时', total: '¥45,000' }
              ].map((item, i) => (
                <div key={i} className={`px-4 py-3 rounded-[18px] border text-center flex justify-between items-center transition-all ${item.popular ? 'bg-[#f39200] border-[#f39200] shadow-md col-span-2' : 'bg-white border-gray-100 shadow-sm'}`}>
                  <span className={`text-[12px] font-black ${item.popular ? 'text-white/80' : 'text-gray-400'}`}>{item.pkg}</span>
                  <span className={`text-[15px] font-black ${item.popular ? 'text-white' : 'text-gray-800'}`}>{item.total}</span>
                  {item.popular && <span className="text-[9px] text-white font-black px-1.5 py-0.5 border border-white/40 rounded-full uppercase">Recommend</span>}
                </div>
              ))}
          </div>
        </section>

        {/* Reordered: 服务内容 placed below Pricing */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-5 bg-[#f39200] rounded-full"></div>
            <h3 className="text-[17px] font-black text-gray-800 uppercase tracking-tight">服务内容</h3>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            {[
              { title: '课程内容拆解', detail: '考核逻辑解析', icon: '🔍' },
              { title: 'Essay 指导', detail: '一对一深度点拨', icon: '📝' },
              { title: '学术写作结构', detail: '逻辑严密框架', icon: '📐' },
              { title: '医学/心理科研', detail: '系统思维训练', icon: '🧬' }
            ].map((item, idx) => (
              <div key={idx} className="p-3 bg-gray-50/50 rounded-2xl border border-gray-100 flex items-center gap-3">
                <div className="text-[20px] shrink-0">{item.icon}</div>
                <div className="leading-none">
                  <h4 className="font-bold text-gray-800 text-[12px] mb-0.5">{item.title}</h4>
                  <p className="text-[10px] text-gray-400 font-medium">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Compact Brand Contact Footer */}
        <section className="bg-[#fef1e1] p-5 pb-6 rounded-[28px] text-center shadow-sm border border-orange-50 relative overflow-hidden mt-6">
          <div className="relative z-10">
            <h2 className="text-[#f39200] text-[22px] font-black mb-0.5">YUSHI (博睿医智)</h2>
            <p className="text-[#9a6b3d] text-[11px] font-bold leading-tight mb-5">
              以医学与心理学为核心，提供全程支持
            </p>

            <div className="h-px w-full bg-[#f39200]/10 mb-5"></div>

            <div className="flex justify-between items-center text-left gap-4">
              <div className="flex-1">
                <h4 className="text-[#f39200] text-[13px] font-black mb-2 uppercase tracking-tight">联系我们</h4>
                <div className="space-y-1">
                  <p className="text-[#7d5027] text-[12px] font-black">+86 13162611127 (中国)</p>
                  <p className="text-[#7d5027] text-[12px] font-black">+44 07419735373 (英国)</p>
                </div>
              </div>
              <div className="border-l border-[#f39200]/20 pl-5 shrink-0 text-center">
                <h4 className="text-[#f39200] text-[12px] font-black mb-1.5">官方微信</h4>
                <div className="bg-white p-1 rounded-xl shadow-sm border border-gray-50">
                  <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-lg">
                    <img 
                     src="./images/wechat.jpg" 
                     alt="WeChat QR" 
                     className="w-full h-full object-contain"
                   />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-[#9a6b3d]/40 text-[10px] font-black tracking-widest uppercase">
              © 2026 YUSHI MEDICAL EDUCATION
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
