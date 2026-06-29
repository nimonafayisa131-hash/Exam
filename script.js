// ===== CONSTANTS =====
const ADMIN_USER = 'nima';
const ADMIN_PASS = 'admin2026';
const SK_RESULTS   = 'eq2_results';
const SK_ATTEMPTED = 'eq2_attempted';
const SK_COURSES   = 'eq2_courses';
const SK_SETTINGS  = 'eq2_settings';

// ===== SQL QUESTIONS =====
const SQL_QUESTIONS = [
  {q:"What is a major disadvantage of the File-Based system?",opts:["It is very fast","Data redundancy and inconsistency","It is cheap to maintain","It supports many users easily"],ans:1},
  {q:"What does DBMS stand for?",opts:["Data Backup Management System","Digital Base Management System","Database Management System","Data Browsing Module System"],ans:2},
  {q:"Which best describes a Relational Database?",opts:["Data stored in plain text files","Data organized in related tables with rows and columns","Data stored in a single large file","Data stored only on the cloud"],ans:1},
  {q:"What is a Primary Key?",opts:["A key that allows NULL values","A column that uniquely identifies each row and cannot be NULL","A key shared between two tables","A key used only for sorting"],ans:1},
  {q:"What is the role of a Foreign Key?",opts:["It deletes records automatically","It links two tables by referencing a Primary Key","It encrypts table data","It prevents duplicate rows"],ans:1},
  {q:"In which year did SQL become an ANSI standard?",opts:["1970","1980","1986","2000"],ans:2},
  {q:"Which of the following is NOT a benefit of the Database approach?",opts:["Data sharing among multiple users","Data redundancy increases","Backup and recovery support","Improved data security"],ans:1},
  {q:"SQL stands for:",opts:["Simple Query List","Structured Question Language","Structured Query Language","System Query Language"],ans:2},
  {q:"Which SQL category controls user access?",opts:["DDL","DML","DQL","DCL"],ans:3},
  {q:"What does it mean that SQL is non-procedural?",opts:["SQL cannot run on any system","You specify WHAT you want, not HOW to get it","SQL must follow step-by-step instructions","SQL does not support functions"],ans:1},
  {q:"Which of the following is an example of an RDBMS?",opts:["Microsoft Word","MySQL","Adobe Acrobat","Windows Explorer"],ans:1},
  {q:"A schema in a database refers to:",opts:["A single row in a table","The overall logical structure of the database","A backup file","A type of query"],ans:1},
  {q:"Which SQL command creates a new table?",opts:["NEW TABLE","ADD TABLE","CREATE TABLE","INSERT TABLE"],ans:2},
  {q:"Which command removes a table permanently?",opts:["DELETE TABLE","REMOVE TABLE","TRUNCATE TABLE","DROP TABLE"],ans:3},
  {q:"Which command adds a new column to an existing table?",opts:["UPDATE TABLE","ALTER TABLE ... ADD","MODIFY TABLE","INSERT COLUMN"],ans:1},
  {q:"What does the NOT NULL constraint do?",opts:["Allows empty values","Forces a column to always have a value","Makes values unique","Sets a default value"],ans:1},
  {q:"Which constraint ensures no duplicate values in a column?",opts:["NOT NULL","PRIMARY KEY","UNIQUE","CHECK"],ans:2},
  {q:"What does the DEFAULT constraint do?",opts:["Prevents NULL values","Automatically inserts a predefined value if none is provided","Removes duplicate rows","Deletes empty records"],ans:1},
  {q:"Which constraint limits the values allowed in a column?",opts:["NOT NULL","UNIQUE","CHECK","DEFAULT"],ans:2},
  {q:"Which data type stores variable-length text up to 8,000 characters?",opts:["CHAR","TEXT","VARCHAR","INT"],ans:2},
  {q:"What is the correct syntax to create a database?",opts:["NEW DATABASE myDB;","ADD DATABASE myDB;","CREATE DATABASE myDB;","BUILD DATABASE myDB;"],ans:2},
  {q:"Which keyword auto-increments a primary key in SQL Server?",opts:["AUTO_INCREMENT","IDENTITY","AUTOKEY","SEQUENCE"],ans:1},
  {q:"What does DROP DATABASE do?",opts:["Empties all tables","Permanently deletes the entire database","Renames the database","Creates a backup"],ans:1},
  {q:"Which correctly adds a Foreign Key?",opts:["ALTER TABLE Orders ADD FOREIGN KEY (CustID) REFERENCES Customers(ID);","INSERT FOREIGN KEY CustID INTO Orders;","CREATE FOREIGN KEY Orders.CustID;","MODIFY TABLE Orders FK CustID;"],ans:0},
  {q:"Which command inserts a new row into a table?",opts:["ADD INTO","INSERT INTO","PUT INTO","PUSH INTO"],ans:1},
  {q:"What is the correct syntax to update data?",opts:["MODIFY table SET col=val WHERE condition;","UPDATE table SET col=val WHERE condition;","CHANGE table col=val WHERE condition;","ALTER table SET col=val;"],ans:1},
  {q:"What happens if you run UPDATE without a WHERE clause?",opts:["Nothing happens","Only the first row is updated","All rows in the table are updated","An error occurs"],ans:2},
  {q:"Which command removes specific rows from a table?",opts:["DROP","TRUNCATE","REMOVE","DELETE"],ans:3},
  {q:"What does DELETE FROM Students; do?",opts:["Deletes the Students table","Deletes all rows but keeps the table structure","Deletes only the first row","Renames the table"],ans:1},
  {q:"What is the difference between DELETE and DROP?",opts:["No difference","DELETE removes data rows; DROP removes the entire table structure","DROP removes data rows; DELETE removes the table","Both remove the database"],ans:1},
  {q:"Which DML statement modifies existing records?",opts:["INSERT","ALTER","UPDATE","SELECT"],ans:2},
  {q:"To insert only specific columns, which syntax is correct?",opts:["INSERT INTO table VALUES (val1, val2);","INSERT INTO table (col1, col2) VALUES (val1, val2);","ADD INTO table (col1) = val1;","PUT INTO table col1=val1;"],ans:1},
  {q:"Which clause prevents UPDATE or DELETE from affecting all rows?",opts:["ORDER BY","GROUP BY","WHERE","HAVING"],ans:2},
  {q:"Which keyword retrieves data from a table?",opts:["GET","FETCH","SELECT","RETRIEVE"],ans:2},
  {q:"What does SELECT * mean?",opts:["Select all databases","Select all rows only","Select all columns","Select the first row"],ans:2},
  {q:"What does the DISTINCT keyword do?",opts:["Sorts results alphabetically","Removes duplicate values from results","Filters NULL values","Groups rows together"],ans:1},
  {q:"Which clause filters rows based on a condition?",opts:["HAVING","ORDER BY","GROUP BY","WHERE"],ans:3},
  {q:"What does ORDER BY DESC do?",opts:["Sorts from A to Z","Sorts from smallest to largest","Sorts from largest to smallest / Z to A","Removes duplicates"],ans:2},
  {q:"Which operator checks if a value falls within a range?",opts:["IN","LIKE","BETWEEN","IS NULL"],ans:2},
  {q:"What does the LIKE operator with '%' wildcard do?",opts:["Matches exactly one character","Matches zero or more characters","Matches only numbers","Matches NULL values"],ans:1},
  {q:"Which aggregate function returns the total number of rows?",opts:["SUM()","AVG()","COUNT()","MAX()"],ans:2},
  {q:"Which function returns the highest value in a column?",opts:["MIN()","AVG()","COUNT()","MAX()"],ans:3},
  {q:"What does AVG() do?",opts:["Returns the total sum","Returns the average (mean) value","Returns the number of rows","Returns the minimum value"],ans:1},
  {q:"What is the purpose of GROUP BY?",opts:["Sorts results","Groups rows with the same value for use with aggregate functions","Filters individual rows","Joins two tables"],ans:1},
  {q:"What is the difference between WHERE and HAVING?",opts:["No difference","WHERE filters rows before grouping; HAVING filters groups after aggregation","HAVING filters rows before grouping; WHERE filters after","Both filter after aggregation"],ans:1},
  {q:"Which clause filters results after GROUP BY?",opts:["WHERE","ORDER BY","HAVING","DISTINCT"],ans:2},
  {q:"A subquery must be enclosed in:",opts:["Square brackets [ ]","Curly braces { }","Parentheses ( )","Quotation marks"],ans:2},
  {q:"Which operator is used with a subquery returning multiple rows?",opts:["=","IN","LIKE","BETWEEN"],ans:1},
  {q:"Which function combines two strings together?",opts:["MERGE()","JOIN()","CONCAT()","COMBINE()"],ans:2},
  {q:"Which is the correct full SELECT syntax order?",opts:["FROM -> WHERE -> SELECT -> GROUP BY -> HAVING -> ORDER BY","SELECT -> FROM -> WHERE -> GROUP BY -> HAVING -> ORDER BY","WHERE -> SELECT -> FROM -> ORDER BY -> GROUP BY -> HAVING","SELECT -> WHERE -> FROM -> HAVING -> GROUP BY -> ORDER BY"],ans:1}
];

