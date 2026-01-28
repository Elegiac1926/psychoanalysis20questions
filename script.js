let currentQuestion = 0;
let answers = [];
let scores = {};

// 初始化分数对象
function initScores() {
    scores = {};
}

// 开始测试
function startTest() {
    initScores();
    currentQuestion = 0;
    answers = [];
    showPage('question-page');
    renderQuestion();
}

// 显示页面
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

// 渲染问题
function renderQuestion() {
    const question = questions[currentQuestion];
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    
    document.getElementById('progress').style.width = progress + '%';
    document.getElementById('question-number').textContent = `问题 ${currentQuestion + 1} / ${questions.length}`;
    document.getElementById('question-text').textContent = question.question;
    
    // 渲染选项
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = option.text;
        
        // 如果已经选择过，标记为选中
        if (answers[currentQuestion] === index) {
            optionDiv.classList.add('selected');
        }
        
        optionDiv.onclick = () => selectOption(index);
        optionsContainer.appendChild(optionDiv);
    });
    
    // 控制上一题按钮显示
    const btnPrev = document.getElementById('btn-prev');
    if (currentQuestion === 0) {
        btnPrev.style.display = 'none';
    } else {
        btnPrev.style.display = 'block';
    }
}

// 选择选项
function selectOption(index) {
    answers[currentQuestion] = index;
    
    // 更新UI
    document.querySelectorAll('.option').forEach((opt, i) => {
        opt.classList.toggle('selected', i === index);
    });
    
    // 累加分数
    const question = questions[currentQuestion];
    const selectedOption = question.options[index];
    
    for (let key in selectedOption.score) {
        if (!scores[key]) scores[key] = 0;
        scores[key] += selectedOption.score[key];
    }
    
    // 延迟跳转下一题
    setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            renderQuestion();
        } else {
            // 所有问题完成，直接跳转结果页（跳过验证码页）
            calculateResult();
        }
    }, 200);
}

// 上一题
function prevQuestion() {
    if (currentQuestion > 0) {
        // 减去之前选项的分数
        const prevAnswer = answers[currentQuestion];
        if (prevAnswer !== undefined) {
            const question = questions[currentQuestion];
            const prevOption = question.options[prevAnswer];
            for (let key in prevOption.score) {
                scores[key] -= prevOption.score[key];
            }
        }
        
        currentQuestion--;
        renderQuestion();
    }
}

// 验证访问码
function verifyCode() {
    const input = document.getElementById('access-code-input').value.trim();
    const errorMsg = document.getElementById('error-msg');
    
    if (input === ACCESS_CODE) {
        errorMsg.textContent = '';
        calculateResult();
    } else {
        errorMsg.textContent = '访问码错误，请重新输入';
        document.getElementById('access-code-input').value = '';
    }
}

// 计算并展示结果
function calculateResult() {
    const result = generateAnalysis(scores);
    
    document.getElementById('result-title').textContent = result.title;
    document.getElementById('result-content').innerHTML = result.content;
    
    showPage('result-page');
}




// 重新开始
function restart() {
    showPage('start-page');
    document.getElementById('access-code-input').value = '';
}

// 监听回车键验证
document.addEventListener('DOMContentLoaded', () => {
    const codeInput = document.getElementById('access-code-input');
    if (codeInput) {
        codeInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                verifyCode();
            }
        });
    }
});