import { ReactNode, useState, useRef } from 'react';
import { SlideWrapper, Rule, Chrome, Ticker, SectionTitle, ResultCard, InfoCard, VideoWindow } from './Shared';

const SLIDE_IDS = [
  'cover',
  'map',
  'youtube',
  'routing',
  'job-tracker',
  'weekly-digest',
  'creator-tool',
  'learning',
  'principles',
  'closing'
];

export function Slides({ currentSlide, onNavigate = () => {} }: { currentSlide: number, onNavigate?: (slide: number) => void }) {
  const [showPetVideo, setShowPetVideo] = useState(false);
  const petVideoRef = useRef<HTMLVideoElement>(null);

  const getProps = (index: number) => ({
    isActive: currentSlide === index,
    isPrev: index < currentSlide,
    isNext: index > currentSlide,
  });

  const navigateTo = (id: string) => {
    const index = SLIDE_IDS.indexOf(id);
    if (index !== -1) {
      onNavigate(index);
    }
  };

  return (
    <>
      {/* Slide 01: COVER */}
      <SlideWrapper {...getProps(0)}>
        <Rule />
        <div aria-hidden="true" className="absolute right-[190px] top-[136px] w-[188px] h-[20px] bg-warm border border-[rgba(31,43,224,0.25)] reveal"></div>
        <div aria-hidden="true" className="absolute right-[76px] top-[154px] w-[28px] h-[28px] bg-coral reveal delay-1"></div>
        
        <Chrome left="PORTFOLIO / AI PM + AI APPLICATION" right="INTERVIEW PROJECT SHOWCASE" />
        
        <div className="absolute left-[84px] top-[204px] w-[1120px]">
          <h1 className="text-ink font-serif text-[112px] leading-[0.99] font-bold tracking-normal reveal delay-1">AI Workflow &amp; Product Builder Portfolio</h1>
          <div className="font-cn text-text-main text-[54px] font-black leading-[1.18] tracking-normal mt-[30px] reveal delay-2">从真实个人问题出发，搭建可运行的 AI 工作流与产品系统</div>
        </div>
        
        <p className="text-[#302f29] font-cn text-[32px] leading-[1.55] font-medium absolute left-[90px] bottom-[136px] w-[800px] pl-[34px] border-l-4 border-ink reveal delay-3">
          我关注的不是单次 prompt 产出，而是把重复、混乱、需要判断的流程拆成有边界、可验证、可复用的系统。
        </p>
        
        <ResultCard 
          label="SCOPE" 
          number="6" 
          caption="个项目展示 AI 工作流、创作者工具、学习产品与陪伴交互" 
          className="reveal delay-2" 
        />
        
        <Ticker left="GITHUB / NOTION / WORKFLOW SYSTEMS" right="2026" />
      </SlideWrapper>

      {/* Slide 02: MAP */}
      <SlideWrapper {...getProps(1)}>
        <Rule />
        <Chrome left="MAP / 01" right="WHAT THESE PROJECTS HAVE IN COMMON" />
        
        <SectionTitle mono="PORTFOLIO MAP" title="WORKFLOW &amp;<br/>PROJECTS" className="z-10" titleClassName="text-[72px]" />
        
        <div className="absolute left-[84px] right-[84px] top-[420px] bottom-[116px]">
          <div className="grid grid-cols-3 grid-rows-2 gap-[20px] border-none bg-transparent reveal delay-2">
            <InfoCard onClick={() => navigateTo('youtube')} mono="KNOWLEDGE" title="YouTube Knowledge Pipeline" className="reveal delay-1">
              <p>把高价值内容自动转成可沉淀、可检索、可复用的知识资产。</p>
            </InfoCard>
            <InfoCard onClick={() => navigateTo('job-tracker')} mono="DECISION" title="AI Job Tracker" className="reveal delay-1">
              <p>用规则、LLM 分析和 Notion 看板，把岗位发现变成每周决策流。</p>
            </InfoCard>
            <InfoCard onClick={() => navigateTo('creator-tool')} mono="CREATION" title="Creator Image Tool" className="reveal delay-2">
              <p>从复杂前端 MVP 复盘 AI agent 协作开发方法。</p>
            </InfoCard>
            <InfoCard onClick={() => navigateTo('weekly-digest')} mono="AUTOMATION" title="AI 周报 Agent Loop" className="reveal delay-2">
              <p>自动化抓取多源资讯，生成结构化 HTML 周报并同步 Notion。</p>
            </InfoCard>
            <InfoCard onClick={() => navigateTo('learning')} mono="LEARNING" title="IELTS Vocab Review" className="reveal delay-3">
              <p>围绕真实做题薄弱词形成个人化复习闭环，支持 Gemini 故事生成。</p>
            </InfoCard>
            <InfoCard onClick={() => navigateTo('learning')} mono="COMPANION" title="陪伴型桌面宠物" className="reveal delay-3">
              <p>基于 PyQt6 的低打扰桌面交互，提供情绪陪伴与行为调度。</p>
            </InfoCard>
          </div>
        </div>
        
        <Ticker left="REAL PERSONAL PAIN -&gt; WORKFLOW DESIGN -&gt; AI WHERE JUDGMENT MATTERS" right="02 / 10" />
      </SlideWrapper>

      {/* Slide 03: PROJECT 01 */}
      <SlideWrapper {...getProps(2)}>
        <Rule />
        <Chrome left="PROJECT / 01" right="YOUTUBE ANALYSIS SKILL" />
        
        <SectionTitle mono="CODEX-NATIVE CONTENT WORKFLOW" title="YouTube 访谈分析与知识沉淀工作流" />
        
        <div className="absolute left-[84px] right-[700px] top-[380px] max-w-[1200px] grid grid-cols-[1.5fr_1fr] gap-[28px] items-stretch">
          <div className="border-y-2 border-ink flex flex-col justify-center reveal delay-2">
            <TimelineRow num="01" title="YouTube 元数据与字幕准备" subtitle="yt-dlp / SRT / Markdown" />
            <TimelineRow num="02" title="主线程视频分析与路由" subtitle="判断 AI 产品、AI 学习、人生成长" />
            <TimelineRow num="03" title="调用对应 interview-analysis skill" subtitle="不同访谈用不同分析重点" />
            <TimelineRow num="04" title="写入 Obsidian，外部 watcher 同步 Notion" subtitle="外部写入边界清晰" className="border-b-0" />
          </div>
          
          <div className="reveal delay-3">
            <div className="bg-paper-2 border-2 border-ink p-[24px] flex flex-col justify-center relative overflow-hidden transition-all duration-400 hover:-translate-y-1 hover:shadow-[12px_12px_0_rgba(31,43,224,0.16)] w-full h-full">
              <div className="text-ink font-mono text-[14px] mb-[12px] tracking-normal">RESULT</div>
              <div className="flex items-center gap-4">
                <div className="text-text-main font-serif text-[72px] font-bold leading-[0.8] tracking-tight">5</div>
                <div className="font-cn text-[18px] font-black leading-[1.3] text-[#1b1b17]">分钟完成一个视频<br/>的知识化处理</div>
              </div>
              <div className="h-[2px] bg-ink opacity-20 my-[16px]" />
              <div className="font-cn text-[#48463d] text-[16px] leading-[1.5] font-medium">从手动 2-5 天整理，变成约 5 分钟生成结构化中文分析文章；已处理约 20 个视频。</div>
            </div>
          </div>
        </div>
        
        <aside className="absolute right-[54px] top-[380px] w-[600px] z-10 transition-transform duration-500 hover:-translate-y-2 reveal delay-4">
          {/* Top Lid (Screen) */}
          <div className="w-full aspect-[16/10] bg-[#000000] rounded-t-[24px] rounded-b-[8px] border-[3px] border-[#e4e4cd] p-[12px] relative shadow-[0_24px_48px_rgba(0,0,0,0.3)]">
            {/* Camera Notch */}
            <div className="absolute top-[12px] left-1/2 -translate-x-1/2 w-[90px] h-[22px] bg-[#000000] rounded-b-[10px] z-20"></div>
            
            {/* Screen Content */}
            <div className="relative w-full h-full bg-[#111111] rounded-[8px] overflow-hidden">
              <video 
                src="/youtube-analysis-demo.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
          
          {/* Bottom Base (Keyboard deck side view) */}
          <div className="relative w-[112%] -ml-[6%] h-[16px] bg-gradient-to-b from-[#e4e4cd] to-[#c4c4b5] rounded-b-[16px] rounded-t-[2px] shadow-[0_16px_32px_rgba(0,0,0,0.4)] flex justify-center mt-[-1px]">
            {/* Thumb notch to open lid */}
            <div className="w-[120px] h-[6px] bg-[#b4b4a5] rounded-b-[6px]"></div>
          </div>
        </aside>
        
        <Ticker left="GENERAL VIDEO ANALYSIS -&gt; ROUTED SPECIALIST SKILL -&gt; KNOWLEDGE NOTE" right="03 / 10" />
      </SlideWrapper>

      {/* Slide 04: DEEP DIVE 01 */}
      <SlideWrapper {...getProps(3)}>
        <Rule />
        <Chrome left="DEEP DIVE / 01" right="ROUTING AS PRODUCT DESIGN" />
        
        <SectionTitle mono="HARDEST DECISION" title="难点不是总结视频，而是决定不同访谈应该怎样被分析" />
        
        <div className="absolute left-[84px] right-[84px] top-[420px] bottom-[116px]">
          <div className="grid grid-cols-3 gap-[24px] reveal delay-2">
            <Principle num="PROBLEM" title="不能把所有访谈放进同一个模板">AI 产品、AI 学习、人生成长访谈的重点、问题结构和输出风格都不同。</Principle>
            <Principle num="DECISION" title="先通用理解，再专业分析">用 `video-analysis` 做第一阶段理解与路由，再调用对应 specialist skill。</Principle>
            <Principle num="BOUNDARY" title="单视频主线程，多视频可 fan-out">本地 Python 项目负责契约和文件层，不伪造 Codex sub-agent。</Principle>
            <Principle num="OUTPUT" title="不是模型回答，而是知识产品">输出要能进入 Obsidian / Notion，方便未来复用、搜索、对照。</Principle>
            <Principle num="ROLE" title="我的角色是编排者">我负责定义分析标准、skill 边界、工作流拆分和迭代方向。</Principle>
            <Principle num="V2" title="跨文章综合分析">下一步不是更多总结，而是跨嘉宾、跨主题提炼共识与分歧。</Principle>
          </div>
        </div>
        
        <Ticker left="AUTOMATIC ROUTING MAKES THE WORKFLOW FEEL LIKE A PRODUCT" right="04 / 10" />
      </SlideWrapper>

      {/* Slide 05: PROJECT 02 */}
      <SlideWrapper {...getProps(4)}>
        <Rule />
        <Chrome left="PROJECT / 02" right="AI JOB TRACKER" />
        
        <SectionTitle mono="JOB SEARCH AUTOMATION" title="AI 求职岗位追踪系统 Job Tracker" />
        
        <div className="absolute left-[84px] right-[540px] top-[380px] max-w-[1200px] grid grid-cols-[1.5fr_1fr] gap-[28px] items-center">
          <div className="border-y-2 border-ink flex flex-col justify-center reveal delay-2">
            <TimelineRow num="01" title="岗位数据来源与 LinkedIn 标准化中间层" subtitle="降低后续筛选复杂度" />
            <TimelineRow num="02" title="清洗、去重、地区过滤与配额控制" subtitle="避免低质量岗位进入池子" />
            <TimelineRow num="03" title="GLM 结构化分析岗位质量和投递优先级" subtitle="LLM 处理判断密集步骤" />
            <TimelineRow num="04" title="dry-run / 审计清单后同步 Notion" subtitle="外部写入前先预览" className="border-b-0" />
          </div>
          
          <div className="reveal delay-3">
            <div className="bg-paper-2 border-2 border-ink p-[24px] flex flex-col justify-center relative overflow-hidden transition-all duration-400 hover:-translate-y-1 hover:shadow-[12px_12px_0_rgba(31,43,224,0.16)] w-full">
              <div className="text-ink font-mono text-[14px] mb-[12px] tracking-normal">CURRENT STATE</div>
              <div className="flex items-center gap-4">
                <div className="text-text-main font-serif text-[72px] font-bold leading-[0.8] tracking-tight">20</div>
                <div className="font-cn text-[18px] font-black leading-[1.3] text-[#1b1b17]">条岗位数据已<br/>沉淀到 Notion</div>
              </div>
              <div className="h-[2px] bg-ink opacity-20 my-[16px]" />
              <div className="font-cn text-[#48463d] text-[16px] leading-[1.5] font-medium">把每天手动刷 LinkedIn 改成每周集中查看筛选后的岗位；稳定运行约 2 周。</div>
            </div>
          </div>
        </div>
        
        <aside className="absolute right-[84px] top-[140px] w-[400px] h-[820px] bg-[#000000] rounded-[64px] p-[16px] shadow-[24px_24px_0_rgba(31,43,224,0.16)] z-10 transition-transform duration-500 hover:-translate-y-2 reveal delay-4 border-[2px] border-[#333333]">
          <div className="absolute top-[16px] left-1/2 -translate-x-1/2 w-[140px] h-[32px] bg-[#000000] rounded-b-[20px] z-20"></div>
          <div className="relative w-full h-full bg-[#111111] rounded-[48px] overflow-hidden border border-[#222222]">
            <video 
              src="/job-tracker-demo.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover" 
            />
          </div>
        </aside>
        
        <Ticker left="DATA SOURCE -&gt; CLEANING -&gt; LLM ANALYSIS -&gt; NOTION REVIEW" right="05 / 10" />
      </SlideWrapper>

      {/* Slide 06: PROJECT 03 */}
      <SlideWrapper {...getProps(5)}>
        <Rule />
        <Chrome left="PROJECT / 03" right="AI WEEKLY DIGEST" />
        
        <SectionTitle mono="INFORMATION AUTOMATION" title="AI 资讯周报自动化系统" />
        
        <div className="absolute left-[84px] right-[520px] top-[380px] max-w-[1200px]">
          <div className="border-y-2 border-ink flex flex-col justify-center reveal delay-2 mb-[28px]">
            <TimelineRow num="01" title="多源 RSS 抓取过去 7 天内容" subtitle="AI 产品、Agent、工作流、商业趋势" />
            <TimelineRow num="02" title="去重、时间过滤、相关性排序" subtitle="提高信号密度，不追求抓取越多越好" />
            <TimelineRow num="03" title="Gemini 生成结构化 HTML 周报" subtitle="失败时回退基础 HTML" />
            <TimelineRow num="04" title="Gmail 发送，Notion 归档" subtitle="同一份内容复用，不二次调用模型" className="border-b-0" />
          </div>
          
          <div className="grid grid-cols-2 gap-[28px] reveal delay-3">
            <InfoCard title="可靠性设计" className="p-[24px] overflow-hidden">
              <ul className="list-disc pl-[24px] text-[18px] leading-[1.5] break-words whitespace-normal">
                <li className="mb-1">单源 RSS 失败隔离</li>
                <li className="mb-1">Gemini retry / timeout / fallback</li>
                <li className="mb-1">Gmail OAuth token 兼容</li>
                <li>Notion 分块写入与异常 HTML 清理</li>
              </ul>
            </InfoCard>
            <div className="bg-paper-2 border-2 border-ink p-[24px] flex flex-col justify-center relative overflow-hidden transition-all duration-400 hover:-translate-y-1 hover:shadow-[12px_12px_0_rgba(31,43,224,0.16)]">
              <div className="text-ink font-mono text-[14px] mb-[12px] tracking-normal">ITERATION</div>
              <div className="flex items-center gap-4">
                <div className="text-text-main font-serif text-[72px] font-bold leading-[0.8] tracking-tight">7</div>
                <div className="font-cn text-[18px] font-black leading-[1.3] text-[#1b1b17]">天信息窗口<br/>自动生成周报</div>
              </div>
              <div className="h-[2px] bg-ink opacity-20 my-[16px]" />
              <div className="font-cn text-[#48463d] text-[16px] leading-[1.5] font-medium">从 n8n 自动流迁移到 Python + GitHub Actions，提升稳定性、可维护性和版本管理能力。</div>
            </div>
          </div>
        </div>
        
        <aside className="absolute right-[84px] top-[140px] w-[400px] h-[820px] bg-[#000000] rounded-[64px] p-[16px] shadow-[24px_24px_0_rgba(31,43,224,0.16)] z-10 transition-transform duration-500 hover:-translate-y-2 reveal delay-4 border-[2px] border-[#333333]">
          <div className="absolute top-[16px] left-1/2 -translate-x-1/2 w-[140px] h-[32px] bg-[#000000] rounded-b-[20px] z-20"></div>
          <div className="relative w-full h-full bg-[#111111] rounded-[48px] overflow-hidden border border-[#222222]">
            <video 
              src="/notion-archive.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover" 
            />
          </div>
        </aside>
        
        <Ticker left="RSS -&gt; RANKING -&gt; GEMINI DIGEST -&gt; GMAIL + NOTION" right="06 / 10" />
      </SlideWrapper>

      {/* Slide 07: RETROSPECTIVE */}
      <SlideWrapper {...getProps(6)}>
        {/* Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video 
            src="/review-mindmap.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity" 
          />
          <div className="absolute inset-0 bg-paper/80 backdrop-blur-[4px]" />
        </div>

        <div className="absolute inset-0 z-10">
          <Rule />
          <Chrome left="RETROSPECTIVE / 01" right="FROM VIBE CODING TO HARNESS ENGINEERING" />
          
          <SectionTitle mono="AI CREATOR IMAGE TOOL MVP" title="这个项目重点展示我复盘出的 AI agent 协作开发方法" />
          
          <div className="absolute left-[84px] right-[620px] top-[400px] grid grid-cols-2 gap-[28px] max-w-[1200px]">
            <InfoCard title="MVP 复杂度" className="p-[32px] bg-paper/95 backdrop-blur-md shadow-[16px_16px_0_rgba(31,43,224,0.15)] border-ink reveal delay-2 hover:-translate-y-2 transition-transform duration-500">
              <p className="text-[20px]">React + Vite + Konva.js，包含本地 AI 抠图、Canvas 画布、素材管理、图层、滤镜、边框和导出。</p>
            </InfoCard>
            <InfoCard title="真实问题" className="p-[32px] bg-paper/95 backdrop-blur-md shadow-[16px_16px_0_rgba(31,43,224,0.15)] border-ink reveal delay-3 hover:-translate-y-2 transition-transform duration-500">
              <p className="text-[20px]">上下文衰减、重复实现、文档膨胀、核心组件变大、视觉功能反复返工。</p>
            </InfoCard>
            <InfoCard title="方法沉淀" className="p-[32px] bg-paper/95 backdrop-blur-md shadow-[16px_16px_0_rgba(31,43,224,0.15)] border-ink reveal delay-4 hover:-translate-y-2 transition-transform duration-500">
              <p className="text-[20px]">入口协议、动态上下文加载、文档分层、模块边界和统一质量门禁。</p>
            </InfoCard>
            <InfoCard title="验证意识" className="p-[32px] bg-paper/95 backdrop-blur-md shadow-[16px_16px_0_rgba(31,43,224,0.15)] border-ink reveal delay-5 hover:-translate-y-2 transition-transform duration-500">
              <p className="text-[20px]">单元测试覆盖确定性逻辑，人工 / 浏览器验收覆盖视觉质量、导出效果和 Canvas 交互。</p>
            </InfoCard>
          </div>
          
          <ResultCard 
            label="LESSON" 
            number="H" 
            caption="Harness Engineering" 
            quote="我从“让 AI 写代码”转向“为 AI agent 设计工作环境”。"
            className="reveal delay-6 bg-paper/95 backdrop-blur-sm" 
          />
          
          <Ticker left="CONTEXT ENGINEERING / QUALITY GATE / MODULE BOUNDARIES" right="07 / 10" />
        </div>
      </SlideWrapper>

      {/* Slide 08: BREADTH */}
      <SlideWrapper {...getProps(7)}>
        <Rule />
        <Chrome left="PROJECT CLUSTER / 01" right="LEARNING PRODUCT + COMPANION INTERACTION" />
        
        <SectionTitle mono="BREADTH" title="学习产品与低打扰陪伴交互" />
        
        <div className="absolute left-[84px] right-[84px] top-[420px] bottom-[116px] grid grid-cols-2 gap-[28px] max-w-[1200px]">
          <InfoCard mono="IELTS VOCAB REVIEW" title="雅思词汇复习应用" className="min-h-[400px] reveal delay-2">
            <p>Google Sheets 数据层 + Web 复习交互：快速录入、卡片复习、三按钮评分、间隔重复、故事池、Gemini 故事生成、故事验收与自动回写。</p>
            <div className="h-[2px] bg-ink opacity-35 my-[24px]" />
            <p>核心产品判断：不背通用词表，而是围绕真实做题中遇到的薄弱词形成个人化复习闭环。</p>
          </InfoCard>
          
          <InfoCard onClick={() => setShowPetVideo(true)} mono="DESKTOP PET" title="陪伴型桌面宠物" className="min-h-[400px] reveal delay-3">
            <p>Python + PyQt6 + AppKit + AppleScript：透明置顶窗口、逐帧动画、13 个 QTimer 行为调度、Apple Music 联动、本地 JSON 记忆 and 隐藏亲密度。</p>
            <div className="h-[2px] bg-ink opacity-35 my-[24px]" />
            <p>核心产品判断：不做效率助手和任务管理器，而是做低打扰的“在身边”的陪伴感。</p>
          </InfoCard>
        </div>
        
        <ResultCard 
          label="PRODUCT SENSE" 
          number="2" 
          caption="个非自动化方向的产品原型" 
          quote="它们展示学习机制、状态机、行为优先级和情绪化体验设计能力。"
          className="reveal delay-3" 
        />
        
        <Ticker left="SPACED REPETITION / STORY MEMORY / LOW-INTERRUPTION COMPANION" right="08 / 10" />

        {showPetVideo && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-paper/80 backdrop-blur-sm" onClick={() => setShowPetVideo(false)}>
            <div className="relative bg-paper-2 border-2 border-ink shadow-[22px_22px_0_rgba(31,43,224,0.16)] w-[466px] h-[620px] flex flex-col overflow-hidden transition-all duration-400 ease-out-expo hover:-translate-y-2 hover:shadow-[28px_28px_0_rgba(31,43,224,0.22)]" onClick={e => e.stopPropagation()}>
              <div className="flex gap-2 p-[20px] shrink-0 border-b-2 border-ink bg-paper">
                <i className="w-3 h-3 rounded-full bg-ink/20" />
                <i className="w-3 h-3 rounded-full bg-ink/20" />
                <i className="w-3 h-3 rounded-full bg-ink/20" />
              </div>
              <button className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-ink/10 hover:bg-ink/20 rounded-full transition-colors" onClick={() => setShowPetVideo(false)}>
                <svg className="w-5 h-5 text-ink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="relative flex-grow bg-ink/5">
                <video 
                  src="/desktop-pet.mp4" 
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  className="w-full h-full object-cover outline-none" 
                />
              </div>
            </div>
          </div>
        )}
      </SlideWrapper>

      {/* Slide 09: PRINCIPLES */}
      <SlideWrapper {...getProps(8)}>
        <Rule />
        <Chrome left="PRINCIPLES / 01" right="WHAT I REUSE ACROSS PROJECTS" />
        
        <SectionTitle mono="REUSABLE SYSTEM THINKING" title="这些项目背后反复出现的设计原则" />
        
        <div className="absolute left-[84px] right-[84px] top-[420px] bottom-[116px]">
          <div className="grid grid-cols-3 gap-[24px] reveal delay-2">
            <Principle num="01" title="从真实个人流程痛点出发">先证明自己会长期使用，再讨论产品化。</Principle>
            <Principle num="02" title="事实、状态、结论分离">让历史数据稳定，派生结果可重算。</Principle>
            <Principle num="03" title="AI 处理判断，规则处理稳定流程">不把所有问题都交给 LLM，也不硬堆正则。</Principle>
            <Principle num="04" title="外部写入前先预览">dry-run、preview、审计清单是自动化质量门。</Principle>
            <Principle num="05" title="为 agent 设计工作环境">入口协议、上下文索引、模块边界、测试和验收。</Principle>
            <Principle num="06" title="输出要能沉淀">好结果不是一次回答，而是能进入知识库和后续工作流。</Principle>
          </div>
        </div>
        
        <Ticker left="BOUNDARIES / FALLBACK / QUALITY GATES / HUMAN REVIEW" right="09 / 10" />
      </SlideWrapper>

      {/* Slide 10: CLOSING */}
      <SlideWrapper {...getProps(9)}>
        <Rule />
        <Chrome left="CLOSING" right="CONTACT" />
        
        <div className="absolute left-[84px] top-[190px]">
          <h2 className="text-ink font-serif text-[72px] leading-[1.1] font-bold tracking-normal reveal delay-1 max-w-[1200px]">我擅长把重复、混乱、需要判断的流程，变成有边界的 AI 工作流产品。</h2>
          <p className="text-[#302f29] font-cn text-[28px] leading-[1.55] font-medium reveal delay-2 mt-[44px] w-[900px]">我的优势不是单纯提示 AI，而是能定义问题、拆分流程、设计 agent 协作边界、加入质量门禁，并让输出成为可复用的知识或决策资产。</p>
        </div>
        
        <aside className="absolute right-[96px] top-[210px] w-[470px] bg-paper-2 border-2 border-ink shadow-[22px_22px_0_rgba(31,43,224,0.16)] p-[42px] transition-transform duration-400 ease-out-expo hover:scale-[1.02] reveal delay-3">
          <div className="font-cn text-text-main text-[24px] mb-4">GitHub: github.com/leeyongjielife-eng</div>
          <div className="font-cn text-text-main text-[24px] mb-4">Email: your-email@example.com</div>
          <div className="font-cn text-text-main text-[24px] mb-4">Notion / Portfolio: add link here</div>
          <div className="font-cn text-text-main text-[24px] mt-8 pt-6 border-t border-line-strong font-bold">Target: AI PM / AI 产品经理 / AI 应用工程</div>
        </aside>
        
        <Ticker left="THANK YOU" right="10 / 10" />
      </SlideWrapper>
    </>
  );
}

