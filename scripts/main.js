// DOM Elements
const heroSection = document.getElementById('hero');
const painPointsSection = document.getElementById('pain-points');
const solutionsSection = document.getElementById('solutions');
const coreValuesSection = document.getElementById('core-values');
const userJourneySection = document.getElementById('user-journey');
const finalCtaSection = document.getElementById('final-cta');

// Language Translations
const translations = {
    zh: {
        // Hero Section
        heroTitle1: '变革美妆包材采购',
        heroTitle2: '从AI寻源到3D设计，一步到位',
        heroSubtitle: 'Packvisual，全球美妆包材AI平台，无缝连接品牌、设计师与源头包材商，重塑从灵感到量产的完整周期。',
        heroCta1: '我是品牌/设计师 | 立即寻源',
        heroCta2: '我是包材商 | 立即入驻获客',
        
        // Pain Points Section
        painTitle: '传统包装采购，是否让您举步维艰？',
        painSubtitle: '当前的采购生态碎片化、不透明且极其耗时',
        painBrandTitle: '对于品牌方与设计师',
        painSupplierTitle: '对于包材商',
        painCard1Title: '低效寻源',
        painCard1Desc: '海量信息淙没需求，难以高效锁定可靠供应商。',
        painCard2Title: '沟通鸿沟',
        painCard2Desc: '创意与技术规格脱节，反复沟通导致信息失真。',
        painCard3Title: '合规陷阱',
        painCard3Desc: '难以高效核实供应商的质量与可持续性认证。',
        painCard4Title: '获客昂贵',
        painCard4Desc: '传统展会的成本高昂，销售渠道较分散，回报率低。',
        painCard5Title: '曝光受限',
        painCard5Desc: '营销的传播区域受限，难以精准触达全球高价值买家。',
        painCard6Title: '价值难现',
        painCard6Desc: '复杂的装饰工艺和创新材料无法被直观、动态地展示。',
        
        // Solutions Section
        solutionTitle: 'Packvisual：以智能与协同，重构供需两端',
        solutionSubtitle: '我们通过三大核心支柱，打破信息孤岛，建立高效透明的B2B新生态。',
        pillar1Title: 'AI智能B2B商机引擎 - 线上寻源',
        pillar1Subtitle: '不再盲目搜索，直接精准对接',
        pillar1Desc: '为品牌商提供高效AI搜索，帮包材商连接高价值商机',
        pillar1Feature1: '导入图片或参数，AI智能寻源即刺为您精准匹配全球包材商',
        pillar1Feature2: '海量包材数据覆盖所有参数，让您筛选比价一步到位',
        pillar1Feature3: '平台直连买家与包材商，打破信息壁垒，让您轻松获取一手报价',
        pillar2Title: '革命性的3D配置器 - 在线协同',
        pillar2Subtitle: '静态浏览启航，动态设计连接',
        pillar2Feature1: '云端3D包材，实时编辑颜色工艺配件，所见即所得',
        pillar2Feature2: '一键分享设计配置，云端协同，提升沟通效率',
        pillar2Feature3: '美妆包材视觉化需求，告别无效询盘，精准报价',
        pillar3Title: '移动产品销售型录 - 线下赋能',
        pillar3Feature1: '线下销售拜访与展会，移动端轻松呈现全系产品',
        pillar3Feature2: '智能物理样瓶，直连云端3D展示，客户感受更为直观',
        pillar3Feature3: '虚拟样瓶快速定制，精准设计表达，加速商机成交',
        
        // Core Values Section
        valueTitle: '为不同角色的您，创造专属价值',
        valueTab1: '面向品牌方与设计师',
        valueTab2: '面向包材商',
        valueBrand1Title: '新锐品牌 - 寻源提效10X',
        valueBrand1Desc: '无论是寻找低MOQ创新材料，还是对标参考图片，AI都能帮您秒速匹配源头',
        valueBrand2Title: '企业采购 - 合规与降本',
        valueBrand2Desc: '轻松审查供应商认证（ISO, GRS等），直连包材商，告别中间溢价',
        valueBrand3Title: '设计机构 - 所见即所得',
        valueBrand3Desc: '3D虚拟样瓶将创意变为现实，云端展示，随时随地沟通创意',
        valueSupplier1Title: '全球营销引擎',
        valueSupplier1Desc: '优化店铺流量，向全球买家展示企业实力与创新技术，高效获取线上订单',
        valueSupplier2Title: '线下签单利器',
        valueSupplier2Desc: '小程序赋能销售团队，充分展示产品信息，为定制设计高效达成共识，加速成交',
        valueSupplier3Title: '精准的商业线索',
        valueSupplier3Desc: '告别无效询盘。我们为您带来的商机都来自AI配置过的精准需求，转化率更高',
        
        // User Journey Section
        journeyTitle: '五步重塑您的采购体验',
        journeyStep1: 'AI发现',
        journeyStep1Desc: '通过关键词或“以图搜图”，在AI驱动的全球目录中即时发现产品与供应商',
        journeyStep2: '评估筛选',
        journeyStep2Desc: '深入查看高清图片、3D模型、技术规格和可持续性认证。进入供应商店铺，审查其资质与专长',
        journeyStep3: '定制设计',
        journeyStep3Desc: '进入3D工作台，实时编辑产品的颜色、表面工艺、配件并应用Logo，即时预览效果',
        journeyStep4: '规格确认',
        journeyStep4Desc: '一键导出高保真渲染图和PDF技术规格表，并保存为可分享的‘3D项目”',
        journeyStep5: '精准询盘',
        journeyStep5Desc: '将3D项目链接发送给供应商。供应商收到清晰无误的需求，为您提供精准的源头出厂报价',
        
        // Final CTA Section
        finalCtaTitle: '准备好加入美妆包装的未来了吗？',
        finalCtaSubtitle: '无论您是在寻找下一个爆款包装，还是希望拓展商机的包材商，Packvisual都是您的终极解决方案。',
        finalCta1: '立即体验AI寻源',
        finalCta2: '立即申请免费入驻',
        
        // Modal Form
        modalTitle: '立即开始体验',
        modalSubtitle: '填写以下信息，我们将尽快与您联系',
        formName: '姓名',
        formCompany: '公司名称',
        formPhone: '联系电话',
        formEmail: '邮箱',
        formRole: '您的角色',
        formMessage: '留言',
        formSubmit: '提交',
        formNamePlaceholder: '请输入您的姓名',
        formCompanyPlaceholder: '请输入公司名称',
        formPhonePlaceholder: '请输入联系电话',
        formEmailPlaceholder: '请输入邮箱地址',
        formMessagePlaceholder: '请告诉我们您的需求...',
        formRoleSelect: '请选择',
        formRoleBrand: '品牌方',
        formRoleDesigner: '设计师',
        formRoleSupplier: '包材商',
        formRoleOther: '其他'
    },
    en: {
        // Hero Section
        //heroTitle1: 'Revolutionize Beauty Packaging Sourcing',
        heroTitle1: 'Beauty Sourcing Reimagined',
        heroTitle2: 'From AI Sourcing to 3D Design',
        heroSubtitle: 'Global AI platform for beauty packaging. Our connection reshape the journey from inspiration to production.',
        heroCta1: 'For Brands/Designers | Start Sourcing',
        heroCta2: 'For Suppliers | Join us',
        
        // Pain Points Section
        painTitle: 'Slowed by Sourcing?',
        painSubtitle: 'The sourcing ecosystem is fragmented, opaque, and inefficient.',
        painBrandTitle: 'For Brands & Designers',
        painSupplierTitle: 'For Packaging Suppliers',
        painCard1Title: 'Inefficient Sourcing',
        painCard2Title: 'Communication Gaps',
        painCard3Title: 'Compliance Risks',
        painCard4Title: 'Costly Acquisition',
        painCard5Title: 'Limited Exposure',
        painCard6Title: 'Hidden Capabilities',
        
        // Solutions Section
        solutionTitle: 'Packvisual: Smarter Supply & Demand Driven by AI',
        solutionSubtitle: 'Three core pillars break down silos to build a transparent, efficient B2B ecosystem.',
        pillar1Title: 'The Sourcing Engine: AI-Powered Matching',
        pillar1Subtitle: 'Stop searching, Start connecting.',
        pillar1Feature1: 'Upload an image or specs; instantly match with qualified global suppliers.',
        pillar1Feature2: 'Instantly filter and compare options in our extensive packaging database.',
        pillar1Feature3: 'Connect directly with suppliers for immediate, first-hand quotes.',
        pillar2Title: 'The 3D Configurator: Real-Time Collaboration',
        pillar2Subtitle: 'Go Beyond Static Images to Dynamic Design.',
        pillar2Feature1: 'Edit materials, colors, and components in the 3D cloud editor',
        pillar2Feature2: 'Share 3D configurations for seamless team collaboration',
        pillar2Feature3: 'Visualize exact requirements to eliminate unqualified inquiries and secure accurate quotes',
        pillar3Title: 'Mobile Sales Toolkit: Empower Your Field Team',
        pillar3Subtitle: 'Bridging the gap between physical sales and digital collaboration',
        pillar3Feature1: 'Present your full product line on any device during sales visits or trade shows',
        pillar3Feature2: 'Link smart physical samples directly to cloud 3D models for a true hands-on experience.',
        pillar3Feature3: 'Accelerate deals with rapid virtual prototyping and precise design communication.',
        
        // Core Values Section
        valueTitle: 'Exclusive Value, Tailored to Your Role',
        valueTab1: 'For Brands & Designers',
        valueTab2: 'For Suppliers',
        valueBrand1Title: 'Indie Brands - 10x Sourcing Efficiency',
        valueBrand1Desc: 'Find low-MOQ materials or match reference images instantly with AI',
        valueBrand2Title: 'Enterprise - Compliance & Cost Reduction',
        valueBrand2Desc: 'Easily verify supplier certifications (ISO, GRS) and connect directly, cutting out middlemen.',
        valueBrand3Title: 'Design Agencies - What You See Is What You Get',
        valueBrand3Desc: 'Bring ideas to life with 3D virtual samples. Present and collaborate from anywhere.',
        valueSupplier1Title: 'Global Marketing Engine',
        valueSupplier1Desc: 'Boost your traffic and showcase your capabilities to global buyers',
        valueSupplier2Title: 'Offline Deal-Closer',
        valueSupplier2Desc: 'Empower your sales team with a mobile app to finalize custom designs and close deals faster.',
        valueSupplier3Title: 'High-Quality Leads',
        valueSupplier3Desc: 'Stop wasting time on bad inquiries. Get qualified leads with precise, AI-configured requirements.',
        
        // User Journey Section
        journeyTitle: 'Reshape Your Sourcing Experience in 5 Steps',
        journeyStep1: 'AI Discovery',
        journeyStep1Desc: 'Use keywords or images to instantly find products and suppliers',
        journeyStep2: 'Evaluate & Filter',
        journeyStep2Desc: 'Review specs, certifications, and supplier profiles in detail',
        journeyStep3: '3D Customization',
        journeyStep3Desc: 'Use the 3D Mockup to edit colors, finishes, and components in real-time',
        journeyStep4: 'Finalize Specs',
        journeyStep4Desc: 'Export high-res renders and tech specs. Save your project to the cloud',
        journeyStep5: 'Send Inquiry',
        journeyStep5Desc: 'Send your finalized project to suppliers for a precise, qualified quote',
        
        // Final CTA Section
        finalCtaTitle: 'Ready to Join the Future of Beauty Packaging?',
        finalCtaSubtitle: 'Whether you\'re a brand seeking the next "it" package or a supplier looking to grow, Packvisual is your ultimate solution.',
        finalCta1: 'Experience AI Sourcing Now',
        finalCta2: 'Apply for Free Onboarding',
        
        // Modal Form
        modalTitle: 'Start Your Experience Now',
        modalSubtitle: 'Fill in the information below and we\'ll contact you soon',
        formName: 'Name',
        formCompany: 'Company Name',
        formPhone: 'Phone',
        formEmail: 'Email',
        formRole: 'Your Role',
        formMessage: 'Message',
        formSubmit: 'Submit',
        formNamePlaceholder: 'Enter your name',
        formCompanyPlaceholder: 'Enter company name',
        formPhonePlaceholder: 'Enter phone number',
        formEmailPlaceholder: 'Enter email address',
        formMessagePlaceholder: 'Tell us your needs...',
        formRoleSelect: 'Please select',
        formRoleBrand: 'Brand',
        formRoleDesigner: 'Designer',
        formRoleSupplier: 'Supplier',
        formRoleOther: 'Other'
    }
};