// ===== DEFAULT COURSES =====
const DEFAULT_COURSES = [
  {
    id: 'course_sql',
    name: 'SQL — Basic Structured Query Language',
    desc: 'WDDBA Level III · 50 Questions · 4 Chapters',
    icon: '🗄️',
    questions: JSON.parse(JSON.stringify(SQL_QUESTIONS))
  }
];

const DEFAULT_SETTINGS = {
  timeMins: 20,
  passPercent: 50,
  qCount: 0,
  shuffleQ: true,
  shuffleA: true
};

// ===== STATE =====
let courses = [];
let settings = {};
let currentQ = 0;
let examQuestions = [];
let answers = [];
let answerMap = [];
let timerInterval = null;
let timeLeft = 0;
let TOTAL_TIME = 0;
let currentStudent = {};
let selectedCourseId = null;
let activeCourseId = null;
let editingQIdx = null;
let deletingQIdx = null;
let pendingCorrect = null;
let editingCourseId = null;
let deletingCourseId = null;
let currentQuestionType = 'mcq';
let pendingTFCorrect = null;
let lastExamSnapshot = null;

// ===== DATA =====
function loadData() {
  const sc = localStorage.getItem(SK_COURSES);
  courses = sc ? JSON.parse(sc) : JSON.parse(JSON.stringify(DEFAULT_COURSES));
  const ss = localStorage.getItem(SK_SETTINGS);
  settings = ss ? JSON.parse(ss) : { ...DEFAULT_SETTINGS };
}
loadData();

