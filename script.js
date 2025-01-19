const words = [
    {word: 'congregate', meaning: '集まる'},
    {word: 'bristle', meaning: '剛毛'},
    {word: 'articulate', meaning: 'はっきり述べる'},
    {word: 'renounce', meaning: '権利を放棄する'},
    {word: 'aggression', meaning: '侵害'},
    {word: 'deference', meaning: '服従、敬意'},
    {word: 'symptom', meaning: '兆候'},
    {word: 'deputy', meaning: '代理'},
    {word: 'blink', meaning: '見て見ぬふりをする'},
    {word: 'insolent', meaning: '横柄な'},
    {word: 'obliterate', meaning: '完全に破壊する'},
    {word: 'apathy', meaning: '無感動'},
    {word: 'defiance', meaning: '挑戦'},
    {word: 'frail', meaning: '脆い'},
    {word: 'brittle', meaning: '脆い'},
    {word: 'contempt', meaning: 'さげすみ'},
    {word: 'stalk', meaning: '茎'},
    {word: 'infringe', meaning: '権利を侵害する'},
    {word: 'affliction', meaning: '苦痛'},
    {word: 'consecutive', meaning: '連続的な'},
    {word: 'segregation', meaning: '人種差別'},
    {word: 'blatant', meaning: '図々しい'},
    {word: 'rugged', meaning: '険しい'},
    {word: 'Neptune', meaning: '海王星'},
    {word: 'nuisance', meaning: '迷惑な行動'},
    {word: 'inception', meaning: '開始'},
    {word: 'frugal', meaning: '質素な'},
    {word: 'jargon', meaning: '特殊用語'},
    {word: 'emancipate', meaning: '解放する'},
    {word: 'quarry', meaning: '(石などを)切り出す'},
    {word: 'apathetic', meaning: '無関心な'},
    {word: 'mitigate', meaning: '和らげる'},
    {word: 'esteem', meaning: '尊敬する'},
    {word: 'affirmative', meaning: '賛成の'},
    {word: 'crescent', meaning: '三日月'},
    {word: 'eulogy', meaning: '賛辞'},
    {word: 'tempt', meaning: '誘惑する'},
    {word: 'inoculation', meaning: '予防接種'},
    {word: 'elusive', meaning: '理解しにくい'},
    {word: 'embryonic', meaning: '胎児の'},
    {word: 'candor', meaning: '素直さ'},
    {word: 'clemency', meaning: '寛大さ'},
    {word: 'rectify', meaning: '改正する'},
    {word: 'precipitous', meaning: '険しい'},
    {word: 'disintegrate', meaning: '崩壊する'},
    {word: 'thrifty', meaning: 'つましい、倹約な'},
    {word: 'huddle', meaning: '体を寄せ合う'},
    {word: 'besiege', meaning: '包囲する'},
    {word: 'touchy', meaning: '厄介な'},
    {word: 'retiring', meaning: '内気な'},
    {word: 'abstain', meaning: '慎む'},
    {word: 'deplore', meaning: '非難する'},
    {word: 'plead', meaning: '弁護する'},
    {word: 'herbicide', meaning: '除草剤'},
    {word: 'rookery', meaning: '集団繁殖地'},
    {word: 'coniferous tree', meaning: '針葉樹'},
    {word: 'smother', meaning: '（火などを）消す'},
    {word: 'tangle', meaning: '紛糾する'},
    {word: 'taper', meaning: '先細りになること'},
    {word: 'replicate', meaning: '複製する'},
    {word: 'procession', meaning: '行列'},
    {word: 'celestial', meaning: '天の'},
    {word: 'dine', meaning: '食事をする'},
    {word: 'heredity', meaning: '遺伝'},
    {word: 'aberration', meaning: '異常'},
    {word: 'coercion', meaning: '強制'},
    {word: 'audit', meaning: '監査する'},
    {word: 'tow', meaning: 'けん引する'},
    {word: 'jurisdiction', meaning: '管轄権'},
    {word: 'dissident', meaning: '反体制派（の人）'},
    {word: 'levity', meaning: '軽薄'},
    {word: 'wharf', meaning: '埠頭'},
    {word: 'defame', meaning: '中傷する'},
    {word: 'ardor', meaning: '熱心'},
    {word: 'mirage', meaning: '蜃気楼'},
    {word: 'solitary', meaning: '孤独'},
    {word: 'anomaly', meaning: '異例な人物'},
    {word: 'proximity', meaning: '近接'},
    {word: 'ordeal', meaning: '試練'},
    {word: 'cumbersome', meaning: '扱いにくい'},
    {word: 'exacerbate', meaning: '悪化する'},
    {word: 'petty', meaning: '些細な・つまらない'},
    {word: 'woe', meaning: '悲痛'},
    {word: 'equivocal', meaning: 'はっきりしない'},
    {word: 'afflict', meaning: '悩ます'},
    {word: 'eradicate', meaning: '根絶する'},
    {word: 'despise', meaning: '軽蔑する'},
    {word: 'rudimentary', meaning: '基本的な'},
    {word: 'evasion', meaning: '回避'},
    {word: 'oust', meaning: '取り上げる'},
    {word: 'concession', meaning: '譲歩'},
    {word: 'itchy', meaning: 'かゆい'},
    {word: 'congruence', meaning: '一致'},
    {word: 'ratify', meaning: '批准する'},
    {word: 'tantalize', meaning: '焦らす'},
    {word: 'stipulate', meaning: '明記する'},
    {word: 'clumsy', meaning: '不器用な'},
    {word: 'resonant', meaning: '朗々とした'},
    {word: 'exquisite', meaning: 'この上なく素晴らしい'},
    {word: 'bureaucracy', meaning: '官僚政治'},
    {word: 'embezzle', meaning: '横領する'},
    {word: 'smuggle', meaning: '密輸する'},
    {word: 'idiosyncrasy', meaning: '特異性'},
    {word: 'Uranus', meaning: '天王星'},
    {word: 'austere', meaning: '厳しい'},
    {word: 'purge', meaning: '取り除く'},
    {word: 'convene', meaning: '招集する'},
    {word: 'additive', meaning: '添加物'},
    {word: 'censor', meaning: '校閲する'},
    {word: 'fortress', meaning: '要塞'},
    {word: 'concede', meaning: '認める'},
    {word: 'lieu', meaning: '場所'},
    {word: 'preeminent', meaning: '卓越した'},
    {word: 'barren', meaning: '不毛の'},
    {word: 'pertinent', meaning: '関連する'},
    {word: 'elated', meaning: '大得意の'},
    {word: 'eclectic', meaning: '折衷的な'},
    {word: 'obstinate', meaning: '頑固な'},
    {word: 'fervor', meaning: '熱情'},
    {word: 'tuberculosis', meaning: '結核'},
    {word: 'incisive', meaning: '明敏な'},
    {word: 'nautical', meaning: '航海の'},
    {word: 'defendant', meaning: '被告'},
    {word: 'improbable', meaning: 'ありそうもない'},
    {word: 'nectar', meaning: '植物の蜜'},
    {word: 'ascendancy', meaning: '優位'},
    {word: 'gargle', meaning: 'うがいをする'},
    {word: 'abolish', meaning: '廃止する'},
    {word: 'devastate', meaning: '荒廃させる・打ちのめす'},
    {word: 'shudder', meaning: '（恐怖や嫌悪で）身震いする'},
    {word: 'illiterate', meaning: '読み書きのできない'},
    {word: 'wedge', meaning: 'くさび・押し込む'},
    {word: 'dismal', meaning: '陰気な・憂うつな'},
    {word: 'posterity', meaning: '子孫'},
    {word: 'saturate', meaning: 'すっかり湿らす・満たす'},
    {word: 'compensate', meaning: '補償する・埋め合わせる'},
    {word: 'fanaticism', meaning: '熱狂・狂信'},
    {word: 'provision', meaning: '条項・供給'},
    {word: 'presumption', meaning: '推定・仮定'},
    {word: 'suffocate', meaning: '窒息させる'},
    {word: 'sore', meaning: '痛い・いらいらした'},
    {word: 'forbearance', meaning: '我慢・忍耐'},
    {word: 'monumental', meaning: '（程度が）途方もない・非常に大きい'},
    {word: 'haphazard', meaning: 'でたらめの・偶然の・無計画な'},
    {word: 'precede', meaning: '先導する・先立つ'},
    {word: 'soothe', meaning: '和らげる・なだめる'},
    {word: 'reservoir', meaning: '貯水池・貯蔵所'},
    {word: 'propriety', meaning: '礼儀正しさ・作法・適切さ'},
    {word: 'speculate', meaning: '推測する・考察する'},
    {word: 'curtail', meaning: '削減する・短縮する'},
    {word: 'restless', meaning: '眠れない・休まらない・不安な'},
    {word: 'contingency', meaning: '不測の事態・偶然性'},
    {word: 'benevolent', meaning: '慈善深い・親切な'},
    {word: 'scorch', meaning: '焦がす・焼く'},
    {word: 'burrow', meaning: '（動物の）穴・隠れ場所'},
    {word: 'wax', meaning: 'うるうるする・ワックスをかける'},
    {word: 'salient', meaning: '目立つ・際立った'},
    {word: 'plague', meaning: '疫病・災害'},
    {word: 'consolidate', meaning: '合併する・強固にする'},
    {word: 'inert', meaning: '不活性の・不活発な'},
    {word: 'precise', meaning: '正確な・精密な'},
    {word: 'vowel', meaning: '母音'},
    {word: 'irrelevant', meaning: '関連のない・見当違いの'},
    {word: 'trough', meaning: '波の谷・最低点'},
    {word: 'incentive', meaning: '刺激・誘因'},
    {word: 'pathetic', meaning: '痛ましい・哀れな'},
    {word: 'growl', meaning: '（犬などが）うなる'},
    {word: 'perfunctory', meaning: 'いい加減な・やる気のない'},
    {word: 'forerunner', meaning: '先駆者・前身・前ぶれ'},
    {word: 'timid', meaning: '臆病な'},
    {word: 'hoist', meaning: 'つり上げる・持ち上げる'},
    {word: 'fleet', meaning: '艦隊・船団'},
    {word: 'manifest', meaning: '明白な・はっきりとした'},
    {word: 'menace', meaning: '脅迫・おどし・危険人物'},
    {word: 'furor', meaning: '興奮・激怒'},
    {word: 'indulge', meaning: '甘やかす・夢中になる'},
    {word: 'capricious', meaning: '気まぐれな・変わりやすい'},
    {word: 'retract', meaning: '取り消す・引っ込める'},
    {word: 'waive', meaning: '（権利などを）自発的に放棄する'},
    {word: 'monetary', meaning: '通貨の・金融上の・金銭の'},
    {word: 'detached', meaning: '公平な・独立した'},
    {word: 'satirical', meaning: '風刺的な・皮肉な'},
    {word: 'hurl', meaning: '強く投げつける・放り投げる'},
    {word: 'attribute', meaning: '（功績・結果などを）のせいにする'},
    {word: 'turbulence', meaning: '大荒れ・動揺・乱気流'},
    {word: 'inertia', meaning: '慣性・惰性・不活発・ものぐさ'},
    {word: 'perspire', meaning: '発汗する・汗をかく'},
    {word: 'extol', meaning: '褒めそやす・激賞する'},
    {word: 'pathology', meaning: '病理学'},
    {word: 'didactic', meaning: '教訓的な・説教的な'},
    {word: 'forgo', meaning: '控える・なしで済ませる'},
    {word: 'beset', meaning: '悩ませる・つきまとう'},
    {word: 'compulsion', meaning: '強制・衝動'},
    {word: 'partisan', meaning: '熱心な支持者・同党派'},
    {word: 'frigid', meaning: '極寒の・冷淡な'},
    {word: 'aggravate', meaning: '悪化させる'},
    {word: 'heed', meaning: '注意を払う'},
    {word: 'apprehend', meaning: '懸念する・恐れる'},
    {word: 'roost', meaning: 'ねぐら・止まる'},
    {word: 'ignite', meaning: '点火する'},
    {word: 'denounce', meaning: '公然と非難する'},
    {word: 'abbreviate', meaning: '省略する'},
    {word: 'linear', meaning: '線形の'},
    {word: 'counterfeit', meaning: '偽造の'},
    {word: 'repertoire', meaning: 'レパートリー'},
    {word: 'proliferation', meaning: '拡散'},
    {word: 'dissolution', meaning: '消滅・解散'},
    {word: 'negligence', meaning: '怠慢・手抜き'},
    {word: 'reminiscence', meaning: '思い出'},
    {word: 'liquidate', meaning: '清算する'},
    {word: 'scar', meaning: '傷跡'},
    {word: 'disdain', meaning: '軽蔑する'},
    {word: 'treaty', meaning: '条約'},
    {word: 'rebut', meaning: '反論する'},
    {word: 'fortification', meaning: '要塞化'},
    {word: 'contagious', meaning: '感染性の'},
    {word: 'veterinarian', meaning: '獣医'},
    {word: 'refurbish', meaning: '改装する'},
    {word: 'aggregate', meaning: '集計する'},
    {word: 'wary', meaning: '用心深い'},
    {word: 'judicious', meaning: '賢明な'},
    {word: 'zinc', meaning: '亜鉛'},
    {word: 'vow', meaning: '誓う'},
    {word: 'converse', meaning: '逆の・会話する'},
    {word: 'strife', meaning: '争い'},
    {word: 'sewer', meaning: '下水道'},
    {word: 'standpoint', meaning: '観点'},
    {word: 'paleontology', meaning: '古生物学'},
    {word: 'haunt', meaning: 'たびたび訪れる'},
    {word: 'compile', meaning: '編纂する'},
    {word: 'uneasy', meaning: '不安な'},
    {word: 'acute', meaning: '鋭い'},
    {word: 'lick', meaning: '舐める'},
    {word: 'censure', meaning: '非難する'},
    {word: 'crude', meaning: '粗野な・未完成の'},
    {word: 'outlet', meaning: '出口'},
    {word: 'compel', meaning: '強制する'},
    {word: 'hamper', meaning: '妨害する'},
    {word: 'nocturnal', meaning: '夜行性の'},
    {word: 'reserve', meaning: '蓄える'},
    {word: 'detect', meaning: '検出する'},
    {word: 'abrasive', meaning: '研磨剤の'},
    {word: 'striking', meaning: '著しい'},
    {word: 'deadlock', meaning: '行き詰まり'},
    {word: 'archetype', meaning: '典型例'},
    {word: 'consensus', meaning: '合意'},
    {word: 'frown', meaning: '眉をひそめる'},
    {word: 'blast', meaning: '爆破する'},
    {word: 'intact', meaning: '無傷の'},
    {word: 'cohesive', meaning: '結束力のある'},
    {word: 'acid', meaning: '酸性の'},
    {word: 'bearish', meaning: '弱気の・(熊のように)粗暴な'},
    {word: 'indifferent', meaning: '無関心な・中立の'},
    {word: 'thatch', meaning: 'わらぶき屋根・屋根ふき材'},
    {word: 'maneuver', meaning: '(車などの)巧みな操縦・作戦行動'},
    {word: 'antipathy', meaning: '嫌悪・反感'},
    {word: 'indigestion', meaning: '消化不良'},
    {word: 'obsess', meaning: '取りつかれる・悩まされる'},
    {word: 'conclusive', meaning: '決定的な・最終的な'},
    {word: 'condone', meaning: '許す・大目に見る'},
    {word: 'turmoil', meaning: '混乱・動揺'},
    {word: 'languish', meaning: '衰える・やつれる'},
    {word: 'uniformity', meaning: '均一・統一性'},
    {word: 'patriot', meaning: '愛国者'},
    {word: 'constituency', meaning: '(特定の)有権者・選挙区'},
    {word: 'banal', meaning: 'ありふれた・陳腐な'},
    {word: 'contend', meaning: '(困難などと)対処する・争う'},
    {word: 'dissent', meaning: '異議を唱える・不賛成'},
    {word: 'aloof', meaning: '離れて・距離を置いて'},
    {word: 'critical', meaning: '批判的な・重大な'},
    {word: 'somber', meaning: '陰気な・憂うつな'},
    {word: 'reminiscent', meaning: '連想させる・追憶の'},
    {word: 'landfill', meaning: 'ごみ埋め立て地'},
    {word: 'sterilize', meaning: '殺菌する・不妊にする'},
    {word: 'apprehension', meaning: '懸念・不安・恐れ'},
    {word: 'reclaimed land', meaning: '埋め立て地・開墾地'},
    {word: 'disposal', meaning: '処分・処理・配置'},
    {word: 'mating season', meaning: '繁殖期・交尾期'},
    {word: 'corrosive', meaning: '腐食性の・侵食する'},
];