// Current language
let currentLang = 'zh';

// Smooth scrolling for CTA buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Add click effect
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
        
        // Open lead form modal for all buttons
        openLeadFormModal();
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll('.pain-card, .solution-card, .value-item, .journey-step, .staggered-item, .tab-panel');
animateElements.forEach(el => {
    observer.observe(el);
});

// Tab System
const tabButtons = document.querySelectorAll('.tab-button');
const tabPanels = document.querySelectorAll('.tab-panel');

tabButtons.forEach(button => {
    button.addEventListener('click', function() {
        const targetTab = this.getAttribute('data-tab');
        
        // Remove active class from all buttons and panels
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanels.forEach(panel => panel.classList.remove('active'));
        
        // Add active class to clicked button and corresponding panel
        this.classList.add('active');
        const targetPanel = document.getElementById(targetTab);
        if (targetPanel) {
            targetPanel.classList.add('active');
        }
        
        // Add smooth transition effect
        const container = this.closest('.tabs-container');
        container.style.transform = 'scale(0.98)';
        setTimeout(() => {
            container.style.transform = '';
        }, 150);
    });
});

// Parallax effect for hero background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    const heroBg = document.querySelector('.geometric-bg');
    
    if (heroBg && scrolled < heroSection.offsetHeight) {
        heroBg.style.transform = `translateY(${rate}px)`;
    }
});

