
import React from 'react';

export const PageOne: React.FC = () => {
  return (
    <div className="relative bg-white">
      {/* Condensed Header Section - Only text as requested */}
      <div className="relative bg-[#f39200] pt-10 pb-12 rounded-b-[40px] text-center shadow-md overflow-hidden">
        <h1 className="text-white text-[32px] font-black tracking-tight leading-tight px-4">
          本/硕学业辅导
        </h1>
        <p className="text-white/90 text-[18px] font-medium mt-1">
          (医学 / 心理学方向)
        </p>
      </div>

      <div className="mt-8 px-5 space-y-6">
        {/* Core Advantage Section - Tighter Padding */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1 h-5 bg-[#f39200] rounded-full"></div>
            <h3 className="text-[17px] font-black text-gray-800 uppercase tracking-tight">核心优势</h3>
          </div>
          
          <div className="bg-white p-4 rounded-[20px] border border-orange-100 shadow-[0_4px_20px_rgba(243,146,0,0.04)] relative overflow-hidden">
            <div className="grid grid-cols-1 gap-3 relative z-10">
              {[
                { label: '医学 / 心理学对口导师', desc: '行业顶尖师资，专业背景深度匹配' },
                { label: '结果导向 · 高分赋能', desc: '深挖得分底层逻辑，非单纯作业指导' },
                { label: '学业 + 职业全周期支持', desc: '课业、申请与职场闭环体系构建' }
              ].map((item, i) => (
                <div key={i} className="flex gap-2.5 items-start">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#f39200] shrink-0"></div>
                  <div className="leading-tight">
                    <h4 className="font-bold text-gray-800 text-[14px]">{item.label}</h4>
                    <p className="text-gray-400 text-[11px] mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solving Pain Points Section - Compact Cards */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1 h-5 bg-[#f39200] rounded-full"></div>
            <h3 className="text-[17px] font-black text-gray-800 uppercase tracking-tight">解决痛点</h3>
          </div>
          
          <div className="grid grid-cols-1 gap-2.5">
            {[
              { num: '01', title: '听不懂课 / 考点模糊', desc: '重难点1v1拆解，扫清盲区。' },
              { num: '02', title: 'GPA 瓶颈提升难', desc: '定制提分，冲刺高分毕业。' },
              { num: '03', title: 'Essay / Report 难下手', desc: '写作框架与文献综述支持。' },
              { num: '04', title: '升学求职分数焦虑', desc: '高分 GPA 锁定名校申请优势。' }
            ].map((item, i) => (
              <div key={i} className="bg-white px-4 py-3 rounded-[18px] border border-gray-50 shadow-sm flex items-center gap-4">
                <span className="text-[#f39200]/20 text-[20px] font-black italic shrink-0">{item.num}</span>
                <div>
                  <h4 className="text-[14px] font-black text-gray-800 leading-tight">{item.title}</h4>
                  <p className="text-gray-500 text-[11px] mt-0.5 font-medium leading-tight">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