// ===== SCREENS =====
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function goStudentRegister() {
  loadData();
  renderCourseSelectGrid();
  showScreen('screen-register');
}

function goAdminLogin() {
  showScreen('screen-admin-login');
}

function closeModal(id) {
  document.getElementById(id).classList.remove('show');
}

// ===== UTILS =====
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getCourse(id) {
  return courses.find(c => c.id === id);
}

function saveCourses() {
  localStorage.setItem(SK_COURSES, JSON.stringify(courses));
}

// ===== COURSE SELECT (student) =====
function renderCourseSelectGrid() {
  const sel = document.getElementById('course-select-dropdown');
  const visibleCourses = courses.filter(c => !c.hidden);
  sel.innerHTML = '<option value="">-- Choose a course --</option>' +
    visibleCourses.map(c =>
      `<option value="${c.id}" ${selectedCourseId === c.id ? 'selected' : ''}>${c.icon || '📚'} ${c.name} (${c.questions.length} questions)</option>`
    ).join('');
  sel.onchange = () => { selectedCourseId = sel.value || null; };
}

function selectCourse(id) {
  selectedCourseId = id;
  renderCourseSelectGrid();
}

// ===== STUDENT REGISTER =====
function handleStudentRegister() {
  loadData();
  const name = document.getElementById('student-name').value.trim();
  const id   = document.getElementById('student-id').value.trim();
  const dept = document.getElementById('student-dept').value;
  const err  = document.getElementById('reg-error');
  if (!name || !id || !dept) {
    err.textContent = 'Please fill in all fields.';
    err.classList.add('show');
    return;
  }
  if (!selectedCourseId) {
    selectedCourseId = document.getElementById('course-select-dropdown').value || null;
  }
  if (!selectedCourseId) {
    err.textContent = 'Please select a course.';
    err.classList.add('show');
    return;
  }
  const course = getCourse(selectedCourseId);
  if (!course || !course.questions.length) {
    err.textContent = 'This course has no questions yet.';
    err.classList.add('show');
    return;
  }
  err.classList.remove('show');
  const attempted = JSON.parse(localStorage.getItem(SK_ATTEMPTED) || '[]');
  const key = id.toUpperCase() + '::' + selectedCourseId;
  if (attempted.includes(key)) {
    document.getElementById('blocked-id').textContent = id;
    document.getElementById('blocked-course').textContent = course.name;
    showScreen('screen-blocked');
    return;
  }
  currentStudent = {
    name,
    id: id.toUpperCase(),
    dept,
    courseId: selectedCourseId,
    courseName: course.name
  };
  startExam(course);
}

// ===== EXAM =====
function startExam(course) {
  currentQ = 0;
  let pool = [...course.questions];
  if (settings.shuffleQ) pool = shuffle(pool);
  const cnt = (settings.qCount > 0 && settings.qCount <= pool.length) ? settings.qCount : pool.length;
  examQuestions = pool.slice(0, cnt);
  answerMap = examQuestions.map(q => {
    const idxs = q.opts.map((_, i) => i);
    return settings.shuffleA ? shuffle(idxs) : idxs;
  });
  answers = new Array(examQuestions.length).fill(null);
  TOTAL_TIME = (settings.timeMins || 20) * 60;
  timeLeft = TOTAL_TIME;
  showScreen('screen-exam');
  document.getElementById('exam-student-label').textContent = `👤 ${currentStudent.name} — ${currentStudent.courseName}`;
  renderQuestion();
  startTimer();
}

