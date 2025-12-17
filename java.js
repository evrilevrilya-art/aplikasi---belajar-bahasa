// Data bahasa dan pelajaran
const languageData = {
    english: {
        name: 'Bahasa Inggris',
        flag: '🇬🇧',
        lessons: [
            {
                id: 1,
                title: 'Greetings & Basic Phrases',
                level: 'Beginner',
                vocabulary: [
                    { word: 'Hello', translation: 'Halo', pronunciation: '/həˈloʊ/', example: 'Hello, how are you?' },
                    { word: 'Good morning', translation: 'Selamat pagi', pronunciation: '/ɡʊd ˈmɔːrnɪŋ/', example: 'Good morning, everyone!' },
                    { word: 'Thank you', translation: 'Terima kasih', pronunciation: '/θæŋk juː/', example: 'Thank you for your help.' },
                    { word: 'Please', translation: 'Tolong/Silakan', pronunciation: '/pliːz/', example: 'Please sit down.' },
                    { word: 'Goodbye', translation: 'Selamat tinggal', pronunciation: '/ɡʊdˈbaɪ/', example: 'Goodbye, see you later!' }
                ]
            },
            {
                id: 2,
                title: 'Numbers 1-10',
                level: 'Beginner',
                vocabulary: [
                    { word: 'One', translation: 'Satu', pronunciation: '/wʌn/', example: 'I have one apple.' },
                    { word: 'Two', translation: 'Dua', pronunciation: '/tuː/', example: 'Two plus two equals four.' },
                    { word: 'Three', translation: 'Tiga', pronunciation: '/θriː/', example: 'I need three chairs.' },
                    { word: 'Four', translation: 'Empat', pronunciation: '/fɔːr/', example: 'There are four seasons.' },
                    { word: 'Five', translation: 'Lima', pronunciation: '/faɪv/', example: 'High five!' }
                ]
            },
            {
                id: 3,
                title: 'Family Members',
                level: 'Beginner',
                vocabulary: [
                    { word: 'Mother', translation: 'Ibu', pronunciation: '/ˈmʌðər/', example: 'My mother is kind.' },
                    { word: 'Father', translation: 'Ayah', pronunciation: '/ˈfɑːðər/', example: 'My father works hard.' },
                    { word: 'Sister', translation: 'Saudara perempuan', pronunciation: '/ˈsɪstər/', example: 'I have one sister.' },
                    { word: 'Brother', translation: 'Saudara laki-laki', pronunciation: '/ˈbrʌðər/', example: 'My brother is tall.' }
                ]
            },
            {
                id: 4,
                title: 'Common Verbs',
                level: 'Intermediate',
                locked: true
            },
            {
                id: 5,
                title: 'Food & Drinks',
                level: 'Intermediate',
                locked: true
            }
        ]
    },
    korean: {
        name: 'Bahasa Korea',
        flag: '🇰🇷',
        lessons: [
            {
                id: 1,
                title: 'Hangul Basics',
                level: 'Beginner',
                vocabulary: [
                    { word: '안녕하세요', translation: 'Halo (formal)', pronunciation: 'annyeonghaseyo', example: '안녕하세요, 만나서 반갑습니다.' },
                    { word: '감사합니다', translation: 'Terima kasih', pronunciation: 'gamsahamnida', example: '정말 감사합니다!' },
                    { word: '네', translation: 'Ya', pronunciation: 'ne', example: '네, 알겠습니다.' },
                    { word: '아니요', translation: 'Tidak', pronunciation: 'aniyo', example: '아니요, 괜찮아요.' },
                    { word: '안녕히 가세요', translation: 'Selamat jalan', pronunciation: 'annyeonghi gaseyo', example: '안녕히 가세요!' }
                ]
            },
            {
                id: 2,
                title: 'Numbers (Sino-Korean)',
                level: 'Beginner',
                vocabulary: [
                    { word: '일', translation: 'Satu', pronunciation: 'il', example: '일 더하기 일은 이.' },
                    { word: '이', translation: 'Dua', pronunciation: 'i', example: '이 개의 사과가 있어요.' },
                    { word: '삼', translation: 'Tiga', pronunciation: 'sam', example: '삼월은 봄이에요.' },
                    { word: '사', translation: 'Empat', pronunciation: 'sa', example: '사계절이 있어요.' },
                    { word: '오', translation: 'Lima', pronunciation: 'o', example: '오 시에 만나요.' }
                ]
            },
            {
                id: 3,
                title: 'Self Introduction',
                level: 'Beginner',
                vocabulary: [
                    { word: '저는', translation: 'Saya (formal)', pronunciation: 'jeoneun', example: '저는 학생입니다.' },
                    { word: '이름', translation: 'Nama', pronunciation: 'ireum', example: '제 이름은 민수예요.' },
                    { word: '학생', translation: 'Pelajar/Mahasiswa', pronunciation: 'haksaeng', example: '저는 대학생입니다.' },
                    { word: '한국어', translation: 'Bahasa Korea', pronunciation: 'hangugeo', example: '한국어를 공부해요.' }
                ]
            },
            {
                id: 4,
                title: 'Daily Activities',
                level: 'Intermediate',
                locked: true
            },
            {
                id: 5,
                title: 'Korean Food',
                level: 'Intermediate',
                locked: true
            }
        ]
    },
    arabic: {
        name: 'Bahasa Arab',
        flag: '🇸🇦',
        lessons: [
            {
                id: 1,
                title: 'Arabic Alphabet',
                level: 'Beginner',
                vocabulary: [
                    { word: 'السلام عليكم', translation: 'Assalamualaikum', pronunciation: 'as-salamu alaykum', example: 'السلام عليكم ورحمة الله' },
                    { word: 'شكراً', translation: 'Terima kasih', pronunciation: 'shukran', example: 'شكراً جزيلاً' },
                    { word: 'نعم', translation: 'Ya', pronunciation: 'naam', example: 'نعم، فهمت' },
                    { word: 'لا', translation: 'Tidak', pronunciation: 'la', example: 'لا، شكراً' },
                    { word: 'مع السلامة', translation: 'Selamat tinggal', pronunciation: 'ma\'a as-salama', example: 'مع السلامة، إلى اللقاء' }
                ]
            },
            {
                id: 2,
                title: 'Basic Greetings',
                level: 'Beginner',
                vocabulary: [
                    { word: 'صباح الخير', translation: 'Selamat pagi', pronunciation: 'sabah al-khayr', example: 'صباح الخير، كيف حالك؟' },
                    { word: 'مساء الخير', translation: 'Selamat sore', pronunciation: 'masa\' al-khayr', example: 'مساء الخير يا صديقي' },
                    { word: 'أهلاً وسهلاً', translation: 'Selamat datang', pronunciation: 'ahlan wa sahlan', example: 'أهلاً وسهلاً بك' },
                    { word: 'كيف حالك؟', translation: 'Apa kabar?', pronunciation: 'kayfa haluka', example: 'كيف حالك اليوم؟' }
                ]
            },
            {
                id: 3,
                title: 'Numbers in Arabic',
                level: 'Beginner',
                vocabulary: [
                    { word: 'واحد', translation: 'Satu', pronunciation: 'wahid', example: 'عندي واحد فقط' },
                    { word: 'اثنان', translation: 'Dua', pronunciation: 'ithnan', example: 'اثنان من التفاح' },
                    { word: 'ثلاثة', translation: 'Tiga', pronunciation: 'thalatha', example: 'ثلاثة أيام' },
                    { word: 'أربعة', translation: 'Empat', pronunciation: 'arba\'a', example: 'أربعة فصول' }
                ]
            },
            {
                id: 4,
                title: 'Islamic Phrases',
                level: 'Intermediate',
                locked: true
            },
            {
                id: 5,
                title: 'Daily Conversations',
                level: 'Intermediate',
                locked: true
            }
        ]
    },
    japanese: {
        name: 'Bahasa Jepang',
        flag: '🇯🇵',
        lessons: [
            {
                id: 1,
                title: 'Hiragana Basics',
                level: 'Beginner',
                vocabulary: [
                    { word: 'こんにちは', translation: 'Halo', pronunciation: 'konnichiwa', example: 'こんにちは、元気ですか？' },
                    { word: 'ありがとう', translation: 'Terima kasih', pronunciation: 'arigatou', example: 'ありがとうございます。' },
                    { word: 'はい', translation: 'Ya', pronunciation: 'hai', example: 'はい、わかりました。' },
                    { word: 'いいえ', translation: 'Tidak', pronunciation: 'iie', example: 'いいえ、大丈夫です。' },
                    { word: 'さようなら', translation: 'Selamat tinggal', pronunciation: 'sayounara', example: 'さようなら、また明日。' }
                ]
            },
            {
                id: 2,
                title: 'Numbers 1-10',
                level: 'Beginner',
                vocabulary: [
                    { word: '一 (いち)', translation: 'Satu', pronunciation: 'ichi', example: '一つください。' },
                    { word: '二 (に)', translation: 'Dua', pronunciation: 'ni', example: '二人で行きます。' },
                    { word: '三 (さん)', translation: 'Tiga', pronunciation: 'san', example: '三つ選んでください。' },
                    { word: '四 (よん)', translation: 'Empat', pronunciation: 'yon', example: '四時に会いましょう。' },
                    { word: '五 (ご)', translation: 'Lima', pronunciation: 'go', example: '五分待ってください。' }
                ]
            },
            {
                id: 3,
                title: 'Self Introduction',
                level: 'Beginner',
                vocabulary: [
                    { word: '私', translation: 'Saya', pronunciation: 'watashi', example: '私は学生です。' },
                    { word: '名前', translation: 'Nama', pronunciation: 'namae', example: '私の名前は田中です。' },
                    { word: '学生', translation: 'Pelajar/Mahasiswa', pronunciation: 'gakusei', example: '大学生です。' },
                    { word: '日本語', translation: 'Bahasa Jepang', pronunciation: 'nihongo', example: '日本語を勉強しています。' }
                ]
            },
            {
                id: 4,
                title: 'Japanese Cuisine',
                level: 'Intermediate',
                locked: true
            },
            {
                id: 5,
                title: 'Kanji Introduction',
                level: 'Intermediate',
                locked: true
            }
        ]
    },
    russian: {
        name: 'Bahasa Rusia',
        flag: '🇷🇺',
        lessons: [
            {
                id: 1,
                title: 'Cyrillic Alphabet',
                level: 'Beginner',
                vocabulary: [
                    { word: 'Привет', translation: 'Halo', pronunciation: 'privet', example: 'Привет! Как дела?' },
                    { word: 'Спасибо', translation: 'Terima kasih', pronunciation: 'spasibo', example: 'Большое спасибо!' },
                    { word: 'Да', translation: 'Ya', pronunciation: 'da', example: 'Да, конечно.' },
                    { word: 'Нет', translation: 'Tidak', pronunciation: 'nyet', example: 'Нет, спасибо.' },
                    { word: 'До свидания', translation: 'Selamat tinggal', pronunciation: 'do svidaniya', example: 'До свидания! До встречи!' }
                ]
            },
            {
                id: 2,
                title: 'Russian Greetings',
                level: 'Beginner',
                vocabulary: [
                    { word: 'Доброе утро', translation: 'Selamat pagi', pronunciation: 'dobroye utro', example: 'Доброе утро, друзья!' },
                    { word: 'Добрый день', translation: 'Selamat siang', pronunciation: 'dobryy den', example: 'Добрый день! Как вы?' },
                    { word: 'Добрый вечер', translation: 'Selamat malam', pronunciation: 'dobryy vecher', example: 'Добрый вечер!' },
                    { word: 'Пожалуйста', translation: 'Silakan/Sama-sama', pronunciation: 'pozhaluysta', example: 'Пожалуйста, входите!' }
                ]
            },
            {
                id: 3,
                title: 'Numbers in Russian',
                level: 'Beginner',
                vocabulary: [
                    { word: 'Один', translation: 'Satu', pronunciation: 'odin', example: 'У меня один брат.' },
                    { word: 'Два', translation: 'Dua', pronunciation: 'dva', example: 'Два яблока.' },
                    { word: 'Три', translation: 'Tiga', pronunciation: 'tri', example: 'Три дня.' },
                    { word: 'Четыре', translation: 'Empat', pronunciation: 'chetyre', example: 'Четыре сезона.' }
                ]
            },
            {
                id: 4,
                title: 'Russian Culture',
                level: 'Intermediate',
                locked: true
            },
            {
                id: 5,
                title: 'Common Phrases',
                level: 'Intermediate',
                locked: true
            }
        ]
    }
};