// Navbar scroll effect (if navbar is added later)
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// Counter animation for statistics (if added later)
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60 FPS
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// 3D hover effects for cards
document.querySelectorAll('.pain-card, .value-item, .solution-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) rotateX(5deg)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotateX(0)';
    });
});

// Timeline progression effect
function initTimelineEffect() {
    const timeline = document.querySelector('.journey-timeline');
    const steps = document.querySelectorAll('.journey-step');
    
    if (!timeline || steps.length === 0) return;
    
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate timeline line
                const timelineLine = document.querySelector('.timeline-line');
                if (timelineLine) {
                    timelineLine.style.animation = 'lineGrow 2s ease-out forwards';
                }
                
                // Animate steps in sequence
                steps.forEach((step, index) => {
                    setTimeout(() => {
                        step.style.transform = 'translateY(0)';
                        step.style.opacity = '1';
                    }, index * 200);
                });
            }
        });
    }, { threshold: 0.5 });
    
    timelineObserver.observe(timeline);
}

// Add timeline line grow animation
const style = document.createElement('style');
style.textContent = `
    @keyframes lineGrow {
        from {
            transform: translateY(-50%) scaleX(0);
            transform-origin: left center;
        }
        to {
            transform: translateY(-50%) scaleX(1);
            transform-origin: left center;
        }
    }
`;
document.head.appendChild(style);

// Typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Define colors based on type
    let bgColor;
    if (type === 'success') {
        bgColor = 'linear-gradient(135deg, #A78BFA, #C084FC)';
    } else if (type === 'error') {
        bgColor = 'linear-gradient(135deg, #F040C0, #F06060)';
    } else {
        bgColor = 'linear-gradient(135deg, #A040F0, #40C0F0)';
    }
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${bgColor};
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(160, 64, 240, 0.3);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease-out;
        max-width: 300px;
        word-wrap: break-word;
    `;
    
    const content = notification.querySelector('.notification-content');
    content.style.cssText = `
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
    `;
    
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 20px;
        cursor: pointer;
        padding: 0;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close functionality
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 3000);
}

// Loading animation for the page
window.addEventListener('load', () => {
    // Add loaded class to body for CSS animations
    document.body.classList.add('loaded');
    
    // Trigger hero animations
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const ctaGroup = document.querySelector('.cta-group');
    
    if (heroTitle) {
        setTimeout(() => {
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 200);
    }
    
    if (heroSubtitle) {
        setTimeout(() => {
            heroSubtitle.style.opacity = '1';
            heroSubtitle.style.transform = 'translateY(0)';
        }, 400);
    }
    
    if (ctaGroup) {
        setTimeout(() => {
            ctaGroup.style.opacity = '1';
            ctaGroup.style.transform = 'translateY(0)';
        }, 600);
    }
});

// Mobile menu toggle (for future navbar implementation)
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
}

// Form validation (for contact forms if added later)
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        const value = input.value.trim();
        const errorElement = input.parentNode.querySelector('.error-message');
        
        if (!value) {
            showFieldError(input, '此字段为必填项');
            isValid = false;
        } else if (input.type === 'email' && !isValidEmail(value)) {
            showFieldError(input, '请输入有效的邮箱地址');
            isValid = false;
        } else {
            clearFieldError(input);
        }
    });
    
    return isValid;
}

function showFieldError(field, message) {
    field.classList.add('error');
    
    let errorElement = field.parentNode.querySelector('.error-message');
    if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        field.parentNode.appendChild(errorElement);
    }
    
    errorElement.textContent = message;
    errorElement.style.color = '#F04040';
    errorElement.style.fontSize = '12px';
    errorElement.style.marginTop = '4px';
}

function clearFieldError(field) {
    field.classList.remove('error');
    const errorElement = field.parentNode.querySelector('.error-message');
    if (errorElement) {
        errorElement.remove();
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll events
const debouncedScroll = debounce(() => {
    // Scroll-dependent functions can be added here
}, 16); // ~60fps

window.addEventListener('scroll', debouncedScroll);

// Lazy loading for images (if images are added later)
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initLazyLoading();
    initTimelineEffect(); // Initialize timeline effect
    
    // Add CSS class for loaded state
    document.body.classList.add('loaded');
    
    // Start any initial animations
    setTimeout(() => {
        const heroElements = document.querySelectorAll('.hero-title, .hero-subtitle, .cta-group');
        heroElements.forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }, 500);
});

// Error handling
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
    // Optionally show user-friendly error message
});

// Export functions for potential external use
window.PackVisual = {
    showNotification,
    validateForm,
    animateCounters
};

// Lead Form Modal Functions
function openLeadFormModal() {
    const modal = document.getElementById('leadFormModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeLeadFormModal() {
    const modal = document.getElementById('leadFormModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        
        // Reset form
        const form = document.getElementById('leadForm');
        if (form) {
            form.reset();
            // Clear any error messages
            form.querySelectorAll('.error-message').forEach(msg => msg.remove());
            form.querySelectorAll('.error').forEach(field => field.classList.remove('error'));
        }
    }
}

// Modal event listeners
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('leadFormModal');
    const closeBtn = modal?.querySelector('.modal-close');
    const overlay = modal?.querySelector('.modal-overlay');
    const form = document.getElementById('leadForm');
    
    // Close modal on close button click
    if (closeBtn) {
        closeBtn.addEventListener('click', closeLeadFormModal);
    }
    
    // Close modal on overlay click
    if (overlay) {
        overlay.addEventListener('click', closeLeadFormModal);
    }
    
    // Close modal on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal?.classList.contains('active')) {
            closeLeadFormModal();
        }
    });
    
    // Form submission
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Validate form
            if (!validateForm(form)) {
                return;
            }
            
            // Disable submit button to prevent double submission
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = '提交中...';
            
            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            
            console.log('表单数据:', data);
            
            // Close modal immediately after validation
            closeLeadFormModal();
            
            // Prepare email content
            const emailSubject = '新的留资表单提交 - PackVisual';
            const emailBody = `