let currentWordIndex = 0;
let score = 0;
let shuffledWords = [];
let missedWords = []; // 間違えた単語を保存する配列
let selectedWordCount = 0;
let timer = null;
const TIME_PER_QUESTION = 5000; // 5秒

function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

function getRandomChoices(correctMeaning) {
    const otherMeanings = words
        .filter(w => w.meaning !== correctMeaning)
        .map(w => w.meaning);
    const randomMeanings = shuffleArray(otherMeanings).slice(0, 3);
    return shuffleArray([...randomMeanings, correctMeaning]);
}

function shuffleWords() {
    const allWords = shuffleArray(words);
    if (selectedWordCount > 0) {
        shuffledWords = allWords.slice(0, selectedWordCount);
    } else {
        shuffledWords = allWords;
    }
}

function displayWord() {
    const currentWord = shuffledWords[currentWordIndex];
    document.getElementById('word').textContent = currentWord.word;
    document.getElementById('question-count').textContent = 
        `問題: ${currentWordIndex + 1}/${shuffledWords.length}`;
    document.getElementById('score').textContent = `スコア: ${score}`;
    
    // 既存のタイムバーを削除
    const existingTimerBar = document.querySelector('.timer-bar-container');
    if (existingTimerBar) {
        existingTimerBar.remove();
    }
    
    const choices = getRandomChoices(currentWord.meaning);
    const choicesContainer = document.getElementById('choices');
    choicesContainer.innerHTML = '';
    
    // 新しいタイムバーを追加
    const timerBarHTML = `
        <div class="timer-bar-container">
            <div class="timer-bar" id="timer-bar"></div>
        </div>
    `;
    choicesContainer.insertAdjacentHTML('beforebegin', timerBarHTML);
    
    choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.className = 'choice-btn';
        button.textContent = choice;
        button.addEventListener('click', () => checkAnswer(choice, button));
        choicesContainer.appendChild(button);
    });

    document.getElementById('result').textContent = '';
    
    startTimer();
}

