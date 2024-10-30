// ==========================================================================
// Constants and Configuration
// ==========================================================================

const ICONS = {
    ARROW_UP: `<svg width="88px" height="88px" viewBox="0 0 88 88" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_58_136)">
<path d="M0 40H8V48H0V40Z"/>
<path d="M8 32H16V40H8V32Z"/>
<path d="M16 24H24V32H16V24Z"/>
<path d="M24 16H32V24H24V16Z"/>
<path d="M32 8H40V16H32V8Z"/>
<path d="M88 40H80V48H88V40Z"/>
<path d="M40 40H24V48H40V40Z"/>
<path d="M64 40H48V48H64V40Z"/>
<path d="M48 40V24H40V40H48Z"/>
<path d="M48 48H40V56H48V48Z"/>
<path d="M56 56H48V64H56V56Z"/>
<path d="M40 72H32V80H40V72Z"/>
<path d="M64 64H56V72H64V64Z"/>
<path d="M40 56H32V64H40V56Z"/>
<path d="M56 72H48V80H56V72Z"/>
<path d="M32 64H24V72H32V64Z"/>
<path d="M48 80H40V88H48V80Z"/>
<path d="M80 32H72V40H80V32Z"/>
<path d="M72 24H64V32H72V24Z"/>
<path d="M64 16H56V24H64V16Z"/>
<path d="M56 8H48V16H56V8Z"/>
<path d="M40 0H48V8H40V0Z"/>
</g>
<defs>
<clipPath id="clip0_58_136">
<rect width="88" height="88" fill="white"/>
</clipPath>
</defs>
</svg>
`,
    CLOSE: `<svg width="44" height="44" viewBox="0 0 88 88" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_58_160)">
<path d="M16 64H24V72H16V64Z" />
<path d="M8 72H16V80H8V72Z" />
<path d="M0 80H8V88H0V80Z" />
<path d="M24 56H32V64H24V56Z" />
<path d="M16 16H24V24H16V16Z" />
<path d="M24 24H32V32H24V24Z" />
<path d="M8 8H16V16H8V8Z" />
<path d="M0 0H8V8H0V0Z" />
<path d="M72 64H64V72H72V64Z" />
<path d="M48 16H40V32H48V16Z" />
<path d="M56 32H48V40H56V32Z" />
<path d="M40 48H32V56H40V48Z" />
<path d="M72 40H56V48H72V40Z" />
<path d="M40 32H32V40H40V32Z" />
<path d="M56 48H48V56H56V48Z" />
<path d="M32 40H16V48H32V40Z" />
<path d="M48 56H40V72H48V56Z" />
<path d="M64 56H56V64H64V56Z" />
<path d="M80 72H72V80H80V72Z" />
<path d="M88 80H80V88H88V80Z" />
<path d="M64 24H56V32H64V24Z" />
<path d="M72 16H64V24H72V16Z" />
<path d="M72 8H80V16H72V8Z" />
<path d="M80 0H88V8H80V0Z" />
</g>
<defs>
<clipPath id="clip0_58_160">
<rect width="88" height="88" fill="white"/>
</clipPath>
</defs>
</svg>`,
    CURSOR: `<svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_58_186)">
<path id="cursorBackground" d="M4 44L44 4L84 44L44 84L4 44Z" fill="#D9D9D9"/>
<path d="M0 40H8V48H0V40Z" fill="currentColor"/>
<path d="M24 40H40V48H24V40Z" fill="currentColor"/>
<path d="M8 48H16V56H8V48Z" fill="currentColor"/>
<path d="M8 32H16V40H8V32Z" fill="currentColor"/>
<path d="M16 24H24V32H16V24Z" fill="currentColor"/>
<path d="M24 15H32V23H24V15Z" fill="currentColor"/>
<path d="M56 72H48V80H56V72Z" fill="currentColor"/>
<path d="M40 8H32V16H40V8Z" fill="currentColor"/>
<path d="M72 32H80V40H72V32Z" fill="currentColor"/>
<path d="M24 56H16V64H24V56Z" fill="currentColor"/>
<path d="M88 40H80V48H88V40Z" fill="currentColor"/>
<path d="M64 40H48V48H64V40Z" fill="currentColor"/>
<path d="M72 56H64V64H72V56Z" fill="currentColor"/>
<path d="M80 48H72V56H80V48Z" fill="currentColor"/>
<path d="M56 8H48V16H56V8Z" fill="currentColor"/>
<path d="M48 0H40V8H48V0Z" fill="currentColor"/>
<path d="M48 24H40V40H48V24Z" fill="currentColor"/>
<path d="M32 64H24V72H32V64Z" fill="currentColor"/>
<path d="M40 72H32V80H40V72Z" fill="currentColor"/>
<path d="M64 64H56V72H64V64Z" fill="currentColor"/>
<path d="M48 80H40V88H48V80Z" fill="currentColor"/>
<path d="M64 24H72V32H64V24Z" fill="currentColor"/>
<path d="M56 16H64V24H56V16Z" fill="currentColor"/>
<path d="M40 48H48V64H40V48Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_58_186">
<rect width="88" height="88" fill="white"/>
</clipPath>
</defs>
</svg>`
};

