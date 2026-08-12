'use client'

import {
  ArrowRight,
  BookOpenCheck,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  ExternalLink,
  Fingerprint,
  Languages,
  Layers3,
  Menu,
  Network,
  ShieldCheck,
  X,
} from 'lucide-react'
import { useEffect, useState } from 'react'

const APP_URL = 'http://124.174.108.70/personalized-secure'
const LAB_URL = 'http://124.174.108.70/ai-evidence-lab'
type Locale = 'zh' | 'en'

const content = {
  zh: {
    nav: ['概览', '功能', '架构', '快速开始', '研究', '常见问题', '成员介绍'],
    navIds: ['overview', 'capabilities', 'architecture', 'getting-started', 'research', 'faq', 'team'],
    start: '快速开始', language: 'Switch to English', menu: '打开导航',
    eyebrow: 'AI 驱动的个性化学习与可信教育研究平台',
    title: 'AI-X MentorOS',
    subtitle: '理解每一位学习者，组织清晰的成长路径，并在持续反馈中改进每一次学习。',
    intro: 'AI-X MentorOS 是面向个性化学习与可信教育研究的一体化智能平台。它将数字人导师、智能测评、自适应任务、职业课程推荐、双语学习支持和全链路证据记录连接在同一套系统中。平台不只是展示课程内容，而是持续理解学习者的目标、知识基础、行为表现、兴趣方向与阶段性成果，在每次互动后更新学习状态，并据此提供更合适的讲解、练习、反馈与后续建议。',
    view: '了解平台能力',
    overviewTag: '平台概览', overviewTitle: '面向真实学习过程的智能学习操作系统',
    overviewP1: '传统在线学习平台通常以课程为中心：教学内容、难度和学习顺序预先设定，不同基础与目标的学习者往往沿着相同路径前进。AI-X MentorOS 转而以学习者为中心，将学习目标、已有知识、任务表现、测评结果、兴趣偏好和职业方向组织为一份持续更新的学习状态，让系统能够理解“当前学到了哪里”“遇到了什么困难”以及“下一步最需要什么”。',
    overviewP2: '基于这份动态状态，平台可以决定下一步应学习的内容、任务难度与节奏如何调整、哪些概念需要换一种方式解释，以及哪些学习成果应被记录和验证。数字人交互、智能测评、自适应推荐、双语内容与证据系统并不是相互割裂的功能，而是共同构成从目标设定、学习实践到评估改进的完整闭环。',
    highlights: ['以学习者当前知识、目标与反馈驱动学习路径，而不是遵循固定课程顺序', '把讲解、问答、练习、测评、推荐与反思连接为连续且可调整的学习过程', '同时支持中文与英文学习场景，帮助不同语言背景的使用者理解平台内容', '通过 AI Evidence Lab 公开核心机制、研究依据、算法说明与验证信息'],
    capabilityTag: '核心功能', capabilityTitle: '围绕“理解—学习—评估—改进”构建的核心能力',
    capabilityLead: '六项核心能力分别对应理解、讲解、练习、评估、推荐、语言支持与可信记录等关键环节。它们共享同一份学习者上下文，并在真实平台中协同运行，使每一次互动都能影响后续学习。点击功能可进入 AI Evidence Lab 查看更完整的机制、研究依据与实现说明。', details: '查看详细说明',
    features: [
      ['数字人 AI 导师', '通过自然语音、可视化内容与连续对话提供有节奏的知识讲解，支持追问、概念澄清、例题演示和学习陪伴。导师会结合当前目标与反馈调整解释方式，把抽象概念转化为更清楚的语言、步骤和示例，并鼓励学习者主动表达理解与疑问。', '01-digital-human.html'],
      ['Quiz 智能评估', '围绕当前学习目标自动组织单选、多选、判断与简答等多种测验形式，在作答后提供即时反馈与解释。评估结果不仅呈现分数，还用于识别知识盲点、错误类型、掌握程度与需要重新学习的内容，为下一阶段任务提供依据。', '02-quiz.html'],
      ['Step 自适应分层', '结合任务完成情况、测评结果、作答过程与学习节奏，动态调整任务难度、知识粒度、提示数量和前进速度。系统既避免让学习者反复完成已经掌握的内容，也防止后续任务超出当前可理解范围，使挑战保持适度且连续。', '03-adaptive-step.html'],
      ['职业课程推荐', '综合能力画像、兴趣方向、职业目标、学习进度与课程资源生成个性化建议，并说明推荐理由、能力关联和可能的发展方向。它帮助学习者理解当前知识如何连接到未来课程、项目实践与长期职业成长，而不是只给出缺乏解释的课程列表。', '04-career-recommendation.html'],
      ['全链路证据系统', '记录关键学习行为、测评结果、内容生成与系统决策，并通过 SHA-256 完整性校验支持过程追溯。教师与研究者可以据此理解系统为何给出某项反馈，为教学复盘、效果验证、研究复现与可信 AI 治理提供可检查的依据。', '05-evidence-chain.html'],
      ['中英文双语国际化', '页面内容、导航与核心说明支持中文和英文即时切换，为不同语言背景的学习者、教师与研究者提供一致的信息结构。双语设计不仅是界面翻译，也为跨语言学习内容、国际课程交流和后续多语言扩展建立统一基础。', 'index.html'],
    ],
    architectureTag: '系统架构', architectureTitle: '多个模块共享同一份学习者上下文',
    architectureLead: 'AI-X MentorOS 以共享的学习者上下文连接各项能力，并通过分层协作保证信息能够在交互、判断、状态更新与证据记录之间有序流动。交互层接收真实学习行为，智能层完成理解、生成与推荐，状态层保存持续变化的学习画像，证据层记录关键输入、输出和结果，使系统既能及时适应，也能够被解释、检查和研究。',
    layers: [
      ['学习交互层', '数字人授课、自然语言问答、双语内容、智能测验、项目活动与白板协作共同构成学习者直接使用的平台入口。该层关注表达是否清楚、操作是否连贯，以及学习者能否方便地反馈疑问和当前理解。'],
      ['智能决策层', '结合学习目标、能力状态、历史表现和实时行为反馈，完成内容生成、难度调整、知识诊断、课程推荐与反馈组织。不同能力使用一致的上下文，避免各模块给出相互割裂的建议。'],
      ['学习状态层', '持续汇总任务进度、测评结果、知识盲点、兴趣方向、语言偏好与阶段性成果，形成可以随学习过程更新的状态描述，为每一次后续决策提供更完整的背景。'],
      ['可信证据层', '保存关键过程记录、系统输出、算法说明和研究依据，并通过完整性校验支持教学审查、过程复盘、实验复现与研究分析，让重要判断拥有可追溯的来源。'],
    ],
    gettingTag: '快速开始', gettingTitle: '从一次真实学习任务开始',
    gettingLead: '进入平台后，学习者可以选择学习方向，确认个人目标，并完成初始活动。AI-X MentorOS 会在讲解、问答、练习和测评中逐步形成对学习状态的理解，再据此调整后续内容。整个过程不要求一次性提供完整画像，而是在真实学习中持续积累信息、提供反馈并改进路径。',
    startSteps: [['进入平台', '打开 AI-X MentorOS，进入当前可用的个性化学习空间，并根据需要选择中文或英文界面。'], ['确定目标', '选择希望学习的主题、职业发展方向，或描述一个当前需要解决的具体问题。'], ['完成学习活动', '跟随数字人导师进行讲解与问答，参与测验、项目任务和互动练习，让系统获得真实学习反馈。'], ['查看反馈', '结合知识诊断、任务表现、课程推荐与过程证据理解当前状态，并继续下一阶段学习。']],
    researchTag: '研究与证据', researchTitle: '平台能力有依据，关键过程可追溯',
    researchLead: 'AI Evidence Lab 是 AI-X MentorOS 的公开研究与说明入口。它按照功能模块组织设计目标、算法逻辑、同行评审文献、关键流程与完整性记录，帮助教师、研究者、学习者及合作伙伴理解平台如何工作、为何采用这些方法、存在哪些适用边界，以及相关过程和结论可以如何被复核。',
    researchPoints: ['核心模块提供相对独立且结构统一的详细说明页面，便于按功能查阅', '关键设计原则关联同行评审研究、学习科学理论与可解释的方法说明', '学习过程、测评结果与重要系统输出保留可验证的完整性记录', '研究入口持续记录平台迭代，使功能变化与依据更新保持透明'], openLab: '进入 AI Evidence Lab',
    faqTag: '常见问题', faqTitle: '关于 AI-X MentorOS',
    faqs: [
      ['它与普通在线课程平台有什么不同？', '普通平台主要负责展示、分发和管理课程，内容顺序通常相对固定。AI-X MentorOS 更关注学习过程本身：它会综合目标、知识基础、任务行为、测评结果和兴趣方向，持续更新学习状态，并据此调整讲解方式、任务难度、反馈内容与后续推荐。'],
      ['平台会替代教师吗？', '不会。AI-X MentorOS 的定位是支持教师与学习者，而不是替代真实教学关系。平台可以承担重复讲解、即时反馈、基础诊断、资源整理和过程记录，为教师提供更完整的学习线索，让教师把更多精力放在目标设计、深度指导、情感支持与复杂判断上。'],
      ['为什么需要 AI Evidence Lab？', '当 AI 参与内容生成、学习诊断和教育建议时，可解释性、可验证性与适用边界都非常重要。AI Evidence Lab 集中展示模块机制、算法逻辑、研究依据和完整性信息，使使用者能够理解系统判断的来源，减少黑箱式使用，并为教学研究提供可复核材料。'],
      ['中英文切换覆盖哪些内容？', '介绍页面的导航、功能说明、架构、快速开始、研究信息、常见问题与成员板块均支持中文和英文切换。平台将以统一的信息结构持续扩展双语学习内容与国际化场景。'],
      ['目前可以从哪里体验？', '点击页面中的“快速开始”即可进入当前可用的 AI-X MentorOS 平台。核心功能的技术机制、研究来源与证据说明可通过 AI Evidence Lab 进一步查看。'],
    ],
    teamTag: '成员介绍', teamTitle: '跨学科协作，共同建设 AI-X MentorOS',
    teamLead: 'AI-X MentorOS 由跨学科团队共同建设，协作范围涵盖人工智能、教育研究、学习科学、产品设计与系统工程。不同专业方向共同参与学习需求分析、教学机制设计、模型与系统开发、双语内容组织、学习体验优化以及研究验证，使平台不仅具备可实际使用的智能学习能力，也能够持续关注教育价值、技术边界、数据可信与长期迭代。',
    teamAreas: [
      ['教育与学习科学', '研究学习目标、教学流程、测评方法与反馈机制，为平台的自适应学习闭环提供教育理论与实践依据。'],
      ['人工智能与算法', '负责数字人交互、内容生成、知识诊断、个性化推荐与模型评估等智能能力的设计和实现。'],
      ['产品与体验设计', '将复杂的学习机制转化为清楚、连贯的使用流程，关注学习者、教师与研究者在不同场景中的真实需求。'],
      ['平台与可信系统', '建设稳定的平台架构、数据流程与证据系统，支持关键过程记录、完整性校验、研究复现与持续迭代。'],
    ],
    teamNote: '具体成员信息、专业背景与合作单位将在项目资料确认后持续更新；当前板块先说明团队所覆盖的主要协作方向。',
    footer: 'AI-X MentorOS · 个性化学习与可信教育研究平台',
  },
  en: {
    nav: ['Overview', 'Features', 'Architecture', 'Get started', 'Research', 'FAQ', 'Team'],
    navIds: ['overview', 'capabilities', 'architecture', 'getting-started', 'research', 'faq', 'team'],
    start: 'Get started', language: '切换到中文', menu: 'Open navigation',
    eyebrow: 'AI-powered personalized learning and trustworthy education research',
    title: 'AI-X MentorOS',
    subtitle: 'Understand every learner, organize a clear growth pathway, and improve each learning step through continuous feedback.',
    intro: 'AI-X MentorOS is an integrated platform for personalized learning and trustworthy education research. It connects a digital human tutor, intelligent assessment, adaptive tasks, career-aligned recommendations, bilingual support, and end-to-end learning evidence in one system. Instead of merely delivering course content, it continuously interprets goals, prior knowledge, behavior, interests, and outcomes, then uses that evolving context to offer clearer explanations, suitable practice, timely feedback, and relevant next steps.',
    view: 'Explore capabilities',
    overviewTag: 'Overview', overviewTitle: 'An intelligent learning operating system for real learning processes',
    overviewP1: 'Conventional online platforms are generally course-centered: content, difficulty, and sequence are predetermined, so learners with different foundations and ambitions often follow the same path. AI-X MentorOS is learner-centered. It organizes goals, prior knowledge, task behavior, assessment results, interests, language preferences, and career direction into a continuously updated learner state.',
    overviewP2: 'This dynamic state informs what should be learned next, how pace and challenge should change, which concepts need a different explanation, and which outcomes deserve to be recorded. Digital-human interaction, assessment, adaptation, recommendation, bilingual content, and trustworthy evidence operate together as one connected cycle from goal setting to reflection and improvement.',
    highlights: ['Pathways respond to current knowledge, goals, and feedback rather than a fixed course order', 'Instruction, questions, practice, assessment, recommendations, and reflection remain connected', 'Chinese and English experiences make the platform accessible across language contexts', 'AI Evidence Lab makes mechanisms, research foundations, algorithm explanations, and validation visible'],
    capabilityTag: 'Core features', capabilityTitle: 'Core capabilities built around understanding, learning, assessment, and improvement',
    capabilityLead: 'Six core capabilities support tutoring, practice, assessment, adaptation, recommendation, language access, and trustworthy records. They share the same learner context and work together in the live platform, allowing every interaction to influence the next learning decision. Open a feature to inspect its mechanisms and research foundations in AI Evidence Lab.', details: 'View details',
    features: [
      ['Digital Human AI Tutor', 'Natural voice, visual materials, continuous dialogue, concept clarification, worked examples, and guided companionship turn complex knowledge into a more approachable experience. The tutor can adjust explanations in response to goals and feedback while encouraging learners to articulate questions and understanding.', '01-digital-human.html'],
      ['Intelligent Quiz Assessment', 'Goal-aligned multiple-choice, multi-select, true-or-false, and open questions provide immediate feedback and explanations. Results are used not only as scores, but also to identify knowledge gaps, error patterns, mastery, and concepts that should be revisited.', '02-quiz.html'],
      ['Adaptive Step Layering', 'Task difficulty, pace, content granularity, and the amount of guidance respond to performance, assessment results, and learning rhythm. The next step avoids unnecessary repetition without moving beyond the learner’s current range of understanding.', '03-adaptive-step.html'],
      ['Career Course Recommendation', 'Skill profiles, interests, career goals, progress, and course resources are connected through explainable recommendations. Learners can understand why an option is relevant and how current study relates to future courses, projects, and long-term development.', '04-career-recommendation.html'],
      ['End-to-End Evidence System', 'Critical learning actions, assessments, generated content, and system decisions are recorded with SHA-256 integrity checks. These records support traceability, teaching review, research reproduction, outcome validation, and responsible AI governance.', '05-evidence-chain.html'],
      ['Chinese–English Internationalization', 'Navigation, platform explanations, and major content structures switch instantly between Chinese and English, providing a consistent experience for learners, educators, and researchers across language backgrounds. The bilingual foundation also supports international courses, cross-language learning, and future multilingual expansion.', 'index.html'],
    ],
    architectureTag: 'Architecture', architectureTitle: 'Multiple modules share one learner context',
    architectureLead: 'AI-X MentorOS connects its capabilities through a shared learner context and a layered flow of interaction, decision-making, state updates, and evidence. The interaction layer receives authentic learning activity, the intelligence layer interprets and recommends, the state layer preserves evolving context, and the evidence layer records critical inputs, outputs, and outcomes so adaptation remains explainable and open to inspection.',
    layers: [['Learning interaction', 'Digital-human lessons, natural-language Q&A, bilingual content, quizzes, projects, and whiteboard collaboration form the learner-facing environment. This layer focuses on clear expression, connected workflows, and convenient ways for learners to communicate questions and understanding.'], ['Intelligent decisions', 'Goals, ability state, prior performance, and real-time feedback drive content generation, adaptation, diagnosis, and recommendations. A shared context keeps different modules from producing disconnected guidance.'], ['Learner state', 'Progress, assessments, knowledge gaps, interests, language preferences, and outcomes are continuously summarized to provide richer context for every subsequent learning decision.'], ['Trustworthy evidence', 'Critical records, system outputs, algorithm explanations, and research sources are preserved with integrity checks to support teaching review, process reflection, reproducibility, and research analysis.']],
    gettingTag: 'Get started', gettingTitle: 'Begin with one real learning task',
    gettingLead: 'Enter the platform, choose a learning direction, confirm a personal goal, and complete an initial activity. AI-X MentorOS develops its understanding through explanation, dialogue, practice, and assessment, then adapts subsequent content. A complete profile is not required in advance; the system learns progressively from authentic activity and feedback.',
    startSteps: [['Enter the platform', 'Open the currently available AI-X MentorOS personalized learning space and select Chinese or English when needed.'], ['Define a goal', 'Choose a subject, career direction, or describe a specific problem that you want to solve.'], ['Complete activities', 'Follow the digital tutor, ask questions, and participate in quizzes, projects, and interactive practice to provide authentic learning signals.'], ['Review feedback', 'Use knowledge diagnosis, task performance, course recommendations, and process evidence to understand your state and continue to the next stage.']],
    researchTag: 'Research and evidence', researchTitle: 'Grounded capabilities and traceable processes',
    researchLead: 'AI Evidence Lab is the public research and explanation gateway for AI-X MentorOS. It organizes design goals, feature mechanisms, algorithm logic, peer-reviewed literature, workflows, and integrity records by module so educators, researchers, learners, and partners can understand how the platform works, why particular methods are used, where their boundaries lie, and how processes can be reviewed.',
    researchPoints: ['Consistent, dedicated explanation pages make individual core modules easy to inspect', 'Design principles connect to peer-reviewed research, learning science, and explainable methods', 'Learning processes, assessments, and significant system outputs retain verifiable integrity records', 'The research gateway documents ongoing iteration so changes in capabilities and evidence remain transparent'], openLab: 'Open AI Evidence Lab',
    faqTag: 'FAQ', faqTitle: 'About AI-X MentorOS',
    faqs: [['How is it different from a course platform?', 'Course platforms primarily publish, distribute, and manage content in a relatively fixed sequence. AI-X MentorOS focuses on the learning process itself, using goals, prior knowledge, behavior, assessments, and interests to update learner context and adapt explanations, challenge, feedback, and recommendations.'], ['Does it replace teachers?', 'No. AI-X MentorOS supports educators and learners rather than replacing authentic teaching relationships. It can assist with repeated explanations, immediate feedback, foundational diagnosis, resource organization, and process records, allowing educators to focus more attention on learning design, deep guidance, emotional support, and complex judgment.'], ['Why is AI Evidence Lab needed?', 'When AI participates in content generation, learning diagnosis, and educational recommendations, explainability, verification, and appropriate boundaries matter. AI Evidence Lab exposes mechanisms, algorithm logic, research foundations, and integrity information so decisions can be understood and reviewed rather than accepted as a black box.'], ['What does bilingual support cover?', 'Navigation, feature explanations, architecture, getting-started guidance, research information, FAQs, and team content all switch between Chinese and English. The platform will continue extending bilingual learning content and international use cases through the same information structure.'], ['Where can I try it?', 'Use any “Get started” link to open the currently available AI-X MentorOS platform. Technical mechanisms, research sources, and evidence for the core capabilities are available through AI Evidence Lab.']],
    teamTag: 'Team', teamTitle: 'Building AI-X MentorOS through interdisciplinary collaboration',
    teamLead: 'AI-X MentorOS is developed through collaboration across artificial intelligence, education research, learning science, product design, and systems engineering. These disciplines contribute to learning-needs analysis, pedagogy, model and platform development, bilingual content organization, experience design, and research validation, helping the platform remain useful in practice while addressing educational value, technical boundaries, data trust, and long-term improvement.',
    teamAreas: [
      ['Education and learning science', 'Researches learning goals, instructional processes, assessment, and feedback to ground the adaptive learning cycle in educational theory and practice.'],
      ['Artificial intelligence', 'Designs and implements digital-human interaction, content generation, knowledge diagnosis, personalized recommendations, and model evaluation.'],
      ['Product and experience design', 'Turns complex learning mechanisms into clear, connected workflows for learners, educators, and researchers.'],
      ['Platform and trustworthy systems', 'Develops the platform architecture, data flows, and evidence system for integrity checks, reproducible research, and continuous improvement.'],
    ],
    teamNote: 'Individual member profiles and partner organizations will be added as project information is confirmed.',
    footer: 'AI-X MentorOS · Personalized learning and trustworthy education research',
  },
} as const

