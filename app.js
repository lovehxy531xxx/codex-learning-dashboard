const STORAGE_KEY = "codex-learning-dashboard-v1";
const DEFAULT_START_DATE = "2026-07-07";

const phases = [
  {
    name: "基本功阶段",
    shortName: "基本功",
    start: 1,
    end: 14,
    focus: "从小白到能做出静态网页工具",
    target: "学会给 Codex 下任务，理解 HTML/CSS/JavaScript/Git 的最小知识。",
  },
  {
    name: "Demo 产出阶段",
    shortName: "做 Demo",
    start: 15,
    end: 30,
    focus: "每天推进一个小工具",
    target: "做出 10 个可演示 Demo，并把其中 5 个整理进作品集。",
  },
  {
    name: "真实需求阶段",
    shortName: "找需求",
    start: 31,
    end: 60,
    focus: "用户访谈和需求验证",
    target: "完成 30 张需求卡、20 次有效沟通、5 个真实需求 Demo。",
  },
  {
    name: "产品包阶段",
    shortName: "卖产品",
    start: 61,
    end: 90,
    focus: "报价、交付、复用",
    target: "形成一个可销售产品包，拿到至少 1 个付费试单。",
  },
];

const specificAssignments = {
  1: ["搭建训练系统", "建立学习资料、工具 Demo、客户访谈、作品集素材、提示词模板、复盘日志的工作结构。", "今天能打开本工具，并完成第一条学习记录。"],
  2: ["练 Codex 任务提示词", "反复使用目标、背景、输入、输出、约束、完成标准这 6 个要素。", "沉淀 3 条你自己的 Codex 提示词模板。"],
  3: ["做第一个网页工具", "做 Codex 小白学习路线生成器，先实现输入和生成 30 天路线。", "生成器能在浏览器打开并完成一次生成。"],
  4: ["学习 HTML", "只学结构、标题、表单、按钮、列表，马上用到工具页面里。", "改进一个工具的页面结构。"],
  5: ["学习 CSS", "只学布局、颜色、按钮、卡片、响应式，避免陷入教程。", "让一个工具在手机端看起来不乱。"],
  6: ["学习 JavaScript", "只学变量、数组、对象、点击事件、渲染内容。", "给工具加一个按钮交互。"],
  7: ["打磨第一个工具", "检查输入、生成、复制、移动端和界面观感。", "完成第一个可展示版本。"],
  8: ["做 Codex 提示词生成器", "输入一个工具想法，生成可复制给 Codex 的任务提示词。", "提示词生成器可用。"],
  9: ["做小工具 idea 诊断器", "输入 idea，输出目标用户、痛点、MVP、付费可能和评分。", "idea 诊断器可用。"],
  10: ["学习 localStorage", "让网页保存用户输入、打卡状态和历史记录。", "一个工具具备本地保存能力。"],
  11: ["做 30 天打卡看板", "实现每日任务、勾选、进度条和本地保存。", "打卡看板可用。"],
  12: ["学习 Git 基础", "理解 git status、add、commit 和版本记录。", "为一个工具做一次提交记录。"],
  13: ["整理 3 个工具到作品集", "写清楚每个工具给谁用、解决什么、截图和打开方式。", "作品集页面有 3 个项目。"],
  14: ["找 10 个人试用", "让真实用户看你的工具，记录他们哪里不懂、想改什么、愿不愿付费。", "完成 10 条反馈记录。"],
  15: ["短视频脚本生成器", "面向创作者，输入产品和受众，输出脚本结构。", "Demo 可演示。"],
  16: ["小红书标题生成器", "输入主题、受众和风格，输出多种标题。", "Demo 可演示。"],
  17: ["商品卖点提炼器", "输入商品资料，输出卖点、痛点和短文案。", "Demo 可演示。"],
  18: ["报价单生成器", "输入客户需求和项目内容，输出报价明细。", "Demo 可演示。"],
  19: ["客户跟进 CRM", "记录客户、阶段、下一步、备注和成交可能。", "Demo 可演示。"],
  20: ["CSV 数据清洗工具", "导入或粘贴表格数据，做去重、分列、格式整理。", "Demo 可演示。"],
  21: ["课程大纲生成器", "输入主题和人群，输出课程目录、作业和交付物。", "Demo 可演示。"],
  22: ["朋友圈文案生成器", "输入产品和身份，输出私域文案。", "Demo 可演示。"],
  23: ["客户需求访谈助手", "生成访谈问题，并把回答整理成需求文档。", "Demo 可演示。"],
  24: ["工具需求文档生成器", "把聊天记录变成工具开发需求文档。", "Demo 可演示。"],
  25: ["作品集生成器", "填写工具信息，生成作品集展示页面。", "Demo 可演示。"],
  26: ["工具报价方案生成器", "根据客户需求和复杂度，输出报价层级。", "Demo 可演示。"],
  27: ["复盘日报生成器", "把当天记录整理成日报、明日计划和公开内容草稿。", "Demo 可演示。"],
  28: ["重做 5 个工具 UI", "选反馈最好的工具，统一视觉、按钮和移动端体验。", "5 个工具更像作品。"],
  29: ["录 5 个演示视频", "每个视频只讲用户、痛点、输入、输出、结果。", "完成 5 条演示素材。"],
  30: ["发布 Codex 小白工具库", "把最好的工具整理成一个入口页面，准备对外测试。", "工具库第一版发布。"],
};