// ==========================================================================
// Main Initialization
// ==========================================================================

document.addEventListener('DOMContentLoaded', async () => {
    const data = await fetchData('data.json');
    const main = document.querySelector('main');
    main.innerHTML = ''; // Clear existing content

    data.sections.forEach((section, sectionIndex) => {
        if (section.type === 'essay') {
            const essaySection = createEssaySection(section);
            main.appendChild(essaySection);
        } else {
            const sectionElement = createSection(section, sectionIndex);
            main.appendChild(sectionElement);

            section.variants.forEach((variant, variantIndex) => {
                const globalVariantIndex = `${sectionIndex}-${variantIndex}`;
                const overlay = createOverlay(variant, section.colors, globalVariantIndex);
                document.body.appendChild(overlay);
            });
        }
    });

    initializeEventListeners();
    setupCustomCursor();
    applyRandomRotation();
    setupSectionColorTracking();
});

// ==========================================================================
// Data Fetching
// ==========================================================================

/**
 * Fetches JSON data from a given URL
 * @param {string} url - The URL to fetch data from
 * @returns {Promise<Object>} The parsed JSON data
 */
async function fetchData(url) {
    const response = await fetch(url);
    return response.json();
}

// ==========================================================================
// Section Creation Functions
// ==========================================================================

/**
 * Creates a section element with the provided data
 * @param {Object} sectionData - Data for creating the section
 * @param {number} sectionIndex - Index of the current section
 * @returns {HTMLElement} The created section element
 */
function createSection(sectionData, sectionIndex) {
    const section = document.createElement('section');
    section.className = 'category';
    section.style.backgroundColor = sectionData.colors.backgroundColor;
    section.style.color = sectionData.colors.textColor;
    section.style.borderColor = sectionData.colors.textColor;
    section.style.setProperty('--accent-color', sectionData.colors.accentColor);
    section.style.setProperty('--accent-color-overlay', sectionData.colors.overlayAccentColor);

    const variantGrids = sectionData.variants.map((variant, index) =>
        createVariantGrid(variant, sectionIndex, index, sectionData)
    ).join('');

    section.innerHTML = `
        <div class="navigation-container up-button">
            <div style="color: ${sectionData.colors.accentColor}">${ICONS.ARROW_UP}</div>
        </div>
        <h1>${sectionData.title}</h1>
        <div class="scroll-container">
            ${variantGrids}
        </div>
    `;

    return section;
}

/**
 * Creates a grid layout for a variant
 * @param {Object} variant - Variant data
 * @param {number} sectionIndex - Index of the current section
 * @param {number} variantIndex - Index of the variant within the section
 * @returns {string} HTML string for the variant grid
 */
function createVariantGrid(variant, sectionIndex, variantIndex, sectionData) {
    const globalVariantIndex = `${sectionIndex}-${variantIndex}`;
    const backgroundColor = sectionData.colors.backgroundColor;
    const accentColor = sectionData.colors.accentColor;

    return `
        <div class="variant-grid ${variant.layout}" data-variant-index="${globalVariantIndex}">
            <div class="main-image" data-overlay-trigger>
                <img src="${variant.mainImage.src}" alt="${variant.mainImage.alt}">
                <div class="image-caption" style="background-color: ${backgroundColor}; color: ${accentColor}">
                    ${variant.mainImage.alt}
                </div>
            </div>
            ${variant.secondaryImages.map(img => `
                <div class="secondary-image">
                    <img src="${img.src}" alt="${img.alt}">
                </div>
            `).join('')}
        </div>
    `;
}

