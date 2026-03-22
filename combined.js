const CONFIG = { name: "Sanya", secretWord: "antigravity", revealLine: "Yeyyyy… it's Sanya's Birthdayyyy 🎉", subRevealLine: "And the whole universe exhaled in relief 🌙", questionOne: "Am I forgetting something?", noResponses: [{ question: "Hmm… are you sure? 🤔", button: "Still no", hint: "Take a second…" }, { question: "Really sure? Like, genuinely? 👀", button: "Definitely no", hint: "Okay okay… I see you." }, { question: "Fine… fine. But just so you know…", button: null, hint: "…only Yes remains. No pressure. 😌" }], questionTwo: "Whose birthday is it?", wrongAnswers: ["Nice try 😌", "Not quite, superstar…", "Almost! But no."], letter: { opening: "There's something I've been meaning to say properly.", paragraphs: ["What we had was never just a passing phase or something light. It was a space where I felt seen in a way I hadn't experienced before.", "Being with you gave a certain rhythm to my days — your presence, your voice, even the smallest interactions carried a kind of familiarity that made everything feel a little more stable.", "What I felt wasn't just attachment. It was care in its pure form. The kind where your happiness mattered to me, where I found comfort in knowing you were okay, where even silence between us didn't feel empty.", "There was warmth in the way we existed around each other. Something that made ordinary moments feel meaningful.", "I don't look back at what we had with regret. I look at it with gratitude. Because for a time, we shared something genuine — something that taught me a lot about connection, about care, and about myself.", "Wherever life takes us, I carry that part quietly — with respect, with appreciation, and with nothing but good intentions for you."], closing: "Always." }, finalMessage: ["You were more than someone could ever be to a person.", "Thank you for being that.", "I'll be the best version of myself I could ever be.", "Take care."], closingCredit: "Made with something real. 🫶", memoryJars: [{ color: "#e8a0b4", label: "Warmth", memory: "The way your presence made ordinary moments feel like they mattered. That wasn't nothing. That was everything." }, { color: "#d4a85a", label: "Rhythm", memory: "There was a rhythm you brought — not loud, not dramatic. Just steady. Like a song that fits perfectly in the background of everything." }, { color: "#c8b8e8", label: "Silence", memory: "The silences with you were never empty. They were just… rest. Easy and undemanding and genuinely rare." }, { color: "#a8d4b8", label: "Care", memory: "You were cared for. Not performatively, not conditionally. Just genuinely, quietly, and without needing anything back." }, { color: "#f0c8a8", label: "Stability", memory: "You were someone who made everything feel a little more navigable. That gift is not a small one." }, { color: "#b8d4e8", label: "Seeing", memory: "To be truly seen by someone is a rare thing. You were seen. Every version — the easy ones and the hard ones both." }, { color: "#e8c8d4", label: "Gratitude", memory: "There is someone out there who is grateful you exist exactly as you are. Not a curated version. The full, actual you." }, { color: "#d4c8a8", label: "Softness", memory: "Your softness was never a weakness. It was the most honest thing about you, and it was a gift to witness." }, { color: "#a8b8d4", label: "Connection", memory: "What was shared was genuine. Not performance, not habit. A real thing that taught real lessons about what connection can be." }, { color: "#e8d4a8", label: "Growth", memory: "Some people teach us things without meaning to. You were one of those. The lessons were worth it." }, { color: "#c8a8d4", label: "Respect", memory: "You deserve to be respected — not just liked, not just wanted. Respected. Keep that as your baseline." }, { color: "#a8d4c8", label: "Future", memory: "Wherever you go from here, carry this: you are the kind of person worth returning to. Always have been." }], dailyFortunes: [{ quote: "The only courage that matters is the kind that gets you from one moment to the next.", author: "Mignon McLaughlin" }, { quote: "You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face.", author: "Eleanor Roosevelt" }, { quote: "Life shrinks or expands in proportion to one's courage.", author: "Anaïs Nin" }, { quote: "Courage is not the absence of fear, but the triumph over it.", author: "Nelson Mandela" }, { quote: "Have patience with everything unresolved in your heart and try to love the questions themselves.", author: "Rainer Maria Rilke" }, { quote: "The wound is the place where the Light enters you.", author: "Rumi" }, { quote: "She was powerful not because she wasn't scared but because she went on so strongly, despite the fear.", author: "Atticus" }, { quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" }, { quote: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" }, { quote: "Turn your wounds into wisdom.", author: "Oprah Winfrey" }, { quote: "We must be willing to let go of the life we planned so as to have the life that is waiting for us.", author: "Joseph Campbell" }, { quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" }, { quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" }, { quote: "The most beautiful thing you can wear is confidence.", author: "Blake Lively" }, { quote: "Stars can't shine without darkness.", author: "D.H. Sidebottom" }, { quote: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" }, { quote: "Out of your vulnerabilities will come your strength.", author: "Sigmund Freud" }, { quote: "She remembered who she was and the game changed.", author: "Lalah Delia" }, { quote: "Happiness can be found even in the darkest of times, if one only remembers to turn on the light.", author: "Albus Dumbledore" }, { quote: "The world breaks everyone, and afterward, some are strong at the broken places.", author: "Ernest Hemingway" }, { quote: "And still, I rise.", author: "Maya Angelou" }, { quote: "Be not afraid of going slowly, be afraid only of standing still.", author: "Chinese Proverb" }, { quote: "One day, in retrospect, the years of struggle will strike you as the most beautiful.", author: "Sigmund Freud" }, { quote: "The soul that sees beauty may sometimes walk alone.", author: "Johann Wolfgang von Goethe" }, { quote: "I dwell in possibility.", author: "Emily Dickinson" }, { quote: "Not all those who wander are lost.", author: "J.R.R. Tolkien" }, { quote: "Everything you've ever wanted is on the other side of fear.", author: "George Addair" }, { quote: "What if I fall? Oh, but my darling, what if you fly?", author: "Erin Hanson" }, { quote: "She was a wildflower in a world of roses — and she chose to bloom anyway.", author: "Nikki Rowe" }, { quote: "It is never too late to be what you might have been.", author: "George Eliot" }, { quote: "You yourself, as much as anybody in the entire universe, deserve your love and affection.", author: "Buddha" }], gardenItems: [{ id: "sunflower", label: "🌻 Sunflower", color: "#f0c840", type: "flower", flowerType: "sunflower", message: "Joy planted here grows back. Always." }, { id: "rose", label: "🌹 Rose", color: "#e8a0b4", type: "flower", flowerType: "rose", message: "Courage doesn't announce itself. It just shows up." }, { id: "tulip", label: "🌷 Tulip", color: "#c878a8", type: "flower", flowerType: "tulip", message: "Love — in any form — is worth planting." }, { id: "daisy", label: "🌼 Daisy", color: "#d4a85a", type: "flower", flowerType: "daisy", message: "What you're grateful for grows when you name it." }, { id: "lavender", label: "💜 Lavender", color: "#a8e8d0", type: "flower", flowerType: "lavender", message: "Healing isn't linear but you're in it. That counts." }, { id: "bluebell", label: "💙 Bluebell", color: "#b8c8e8", type: "flower", flowerType: "bluebell", message: "You still have wonder. That's not small." }, { id: "daffodil", label: "🌸 Daffodil", color: "#f8d0a8", type: "flower", flowerType: "daffodil", message: "Hope planted in the dark is the bravest kind." }, { id: "lily", label: "🤍 Lily", color: "#e8e0d0", type: "flower", flowerType: "lily", message: "Calm is a kind of strength." }, { id: "rabbit", label: "🐰 Rabbit", color: "#f0d8c8", type: "creature", message: "For the one who'll always be remembered. Hopping through your garden forever. 🤍" }, { id: "dog", label: "🐕 Puppy", color: "#d4a878", type: "creature", message: "A loyal friend who'll always be here waiting." }, { id: "cat", label: "🐱 Kitty", color: "#e8c8a8", type: "creature", message: "Curled up and purring softly in your world." }, { id: "butterfly", label: "🦋 Butterfly", color: "#c0a8e8", type: "creature", message: "Change is beautiful. So are you." }, { id: "bird", label: "🐦 Bird", color: "#a8c8e8", type: "creature", message: "Singing a song only your garden knows." }, { id: "star", label: "⭐ Star", color: "#f0e878", type: "sky", message: "A little light you placed here yourself." }, { id: "moon", label: "🌙 Moon", color: "#e8e0c8", type: "sky", message: "Even in your garden, the moon watches over you." }, { id: "cloud", label: "☁️ Cloud", color: "#d8d4e8", type: "sky", message: "Soft, passing, and always making room for sun." }, { id: "mushroom", label: "🍄 Mushroom", color: "#e8a088", type: "nature", message: "Tiny, magical, and growing where you least expect." }, { id: "grass", label: "🌿 Grass", color: "#78b868", type: "nature", message: "The foundation of everything beautiful." }, { id: "tree", label: "🌳 Tree", color: "#5a9870", type: "nature", message: "Strong roots. You're growing taller than you think." }, { id: "rock", label: "🪨 Stone", color: "#a8a0a0", type: "nature", message: "Solid. Steady. Just like you on your best days." }], presetConstellations: [{ name: "The Moment We Met", stars: [{ x: .3, y: .2 }, { x: .35, y: .3 }, { x: .28, y: .4 }, { x: .38, y: .45 }] }, { name: "Her Laugh", stars: [{ x: .6, y: .25 }, { x: .65, y: .18 }, { x: .7, y: .28 }, { x: .62, y: .35 }] }, { name: "Safe Place", stars: [{ x: .5, y: .6 }, { x: .45, y: .7 }, { x: .55, y: .72 }, { x: .5, y: .8 }] }], sanctuaryLetters: [{ date: "2024-01-01", from: "Someone who remembers", text: "I left this here because I wanted you to have a place that's yours. Somewhere that doesn't ask anything of you. You don't have to perform here, or be okay here, or figure anything out here. Just be. I hope you come back to this on days when you need it. I hope it helps, even slightly. That's all I wanted." }], emojiPool: ["💫", "🎈", "✨", "💖", "🌸", "💐", "🫶", "🎀", "🌷", "🥳", "😊", "😄", "💕", "🌙", "⭐", "🦋", "🍀", "🎊", "🩷", "✦", "🌺", "🌼", "🦩", "🎐", "🌻"] };

const PRM = window.matchMedia('(prefers-reduced-motion:reduce)').matches;
const isMob = () => window.innerWidth <= 480;
const rand = (a, b) => Math.random() * (b - a) + a;
const randInt = (a, b) => Math.floor(rand(a, b + 1));
const pick = a => a[Math.floor(Math.random() * a.length)];

/* ===== SCENE MANAGER ===== */
const SceneManager = {
    current: null, history: [],
    transitionTo(id, opts = {}) {
        const prev = this.current, next = document.getElementById(id); if (!next || next === prev) return;
        if (prev) { this.history.push(prev.id); prev.style.pointerEvents = 'none'; prev.animate([{ opacity: 1, transform: 'translateY(0)' }, { opacity: 0, transform: 'translateY(-44px)' }], { duration: 520, easing: 'cubic-bezier(.64,0,.78,0)', fill: 'forwards' }).finished.then(() => prev.classList.remove('active')); }
        const d = prev ? 490 : 0; setTimeout(() => { next.classList.add('active'); next.style.pointerEvents = 'none'; next.animate([{ opacity: 0, transform: 'translateY(64px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 680, easing: 'cubic-bezier(.34,1.56,.64,1)', fill: 'forwards' }).finished.then(() => { next.style.pointerEvents = 'auto' }); this.current = next; if (opts.onEnter) opts.onEnter(); }, d);
    },
    goToHub() { this.transitionTo('scene-hub', { onEnter: initHub }); }
};

/* ===== EMOJI BURST ===== */
function fireEmojis(x, y, count, opts = {}) {
    if (isMob()) count = Math.min(count, 5); const { slow, wide, gentle } = opts;
    for (let i = 0; i < count; i++) {
        const s = document.createElement('span'); s.textContent = pick(CONFIG.emojiPool); s.style.cssText = `position:fixed;pointer-events:none;z-index:var(--z-emojis);user-select:none;will-change:transform,opacity;left:${x + rand(-28, 28)}px;top:${y + rand(-28, 28)}px;font-size:${gentle ? rand(.8, 1.4) : rand(1, 2.6)}rem;filter:drop-shadow(0 3px 6px rgba(0,0,0,.22))`; document.body.appendChild(s);
        const dx = wide ? rand(-130, 130) : rand(-55, 55), ry = gentle ? rand(-100, -60) : wide ? rand(-380, -200) : rand(-260, -140), ey = Math.random() > .42 ? ry - 50 : ry + 100, sp = rand(-38, 38), sdx = rand(-28, 28), dur = wide ? rand(2500, 4000) : gentle ? rand(1800, 2800) : rand(1300, 2200);
        s.animate([{ opacity: 1, transform: `translate(0,0) rotate(0deg) scale(.45)`, offset: 0 }, { opacity: .92, transform: `translate(${dx}px,${ry}px) rotate(${sp}deg) scale(1.2)`, offset: .32 }, { opacity: 0, transform: `translate(${dx + sdx}px,${ey}px) rotate(${sp * 1.5}deg) scale(.85)`, offset: 1 }], { duration: dur, easing: 'cubic-bezier(.22,1,.36,1)', fill: 'forwards' });
        setTimeout(() => s.remove(), dur + 250);
    }
}

/* ===== FLOURISHES ===== */
function addFlourishes(el, tier, breatheAnim) {
    const paths = [`<path d="M4 44C4 28 12 12 44 4" stroke="var(--gold)" stroke-width=".85" fill="none" opacity=".5"/>`,
        `<path d="M8 44C8 32 18 18 38 10" stroke="var(--gold)" stroke-width=".7" fill="none" opacity=".35"/>`,
        `<path d="M20 36C16 28 22 20 32 16C26 22 24 30 24 36" stroke="var(--gold)" stroke-width=".6" fill="none" opacity=".4"/>`];
    ['tl', 'tr', 'bl', 'br'].forEach(pos => {
        const d = document.createElement('div'); d.className = `flourish-corner ${pos}`;
        let svg = `<svg viewBox="0 0 48 48" fill="none">${paths[0]}`; if (tier >= 2) svg += paths[1]; if (tier >= 3) svg += paths[2]; svg += `</svg>`; d.innerHTML = svg;
        if (breatheAnim) d.style.animation = 'breathe 4s ease-in-out infinite';
        d.addEventListener('click', e => { e.stopPropagation(); const r = d.getBoundingClientRect(); const h = document.createElement('div'); h.innerHTML = `<svg viewBox="0 0 100 100" width="12" height="12"><path d="M50 88C25 65 2 45 2 28 2 14 14 2 28 2c9 0 16 5 22 14C56 7 63 2 72 2c14 0 26 12 26 26 0 17-23 37-48 60Z" fill="var(--rose)"/></svg>`; h.style.cssText = `position:fixed;left:${r.left + r.width / 2 - 6}px;top:${r.top + r.height / 2 - 6}px;pointer-events:none;z-index:var(--z-emojis)`; document.body.appendChild(h); h.animate([{ opacity: 1, transform: 'translateY(0) rotate(0deg)' }, { opacity: 0, transform: 'translateY(-85px) rotate(20deg)' }], { duration: 1200, easing: 'ease-out', fill: 'forwards' }); setTimeout(() => h.remove(), 1400); });
        el.appendChild(d);
    });
}

/* ===== BACKGROUNDS ===== */
let grainOn = true, partOn = true;
function initGrainCanvas() {
    if (PRM) return; const c = document.getElementById('bg-grain'), x = c.getContext('2d'); function rz() { c.width = innerWidth; c.height = innerHeight } rz(); addEventListener('resize', rz);
    setInterval(() => { if (!grainOn) return; const d = x.createImageData(c.width, c.height), p = d.data; for (let i = 0; i < p.length; i += 16) { const v = 120 + Math.random() * 30; p[i] = p[i + 1] = p[i + 2] = v; p[i + 3] = Math.random() * 40 } x.putImageData(d, 0, 0) }, 85);
}

function initParticleCanvas() {
    if (PRM) return; const c = document.getElementById('bg-particles'), x = c.getContext('2d'); function rz() { c.width = innerWidth; c.height = innerHeight } rz(); addEventListener('resize', rz);
    const cols = ['#e890b0', '#e0b060', '#c0a8e8', '#f0c898', '#90d8b8'], pts = []; for (let i = 0; i < 50; i++)pts.push({ x: rand(0, c.width), y: rand(0, c.height), sz: rand(6, 16), op: rand(.025, .08), sp: rand(.12, .45), col: pick(cols), isStar: Math.random() > .5, freq: rand(.5, 2), amp: rand(.3, 1.2), phase: rand(0, Math.PI * 2) });
    let t = 0; function draw() {
        if (!partOn) { requestAnimationFrame(draw); return } t += .016; x.clearRect(0, 0, c.width, c.height);
        pts.forEach(p => {
            p.y -= p.sp; p.x += Math.sin(t * p.freq + p.phase) * p.amp * .5; if (p.y < -20) { p.y = c.height + 20; p.x = rand(0, c.width) }
            x.save(); x.globalAlpha = p.op; x.fillStyle = p.col; if (p.isStar) { const r = p.sz / 2, ir = r * .35, cx = p.x, cy = p.y; x.beginPath(); for (let i = 0; i < 4; i++) { const a = Math.PI / 2 * i; x.lineTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r); x.lineTo(cx + Math.cos(a + Math.PI / 4) * ir, cy + Math.sin(a + Math.PI / 4) * ir) } x.closePath(); x.fill() } else { x.beginPath(); x.arc(p.x, p.y, p.sz / 2, 0, Math.PI * 2); x.fill() } x.restore()
        });
        requestAnimationFrame(draw)
    } draw();
}

function initCursorTrail() {
    if (PRM || !matchMedia('(pointer:fine)').matches) return; let lt = 0;
    document.addEventListener('mousemove', e => { const n = Date.now(); if (n - lt < 75) return; lt = n; const s = document.createElement('span'); s.textContent = '✦'; s.style.cssText = `position:fixed;left:${e.clientX}px;top:${e.clientY}px;font-size:.55rem;color:var(--lavender);pointer-events:none;z-index:var(--z-cursor);opacity:.7`; document.body.appendChild(s); s.animate([{ opacity: .7, transform: 'translateY(0)' }, { opacity: 0, transform: 'translateY(-18px)' }], { duration: 750, easing: 'ease-out', fill: 'forwards' }); setTimeout(() => s.remove(), 770) });
}

document.addEventListener('visibilitychange', () => { grainOn = partOn = !document.hidden });

/* ===== HEART ===== */
function initHeart() {
    const w = document.getElementById('heart-wrap'), b = document.getElementById('bubble'); if (PRM) w.style.animation = 'none';
    w.addEventListener('mouseenter', () => { w.classList.add('hovered'); b.textContent = "Don't be shy… 🫶" });
    w.addEventListener('mouseleave', () => { w.classList.remove('hovered'); b.textContent = "Hey… click me :)" });
    w.addEventListener('click', () => {
        const r = w.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2; w.style.animation = 'none';
        w.animate([{ transform: 'scale(1,1) translateY(0)', offset: 0 }, { transform: 'scale(1.2,.82) translateY(-4px)', offset: .16 }, { transform: 'scale(.88,1.18) translateY(-16px)', offset: .44 }, { transform: 'scale(1.05,.96) translateY(-10px)', offset: .64 }, { transform: 'scale(1,1) translateY(0)', offset: 1 }], { duration: 570, easing: 'ease-out', fill: 'forwards' }).finished.then(() => SceneManager.transitionTo('scene-2', { onEnter: onS2 }));
        fireEmojis(cx, cy, 6)
    });
}

/* ===== SCENE 2 ===== */
let noCount = 0; const bgs = ['var(--bg-s1)', 'var(--bg-s2)', 'var(--bg-s3)', 'var(--bg-s4)'];
function initScene2() {
    document.getElementById('q1t').textContent = CONFIG.questionOne;
    document.getElementById('by1').onclick = () => { const r = document.getElementById('by1').getBoundingClientRect(); fireEmojis(r.left + r.width / 2, r.top, 5); setTimeout(() => SceneManager.transitionTo('scene-3', { onEnter: onS3 }), 300) };
    document.getElementById('bn1').onclick = () => {
        noCount++; const btn = document.getElementById('bn1'), r = btn.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top;
        if (noCount < 3) { const resp = CONFIG.noResponses[noCount - 1]; document.getElementById('q1t').textContent = resp.question; document.getElementById('q1h').textContent = resp.hint; if (resp.button) btn.textContent = resp.button; document.documentElement.style.setProperty('--scene-bg', bgs[noCount]); fireEmojis(cx, cy, noCount === 2 ? 6 : 4) }
        if (noCount === 3) { const resp = CONFIG.noResponses[2]; document.getElementById('q1t').textContent = resp.question; document.getElementById('q1h').textContent = resp.hint; btn.animate([{ opacity: 1, transform: 'translateY(0) scale(1)' }, { opacity: 0, transform: 'translateY(-20px) scale(.8)' }], { duration: 400, easing: 'ease-out', fill: 'forwards' }); fireEmojis(cx, cy, randInt(6, 8)); setTimeout(() => btn.style.display = 'none', 420); document.documentElement.style.setProperty('--scene-bg', bgs[3]) }
    };
}
function onS2() { noCount = 0; const b = document.getElementById('bn1'); b.style.display = ''; b.style.opacity = ''; b.textContent = 'No'; document.getElementById('q1t').textContent = CONFIG.questionOne; document.getElementById('q1h').textContent = ''; addFlourishes(document.getElementById('card-2'), 1, false); }

/* ===== SCENE 3 ===== */
function initScene3() {
    document.getElementById('q2t').textContent = CONFIG.questionTwo;
    document.getElementById('bmine').onclick = () => {
        const r = document.getElementById('bmine').getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top; const q = document.getElementById('q2t'); q.classList.remove('waggle'); void q.offsetWidth; q.classList.add('waggle');
        const f = document.createElement('div'); f.className = 'wrong-float'; f.textContent = pick(CONFIG.wrongAnswers); f.style.left = cx + 'px'; f.style.top = cy + 'px'; document.body.appendChild(f); f.animate([{ opacity: 1, transform: 'translateY(0)' }, { opacity: 0, transform: 'translateY(-80px)' }], { duration: 1600, easing: 'cubic-bezier(.22,1,.36,1)', fill: 'forwards' }); setTimeout(() => f.remove(), 1800); fireEmojis(cx, cy, 3)
    };
    document.getElementById('byours').onclick = () => { const r = document.getElementById('byours').getBoundingClientRect(); fireEmojis(r.left + r.width / 2, r.top, 8, { wide: true }); setTimeout(() => SceneManager.transitionTo('scene-4', { onEnter: onS4 }), 300) };
}
function onS3() { document.getElementById('q2t').textContent = CONFIG.questionTwo; document.getElementById('q2h').textContent = ''; addFlourishes(document.getElementById('card-3'), 2, false); }

/* ===== SCENE 4 ===== */
function initScene4() { document.getElementById('scene-4').addEventListener('click', e => { fireEmojis(e.clientX, e.clientY, 4); SceneManager.transitionTo('scene-5', { onEnter: onS5 }) }); }
function onS4() {
    document.documentElement.style.setProperty('--scene-bg', 'var(--bg-s4)');
    const c = document.getElementById('revealTxt'); c.innerHTML = ''; CONFIG.revealLine.split(' ').forEach((w, i) => { const s = document.createElement('span'); s.className = 'word'; s.textContent = w; s.style.animation = `wordRise var(--dur-slow) var(--ease-spring) both`; s.style.animationDelay = i * .06 + 's'; c.appendChild(s); if (i < CONFIG.revealLine.split(' ').length - 1) c.appendChild(document.createTextNode(' ')) });
    const sr = document.getElementById('subReveal'); sr.textContent = CONFIG.subRevealLine; sr.style.opacity = '0'; setTimeout(() => sr.animate([{ opacity: 0, transform: 'translateY(15px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 800, easing: 'cubic-bezier(.22,1,.36,1)', fill: 'forwards' }), 1400);
    const cp = document.getElementById('contPrompt'); cp.style.opacity = '0'; setTimeout(() => { cp.style.opacity = '1'; cp.style.animationPlayState = 'running'; cp.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 600, fill: 'forwards' }) }, 2800);
    const cx = innerWidth / 2, cy = innerHeight / 2;[9, 7, 10, 7, 8].forEach((n, i) => setTimeout(() => fireEmojis(cx + rand(-40, 40), cy + rand(-40, 40), n, { wide: true }), i * 350));
}
/* ===== SCENE 5 — FINAL MESSAGE ===== */
function initScene5() {
    document.getElementById('card-5').addEventListener('click', e => { if (e.target.id === 'toLetterBtn') return; fireEmojis(e.clientX, e.clientY, randInt(3, 4), { gentle: true }) });
    document.getElementById('toLetterBtn').addEventListener('click', e => { e.stopPropagation(); SceneManager.transitionTo('scene-6', { onEnter: onS6 }) });
}
function onS5() {
    document.documentElement.style.setProperty('--scene-bg', 'var(--bg-s5)');
    const fl = document.getElementById('finalLines'); fl.innerHTML = '';
    CONFIG.finalMessage.forEach((l, i) => {
        if (i === 2) { const dv = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); dv.setAttribute('viewBox', '0 0 130 22'); dv.setAttribute('width', '130'); dv.setAttribute('height', '22'); dv.style.cssText = 'display:block;margin:8px auto;opacity:0'; dv.innerHTML = `<path d="M10 11C30 2 50 2 60 11" stroke="var(--gold)" stroke-width=".8" fill="none"/><path d="M70 11C80 2 100 2 120 11" stroke="var(--gold)" stroke-width=".8" fill="none"/><path d="M60 11L65 7 70 11 65 15Z" stroke="var(--gold)" stroke-width=".8" fill="none"/>`; fl.appendChild(dv); setTimeout(() => dv.animate([{ opacity: 0 }, { opacity: .6 }], { duration: 600, fill: 'forwards' }), 1200) }
        const p = document.createElement('p'); p.textContent = l; p.style.cssText = `font-family:var(--font-display);font-size:clamp(1rem,3vw,1.45rem);line-height:1.7;animation:lineRise var(--dur-slow) var(--ease-out) both;animation-delay:${.55 * i}s;${(i === 1 || i === 3) ? 'font-style:italic' : ''}`; fl.appendChild(p)
    });
    const cred = document.getElementById('closingCred'); cred.textContent = CONFIG.closingCredit; const tt = CONFIG.finalMessage.length * .55 * 1000;
    setTimeout(() => cred.animate([{ opacity: 0, transform: 'translateY(10px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 700, fill: 'forwards' }), tt + 2000);
    const cf = document.getElementById('closingFlourish'); cf.innerHTML = `<svg viewBox="0 0 50 30" width="50" height="30"><path d="M5 25C10 10 20 8 25 15" stroke="var(--rose)" stroke-width=".9" fill="none"/><path d="M45 25C40 10 30 8 25 15" stroke="var(--rose)" stroke-width=".9" fill="none"/><circle cx="25" cy="15" r="1.5" fill="var(--rose)" opacity=".6"/></svg>`;
    setTimeout(() => cf.animate([{ opacity: 0, transform: 'scale(.7)' }, { opacity: 1, transform: 'scale(1)' }], { duration: 600, easing: 'cubic-bezier(.34,1.56,.64,1)', fill: 'forwards' }), tt + 2600);
    const tb = document.getElementById('toLetterBtn'); tb.style.display = ''; tb.style.opacity = '0'; setTimeout(() => { tb.style.display = 'block'; tb.animate([{ opacity: 0, transform: 'translateY(10px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 600, fill: 'forwards' }) }, tt + 3500);
    addFlourishes(document.getElementById('card-5'), 2, true);
}

/* ===== SCENE 6 — THE LETTER ===== */
function initScene6() { }
function onS6() {
    document.documentElement.style.setProperty('--scene-bg', 'var(--bg-s6)');
    const box = document.getElementById('letterBox'); box.innerHTML = ''; addFlourishes(box, 3, true);
    const op = document.createElement('p'); op.textContent = CONFIG.letter.opening; op.style.cssText = 'font-style:italic;color:var(--text-muted);text-align:center;margin-bottom:24px;opacity:0'; box.appendChild(op); setTimeout(() => op.animate([{ opacity: 0, transform: 'translateY(12px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 700, fill: 'forwards' }), 200);
    CONFIG.letter.paragraphs.forEach((t, i) => {
        if (i === 4) { const dv = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); dv.setAttribute('viewBox', '0 0 90 16'); dv.setAttribute('width', '90'); dv.setAttribute('height', '16'); dv.style.cssText = 'display:block;margin:12px auto;opacity:0'; dv.innerHTML = `<path d="M5 8C20 2 35 2 42 8" stroke="var(--rose)" stroke-width=".7" fill="none" opacity=".4"/><path d="M48 8C55 2 70 2 85 8" stroke="var(--rose)" stroke-width=".7" fill="none" opacity=".4"/><circle cx="45" cy="8" r="1.5" fill="var(--rose)" opacity=".4"/>`; box.appendChild(dv); setTimeout(() => dv.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 600, fill: 'forwards' }), (i + 1) * 800 + 400); }
        const p = document.createElement('p'); p.textContent = t; p.style.opacity = '0'; box.appendChild(p); setTimeout(() => p.animate([{ opacity: 0, transform: 'translateY(18px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 700, fill: 'forwards' }), (i + 1) * 800);
    });
    const cl = document.createElement('p'); cl.className = 'letter-closing'; cl.textContent = CONFIG.letter.closing; cl.style.cssText += 'text-align:center;margin-top:16px;opacity:0'; box.appendChild(cl);
    const clTime = (CONFIG.letter.paragraphs.length + 1) * 800 + 1000;
    setTimeout(() => { cl.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 800, fill: 'forwards' }); setTimeout(() => cl.classList.add('drawn'), 200) }, clTime);
    const btn = document.createElement('button'); btn.className = 'btn-glow'; btn.textContent = 'Enter her world. ✦'; btn.style.cssText = 'margin-top:24px;opacity:0;align-self:center'; box.appendChild(btn);
    setTimeout(() => btn.animate([{ opacity: 0, transform: 'translateY(10px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 600, fill: 'forwards' }), clTime + 1800);
    btn.onclick = () => { localStorage.setItem('hasVisited', 'true'); const vc = parseInt(localStorage.getItem('visitCount') || '0') + 1; localStorage.setItem('visitCount', vc.toString()); SceneManager.goToHub() };
}

/* ===== HUB ===== */
const portals = [{ icon: '🫙', label: 'Memory Jars', desc: 'Open a memory', room: 'room-jars' }, { icon: '🌸', label: 'The Garden', desc: 'Grow your world', room: 'room-garden' }, { icon: '✦', label: 'Drawing Studio', desc: 'Draw your sky', room: 'room-stars' }, { icon: '🗝', label: 'Sanctuary', desc: 'Your private space', room: 'room-sanctuary' }, { icon: '🌟', label: "Today's Wisdom", desc: 'A philosopher speaks', room: 'room-fortune' }];
function initHub() {
    document.documentElement.style.setProperty('--scene-bg', 'var(--bg-hub)');
    const vc = parseInt(localStorage.getItem('visitCount') || '0'), g = document.getElementById('hubGreeting');
    if (vc > 1) { const greets = ["Welcome back, Sanya. 🌙", "You came back. Good.", "Still here, still yours.", "Hello again, Sanya."]; g.textContent = greets[vc % greets.length]; g.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 800, fill: 'forwards' }) }
    const grid = document.getElementById('portalGrid'); if (grid.children.length > 0) return;
    portals.forEach((p, i) => {
        const wrap = i >= 3 ? getOrCreateRow2(grid) : grid;
        const btn = document.createElement('button'); btn.className = 'portal-card'; btn.innerHTML = `<span class="p-icon">${p.icon}</span><span class="p-label">${p.label}</span><span class="p-desc">${p.desc}</span>`;
        btn.style.cssText = `opacity:0;transform:translateY(40px)`;
        setTimeout(() => btn.animate([{ opacity: 0, transform: 'translateY(40px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 600, easing: 'cubic-bezier(.34,1.56,.64,1)', fill: 'forwards' }), i * 100 + 200);
        btn.onclick = () => {
            const r = btn.getBoundingClientRect(); fireEmojis(r.left + r.width / 2, r.top + r.height / 2, 4, { gentle: true });
            const enterFns = { 'room-jars': () => enterJars(), 'room-garden': () => enterGarden(), 'room-stars': () => enterStars(), 'room-sanctuary': () => enterSanctuary(), 'room-fortune': () => enterFortune() };
            setTimeout(() => SceneManager.transitionTo(p.room, { onEnter: enterFns[p.room] }), 250)
        };
        wrap.appendChild(btn)
    });
}
function getOrCreateRow2(grid) { let r = grid.querySelector('.row2'); if (!r) { r = document.createElement('div'); r.className = 'row2'; grid.appendChild(r) } return r; }

/* ===== ROOM: MEMORY JARS (with personal notes) ===== */
function initRoomJars() { }
function enterJars() {
    const grid = document.getElementById('jarGrid'); grid.innerHTML = '';
    let opened = JSON.parse(localStorage.getItem('openedJars') || '[]');
    let jarNotes = JSON.parse(localStorage.getItem('jarNotes') || '{}');
    const updateStatus = () => { document.getElementById('jarStatus').textContent = `${opened.length} of 12 memories found.` }; updateStatus();
    CONFIG.memoryJars.forEach((j, i) => {
        const item = document.createElement('div'); item.className = 'jar-item'; item.style.setProperty('--jar-color', j.color + '55');
        const isOpen = opened.includes(i);
        item.innerHTML = `<svg viewBox="0 0 40 56" width="50" height="70"><rect x="8" y="0" width="24" height="6" rx="2" fill="${j.color}88" class="jlid" style="${isOpen ? 'opacity:0' : ''}"/><rect x="4" y="6" width="32" height="44" rx="6" fill="${j.color}${isOpen ? '99' : '44'}"/><rect x="8" y="10" width="3" height="18" rx="1.5" fill="white" opacity=".25"/></svg><span class="jar-label">${j.label}</span>${jarNotes[i] ? '<span style="font-size:.5rem;color:var(--gold);margin-top:-4px">📝</span>' : ''}`;
        if (!isOpen) { item.style.animation = `heartFloat 2.8s ease-in-out infinite`; item.style.animationDelay = `${i * .3}s` };
        item.onclick = () => {
            if (opened.includes(i)) { showJarOverlay(j, i, jarNotes); return }
            const lid = item.querySelector('.jlid'); if (lid) lid.animate([{ opacity: 1, transform: 'translateY(0)' }, { opacity: 0, transform: 'translateY(-20px)' }], { duration: 400, fill: 'forwards' });
            item.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.08)' }, { transform: 'scale(.97)' }, { transform: 'scale(1)' }], { duration: 500, easing: 'ease-out' });
            item.style.animation = 'none'; const r = item.getBoundingClientRect(); fireEmojis(r.left + r.width / 2, r.top, randInt(3, 5));
            opened.push(i); localStorage.setItem('openedJars', JSON.stringify(opened)); updateStatus();
            setTimeout(() => showJarOverlay(j, i, jarNotes), 400);
            if (opened.length === 12) { setTimeout(() => { fireEmojis(innerWidth / 2, innerHeight / 2, 10, { wide: true }); const s = document.getElementById('jarStatus'); s.textContent = 'You found them all. Every single one. 🌸'; s.style.color = 'var(--rose)' }, 800) }
        };
        grid.appendChild(item)
    });
}

function showJarOverlay(j, idx, jarNotes) {
    document.getElementById('jarOvTitle').textContent = j.label;
    const ovText = document.getElementById('jarOvText');
    const existingNote = jarNotes[idx] || '';
    ovText.innerHTML = `<p style="margin-bottom:16px">${j.memory}</p>
<div style="border-top:1px solid var(--card-border);padding-top:14px;margin-top:8px">
<p style="font-family:var(--font-body);font-size:.72rem;color:var(--text-muted);margin-bottom:8px">Your note on this memory:</p>
<textarea id="jarNoteInput" style="width:100%;min-height:70px;background:rgba(253,248,240,.04);border:1px solid var(--card-border);border-radius:8px;font-family:var(--font-display);font-size:.9rem;color:var(--text-primary);padding:10px;resize:none;outline:none;line-height:1.6" placeholder="Write something here… this jar will keep it safe.">${existingNote}</textarea>
<button id="jarNoteSave" style="margin-top:8px;background:var(--btn-yes);border:none;border-radius:30px;padding:8px 22px;font-family:var(--font-body);font-size:.78rem;color:var(--text-primary);cursor:pointer;float:right">Save note 🌸</button>
</div>`;
    document.getElementById('jarNoteSave').onclick = () => {
        const txt = document.getElementById('jarNoteInput').value.trim();
        const notes = JSON.parse(localStorage.getItem('jarNotes') || '{}');
        if (txt) notes[idx] = txt; else delete notes[idx];
        localStorage.setItem('jarNotes', JSON.stringify(notes));
        fireEmojis(innerWidth / 2, innerHeight / 2, 3, { gentle: true });
        closeJarOverlay(); enterJars();
    };
    document.getElementById('jarOverlay').classList.add('show');
}
function closeJarOverlay() { document.getElementById('jarOverlay').classList.remove('show'); }

/* ===== ROOM: THE GARDEN (expanded with creatures, sky, nature) ===== */
let selectedGardenItem = null, gardenClearFirst = false;
function initRoomGarden() { }
function enterGarden() {
    const panel = document.getElementById('gardenPanel'); panel.innerHTML = '';
    const categories = [{ name: '🌺 Flowers', items: CONFIG.gardenItems.filter(i => i.type === 'flower') }, { name: '🐾 Creatures', items: CONFIG.gardenItems.filter(i => i.type === 'creature') }, { name: '✨ Sky', items: CONFIG.gardenItems.filter(i => i.type === 'sky') }, { name: '🌿 Nature', items: CONFIG.gardenItems.filter(i => i.type === 'nature') }];
    categories.forEach(cat => {
        const catLabel = document.createElement('div'); catLabel.style.cssText = 'font-family:var(--font-body);font-size:.65rem;color:var(--text-muted);width:100%;padding:4px 0 2px;font-weight:400;opacity:.7'; catLabel.textContent = cat.name; panel.appendChild(catLabel);
        cat.items.forEach(m => {
            const b = document.createElement('button'); b.className = 'mood-btn'; b.innerHTML = `<span class="mood-dot" style="background:${m.color}"></span>${m.label}`;
            b.onclick = () => { panel.querySelectorAll('.mood-btn').forEach(x => x.classList.remove('selected')); b.classList.add('selected'); selectedGardenItem = m }; panel.appendChild(b)
        });
    });
    const area = document.getElementById('gardenArea'); area.innerHTML = '';
    const saved = JSON.parse(localStorage.getItem('gardenFlowers') || '[]'); saved.forEach(f => { const m = CONFIG.gardenItems.find(g => g.id === f.moodId); if (m) placeGardenItem(area, f.x, f.y, m, false) });
    if (saved.length >= 5) spawnButterfly(area);
    area.onclick = e => {
        if (!selectedGardenItem) return; const r = area.getBoundingClientRect(); const x = e.clientX - r.left, y = e.clientY - r.top;
        placeGardenItem(area, x, y, selectedGardenItem, true);
        const flowers = JSON.parse(localStorage.getItem('gardenFlowers') || '[]'); flowers.push({ moodId: selectedGardenItem.id, x, y, plantedAt: Date.now() }); localStorage.setItem('gardenFlowers', JSON.stringify(flowers));
        if (flowers.length === 5) setTimeout(() => spawnButterfly(area), 1000)
    };
    const cl = document.getElementById('gardenClear'); gardenClearFirst = false; cl.textContent = 'Start fresh';
    cl.onclick = () => { if (!gardenClearFirst) { gardenClearFirst = true; cl.textContent = 'Sure? Click again.'; return } localStorage.removeItem('gardenFlowers'); area.innerHTML = ''; gardenClearFirst = false; cl.textContent = 'Start fresh' };
}

function placeGardenItem(area, x, y, item, animate) {
    const wrap = document.createElement('div'); wrap.style.cssText = `position:absolute;left:${x}px;top:${y}px;transform:translate(-50%,-100%);transform-origin:bottom center`;
    if (item.type === 'flower') { const sz = rand(36, 56), h = sz * 1.8; wrap.innerHTML = drawFlowerSVG(item.flowerType, item.color, sz, h) }
    else if (item.type === 'creature') { wrap.innerHTML = drawCreatureSVG(item.id, item.color); wrap.style.transform = 'translate(-50%,-50%)' }
    else if (item.type === 'sky') { wrap.innerHTML = drawSkySVG(item.id, item.color); wrap.style.transform = 'translate(-50%,-50%)' }
    else if (item.type === 'nature') { wrap.innerHTML = drawNatureSVG(item.id, item.color); wrap.style.transform = 'translate(-50%,-100%)' }
    if (animate) {
        wrap.style.opacity = '0'; requestAnimationFrame(() => { wrap.style.transition = 'opacity .6s ease, transform .9s cubic-bezier(.34,1.56,.64,1)'; wrap.style.opacity = '1' });
        const msg = document.createElement('div'); msg.style.cssText = `position:absolute;bottom:100%;left:50%;transform:translateX(-50%);background:rgba(20,14,32,.85);border:1px solid var(--card-border);border-radius:12px;padding:8px 14px;font-family:var(--font-body);font-size:.72rem;color:var(--text-soft);white-space:nowrap;pointer-events:none;opacity:0;z-index:10`; msg.textContent = item.message; wrap.appendChild(msg);
        setTimeout(() => msg.animate([{ opacity: 0, transform: 'translateX(-50%) translateY(0)' }, { opacity: 1, transform: 'translateX(-50%) translateY(-4px)' }], { duration: 500, fill: 'forwards' }), 400);
        setTimeout(() => msg.animate([{ opacity: 1, transform: 'translateX(-50%) translateY(-4px)' }, { opacity: 0, transform: 'translateX(-50%) translateY(-20px)' }], { duration: 600, fill: 'forwards' }), 3000);
        setTimeout(() => msg.remove(), 3700); fireEmojis(x, y - 20, 3, { gentle: true })
    }
    if (item.type === 'creature') wrap.style.animation = 'creatureBob 2s ease-in-out infinite';
    else if (item.type === 'sky') wrap.style.animation = 'skyFloat 4s ease-in-out infinite';
    else wrap.style.animation = 'flowerSway 3s ease-in-out infinite';
    area.appendChild(wrap);
}

function drawCreatureSVG(id, color) {
    const s = 44;
    switch (id) {
        case 'rabbit': return `<svg width="${s}" height="${s}" viewBox="0 0 44 44"><ellipse cx="22" cy="30" rx="10" ry="8" fill="${color}"/><ellipse cx="22" cy="20" rx="8" ry="8" fill="${color}"/><ellipse cx="17" cy="8" rx="3" ry="10" fill="${color}" opacity=".9"/><ellipse cx="27" cy="8" rx="3" ry="10" fill="${color}" opacity=".9"/><ellipse cx="17" cy="6" rx="2" ry="7" fill="#f8d0d8" opacity=".5"/><ellipse cx="27" cy="6" rx="2" ry="7" fill="#f8d0d8" opacity=".5"/><circle cx="19" cy="19" r="1.5" fill="#402030"/><circle cx="25" cy="19" r="1.5" fill="#402030"/><ellipse cx="22" cy="22" rx="1.5" ry="1" fill="#e890b0"/><path d="M18 23C20 25 24 25 26 23" stroke="#402030" stroke-width=".6" fill="none"/><ellipse cx="30" cy="34" rx="4" ry="3" fill="white" opacity=".6"/></svg>`;
        case 'dog': return `<svg width="${s}" height="${s}" viewBox="0 0 44 44"><ellipse cx="22" cy="30" rx="11" ry="9" fill="${color}"/><ellipse cx="22" cy="18" rx="9" ry="9" fill="${color}"/><ellipse cx="12" cy="12" rx="5" ry="7" fill="${color}" transform="rotate(-15,12,12)"/><ellipse cx="32" cy="12" rx="5" ry="7" fill="${color}" transform="rotate(15,32,12)"/><circle cx="18" cy="17" r="2" fill="#402030"/><circle cx="26" cy="17" r="2" fill="#402030"/><ellipse cx="22" cy="21" rx="3" ry="2" fill="#302020"/><path d="M19 23C20 25 24 25 25 23" stroke="#402030" stroke-width=".6" fill="none"/><line x1="22" y1="36" x2="22" y2="42" stroke="${color}" stroke-width="2" stroke-linecap="round"/></svg>`;
        case 'cat': return `<svg width="${s}" height="${s}" viewBox="0 0 44 44"><ellipse cx="22" cy="30" rx="10" ry="8" fill="${color}"/><ellipse cx="22" cy="18" rx="9" ry="8" fill="${color}"/><polygon points="12,14 14,4 18,14" fill="${color}"/><polygon points="32,14 30,4 26,14" fill="${color}"/><polygon points="13,12 14.5,5 17,12" fill="#f8d0d8" opacity=".4"/><polygon points="31,12 29.5,5 27,12" fill="#f8d0d8" opacity=".4"/><circle cx="18" cy="17" r="1.5" fill="#50e880" opacity=".8"/><circle cx="26" cy="17" r="1.5" fill="#50e880" opacity=".8"/><ellipse cx="22" cy="20" rx="1" ry=".8" fill="#e890b0"/><path d="M14 20L8 18M14 21L8 22M30 20L36 18M30 21L36 22" stroke="${color}" stroke-width=".5" opacity=".5"/></svg>`;
        case 'butterfly': return `<svg width="${s}" height="${s}" viewBox="0 0 44 44"><ellipse cx="14" cy="18" rx="8" ry="10" fill="${color}" opacity=".7"/><ellipse cx="30" cy="18" rx="8" ry="10" fill="${color}" opacity=".7"/><ellipse cx="14" cy="28" rx="6" ry="7" fill="${color}" opacity=".5"/><ellipse cx="30" cy="28" rx="6" ry="7" fill="${color}" opacity=".5"/><line x1="22" y1="10" x2="22" y2="36" stroke="#604880" stroke-width="1.5"/><circle cx="22" cy="10" r="2" fill="#604880"/></svg>`;
        case 'bird': return `<svg width="${s}" height="${s}" viewBox="0 0 44 44"><ellipse cx="22" cy="26" rx="10" ry="8" fill="${color}"/><circle cx="22" cy="18" r="7" fill="${color}"/><circle cx="19" cy="17" r="1.2" fill="#402030"/><polygon points="28,18 36,16 28,20" fill="#e0b060"/><path d="M14 28C8 32 10 38 14 36" stroke="${color}" stroke-width="1.5" fill="none"/><path d="M30 28C36 32 34 38 30 36" stroke="${color}" stroke-width="1.5" fill="none"/></svg>`
    }
    return `<div style="font-size:2rem">${id === 'rabbit' ? '🐰' : id === 'dog' ? '🐕' : id === 'cat' ? '🐱' : id === 'butterfly' ? '🦋' : '🐦'}</div>`;
}

function drawSkySVG(id, color) {
    const s = 40;
    switch (id) {
        case 'star': return `<svg width="${s}" height="${s}" viewBox="0 0 40 40"><polygon points="20,2 24,14 38,14 27,22 31,36 20,28 9,36 13,22 2,14 16,14" fill="${color}" opacity=".85"/></svg>`;
        case 'moon': return `<svg width="${s}" height="${s}" viewBox="0 0 40 40"><path d="M28 6A16 16 0 1028 34 13 13 0 0028 6Z" fill="${color}" opacity=".8"/></svg>`;
        case 'cloud': return `<svg width="52" height="32" viewBox="0 0 52 32"><ellipse cx="20" cy="20" rx="14" ry="10" fill="${color}" opacity=".5"/><ellipse cx="34" cy="18" rx="12" ry="9" fill="${color}" opacity=".4"/><ellipse cx="26" cy="14" rx="10" ry="8" fill="${color}" opacity=".6"/></svg>`
    }
    return `<div style="font-size:2rem">✨</div>`;
}

function drawNatureSVG(id, color) {
    switch (id) {
        case 'mushroom': return `<svg width="30" height="40" viewBox="0 0 30 40"><rect x="12" y="22" width="6" height="16" rx="2" fill="#e8d8c8"/><ellipse cx="15" cy="22" rx="13" ry="10" fill="${color}"/><circle cx="10" cy="18" r="2" fill="white" opacity=".5"/><circle cx="18" cy="15" r="1.5" fill="white" opacity=".4"/></svg>`;
        case 'grass': return `<svg width="40" height="36" viewBox="0 0 40 36"><path d="M8 36C8 36 6 18 10 10" stroke="${color}" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M16 36C16 36 14 14 20 6" stroke="${color}" stroke-width="2.5" fill="none" stroke-linecap="round"/><path d="M24 36C24 36 26 16 22 8" stroke="${color}" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M32 36C32 36 30 20 34 14" stroke="${color}" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>`;
        case 'tree': return `<svg width="44" height="64" viewBox="0 0 44 64"><rect x="19" y="38" width="6" height="24" rx="2" fill="#8B6914"/><ellipse cx="22" cy="24" rx="18" ry="22" fill="${color}" opacity=".85"/><ellipse cx="16" cy="20" rx="6" ry="8" fill="${color}" opacity=".4"/></svg>`;
        case 'rock': return `<svg width="36" height="28" viewBox="0 0 36 28"><ellipse cx="18" cy="20" rx="16" ry="8" fill="${color}"/><ellipse cx="18" cy="18" rx="14" ry="10" fill="#b8b0b0"/><ellipse cx="14" cy="16" rx="4" ry="3" fill="white" opacity=".1"/></svg>`
    }
    return `<div style="font-size:1.6rem">🌿</div>`;
}

function drawFlowerSVG(type, color, w, h) {
    const stem = `<line x1="${w / 2}" y1="${h}" x2="${w / 2}" y2="${h * .35}" stroke="#4a8060" stroke-width="2"/>`;
    const lf = `<path d="M${w / 2} ${h * .6} Q${w / 2 - 10} ${h * .5} ${w / 2 - 6} ${h * .55}" stroke="#5a9870" stroke-width="1.2" fill="none"/>`;
    let petals = ''; const cx = w / 2, cy = h * .3;
    switch (type) {
        case 'sunflower': for (let i = 0; i < 8; i++) { const a = Math.PI * 2 / 8 * i; petals += `<ellipse cx="${cx + Math.cos(a) * 10}" cy="${cy + Math.sin(a) * 10}" rx="6" ry="3" transform="rotate(${a * 180 / Math.PI + 90},${cx + Math.cos(a) * 10},${cy + Math.sin(a) * 10})" fill="${color}" opacity=".85"/>` } petals += `<circle cx="${cx}" cy="${cy}" r="5" fill="#8B6914"/>`; break;
        case 'rose': for (let i = 0; i < 5; i++) { const a = Math.PI * 2 / 5 * i; petals += `<ellipse cx="${cx + Math.cos(a) * 7}" cy="${cy + Math.sin(a) * 7}" rx="7" ry="5" transform="rotate(${a * 180 / Math.PI + 45},${cx + Math.cos(a) * 7},${cy + Math.sin(a) * 7})" fill="${color}" opacity=".8"/>` } petals += `<circle cx="${cx}" cy="${cy}" r="4" fill="${color}"/>`; break;
        case 'tulip': petals = `<ellipse cx="${cx - 5}" cy="${cy}" rx="6" ry="11" fill="${color}" opacity=".85"/><ellipse cx="${cx + 5}" cy="${cy}" rx="6" ry="11" fill="${color}" opacity=".85"/><ellipse cx="${cx}" cy="${cy - 2}" rx="5" ry="10" fill="${color}"/>`; break;
        case 'lily': for (let i = 0; i < 6; i++) { const a = Math.PI * 2 / 6 * i; petals += `<ellipse cx="${cx + Math.cos(a) * 8}" cy="${cy + Math.sin(a) * 8}" rx="5" ry="9" transform="rotate(${a * 180 / Math.PI + 90},${cx + Math.cos(a) * 8},${cy + Math.sin(a) * 8})" fill="${color}" opacity=".7"/>` } break;
        case 'daisy': for (let i = 0; i < 10; i++) { const a = Math.PI * 2 / 10 * i; petals += `<ellipse cx="${cx + Math.cos(a) * 9}" cy="${cy + Math.sin(a) * 9}" rx="3" ry="7" transform="rotate(${a * 180 / Math.PI + 90},${cx + Math.cos(a) * 9},${cy + Math.sin(a) * 9})" fill="${color}" opacity=".8"/>` } petals += `<circle cx="${cx}" cy="${cy}" r="4" fill="#e0b060"/>`; break;
        case 'bluebell': for (let i = 0; i < 3; i++)petals += `<ellipse cx="${cx}" cy="${cy + i * 8}" rx="6" ry="5" fill="${color}" opacity=".75"/>`; break;
        case 'lavender': for (let i = 0; i < 5; i++)petals += `<ellipse cx="${cx}" cy="${cy - 4 + i * 5}" rx="3.5" ry="3" fill="${color}" opacity=".7"/>`; break;
        case 'daffodil': for (let i = 0; i < 6; i++) { const a = Math.PI * 2 / 6 * i; petals += `<ellipse cx="${cx + Math.cos(a) * 9}" cy="${cy + Math.sin(a) * 9}" rx="5" ry="8" transform="rotate(${a * 180 / Math.PI + 90},${cx + Math.cos(a) * 9},${cy + Math.sin(a) * 9})" fill="${color}" opacity=".85"/>` } petals += `<circle cx="${cx}" cy="${cy}" r="5" fill="#f0c840"/>`; break;
        default: petals = `<circle cx="${cx}" cy="${cy}" r="8" fill="${color}"/>`
    }
    return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" style="overflow:visible">${stem}${lf}${petals}</svg>`;
}

function spawnButterfly(area) {
    const bf = document.createElement('div'); bf.style.cssText = 'position:absolute;pointer-events:none;z-index:4;animation:bflyPath 12s ease-in-out infinite';
    bf.innerHTML = `<svg width="24" height="16" viewBox="0 0 24 16"><ellipse cx="6" cy="6" rx="5" ry="6" fill="var(--lavender)" opacity=".6"/><ellipse cx="18" cy="6" rx="5" ry="6" fill="var(--lavender)" opacity=".6"/><ellipse cx="6" cy="10" rx="4" ry="4" fill="var(--lavender)" opacity=".4"/><ellipse cx="18" cy="10" rx="4" ry="4" fill="var(--lavender)" opacity=".4"/><line x1="12" y1="2" x2="12" y2="14" stroke="var(--text-muted)" stroke-width=".5"/></svg>`;
    const style = document.createElement('style'); style.textContent = `@keyframes bflyPath{0%{left:20%;top:30%}25%{left:60%;top:20%}50%{left:70%;top:45%}75%{left:35%;top:35%}100%{left:20%;top:30%}}@keyframes flowerSway{0%,100%{transform:translate(-50%,-100%) rotate(0deg)}50%{transform:translate(-50%,-100%) rotate(2.5deg)}}@keyframes creatureBob{0%,100%{transform:translate(-50%,-50%) translateY(0)}50%{transform:translate(-50%,-50%) translateY(-6px)}}@keyframes skyFloat{0%,100%{transform:translate(-50%,-50%) translateY(0) scale(1)}50%{transform:translate(-50%,-50%) translateY(-10px) scale(1.05)}}`;
    if (!document.getElementById('gardenStyles')) { style.id = 'gardenStyles'; document.head.appendChild(style) }
    area.appendChild(bf);
}

/* ===== ROOM: DRAWING STUDIO (full canvas with tools) ===== */
let drawTool = 'pen', drawColor = 'rgba(224,176,96,.9)', drawSize = 3, isDrawing = false, lastPt = null, drawHistory = [], shapeStart = null;
function initRoomStars() { }
function enterStars() {
    const c = document.getElementById('starCanvas'), x = c.getContext('2d'); c.width = innerWidth; c.height = innerHeight;
    drawHistory = JSON.parse(localStorage.getItem('drawingData') || '[]');

    // Build toolbar
    let tb = document.getElementById('drawToolbar'); if (tb) tb.remove();
    tb = document.createElement('div'); tb.id = 'drawToolbar';
    tb.style.cssText = 'position:fixed;top:14px;left:50%;transform:translateX(-50%);z-index:55;display:flex;gap:6px;align-items:center;background:rgba(10,8,24,.85);border:1px solid var(--card-border);border-radius:30px;padding:6px 14px;backdrop-filter:blur(6px);font-family:var(--font-body);font-size:.72rem;color:var(--text-soft)';

    const tools = [{ id: 'pen', label: '✏️ Pen' }, { id: 'highlighter', label: '🖍 Highlight' }, { id: 'line', label: '📏 Line' }, { id: 'circle', label: '⭕ Circle' }, { id: 'rect', label: '▪️ Rect' }, { id: 'star', label: '⭐ Star' }, { id: 'eraser', label: '🧹 Eraser' }];
    const colors = ['rgba(224,176,96,.9)', 'rgba(232,144,176,.9)', 'rgba(192,168,232,.9)', 'rgba(144,216,184,.9)', 'rgba(255,255,255,.9)', 'rgba(240,200,152,.9)'];
    const sizes = [{ s: 2, label: 'S' }, { s: 4, label: 'M' }, { s: 8, label: 'L' }, { s: 14, label: 'XL' }];

    tools.forEach(t => {
        const b = document.createElement('button'); b.textContent = t.label;
        b.style.cssText = `background:${t.id === drawTool ? 'rgba(224,176,96,.2)' : 'transparent'};border:1px solid ${t.id === drawTool ? 'var(--gold)' : 'transparent'};border-radius:20px;padding:4px 10px;color:var(--text-soft);cursor:pointer;font-size:.7rem;transition:all .2s`;
        b.onclick = () => { drawTool = t.id; tb.querySelectorAll('button[data-type="tool"]').forEach(btn => { btn.style.background = 'transparent'; btn.style.borderColor = 'transparent' }); b.style.background = 'rgba(224,176,96,.2)'; b.style.borderColor = 'var(--gold)' };
        b.dataset.type = 'tool'; tb.appendChild(b)
    });

    const sep = document.createElement('span'); sep.textContent = '|'; sep.style.cssText = 'color:var(--text-muted);opacity:.3;margin:0 4px'; tb.appendChild(sep);

    colors.forEach(col => {
        const d = document.createElement('div'); d.style.cssText = `width:16px;height:16px;border-radius:50%;background:${col};cursor:pointer;border:2px solid ${col === drawColor ? 'white' : 'transparent'};transition:border .2s`;
        d.onclick = () => { drawColor = col; tb.querySelectorAll('div[data-type="color"]').forEach(dd => { dd.style.borderColor = 'transparent' }); d.style.borderColor = 'white' };
        d.dataset.type = 'color'; tb.appendChild(d)
    });

    const sep2 = document.createElement('span'); sep2.textContent = '|'; sep2.style.cssText = 'color:var(--text-muted);opacity:.3;margin:0 4px'; tb.appendChild(sep2);

    sizes.forEach(sz => {
        const b = document.createElement('button'); b.textContent = sz.label;
        b.style.cssText = `background:${sz.s === drawSize ? 'rgba(224,176,96,.2)' : 'transparent'};border:1px solid ${sz.s === drawSize ? 'var(--gold)' : 'transparent'};border-radius:12px;padding:2px 8px;color:var(--text-soft);cursor:pointer;font-size:.65rem;transition:all .2s`;
        b.onclick = () => { drawSize = sz.s; tb.querySelectorAll('button[data-type="size"]').forEach(btn => { btn.style.background = 'transparent'; btn.style.borderColor = 'transparent' }); b.style.background = 'rgba(224,176,96,.2)'; b.style.borderColor = 'var(--gold)' };
        b.dataset.type = 'size'; tb.appendChild(b)
    });

    const sep3 = document.createElement('span'); sep3.textContent = '|'; sep3.style.cssText = 'color:var(--text-muted);opacity:.3;margin:0 4px'; tb.appendChild(sep3);

    const undoBtn = document.createElement('button'); undoBtn.textContent = '↩ Undo'; undoBtn.style.cssText = 'background:transparent;border:1px solid transparent;border-radius:12px;padding:2px 8px;color:var(--text-soft);cursor:pointer;font-size:.65rem';
    undoBtn.onclick = () => { drawHistory.pop(); localStorage.setItem('drawingData', JSON.stringify(drawHistory)); redrawCanvas(c, x) }; tb.appendChild(undoBtn);

    const clearBtn = document.createElement('button'); clearBtn.textContent = '🗑 Clear'; clearBtn.style.cssText = 'background:transparent;border:1px solid transparent;border-radius:12px;padding:2px 8px;color:var(--text-soft);cursor:pointer;font-size:.65rem';
    clearBtn.onclick = () => { drawHistory = []; localStorage.removeItem('drawingData'); redrawCanvas(c, x) }; tb.appendChild(clearBtn);

    document.body.appendChild(tb);

    // Draw background + saved strokes
    redrawCanvas(c, x);

    // Canvas events
    c.onmousedown = c.ontouchstart = e => {
        e.preventDefault(); const p = getCanvasPoint(e, c); isDrawing = true; lastPt = p;
        if (['line', 'circle', 'rect', 'star'].includes(drawTool)) shapeStart = p;
        else { drawHistory.push({ tool: drawTool, color: drawColor, size: drawSize, points: [p] }); redrawCanvas(c, x) }
    };

    c.onmousemove = c.ontouchmove = e => {
        if (!isDrawing) return; e.preventDefault(); const p = getCanvasPoint(e, c);
        if (['pen', 'highlighter', 'eraser'].includes(drawTool)) { const cur = drawHistory[drawHistory.length - 1]; if (cur) cur.points.push(p); redrawCanvas(c, x) }
        else if (shapeStart) { redrawCanvas(c, x); drawShapePreview(x, shapeStart, p) }
        lastPt = p
    };

    c.onmouseup = c.ontouchend = e => {
        if (!isDrawing) return; isDrawing = false;
        if (shapeStart && lastPt) { drawHistory.push({ tool: drawTool, color: drawColor, size: drawSize, start: shapeStart, end: lastPt }); shapeStart = null; redrawCanvas(c, x) }
        localStorage.setItem('drawingData', JSON.stringify(drawHistory))
    };
}

function getCanvasPoint(e, c) { const r = c.getBoundingClientRect(); const t = e.touches ? e.touches[0] || e.changedTouches[0] : e; return { x: t.clientX - r.left, y: t.clientY - r.top }; }

function redrawCanvas(c, x) {
    x.clearRect(0, 0, c.width, c.height); x.fillStyle = '#06040e'; x.fillRect(0, 0, c.width, c.height);
    // Background stars
    const starSeed = 42; let sr = starSeed; function seededRand() { sr = (sr * 16807) % 2147483647; return (sr - 1) / 2147483646 }
    for (let i = 0; i < 200; i++) { x.beginPath(); x.arc(seededRand() * c.width, seededRand() * c.height, seededRand() * 1.5 + .5, 0, Math.PI * 2); x.fillStyle = `rgba(255,255,255,${seededRand() * .5 + .1})`; x.fill() }
    // Preset constellations
    CONFIG.presetConstellations.forEach(cn => {
        cn.stars.forEach((s, i) => {
            const sx = s.x * c.width, sy = s.y * c.height; x.beginPath(); x.arc(sx, sy, 4, 0, Math.PI * 2); x.fillStyle = 'rgba(255,255,255,.9)'; x.shadowColor = 'rgba(192,168,232,.6)'; x.shadowBlur = 12; x.fill(); x.shadowBlur = 0;
            if (i > 0) { const ps = cn.stars[i - 1]; x.beginPath(); x.moveTo(ps.x * c.width, ps.y * c.height); x.lineTo(sx, sy); x.strokeStyle = 'rgba(192,168,232,.4)'; x.lineWidth = 1; x.stroke() }
        });
        const ls = cn.stars[cn.stars.length - 1]; x.font = 'italic 11px Cormorant Garamond'; x.fillStyle = 'rgba(192,168,232,.5)'; x.fillText(cn.name, ls.x * c.width + 8, ls.y * c.height - 8)
    });

    // User drawings
    drawHistory.forEach(stroke => {
        if (stroke.points) {// freeform
            x.beginPath(); x.lineJoin = 'round'; x.lineCap = 'round';
            if (stroke.tool === 'eraser') { x.globalCompositeOperation = 'destination-out'; x.strokeStyle = 'rgba(0,0,0,1)'; x.lineWidth = stroke.size * 4 }
            else if (stroke.tool === 'highlighter') { x.globalCompositeOperation = 'source-over'; x.strokeStyle = stroke.color.replace(/[\d.]+\)$/, '0.3)'); x.lineWidth = stroke.size * 3 }
            else { x.globalCompositeOperation = 'source-over'; x.strokeStyle = stroke.color; x.lineWidth = stroke.size }
            stroke.points.forEach((p, i) => { if (i === 0) x.moveTo(p.x, p.y); else x.lineTo(p.x, p.y) }); x.stroke(); x.globalCompositeOperation = 'source-over'
        }
        else if (stroke.start && stroke.end) {// shape
            x.strokeStyle = stroke.color; x.lineWidth = stroke.size; x.fillStyle = stroke.color.replace(/[\d.]+\)$/, '0.15)');
            drawShape(x, stroke.tool, stroke.start, stroke.end, true)
        }
    });
}

function drawShapePreview(x, start, end) {
    x.strokeStyle = drawColor; x.lineWidth = drawSize; x.setLineDash([4, 4]);
    drawShape(x, drawTool, start, end, false); x.setLineDash([]);
}

function drawShape(x, tool, s, e, fill) {
    const cx = (s.x + e.x) / 2, cy = (s.y + e.y) / 2, w = Math.abs(e.x - s.x), h = Math.abs(e.y - s.y);
    switch (tool) {
        case 'line': x.beginPath(); x.moveTo(s.x, s.y); x.lineTo(e.x, e.y); x.stroke(); break;
        case 'circle': x.beginPath(); x.ellipse(cx, cy, w / 2, h / 2, 0, 0, Math.PI * 2); x.stroke(); if (fill) x.fill(); break;
        case 'rect': x.beginPath(); x.rect(Math.min(s.x, e.x), Math.min(s.y, e.y), w, h); x.stroke(); if (fill) x.fill(); break;
        case 'star': const r = Math.max(w, h) / 2, pts = 5; x.beginPath(); for (let i = 0; i < pts * 2; i++) { const a = Math.PI / pts * i - Math.PI / 2, rad = i % 2 === 0 ? r : r * .4; x.lineTo(cx + Math.cos(a) * rad, cy + Math.sin(a) * rad) } x.closePath(); x.stroke(); if (fill) x.fill(); break
    }
}

/* ===== ROOM: SANCTUARY ===== */
function initRoomSanctuary() { }
function enterSanctuary() {
    const lock = document.getElementById('sancLock'), journal = document.getElementById('sancJournal');
    if (sessionStorage.getItem('sanctuaryUnlocked') === '1') { lock.style.display = 'none'; journal.style.display = 'flex'; buildJournal(); return }
    lock.style.display = 'flex'; journal.style.display = 'none';
    document.getElementById('sancGo').onclick = () => { const inp = document.getElementById('sancInput'); if (inp.value.trim().toLowerCase() === CONFIG.secretWord.toLowerCase()) { sessionStorage.setItem('sanctuaryUnlocked', '1'); lock.animate([{ opacity: 1, transform: 'scale(1)' }, { opacity: 0, transform: 'scale(1.08)' }], { duration: 400, fill: 'forwards' }); setTimeout(() => { lock.style.display = 'none'; journal.style.display = 'flex'; buildJournal() }, 420) } else { const err = document.getElementById('sancErr'); err.textContent = 'Not quite…'; err.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 300, fill: 'forwards' }); inp.classList.add('waggle'); setTimeout(() => inp.classList.remove('waggle'), 400) } };
}

function buildJournal() {
    const j = document.getElementById('sancJournal'); j.innerHTML = '';
    const tabs = document.createElement('div'); tabs.className = 'tabs';['Write', 'My Entries', 'A Letter For You'].forEach((t, i) => { const b = document.createElement('button'); b.className = `tab${i === 0 ? ' active' : ''}`; b.textContent = t; b.onclick = () => { tabs.querySelectorAll('.tab').forEach(x => x.classList.remove('active')); b.classList.add('active'); showTab(i) }; tabs.appendChild(b) }); j.appendChild(tabs);
    const content = document.createElement('div'); content.id = 'sancContent'; j.appendChild(content); showTab(0);
    function showTab(idx) {
        const c = document.getElementById('sancContent'); c.innerHTML = '';
        if (idx === 0) {
            const ta = document.createElement('textarea'); ta.className = 'journal-area'; ta.placeholder = `What's on your mind today, ${CONFIG.name}?`; c.appendChild(ta);
            const btn = document.createElement('button'); btn.className = 'btn btn-y'; btn.style.cssText = 'align-self:flex-end;margin-top:8px;padding:10px 28px'; btn.textContent = 'Save Entry'; btn.onclick = () => { const txt = ta.value.trim(); if (!txt) return; const entries = JSON.parse(localStorage.getItem('sanctuary_entries') || '[]'); entries.unshift({ text: txt, date: new Date().toISOString() }); localStorage.setItem('sanctuary_entries', JSON.stringify(entries)); ta.value = ''; fireEmojis(innerWidth / 2, innerHeight / 2, 4, { gentle: true }); showTab(0) }; c.appendChild(btn)
        }
        else if (idx === 1) {
            const entries = JSON.parse(localStorage.getItem('sanctuary_entries') || '[]'); if (!entries.length) { c.innerHTML = `<p style="font-family:var(--font-display);font-style:italic;color:var(--text-muted);text-align:center;margin-top:40px">Nothing yet. This space is patient.</p>`; return }
            const list = document.createElement('div'); list.className = 'entry-list'; entries.forEach((e, i) => {
                const item = document.createElement('article'); item.className = 'entry-item'; item.style.animation = `lineRise .5s var(--ease-out) both`; item.style.animationDelay = `${i * .08}s`;
                const d = new Date(e.date); item.innerHTML = `<p class="entry-date">${d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} · ${d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}</p><p class="entry-text">${e.text}</p><button class="entry-del" data-idx="${i}">×</button>`;
                item.querySelector('.entry-del').onclick = function () { if (this.textContent === '×') { this.textContent = 'Delete?'; return } entries.splice(i, 1); localStorage.setItem('sanctuary_entries', JSON.stringify(entries)); showTab(1) };
                list.appendChild(item)
            }); c.appendChild(list)
        }
        else { CONFIG.sanctuaryLetters.forEach(l => { const item = document.createElement('div'); item.className = 'letter-item'; item.innerHTML = `<p class="letter-from">From: ${l.from}</p><p class="letter-body">${l.text}</p>`; c.appendChild(item) }) }
    }
}

/* ===== ROOM: DAILY WISDOM (Philosopher Quotes) ===== */
function initRoomFortune() { }
function enterFortune() {
    const today = new Date().toDateString(); const seen = localStorage.getItem('lastFortuneDate') === today;
    const seenEl = document.getElementById('fortuneSeen'); if (seen) { seenEl.textContent = 'You already read today\'s wisdom. (but here it is again)'; seenEl.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500, fill: 'forwards' }) } else seenEl.style.opacity = '0';
    const idx = (new Date().getDate() - 1) % CONFIG.dailyFortunes.length;
    const fortune = CONFIG.dailyFortunes[idx];
    document.getElementById('fDate').textContent = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
    document.getElementById('fText').innerHTML = `<span style="display:block;margin-bottom:12px">"${fortune.quote}"</span><span style="display:block;font-family:var(--font-body);font-size:.75rem;font-weight:300;color:var(--text-muted);font-style:normal">— ${fortune.author}</span>`;
    const inner = document.getElementById('fortuneInner'); inner.classList.remove('flipped');
    setTimeout(() => {
        inner.classList.add('flipped'); localStorage.setItem('lastFortuneDate', today);
        setTimeout(() => { fireEmojis(innerWidth / 2, innerHeight / 2 - 80, 3, { gentle: true, slow: true }); document.getElementById('fortuneSub').animate([{ opacity: 0 }, { opacity: 1 }], { duration: 800, fill: 'forwards' }) }, 700)
    }, 600);
}

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
    const hasVisited = localStorage.getItem('hasVisited') === 'true';
    initGrainCanvas(); initParticleCanvas(); initCursorTrail();
    if (!hasVisited) { initHeart(); initScene2(); initScene3(); initScene4(); initScene5(); initScene6(); SceneManager.transitionTo('scene-1') }
    else { document.querySelectorAll('.birthday-journey').forEach(s => s.style.display = 'none'); SceneManager.transitionTo('scene-hub', { onEnter: initHub }) }
    initRoomJars(); initRoomGarden(); initRoomStars(); initRoomSanctuary(); initRoomFortune();
});
