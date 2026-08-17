'use client'

import { useState } from 'react'
import { ArrowUpRight, GitBranch, Languages, Mail, MapPin } from 'lucide-react'

type Locale = 'zh' | 'en'

const profile = {
  email: 'Leqi.Xie25@student.xjtlu.edu.cn',
  github: 'https://github.com/LeqiXie2025',
}

const copy = {
  zh: {
    nav: ['关于', '方向', '项目', '经历'],
    switchLabel: 'EN',
    role: '人工智能本科生 · Intelligent Systems',
    name: '谢乐琦',
    englishName: 'Leqi Xie',
    location: '苏州 · 西交利物浦大学',
    status: 'Open to research, projects, and collaboration',
    intro:
      '我关注人工智能系统的实际构建与可靠评估，当前兴趣方向包括多模态人工智能、视觉语言理解、AI Agent、RAG 系统以及机器学习应用开发。',
    aboutTitle: '关于我',
    about:
      '我目前是西交利物浦大学 2025 级人工智能专业本科生，方向为 Intelligent Systems。我的经历结合了 AI 应用开发、数据竞赛、科研助理和创新创业项目。我希望通过可复现的项目、实验记录和开源实践，逐步建立扎实的 AI 技术作品集。',
    educationTitle: '教育背景',
    school: "Xi'an Jiaotong-Liverpool University",
    degree: 'BEng Artificial Intelligence · Intelligent Systems Pathway',
    graduation: 'Expected Graduation: 2029',
    gpa: 'GPA: 3.975 / 4.0',
    award: 'Academic Excellence Award',
    interestsTitle: '研究与技术兴趣',
    interests: [
      ['多模态人工智能', '关注图像、文本、语音等多源信息的联合理解、检索与推理。'],
      ['AI Agent 与 RAG 系统', '关注大语言模型在工具调用、知识检索、任务规划和应用系统中的工程化落地。'],
      ['计算机视觉与图像分析', '关注图像分类、图像分割、科学图像分析和模型错误分析。'],
      ['可靠 AI 系统', '关注模型评估、失败案例分析、可复现实验和面向真实场景的 AI 应用。'],
    ],
    projectsTitle: '当前项目',
    projects: [
      [
        'Predicting Smartphone Addiction',
        'Kaggle Playground Series',
        '正在参加 Kaggle Playground Series 中的表格预测比赛，重点训练数据清洗、特征工程、模型比较、交叉验证和提交复盘能力。',
      ],
      [
        '慧眸科技 / Rimberio',
        'AI 智慧课堂项目 · 入围 500 强',
        '入围“千个海归创客圆梦计划”500 强。项目面向高校课堂中“到课不等于参与”的问题，设计基于课堂答题参与的智能签到与课堂互动系统，结合 AI 出题、动态二维码、限时答题和课后学情报告，帮助教师更好地了解学生的课堂参与情况。',
      ],
      [
        'AI-enabled Learning Platform',
        'Undergraduate Research Assistantship',
        '作为本科科研助理参与学校 AI 教学平台相关项目，关注 AI 技术在教学支持、学习过程辅助和平台功能设计中的应用。',
      ],
      [
        'AI Agent for Healthcare Scenario',
        'AI Agent Development Project',
        '参与 AI + Healthcare 场景下的 AI Agent 应用项目，涉及 LLM 工作流设计、Prompt Engineering、RAG 思路和应用层 Agent 架构。',
      ],
    ],
    honorsTitle: '竞赛与荣誉',
    honors: [
      ['National Second Prize', 'Global Campus AI Algorithm Elite Competition · AI Agent Development Application track.'],
      ['Outstanding Practice Award', 'OPC x Agent Super Individual Challenge · multi-platform AI agent application project.'],
      ['Team Leader and Finalist', 'XJTLU Global Entrepreneurial Dream-Chasers Competition · Top 60 among 1,170 global submissions.'],
      ['Professional Certification', 'Baidu Large Language Model Application Development Engineer Certification.'],
    ],
    technicalTitle: '技术成长路径',
    technicalGroups: [
      ['AI Systems', 'LangChain, RAG, AI Agents, workflow orchestration, Dify, Coze, and MCP-based application workflows.'],
      ['Competition-based Practice', 'AI agent development, digital human systems, data prediction, and intelligent application prototyping.'],
      ['Hardware & Embedded AI', 'Basic experience with Arduino, Core S3, and small-scale robotics prototyping.'],
    ],
    skillsTitle: '技能',
    skills: [
      ['Programming', 'Python, C/C++, SQL, JavaScript'],
      ['Machine Learning', 'scikit-learn, PyTorch, data preprocessing, model evaluation, cross-validation'],
      ['AI Systems', 'LLM applications, RAG, AI Agent, Prompt Engineering'],
      ['Tools', 'Git, GitHub, Linux basics, Kaggle, Markdown'],
    ],
    copy: '复制',
    copied: '已复制',
    footer: 'Built with GitHub Pages · Leqi Xie',
  },
  en: {
    nav: ['About', 'Focus', 'Projects', 'Experience'],
    switchLabel: '中文',
    role: 'AI Undergraduate · Intelligent Systems',
    name: 'Leqi Xie',
    englishName: '谢乐琦',
    location: "Suzhou · Xi'an Jiaotong-Liverpool University",
    status: 'Open to research, projects, and collaboration',
    intro:
      'I am interested in building and evaluating practical AI systems, with current interests in multimodal AI, vision-language understanding, AI agents, RAG systems, and applied machine learning.',
    aboutTitle: 'About',
    about:
      "I am a 2025-entry BEng Artificial Intelligence student on the Intelligent Systems pathway at Xi'an Jiaotong-Liverpool University. My experience combines AI application development, data competitions, undergraduate research assistance, and entrepreneurship-oriented teamwork. I am building a reproducible AI portfolio through projects, experiment records, and open-source practice.",
    educationTitle: 'Education',
    school: "Xi'an Jiaotong-Liverpool University",
    degree: 'BEng Artificial Intelligence · Intelligent Systems Pathway',
    graduation: 'Expected Graduation: 2029',
    gpa: 'GPA: 3.975 / 4.0',
    award: 'Academic Excellence Award',
    interestsTitle: 'Research & Technical Interests',
    interests: [
      ['Multimodal AI', 'Joint understanding, retrieval, and reasoning across image, text, and speech.'],
      ['AI Agents & RAG', 'Tool use, knowledge retrieval, task planning, and applied LLM system development.'],
      ['Computer Vision', 'Image classification, image segmentation, scientific image analysis, and model error analysis.'],
      ['Reliable AI Systems', 'Model evaluation, failure analysis, reproducible experiments, and real-world AI applications.'],
    ],
    projectsTitle: 'Current Projects',
    projects: [
      [
        'Predicting Smartphone Addiction',
        'Kaggle Playground Series',
        'Participating in a tabular prediction challenge, focusing on data cleaning, feature engineering, model comparison, cross-validation, and submission review.',
      ],
      [
        'Rimberio',
        'AI Smart Classroom Project · Top 500',
        'Selected as a Top 500 project in the “Thousand Overseas Returnee Makers Dream Plan”. The project addresses the gap between attendance and real participation in university classrooms through an intelligent check-in and classroom interaction system based on quiz participation, AI-generated questions, dynamic QR codes, timed responses, and post-class learning reports.',
      ],
      [
        'AI-enabled Learning Platform',
        'Undergraduate Research Assistantship',
        'Contributing to a university AI-enabled teaching platform project, focusing on AI applications in teaching support, learning-process assistance, and platform feature design.',
      ],
      [
        'AI Agent for Healthcare Scenario',
        'AI Agent Development Project',
        'Worked on an AI + Healthcare agent application project involving LLM workflow design, prompt engineering, RAG concepts, and application-level agent architecture.',
      ],
    ],
    honorsTitle: 'Competitions & Honors',
    honors: [
      ['National Second Prize', 'Global Campus AI Algorithm Elite Competition · AI Agent Development Application track.'],
      ['Outstanding Practice Award', 'OPC x Agent Super Individual Challenge · multi-platform AI agent application project.'],
      ['Team Leader and Finalist', 'XJTLU Global Entrepreneurial Dream-Chasers Competition · Top 60 among 1,170 global submissions.'],
      ['Professional Certification', 'Baidu Large Language Model Application Development Engineer Certification.'],
    ],
    technicalTitle: 'Technical Development',
    technicalGroups: [
      ['AI Systems', 'LangChain, RAG, AI Agents, workflow orchestration, Dify, Coze, and MCP-based application workflows.'],
      ['Competition-based Practice', 'AI agent development, digital human systems, data prediction, and intelligent application prototyping.'],
      ['Hardware & Embedded AI', 'Basic experience with Arduino, Core S3, and small-scale robotics prototyping.'],
    ],
    skillsTitle: 'Skills',
    skills: [
      ['Programming', 'Python, C/C++, SQL, JavaScript'],
      ['Machine Learning', 'scikit-learn, PyTorch, data preprocessing, model evaluation, cross-validation'],
      ['AI Systems', 'LLM applications, RAG, AI Agent, Prompt Engineering'],
      ['Tools', 'Git, GitHub, Linux basics, Kaggle, Markdown'],
    ],
    copy: 'Copy',
    copied: 'Copied',
    footer: 'Built with GitHub Pages · Leqi Xie',
  },
}