// ==========================================================================
// Overlay Creation Functions
// ==========================================================================

/**
 * Creates an overlay element for a variant
 * @param {Object} variant - Variant data
 * @param {Object} colors - Color scheme
 * @param {number} index - Index of the variant
 * @returns {HTMLElement} The created overlay element
 */
function createOverlay(variant, colors, index) {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.setAttribute('data-overlay-index', index);
    overlay.style.backgroundColor = colors.textColor;
    overlay.style.color = colors.backgroundColor;
    overlay.style.setProperty('--accent-color', colors.accentColor);
    overlay.style.setProperty('--overlay-accent-color', colors.overlayAccentColor);

    const iconColor = colors.overlayAccentColor || colors.accentColor;

    overlay.innerHTML = `
        <div class="navigation-container" id="close-button">
            <div style="color: ${iconColor}">${ICONS.CLOSE}</div>
        </div>
        <div class="overlay-image">
            <img src="${variant.mainImage.src}" alt="${variant.mainImage.alt}">
        </div>
        <div class="overlay-content">
            <h2>${variant.mainImage.title}</h2>
            <div class="overlay-description">
                            <div class="overlay-description-divider">

                <h3>Prompt</h3>
                <p class="prompt">${variant.mainImage.prompt}</p></div>
                <div class="overlay-description-divider">
                <h3>Questions</h3>
                <p class="questions">${variant.mainImage.questions}</p></div>
            </div>
            <div class="source-grid ${variant.layout}">
        <div class="main-image">
            <img src="${variant.sourceImages.mainImage.src}" alt="${variant.sourceImages.mainImage.alt}">
            <div class="image-caption" style="background-color: ${colors.textColor}; color: ${colors.backgroundColor}">
                ${variant.sourceImages.mainImage.alt}
            </div>
        </div>
        ${variant.sourceImages.secondaryImages.map(img => `
            <div class="secondary-image">
                <img src="${img.src}" alt="${img.alt}">
                <div class="image-caption" style="background-color: ${colors.textColor}; color: ${colors.backgroundColor}">
                    ${img.alt}
                </div>
            </div>
        `).join('')}
    </div>
        </div>
    `;

    applyRandomRotation();

    return overlay;
}

// ==========================================================================
// Event Handlers and Interactions
// ==========================================================================

/**
 * Sets up all event listeners for the application
 * Handles:
 * - Hover effects on variant grids
 * - Overlay show/hide
 * - Intersection Observer for up arrows
 */
function initializeEventListeners() {
    const variantGrids = document.querySelectorAll('.variant-grid');
    const overlays = document.querySelectorAll('.overlay');

    setupVariantGridInteractions(variantGrids);
    setupIntersectionObserver();
    setupParallaxEffect();
}

/**
 * Sets up interactions for variant grids
 * @param {NodeList} variantGrids - List of variant grid elements
 */
function setupVariantGridInteractions(variantGrids) {
    variantGrids.forEach(grid => {
        const mainImageContainer = grid.querySelector('.main-image');
        const mainImageTrigger = mainImageContainer.querySelector('img');
        const secondaryImages = grid.querySelectorAll('.secondary-image');
        const variantIndex = grid.getAttribute('data-variant-index');
        const correspondingOverlay = document.querySelector(`[data-overlay-index="${variantIndex}"]`);

        if (!mainImageTrigger.hasAttribute('data-overlay-trigger')) {
            mainImageTrigger.setAttribute('data-overlay-trigger', '');
        }

        if (correspondingOverlay) {
            const closeButton = correspondingOverlay.querySelector('#close-button');

            setupHoverEffects(mainImageTrigger, secondaryImages);
            setupOverlayTriggers(mainImageTrigger, correspondingOverlay, closeButton);
        } else {
            console.error(`No corresponding overlay found for variant index ${variantIndex}`);
        }
    });

    const scrollContainers = document.querySelectorAll('.scroll-container');
    scrollContainers.forEach(container => {
        setupMouseMoveEffect(container);
    });

    const overlays = document.querySelectorAll('.overlay');
    overlays.forEach(overlay => {
        setupMouseMoveEffect(overlay);
    });
}