function showResults() {
    const container = document.querySelector('.quiz-container');
    const accuracy = Math.round((score / shuffledWords.length) * 100);
    
    // 一旦HTMLを更新
    container.innerHTML = `
        <h2>テスト結果</h2>
        <div class="result-summary">
            <p>スコア: ${score}/${shuffledWords.length} (${accuracy}%)</p>
        </div>
        ${missedWords.length > 0 ? `
            <div class="missed-words">
                <h3>間違えた単語</h3>
                <div class="missed-words-list">
                    ${missedWords.map(word => `
                        <div class="missed-word-item">
                            <span class="word">${word.word}</span>
                            <span class="meaning">${word.meaning}</span>
                        </div>
                    `).join('')}
                </div>
                <button id="retry-missed" class="retry-btn">
                    間違えた単語でもう一度テストする
                </button>
            </div>
        ` : `
            <div class="perfect-score">
                <p>完璧です！全問正解おめでとうございます！</p>
            </div>
        `}
        <button id="retry-all" class="retry-btn">最初からやり直す</button>
    `;

    // HTMLの更新後にイベントリスナーを設定
    const retryMissedBtn = document.getElementById('retry-missed');
    if (retryMissedBtn) {
        retryMissedBtn.addEventListener('click', () => {
            // quiz-containerを元の状態に戻す
            container.innerHTML = `
                <div class="word-display">
                    <p id="word"></p>
                </div>
                <div class="choices-container" id="choices">
                </div>
                <div class="result" id="result"></div>
                <div class="progress">
                    <span id="score">スコア: 0</span>
                    <span id="question-count">問題: 0/0</span>
                </div>
            `;
            
            shuffledWords = shuffleArray([...missedWords]);
            missedWords = [];
            currentWordIndex = 0;
            score = 0;
            displayWord();
        });
    }

    const retryAllBtn = document.getElementById('retry-all');
    if (retryAllBtn) {
        retryAllBtn.addEventListener('click', () => {
            showHomeScreen(); // 最初からやり直すときはホーム画面に戻る
        });
    }
}

