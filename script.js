/* =============================================
   MedGrammar — Application Logic
   ============================================= */

// ─── Imperative Language Quiz Data (based on tutorial content) ───
const IMPERATIVE_QUIZ = [
  {
    question: "Which phrasing uses the preferred gentle imperative tone for a clinical plan?",
    correct: "Continue current antihypertensive medication.",
    incorrect: "Current antihypertensive medication should be continued.",
    reason: "The imperative tone ('Continue...') is preferred in plan documentation because it begins with an action verb, is concise, and directly states the intended plan.",
    section: "PLAN"
  },
  {
    question: "Which phrasing uses the preferred gentle imperative tone?",
    correct: "Monitor blood glucose levels daily.",
    incorrect: "Blood glucose levels should be monitored daily.",
    reason: "Starting with the action verb 'Monitor' makes the instruction direct and clear, which is the preferred imperative style for clinical plans.",
    section: "PLAN"
  },
  {
    question: "Which phrasing is more appropriate for patient-facing documentation?",
    correct: "Encourage smoking cessation.",
    incorrect: "The patient must stop smoking immediately.",
    reason: "The imperative phrasing avoids sounding judgmental or punitive and is more appropriate for records patients may access directly.",
    section: "PLAN"
  },
  {
    question: "Which phrasing follows the gentle imperative documentation style?",
    correct: "Follow up with cardiology in 2 weeks.",
    incorrect: "A follow-up with cardiology in 2 weeks should be scheduled.",
    reason: "The imperative form 'Follow up...' is more concise and action-oriented than the passive construction.",
    section: "PLAN"
  },
  {
    question: "Which phrasing is preferred for patient-centered communication?",
    correct: "Review medication adherence.",
    incorrect: "Patient is noncompliant with medication.",
    reason: "'Review medication adherence' is nonjudgmental and action-oriented, while 'noncompliant' can sound judgmental and is not patient-friendly.",
    section: "PLAN"
  },
  {
    question: "Which phrasing uses the correct imperative style?",
    correct: "Discuss smoking cessation strategies.",
    incorrect: "Smoking cessation strategies were discussed.",
    reason: "The imperative 'Discuss...' focuses on the action itself and is more direct than the passive past-tense alternative.",
    section: "PLAN"
  },
  {
    question: "Which is a correct conditional imperative statement?",
    correct: "Consider MRI if symptoms worsen.",
    incorrect: "An MRI should be considered if symptoms worsen.",
    reason: "Conditional imperative statements like 'Consider... if...' maintain the action-oriented style while being appropriately conditional.",
    section: "PLAN"
  },
  {
    question: "Which phrasing is more appropriate for clinical plan documentation?",
    correct: "Discuss dietary recommendations.",
    incorrect: "You failed to follow diet recommendations.",
    reason: "The imperative 'Discuss...' is respectful and action-oriented, while 'You failed...' uses blame language that is inappropriate for patient-facing records.",
    section: "PLAN"
  },
  {
    question: "Which phrasing follows the preferred documentation style?",
    correct: "Consider neurology referral if symptoms persist.",
    incorrect: "A neurology referral should be considered if symptoms persist.",
    reason: "The conditional imperative starting with 'Consider' is more concise and directive than the passive construction.",
    section: "PLAN"
  },
  {
    question: "Which phrasing is patient-facing imperative language?",
    correct: "Start low-dose aspirin therapy.",
    incorrect: "Low-dose aspirin therapy should be started.",
    reason: "Beginning with the action verb 'Start' is the preferred imperative style — it is clear, direct, and action-oriented.",
    section: "PLAN"
  },
  {
    question: "Which phrasing best demonstrates gentle imperative voice?",
    correct: "Increase hydration if dizziness continues.",
    incorrect: "If dizziness continues, hydration should be increased.",
    reason: "The imperative form places the action verb first, making the instruction more direct and easier to follow.",
    section: "PLAN"
  },
  {
    question: "Which phrasing is preferred in patient-accessible documentation?",
    correct: "Avoid NSAIDs due to renal impairment.",
    incorrect: "NSAIDs should be avoided due to renal impairment.",
    reason: "The imperative 'Avoid' is concise and action-oriented, which is preferred over passive voice in clinical plans.",
    section: "PLAN"
  },
  {
    question: "Which statement follows patient-facing language guidelines?",
    correct: "Encourage regular physical activity.",
    incorrect: "The patient was told to exercise more.",
    reason: "The gentle imperative 'Encourage...' is nonjudgmental and focuses on the clinical action, making it appropriate for patient-accessible records.",
    section: "PLAN"
  },
  {
    question: "Which phrasing correctly uses imperative voice in a plan?",
    correct: "Refer to physical therapy for gait training.",
    incorrect: "A referral to physical therapy for gait training is recommended.",
    reason: "The imperative 'Refer to...' is more concise and direct than the longer passive alternative.",
    section: "PLAN"
  },
  {
    question: "Which demonstrates the preferred documentation style?",
    correct: "Continue current pain management regimen.",
    incorrect: "The current pain management regimen will be continued.",
    reason: "Starting with the action verb 'Continue' follows the imperative style that is preferred for plan section documentation.",
    section: "PLAN"
  }
];