// User progress data
let userProgress = {
    subscription: 'free', // free, premium, lifetime
    completedLessons: [],
    points: 0,
    streak: 0,
    lastStudyDate: null
};

// Current state
let currentLanguage = null;
let currentLesson = null;

// Load user progress from localStorage
function loadUserProgress() {
    const saved = localStorage.getItem('userProgress');
    if (saved) {
        userProgress = JSON.parse(saved);
        updateSubscriptionStatus();
    }
}

// Save user progress to localStorage
function saveUserProgress() {
    localStorage.setItem('userProgress', JSON.stringify(userProgress));
}

// Initialize app
window.onload = function() {
    loadUserProgress();
    updateProgressStats();
};

// Show section
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
    
    if (sectionId === 'progress') {
        updateProgressStats();
        renderLanguageProgress();
    }
}

// Select language
function selectLanguage(languageKey) {
    currentLanguage = languageKey;
    const language = languageData[languageKey];
    
    document.getElementById('languageTitle').textContent = language.name + ' ' + language.flag;
    
    renderLessons(language.lessons);
    showSection('lessons');
}

// Render lessons
function renderLessons(lessons) {
    const container = document.getElementById('lessonsContainer');
    
    container.innerHTML = lessons.map(lesson => {
        const isCompleted = userProgress.completedLessons.includes(`${currentLanguage}-${lesson.id}`);
        const isLocked = lesson.locked && userProgress.subscription === 'free';
        
        let cardClass = 'lesson-card';
        if (isCompleted) cardClass += ' completed';
        if (isLocked) cardClass += ' locked';
        
        const lockIcon = isLocked ? '<span class="lock-icon">🔒</span>' : '';
        const completedIcon = isCompleted ? '✅' : '';
        
        return `
            <div class="${cardClass}" onclick="${isLocked ? 'showLockedMessage()' : `openLesson(${lesson.id})`}">
                ${lockIcon}
                <div class="lesson-number">Pelajaran ${lesson.id}</div>
                <div class="lesson-title">${lesson.title} ${completedIcon}</div>
                <div class="lesson-meta">
                    <span>${lesson.level}</span>
                    <span>${lesson.vocabulary ? lesson.vocabulary.length + ' kata' : ''}</span>
                </div>
            </div>
        `;
    }).join('');
}