function renderQuestion() {
  const q = examQuestions[currentQ];
  const map = answerMap[currentQ];
  const total = examQuestions.length;
  document.getElementById('q-counter').textContent = `Question ${currentQ + 1} of ${total}`;
  document.getElementById('exam-q-label').textContent = `Q ${currentQ + 1} / ${total}`;
  document.getElementById('q-text').textContent = q.q;
  document.getElementById('exam-progress').style.width = `${((currentQ + 1) / total) * 100}%`;
  document.getElementById('q-dot-status').textContent = `${answers.filter(a => a !== null).length} / ${total} answered`;
  const letters = ['A', 'B', 'C', 'D'];
  const isTF = q.type === 'tf';
  if (isTF) {
    document.getElementById('q-options').innerHTML = ['True', 'False'].map((label, dispIdx) => `
      <div class="option-item ${answers[currentQ] === dispIdx ? 'selected' : ''}" onclick="selectAnswer(${dispIdx})">
        <div class="option-letter">${dispIdx === 0 ? '✅' : '❌'}</div>
        <span>${label}</span>
      </div>`).join('');
  } else {
    document.getElementById('q-options').innerHTML = map.map((origIdx, dispIdx) => `
      <div class="option-item ${answers[currentQ] === dispIdx ? 'selected' : ''}" onclick="selectAnswer(${dispIdx})">
        <div class="option-letter">${letters[dispIdx]}</div>
        <span>${q.opts[origIdx]}</span>
      </div>`).join('');
  }
  document.getElementById('btn-prev').disabled = currentQ === 0;
  document.getElementById('btn-prev').style.opacity = currentQ === 0 ? '0.4' : '1';
  const nb = document.getElementById('btn-next');
  if (currentQ === total - 1) {
    nb.textContent = '✔ Submit';
    nb.className = 'btn-nav btn-submit-exam';
    nb.onclick = () => document.getElementById('submit-modal').classList.add('show');
  } else {
    nb.textContent = 'Next →';
    nb.className = 'btn-nav btn-next-q';
    nb.onclick = nextQuestion;
  }
}

function selectAnswer(d) {
  answers[currentQ] = d;
  renderQuestion();
}

function prevQuestion() {
  if (currentQ > 0) {
    currentQ--;
    renderQuestion();
  }
}

function nextQuestion() {
  if (currentQ < examQuestions.length - 1) {
    currentQ++;
    renderQuestion();
  }
}

function submitExam() {
  closeModal('submit-modal');
  clearInterval(timerInterval);
  let correct = 0;
  examQuestions.forEach((q, i) => {
    if (answers[i] === null) return;
    if (q.type === 'tf') {
      if (answers[i] === q.ans) correct++;
    } else {
      if (answerMap[i][answers[i]] === q.ans) correct++;
    }
  });
  const total = examQuestions.length;
  const pct = Math.round((correct / total) * 100);
  const passed = pct >= (settings.passPercent || 50);
  const timeTaken = TOTAL_TIME - timeLeft;
  const mins = Math.floor(timeTaken / 60);
  const secs = timeTaken % 60;
  const attempted = JSON.parse(localStorage.getItem(SK_ATTEMPTED) || '[]');
  attempted.push(currentStudent.id + '::' + currentStudent.courseId);
  localStorage.setItem(SK_ATTEMPTED, JSON.stringify(attempted));
  const results = JSON.parse(localStorage.getItem(SK_RESULTS) || '[]');
  results.push({
    name: currentStudent.name,
    id: currentStudent.id,
    dept: currentStudent.dept,
    courseId: currentStudent.courseId,
    courseName: currentStudent.courseName,
    correct,
    total,
    pct,
    passed,
    time: `${mins}:${secs.toString().padStart(2, '0')}`,
    date: new Date().toLocaleString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  });
  localStorage.setItem(SK_RESULTS, JSON.stringify(results));
  showResults(correct, total, pct, passed);
}

function showResults(correct, total, pct, passed) {
  showScreen('screen-result');
  document.getElementById('res-correct').textContent = correct;
  document.getElementById('res-wrong').textContent = total - correct;
  document.getElementById('res-total').textContent = total;
  document.getElementById('result-pct').textContent = pct + '%';
  document.getElementById('result-name-line').textContent = `${currentStudent.name} (${currentStudent.id}) — ${currentStudent.courseName}`;
  document.getElementById('result-heading').textContent = passed ? '🎉 Congratulations!' : '📚 Keep Studying';
  const st = document.getElementById('result-status');
  st.textContent = passed ? '✅ PASSED' : '❌ FAILED';
  st.className = 'result-status ' + (passed ? 'status-pass' : 'status-fail');
  setTimeout(() => {
    document.getElementById('result-circle').style.strokeDashoffset = 376.99 - (pct / 100) * 376.99;
  }, 300);
}

// ===== STUDENT LOGOUT =====
function studentLogout() {
  currentStudent = {};
  selectedCourseId = null;
  examQuestions = [];
  answers = [];
  answerMap = [];
  lastExamSnapshot = null;
  document.getElementById('student-name').value = '';
  document.getElementById('student-id').value = '';
  document.getElementById('student-dept').value = '';
  showScreen('screen-landing');
}

