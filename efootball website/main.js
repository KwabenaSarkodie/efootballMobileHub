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
        if(!searchInput) return;
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
    if(searchBtn) searchBtn.addEventListener('click', filterPlayers);
    if(searchInput) searchInput.addEventListener('keyup', (e) => { if(e.key === 'Enter') filterPlayers(); });


    // --- 3. BUILDS SIMULATOR ---
    const MAX_POINTS = 64;
    let pointsLeft = 32;
    const pointsEl = document.getElementById('pointsLeft');
    const ratingEl = document.getElementById('buildRating');
    const statsConfig = { sht: { val: 8, mul: 0.1 }, pas: { val: 4, mul: 0.05 }, dri: { val: 12, mul: 0.15 }, dex: { val: 8, mul: 0.1 }, lbs: { val: 4, mul: 0.05 }, aer: { val: 2, mul: 0.02 } };

    function updateBuildUI() {
        if(!pointsEl) return;
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
    if(resetBuild) resetBuild.addEventListener('click', () => {
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
        if(!ccName) return;
        outName.textContent = ccName.value || 'UNKNOWN';
        outImage.textContent = ccName.value || 'UNKNOWN';
        outRating.textContent = ccRating.value || '50';
        outPos.textContent = ccPos.value;
        outPlaystyle.textContent = ccPlaystyle.value.toUpperCase() || 'STANDARD';
        
        previewCard.className = `floating-card standalone ${ccTheme.value}`;
    }

    if(ccName) {
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

    if(modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);

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
            const slotEl = document.getElementById(`slot-${i+1}`);
            if (player) {
                slotEl.classList.add('filled');
                slotEl.innerHTML = `<div class="slot-pos">${player.pos}</div><div class="slot-name">${player.name.substring(0,6)}...</div><div class="slot-rating">${player.rating}</div>`;
                totalRating += player.rating;
                playersCount++;
            } else {
                slotEl.classList.remove('filled');
                // Reset to default structure
                let defaultPos = "CB";
                if(i===0) defaultPos="CF"; if(i===1) defaultPos="LWF"; if(i===2) defaultPos="RWF";
                if(i===3||i===5) defaultPos="CMF"; if(i===4) defaultPos="DMF";
                if(i===6) defaultPos="LB"; if(i===9) defaultPos="RB"; if(i===10) defaultPos="GK";
                
                slotEl.innerHTML = `<div class="slot-pos">${defaultPos}</div><div class="slot-name">+</div>`;
            }
        });
        
        let ovr = playersCount > 0 ? Math.floor(totalRating / playersCount) : 0;
        // Small team chemistry boost simulation
        if(playersCount === 11) ovr += 2; 
        
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

    if(selP1 && selP2) {
        // Populate dropdowns
        let optionsHTML = MOCK_DB.map(p => `<option value="${p.id}">${p.name} (${p.rating})</option>`).join('');
        selP1.innerHTML = optionsHTML;
        selP2.innerHTML = optionsHTML;
        selP2.selectedIndex = 1; // pick a different default

        function updateComparison() {
            const p1 = MOCK_DB.find(p => p.id == selP1.value);
            const p2 = MOCK_DB.find(p => p.id == selP2.value);
            
            if(!p1 || !p2) return;
            
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
});