// Show locked message
function showLockedMessage() {
    showNotification('Upgrade ke Premium untuk membuka semua pelajaran! ⭐', 'info');
    setTimeout(() => {
        showSubscription();
    }, 1500);
}

// Open lesson
function openLesson(lessonId) {
    const language = languageData[currentLanguage];
    currentLesson = language.lessons.find(l => l.id === lessonId);
    
    if (!currentLesson || !currentLesson.vocabulary) return;
    
    document.getElementById('modalTitle').textContent = currentLesson.title;
    
    const content = document.getElementById('lessonContent');
    content.innerHTML = `
        <div class="vocabulary-list">
            ${currentLesson.vocabulary.map((vocab, index) => `
                <div class="vocabulary-item">
                    <div class="vocab-header">
                        <div class="vocab-word">${vocab.word}</div>
                        <button class="audio-btn" onclick="playAudio('${vocab.word}', this)">🔊</button>
                    </div>
                    <div class="vocab-translation">${vocab.translation}</div>
                    <div class="vocab-pronunciation">${vocab.pronunciation}</div>
                    <div class="vocab-example">
                        <div class="vocab-example-title">Contoh:</div>
                        <div class="vocab-example-text">${vocab.example}</div>
                    </div>
                </div>
            `).join('')}
        </div>
        <button class="complete-lesson-btn" onclick="completeLesson()">
            Selesaikan Pelajaran ✓
        </button>
    `;
    
    document.getElementById('lessonModal').classList.add('active');
}