const resources = [
  {
    title: "Codex 官方",
    body: "先看会直接影响你交付质量的部分：Quickstart、Best Practices、Prompting、App Features。",
    links: [
      ["Codex Quickstart", "https://developers.openai.com/codex/quickstart"],
      ["Codex Best Practices", "https://developers.openai.com/codex/learn/best-practices"],
      ["Codex Prompting", "https://developers.openai.com/codex/prompting"],
      ["Codex App Features", "https://developers.openai.com/codex/app/features"],
    ],
  },
  {
    title: "网页工具基础",
    body: "只学做工具必需的最小知识：页面结构、样式、交互和本地保存。",
    links: [
      ["MDN HTML", "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content"],
      ["MDN CSS", "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics"],
      ["MDN JavaScript", "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting"],
      ["localStorage", "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"],
    ],
  },
  {
    title: "交付基础",
    body: "学会保存版本、整理作品、把工具变成别人能试用的页面。",
    links: [
      ["Pro Git 入门", "https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control"],
      ["GitHub 入门", "https://docs.github.com/en/get-started/start-your-journey/about-github-and-git"],
      ["AGENTS.md", "https://developers.openai.com/codex/guides/agents-md"],
      ["Agent Skills", "https://developers.openai.com/codex/skills"],
    ],
  },
  {
    title: "客户理解",
    body: "每天找一个真实痛点，比多看十个教程更重要。",
    links: [
      ["Y Combinator Library", "https://www.ycombinator.com/library"],
      ["How to Talk to Users", "https://www.ycombinator.com/library/6g-how-to-talk-to-users"],
    ],
  },
];

const promptTemplates = [
  {
    title: "Idea 诊断",
    body: "我有一个工具 idea：\n【写下 idea】\n\n请你从目标用户、真实痛点、使用频率、付费可能、第一版 MVP、风险点这 6 个角度帮我判断。\n最后给我一个 1-10 分的评分，并告诉我第一版应该做什么。",
  },
  {
    title: "网页工具开发",
    body: "请帮我做一个网页工具。\n\n目标用户：\n解决问题：\n输入内容：\n输出内容：\n功能列表：\n界面要求：\n技术要求：先做成一个可直接打开的 HTML 文件，不需要后端。\n完成标准：能输入、能生成、能复制、能保存、手机端不乱。\n\n请先给我实现计划，再开始写代码。",
  },
  {
    title: "工具验收",
    body: "请你像真实用户一样测试这个工具。\n\n检查：功能是否可用、按钮是否有效、手机端是否正常、文案是否清楚、有没有明显 bug。\n发现问题后直接修复，并告诉我修了什么。",
  },
  {
    title: "客户需求整理",
    body: "下面是我和客户的聊天记录：\n【粘贴聊天记录】\n\n请你整理成一份工具开发需求文档：\n1. 客户是谁\n2. 当前流程\n3. 痛点\n4. 必须功能\n5. 可选功能\n6. 第一版范围\n7. 交付标准\n8. 报价建议",
  },
  {
    title: "日报复盘",
    body: "请根据我今天的记录，帮我整理成创业复盘日报。\n\n今天学习：\n今天做的工具：\n今天发现的需求：\n今天用户沟通：\n今天卡住的问题：\n明天第一件事：\n\n输出：\n1. 今日总结\n2. 关键洞察\n3. 明日计划\n4. 可以发朋友圈/小红书的一段内容",
  },
];

const blockLabels = {
  learn: "学习 Codex / 编程基础",
  build: "做工具 Demo 或功能",
  research: "需求研究",
  outreach: "找客户 / 用户沟通",
  publish: "发布内容或案例",
  review: "每日复盘",
};

function getLearningAction(day, assignment) {
  if (day <= 14) {
    const focusByDay = {
      1: "熟悉这个训练台，把 90 天目标、每日记录和备份功能点一遍。",
      2: "练 3 次 Codex 任务提示词：目标、背景、输入、输出、约束、完成标准。",
      3: "观察一个网页工具的输入、输出、按钮和结果区，理解工具页面结构。",
      4: "学习 HTML 的标题、段落、表单、按钮、列表，只看能马上用到的部分。",
      5: "学习 CSS 的布局、颜色、间距、按钮和移动端适配。",
      6: "学习 JavaScript 的变量、数组、对象、点击事件和页面渲染。",
      7: "学习如何验收网页工具：按钮、输入、复制、保存、手机端和空状态。",
      8: "拆解 3 条好提示词，记录它们如何描述目标、约束和完成标准。",
      9: "学习如何判断 idea：用户、痛点、频率、付费、MVP、风险。",
      10: "学习 localStorage，理解数据为什么能保存在本地浏览器。",
      11: "学习看板结构：任务、状态、进度、历史记录。",
      12: "学习 Git 的 status、add、commit，理解版本记录的意义。",
      13: "学习作品集表达：给谁用、解决什么、输入什么、输出什么。",
      14: "学习用户反馈问题设计，避免只问“你觉得怎么样”。",
    };
    return focusByDay[day] || assignment.body;
  }

  if (day <= 30) {
    return `围绕“${assignment.title}”学习一个最小知识点：输入区、输出区、复制、保存或导出，只学今天开发会用到的内容。`;
  }

  if (day <= 60) {
    return "学习用户访谈和需求整理：今天重点练习把模糊聊天记录整理成用户、流程、痛点、MVP 和付费判断。";
  }

  return "学习销售型交付：今天重点看报价、案例表达、交付边界、修改次数和售后说明。";
}

