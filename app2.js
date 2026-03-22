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