// ===== REVIEW ANSWERS =====
function showReviewScreen() {
  const letters = ['A', 'B', 'C', 'D'];
  document.getElementById('review-subtitle').textContent =
    `${currentStudent.name} — ${currentStudent.courseName}`;
  const body = document.getElementById('review-body');
  body.innerHTML = examQuestions.map((q, i) => {
    const isTF = q.type === 'tf';
    const map = answerMap[i];
    const studentDispIdx = answers[i];
    const skipped = studentDispIdx === null;
    let isCorrect = false;
    let studentOrigIdx = null;
    if (!skipped) {
      studentOrigIdx = isTF ? studentDispIdx : map[studentDispIdx];
      isCorrect = studentOrigIdx === q.ans;
    }
    const status = skipped ? 'skipped' : (isCorrect ? 'correct' : 'wrong');
    const badge = skipped ? '— Skipped' : (isCorrect ? '✅ Correct' : '❌ Wrong');
    const letters = ['A', 'B', 'C', 'D'];
    let optsHtml;
    if (isTF) {
      optsHtml = ['True', 'False'].map((label, dispIdx) => {
        const isCorrectOpt = dispIdx === q.ans;
        const isStudentPick = dispIdx === studentDispIdx;
        let cls = 'review-opt';
        let tag = '';
        if (isCorrectOpt) { cls += ' is-correct'; tag = '✓ Correct'; }
        else if (isStudentPick && !isCorrect) { cls += ' is-student-wrong'; tag = '✗ Your answer'; }
        const icon = dispIdx === 0 ? '✅' : '❌';
        return `
          <div class="${cls}">
            <div class="review-opt-letter">${icon}</div>
            <span>${label}</span>
            ${tag ? `<span class="review-opt-tag">${tag}</span>` : ''}
          </div>`;
      }).join('');
    } else {
      optsHtml = map.map((origIdx, dispIdx) => {
        const isCorrectOpt = origIdx === q.ans;
        const isStudentPick = dispIdx === studentDispIdx;
        let cls = 'review-opt';
        let tag = '';
        if (isCorrectOpt) { cls += ' is-correct'; tag = '✓ Correct'; }
        else if (isStudentPick && !isCorrect) { cls += ' is-student-wrong'; tag = '✗ Your answer'; }
        return `
          <div class="${cls}">
            <div class="review-opt-letter">${letters[dispIdx]}</div>
            <span>${q.opts[origIdx]}</span>
            ${tag ? `<span class="review-opt-tag">${tag}</span>` : ''}
          </div>`;
      }).join('');
    }
    return `
      <div class="review-card ${status}">
        <div class="review-card-top">
          <div style="flex:1">
            <div class="review-q-num">Question ${i + 1}${isTF ? ' <span style="font-size:0.65rem;background:rgba(59,130,246,0.1);color:var(--blue);border-radius:4px;padding:0.1rem 0.4rem;font-weight:700">T/F</span>' : ''}</div>
            <div class="review-q-text">${q.q}</div>
          </div>
          <div class="review-badge ${status}">${badge}</div>
        </div>
        <div class="review-opts">${optsHtml}</div>
      </div>`;
  }).join('');
  showScreen('screen-review');
}

// ===== TIMER =====
function startTimer() {
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      submitExam();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const m = Math.floor(timeLeft / 60);
  const s = timeLeft % 60;
  document.getElementById('timer-display').textContent = `${m}:${s.toString().padStart(2, '0')}`;
  document.getElementById('timer-circle').style.strokeDashoffset = 163.36 - (timeLeft / TOTAL_TIME) * 163.36;
  const danger = timeLeft < 120;
  document.getElementById('timer-display').style.color = danger ? '#EF4444' : '#4ade80';
  document.getElementById('timer-circle').style.stroke = danger ? '#EF4444' : '#4ade80';
}

// ===== ADMIN =====
function handleAdminLogin() {
  const user = document.getElementById('admin-username').value.trim();
  const pass = document.getElementById('admin-password').value;
  const err = document.getElementById('login-error');
  if (user === ADMIN_USER && pass === ADMIN_PASS) {
    err.classList.remove('show');
    loadData();
    showScreen('screen-admin');
    switchTab('tab-results', document.querySelector('.tab-btn'));
  } else {
    err.textContent = 'Incorrect username or password!';
    err.classList.add('show');
  }
}

function adminLogout() {
  document.getElementById('admin-username').value = '';
  document.getElementById('admin-password').value = '';
  showScreen('screen-landing');
}

// ===== TABS =====
function switchTab(tabId, btn) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
  btn.classList.add('active');
  if (tabId === 'tab-results')  loadResultsTab();
  if (tabId === 'tab-courses')  { backToCourses(); renderCoursesGrid(); }
  if (tabId === 'tab-settings') loadSettingsUI();
}