function getResearchAction(day) {
  if (day <= 14) {
    return "从自己、朋友、微信群、朋友圈或小红书里记录 3 个重复、麻烦、容易出错的工作动作。";
  }

  if (day <= 30) {
    return "拆 3 个同类工具或同行案例，记录它们的目标用户、输入、输出、价格和你可以做得更简单的地方。";
  }

  if (day <= 60) {
    return "找 20 个潜在客户账号或商家，记录他们正在卖什么、获客方式、可能的重复工作和可切入工具。";
  }

  return "整理最有希望成交的方向，更新产品包定位、适合客户、核心功能、报价和案例证明。";
}

function getOutreachAction(day) {
  if (day <= 14) {
    return "找 2 个熟人或同频朋友，让他们看你今天的工具/学习计划，问哪里看不懂、最想要什么功能。";
  }

  if (day <= 30) {
    return "把今天 Demo 发给 3-5 个可能需要的人，问他们是否愿意试用，以及他们会改哪一块。";
  }

  if (day <= 60) {
    return "触达 5 个潜在客户，争取 1 次深聊；不要推销，重点问流程、频率、耗时、出错和付费可能。";
  }

  return "推进 1 个潜在成交：发案例、确认需求、给报价范围、约演示或确认下一步。";
}

function getPolishAction(day, assignment) {
  if (day <= 14) {
    return "把今天的学习成果整理进工具或笔记，至少让一个页面、提示词或记录模板变得更清楚。";
  }

  if (day <= 30) {
    return `打磨“${assignment.title}”：补空状态、复制按钮、示例数据、移动端样式和一句话介绍。`;
  }

  if (day <= 60) {
    return "把今天听到的真实需求转成一个小 Demo、原型或需求文档，明天可以拿给用户看。";
  }

  return "打磨一个成交资产：作品集案例、报价单、交付说明、演示视频或客户需求表。";
}

function getContentAction(day, assignment) {
  if (day <= 14) {
    return `发布一条学习记录：今天学了什么、做了什么、卡在哪里、明天继续做什么。主题可用“Day ${day}：${assignment.title}”。`;
  }

  if (day <= 30) {
    return `发布一条工具案例：这个“${assignment.title}”给谁用、输入什么、输出什么、能省什么时间。`;
  }

  if (day <= 60) {
    return "发布一条需求观察：某类人群有什么重复工作，你打算做什么小工具解决。";
  }

  return "发布一条产品化内容：展示案例、客户痛点、工具效果、适合谁、如何找你定制。";
}

function getReviewAction(day) {
  if (day <= 30) {
    return "复盘 5 个问题：今天学会了什么、做出了什么、哪里卡住、谁可能需要、明天先做哪一步。";
  }

  if (day <= 60) {
    return "复盘 5 个问题：哪个客户信号最强、需求是否高频、是否愿付费、Demo 该改哪里、明天联系谁。";
  }

  return "复盘 5 个问题：哪个方向最接近成交、报价是否清楚、交付边界是否清楚、案例是否有说服力、明天推进哪一单。";
}

function getDailyActions(day) {
  const assignment = getAssignment(day);
  return [
    {
      id: "plan",
      time: "08:00-09:00",
      category: "计划",
      task: "打开训练台，确认今天 Day、阶段、主任务和交付物。",
      output: "写下今天最重要的 3 个目标，并决定晚上必须交付什么。",
    },
    {
      id: "learn",
      time: "09:00-11:00",
      category: "学习",
      task: getLearningAction(day, assignment),
      output: "至少写 5 条学习笔记，记录 1 个可以马上用于工具开发的知识点。",
    },
    {
      id: "build",
      time: "11:00-14:00",
      category: "做工具",
      task: `用 Codex 推进“${assignment.title}”。先让 Codex 给计划，再实现，再让它自测。`,
      output: assignment.deliverable,
    },
    {
      id: "research",
      time: "15:00-18:00",
      category: "找需求",
      task: getResearchAction(day),
      output: "整理 1 张需求卡：用户、痛点、当前做法、频率、MVP、付费可能。",
    },
    {
      id: "outreach",
      time: "18:00-20:00",
      category: "找客户",
      task: getOutreachAction(day),
      output: "记录触达人、对方反馈、下一步动作。",
    },
    {
      id: "polish",
      time: "20:00-22:30",
      category: "打磨",
      task: getPolishAction(day, assignment),
      output: "让今天的成果能被别人看懂、试用或继续反馈。",
    },
    {
      id: "publish",
      time: "22:30-23:30",
      category: "内容",
      task: getContentAction(day, assignment),
      output: "产出 1 条朋友圈、小红书、社群或视频脚本内容。",
    },
    {
      id: "review",
      time: "23:30-24:00",
      category: "复盘",
      task: getReviewAction(day),
      output: "填完每日复盘，并复制日报给 Codex 让它帮你调整明天计划。",
    },
  ];
}