// ─── Achievements Definition ───
const ACHIEVEMENTS = [
  { id: "first_step", icon: "🎯", name: "First Step", desc: "Complete your first quiz", check: s => s.totalQuizzes >= 1 },
  { id: "streak_3", icon: "🔥", name: "On Fire", desc: "Maintain a 3-day streak", check: s => s.streak >= 3 },
  { id: "xp_500", icon: "💎", name: "XP Collector", desc: "Earn 500 total XP", check: s => s.xp >= 500 },
  { id: "all_modules", icon: "🏆", name: "Grammar Master", desc: "Complete all four modules", check: s => s.modules.imperative?.completed && s.modules.articles?.completed && s.modules.prepositions?.completed && s.modules.subjectverb?.completed },
  { id: "perfectionist", icon: "💯", name: "Perfectionist", desc: "Score 100% on any quiz", check: s => Object.values(s.modules).some(m => m.best === 100) },
  { id: "daily_warrior", icon: "⚡", name: "Daily Warrior", desc: "Complete 5 daily challenges", check: s => (s.dailyChallenges || 0) >= 5 },
];

// ─── Motivational Messages ───
const MOTIVATION = {
  perfect: ["Flawless! You're a grammar genius! 🎉", "Perfect score! Absolutely brilliant! 🌟", "100%! Nothing can stop you! 💯"],
  great: ["Excellent work! Almost perfect! 🔥", "Outstanding performance! Keep it up! ⭐", "So close to perfection! 💪"],
  good: ["Good job! Room for improvement! 👍", "Nice effort! Practice makes perfect! 📚", "You're getting there! Keep learning! 🚀"],
  poor: ["Don't give up! Every mistake is a lesson! 💡", "Keep practicing – you'll get better! 🌱", "Review the explanations and try again! 📖"],
};

const MASCOT_TIPS = [
  "💡 Tip: Start plan recommendations with an action verb!",
  "📝 Remember: Gentle imperative tone is preferred in clinical plans.",
  "🔍 Watch out: Missing articles are the most common error!",
  "⚡ Pro tip: Prepositions must match their verb context.",
  "🎯 Focus: Subject-verb agreement trips up even experienced writers.",
  "💊 Medical style: Use patient-facing, nonjudgmental language.",
  "✨ Keep going! Consistency is key to mastering grammar!",
  "🏆 Pro tip: Read your sentences aloud to catch awkward phrasing.",
];

