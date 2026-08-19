'use client'

import { useState } from 'react'
import { ArrowUpRight, GitBranch, Languages, Mail, MapPin, Maximize2, X } from 'lucide-react'

type Locale = 'zh' | 'en'

const copy = {
  zh: {
    nav: ['关于', '研究', '项目', '荣誉'],
    status: '开放交流与合作',
    role: '人工智能本科生 · 智能系统方向',
    intro:
      '我关注人工智能系统的实际构建与可靠评估，正在通过科研、开源实践与数据竞赛，构建可复现、可验证的 AI 技术作品集。',
    location: '苏州 · 西交利物浦大学',
    about: '关于我',
    aboutText:
      '我是西交利物浦大学 2025 级人工智能专业本科生，方向为 Intelligent Systems。我的兴趣跨越多模态理解、AI Agent、RAG 系统与机器学习应用开发。我希望把想法变成真正可运行、可测试、可改进的系统。',
    education: '教育背景',
    degree: '人工智能工学学士 · Intelligent Systems Pathway',
    graduation: '预计 2029 年毕业',
    gpa: 'GPA 3.975 / 4.0 · 2026/27 Academic Excellence Award',
    research: '研究兴趣',
    interests: [
      ['多模态人工智能', '图像、文本与语音等多源信息的联合理解、检索与推理。'],
      ['AI Agent 与 RAG', '关注工具调用、知识检索、任务规划与智能应用的工程化落地。'],
      ['计算机视觉', '图像分类、分割、科学图像分析，以及模型错误分析。'],
    ],
    projects: '进行中的项目',
    projectList: [
      [
        'Predicting Smartphone Addiction',
        'Kaggle Playground Series',
        '正在参加以表格数据预测为核心的 Kaggle Playground Series，系统训练数据清洗、特征工程、模型比较、交叉验证与提交复盘能力。',
        '',
      ],
      [
        '慧眸科技 / Rimberio',
        'AI 智慧课堂 · 海归创客 500 强',
        '项目入围“千个海归创客圆梦计划”500 强。项目面向高校课堂中“到课不等于参与”的问题，设计基于课堂答题参与的智能签到与互动系统，结合 AI 出题、动态二维码、限时答题和课后学情报告，帮助教师更准确地理解学生参与情况。',
        '/media/rimberio-smart-classroom-demo-2.mp4',
      ],
      [
        'AI-enabled Learning Platform',
        'Research Assistantship',
        '作为科研助理参与校内 AI 教学平台项目，探索 AI 在教学支持、学习过程辅助与平台功能设计中的实际应用。',
        '/media/ra-learning-platform-demo-h264.mp4',
      ],
    ],
    honors: '竞赛与荣誉',
    honorList: [
      ['全球校园人工智能算法精英大赛 · AI Agent Development Application 赛道 · 全国二等奖', '项目聚焦 AI + Healthcare，基于大语言模型与 Agent 工作流，探索医疗健康场景中的问答、信息整理与辅助服务原型。', ''],
      ['Outstanding Practice Award', 'OPC × Agent Super Individual Challenge。通过多 Agent 协作，构建覆盖产品宣传全流程的多平台闭环营销助手。', '/media/opc-agent-workflow-demo.mp4'],
      ['中国软件杯 A5 数字人赛道', '参与数字人方向项目实践，围绕多模态交互与应用演示进行原型展示。', '/media/software-cup-a5-demo.mp4'],
      ['西浦全球创业梦想家大赛 · 全球前 60 强 · 队长', '带领团队从全球 29 个国家和地区、119 所大学的 1170 份申请中晋级决赛。', '/media/dream-chasers-demo.mp4'],
      ['专业认证', '获得百度大语言模型应用开发工程师认证。', '/images/baidu-llm-certificate.jpg'],
    ],
    path: '技术成长路径',
    pathText: 'AI 系统：LangChain · RAG · AI Agent · Workflow · MCP',
    hardwarePath: '硬件与嵌入式 AI：Arduino · Core S3 · 小型机器人搭建',
    footer: '以好奇心出发，以可验证的作品抵达。',
  },
  en: {
    nav: ['About', 'Research', 'Projects', 'Honors'],
    status: 'Open to conversations',
    role: 'AI Undergraduate · Intelligent Systems',
    intro:
      'I build and evaluate practical AI systems, developing a reproducible and verifiable portfolio through research, open-source practice, and data competitions.',
    location: "Suzhou · Xi'an Jiaotong-Liverpool University",
    about: 'About me',
    aboutText:
      "I am a 2025-entry Artificial Intelligence undergraduate at Xi'an Jiaotong-Liverpool University. My interests span multimodal understanding, AI agents, RAG systems, and applied machine learning. I enjoy turning ideas into systems that can be run, tested, and improved.",
    education: 'Education',
    degree: 'BEng Artificial Intelligence · Intelligent Systems Pathway',
    graduation: 'Expected graduation · 2029',
    gpa: 'GPA 3.975 / 4.0 · 2026/27 Academic Excellence Award',
    research: 'Research interests',
    interests: [
      ['Multimodal AI', 'Joint understanding, retrieval, and reasoning across image, text, and speech.'],
      ['AI Agents & RAG', 'Tool use, knowledge retrieval, task planning, and production AI applications.'],
      ['Computer Vision', 'Image classification, segmentation, scientific imaging, and model error analysis.'],
    ],
    projects: 'Selected work',
    projectList: [
      [
        'Predicting Smartphone Addiction',
        'Kaggle Playground Series',
        'Competing in a tabular prediction challenge while developing a rigorous workflow for data cleaning, feature engineering, model comparison, cross-validation, and submission review.',
        '',
      ],
      [
        'Rimberio',
        'AI Smart Classroom · Top 500',
        'Selected as a Top 500 project in the “Thousand Overseas Returnee Makers Dream Plan”. The project addresses the gap between attendance and genuine participation with an intelligent check-in and interaction system based on quiz participation, AI-generated questions, dynamic QR codes, timed responses, and post-class learning reports.',
        '/media/rimberio-smart-classroom-demo-2.mp4',
      ],
      [
        'AI-enabled Learning Platform',
        'Research Assistantship',
        'Contributing as a research assistant and examining AI-supported teaching, learning-process assistance, and platform feature design from a technical architect’s perspective.',
        '/media/ra-learning-platform-demo-h264.mp4',
      ],
    ],
    honors: 'Competitions & honors',
    honorList: [
      ['Global Campus AI Algorithm Elite Competition · AI Agent Development Application Track · National Second Prize', 'The project explored AI + Healthcare through large language models and agent workflows, focusing on question answering, information organization, and assistive service prototyping for healthcare scenarios.', ''],
      ['Outstanding Practice Award', 'OPC × Agent Super Individual Challenge. Built a multi-platform closed-loop marketing assistant powered by coordinated multi-agent workflows.', '/media/opc-agent-workflow-demo.mp4'],
      ['China Software Cup A5 Digital Human Track', 'Worked on a digital-human project demo involving multimodal interaction and applied AI prototyping.', '/media/software-cup-a5-demo.mp4'],
      ['XJTLU Global Entrepreneurial Dream-Chasers Competition · Global Top 60 · Team Lead', 'Led a team into the finals from 1,170 applications across 119 universities in 29 countries and regions.', '/media/dream-chasers-demo.mp4'],
      ['Professional Certification', 'Certified as a Baidu Large Language Model Application Development Engineer.', '/images/baidu-llm-certificate.jpg'],
    ],
    path: 'Technical growth',
    pathText: 'AI systems: LangChain · RAG · AI Agent · Workflow · MCP',
    hardwarePath: 'Hardware & embedded AI: Arduino · Core S3 · small robot prototyping',
    footer: 'Led by curiosity, grounded in verifiable work.',
  },
}