let state = loadState();
let selectedDay = clampDay(calculateTodayDay());
let saveTimer = null;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return {
        startDate: DEFAULT_START_DATE,
        entries: {},
      };
    }
    const parsed = JSON.parse(raw);
    return {
      startDate: parsed.startDate || DEFAULT_START_DATE,
      entries: parsed.entries || {},
    };
  } catch (error) {
    console.warn(error);
    return {
      startDate: DEFAULT_START_DATE,
      entries: {},
    };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  renderDataPreview();
}

function clampDay(day) {
  const value = Number(day);
  if (Number.isNaN(value)) return 1;
  return Math.min(90, Math.max(1, Math.round(value)));
}

function parseDate(value) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function toDateInputValue(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function dateForDay(day) {
  const date = parseDate(state.startDate);
  date.setDate(date.getDate() + clampDay(day) - 1);
  return toDateInputValue(date);
}

function calculateTodayDay() {
  const start = parseDate(state.startDate);
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const diff = Math.floor((today - start) / 86400000) + 1;
  return clampDay(diff);
}

function getPhase(day) {
  return phases.find((phase) => day >= phase.start && day <= phase.end) || phases[0];
}

function getAssignment(day) {
  if (specificAssignments[day]) {
    const [title, body, deliverable] = specificAssignments[day];
    return { title, body, deliverable };
  }

  if (day <= 60) {
    return {
      title: "真实客户需求验证",
      body: "今天固定完成：找 20 个潜在客户账号，触达 5 个，深聊 1 个，整理 1 张需求卡，并把一个真实需求转成 Demo。",
      deliverable: "1 张需求卡 + 1 条客户沟通记录 + 1 个 Demo 改进点。",
    };
  }

  return {
    title: "产品包打磨与成交",
    body: "围绕最有反馈的方向，打磨报价、案例、交付说明和演示页面。每天推进一个能帮助成交的资产。",
    deliverable: "1 个销售资产或 1 次成交推进记录。",
  };
}

function blankEntry(day) {
  return {
    date: dateForDay(day),
    hours: {
      learning: 0,
      building: 0,
      research: 0,
      outreachWork: 0,
      contentWork: 0,
      reviewWork: 0,
    },
    metrics: {
      tools: 0,
      outreach: 0,
      conversations: 0,
      content: 0,
    },
    blocks: {
      learn: false,
      build: false,
      research: false,
      outreach: false,
      publish: false,
      review: false,
    },
    learningNotes: "",
    buildNotes: "",
    demandNotes: "",
    outreachNotes: "",
    review: {
      win: "",
      problem: "",
      signal: "",
      next: "",
    },
    idea: {
      user: "",
      pain: "",
      mvp: "",
      pay: "",
    },
    actionChecks: {},
    actionNotes: {},
  };
}

function getEntry(day) {
  const key = String(clampDay(day));
  if (!state.entries[key]) {
    state.entries[key] = blankEntry(day);
  }
  normalizeEntry(state.entries[key], day);
  return state.entries[key];
}

function normalizeEntry(entry, day) {
  const fresh = blankEntry(day);
  entry.date = entry.date || fresh.date;
  entry.hours = { ...fresh.hours, ...(entry.hours || {}) };
  entry.metrics = { ...fresh.metrics, ...(entry.metrics || {}) };
  entry.blocks = { ...fresh.blocks, ...(entry.blocks || {}) };
  entry.review = { ...fresh.review, ...(entry.review || {}) };
  entry.idea = { ...fresh.idea, ...(entry.idea || {}) };
  entry.actionChecks = { ...(entry.actionChecks || {}) };
  entry.actionNotes = { ...(entry.actionNotes || {}) };
}

function sumHours(entry) {
  return Object.values(entry.hours || {}).reduce((total, value) => total + Number(value || 0), 0);
}

function isMeaningfulEntry(entry) {
  if (!entry) return false;
  const hasHours = sumHours(entry) > 0;
  const hasMetric = Object.values(entry.metrics || {}).some((value) => Number(value || 0) > 0);
  const hasText = [
    entry.learningNotes,
    entry.buildNotes,
    entry.demandNotes,
    entry.outreachNotes,
    entry.review?.win,
    entry.review?.problem,
    entry.review?.signal,
    entry.review?.next,
    entry.idea?.user,
    entry.idea?.pain,
  ].some((value) => String(value || "").trim().length > 0);
  const hasBlock = Object.values(entry.blocks || {}).some(Boolean);
  const hasAction = Object.values(entry.actionChecks || {}).some(Boolean);
  const hasActionNote = Object.values(entry.actionNotes || {}).some((value) => String(value || "").trim().length > 0);
  return hasHours || hasMetric || hasText || hasBlock || hasAction || hasActionNote;
}

function getStats() {
  const entries = Object.values(state.entries || {});
  const meaningful = entries.filter(isMeaningfulEntry);
  return meaningful.reduce(
    (stats, entry) => {
      stats.loggedDays += 1;
      stats.hours += sumHours(entry);
      stats.tools += Number(entry.metrics?.tools || 0);
      stats.outreach += Number(entry.metrics?.outreach || 0);
      stats.content += Number(entry.metrics?.content || 0);
      stats.reviews += entry.blocks?.review ? 1 : 0;
      return stats;
    },
    { loggedDays: 0, hours: 0, tools: 0, outreach: 0, content: 0, reviews: 0 },
  );
}

function renderAll() {
  renderDashboard();
  renderDaily();
  renderPlans();
  renderMap();
  renderResources();
  renderPrompts();
  renderDataPreview();
}

function renderDashboard() {
  const todayDay = calculateTodayDay();
  const phase = getPhase(todayDay);
  const assignment = getAssignment(todayDay);
  const stats = getStats();
  const percent = Math.round((todayDay / 90) * 100);

  $("#startDateInput").value = state.startDate;
  $("#todayDayPill").textContent = `Day ${todayDay}`;
  $("#todayPhaseName").textContent = phase.name;
  $("#todayAssignmentTitle").textContent = assignment.title;
  $("#todayAssignmentBody").textContent = assignment.body;
  $("#todayDeliverable").textContent = assignment.deliverable;
  $("#timelinePercent").textContent = `${percent}%`;
  $("#timelineFill").style.width = `${percent}%`;

  $("#statLoggedDays").textContent = stats.loggedDays;
  $("#statHours").textContent = formatNumber(stats.hours);
  $("#statTools").textContent = stats.tools;
  $("#statOutreach").textContent = stats.outreach;
  $("#statContent").textContent = stats.content;
  $("#statReviews").textContent = stats.reviews;

  renderTodayChecklist(todayDay);
  renderActionList("#todayActionList", todayDay, { compact: true });
  renderWeekChart(todayDay);
}

function renderTodayChecklist(day) {
  const entry = getEntry(day);
  const container = $("#todayChecklist");
  container.innerHTML = Object.entries(blockLabels)
    .map(
      ([key, label]) => `
        <label class="check-item">
          <input type="checkbox" data-dashboard-block="${key}" ${entry.blocks?.[key] ? "checked" : ""} />
          <span>${label}</span>
        </label>
      `,
    )
    .join("");
}

function getActionProgress(day) {
  const entry = getEntry(day);
  const actions = getDailyActions(day);
  const done = actions.filter((action) => entry.actionChecks?.[action.id]).length;
  return { done, total: actions.length };
}

function renderActionList(selector, day, options = {}) {
  const entry = getEntry(day);
  const actions = getDailyActions(day);
  const progress = getActionProgress(day);
  const container = $(selector);
  if (!container) return;
  container.innerHTML = actions
    .map((action) => {
      const checked = Boolean(entry.actionChecks?.[action.id]);
      const className = checked ? "action-item is-done" : "action-item";
      const note = entry.actionNotes?.[action.id] || "";
      return `
        <div class="${className}">
          <input type="checkbox" data-action-check="${action.id}" data-action-day="${day}" aria-label="${escapeHtml(action.category)} ${escapeHtml(action.time)}" ${checked ? "checked" : ""} />
          <span class="action-main">
            <span class="action-meta">
              <span class="action-time">${action.time}</span>
              <span class="action-category">${action.category}</span>
            </span>
            <span class="action-task">${escapeHtml(action.task)}</span>
            <span class="action-output">交付：${escapeHtml(action.output)}</span>
          </span>
          ${
            options.showNotes
              ? `
                <span class="action-note">
                  <span>笔记 / 心得</span>
                  <textarea data-action-note="${action.id}" data-action-day="${day}" rows="3" placeholder="写下这个时间段做了什么、学到什么、遇到什么问题。">${escapeHtml(note)}</textarea>
                </span>
              `
              : ""
          }
        </div>
      `;
    })
    .join("");

  if (day === calculateTodayDay() && $("#todayActionCount")) {
    $("#todayActionCount").textContent = `${progress.done}/${progress.total}`;
  }

  if (selector === "#dailyActionList") {
    $("#dailyActionCount").textContent = `${progress.done}/${progress.total}`;
  }
}

function renderWeekChart(todayDay) {
  const start = Math.max(1, todayDay - 6);
  const days = Array.from({ length: 7 }, (_, index) => start + index).filter((day) => day <= 90);
  const values = days.map((day) => sumHours(getEntry(day)));
  const max = Math.max(1, ...values);
  $("#weekChart").innerHTML = days
    .map((day, index) => {
      const height = Math.max(6, Math.round((values[index] / max) * 110));
      return `
        <div class="bar" title="Day ${day}: ${formatNumber(values[index])} 小时">
          <div class="bar-fill" style="height:${height}px"></div>
          <span>${day}</span>
        </div>
      `;
    })
    .join("");
  $("#weekFocusText").textContent = getPhase(todayDay).focus;
}

function renderDaily() {
  const entry = getEntry(selectedDay);
  const phase = getPhase(selectedDay);
  const assignment = getAssignment(selectedDay);

  $("#selectedDayInput").value = selectedDay;
  $("#entryDateInput").value = entry.date || dateForDay(selectedDay);
  $("#dailyPhasePill").textContent = `${phase.name} · Day ${selectedDay}`;
  $("#dailyAssignmentTitle").textContent = assignment.title;
  $("#dailyAssignmentBody").textContent = `${assignment.body} 交付物：${assignment.deliverable}`;
  renderActionList("#dailyActionList", selectedDay);

  $$("[data-hour]").forEach((input) => {
    input.value = entry.hours?.[input.dataset.hour] ?? 0;
  });
  $$("[data-metric]").forEach((input) => {
    input.value = entry.metrics?.[input.dataset.metric] ?? 0;
  });
  $$("[data-block]").forEach((input) => {
    input.checked = Boolean(entry.blocks?.[input.dataset.block]);
  });
  $$("[data-field]").forEach((input) => {
    input.value = entry[input.dataset.field] || "";
  });
  $$("[data-review]").forEach((input) => {
    input.value = entry.review?.[input.dataset.review] || "";
  });
  $$("[data-idea]").forEach((input) => {
    input.value = entry.idea?.[input.dataset.idea] || "";
  });
}

function renderPlans() {
  const entry = getEntry(selectedDay);
  const phase = getPhase(selectedDay);
  const assignment = getAssignment(selectedDay);
  const progress = getActionProgress(selectedDay);
  const completedDays = Array.from({ length: 90 }, (_, index) => index + 1).filter((day) => {
    const dayProgress = getActionProgress(day);
    return dayProgress.total > 0 && dayProgress.done === dayProgress.total;
  }).length;

  $("#planSelectedDayInput").value = selectedDay;
  $("#planOverallCount").textContent = `${completedDays}/90`;
  $("#planPhasePill").textContent = `${phase.name} · Day ${selectedDay}`;
  $("#planAssignmentTitle").textContent = assignment.title;
  $("#planAssignmentBody").textContent = assignment.body;
  $("#planDeliverableText").textContent = assignment.deliverable;
  $("#planActionCount").textContent = `${progress.done}/${progress.total}`;
  renderPlanDayList();
  renderActionList("#planActionList", selectedDay, { showNotes: true });
}

function renderPlanDayList() {
  const todayDay = calculateTodayDay();
  $("#planDayList").innerHTML = Array.from({ length: 90 }, (_, index) => index + 1)
    .map((day) => {
      const assignment = getAssignment(day);
      const phase = getPhase(day);
      const progress = getActionProgress(day);
      const classNames = ["plan-day-button"];
      if (day === selectedDay) classNames.push("is-selected");
      if (day === todayDay) classNames.push("is-current");
      if (progress.total > 0 && progress.done === progress.total) classNames.push("is-done");
      return `
        <button class="${classNames.join(" ")}" type="button" data-plan-day="${day}">
          <span class="plan-day-number">${day}</span>
          <span class="plan-day-copy">
            <strong>${escapeHtml(assignment.title)}</strong>
            <span>${escapeHtml(phase.shortName)} · ${escapeHtml(assignment.deliverable)}</span>
          </span>
          <span class="plan-day-progress">${progress.done}/${progress.total}</span>
        </button>
      `;
    })
    .join("");
  $("#planDayList .is-selected")?.scrollIntoView({ block: "nearest" });
}

function renderMap() {
  const todayDay = calculateTodayDay();
  $("#phaseStrip").innerHTML = phases
    .map(
      (phase) => `
        <div class="phase-card">
          <strong>${phase.shortName} · Day ${phase.start}-${phase.end}</strong>
          <span>${phase.target}</span>
        </div>
      `,
    )
    .join("");

  $("#dayGrid").innerHTML = Array.from({ length: 90 }, (_, index) => index + 1)
    .map((day) => {
      const entry = state.entries[String(day)];
      const classNames = ["day-cell"];
      if (isMeaningfulEntry(entry)) classNames.push("is-done");
      if (day === todayDay) classNames.push("is-current");
      if (day === selectedDay) classNames.push("is-selected");
      return `<button class="${classNames.join(" ")}" type="button" data-map-day="${day}">${day}</button>`;
    })
    .join("");

  const phase = getPhase(selectedDay);
  const assignment = getAssignment(selectedDay);
  const entry = getEntry(selectedDay);
  $("#mapDayPill").textContent = `Day ${selectedDay} · ${phase.shortName}`;
  $("#mapTitleText").textContent = assignment.title;
  $("#mapBodyText").textContent = assignment.body;
  $("#mapDeliverableText").textContent = assignment.deliverable;
  $("#mapMetaText").innerHTML = `
    <span>日期：${entry.date || dateForDay(selectedDay)}</span>
    <span>记录小时：${formatNumber(sumHours(entry))}</span>
    <span>行动清单：${getActionProgress(selectedDay).done}/${getActionProgress(selectedDay).total}</span>
    <span>复盘状态：${entry.blocks?.review ? "已完成" : "未完成"}</span>
  `;
  renderActionList("#mapActionList", selectedDay, { compact: true });
}

function renderResources() {
  $("#resourceGrid").innerHTML = resources
    .map(
      (resource) => `
        <article class="resource-card">
          <h3>${resource.title}</h3>
          <p>${resource.body}</p>
          <div class="resource-links">
            ${resource.links.map(([label, url]) => `<a href="${url}" target="_blank" rel="noreferrer">${label}</a>`).join("")}
          </div>
        </article>
      `,
    )
    .join("");
}

function renderPrompts() {
  $("#promptGrid").innerHTML = promptTemplates
    .map(
      (prompt, index) => `
        <article class="prompt-card">
          <h3>${prompt.title}</h3>
          <pre class="prompt-text">${escapeHtml(prompt.body)}</pre>
          <button class="ghost-button" type="button" data-copy-template="${index}">复制</button>
        </article>
      `,
    )
    .join("");
}

function renderDataPreview() {
  const stats = getStats();
  $("#dataPreview").innerHTML = `
    <span>起始日：${state.startDate}</span>
    <span>已记录：${stats.loggedDays} 天</span>
    <span>累计投入：${formatNumber(stats.hours)} 小时</span>
    <span>工具产出：${stats.tools} 个</span>
    <span>用户触达：${stats.outreach} 人</span>
  `;
}

function collectDailyForm() {
  const entry = getEntry(selectedDay);
  entry.date = $("#entryDateInput").value || dateForDay(selectedDay);

  $$("[data-hour]").forEach((input) => {
    entry.hours[input.dataset.hour] = Number(input.value || 0);
  });
  $$("[data-metric]").forEach((input) => {
    entry.metrics[input.dataset.metric] = Number(input.value || 0);
  });
  $$("[data-block]").forEach((input) => {
    entry.blocks[input.dataset.block] = input.checked;
  });
  $$("[data-field]").forEach((input) => {
    entry[input.dataset.field] = input.value;
  });
  $$("[data-review]").forEach((input) => {
    entry.review[input.dataset.review] = input.value;
  });
  $$("[data-idea]").forEach((input) => {
    entry.idea[input.dataset.idea] = input.value;
  });
}

function scheduleSave() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    collectDailyForm();
    saveState();
    renderDashboard();
    renderMap();
    setSaveStatus("已自动保存");
  }, 260);
}