// ─── Utility Functions ───
function getLevel(xp) {
  const xpPerLevel = 100;
  const level = Math.floor(xp / xpPerLevel) + 1;
  const currentLevelXp = xp % xpPerLevel;
  return { level, currentLevelXp, nextLevelXp: xpPerLevel, xp };
}

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function randomPick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function escapeHtml(str) {
  if (!str) return "";
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

// ─── State Management ───
const DEFAULT_STATE = {
  username: "",
  xp: 0,
  streak: 0,
  lastPlayDate: null,
  totalQuizzes: 0,
  dailyChallenges: 0,
  tutorialCompleted: false,
  modules: {
    imperative: { completed: false, best: 0, attempts: 0 },
    articles: { completed: false, best: 0, attempts: 0 },
    prepositions: { completed: false, best: 0, attempts: 0 },
    subjectverb: { completed: false, best: 0, attempts: 0 },
  },
  achievements: [],
  theme: "dark",
};

function loadState() {
  try {
    const saved = localStorage.getItem("medgrammar_state_v2");
    if (saved) {
      const parsed = JSON.parse(saved);
      return { ...DEFAULT_STATE, ...parsed, modules: { ...DEFAULT_STATE.modules, ...parsed.modules } };
    }
  } catch (e) { /* ignore */ }
  return { ...DEFAULT_STATE };
}

function saveState(state) {
  localStorage.setItem("medgrammar_state_v2", JSON.stringify(state));
}

// ─── Main App ───
const App = (() => {
  let state = loadState();
  let currentQuiz = null;

  function init() {
    applyTheme(state.theme);
    updateStreak();
    updateNav();

    if (state.username) {
      if (!state.tutorialCompleted) {
        navigate("tutorial");
      } else {
        navigate("modules");
      }
    }

    document.getElementById("usernameInput").addEventListener("keydown", e => {
      if (e.key === "Enter") startJourney();
    });
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    document.getElementById("themeIcon").textContent = theme === "dark" ? "🌙" : "☀️";
  }

  function toggleTheme() {
    state.theme = state.theme === "dark" ? "light" : "dark";
    applyTheme(state.theme);
    saveState(state);
  }

  function updateStreak() {
    const today = new Date().toDateString();
    if (state.lastPlayDate) {
      const last = new Date(state.lastPlayDate);
      const diff = Math.floor((new Date(today) - last) / 86400000);
      if (diff > 1) state.streak = 0;
    }
  }

  function updateNav() {
    document.getElementById("navXpValue").textContent = `${state.xp} XP`;
    document.getElementById("navStreakValue").textContent = state.streak;
  }

  // ─── Navigation ───
  function navigate(page) {
    if (!state.tutorialCompleted && (page === "modules" || page === "quiz")) {
      showToast("📚 Please complete the tutorial first!", "error");
      page = "tutorial";
    }

    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    const screen = document.getElementById(`screen-${page}`);
    if (screen) screen.classList.add("active");

    document.querySelectorAll(".nav-link").forEach(l => {
      l.classList.toggle("active", l.dataset.page === page);
    });

    switch (page) {
      case "modules": renderModules(); break;
      case "dashboard": renderDashboard(); break;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ─── Welcome ───
  function startJourney() {
    const input = document.getElementById("usernameInput");
    const name = input.value.trim();
    if (!name) {
      input.style.borderColor = "var(--danger)";
      input.focus();
      showToast("⚠️ Please enter your name!", "error");
      return;
    }
    state.username = name;
    saveState(state);
    showToast(`Welcome, ${name}! Let's learn! 🎉`, "success");

    if (!state.tutorialCompleted) {
      navigate("tutorial");
    } else {
      navigate("modules");
    }

    setTimeout(() => mascotSay("Hi " + name + "! 👋 I'm your grammar assistant. Click me for tips!"), 1000);
  }

  // ─── Get quiz questions for a module ───
  function getModuleQuestions(moduleKey, count) {
    count = count || 20;
    let pool = [];
    switch (moduleKey) {
      case "imperative":
        return shuffleArray(IMPERATIVE_QUIZ).slice(0, count);
      case "articles":
        pool = shuffleArray(ARTICLE_ERRORS).slice(0, count);
        return pool.map(function(item, i) {
          return {
            id: "art_" + i,
            section: item.section,
            incorrect: (item.error || "").replace(/^"|"$/g, "").trim(),
            correct: (item.correction || "").replace(/^"|"$/g, "").trim(),
            reason: item.reasoning || ""
          };
        });
      case "prepositions":
        pool = shuffleArray(PREPOSITION_ERRORS).slice(0, count);
        return pool.map(function(item, i) {
          return {
            id: "prep_" + i,
            section: item.section,
            incorrect: (item.error || "").replace(/^"|"$/g, "").trim(),
            correct: (item.correction || "").replace(/^"|"$/g, "").trim(),
            reason: item.reasoning || ""
          };
        });
      case "subjectverb":
        pool = shuffleArray(SV_ERRORS).slice(0, count);
        return pool.map(function(item, i) {
          return {
            id: "sv_" + i,
            section: item.section,
            incorrect: (item.error || "").replace(/^"|"$/g, "").trim(),
            correct: (item.correction || "").replace(/^"|"$/g, "").trim(),
            reason: item.reasoning || ""
          };
        });
      default:
        return [];
    }
  }

  // ─── Modules ───
  function renderModules() {
    const grid = document.getElementById("modulesGrid");
    const modules = [
      {
        key: "imperative", title: "Patient-Facing Language", icon: "🗣️",
        desc: "Quiz on imperative language and patient-centered documentation style",
        questions: 15, xp: 15,
      },
      {
        key: "articles", title: "Article Errors", icon: "📰",
        desc: "Identify and correct missing or incorrect articles (a, an, the) in medical documentation",
        questions: 20, xp: 15,
      },
      {
        key: "prepositions", title: "Preposition Errors", icon: "🔗",
        desc: "Fix incorrect or missing prepositions in clinical notes",
        questions: 20, xp: 15,
      },
      {
        key: "subjectverb", title: "Subject-Verb Errors", icon: "⚙️",
        desc: "Correct subject-verb agreement and verb form errors in medical writing",
        questions: 20, xp: 15,
      },
    ];

    grid.innerHTML = modules.map(function(m, i) {
      var modState = state.modules[m.key];
      var completed = modState.completed;
      var statusClass = completed ? "done-icon" : "play-icon";
      var statusIcon = completed ? "✓" : "▶";

      return '<div class="module-card ' + (completed ? 'completed' : '') + '"' +
        ' onclick="App.startQuiz(\'' + m.key + '\')"' +
        ' style="animation-delay: ' + (i * 0.1) + 's">' +
        '<div class="module-icon ' + m.key + '">' + m.icon + '</div>' +
        '<div class="module-info">' +
        '<div class="module-title">' + m.title + '</div>' +
        '<div class="module-desc">' + m.desc + '</div>' +
        '<div class="module-meta">' +
        '<span>📝 ' + m.questions + ' questions</span>' +
        '<span>⚡ ' + m.xp + ' XP each</span>' +
        (modState.best > 0 ? '<span>🏆 Best: ' + modState.best + '%</span>' : '') +
        '</div></div>' +
        '<div class="module-status ' + statusClass + '">' + statusIcon + '</div>' +
        '</div>';
    }).join("");

    // Daily challenge
    var daily = document.getElementById("dailyChallenge");
    var today = new Date().toDateString();
    if (state.lastDailyDate === today) {
      daily.style.opacity = "0.5";
      daily.style.pointerEvents = "none";
      daily.querySelector(".daily-desc").textContent = "✅ Completed today! Come back tomorrow.";
    } else {
      daily.style.opacity = "1";
      daily.style.pointerEvents = "auto";
    }
  }

  // ─── Quiz Engine ───
  function startQuiz(moduleKey) {
    var questions = getModuleQuestions(moduleKey, 20);
    if (!questions.length) return;

    currentQuiz = {
      moduleKey: moduleKey,
      questions: questions,
      currentIndex: 0,
      answers: [],
      startTime: Date.now(),
      elapsed: 0,
      timerId: null,
    };

    navigate("quiz");
    renderQuestion();
    startTimer();

    var titleMap = {
      imperative: "PATIENT-FACING LANGUAGE",
      articles: "ARTICLE ERRORS",
      prepositions: "PREPOSITION ERRORS",
      subjectverb: "SUBJECT-VERB ERRORS",
      daily: "DAILY CHALLENGE",
    };
    document.getElementById("quizModuleLabel").textContent = titleMap[moduleKey] || moduleKey.toUpperCase();
    mascotSay(randomPick([
      "You got this! 💪", "Focus and read carefully! 🔍",
      "Take your time with each one! ⏳", "Let's ace this! 🎯"
    ]));
  }

  function startDailyChallenge() {
    if (!state.tutorialCompleted) {
      showToast("📚 Please complete the tutorial first!", "error");
      navigate("tutorial");
      return;
    }
    var today = new Date().toDateString();
    if (state.lastDailyDate === today) return;

    var artQ = getModuleQuestions("articles", 3);
    var prepQ = getModuleQuestions("prepositions", 3);
    var svQ = getModuleQuestions("subjectverb", 4);
    var questions = shuffleArray([].concat(artQ, prepQ, svQ));

    currentQuiz = {
      moduleKey: "daily",
      questions: questions,
      currentIndex: 0,
      answers: [],
      startTime: Date.now(),
      elapsed: 0,
      timerId: null,
    };

    navigate("quiz");
    renderQuestion();
    startTimer();

    document.getElementById("quizModuleLabel").textContent = "DAILY CHALLENGE";
    mascotSay("Daily challenge! 10 quick questions for bonus XP! ⚡");
  }

  function startTimer() {
    if (currentQuiz.timerId) clearInterval(currentQuiz.timerId);
    currentQuiz.timerId = setInterval(function() {
      currentQuiz.elapsed++;
      document.getElementById("timerValue").textContent = formatTime(currentQuiz.elapsed);
    }, 1000);
  }

  function stopTimer() {
    if (currentQuiz && currentQuiz.timerId) {
      clearInterval(currentQuiz.timerId);
      currentQuiz.timerId = null;
    }
  }

  function renderQuestion() {
    var q = currentQuiz.questions[currentQuiz.currentIndex];
    var total = currentQuiz.questions.length;
    var idx = currentQuiz.currentIndex;

    document.getElementById("quizQuestionCount").textContent = (idx + 1) + " / " + total;
    document.getElementById("quizProgressFill").style.width = ((idx / total) * 100) + "%";

    var sectionText = q.section || "CLINICAL DOCUMENTATION";
    document.getElementById("quizSectionBadge").textContent = "📋 " + sectionText;

    // Set instruction text
    if (q.question) {
      document.querySelector(".quiz-instruction").textContent = q.question;
    } else {
      document.querySelector(".quiz-instruction").textContent = "Select the grammatically correct sentence:";
    }

    var options = shuffleArray([
      { text: q.correct, isCorrect: true },
      { text: q.incorrect, isCorrect: false },
    ]);

    var optionsEl = document.getElementById("quizOptions");
    optionsEl.innerHTML = options.map(function(opt, i) {
      return '<button class="quiz-option" data-index="' + i + '" data-correct="' + opt.isCorrect + '"' +
        ' onclick="App.handleAnswer(this)">' +
        '<span class="option-letter">' + String.fromCharCode(65 + i) + '.</span> ' + escapeHtml(opt.text) +
        '</button>';
    }).join("");

    var feedback = document.getElementById("quizFeedback");
    feedback.className = "quiz-feedback";
    feedback.style.display = "none";
    document.getElementById("quizNextBtn").style.display = "none";

    var card = document.getElementById("quizCard");
    card.style.animation = "none";
    card.offsetHeight;
    card.style.animation = "popIn 0.4s ease";
  }

  function handleAnswer(btn) {
    var isCorrect = btn.dataset.correct === "true";
    var q = currentQuiz.questions[currentQuiz.currentIndex];
    selectAnswer(btn, isCorrect, q.reason || "");
  }

  function selectAnswer(btn, isCorrect, reason) {
    var options = document.querySelectorAll(".quiz-option");
    options.forEach(function(o) { o.classList.add("disabled"); });

    options.forEach(function(o) {
      if (o.dataset.correct === "true") o.classList.add("correct");
    });
    if (!isCorrect) btn.classList.add("wrong");

    var q = currentQuiz.questions[currentQuiz.currentIndex];
    currentQuiz.answers.push({
      question: q,
      wasCorrect: isCorrect,
      selectedText: btn.textContent.trim(),
    });

    var feedback = document.getElementById("quizFeedback");
    feedback.className = "quiz-feedback show " + (isCorrect ? "correct-fb" : "wrong-fb");
    feedback.style.display = "block";
    feedback.innerHTML = '<div class="feedback-title">' + (isCorrect ? "✅ Correct!" : "❌ Incorrect") + '</div>' +
      '<div class="feedback-reason">' + escapeHtml(reason) + '</div>';

    var nextBtn = document.getElementById("quizNextBtn");
    var isLast = currentQuiz.currentIndex >= currentQuiz.questions.length - 1;
    nextBtn.textContent = isLast ? "See Results →" : "Next Question →";
    nextBtn.style.display = "inline-flex";

    if (isCorrect) {
      showToast("+15 XP ⚡", "xp");
    }
  }

  function nextQuestion() {
    currentQuiz.currentIndex++;
    if (currentQuiz.currentIndex >= currentQuiz.questions.length) {
      finishQuiz();
    } else {
      renderQuestion();
    }
  }

  function finishQuiz() {
    stopTimer();

    var correctCount = currentQuiz.answers.filter(function(a) { return a.wasCorrect; }).length;
    var total = currentQuiz.questions.length;
    var percentage = Math.round((correctCount / total) * 100);
    var moduleKey = currentQuiz.moduleKey;

    var xpPerQuestion = 15;
    var xpEarned = correctCount * xpPerQuestion;
    var bonusXp = percentage === 100 ? 50 : percentage >= 80 ? 20 : 0;
    var totalXpEarned = xpEarned + bonusXp;

    state.xp += totalXpEarned;
    state.totalQuizzes++;

    var today = new Date().toDateString();
    if (state.lastPlayDate !== today) {
      var last = state.lastPlayDate ? new Date(state.lastPlayDate) : null;
      var diff2 = last ? Math.floor((new Date(today) - last) / 86400000) : 999;
      state.streak = diff2 <= 1 ? state.streak + 1 : 1;
    }
    state.lastPlayDate = today;

    if (moduleKey !== "daily") {
      var mod = state.modules[moduleKey];
      mod.attempts++;
      if (percentage > mod.best) mod.best = percentage;
      if (percentage >= 70) mod.completed = true;
    } else {
      state.dailyChallenges = (state.dailyChallenges || 0) + 1;
      state.lastDailyDate = today;
    }

    saveState(state);
    updateNav();
    checkAchievements();
    renderResults(correctCount, total, percentage, totalXpEarned, bonusXp);
    navigate("results");

    if (percentage >= 80) spawnConfetti();
  }

  function renderResults(correct, total, percentage, totalXp, bonusXp) {
    var emoji, msgPool;
    if (percentage === 100) { emoji = "🏆"; msgPool = MOTIVATION.perfect; }
    else if (percentage >= 80) { emoji = "🌟"; msgPool = MOTIVATION.great; }
    else if (percentage >= 50) { emoji = "👍"; msgPool = MOTIVATION.good; }
    else { emoji = "📚"; msgPool = MOTIVATION.poor; }

    var titleMap = {
      imperative: "Patient-Facing Language",
      articles: "Article Errors",
      prepositions: "Preposition Errors",
      subjectverb: "Subject-Verb Errors",
      daily: "Daily Challenge",
    };

    document.getElementById("resultsEmoji").textContent = emoji;
    document.getElementById("resultsTitle").textContent = randomPick(msgPool);
    document.getElementById("resultsSubtitle").textContent = "You scored " + correct + " out of " + total + " on " + (titleMap[currentQuiz.moduleKey] || "the quiz") + ".";

    document.getElementById("resultsStats").innerHTML =
      '<div class="result-stat-card"><span class="result-stat-value" style="color:var(--accent-light)">' + percentage + '%</span><span class="result-stat-label">Score</span></div>' +
      '<div class="result-stat-card"><span class="result-stat-value" style="color:var(--success)">' + correct + '</span><span class="result-stat-label">Correct</span></div>' +
      '<div class="result-stat-card"><span class="result-stat-value" style="color:var(--danger)">' + (total - correct) + '</span><span class="result-stat-label">Wrong</span></div>' +
      '<div class="result-stat-card"><span class="result-stat-value">' + formatTime(currentQuiz.elapsed) + '</span><span class="result-stat-label">Time</span></div>';

    document.getElementById("resultsXp").innerHTML =
      '<span>⚡ You earned <strong>' + totalXp + ' XP</strong></span>' +
      (bonusXp > 0 ? '<span style="margin-left:12px;color:var(--warning)">🎁 +' + bonusXp + ' bonus XP!</span>' : '');

    var list = document.getElementById("breakdownList");
    list.innerHTML = currentQuiz.answers.map(function(a, i) {
      var correctText = escapeHtml(a.question.correct);
      var incorrectText = escapeHtml(a.question.incorrect);
      return '<div class="breakdown-item ' + (a.wasCorrect ? "correct-item" : "wrong-item") + '">' +
        '<div class="breakdown-q">Q' + (i + 1) + ' — ' + escapeHtml(a.question.section || "Clinical Plan") + '</div>' +
        (!a.wasCorrect ? '<div class="breakdown-sentence user-wrong">✗ ' + incorrectText + '</div>' : '') +
        '<div class="breakdown-sentence correct-answer">✓ ' + correctText + '</div>' +
        '<div class="breakdown-reason">💡 ' + escapeHtml(a.question.reason || '') + '</div>' +
        '</div>';
    }).join("");
  }

  function retryModule() {
    if (currentQuiz) startQuiz(currentQuiz.moduleKey);
  }

  function confirmQuit() {
    showModal("Quit Quiz?", "Your progress on this quiz will be lost.", "Quit", function() {
      stopTimer();
      currentQuiz = null;
      navigate("modules");
      closeModal();
    });
  }

  // ─── Dashboard ───
  function renderDashboard() {
    var lvl = getLevel(state.xp);

    document.getElementById("dashProfile").innerHTML =
      '<div class="dash-card-title">Profile</div>' +
      '<div style="font-size:3rem;margin-bottom:8px">👤</div>' +
      '<div class="dash-username">' + (state.username || "Guest") + '</div>' +
      '<div class="dash-join-date">🔥 ' + state.streak + '-day streak</div>';

    document.getElementById("dashLevel").innerHTML =
      '<div class="dash-card-title">Level</div>' +
      '<div class="dash-big-stat" style="background:var(--gradient-primary);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">Lv. ' + lvl.level + '</div>' +
      '<div class="dash-stat-label">' + state.xp + ' Total XP</div>' +
      '<div class="level-bar-container"><div class="level-bar-labels"><span>' + lvl.currentLevelXp + ' XP</span><span>' + lvl.nextLevelXp + ' XP</span></div>' +
      '<div class="level-bar"><div class="level-bar-fill" style="width:' + ((lvl.currentLevelXp / lvl.nextLevelXp) * 100) + '%"></div></div></div>';

    var moduleNames = {
      imperative: "Patient-Facing Language",
      articles: "Article Errors",
      prepositions: "Preposition Errors",
      subjectverb: "Subject-Verb Errors",
    };

    var moduleList = Object.keys(moduleNames).map(function(key) {
      var m = state.modules[key];
      var badgeClass = m.completed ? "badge-completed" : "badge-available";
      var badgeText = m.completed ? "Completed" : "Available";
      return '<div class="module-progress-item">' +
        '<span class="module-progress-name">' + moduleNames[key] + '</span>' +
        '<span class="module-progress-score">Best: ' + m.best + '% · ' + m.attempts + ' attempts</span>' +
        '<span class="module-progress-badge ' + badgeClass + '">' + badgeText + '</span>' +
        '</div>';
    }).join("");

    document.getElementById("dashProgress").innerHTML =
      '<div class="dash-card-title">Module Progress</div>' + moduleList;

    var achHTML = ACHIEVEMENTS.map(function(a) {
      var unlocked = state.achievements.includes(a.id);
      return '<div class="achievement-item ' + (unlocked ? "unlocked" : "locked-ach") + '" title="' + a.desc + '">' +
        '<span class="ach-icon">' + a.icon + '</span>' +
        '<span class="ach-name">' + a.name + '</span></div>';
    }).join("");

    document.getElementById("dashAchievements").innerHTML =
      '<div class="dash-card-title">Achievements</div><div class="achievements-grid">' + achHTML + '</div>';
  }

  // ─── Achievements ───
  function checkAchievements() {
    ACHIEVEMENTS.forEach(function(a) {
      if (!state.achievements.includes(a.id) && a.check(state)) {
        state.achievements.push(a.id);
        saveState(state);
        showAchievement(a);
      }
    });
  }

  function showAchievement(ach) {
    var popup = document.getElementById("achievementPopup");
    document.getElementById("achievementIcon").textContent = ach.icon;
    document.getElementById("achievementName").textContent = ach.name;
    popup.classList.add("show");
    setTimeout(function() { popup.classList.remove("show"); }, 4000);
  }

  // ─── Mascot ───
  function mascotSpeak() {
    mascotSay(randomPick(MASCOT_TIPS));
  }

  function mascotSay(msg) {
    var bubble = document.getElementById("mascotBubble");
    bubble.textContent = msg;
    bubble.classList.add("show");
    setTimeout(function() { bubble.classList.remove("show"); }, 5000);
  }

  // ─── Toasts ───
  function showToast(message, type) {
    type = type || "success";
    var container = document.getElementById("toastContainer");
    var toast = document.createElement("div");
    toast.className = "toast toast-" + type;
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(function() {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(100px)";
      setTimeout(function() { toast.remove(); }, 300);
    }, 3000);
  }

  // ─── Modal ───
  function showModal(title, body, confirmText, onConfirm) {
    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modalBody").textContent = body;
    var confirmBtn = document.getElementById("modalConfirm");
    confirmBtn.textContent = confirmText;
    confirmBtn.onclick = onConfirm;
    document.getElementById("modalOverlay").classList.add("show");
  }

  function closeModal() {
    document.getElementById("modalOverlay").classList.remove("show");
  }

  // ─── Tutorial ───
  function completeTutorial() {
    state.tutorialCompleted = true;
    state.xp += 25;
    saveState(state);
    updateNav();
    showToast("🎓 Tutorial Complete! +25 XP — Modules unlocked!", "success");
    spawnConfetti();
    navigate("modules");
    setTimeout(function() { mascotSay("Great job finishing the tutorial! Now let's practice! 💪"); }, 800);
  }

  // ─── Confetti ───
  function spawnConfetti() {
    var colors = ["#6c5ce7", "#a29bfe", "#00c853", "#ffc107", "#ff5252", "#00b0ff"];
    for (var i = 0; i < 50; i++) {
      (function() {
        var piece = document.createElement("div");
        piece.className = "confetti-piece";
        piece.style.left = Math.random() * 100 + "vw";
        piece.style.background = randomPick(colors);
        piece.style.animationDuration = (2 + Math.random() * 2) + "s";
        piece.style.animationDelay = Math.random() * 1.5 + "s";
        piece.style.width = (6 + Math.random() * 8) + "px";
        piece.style.height = (6 + Math.random() * 8) + "px";
        document.body.appendChild(piece);
        setTimeout(function() { piece.remove(); }, 5000);
      })();
    }
  }

  // Public API
  return {
    init: init,
    navigate: navigate,
    startJourney: startJourney,
    toggleTheme: toggleTheme,
    startQuiz: startQuiz,
    startDailyChallenge: startDailyChallenge,
    handleAnswer: handleAnswer,
    selectAnswer: selectAnswer,
    nextQuestion: nextQuestion,
    retryModule: retryModule,
    confirmQuit: confirmQuit,
    closeModal: closeModal,
    mascotSpeak: mascotSpeak,
    completeTutorial: completeTutorial,
  };
})();

// Boot
document.addEventListener("DOMContentLoaded", App.init);
