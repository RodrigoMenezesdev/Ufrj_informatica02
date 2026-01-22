const quizContainer = document.getElementById('quiz-container');
let hits = 0;
let misses = 0;
let answeredCount = 0;
const totalToLoad = 100; 
let timeLeft = 30 * 60; // 30 minutos

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startTimer() {
    const timerElement = document.getElementById('timer');
    const countdown = setInterval(() => {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        timerElement.innerText = `Tempo: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        if (timeLeft <= 0) { 
            clearInterval(countdown); 
            finalizeQuiz(); 
        } else { 
            timeLeft--; 
        }
    }, 1000);
}

function loadQuiz() {
    if (typeof questions === 'undefined') {
        quizContainer.innerHTML = "<h2 style='color:red; text-align:center;'>Erro: Arquivo questions.js não carregado corretamente.</h2>";
        return;
    }

    const questionsShuffled = shuffleArray([...questions]).slice(0, totalToLoad);
    const letras = ['A', 'B', 'C', 'D'];

    questionsShuffled.forEach((q, qIndex) => {
        const card = document.createElement('div');
        card.className = 'question-card';
        const num = String(qIndex + 1).padStart(2, '0');

        let opts = q.options.map((text, index) => ({ text, originalIndex: index }));
        shuffleArray(opts);

        let textoLeitura = `Questão ${num}: ${q.question}. `;
        let optionsHtml = '';
        opts.forEach((opt, oIndex) => {
            const letra = letras[oIndex];
            textoLeitura += `Opção ${letra}: ${opt.text}. `;
            optionsHtml += `
                <button class="option-btn" data-idx="${opt.originalIndex}" onclick="checkAnswer(${qIndex}, ${opt.originalIndex}, this, ${q.correct})">
                    <span class="error-label">ERRO ✘</span>
                    <div style="display:flex; align-items:center;">
                        <span class="option-letter">${letra})</span> 
                        <span>${opt.text}</span>
                    </div>
                </button>`;
        });

        card.innerHTML = `
            <button class="btn-speaker" onclick="lerTextoCompleto('${textoLeitura.replace(/'/g, "\\'")}')">🔊</button>
            <div class="question-text">Questão ${num}: ${q.question}</div>
            <div class="options-container" id="container-${qIndex}">${optionsHtml}</div>
            <div class="feedback-box" id="feedback-${qIndex}"><strong>Explicação:</strong> ${q.explanation}</div>`;
        quizContainer.appendChild(card);
    });
    startTimer();
}

function lerTextoCompleto(texto) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(texto);
    utterance.lang = 'pt-BR';
    utterance.rate = 1.1;
    window.speechSynthesis.speak(utterance);
}

function checkAnswer(qIndex, selectedIndex, element, correctIndex) {
    if (element.classList.contains('disabled')) return;
    window.speechSynthesis.cancel();
    
    const container = document.getElementById(`container-${qIndex}`);
    const buttons = container.querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.classList.add('disabled'));

    if (selectedIndex === correctIndex) {
        element.classList.add('correct-direct');
        hits++;
    } else {
        element.classList.add('wrong');
        buttons.forEach(btn => { 
            if (parseInt(btn.getAttribute('data-idx')) === correctIndex) btn.classList.add('correct-revealed');
        });
        document.getElementById(`feedback-${qIndex}`).classList.add('visible');
        misses++;
    }
    
    document.getElementById('hits').innerText = hits;
    document.getElementById('misses').innerText = misses;
    answeredCount++;

    if (answeredCount === totalToLoad) finalizeQuiz();
}

function finalizeQuiz() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.getElementById('final-result-card').classList.remove('hidden');
    
    const percent = Math.round((hits / totalToLoad) * 100);
    document.getElementById('final-percent').innerText = `${percent}%`;
    document.getElementById('final-hits').innerText = hits;
    document.getElementById('final-misses').innerText = misses;

    const msg = document.getElementById('encouragement-msg');
    if (percent >= 90) msg.innerText = "🏆 DOMÍNIO TOTAL! Você está pronto para gabaritar na UFRJ!";
    else if (percent >= 70) msg.innerText = "🚀 EXCELENTE! Você tem grandes chances, continue revisando os erros.";
    else if (percent >= 50) msg.innerText = "📚 BOM DESEMPENHO! Mas o LibreOffice exige atenção aos detalhes. Refaça amanhã.";
    else msg.innerText = "💡 FOCO NA TEORIA! Revise os menus e atalhos básicos do Writer e Calc.";
}

document.addEventListener('DOMContentLoaded', loadQuiz);