// ===== RESULTS TAB =====
function loadResultsTab() {
  const results = JSON.parse(localStorage.getItem(SK_RESULTS) || '[]');
  const total = results.length;
  const passed = results.filter(r => r.passed).length;
  document.getElementById('stat-courses').textContent = courses.length;
  document.getElementById('stat-total').textContent = total;
  document.getElementById('stat-pass').textContent = passed;
  document.getElementById('stat-fail').textContent = total - passed;
  const fsel = document.getElementById('filter-course');
  const curVal = fsel.value;
  fsel.innerHTML = '<option value="">All Courses</option>' +
    courses.map(c => `<option value="${c.id}">${c.name}</option>`).join('');
  fsel.value = curVal;
  const filtered = fsel.value ? results.filter(r => r.courseId === fsel.value) : results;
  const tbody = document.getElementById('results-tbody');
  if (!filtered.length) {
    tbody.innerHTML = `<tr><td colspan="10"><div class="empty-state"><div class="icon">📭</div><p>No results yet.</p></div></td></tr>`;
    return;
  }
  tbody.innerHTML = filtered.map((r, i) => `
    <tr>
      <td><strong>${i + 1}</strong></td>
      <td><strong>${r.name}</strong></td>
      <td><code style="background:#f1f5f9;padding:2px 6px;border-radius:4px;font-size:0.78rem">${r.id}</code></td>
      <td>${r.dept}</td>
      <td><span class="badge badge-course">${r.courseName}</span></td>
      <td><strong style="color:${r.passed ? '#16a34a' : '#dc2626'}">${r.pct}%</strong></td>
      <td>${r.correct} / ${r.total}</td>
      <td><span class="badge ${r.passed ? 'badge-pass' : 'badge-fail'}">${r.passed ? '✅ Pass' : '❌ Fail'}</span></td>
      <td>${r.time}</td>
      <td style="font-size:0.78rem;color:#64748B">${r.date}</td>
    </tr>`).join('');
}

function confirmClearAll() {
  document.getElementById('clear-modal').classList.add('show');
}

function clearAllData() {
  localStorage.removeItem(SK_RESULTS);
  localStorage.removeItem(SK_ATTEMPTED);
  closeModal('clear-modal');
  loadResultsTab();
}

// ===== COURSES GRID =====
function renderCoursesGrid() {
  const results = JSON.parse(localStorage.getItem(SK_RESULTS) || '[]');
  const grid = document.getElementById('courses-grid');
  if (!courses.length) {
    grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1"><div class="icon">📚</div><p>No courses yet. Add your first course.</p></div>`;
    return;
  }
  grid.innerHTML = courses.map(c => {
    const rCount = results.filter(r => r.courseId === c.id).length;
    const isHidden = c.hidden === true;
    return `<div class="course-mgr-card${isHidden ? ' course-hidden-card' : ''}">
      <div class="c-header">
        <div class="c-icon-big">${c.icon || '📚'}</div>
        <div class="c-actions">
          <button class="btn-toggle-c ${isHidden ? 'btn-toggle-hidden' : 'btn-toggle-visible'}" 
            onclick="toggleCourseVisibility('${c.id}')" 
            title="${isHidden ? 'Show course to students' : 'Hide course from students'}">
            ${isHidden ? '👁️‍🗨️ Show' : '🙈 Hide'}
          </button>
          <button class="btn-edit-c" onclick="openEditCourse('${c.id}')">✏️</button>
          <button class="btn-del-c" onclick="confirmDeleteCourse('${c.id}')">🗑️</button>
        </div>
      </div>
      <h3>${c.name}</h3>
      ${isHidden ? '<div class="hidden-badge">🚫 Hidden from students</div>' : ''}
      <div class="c-desc">${c.desc || ''}</div>
      <div class="c-stats">
        <div class="c-stat">📝 <strong>${c.questions.length}</strong> questions</div>
        <div class="c-stat">👥 <strong>${rCount}</strong> attempts</div>
      </div>
      <div class="c-footer">
        <button class="btn-manage-q" onclick="openQuestionManager('${c.id}')">📝 Manage Questions</button>
      </div>
    </div>`;
  }).join('');
}

function backToCourses() {
  document.getElementById('view-courses').style.display = 'block';
  document.getElementById('view-questions').style.display = 'none';
  activeCourseId = null;
  renderCoursesGrid();
}

// ===== COURSE CRUD =====
function openAddCourse() {
  editingCourseId = null;
  document.getElementById('course-modal-title').textContent = 'Add New Course';
  document.getElementById('course-modal-sub').textContent = 'Fill in the course details';
  document.getElementById('cm-name').value = '';
  document.getElementById('cm-desc').value = '';
  document.getElementById('cm-icon').value = '📚';
  document.getElementById('course-modal-error').classList.remove('show');
  document.getElementById('course-modal').classList.add('show');
}

function openEditCourse(id) {
  editingCourseId = id;
  const c = getCourse(id);
  document.getElementById('course-modal-title').textContent = 'Edit Course';
  document.getElementById('course-modal-sub').textContent = 'Update course details';
  document.getElementById('cm-name').value = c.name;
  document.getElementById('cm-desc').value = c.desc || '';
  document.getElementById('cm-icon').value = c.icon || '📚';
  document.getElementById('course-modal-error').classList.remove('show');
  document.getElementById('course-modal').classList.add('show');
}