export function PortfolioHome() {
  const [locale, setLocale] = useState<Locale>('en')
  const [copied, setCopied] = useState<'email' | 'github' | null>(null)
  const [media, setMedia] = useState<{ src: string; title: string; type: 'video' | 'image' } | null>(null)
  const t = copy[locale]

  async function copyContact(type: 'email' | 'github', value: string) {
    await navigator.clipboard.writeText(value)
    setCopied(type)
    window.setTimeout(() => setCopied(null), 1800)
  }

  return (
    <main className="min-h-screen bg-transparent text-foreground">
      <header className="glass-header sticky top-0 z-20 border-b border-border backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-end px-5 md:px-8">
          <div className="flex items-center gap-5">
            <nav aria-label="Primary navigation" className="hidden items-center gap-6 md:flex">
              {['about', 'research', 'projects', 'honors'].map((id, index) => (
                <a key={id} href={`#${id}`} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  {t.nav[index]}
                </a>
              ))}
            </nav>
            <button
              type="button"
              onClick={() => setLocale(locale === 'zh' ? 'en' : 'zh')}
              className="flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2 font-mono text-xs font-semibold transition-colors hover:bg-secondary"
              aria-label={locale === 'zh' ? 'Switch to English' : '切换到中文'}
            >
              <Languages aria-hidden="true" className="size-4" />
              {locale === 'zh' ? 'EN' : '中文'}
            </button>
          </div>
        </div>
      </header>

      <div id="top" className="mx-auto grid max-w-6xl gap-10 px-5 py-10 md:px-8 md:py-16 lg:grid-cols-[320px_1fr] lg:gap-20">
        <aside className="lg:sticky lg:top-24 lg:h-fit lg:self-start">
          <div className="mb-7">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">{t.role}</p>
            <h1 className="mt-4 text-balance font-serif text-6xl leading-none tracking-[-0.065em]">
              谢乐琦
              <span className="text-primary">.</span>
            </h1>
            <p className="mt-3 font-serif text-2xl italic text-muted-foreground">Leqi Xie</p>
            <p className="mt-5 max-w-[34rem] text-pretty text-sm leading-relaxed text-muted-foreground">{t.intro}</p>
            <p className="mt-4 flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <MapPin className="size-4" />
              {t.location}
            </p>
          </div>
          <div className="portrait-frame overflow-hidden rounded-[2rem] bg-secondary">
            <img
              src="/images/leqi-portrait.jpg"
              alt={locale === 'zh' ? '谢乐琦个人照片' : 'Portrait of Leqi Xie'}
              className="aspect-[4/5] w-full object-cover object-[center_38%]"
            />
          </div>
          <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
            <span className="size-2 rounded-full bg-primary" />
            {t.status}
          </div>
          <div className="mt-4 flex flex-col gap-2" aria-live="polite">
            <button
              type="button"
              onClick={() => copyContact('email', 'Leqi.Xie25@student.xjtlu.edu.cn')}
              className="flex min-h-11 items-center justify-between rounded-full border border-border bg-card/45 px-4 py-3 text-left text-xs transition-colors hover:bg-secondary"
              aria-label={locale === 'zh' ? '复制邮箱地址' : 'Copy email address'}
            >
              <span className="flex min-w-0 items-center gap-2">
                <Mail className="size-4 shrink-0" />
                <span className="truncate">Leqi.Xie25@student.xjtlu.edu.cn</span>
              </span>
              <span className="ml-3 font-mono text-primary">{copied === 'email' ? (locale === 'zh' ? '已复制' : 'Copied') : (locale === 'zh' ? '复制' : 'Copy')}</span>
            </button>
            <button
              type="button"
              onClick={() => copyContact('github', 'https://github.com/LeqiXie2025')}
              className="flex min-h-11 items-center justify-between rounded-full border border-border bg-card/45 px-4 py-3 text-left text-xs transition-colors hover:bg-secondary"
              aria-label={locale === 'zh' ? '复制 GitHub 地址' : 'Copy GitHub URL'}
            >
              <span className="flex min-w-0 items-center gap-2">
                <GitBranch className="size-4 shrink-0" />
                <span className="truncate">github.com/LeqiXie2025</span>
              </span>
              <span className="ml-3 font-mono text-primary">{copied === 'github' ? (locale === 'zh' ? '已复制' : 'Copied') : (locale === 'zh' ? '复制' : 'Copy')}</span>
            </button>
          </div>
        </aside>

        <div>
          <Section id="about" eyebrow="01" title={t.about}>
            <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">{t.aboutText}</p>
            <div className="portfolio-card mt-10 rounded-2xl border border-border px-5 py-5">
              <p className="font-semibold">Xi’an Jiaotong-Liverpool University</p>
              <p className="mt-1 text-sm text-muted-foreground">{t.degree}</p>
              <p className="mt-1 font-mono text-xs text-primary">
                {t.graduation} · {t.gpa}
              </p>
            </div>
          </Section>

          <Section id="research" eyebrow="02" title={t.research}>
            <div className="flex flex-col gap-8">
              {t.interests.map(([title, description]) => (
                <article key={title} className="grid gap-2 border-t border-border pt-5 sm:grid-cols-[180px_1fr] sm:gap-8">
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
                </article>
              ))}
            </div>
          </Section>

          <Section id="projects" eyebrow="03" title={t.projects}>
            <div className="flex flex-col gap-4">
              {t.projectList.map(([title, label, description, href, secondHref]) => (
                <article key={title} className="portfolio-card group rounded-3xl border border-border p-6 transition-transform hover:-translate-y-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{label}</p>
                      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
                    </div>
                    <ArrowUpRight className="size-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{description}</p>
                  {href ? (
                    <div className="mt-4 flex flex-wrap gap-3">
                      <MediaButton
                        label={secondHref ? (locale === 'zh' ? '查看演示视频 1' : 'View demo video 1') : locale === 'zh' ? '查看演示视频' : 'View demo video'}
                        onClick={() => setMedia({ src: href, title, type: 'video' })}
                      />
                      {secondHref ? (
                        <MediaButton
                          label={locale === 'zh' ? '查看演示视频 2' : 'View demo video 2'}
                          onClick={() => setMedia({ src: secondHref, title: `${title} · 2`, type: 'video' })}
                        />
                      ) : null}
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          </Section>

          <Section id="honors" eyebrow="04" title={t.honors}>
            <ol className="flex flex-col gap-0">
              {t.honorList.map(([title, detail, href], index) => (
                <li key={title} className="grid grid-cols-[2rem_1fr] gap-3 border-t border-border py-5">
                  <span className="quiet-rule mt-2 h-px w-5" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{detail}</p>
                    {href ? (
                      <MediaButton
                        label={href.endsWith('.jpg') ? (locale === 'zh' ? '查看证书' : 'View certificate') : locale === 'zh' ? '查看演示视频' : 'View demo video'}
                        onClick={() => setMedia({ src: href, title, type: href.endsWith('.jpg') ? 'image' : 'video' })}
                      />
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
          </Section>

          <section className="feature-panel rounded-3xl px-7 py-10 text-primary-foreground md:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-75">{t.path}</p>
            <p className="mt-5 text-balance font-serif text-2xl leading-relaxed md:text-3xl">{t.pathText}</p>
            <p className="mt-5 border-t border-primary-foreground/20 pt-5 text-sm leading-relaxed opacity-85">{t.hardwarePath}</p>
          </section>
        </div>
      </div>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between md:px-8">
          <p>© 2026 Leqi Xie</p>
          <p>{t.footer}</p>
        </div>
      </footer>

      {media ? (
        <MediaModal
          src={media.src}
          title={media.title}
          type={media.type}
          closeLabel={locale === 'zh' ? '关闭' : 'Close'}
          expandLabel={media.type === 'image' ? (locale === 'zh' ? '放大查看' : 'Enlarge') : locale === 'zh' ? '放大播放' : 'Enlarge'}
          onClose={() => setMedia(null)}
        />
      ) : null}
    </main>
  )
}

function MediaButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex min-h-9 items-center gap-1 rounded-full px-1 text-xs font-semibold text-primary transition-colors hover:text-foreground"
    >
      {label}
      <ArrowUpRight className="size-3" />
    </button>
  )
}

function MediaModal({
  src,
  title,
  type,
  closeLabel,
  expandLabel,
  onClose,
}: {
  src: string
  title: string
  type: 'video' | 'image'
  closeLabel: string
  expandLabel: string
  onClose: () => void
}) {
  async function enlarge() {
    const player = document.getElementById('portfolio-media-player')
    if (player?.requestFullscreen) {
      await player.requestFullscreen()
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/60 px-3 py-4 backdrop-blur-sm sm:px-4 sm:py-6" role="dialog" aria-modal="true" aria-label={title}>
      <div className="portfolio-card w-full max-w-5xl overflow-hidden rounded-3xl border border-border shadow-2xl">
        <div className="flex flex-col gap-3 border-b border-border px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
          <h2 className="text-sm font-semibold leading-snug md:text-base">{title}</h2>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={enlarge}
              className="inline-flex min-h-10 items-center gap-2 rounded-full border border-border px-3 py-2 text-xs text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <Maximize2 className="size-4" />
              {expandLabel}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex min-h-10 items-center gap-2 rounded-full border border-border px-3 py-2 text-xs text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <X className="size-4" />
              {closeLabel}
            </button>
          </div>
        </div>
        {type === 'video' ? (
          <video id="portfolio-media-player" src={src} controls autoPlay className="aspect-video w-full bg-black" />
        ) : (
          <img id="portfolio-media-player" src={src} alt={title} className="max-h-[78vh] w-full bg-black object-contain" />
        )}
      </div>
    </div>
  )
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 py-16 md:py-20">
      <div className="mb-9">
        <span className="quiet-rule mb-5 block h-px w-12" aria-hidden="true" />
        <h2 className="font-serif text-4xl tracking-[-0.035em] md:text-5xl">{title}</h2>
      </div>
      {children}
    </section>
  )
}