/**
 * Sets up the Intersection Observer for section animations
 */
function setupIntersectionObserver() {
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        root: null,
        rootMargin: '-49% 0px -49% 0px',
        threshold: 0.02
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const upArrow = entry.target.querySelector('.up-button svg');
            if (upArrow) {
                if (entry.isIntersecting && entry.intersectionRatio > 0.02) {
                    upArrow.classList.add('rotate');
                } else {
                    upArrow.classList.remove('rotate');
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => sectionObserver.observe(section));
}

/**
 * Sets up hover effects for variant grid images
 * @param {HTMLElement} mainImage - The main image element
 * @param {NodeList} secondaryImages - List of secondary image elements
 */
function setupHoverEffects(mainImageTrigger, secondaryImages) {
    mainImageTrigger.addEventListener('mouseenter', () => {
        mainImageTrigger.parentElement.classList.add('hovered');
        secondaryImages.forEach(img => img.classList.add('hovered'));
    });

    mainImageTrigger.addEventListener('mouseleave', () => {
        mainImageTrigger.parentElement.classList.remove('hovered');
        secondaryImages.forEach(img => img.classList.remove('hovered'));
    });
}

/**
 * Sets up overlay show/hide triggers
 * @param {HTMLElement} trigger - Element that triggers the overlay
 * @param {HTMLElement} overlay - The overlay element to show/hide
 * @param {HTMLElement} closeButton - Button to close the overlay
 */
function setupOverlayTriggers(trigger, overlay, closeButton) {
    trigger.addEventListener('click', () => {
        overlay.classList.add('show');
        document.body.style.overflow = 'hidden';
        // Update cursor colors when overlay opens
        updateCursorColors(overlay);
    });

    closeButton.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent event from bubbling to overlay
        closeOverlay(overlay);
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeOverlay(overlay);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('show')) {
            closeOverlay(overlay);
        }
    });
}

// Helper function to close overlay and update cursor
function closeOverlay(overlay) {
    overlay.classList.remove('show');
    document.body.style.overflow = '';
    // Update cursor colors based on current visible section
    const visibleSection = findVisibleSection();
    if (visibleSection) {
        updateCursorColors(visibleSection);
    }
}

// Helper function to find the currently visible section
function findVisibleSection() {
    const sections = document.querySelectorAll('section');
    return Array.from(sections).find(section => {
        const rect = section.getBoundingClientRect();
        return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
    });
}

// Helper function to update cursor colors
function updateCursorColors(element) {
    const cursor = document.getElementById('cursor');
    if (element.classList.contains('overlay')) {
        const overlayAccentColor = element.style.getPropertyValue('--overlay-accent-color');
        const accentColor = element.style.getPropertyValue('--accent-color');
        const backgroundColor = element.style.backgroundColor;
        cursor.style.setProperty('--cursor-color', overlayAccentColor || accentColor);
        cursor.style.setProperty('--cursor-background-color', backgroundColor);
    } else {
        const accentColor = element.style.getPropertyValue('--accent-color');
        const backgroundColor = element.style.backgroundColor;
        cursor.style.setProperty('--cursor-color', accentColor);
        cursor.style.setProperty('--cursor-background-color', backgroundColor);
    }
}



/**
 * Sets up mouse move effect for parallax
 * @param {HTMLElement} container - The container element
 */
function setupMouseMoveEffect(container) {
    const grids = container.querySelectorAll('.variant-grid, .source-grid');
    const maxShift = 15;

    container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        const shiftX = (x - 0.5) * 2;
        const shiftY = (y - 0.5) * 2;

        grids.forEach(grid => {
            grid.style.transform = `translate(${shiftX * maxShift}px, ${shiftY * maxShift}px)`;
        });
    });

    container.addEventListener('mouseleave', () => {
        grids.forEach(grid => {
            grid.style.transform = 'translate(0, 0)';
        });
    });
}

/**
 * Sets up parallax effect for section titles
 */