function saveCourse() {
  const name = document.getElementById('cm-name').value.trim();
  const desc = document.getElementById('cm-desc').value.trim();
  const icon = document.getElementById('cm-icon').value.trim() || '📚';
  const err = document.getElementById('course-modal-error');
  if (!name) {
    err.textContent = 'Course name is required!';
    err.classList.add('show');
    return;
  }
  err.classList.remove('show');
  if (editingCourseId) {
    const c = getCourse(editingCourseId);
    c.name = name;
    c.desc = desc;
    c.icon = icon;
  } else {
    courses.push({
      id: 'course_' + Date.now(),
      name,
      desc,
      icon,
      questions: []
    });
  }
  saveCourses();
  closeModal('course-modal');
  renderCoursesGrid();
}

function confirmDeleteCourse(id) {
  deletingCourseId = id;
  document.getElementById('del-course-modal').classList.add('show');
}

function deleteCourse() {
  courses = courses.filter(c => c.id !== deletingCourseId);
  saveCourses();
  closeModal('del-course-modal');
  renderCoursesGrid();
}

function toggleCourseVisibility(id) {
  const c = getCourse(id);
  c.hidden = !c.hidden;
  saveCourses();
  renderCoursesGrid();
}

// ===== QUESTION MANAGER =====
function openQuestionManager(courseId) {
  activeCourseId = courseId;
  document.getElementById('view-courses').style.display = 'none';
  document.getElementById('view-questions').style.display = 'block';
  const c = getCourse(courseId);
  document.getElementById('qpanel-course-name').textContent = c.name;
  renderQuestionList();
}