function setSaveStatus(text) {
  $("#saveStatus").textContent = `${text} · ${new Date().toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" })}`;
}

function formatNumber(value) {
  const number = Number(value || 0);
  if (Number.isInteger(number)) return String(number);
  return number.toFixed(1);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  }
  showToast("已复制到剪贴板");
}

function buildDailySummary(day) {
  const entry = getEntry(day);
  const assignment = getAssignment(day);
  const actions = getDailyActions(day);
  const actionLines = actions
    .map((action) => {
      const note = entry.actionNotes?.[action.id] ? `\n  笔记：${entry.actionNotes[action.id]}` : "";
      return `${entry.actionChecks?.[action.id] ? "√" : "□"} ${action.time} ${action.category}：${action.task}${note}`;
    })
    .join("\n");
  return `Codex 90 天训练 Day ${day}

今日任务：${assignment.title}
交付物：${assignment.deliverable}

今日行动：
${actionLines}

投入小时：${formatNumber(sumHours(entry))}
学习：${entry.learningNotes || "未填写"}
工具进展：${entry.buildNotes || "未填写"}
需求发现：${entry.demandNotes || "未填写"}
用户沟通：${entry.outreachNotes || "未填写"}

工具/功能产出：${entry.metrics.tools || 0}
用户触达：${entry.metrics.outreach || 0}
有效沟通：${entry.metrics.conversations || 0}
内容发布：${entry.metrics.content || 0}

今日收获：${entry.review.win || "未填写"}
卡住问题：${entry.review.problem || "未填写"}
真实信号：${entry.review.signal || "未填写"}
明天第一件事：${entry.review.next || "未填写"}`;
}

