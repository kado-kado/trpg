window.onload = function(){
    initSidebarToggle();
    showSection('Main');
}

function isMobileSidebarMode() {
    return window.matchMedia('(max-width: 768px)').matches;
}

function showSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });

    resetCollapsibles();

    const target = document.getElementById(sectionId);
    if (target) {
        target.classList.add('active');
    }

    const main = document.getElementById('main');
    if (main) {
        main.scrollTop = 0;
    }
    window.scrollTo({ top: 0, behavior: 'auto' });

    if (isMobileSidebarMode()) {
        closeSidebar();
    }
}

function resetCollapsibles() {
    const collapsibleIds = [
        "beraKind", "beraRestriction", "beraDetails1", "beraDetails2", "beraCritical", "beraFumble", "beraATP", "beraState", "useAffectbera", "aboutAFbera", "normalbera", "woodStatus", "woodDiv", "humanStatus", "humanDiv", "weaponDetails", "moneyDetails", "itemDetails", "encounterDetails", "scenarioDetails", "TRberame", "CHberame", "berameATP", "useATP", "STbera"
    ];

    collapsibleIds.forEach((divId) => {
        const targetDiv = document.getElementById(divId);
        if (targetDiv) targetDiv.style.display = "none";
    });
}

function initSidebarToggle() {
    const toggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');
    const menu = document.getElementById('sidebarMenu');
    if (!toggle || !sidebar || !menu) return;

    const syncSidebarState = (isOpen) => {
        sidebar.classList.toggle('open', isOpen);
        menu.classList.toggle('open', isOpen);
        menu.style.opacity = isOpen ? '1' : '0';
        menu.style.pointerEvents = isOpen ? 'auto' : 'none';
        menu.style.transform = isOpen ? 'translateY(0)' : 'translateY(12px)';
        menu.style.visibility = isOpen ? 'visible' : 'hidden';
        if (isMobileSidebarMode()) {
            sidebar.style.width = isOpen ? '220px' : '64px';
            sidebar.style.height = isOpen ? 'auto' : '64px';
        } else {
            sidebar.style.width = '200px';
            sidebar.style.height = 'auto';
        }
        toggle.setAttribute('aria-expanded', String(isOpen));
    };

    toggle.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (!isMobileSidebarMode()) return;
        const isOpen = !sidebar.classList.contains('open');
        syncSidebarState(isOpen);
    });

    document.addEventListener('click', (event) => {
        const target = event.target;
        if (!isMobileSidebarMode()) return;
        if (!target || target.closest('#sidebarToggle') || target.closest('#sidebarMenu') || sidebar.contains(target)) {
            return;
        }
        closeSidebar();
    });

    window.addEventListener('resize', () => {
        if (!isMobileSidebarMode()) {
            sidebar.classList.remove('open');
            menu.classList.remove('open');
            menu.style.opacity = '1';
            menu.style.pointerEvents = 'auto';
            menu.style.transform = 'none';
            menu.style.visibility = 'visible';
            sidebar.style.width = '200px';
            sidebar.style.height = 'auto';
            toggle.setAttribute('aria-expanded', 'false');
            return;
        }
        closeSidebar();
    });
}

function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const menu = document.getElementById('sidebarMenu');
    const toggle = document.getElementById('sidebarToggle');
    if (!sidebar || !menu || !toggle) return;
    if (!isMobileSidebarMode()) {
        menu.style.opacity = '1';
        menu.style.pointerEvents = 'auto';
        menu.style.transform = 'none';
        menu.style.visibility = 'visible';
        sidebar.style.width = '200px';
        sidebar.style.height = 'auto';
        return;
    }

    sidebar.classList.remove('open');
    menu.classList.remove('open');
    menu.style.opacity = '0';
    menu.style.pointerEvents = 'none';
    menu.style.transform = 'translateY(12px)';
    menu.style.visibility = 'hidden';
    sidebar.style.width = '64px';
    sidebar.style.height = '64px';
    toggle.setAttribute('aria-expanded', 'false');
}

function handleCardAction(element, event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }

    const action = element.dataset.cardAction;
    if (action === 'section') {
        const sectionId = element.dataset.sectionId || element.getAttribute('data-section-id');
        if (sectionId) {
            showSection(sectionId);
        }
        return;
    }

    if (action === 'toggle') {
        const targetId = element.dataset.toggleTarget || element.getAttribute('data-toggle-target');
        if (targetId) {
            Ctrl_div(targetId);
        }
    }
}