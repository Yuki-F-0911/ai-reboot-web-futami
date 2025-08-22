// 9つの点パズルのCanvas描画
function drawNineDots() {
    const canvas = document.getElementById('nine-dots');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const dotRadius = 5;
    const spacing = 80;
    const startX = 60;
    const startY = 60;
    
    // 背景をクリア
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // 9つの点を描画
    ctx.fillStyle = '#764ba2';
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            ctx.beginPath();
            ctx.arc(startX + col * spacing, startY + row * spacing, dotRadius, 0, Math.PI * 2);
            ctx.fill();
        }
    }
}

// 9つの点パズルの解答表示関数は削除（不要）

// 専門用語の解説を表示
function showTermExplanation() {
    const explanation = `
        <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin-top: 20px;">
            <h4 style="color: #764ba2;">用語解説</h4>
            <ul style="margin-top: 10px;">
                <li><strong>RAG</strong>: AIが回答する際に、外部の情報源を検索・参照する技術</li>
                <li><strong>ベクトル検索</strong>: 意味や文脈が近いものを検索する技術</li>
                <li><strong>LLM</strong>: 大規模言語モデル（ChatGPTなどのAI）</li>
                <li><strong>コンテキスト</strong>: 文脈や背景情報</li>
            </ul>
            <p style="margin-top: 15px; color: #666;">
                つまり「社内マニュアルなどの情報をAIが参照して、より正確な回答ができるようになる」という意味です。
            </p>
        </div>
    `;
    
    const button = event.target;
    const container = button.parentElement;
    
    // すでに表示されている場合は削除
    const existing = container.querySelector('.term-explanation');
    if (existing) {
        existing.remove();
        button.textContent = '用語解説を見る';
    } else {
        const div = document.createElement('div');
        div.className = 'term-explanation';
        div.innerHTML = explanation;
        container.appendChild(div);
        button.textContent = '用語解説を閉じる';
    }
}

// クイズの回答をチェック
function checkQuiz() {
    const answers = {
        q1: 'b',  // パラダイムシフト = 思考の枠を超えた変革
        q2: 'c',  // 競争優位性 = 1次情報
        q3: 'c'   // DX = ビジネスモデルの変革
    };
    
    let correct = 0;
    let total = Object.keys(answers).length;
    
    for (let question in answers) {
        const selected = document.querySelector(`input[name="${question}"]:checked`);
        if (selected && selected.value === answers[question]) {
            correct++;
        }
    }
    
    const resultDiv = document.getElementById('quiz-result');
    resultDiv.className = 'show';
    
    if (correct === total) {
        resultDiv.className += ' success';
        resultDiv.innerHTML = `
            <h4>🎉 完璧です！</h4>
            <p>全問正解！研修内容をしっかり理解されています。</p>
        `;
    } else {
        resultDiv.className += ' partial';
        resultDiv.innerHTML = `
            <h4>📚 ${correct}/${total}問正解</h4>
            <p>もう一度復習してみましょう。</p>
            <ul style="margin-top: 10px;">
                <li>Q1: パラダイムシフト = 思考の枠を超えた変革</li>
                <li>Q2: 競争優位性の源泉 = 1次情報（現場の生の情報）</li>
                <li>Q3: DXの最終段階 = ビジネスモデルの変革</li>
            </ul>
        `;
    }
    
    // 結果表示位置までスクロール
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Will宣言を保存
function saveWill() {
    const willText = document.getElementById('will-text').value;
    
    if (!willText.trim()) {
        alert('Willを入力してください');
        return;
    }
    
    // ローカルストレージに保存
    localStorage.setItem('myWill', willText);
    localStorage.setItem('willDate', new Date().toLocaleDateString('ja-JP'));
    
    // 保存完了メッセージ
    const button = event.target;
    const originalText = button.textContent;
    button.textContent = '✓ 保存しました！';
    button.style.background = 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)';
    
    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = '';
    }, 2000);
}

// ページ読み込み時の処理
document.addEventListener('DOMContentLoaded', function() {
    // 9つの点を描画
    drawNineDots();
    
    // 保存されたWillがあれば表示
    const savedWill = localStorage.getItem('myWill');
    const savedDate = localStorage.getItem('willDate');
    
    if (savedWill) {
        const willText = document.getElementById('will-text');
        if (willText) {
            willText.value = savedWill;
            // 保存日を表示
            const dateInfo = document.createElement('div');
            dateInfo.style.marginTop = '10px';
            dateInfo.style.color = '#666';
            dateInfo.style.fontSize = '0.9rem';
            dateInfo.textContent = `前回保存日: ${savedDate}`;
            willText.parentElement.appendChild(dateInfo);
        }
    }
    
    // スムーズスクロール
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ページトップへ戻るボタン（動的に追加）
    const scrollTopButton = document.createElement('button');
    scrollTopButton.innerHTML = '↑';
    scrollTopButton.className = 'scroll-top';
    
    scrollTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    document.body.appendChild(scrollTopButton);
    
    // スクロール位置に応じてボタンを表示/非表示
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopButton.style.display = 'block';
        } else {
            scrollTopButton.style.display = 'none';
        }
    });
    
    // アニメーション効果（要素が画面に入ったらフェードイン）
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // アニメーション対象の要素を監視
    document.querySelectorAll('.concept-card, .tool-card, .action-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// プリント機能
function printPage() {
    window.print();
}

// ダークモード切り替え（オプション機能）
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// 保存されたダークモード設定を適用
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}