function buildTodayPrompt(day) {
  const entry = getEntry(day);
  const assignment = getAssignment(day);
  const actionLines = getDailyActions(day)
    .map((action) => {
      const note = entry.actionNotes?.[action.id] ? `｜笔记：${entry.actionNotes[action.id]}` : "";
      return `${entry.actionChecks?.[action.id] ? "已完成" : "未完成"}｜${action.time}｜${action.category}｜${action.task}${note}`;
    })
    .join("\n");
  return `我正在执行 Codex 90 天创业训练计划，现在是 Day ${day}。

今天任务：${assignment.title}
今天交付物：${assignment.deliverable}

今天的具体行动清单：
${actionLines}

我今天的记录：
学习内容：${entry.learningNotes || "暂未填写"}
工具进展：${entry.buildNotes || "暂未填写"}
需求发现：${entry.demandNotes || "暂未填写"}
用户沟通：${entry.outreachNotes || "暂未填写"}
复盘收获：${entry.review.win || "暂未填写"}
卡住问题：${entry.review.problem || "暂未填写"}
明天第一件事：${entry.review.next || "暂未填写"}

请你帮我：
1. 判断今天做得是否符合训练目标
2. 找出最该改进的 3 个点
3. 给我明天的具体行动清单
4. 如果适合，帮我把今天内容整理成一条可发布的学习记录`;
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2200);
}