const icons = [Bot, BookOpenCheck, Layers3, BriefcaseBusiness, Fingerprint, Languages]

export function LandingPage() {
  const [locale, setLocale] = useState<Locale>('zh')
  const [menuOpen, setMenuOpen] = useState(false)
  const t = content[locale]
  const toggleLocale = () => setLocale((value) => (value === 'zh' ? 'en' : 'zh'))

  useEffect(() => { document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en' }, [locale])

  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-5 lg:px-8">
          <a href="#top" className="group flex items-center gap-3 font-semibold tracking-tight"><span className="flex size-9 items-center justify-center rounded-lg border bg-card text-primary shadow-sm transition-transform group-hover:-translate-y-0.5"><Network className="size-4" /></span><span>AI-X MentorOS</span></a>
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">{t.nav.map((item, i) => <a key={item} href={`#${t.navIds[i]}`} className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">{item}</a>)}</nav>
          <div className="hidden items-center gap-2 lg:flex"><button onClick={toggleLocale} aria-label={t.language} className="inline-flex h-9 items-center gap-2 rounded-md border bg-card px-3 text-sm font-medium shadow-sm transition-colors hover:bg-muted"><Languages className="size-4" />{locale === 'zh' ? 'English' : '中文'}</button><a href={APP_URL} target="_blank" rel="noreferrer" className="inline-flex h-9 items-center gap-2 rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-sm transition-opacity hover:opacity-90">{t.start}<ArrowRight className="size-4" /></a></div>
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label={t.menu} className="flex size-10 items-center justify-center rounded-md border lg:hidden">{menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}</button>
        </div>
        {menuOpen && <nav className="flex flex-col gap-1 border-t bg-background px-5 py-4 lg:hidden">{t.nav.map((item, i) => <a key={item} href={`#${t.navIds[i]}`} onClick={() => setMenuOpen(false)} className="rounded-md px-3 py-3 text-sm font-medium hover:bg-muted">{item}</a>)}<button onClick={toggleLocale} className="px-3 py-3 text-left text-sm font-medium">{locale === 'zh' ? 'English' : '中文'}</button></nav>}
      </header>

      <section id="top" className="relative overflow-hidden border-b bg-card">
        <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="max-w-4xl border-l-2 border-primary pl-6 sm:pl-8">
            <p className="text-sm font-semibold tracking-wide text-primary">{t.eyebrow}</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{t.title}</h1>
            <p className="mt-5 max-w-3xl text-xl font-medium leading-relaxed sm:text-2xl">{t.subtitle}</p>
          </div>
          <div className="mt-10 grid max-w-5xl gap-8 border-t pt-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <p className="max-w-3xl text-base leading-8 text-muted-foreground">{t.intro}</p>
            <div className="flex flex-wrap gap-3"><a href={APP_URL} target="_blank" rel="noreferrer" className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition-opacity hover:opacity-90">{t.start}<ArrowRight className="size-4" /></a><a href="#capabilities" className="inline-flex h-11 items-center rounded-md border bg-card px-5 text-sm font-semibold shadow-sm transition-colors hover:bg-muted">{t.view}</a></div>
          </div>
        </div>
      </section>

      <TextSection id="overview" tag={t.overviewTag} title={t.overviewTitle}>
        <p>{t.overviewP1}</p><p>{t.overviewP2}</p>
        <ul className="flex flex-col gap-3">{t.highlights.map((item) => <li key={item} className="flex items-start gap-3 text-foreground"><Check className="mt-1 size-4 shrink-0 text-primary" />{item}</li>)}</ul>
      </TextSection>

      <section id="capabilities" className="scroll-mt-20 border-y bg-muted/35 py-16 lg:py-24"><div className="mx-auto max-w-6xl px-5 lg:px-8"><SectionHeader tag={t.capabilityTag} title={t.capabilityTitle} lead={t.capabilityLead} /><div className="mt-12 grid gap-4 md:grid-cols-2">{t.features.map(([title, description, page], i) => { const Icon = icons[i]; return <a key={title} href={`${LAB_URL}/${page}`} target="_blank" rel="noreferrer" className="group flex min-h-72 flex-col rounded-xl border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"><div className="flex items-center justify-between"><span className="flex size-10 items-center justify-center rounded-lg border bg-muted text-primary"><Icon className="size-4" /></span><span className="font-mono text-xs text-muted-foreground">0{i + 1}</span></div><h3 className="mt-6 text-lg font-semibold tracking-tight">{title}</h3><p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">{description}</p><span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">{t.details}<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></span></a>})}</div></div></section>

      <section id="architecture" className="scroll-mt-20 bg-card py-16 lg:py-24"><div className="mx-auto max-w-6xl px-5 lg:px-8"><SectionHeader tag={t.architectureTag} title={t.architectureTitle} lead={t.architectureLead} /><div className="mt-12 overflow-hidden rounded-xl border bg-background shadow-sm">{t.layers.map(([title, description], i) => <article key={title} className="grid gap-4 border-b p-6 last:border-b-0 md:grid-cols-[3rem_14rem_1fr] md:items-start lg:p-7"><span className="font-mono text-xs font-semibold text-primary">0{i + 1}</span><h3 className="font-semibold tracking-tight">{title}</h3><p className="text-sm leading-7 text-muted-foreground">{description}</p></article>)}</div></div></section>

      <section id="getting-started" className="scroll-mt-20 border-y bg-muted/35 py-16 lg:py-24"><div className="mx-auto max-w-6xl px-5 lg:px-8"><SectionHeader tag={t.gettingTag} title={t.gettingTitle} lead={t.gettingLead} /><div className="relative mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{t.startSteps.map(([title, description], i) => <article key={title} className="rounded-xl border bg-card p-6 shadow-sm"><span className="flex size-8 items-center justify-center rounded-full border font-mono text-xs font-semibold text-primary">0{i + 1}</span><h3 className="mt-5 font-semibold tracking-tight">{title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{description}</p></article>)}</div><a href={APP_URL} target="_blank" rel="noreferrer" className="mt-10 inline-flex h-11 items-center gap-2 rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition-opacity hover:opacity-90">{t.start}<ExternalLink className="size-4" /></a></div></section>

      <section id="research" className="scroll-mt-20 bg-card py-16 lg:py-24"><div className="mx-auto max-w-6xl px-5 lg:px-8"><SectionHeader tag={t.researchTag} title={t.researchTitle} lead={t.researchLead} /><div className="mt-12 grid gap-6 rounded-xl border bg-background p-6 shadow-sm md:grid-cols-[1fr_auto] md:items-end lg:p-8"><ul className="grid gap-4 md:grid-cols-2">{t.researchPoints.map((item) => <li key={item} className="flex items-start gap-3 text-sm leading-7"><ShieldCheck className="mt-1 size-4 shrink-0 text-primary" />{item}</li>)}</ul><a href={`${LAB_URL}/index.html`} target="_blank" rel="noreferrer" className="inline-flex h-11 items-center gap-2 rounded-md border bg-card px-5 text-sm font-semibold shadow-sm transition-colors hover:bg-muted">{t.openLab}<ArrowRight className="size-4" /></a></div></div></section>

      <section id="faq" className="scroll-mt-20 border-y bg-muted/35 py-16 lg:py-24"><div className="mx-auto max-w-6xl px-5 lg:px-8"><SectionHeader tag={t.faqTag} title={t.faqTitle} /><div className="mt-10 overflow-hidden rounded-xl border bg-card shadow-sm">{t.faqs.map(([question, answer], i) => <article key={question} className="grid gap-4 border-b p-6 last:border-b-0 md:grid-cols-[2rem_18rem_1fr] lg:p-7"><span className="font-mono text-xs text-primary">0{i + 1}</span><h3 className="font-semibold tracking-tight">{question}</h3><p className="text-sm leading-7 text-muted-foreground">{answer}</p></article>)}</div></div></section>

      <section id="team" className="scroll-mt-20 bg-card py-16 lg:py-24"><div className="mx-auto max-w-6xl px-5 lg:px-8"><SectionHeader tag={t.teamTag} title={t.teamTitle} lead={t.teamLead} /><div className="mt-12 grid gap-4 md:grid-cols-2">{t.teamAreas.map(([title, description], i) => <article key={title} className="rounded-xl border bg-background p-6 shadow-sm"><div className="flex items-center gap-3"><span className="flex size-8 items-center justify-center rounded-full bg-primary/10 font-mono text-xs font-semibold text-primary">0{i + 1}</span><h3 className="font-semibold tracking-tight">{title}</h3></div><p className="mt-4 text-sm leading-7 text-muted-foreground">{description}</p></article>)}</div><p className="mt-6 border-l-2 border-primary pl-4 text-sm leading-7 text-muted-foreground">{t.teamNote}</p></div></section>

      <footer className="border-t"><div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8"><p>{t.footer}</p><div className="flex gap-5"><a href={`${LAB_URL}/index.html`} target="_blank" rel="noreferrer">AI Evidence Lab</a><button onClick={toggleLocale}>{locale === 'zh' ? 'English' : '中文'}</button></div></div></footer>
    </main>
  )
}

function SectionHeader({ tag, title, lead }: { tag: string; title: string; lead?: string }) {
  return <div className="max-w-4xl"><div className="flex items-center gap-3"><span className="h-px w-8 bg-primary" aria-hidden="true" /><p className="text-sm font-semibold tracking-wide text-primary">{tag}</p></div><h2 className="mt-4 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>{lead && <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground">{lead}</p>}</div>
}

function TextSection({ id, tag, title, children }: { id: string; tag: string; title: string; children: React.ReactNode }) {
  return <section id={id} className="scroll-mt-20 bg-card py-16 lg:py-24"><div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[.8fr_1.2fr] lg:gap-16 lg:px-8"><SectionHeader tag={tag} title={title} /><div className="flex flex-col gap-6 rounded-xl border bg-background p-6 text-base leading-8 text-muted-foreground shadow-sm lg:p-8">{children}</div></div></section>
}