function renderQuestionList() {
  const c = getCourse(activeCourseId);
  document.getElementById('qpanel-q-count').textContent = `${c.questions.length} questions`;
  const list = document.getElementById('q-list');
  if (!c.questions.length) {
    list.innerHTML = `<div class="empty-state"><div class="icon">📋</div><p>No questions yet. Add your first question.</p></div>`;
    return;
  }
  const letters = ['A', 'B', 'C', 'D'];
  list.innerHTML = c.questions.map((q, i) => {
    const isTF = q.type === 'tf';
    const letters = ['A', 'B', 'C', 'D'];
    const typeBadge = isTF
      ? `<span style="background:rgba(59,130,246,0.1);color:var(--blue);border:1px solid rgba(59,130,246,0.2);border-radius:6px;font-size:0.68rem;font-weight:700;padding:0.15rem 0.5rem;margin-left:0.5rem">T/F</span>`
      : '';
    const optsHtml = q.opts.map((o, oi) =>
      `<div class="q-card-opt ${oi === q.ans ? 'correct' : ''}">${letters[oi]}. ${o}${oi === q.ans ? ' ✓' : ''}</div>`
    ).join('');
    return `
    <div class="q-card">
      <div class="q-card-header">
        <div style="flex:1">
          <div class="q-card-num">Question ${i + 1} ${typeBadge}</div>
          <div class="q-card-text">${q.q}</div>
          <div class="q-card-opts">${optsHtml}</div>
        </div>
        <div class="q-card-actions">
          <button class="btn-edit-q" onclick="openEditQuestion(${i})">✏️ Edit</button>
          <button class="btn-del-q" onclick="confirmDeleteQ(${i})">🗑️</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function openAddQuestion() {
  editingQIdx = null;
  pendingCorrect = null;
  pendingTFCorrect = null;
  currentQuestionType = 'mcq';
  document.getElementById('q-modal-title').textContent = 'Add Question';
  document.getElementById('q-modal-sub').textContent = 'Enter question and answer options';
  document.getElementById('qm-question').value = '';
  [0, 1, 2, 3].forEach(i => document.getElementById(`qm-opt${i}`).value = '');
  document.querySelectorAll('.correct-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tf-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.qtype-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('.qtype-btn[data-type="mcq"]').classList.add('active');
  document.getElementById('qm-mcq-section').style.display = 'block';
  document.getElementById('qm-tf-section').style.display = 'none';
  document.getElementById('qm-error').classList.remove('show');
  document.getElementById('q-modal').classList.add('show');
}

function openEditQuestion(idx) {
  editingQIdx = idx;
  pendingCorrect = null;
  pendingTFCorrect = null;
  const c = getCourse(activeCourseId);
  const q = c.questions[idx];
  document.getElementById('q-modal-title').textContent = 'Edit Question';
  document.getElementById('q-modal-sub').textContent = `Question ${idx + 1}`;
  document.getElementById('qm-question').value = q.q;
  document.getElementById('qm-error').classList.remove('show');
  if (q.type === 'tf') {
    currentQuestionType = 'tf';
    document.querySelectorAll('.qtype-btn').forEach(b => b.classList.toggle('active', b.dataset.type === 'tf'));
    document.getElementById('qm-mcq-section').style.display = 'none';
    document.getElementById('qm-tf-section').style.display = 'block';
    pendingTFCorrect = q.ans;
    document.querySelectorAll('.tf-btn').forEach(b => b.classList.toggle('active', parseInt(b.dataset.tf) === q.ans));
  } else {
    currentQuestionType = 'mcq';
    document.querySelectorAll('.qtype-btn').forEach(b => b.classList.toggle('active', b.dataset.type === 'mcq'));
    document.getElementById('qm-mcq-section').style.display = 'block';
    document.getElementById('qm-tf-section').style.display = 'none';
    q.opts.forEach((o, i) => document.getElementById(`qm-opt${i}`).value = o);
    document.querySelectorAll('.correct-btn').forEach(b => b.classList.toggle('active', parseInt(b.dataset.idx) === q.ans));
    pendingCorrect = q.ans;
  }
  document.getElementById('q-modal').classList.add('show');
}

function selectCorrect(idx) {
  pendingCorrect = idx;
  document.querySelectorAll('.correct-btn').forEach(b => b.classList.toggle('active', parseInt(b.dataset.idx) === idx));
}

function setQuestionType(type) {
  currentQuestionType = type;
  pendingCorrect = null;
  pendingTFCorrect = null;
  document.querySelectorAll('.qtype-btn').forEach(b => b.classList.toggle('active', b.dataset.type === type));
  document.querySelectorAll('.correct-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tf-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('qm-mcq-section').style.display = type === 'mcq' ? 'block' : 'none';
  document.getElementById('qm-tf-section').style.display = type === 'tf' ? 'block' : 'none';
}

function selectTF(val) {
  pendingTFCorrect = val;
  document.querySelectorAll('.tf-btn').forEach(b => b.classList.toggle('active', parseInt(b.dataset.tf) === val));
}

function saveQuestion() {
  const qText = document.getElementById('qm-question').value.trim();
  const err = document.getElementById('qm-error');
  if (!qText) {
    err.textContent = 'Please enter a question!';
    err.classList.add('show');
    return;
  }
  let newQ;
  if (currentQuestionType === 'tf') {
    if (pendingTFCorrect === null) {
      err.textContent = 'Please select True or False as the correct answer!';
      err.classList.add('show');
      return;
    }
    newQ = {
      type: 'tf',
      q: qText,
      opts: ['True', 'False'],
      ans: pendingTFCorrect
    };
  } else {
    const opts = [0, 1, 2, 3].map(i => document.getElementById(`qm-opt${i}`).value.trim());
    if (opts.some(o => !o)) {
      err.textContent = 'Please fill in all 4 answer options!';
      err.classList.add('show');
      return;
    }
    if (pendingCorrect === null) {
      err.textContent = 'Please select the correct answer (A/B/C/D)!';
      err.classList.add('show');
      return;
    }
    newQ = { q: qText, opts, ans: pendingCorrect };
  }
  err.classList.remove('show');
  const c = getCourse(activeCourseId);
  if (editingQIdx !== null) {
    c.questions[editingQIdx] = newQ;
  } else {
    c.questions.push(newQ);
  }
  saveCourses();
  closeModal('q-modal');
  renderQuestionList();
}

function confirmDeleteQ(idx) {
  deletingQIdx = idx;
  document.getElementById('del-q-modal').classList.add('show');
}

function deleteQuestion() {
  const c = getCourse(activeCourseId);
  c.questions.splice(deletingQIdx, 1);
  saveCourses();
  closeModal('del-q-modal');
  renderQuestionList();
}

// ===== SETTINGS =====
function loadSettingsUI() {
  document.getElementById('set-time').value = settings.timeMins || 20;
  document.getElementById('set-pass').value = settings.passPercent || 50;
  document.getElementById('set-qcount').value = settings.qCount || 0;
  document.getElementById('set-shuffle-q').checked = settings.shuffleQ !== false;
  document.getElementById('set-shuffle-a').checked = settings.shuffleA !== false;
  document.getElementById('settings-msg').classList.remove('show');
}

function saveSettings() {
  settings = {
    timeMins: parseInt(document.getElementById('set-time').value) || 20,
    passPercent: parseInt(document.getElementById('set-pass').value) || 50,
    qCount: parseInt(document.getElementById('set-qcount').value) || 0,
    shuffleQ: document.getElementById('set-shuffle-q').checked,
    shuffleA: document.getElementById('set-shuffle-a').checked,
  };
  localStorage.setItem(SK_SETTINGS, JSON.stringify(settings));
  const msg = document.getElementById('settings-msg');
  msg.textContent = '✅ Settings saved successfully!';
  msg.classList.add('show');
  setTimeout(() => msg.classList.remove('show'), 3000);
}

// ===== KEYBOARD SHORTCUTS =====
document.getElementById('admin-password').addEventListener('keydown', e => {
  if (e.key === 'Enter') handleAdminLogin();
});
document.getElementById('student-id').addEventListener('keydown', e => {
  if (e.key === 'Enter') handleStudentRegister();
});