function exportData() {
  collectDailyForm();
  saveState();
  const payload = {
    exportedAt: new Date().toISOString(),
    app: "codex-learning-dashboard",
    version: 1,
    data: state,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `codex-90-day-backup-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast("备份文件已生成");
}

function importData(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(String(reader.result || "{}"));
      const incoming = parsed.data || parsed;
      if (!incoming || typeof incoming !== "object" || !incoming.entries) {
        throw new Error("数据格式不正确");
      }
      state = {
        startDate: incoming.startDate || DEFAULT_START_DATE,
        entries: incoming.entries || {},
      };
      selectedDay = clampDay(selectedDay);
      saveState();
      renderAll();
      showToast("数据已导入");
    } catch (error) {
      showToast("导入失败：文件格式不正确");
    }
  };
  reader.readAsText(file);
}

function switchTab(tabId) {
  $$(".tab").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.tab === tabId);
  });
  $$(".view").forEach((view) => {
    view.classList.toggle("is-active", view.id === tabId);
  });
}

function initEvents() {
  $$(".tab").forEach((button) => {
    button.addEventListener("click", () => switchTab(button.dataset.tab));
  });

  $("#startDateInput").addEventListener("change", (event) => {
    state.startDate = event.target.value || DEFAULT_START_DATE;
    saveState();
    renderAll();
  });

  $("#selectedDayInput").addEventListener("change", (event) => {
    collectDailyForm();
    selectedDay = clampDay(event.target.value);
    saveState();
    renderAll();
  });

  $("#prevDayBtn").addEventListener("click", () => {
    collectDailyForm();
    selectedDay = clampDay(selectedDay - 1);
    saveState();
    renderAll();
  });

  $("#nextDayBtn").addEventListener("click", () => {
    collectDailyForm();
    selectedDay = clampDay(selectedDay + 1);
    saveState();
    renderAll();
  });

  $("#todayBtn").addEventListener("click", () => {
    collectDailyForm();
    selectedDay = calculateTodayDay();
    saveState();
    renderAll();
  });

  $("#planSelectedDayInput").addEventListener("change", (event) => {
    collectDailyForm();
    selectedDay = clampDay(event.target.value);
    saveState();
    renderAll();
  });

  $("#planPrevDayBtn").addEventListener("click", () => {
    collectDailyForm();
    selectedDay = clampDay(selectedDay - 1);
    saveState();
    renderAll();
  });

  $("#planNextDayBtn").addEventListener("click", () => {
    collectDailyForm();
    selectedDay = clampDay(selectedDay + 1);
    saveState();
    renderAll();
  });

  $("#planTodayBtn").addEventListener("click", () => {
    collectDailyForm();
    selectedDay = calculateTodayDay();
    saveState();
    renderAll();
  });

  $("#jumpDailyBtn").addEventListener("click", () => {
    selectedDay = calculateTodayDay();
    renderAll();
    switchTab("daily");
  });

  document.addEventListener("input", (event) => {
    if (event.target.matches("[data-action-note]")) {
      const actionDay = clampDay(event.target.dataset.actionDay);
      const entry = getEntry(actionDay);
      entry.actionNotes[event.target.dataset.actionNote] = event.target.value;
      saveState();
    }

    if (event.target.matches(".autosave")) {
      scheduleSave();
    }
  });

  document.addEventListener("change", (event) => {
    if (event.target.matches(".autosave")) {
      scheduleSave();
    }

    if (event.target.matches("[data-action-check]")) {
      collectDailyForm();
      const actionDay = clampDay(event.target.dataset.actionDay);
      const entry = getEntry(actionDay);
      entry.actionChecks[event.target.dataset.actionCheck] = event.target.checked;
      saveState();
      renderAll();
      showToast(event.target.checked ? "行动已完成" : "已取消完成");
    }

    if (event.target.matches("[data-dashboard-block]")) {
      collectDailyForm();
      const todayDay = calculateTodayDay();
      const entry = getEntry(todayDay);
      entry.blocks[event.target.dataset.dashboardBlock] = event.target.checked;
      saveState();
      renderAll();
    }
  });

  document.addEventListener("click", (event) => {
    const mapButton = event.target.closest("[data-map-day]");
    if (mapButton) {
      collectDailyForm();
      selectedDay = clampDay(mapButton.dataset.mapDay);
      saveState();
      renderAll();
    }

    const planButton = event.target.closest("[data-plan-day]");
    if (planButton) {
      collectDailyForm();
      selectedDay = clampDay(planButton.dataset.planDay);
      saveState();
      renderAll();
    }

    const copyButton = event.target.closest("[data-copy-template]");
    if (copyButton) {
      const template = promptTemplates[Number(copyButton.dataset.copyTemplate)];
      copyText(template.body);
    }
  });

  $("#saveDayBtn").addEventListener("click", () => {
    collectDailyForm();
    saveState();
    renderAll();
    setSaveStatus("已手动保存");
    showToast("今日记录已保存");
  });

  $("#copySummaryBtn").addEventListener("click", () => {
    collectDailyForm();
    saveState();
    copyText(buildDailySummary(selectedDay));
  });

  $("#copyTodayPromptBtn").addEventListener("click", () => {
    collectDailyForm();
    saveState();
    copyText(buildTodayPrompt(calculateTodayDay()));
  });

  $("#exportHeaderBtn").addEventListener("click", exportData);
  $("#exportDataBtn").addEventListener("click", exportData);

  $("#importFileInput").addEventListener("change", (event) => {
    const [file] = event.target.files || [];
    if (file) importData(file);
    event.target.value = "";
  });
}

initEvents();
renderAll();