function checkAnswer(selectedAnswer, selectedButton) {
    // タイマーとタイマー関連の要素をクリア
    clearTimeout(timer);
    const timerBar = document.getElementById('timer-bar');
    if (timerBar) {
        timerBar.style.transition = 'none';
        timerBar.style.width = '0';
    }
    
    const correctAnswer = shuffledWords[currentWordIndex].meaning;
    const allButtons = document.querySelectorAll('.choice-btn');
    
    allButtons.forEach(button => {
        button.disabled = true;
        if (button.textContent === correctAnswer) {
            button.classList.add('correct');
        }
    });

    if (selectedAnswer === correctAnswer) {
        document.getElementById('result').textContent = '正解！';
        document.getElementById('result').className = 'result correct';
        score++;
    } else {
        selectedButton.classList.add('incorrect');
        document.getElementById('result').textContent = '不正解...';
        document.getElementById('result').className = 'result incorrect';
        missedWords.push(shuffledWords[currentWordIndex]);
    }
    
    document.getElementById('score').textContent = `スコア: ${score}`;
    
    setTimeout(() => {
        currentWordIndex++;
        if (currentWordIndex >= shuffledWords.length) {
            showResults();
        } else {
            displayWord();
        }
    }, 1000);
}

function startTimer() {
    const timerBar = document.getElementById('timer-bar');
    if (!timerBar) return;
    
    timerBar.classList.remove('warning', 'danger');
    timerBar.style.transition = `width ${TIME_PER_QUESTION}ms linear`;
    timerBar.style.width = '100%';
    
    if (timer) {
        clearTimeout(timer);
    }
    
    setTimeout(() => {
        if (timerBar) timerBar.style.width = '0%';
    }, 50);

    setTimeout(() => {
        if (timerBar) timerBar.classList.add('warning');
    }, TIME_PER_QUESTION * 0.6);
    
    setTimeout(() => {
        if (timerBar) timerBar.classList.add('danger');
    }, TIME_PER_QUESTION * 0.8);

    timer = setTimeout(() => {
        const correctAnswer = shuffledWords[currentWordIndex].meaning;
        const allButtons = document.querySelectorAll('.choice-btn');
        
        // 時間切れの場合、すべてのボタンを無効化し、正解を赤色で表示
        allButtons.forEach(button => {
            button.disabled = true;
            if (button.textContent === correctAnswer) {
                button.classList.add('incorrect'); // 正解を赤色で表示
            }
        });

        document.getElementById('result').textContent = '時間切れ...';
        document.getElementById('result').className = 'result incorrect';
        missedWords.push(shuffledWords[currentWordIndex]);

        setTimeout(() => {
            currentWordIndex++;
            if (currentWordIndex >= shuffledWords.length) {
                showResults();
            } else {
                displayWord();
            }
        }, 1000);
    }, TIME_PER_QUESTION);
}

