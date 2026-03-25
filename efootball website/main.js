document.addEventListener('DOMContentLoaded', () => {

    // --- MOCK DATABASE ---
    const MOCK_DB = [
        { id: 1, name: "L. MESSI", pos: "SS", rating: 105, type: "EPIC: BIG TIME", stats: { sht: 96, pas: 92, dri: 99, def: 45, spd: 88, phy: 70 } },
        { id: 2, name: "K. MBAPPÉ", pos: "CF", rating: 101, type: "POTW", stats: { sht: 92, pas: 80, dri: 95, def: 40, spd: 99, phy: 80 } },
        { id: 3, name: "RONALDINHO G.", pos: "AMF", rating: 103, type: "EPIC", stats: { sht: 88, pas: 95, dri: 99, def: 50, spd: 87, phy: 75 } },
        { id: 4, name: "W. SALIBA", pos: "CB", rating: 100, type: "POTW", stats: { sht: 55, pas: 75, dri: 70, def: 98, spd: 85, phy: 93 } },
        { id: 5, name: "M. SALAH", pos: "RWF", rating: 102, type: "SHOWTIME", stats: { sht: 94, pas: 82, dri: 92, def: 55, spd: 96, phy: 78 } },
        { id: 6, name: "J. BELLINGHAM", pos: "AMF", rating: 99, type: "STANDARD", stats: { sht: 85, pas: 90, dri: 89, def: 75, spd: 84, phy: 88 } },
        { id: 7, name: "R. LEAO", pos: "LWF", rating: 100, type: "POTW", stats: { sht: 87, pas: 78, dri: 96, def: 45, spd: 97, phy: 85 } },
        { id: 8, name: "RODRI", pos: "DMF", rating: 101, type: "SHOWTIME", stats: { sht: 80, pas: 96, dri: 85, def: 92, spd: 74, phy: 93 } },
        { id: 9, name: "T. HERNÁNDEZ", pos: "LB", rating: 98, type: "EPIC", stats: { sht: 75, pas: 82, dri: 88, def: 85, spd: 98, phy: 86 } },
        { id: 10, name: "T. COURTOIS", pos: "GK", rating: 100, type: "STANDARD", stats: { sht: 40, pas: 70, dri: 50, def: 99, spd: 60, phy: 95 } },
        { id: 11, name: "K. DE BRUYNE", pos: "CMF", rating: 101, type: "SHOWTIME", stats: { sht: 88, pas: 99, dri: 87, def: 65, spd: 76, phy: 80 } },
        { id: 12, name: "VIRGIL", pos: "CB", rating: 99, type: "EPIC", stats: { sht: 60, pas: 78, dri: 72, def: 97, spd: 80, phy: 96 } },
        { id: 13, name: "K. WALKER", pos: "RB", rating: 97, type: "STANDARD", stats: { sht: 65, pas: 75, dri: 80, def: 88, spd: 99, phy: 85 } },
        { id: 14, name: "E. HAALAND", pos: "CF", rating: 101, type: "STANDARD", stats: { sht: 95, pas: 70, dri: 80, def: 40, spd: 92, phy: 95 } },
        { id: 15, name: "V. JUNIOR", pos: "LWF", rating: 102, type: "POTW", stats: { sht: 88, pas: 82, dri: 98, def: 45, spd: 99, phy: 75 } },
        { id: 16, name: "P. FODEN", pos: "RWF", rating: 100, type: "SHOWTIME", stats: { sht: 86, pas: 90, dri: 94, def: 50, spd: 88, phy: 70 } },
        { id: 17, name: "B. SAKA", pos: "RWF", rating: 99, type: "STANDARD", stats: { sht: 85, pas: 85, dri: 92, def: 60, spd: 90, phy: 76 } },
        { id: 18, name: "D. RICE", pos: "DMF", rating: 99, type: "POTW", stats: { sht: 75, pas: 92, dri: 80, def: 95, spd: 82, phy: 90 } },
        { id: 19, name: "M. TER STEGEN", pos: "GK", rating: 98, type: "STANDARD", stats: { sht: 40, pas: 80, dri: 50, def: 98, spd: 60, phy: 80 } },
        { id: 20, name: "A. DAVIES", pos: "LB", rating: 97, type: "POTW", stats: { sht: 70, pas: 78, dri: 88, def: 75, spd: 99, phy: 82 } },
        { id: 21, name: "R. DIAS", pos: "CB", rating: 99, type: "STANDARD", stats: { sht: 50, pas: 75, dri: 60, def: 98, spd: 75, phy: 96 } },
        { id: 22, name: "J. MUSIALA", pos: "AMF", rating: 100, type: "SHOWTIME", stats: { sht: 84, pas: 89, dri: 98, def: 55, spd: 88, phy: 72 } },
        { id: 23, name: "F. VALVERDE", pos: "CMF", rating: 99, type: "POTW", stats: { sht: 88, pas: 90, dri: 86, def: 82, spd: 94, phy: 88 } },
        { id: 24, name: "A. GRIEZMANN", pos: "SS", rating: 98, type: "STANDARD", stats: { sht: 89, pas: 92, dri: 90, def: 65, spd: 80, phy: 75 } },
        { id: 25, name: "M. ØDEGAARD", pos: "AMF", rating: 98, type: "POTW", stats: { sht: 82, pas: 95, dri: 92, def: 60, spd: 78, phy: 70 } },
        { id: 26, name: "H. KANE", pos: "CF", rating: 99, type: "STANDARD", stats: {"sht":88,"pas":77,"dri":87,"def":40,"spd":84,"phy":74} },
        { id: 27, name: "F. WIRTZ", pos: "AMF", rating: 98, type: "STANDARD", stats: {"sht":86,"pas":86,"dri":93,"def":54,"spd":98,"phy":82} },
        { id: 28, name: "L. YAMAL", pos: "RWF", rating: 96, type: "STANDARD", stats: {"sht":92,"pas":82,"dri":97,"def":50,"spd":86,"phy":77} },
        { id: 29, name: "C. PALMER", pos: "AMF", rating: 96, type: "STANDARD", stats: {"sht":86,"pas":86,"dri":93,"def":43,"spd":94,"phy":75} },
        { id: 30, name: "PEDRI", pos: "CMF", rating: 97, type: "STANDARD", stats: {"sht":75,"pas":91,"dri":84,"def":81,"spd":81,"phy":81} },
        { id: 31, name: "GAVI", pos: "CMF", rating: 95, type: "STANDARD", stats: {"sht":75,"pas":89,"dri":75,"def":79,"spd":81,"phy":87} },
        { id: 32, name: "X. SIMONS", pos: "AMF", rating: 95, type: "STANDARD", stats: {"sht":95,"pas":84,"dri":87,"def":55,"spd":94,"phy":71} },
        { id: 33, name: "A. TCHOUAMENI", pos: "DMF", rating: 96, type: "STANDARD", stats: {"sht":77,"pas":91,"dri":78,"def":72,"spd":78,"phy":88} },
        { id: 34, name: "E. CAMAVINGA", pos: "CMF", rating: 95, type: "STANDARD", stats: {"sht":83,"pas":93,"dri":76,"def":76,"spd":74,"phy":90} },
        { id: 35, name: "ALEXANDER-ARNOLD", pos: "RB", rating: 97, type: "STANDARD", stats: {"sht":92,"pas":88,"dri":97,"def":47,"spd":92,"phy":73} },
        { id: 36, name: "ALISSON", pos: "GK", rating: 98, type: "STANDARD", stats: {"sht":40,"pas":62,"dri":40,"def":97,"spd":40,"phy":76} },
        { id: 37, name: "EDERSON", pos: "GK", rating: 97, type: "STANDARD", stats: {"sht":33,"pas":76,"dri":51,"def":97,"spd":48,"phy":87} },
        { id: 38, name: "BERNARDO SILVA", pos: "RWF", rating: 98, type: "STANDARD", stats: {"sht":85,"pas":83,"dri":88,"def":52,"spd":85,"phy":77} },
        { id: 39, name: "B. FERNANDES", pos: "AMF", rating: 97, type: "STANDARD", stats: {"sht":93,"pas":82,"dri":95,"def":42,"spd":84,"phy":72} },
        { id: 40, name: "A. GARNACHO", pos: "LWF", rating: 92, type: "STANDARD", stats: {"sht":98,"pas":88,"dri":90,"def":50,"spd":80,"phy":77} },
        { id: 41, name: "SON HEUNG-MIN", pos: "LWF", rating: 97, type: "STANDARD", stats: {"sht":98,"pas":77,"dri":95,"def":51,"spd":98,"phy":85} },
        { id: 42, name: "A. ISAK", pos: "CF", rating: 95, type: "STANDARD", stats: {"sht":87,"pas":80,"dri":95,"def":50,"spd":83,"phy":77} },
        { id: 43, name: "GABRIEL M.", pos: "CB", rating: 96, type: "STANDARD", stats: {"sht":46,"pas":70,"dri":66,"def":98,"spd":77,"phy":88} },
        { id: 44, name: "R. ARAUJO", pos: "CB", rating: 97, type: "STANDARD", stats: {"sht":56,"pas":65,"dri":66,"def":94,"spd":65,"phy":93} },
        { id: 45, name: "J. KOUNDE", pos: "RB", rating: 96, type: "STANDARD", stats: {"sht":94,"pas":84,"dri":94,"def":52,"spd":87,"phy":75} },
        { id: 46, name: "A. BASTONI", pos: "CB", rating: 98, type: "STANDARD", stats: {"sht":42,"pas":77,"dri":57,"def":86,"spd":67,"phy":82} },
        { id: 47, name: "N. BARELLA", pos: "CMF", rating: 98, type: "STANDARD", stats: {"sht":83,"pas":87,"dri":90,"def":78,"spd":84,"phy":75} },
        { id: 48, name: "F. DIMARCO", pos: "LB", rating: 96, type: "STANDARD", stats: {"sht":87,"pas":87,"dri":96,"def":52,"spd":92,"phy":75} },
        { id: 49, name: "L. MARTINEZ", pos: "CF", rating: 99, type: "STANDARD", stats: {"sht":92,"pas":87,"dri":97,"def":52,"spd":97,"phy":83} },
        { id: 50, name: "M. THURAM", pos: "CF", rating: 94, type: "STANDARD", stats: {"sht":90,"pas":81,"dri":85,"def":40,"spd":94,"phy":80} },
        { id: 51, name: "KVARATSKHELIA", pos: "LWF", rating: 97, type: "STANDARD", stats: {"sht":96,"pas":75,"dri":91,"def":53,"spd":94,"phy":78} },
        { id: 52, name: "D. VLAHOVIC", pos: "CF", rating: 95, type: "STANDARD", stats: {"sht":89,"pas":90,"dri":93,"def":45,"spd":87,"phy":74} },
        { id: 53, name: "G. BREMER", pos: "CB", rating: 95, type: "STANDARD", stats: {"sht":41,"pas":76,"dri":56,"def":92,"spd":69,"phy":88} },
        { id: 54, name: "M. MAIGNAN", pos: "GK", rating: 97, type: "STANDARD", stats: {"sht":38,"pas":77,"dri":58,"def":95,"spd":63,"phy":82} },
        { id: 55, name: "A. HAKIMI", pos: "RB", rating: 97, type: "STANDARD", stats: {"sht":92,"pas":83,"dri":93,"def":43,"spd":83,"phy":71} },
        { id: 56, name: "O. DEMBELE", pos: "RWF", rating: 96, type: "STANDARD", stats: {"sht":95,"pas":83,"dri":86,"def":54,"spd":90,"phy":80} },
        { id: 57, name: "G. DONNARUMMA", pos: "GK", rating: 96, type: "STANDARD", stats: {"sht":43,"pas":62,"dri":53,"def":96,"spd":64,"phy":84} },
        { id: 58, name: "ZAIRE-EMERY", pos: "CMF", rating: 93, type: "STANDARD", stats: {"sht":75,"pas":96,"dri":78,"def":70,"spd":82,"phy":75} },
        { id: 59, name: "J. FRIMPONG", pos: "RB", rating: 96, type: "STANDARD", stats: {"sht":92,"pas":79,"dri":96,"def":41,"spd":84,"phy":75} },
        { id: 60, name: "A. GRIMALDO", pos: "LB", rating: 96, type: "STANDARD", stats: {"sht":97,"pas":75,"dri":85,"def":51,"spd":96,"phy":77} },
        { id: 61, name: "L. SANE", pos: "RWF", rating: 95, type: "STANDARD", stats: {"sht":94,"pas":89,"dri":98,"def":51,"spd":92,"phy":71} },
        { id: 62, name: "J. KIMMICH", pos: "CMF", rating: 97, type: "STANDARD", stats: {"sht":78,"pas":95,"dri":84,"def":74,"spd":80,"phy":79} },
        { id: 63, name: "E. MILITAO", pos: "CB", rating: 97, type: "STANDARD", stats: {"sht":50,"pas":71,"dri":66,"def":87,"spd":74,"phy":91} },
        { id: 64, name: "RODRYGO", pos: "RWF", rating: 97, type: "STANDARD", stats: {"sht":88,"pas":75,"dri":93,"def":41,"spd":95,"phy":72} },
        { id: 65, name: "E. MARTINEZ", pos: "GK", rating: 96, type: "STANDARD", stats: {"sht":36,"pas":83,"dri":40,"def":85,"spd":54,"phy":75} },
        { id: 66, name: "O. WATKINS", pos: "CF", rating: 95, type: "STANDARD", stats: {"sht":88,"pas":79,"dri":85,"def":47,"spd":86,"phy":81} },
        { id: 67, name: "E. FERNANDEZ", pos: "CMF", rating: 95, type: "STANDARD", stats: {"sht":84,"pas":91,"dri":82,"def":79,"spd":73,"phy":75} },
        { id: 68, name: "A. MAC ALLISTER", pos: "CMF", rating: 96, type: "STANDARD", stats: {"sht":77,"pas":91,"dri":76,"def":82,"spd":85,"phy":90} },
        { id: 69, name: "D. NUNEZ", pos: "CF", rating: 94, type: "STANDARD", stats: {"sht":96,"pas":85,"dri":94,"def":53,"spd":92,"phy":76} },
        { id: 70, name: "C. GAKPO", pos: "LWF", rating: 95, type: "STANDARD", stats: {"sht":86,"pas":79,"dri":92,"def":41,"spd":81,"phy":75} },
    ];


    // --- 1. MOBILE MENU ---
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        menuToggle.textContent = mobileMenu.classList.contains('active') ? '✕' : '☰';
    });
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            menuToggle.textContent = '☰';
        });
    });


    // --- 2. SEARCH LOGIC ---
    const searchInput = document.getElementById('searchInput');
    const posFilter = document.getElementById('posFilter');
    const typeFilter = document.getElementById('typeFilter');
    const searchBtn = document.getElementById('searchBtn');
    const playerGrid = document.getElementById('playerGrid');
    const noResults = document.getElementById('noResults');

    function filterPlayers() {
        if (!searchInput) return;
        const query = searchInput.value.toLowerCase();
        const pos = posFilter.value;
        const type = typeFilter.value;
        let visibleCount = 0;

        playerGrid.querySelectorAll('.player-card').forEach(card => {
            const matchName = card.getAttribute('data-name').toLowerCase().includes(query);
            const matchPos = (pos === 'All' || card.getAttribute('data-pos') === pos);
            const matchType = (type === 'All' || card.getAttribute('data-type') === type);

            if (matchName && matchPos && matchType) {
                card.style.display = 'block';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });
        noResults.style.display = visibleCount === 0 ? 'block' : 'none';
    }
    if (searchBtn) searchBtn.addEventListener('click', filterPlayers);
    if (searchInput) searchInput.addEventListener('keyup', (e) => { if (e.key === 'Enter') filterPlayers(); });


    // --- 3. BUILDS SIMULATOR ---
    const MAX_POINTS = 64;
    let pointsLeft = 32;
    const pointsEl = document.getElementById('pointsLeft');
    const ratingEl = document.getElementById('buildRating');
    const statsConfig = { sht: { val: 8, mul: 0.1 }, pas: { val: 4, mul: 0.05 }, dri: { val: 12, mul: 0.15 }, dex: { val: 8, mul: 0.1 }, lbs: { val: 4, mul: 0.05 }, aer: { val: 2, mul: 0.02 } };

    function updateBuildUI() {
        if (!pointsEl) return;
        pointsEl.textContent = pointsLeft;
        let rating = 90;
        for (const k in statsConfig) {
            rating += statsConfig[k].val * statsConfig[k].mul;
            document.getElementById(`val-${k}`).textContent = statsConfig[k].val;
            document.getElementById(`bar-${k}`).style.width = `${Math.min((statsConfig[k].val / 20) * 100, 100)}%`;
        }
        ratingEl.textContent = Math.floor(rating);
    }

    document.querySelectorAll('.adjust-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const k = e.target.getAttribute('data-stat');
            if (e.target.classList.contains('plus') && pointsLeft > 0 && statsConfig[k].val < 20) {
                statsConfig[k].val++; pointsLeft--;
            } else if (e.target.classList.contains('minus') && statsConfig[k].val > 0) {
                statsConfig[k].val--; pointsLeft++;
            }
            updateBuildUI();
        });
    });
    const resetBuild = document.getElementById('resetBuild');
    if (resetBuild) resetBuild.addEventListener('click', () => {
        for (const k in statsConfig) statsConfig[k].val = 0;
        pointsLeft = MAX_POINTS; updateBuildUI();
    });
    updateBuildUI();


    // --- 4. CARD CREATOR ---
    const ccName = document.getElementById('cc-name');
    const ccRating = document.getElementById('cc-rating');
    const ccPos = document.getElementById('cc-position');
    const ccTheme = document.getElementById('cc-theme');
    const ccPlaystyle = document.getElementById('cc-playstyle');

    const outName = document.getElementById('cc-out-name');
    const outRating = document.getElementById('cc-out-rating');
    const outPos = document.getElementById('cc-out-position');
    const outPlaystyle = document.getElementById('cc-out-playstyle');
    const outImage = document.getElementById('cc-out-image');
    const previewCard = document.getElementById('cc-preview-card');

    function updateCardPreview() {
        if (!ccName) return;
        outName.textContent = ccName.value || 'UNKNOWN';
        outImage.textContent = ccName.value || 'UNKNOWN';
        outRating.textContent = ccRating.value || '50';
        outPos.textContent = ccPos.value;
        outPlaystyle.textContent = ccPlaystyle.value.toUpperCase() || 'STANDARD';

        previewCard.className = `floating-card standalone ${ccTheme.value}`;
    }

    if (ccName) {
        [ccName, ccRating, ccPos, ccTheme, ccPlaystyle].forEach(input => {
            input.addEventListener('input', updateCardPreview);
        });
    }

    // --- 5. SQUAD BUILDER ---
    let activeSlotIndex = null;
    let squadData = Array(11).fill(null); // stores player objects

    const modal = document.getElementById('playerModal');
    const modalCloseBtn = document.getElementById('closeModalBtn');
    const modalList = document.getElementById('modalPlayerList');
    const teamOverallEl = document.getElementById('team-overall');

    function openModalForSlot(index) {
        activeSlotIndex = index;
        modal.classList.add('active');
        renderModalPlayers();
    }

    function closeModal() {
        modal.classList.remove('active');
        activeSlotIndex = null;
    }

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);

    document.querySelectorAll('.player-slot').forEach(slot => {
        slot.addEventListener('click', () => {
            openModalForSlot(parseInt(slot.getAttribute('data-index')) - 1);
        });
    });

    function renderModalPlayers() {
        modalList.innerHTML = '';
        MOCK_DB.forEach(p => {
            const row = document.createElement('div');
            row.className = 'mock-player-row';
            row.innerHTML = `
                <div class="mpr-info">
                    <h4>${p.name}</h4>
                    <div class="mpr-pos">${p.type} | ${p.pos}</div>
                </div>
                <div class="mpr-rating">${p.rating}</div>
            `;
            row.addEventListener('click', () => selectPlayerForSlot(p));
            modalList.appendChild(row);
        });
    }

    function selectPlayerForSlot(player) {
        if (activeSlotIndex !== null) {
            squadData[activeSlotIndex] = player;
            updateSquadUI();
        }
        closeModal();
    }

    function updateSquadUI() {
        let totalRating = 0;
        let playersCount = 0;

        squadData.forEach((player, i) => {
            const slotEl = document.getElementById(`slot-${i + 1}`);
            if (player) {
                slotEl.classList.add('filled');
                slotEl.innerHTML = `<div class="slot-pos">${player.pos}</div><div class="slot-name">${player.name.substring(0, 6)}...</div><div class="slot-rating">${player.rating}</div>`;
                totalRating += player.rating;
                playersCount++;
            } else {
                slotEl.classList.remove('filled');
                // Reset to default structure
                let defaultPos = "CB";
                if (i === 0) defaultPos = "CF"; if (i === 1) defaultPos = "LWF"; if (i === 2) defaultPos = "RWF";
                if (i === 3 || i === 5) defaultPos = "CMF"; if (i === 4) defaultPos = "DMF";
                if (i === 6) defaultPos = "LB"; if (i === 9) defaultPos = "RB"; if (i === 10) defaultPos = "GK";

                slotEl.innerHTML = `<div class="slot-pos">${defaultPos}</div><div class="slot-name">+</div>`;
            }
        });

        let ovr = playersCount > 0 ? Math.floor(totalRating / playersCount) : 0;
        // Small team chemistry boost simulation
        if (playersCount === 11) ovr += 2;

        if (teamOverallEl) teamOverallEl.textContent = ovr;
    }

    const clearSquadBtn = document.getElementById('clearSquadBtn');
    if (clearSquadBtn) clearSquadBtn.addEventListener('click', () => {
        squadData = Array(11).fill(null);
        updateSquadUI();
    });


    // --- 6. PLAYER COMPARISON ---
    const selP1 = document.getElementById('comp-p1');
    const selP2 = document.getElementById('comp-p2');
    const statsContainer = document.getElementById('compare-stats');

    if (selP1 && selP2) {
        // Populate dropdowns
        let optionsHTML = MOCK_DB.map(p => `<option value="${p.id}">${p.name} (${p.rating})</option>`).join('');
        selP1.innerHTML = optionsHTML;
        selP2.innerHTML = optionsHTML;
        selP2.selectedIndex = 1; // pick a different default

        function updateComparison() {
            const p1 = MOCK_DB.find(p => p.id == selP1.value);
            const p2 = MOCK_DB.find(p => p.id == selP2.value);

            if (!p1 || !p2) return;

            const statsToCompare = [
                { key: 'sht', label: 'Shooting' },
                { key: 'pas', label: 'Passing' },
                { key: 'dri', label: 'Dribbling' },
                { key: 'def', label: 'Defense' },
                { key: 'spd', label: 'Speed' },
                { key: 'phy', label: 'Physical' }
            ];

            let html = '';
            statsToCompare.forEach(s => {
                let v1 = p1.stats[s.key];
                let v2 = p2.stats[s.key];

                let winClass1 = v1 > v2 ? 'stat-win' : (v1 < v2 ? 'stat-lose' : '');
                let winClass2 = v2 > v1 ? 'stat-win' : (v2 < v1 ? 'stat-lose' : '');

                html += `
                <div class="stat-compare-row">
                    <div class="stat-bar-wrapper p1-wrapper ${winClass1}">
                        <div class="stat-bar-fill p1-fill" style="width: ${v1}%"></div>
                        <span class="stat-val-text p1-text">${v1}</span>
                    </div>
                    <div class="stat-name">${s.label}</div>
                    <div class="stat-bar-wrapper p2-wrapper ${winClass2}">
                        <div class="stat-bar-fill p2-fill" style="width: ${v2}%"></div>
                        <span class="stat-val-text p2-text">${v2}</span>
                    </div>
                </div>
                `;
            });
            statsContainer.innerHTML = html;
        }

        selP1.addEventListener('change', updateComparison);
        selP2.addEventListener('change', updateComparison);

        // Initial render
        updateComparison();
    }

    // --- 7. MANAGERS SECTION ---
    const MANAGERS_DB = [
        { id: 1, name: "L. ROMAN", playstyle: "Possession Game", rating: 88, type: "Standard", boosts: [] },
        { id: 2, name: "G. ZEITZLER", playstyle: "Quick Counter", rating: 87, type: "Standard", boosts: [] },
        { id: 3, name: "C. VALBUENA", playstyle: "Long Ball Counter", rating: 85, type: "Standard", boosts: [] },
        { id: 4, name: "E. TEN HAG", playstyle: "Quick Counter", rating: 85, type: "Standard", boosts: [] },
        { id: 5, name: "XABI ALONSO", playstyle: "Quick Counter", rating: 85, type: "Standard", boosts: [] },
        { id: 6, name: "F. CAPELLO", playstyle: "Long Ball Counter", rating: 85, type: "Epic", boosts: ["Defense Awareness +1"] },
        { id: 7, name: "F. BECKENBAUER", playstyle: "Possession Game", rating: 85, type: "Epic", boosts: ["Low Pass +1"] },
        { id: 8, name: "J. CRUYFF", playstyle: "Possession Game", rating: 86, type: "Epic", boosts: ["Dribbling +1"] },
        { id: 9, name: "V. DE BICA", playstyle: "Out Wide", rating: 85, type: "Epic", boosts: ["Stamina +1"] },
    ];

    const managerGrid = document.getElementById('managerGrid');
    if (managerGrid) {
        let html = '';
        MANAGERS_DB.forEach(m => {
            let cardClass = m.type === 'Epic' ? 'epic-card' : 'standard-card';
            let boostHtml = m.boosts.map(b => `<div class="stat-row" style="margin-top:auto"><span class="highlight-gradient" style="font-weight:bold; font-size:1rem;">${b}</span></div>`).join('');
            
            html += `
            <div class="player-card ${cardClass} manager-card">
                <div class="card-content">
                    <div class="card-stats">
                        <span class="rating">${m.rating}</span>
                        <span class="position">MGR</span>
                    </div>
                    <div class="card-art">
                        <div class="silhouette" style="font-size: 1.4rem; transform: rotate(-5deg); text-transform: uppercase;">${m.name.split(' ').pop()}</div>
                    </div>
                    <div class="card-info" style="display:flex; flex-direction:column; justify-content:center; gap: 8px; height: 100%;">
                        <h3 class="name" style="font-size:1.3rem; margin-bottom: 0;">${m.name}</h3>
                        <p class="playstyle" style="color:#aaa; font-weight:600; margin-bottom: 5px;">${m.playstyle}</p>
                        ${boostHtml}
                    </div>
                </div>
            </div>`;
        });
        managerGrid.innerHTML = html;
    }

});