function setupParallaxEffect() {
    // const scrollContainers = document.querySelectorAll('.scroll-container');

    // scrollContainers.forEach(container => {
    //     const sectionTitle = container.parentElement.querySelector('h1');
    //     const maxScroll = container.scrollWidth - container.clientWidth;

    //     container.addEventListener('scroll', () => {
    //         const scrollPercentage = container.scrollLeft / maxScroll;
    //         const translateX = -25 * scrollPercentage;
    //         sectionTitle.style.transform = `translate3d(${translateX}vw, -50%, 0)`;
    //     });
    // });
}

// ==========================================================================
// Custom Cursor Setup
// ==========================================================================

/**
 * Sets up a custom cursor
 */
function setupCustomCursor() {
    const cursor = document.createElement('div');
    cursor.id = 'cursor';
    cursor.innerHTML = ICONS.CURSOR;
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', updateCursorPosition);

    const interactiveElements = document.querySelectorAll('a, button, input, textarea, [onclick], [data-overlay-trigger], #close-button, #close-button *');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('interactive'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('interactive'));
    });
}

/**
 * Updates the position of the custom cursor
 * @param {MouseEvent} e - The mouse event
 */
function updateCursorPosition(e) {
    const cursor = document.getElementById('cursor');
    const x = e.clientX;
    const y = e.clientY;
    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
}

// ==========================================================================
// Utility Functions
// ==========================================================================

/**
 * Applies a random rotation to all images
 */
function applyRandomRotation() {
    const imageContainers = document.querySelectorAll('.main-image, .secondary-image');
    imageContainers.forEach(container => {
        const randomRotation = Math.random() * 8 - 4;
        container.style.setProperty('--rotation', `${randomRotation}deg`);

        const img = container.querySelector('img');
        if (img) {
            img.style.transform = `rotate(${randomRotation}deg)`;
        }
    });
}

/**
 * Sets up color tracking for sections and overlays
 */
function setupSectionColorTracking() {
    const sections = document.querySelectorAll('section');
    const overlays = document.querySelectorAll('.overlay');
    const cursor = document.getElementById('cursor');

    const observerOptions = {
        threshold: 0.5
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const section = entry.target;
                const accentColor = section.style.getPropertyValue('--accent-color');
                const backgroundColor = section.style.backgroundColor;
                cursor.style.setProperty('--cursor-color', accentColor);
                cursor.querySelector('#cursorBackground').style.fill = backgroundColor;
            }
        });
    }, observerOptions);

    sections.forEach(section => sectionObserver.observe(section));

    overlays.forEach(overlay => {
        overlay.addEventListener('mouseenter', () => {
            const overlayAccentColor = overlay.style.getPropertyValue('--overlay-accent-color');
            const accentColor = overlay.style.getPropertyValue('--accent-color');
            const backgroundColor = overlay.style.backgroundColor;
            cursor.style.setProperty('--cursor-color', overlayAccentColor || accentColor);
            cursor.querySelector('#cursorBackground').style.fill = backgroundColor;
        });

        overlay.addEventListener('mouseleave', () => {
            const visibleSection = Array.from(sections).find(section => {
                const rect = section.getBoundingClientRect();
                return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
            });
            if (visibleSection) {
                const accentColor = visibleSection.style.getPropertyValue('--accent-color');
                const backgroundColor = visibleSection.style.backgroundColor;
                cursor.style.setProperty('--cursor-color', accentColor);
                cursor.querySelector('#cursorBackground').style.fill = backgroundColor;
            }
        });
    });
}


// ==========================================================================
// Essay Section Creation
// ==========================================================================

/**
 * Creates an essay section element
 * @param {Object} sectionData - Data for creating the essay section
 * @returns {HTMLElement} The created essay section element
 */
function createEssaySection(sectionData) {
    const section = document.createElement('section');
    section.className = 'essay-section';
    section.style.backgroundColor = sectionData.colors.backgroundColor;
    section.style.color = sectionData.colors.textColor;
    section.style.borderColor = sectionData.colors.textColor;
    section.style.setProperty('--accent-color', sectionData.colors.accentColor);

    section.innerHTML = `
        <div class="essay-scroll-container">
            <div id="essay-text"></div>
        </div>
    `;

    fetch('essay.md')
        .then(response => response.text())
        .then(text => {
            const essayContent = section.querySelector('#essay-text');
            essayContent.innerHTML = marked.parse(text);
        });

    return section;
}