// ホーム画面の表示関数を追加
function showHomeScreen() {
    const container = document.getElementById('quiz-container');
    container.innerHTML = `
        <div class="home-screen">
            <h2>テストする単語数を選んでください</h2>
            <div class="word-count-options">
                <button class="word-count-btn" data-count="10">10単語</button>
                <button class="word-count-btn" data-count="30">30単語</button>
                <button class="word-count-btn" data-count="50">50単語</button>
                <button class="word-count-btn" data-count="100">100単語</button>
            </div>
            <p class="total-words">総単語数: ${words.length}語</p>
        </div>
    `;

    // 単語数選択ボタンのイベントリスナーを設定
    const buttons = document.querySelectorAll('.word-count-btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            selectedWordCount = parseInt(button.dataset.count);
            startQuiz();
        });
    });
}

// クイズ開始関数を追加
function startQuiz() {
    const container = document.getElementById('quiz-container');
    container.innerHTML = `
        <div class="word-display">
            <p id="word"></p>
        </div>
        <div class="choices-container" id="choices">
        </div>
        <div class="result" id="result"></div>
        <div class="progress">
            <span id="score">スコア: 0</span>
            <span id="question-count">問題: 0/0</span>
        </div>
    `;
    
    currentWordIndex = 0;
    score = 0;
    missedWords = [];
    shuffleWords();
    displayWord();
}

// window.onloadを修正
window.onload = () => {
    showHomeScreen();
}; 