// Helpers for specific layouts
function TimelineRow({ num, title, subtitle, className = "" }: { num: string, title: string, subtitle: string, className?: string }) {
  return (
    <div className={`grid grid-cols-[72px_1.2fr_1fr] gap-[16px] items-center min-h-[64px] border-t border-line-strong px-2 py-3 transition-colors duration-300 hover:bg-[rgba(31,43,224,0.04)] ${className}`}>
      <b className="font-serif text-[28px] text-ink">{num}</b>
      <span className="font-cn text-text-main text-[22px] font-bold">{title}</span>
      <small className="font-cn text-[#676253] text-[18px] font-medium">{subtitle}</small>
    </div>
  );
}

function Principle({ num, title, children }: { num: string, title: string, children: ReactNode }) {
  return (
    <div className="min-h-[255px] border-[1.5px] border-line bg-[rgba(255,250,240,0.7)] p-[28px] transition-all duration-400 ease-out-expo hover:-translate-y-2 hover:border-ink hover:shadow-[28px_28px_0_rgba(31,43,224,0.22)]">
      <span className="font-mono text-ink text-[21px] block mb-2">{num}</span>
      <strong className="block text-text-main font-cn text-[32px] leading-[1.18] mb-[14px]">{title}</strong>
      <p className="font-cn text-[#36352f] text-[24px] leading-[1.43]">{children}</p>
    </div>
  );
}