export function PortfolioHome() {
  const [locale, setLocale] = useState<Locale>('en')
  const [copied, setCopied] = useState<'email' | 'github' | null>(null)
  const t = copy[locale]

  async function copyContact(type: 'email' | 'github', value: string) {
    await navigator.clipboard.writeText(value)
    setCopied(type)
    window.setTimeout(() => setCopied(null), 1500)
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
          <a className="text-sm font-semibold tracking-tight" href="#top">
            Leqi Xie
          </a>
          <div className="flex items-center gap-5">
            <nav aria-label="Primary navigation" className="hidden items-center gap-6 md:flex">
              {['about', 'focus', 'projects', 'experience'].map((id, index) => (
                <a key={id} href={`#${id}`} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  {t.nav[index]}
                </a>
              ))}
            </nav>
            <button
              type="button"
              onClick={() => setLocale(locale === 'zh' ? 'en' : 'zh')}
              className="flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2 font-mono text-xs font-semibold transition-colors hover:bg-secondary"
            >
              <Languages aria-hidden="true" className="size-4" />
              {t.switchLabel}
            </button>
          </div>
        </div>
      </header>

      <div id="top" className="mx-auto grid max-w-6xl gap-10 px-5 py-10 md:px-8 md:py-16 lg:grid-cols-[320px_1fr] lg:gap-20">
        <aside className="lg:sticky lg:top-24 lg:h-fit lg:self-start">
          <div className="mb-7">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">{t.role}</p>
            <h1 className="mt-4 text-balance font-serif text-5xl leading-none tracking-[-0.04em]">
              {t.name}
              <span className="text-primary">.</span>
            </h1>
            <p className="mt-3 font-serif text-xl text-muted-foreground">{t.englishName}</p>
            <p className="mt-5 text-pretty text-sm leading-relaxed text-muted-foreground">{t.intro}</p>
            <p className="mt-4 flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <MapPin className="size-4" />
              {t.location}
            </p>
          </div>

          <div className="overflow-hidden rounded-[1.5rem] bg-secondary">
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
              onClick={() => copyContact('email', profile.email)}
              className="flex items-center justify-between rounded-full border border-border px-4 py-3 text-left text-xs transition-colors hover:bg-secondary"
            >
              <span className="flex min-w-0 items-center gap-2">
                <Mail className="size-4 shrink-0" />
                <span className="truncate">{profile.email}</span>
              </span>
              <span className="ml-3 font-mono text-primary">{copied === 'email' ? t.copied : t.copy}</span>
            </button>
            <button
              type="button"
              onClick={() => copyContact('github', profile.github)}
              className="flex items-center justify-between rounded-full border border-border px-4 py-3 text-left text-xs transition-colors hover:bg-secondary"
            >
              <span className="flex min-w-0 items-center gap-2">
                <GitBranch className="size-4 shrink-0" />
                <span className="truncate">github.com/LeqiXie2025</span>
              </span>
              <span className="ml-3 font-mono text-primary">{copied === 'github' ? t.copied : t.copy}</span>
            </button>
          </div>
        </aside>

        <div>
          <Section id="about" eyebrow="01" title={t.aboutTitle}>
            <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">{t.about}</p>
            <div className="mt-10 border-l-2 border-primary pl-5">
              <p className="font-semibold">{t.school}</p>
              <p className="mt-1 text-sm text-muted-foreground">{t.degree}</p>
              <p className="mt-1 font-mono text-xs text-primary">
                {t.graduation} · {t.gpa}
              </p>
              <p className="mt-1 font-mono text-xs text-primary">{t.award}</p>
            </div>
          </Section>

          <Section id="focus" eyebrow="02" title={t.interestsTitle}>
            <div className="grid gap-4 md:grid-cols-2">
              {t.interests.map(([title, description]) => (
                <article key={title} className="rounded-2xl border border-border bg-card p-5">
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
                </article>
              ))}
            </div>
          </Section>

          <Section id="projects" eyebrow="03" title={t.projectsTitle}>
            <div className="flex flex-col gap-4">
              {t.projects.map(([title, label, description]) => (
                <article key={title} className="group rounded-2xl border border-border bg-card p-6 transition-transform hover:-translate-y-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-wider text-primary">{label}</p>
                      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
                    </div>
                    <ArrowUpRight className="size-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{description}</p>
                </article>
              ))}
            </div>
          </Section>

          <Section id="experience" eyebrow="04" title={t.honorsTitle}>
            <ol className="flex flex-col gap-0">
              {t.honors.map(([title, detail], index) => (
                <li key={title} className="grid grid-cols-[2rem_1fr] gap-3 border-t border-border py-5">
                  <span className="font-mono text-xs text-primary">0{index + 1}</span>
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Section>

          <section className="rounded-3xl bg-primary px-7 py-10 text-primary-foreground md:px-10">
            <p className="font-mono text-xs uppercase tracking-[0.18em] opacity-75">{t.technicalTitle}</p>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {t.technicalGroups.map(([title, detail]) => (
                <div key={title}>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed opacity-85">{detail}</p>
                </div>
              ))}
            </div>
          </section>

          <Section id="skills" eyebrow="05" title={t.skillsTitle}>
            <div className="grid gap-4 md:grid-cols-2">
              {t.skills.map(([title, detail]) => (
                <article key={title} className="border-t border-border pt-4">
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{detail}</p>
                </article>
              ))}
            </div>
          </Section>
        </div>
      </div>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between md:px-8">
          <p>© 2026 Leqi Xie</p>
          <p>{t.footer}</p>
        </div>
      </footer>
    </main>
  )
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 py-16 md:py-20">
      <div className="mb-9 flex items-baseline gap-4">
        <span className="font-mono text-xs text-primary">{eyebrow}</span>
        <h2 className="font-serif text-3xl tracking-tight md:text-4xl">{title}</h2>
      </div>
      {children}
    </section>
  )
}