// Close lesson modal
function closeLessonModal() {
    document.getElementById('lessonModal').classList.remove('active');
}

// Play audio (Text-to-Speech simulation)
function playAudio(text, button) {
    // Simulate audio playing
    button.classList.add('playing');
    
    // Use Web Speech API if available
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        
        // Set language based on current language
        const langCodes = {
            'english': 'en-US',
            'korean': 'ko-KR',
            'arabic': 'ar-SA',
            'japanese': 'ja-JP',
            'russian': 'ru-RU'
        };
        
        utterance.lang = langCodes[currentLanguage] || 'en-US';
        utterance.rate = 0.8;
        
        utterance.onend = function() {
            button.classList.remove('playing');
        };
        
        speechSynthesis.speak(utterance);
    } else {
        // Fallback: just show visual feedback
        setTimeout(() => {
            button.classList.remove('playing');
        }, 1000);
    }
}

// Complete lesson
function completeLesson() {
    const lessonKey = `${currentLanguage}-${currentLesson.id}`;
    
    if (!userProgress.completedLessons.includes(lessonKey)) {
        userProgress.completedLessons.push(lessonKey);
        userProgress.points += 50;
        
        // Update streak
        const today = new Date().toDateString();
        if (userProgress.lastStudyDate !== today) {
            userProgress.streak += 1;
            userProgress.lastStudyDate = today;
        }
        
        saveUserProgress();
        showNotification('Selamat! Pelajaran selesai! +50 poin 🎉', 'success');
        
        closeLessonModal();
        
        // Refresh lessons display
        const language = languageData[currentLanguage];
        renderLessons(language.lessons);
        updateProgressStats();
    } else {
        showNotification('Anda sudah menyelesaikan pelajaran ini!', 'info');
    }
}

// Update progress stats
function updateProgressStats() {
    // Calculate total lessons
    let totalLessons = 0;
    Object.values(languageData).forEach(lang => {
        totalLessons += lang.lessons.length;
    });
    
    document.getElementById('totalLessons').textContent = totalLessons;
    document.getElementById('completedLessons').textContent = userProgress.completedLessons.length;
    document.getElementById('streak').textContent = userProgress.streak;
    document.getElementById('points').textContent = userProgress.points;
}

// Render language progress
function renderLanguageProgress() {
    const container = document.getElementById('languageProgress');
    
    container.innerHTML = Object.entries(languageData).map(([key, lang]) => {
        const totalLessons = lang.lessons.length;
        const completed = userProgress.completedLessons.filter(l