您收到一条新的留资信息：

姓名：${data.userName}
公司名称：${data.company}
联系电话：${data.phone}
邮箱：${data.email || '未填写'}
用户角色：${getUserTypeLabel(data.userType)}
留言：${data.message || '无'}

提交时间：${new Date().toLocaleString('zh-CN')}
            `.trim();
            
            try {
                console.log('正在发送表单数据...', data);
                
                // Send email using FormSubmit service (free, no backend needed)
                const response = await fetch('https://formsubmit.co/ajax/liyong@realibox.com', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        _subject: emailSubject,
                        _template: 'box',
                        _captcha: 'false',
                        name: data.userName,
                        company: data.company,
                        phone: data.phone,
                        email: data.email || '未提供',
                        userType: getUserTypeLabel(data.userType),
                        message: data.message || '无留言',
                        submittedAt: new Date().toLocaleString('zh-CN')
                    })
                });
                
                console.log('响应状态:', response.status);
                const result = await response.json();
                console.log('响应数据:', result);
                
                if (response.ok) {
                    console.log('Form submitted successfully:', data);
                    showNotification('感谢您的提交！我们会尽快与您联系。', 'success');
                } else {
                    console.error('提交失败，响应:', result);
                    showNotification('表单已提交，但邮件可能未成功发送。我们会尽快处理。', 'success');
                }
            } catch (error) {
                console.error('Form submission error:', error);
                showNotification('表单已保存，我们会尽快与您联系。', 'success');
            }
        });
    }
});

// Helper function to get user type label
function getUserTypeLabel(value) {
    const labels = currentLang === 'zh' ? {
        'brand': '品牌方',
        'designer': '设计师',
        'supplier': '包材商',
        'other': '其他'
    } : {
        'brand': 'Brand',
        'designer': 'Designer',
        'supplier': 'Supplier',
        'other': 'Other'
    };
    return labels[value] || value;
}

// Language Switching Function
function switchLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    
    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    
    // Hero Section
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.innerHTML = `
            ${t.heroTitle1}<br>
            <span class="gradient-text">${t.heroTitle2}</span>
        `;
    }
    
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) heroSubtitle.textContent = t.heroSubtitle;
    
    const ctaBtns = document.querySelectorAll('.hero .cta-group .btn');
    if (ctaBtns[0]) ctaBtns[0].textContent = t.heroCta1;
    if (ctaBtns[1]) ctaBtns[1].textContent = t.heroCta2;
    
    // Pain Points Section
    const painTitle = document.querySelector('.pain-points .section-title');
    if (painTitle) painTitle.textContent = t.painTitle;
    
    const painSubtitle = document.querySelector('.pain-points .section-subtitle');
    if (painSubtitle) painSubtitle.textContent = t.painSubtitle;
    
    const painSectionTitles = document.querySelectorAll('.pain-section .section-title');
    if (painSectionTitles[0]) painSectionTitles[0].textContent = t.painBrandTitle;
    if (painSectionTitles[1]) painSectionTitles[1].textContent = t.painSupplierTitle;
    
    const painCards = document.querySelectorAll('.pain-card-item');
    const painCardData = [
        {title: t.painCard1Title, desc: t.painCard1Desc},
        {title: t.painCard2Title, desc: t.painCard2Desc},
        {title: t.painCard3Title, desc: t.painCard3Desc},
        {title: t.painCard4Title, desc: t.painCard4Desc},
        {title: t.painCard5Title, desc: t.painCard5Desc},
        {title: t.painCard6Title, desc: t.painCard6Desc}
    ];
    painCards.forEach((card, index) => {
        if (painCardData[index]) {
            const strong = card.querySelector('strong');
            const p = card.querySelector('p');
            if (strong) strong.textContent = painCardData[index].title;
            if (p) p.textContent = painCardData[index].desc;
        }
    });
    
    // Solutions Section
    const solutionTitle = document.querySelector('.solutions .section-title');
    if (solutionTitle) solutionTitle.textContent = t.solutionTitle;
    
    const solutionSubtitle = document.querySelector('.solutions .section-subtitle');
    if (solutionSubtitle) solutionSubtitle.textContent = t.solutionSubtitle;
    
    // Pillar 1
    const pillar1 = document.querySelectorAll('.solution-item')[0];
    if (pillar1) {
        const cardTitle = pillar1.querySelector('.card-title');
        const cardSubtitle = pillar1.querySelector('.card-subtitle');
        const cardDesc = pillar1.querySelector('.card-desc');
        if (cardTitle) cardTitle.textContent = t.pillar1Title;
        if (cardSubtitle) cardSubtitle.textContent = t.pillar1Subtitle;
        if (cardDesc) cardDesc.textContent = t.pillar1Desc;
        
        const features = pillar1.querySelectorAll('.feature-list li');
        if (features[0]) features[0].innerHTML = `<strong>${t.pillar1Feature1}</strong>${t.pillar1Feature1Desc}`;
        if (features[1]) features[1].innerHTML = `<strong>${t.pillar1Feature2}</strong>${t.pillar1Feature2Desc}`;
        if (features[2]) features[2].innerHTML = `<strong>${t.pillar1Feature3}</strong>${t.pillar1Feature3Desc}`;
        if (features[3]) features[3].innerHTML = `<strong>${t.pillar1Feature4}</strong>${t.pillar1Feature4Desc}`;
    }
    
    // Pillar 2
    const pillar2 = document.querySelectorAll('.solution-item')[1];
    if (pillar2) {
        const cardTitle = pillar2.querySelector('.card-title');
        const cardSubtitle = pillar2.querySelector('.card-subtitle');
        const cardDesc = pillar2.querySelector('.card-desc');
        if (cardTitle) cardTitle.textContent = t.pillar2Title;
        if (cardSubtitle) cardSubtitle.textContent = t.pillar2Subtitle;
        if (cardDesc) cardDesc.textContent = t.pillar2Desc;
        
        const features = pillar2.querySelectorAll('.feature-list li');
        if (features[0]) features[0].innerHTML = `<strong>${t.pillar2Feature1}</strong>${t.pillar2Feature1Desc}`;
        if (features[1]) features[1].innerHTML = `<strong>${t.pillar2Feature2}</strong>${t.pillar2Feature2Desc}`;
        if (features[2]) features[2].innerHTML = `<strong>${t.pillar2Feature3}</strong>${t.pillar2Feature3Desc}`;
        if (features[3]) features[3].innerHTML = `<strong>${t.pillar2Feature4}</strong>${t.pillar2Feature4Desc}`;
    }
    
    // Pillar 3
    const pillar3 = document.querySelectorAll('.solution-item')[2];
    if (pillar3) {
        const cardTitle = pillar3.querySelector('.card-title');
        const cardSubtitle = pillar3.querySelector('.card-subtitle');
        const cardDesc = pillar3.querySelector('.card-desc');
        if (cardTitle) cardTitle.textContent = t.pillar3Title;
        if (cardSubtitle) cardSubtitle.textContent = t.pillar3Subtitle;
        if (cardDesc) cardDesc.textContent = t.pillar3Desc;
        
        const features = pillar3.querySelectorAll('.feature-list li');
        if (features[0]) features[0].innerHTML = `<strong>${t.pillar3Feature1}</strong>${t.pillar3Feature1Desc}`;
        if (features[1]) features[1].innerHTML = `<strong>${t.pillar3Feature2}</strong>${t.pillar3Feature2Desc}`;
        if (features[2]) features[2].innerHTML = `<strong>${t.pillar3Feature3}</strong>${t.pillar3Feature3Desc}`;
    }
    
    // Core Values Section
    const valueTitle = document.querySelector('.core-values .section-title');
    if (valueTitle) valueTitle.textContent = t.valueTitle;
    
    const tabButtons = document.querySelectorAll('.tab-button');
    if (tabButtons[0]) tabButtons[0].textContent = t.valueTab1;
    if (tabButtons[1]) tabButtons[1].textContent = t.valueTab2;
    
    // Brand Tab
    const brandTab = document.getElementById('brands');
    if (brandTab) {
        const valueItems = brandTab.querySelectorAll('.value-item');
        if (valueItems[0]) {
            valueItems[0].querySelector('h4').textContent = t.valueBrand1Title;
            valueItems[0].querySelector('p').textContent = t.valueBrand1Desc;
        }
        if (valueItems[1]) {
            valueItems[1].querySelector('h4').textContent = t.valueBrand2Title;
            valueItems[1].querySelector('p').textContent = t.valueBrand2Desc;
        }
        if (valueItems[2]) {
            valueItems[2].querySelector('h4').textContent = t.valueBrand3Title;
            valueItems[2].querySelector('p').textContent = t.valueBrand3Desc;
        }
    }
    
    // Supplier Tab
    const supplierTab = document.getElementById('suppliers');
    if (supplierTab) {
        const valueItems = supplierTab.querySelectorAll('.value-item');
        if (valueItems[0]) {
            valueItems[0].querySelector('h4').textContent = t.valueSupplier1Title;
            valueItems[0].querySelector('p').textContent = t.valueSupplier1Desc;
        }
        if (valueItems[1]) {
            valueItems[1].querySelector('h4').textContent = t.valueSupplier2Title;
            valueItems[1].querySelector('p').textContent = t.valueSupplier2Desc;
        }
        if (valueItems[2]) {
            valueItems[2].querySelector('h4').textContent = t.valueSupplier3Title;
            valueItems[2].querySelector('p').textContent = t.valueSupplier3Desc;
        }
    }
    
    // User Journey Section
    const journeyTitle = document.querySelector('.user-journey .section-title');
    if (journeyTitle) journeyTitle.textContent = t.journeyTitle;
    
    const journeySteps = document.querySelectorAll('.journey-step');
    const journeyData = [
        {title: t.journeyStep1, desc: t.journeyStep1Desc},
        {title: t.journeyStep2, desc: t.journeyStep2Desc},
        {title: t.journeyStep3, desc: t.journeyStep3Desc},
        {title: t.journeyStep4, desc: t.journeyStep4Desc},
        {title: t.journeyStep5, desc: t.journeyStep5Desc}
    ];
    journeySteps.forEach((step, index) => {
        if (journeyData[index]) {
            const stepTitle = step.querySelector('.step-title');
            const stepDesc = step.querySelector('.step-content p');
            if (stepTitle) stepTitle.textContent = journeyData[index].title;
            if (stepDesc) stepDesc.textContent = journeyData[index].desc;
        }
    });
    
    // Final CTA Section
    const finalCtaTitle = document.querySelector('.final-cta .cta-title');
    if (finalCtaTitle) finalCtaTitle.textContent = t.finalCtaTitle;
    
    const finalCtaSubtitle = document.querySelector('.final-cta .cta-subtitle');
    if (finalCtaSubtitle) finalCtaSubtitle.textContent = t.finalCtaSubtitle;
    
    const finalCtaBtns = document.querySelectorAll('.final-cta .cta-group .btn');
    if (finalCtaBtns[0]) finalCtaBtns[0].textContent = t.finalCta1;
    if (finalCtaBtns[1]) finalCtaBtns[1].textContent = t.finalCta2;
    
    // Modal Form
    const modalTitle = document.querySelector('.modal-title');
    if (modalTitle) modalTitle.textContent = t.modalTitle;
    
    const modalSubtitle = document.querySelector('.modal-subtitle');
    if (modalSubtitle) modalSubtitle.textContent = t.modalSubtitle;
    
    const formLabels = document.querySelectorAll('.lead-form label');
    if (formLabels[0]) formLabels[0].innerHTML = `${t.formName} <span class="required">*</span>`;
    if (formLabels[1]) formLabels[1].innerHTML = `${t.formCompany} <span class="required">*</span>`;
    if (formLabels[2]) formLabels[2].innerHTML = `${t.formPhone} <span class="required">*</span>`;
    if (formLabels[3]) formLabels[3].textContent = t.formEmail;
    if (formLabels[4]) formLabels[4].innerHTML = `${t.formRole} <span class="required">*</span>`;
    if (formLabels[5]) formLabels[5].textContent = t.formMessage;
    
    const formInputs = document.querySelectorAll('.lead-form input, .lead-form textarea');
    if (formInputs[0]) formInputs[0].placeholder = t.formNamePlaceholder;
    if (formInputs[1]) formInputs[1].placeholder = t.formCompanyPlaceholder;
    if (formInputs[2]) formInputs[2].placeholder = t.formPhonePlaceholder;
    if (formInputs[3]) formInputs[3].placeholder = t.formEmailPlaceholder;
    if (formInputs[4]) formInputs[4].placeholder = t.formMessagePlaceholder;
    
    const roleSelect = document.getElementById('userType');
    if (roleSelect) {
        const options = roleSelect.querySelectorAll('option');
        if (options[0]) options[0].textContent = t.formRoleSelect;
        if (options[1]) options[1].textContent = t.formRoleBrand;
        if (options[2]) options[2].textContent = t.formRoleDesigner;
        if (options[3]) options[3].textContent = t.formRoleSupplier;
        if (options[4]) options[4].textContent = t.formRoleOther;
    }
    
    const submitBtn = document.querySelector('.lead-form button[type="submit"]');
    if (submitBtn) submitBtn.textContent = t.formSubmit;
    
    // Save language preference
    localStorage.setItem('preferredLanguage', lang);
}

// Initialize language switcher
document.addEventListener('DOMContentLoaded', () => {
    // Check for saved language preference
    const savedLang = localStorage.getItem('preferredLanguage') || 'zh';
    
    // Set initial language
    if (savedLang !== 'zh') {
        switchLanguage(savedLang);
    } else {
        // Set Chinese as active by default
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === 'zh');
        });
    }
    
    // Add event listeners to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            if (lang !== currentLang) {
                switchLanguage(lang);
            }
        });
    });
});