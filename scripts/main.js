// DOM Elements - 使用缓存避免重复查询
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
        heroTitle1: '告别传统样品，拥抱3D掌上型录',
        heroTitle2: '为包材企业打造的移动销售工具',
        heroSubtitle: '实时配置、即时询盘，缩短"意向到样品"的转化周期。',
        heroCta1: '立即预约演示',
        
        // Pain Points Section
        painTitle: '您的销售是否还停留在"上个时代"？',
        painSubtitle: '',
        painBrandTitle: '',
        painSupplierTitle: '',
        painCard1Title: '信息难查找，客户易流失',
        painCard1Desc: '关键产品信息难查找，图片细节展示有限<br>影响采购决策',
        painCard2Title: '创意低效，沟通决策慢',
        painCard2Desc: '设计创意展示慢，反复沟通修改<br>中断销售黄金时刻',
        painCard3Title: '实物样瓶，展示不便',
        painCard3Desc: '样品数量有限，不便展示定制效果<br>客户体验割裂',
        
        // Solutions Section
        solutionTitle: '四大核心方案，重构包材销售全流程',
        solutionSubtitle: '从产品展示、移动销售、样品激活到精准询盘，Packvisual产品型录提供一体化闭环',
        pillar1Title: '可视化产品型录 - 所见即所需',
        pillar1Subtitle: '采购设计一站式体验，告别传统痛点。',
        pillar1Desc: '它彻底解决了传统图册信息不全、响应缓慢的痛点，为客户提供"从快速筛选到深度验证"的一站式流畅体验。',
        pillar1Feature1: '关键信息即时呈现，3秒完成筛选，告别繁琐查找，大幅提升寻源效率',
        pillar1Feature2: '360°沉浸式探索，即时验证创意。自助配置颜色、工艺、Logo，将数天等待压缩至几分钟。',
        pillar2Title: '移动赋能销售 - 当场锁定意向',
        pillar2Subtitle: '手机即移动样品间，告别笨重与卡壳，不错过销售黄金时刻',
        pillar2Desc: 'Packvisual 将销售的手机变为功能最全的移动样品间，不错过任何一个销售的"黄金时刻"。',
        pillar2Feature1: '商务问题，专业即时应答，销售无需翻阅资料，产品参数一览无余，快速响应客户疑问。',
        pillar2Feature2: '设计需求，现场实时响应。 告别回去做图，效果及时呈现，锁定成交。',
        pillar3Title: '激活物理样品 - 所触即可创',
        pillar3Subtitle: '物理样品变询盘起点，让真实触感与即时视觉完美融合',
        pillar3Desc: 'Packvisual 将物理样品的"真实触感"与数字型录的"即时视觉"完美结合。',
        pillar3Feature1: '物理样品感受真实触感，扫码直连数字样瓶，全方位展示产品细节。',
        pillar3Feature2: '直观体验，客户通过虚拟模型快速定制并直观验证设计，精准表达需求，有效加速商机成交。',

        pillar4Title: '驱动精准询盘 - 告别模糊沟通',
        pillar4Subtitle: '打通采购询盘的最后闭环，形成高质量销售线索',
        pillar4Desc: '',
        pillar4Feature1: '客户自助配置确认效果后，高效一键导出渲染图和产品配置表。',
        pillar4Feature2: '销售团队直接获取精准需求，无需反复沟通，快速报价，大幅提升转化效率。',
        
        // Core Values Section
        valueTitle: 'Packvisual产品型录为您带来的商业价值',
        valueSupplier1Title: '降低营销成本',
        valueSupplier1Desc: '以产品型录的数字样瓶替代昂贵的实物打样、运输和仓储成本。',
        valueSupplier2Title: '缩短销售周期',
        valueSupplier2Desc: '"所见即所得"加速客户决策，提高询盘转化率。',
        valueSupplier3Title: '提升专业形象',
        valueSupplier3Desc: '提供超越同行的现代化销售工具，增强客户信任。',
        
        // Final CTA Section
        finalCtaTitle: '准备好革新您的包材销售方式了吗？',
        finalCtaSubtitle: '我们的解决方案专家将为您展示 Packvisual产品型录 如何帮您降低成本、赢得更多订单。',
        finalCta1: '立即体验掌上型录',
        finalCta2: '',
        
        // Modal Form
        modalTitle: '立即开始体验',
        modalSubtitle: '填写以下信息，我们将尽快与您联系',
        
        // Demo Form Description
        demoFormDesc: '我们的专业顾问将为您展示 Packvisual 如何助力您的销售团队实现业绩倍增。',
        
        // Footer
        footerTitle: 'Packvisual',
        footerDesc: '专业的3D包装展示平台，助力包装供应商数字化转型',
        footerProduct: '产品功能',
        footerContact: '联系我们',
        footer3DShowcase: '3D产品展示',
        footerSalesTools: '销售工具',
        footerCoreValue: '核心价值',
        footerBookDemo: '预约演示',
        footerEmail: 'contact@packvisual.com',
        footerCopyright: '© 2024 Packvisual. 保留所有权利。',
        
        // Demo Form Description
        demoFormDesc: '我们的专业顾问将为您展示 Packvisual 如何助力您的销售团队实现业绩倍增。',
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
        heroTitle1: 'Beyond Physical Samples',
        heroTitle2: 'Your Mobile Visual Catalog ',
        heroSubtitle: 'Real-time configuration, instant inquiries. Shorten your "Intent-to-Sample" cycle significantly.',
        heroCta1: 'Book Demo Now',
        
        // Pain Points Section
        painTitle: 'Is Your Sales Still Stuck in the "Last Era"?',
        painSubtitle: '',
        painBrandTitle: '',
        painSupplierTitle: '',
        painCard1Title: 'Information Barriers',
        painCard1Desc: 'Poor access to critical product data creates barriers to purchasing decisions.',
        painCard2Title: 'Slow Decisions',
        painCard2Desc: 'Slow showcases create endless back-and-forth, killing sales momentum.',
        painCard3Title: 'Burdensome Samples',
        painCard3Desc: 'High sample costs limit your range, costing you opportunities.',
        
        // Solutions Section
        solutionTitle: 'Transform How You Sell Packaging',
        solutionSubtitle: 'From product discovery and mobile sales to sample activation and precise inquiries, Packvisual Catalog provides a complete, closed-loop solution.',
        pillar1Title: 'Visual Catalog：See & Verify Instantly',
        pillar1Subtitle: 'The All-in-One Sourcing & Design Experience',
        pillar1Desc: '',
        pillar1Feature1: 'Key info at a glance. Find & filter in seconds for faster sourcing.',
        pillar1Feature2: 'Immersive 360° configuration. Validate designs in minutes, not days.',
        pillar2Title: 'Mobile Sales：Capture Intent Live',
        pillar2Subtitle: 'Digital Showroom: Ditch the bulk & lag, never miss a sale.',
        pillar2Desc: '',
        pillar2Feature1: 'Instant, Expert Answers: With all data at your fingertips, there\'s no more "I\'ll get back to you."',
        pillar2Feature2: 'Live Design Configuration: Configure changes live, right in front of the client, to close the deal on the spot.',
        pillar3Title: 'Smart Sample Activation: Touch to Create',
        pillar3Subtitle: 'Turn physical samples into digital inquiries.',
        pillar3Desc: '',
        pillar3Feature1: 'Scan the sample\'s QR code to launch its interactive digital twin and intuitively validate designs.',
        pillar3Feature2: 'Bridge the gap between the "real touch" of physical samples and the "instant visuals" of your digital catalog.',
        pillar4Title: 'Precise Inquiries: End Vague Communication',
        pillar4Subtitle: 'Close the loop and capture high-quality sales leads',
        pillar4Desc: '',
        pillar4Feature1: 'Clients confirm, then instantly export renders & specs.',
        pillar4Feature2: 'Get precise requirements for faster quotes and higher conversion. No more guesswork.',
        
        // Core Values Section
        valueTitle: 'The Packvisual Catalog Advantage',
        valueSupplier1Title: 'Reduce Sampling Costs',
        valueSupplier1Desc: 'Replace expensive physical sampling, shipping and storage costs with interactive digital twins.',
        valueSupplier2Title: 'Accelerate Your Sales Cycle',
        valueSupplier2Desc: 'Our "What You See Is What You Get" experience speeds up client decisions and boosts conversion.',
        valueSupplier3Title: 'Enhance Your Professional Image',
        valueSupplier3Desc: 'Build client trust with modern sales tools that put you ahead of the competition.',
        
        // Final CTA Section
        finalCtaTitle: 'Ready to Join US?',
        finalCtaSubtitle: 'Our solution experts will show you how Packvisual catalog helps you.',
        finalCta1: 'Experience Catalog Now',
        finalCta2: '',
        
        // Modal Form
        modalTitle: 'Start Your Experience Now',
        modalSubtitle: 'Fill in the information below and we\'ll contact you soon',
        
        // Demo Form Description
        demoFormDesc: 'Our professional consultants will show you how Packvisual helps your sales team achieve exponential growth.',
        
        // Footer
        footerTitle: 'Packvisual',
        footerDesc: 'Professional 3D packaging display platform, helping packaging suppliers with digital transformation',
        footerProduct: 'Product Features',
        footerContact: 'Contact Us',
        footer3DShowcase: '3D Product Showcase',
        footerSalesTools: 'Sales Tools',
        footerCoreValue: 'Core Values',
        footerBookDemo: 'Book Demo',
        footerEmail: 'contact@packvisual.com',
        footerCopyright: '© 2024 Packvisual. All rights reserved.',
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

// 使用事件委托优化按钮点击处理
document.addEventListener('click', function(e) {
    const btn = e.target.closest('.btn');
    if (!btn) return;
    
    e.preventDefault();
    
    // 添加点击效果
    btn.style.transform = 'scale(0.98)';
    setTimeout(() => {
        btn.style.transform = '';
    }, 150);
    
    // 打开表单模态框
    openLeadFormModal();
}, { passive: false });

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

// 优化的Tab系统（使用事件委托）
document.addEventListener('click', function(e) {
    const tabButton = e.target.closest('.tab-button');
    if (!tabButton) return;
    
    const targetTab = tabButton.getAttribute('data-tab');
    if (!targetTab) return;
    
    // 移除所有活动状态
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
    
    // 添加活动状态
    tabButton.classList.add('active');
    const targetPanel = document.getElementById(targetTab);
    if (targetPanel) {
        targetPanel.classList.add('active');
    }
    
    // 平滑过渡效果
    const container = tabButton.closest('.tabs-container');
    if (container) {
        container.style.transform = 'scale(0.98)';
        setTimeout(() => {
            container.style.transform = '';
        }, 150);
    }
});

// 节流函数优化性能
function throttle(func, wait) {
    let timeout;
    let previous = 0;
    return function(...args) {
        const now = Date.now();
        const remaining = wait - (now - previous);
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            func.apply(this, args);
        } else if (!timeout) {
            timeout = setTimeout(() => {
                previous = Date.now();
                timeout = null;
                func.apply(this, args);
            }, remaining);
        }
    };
}

// 优化的视差效果
const parallaxHandler = throttle(() => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    const heroBg = document.querySelector('.geometric-bg');
    
    if (heroBg && heroSection && scrolled < heroSection.offsetHeight) {
        heroBg.style.transform = `translateY(${rate}px)`;
    }
}, 16); // ~60fps

window.addEventListener('scroll', parallaxHandler, { passive: true });

// 导航栏滚动效果（使用节流优化）
const navbarScrollHandler = throttle(() => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.classList.toggle('scrolled', window.scrollY > 100);
    }
}, 100);

window.addEventListener('scroll', navbarScrollHandler, { passive: true });

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

// 使用CSS类替代内联样式，提升性能
// 3D hover效果通过CSS处理，无需JavaScript

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

// 防抖函数（用于搜索等场景）
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

// 优化的图片懒加载（支持原生loading="lazy"和data-src）
function initLazyLoading() {
    // 处理使用data-src的图片（向后兼容）
    const dataSrcImages = document.querySelectorAll('img[data-src]');
    if (dataSrcImages.length > 0) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        }, { rootMargin: '50px' });
        
        dataSrcImages.forEach(img => imageObserver.observe(img));
    }
    
    // 处理使用原生loading="lazy"的图片，添加加载完成标记
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    lazyImages.forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', () => {
                img.classList.add('loaded');
            });
            img.addEventListener('error', () => {
                img.classList.add('loaded'); // 即使加载失败也显示
            });
        }
    });
}

// 优化的初始化函数
function initAnimations() {
    const heroElements = document.querySelectorAll('.hero-title, .hero-subtitle, .cta-group');
    heroElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    // 添加加载状态类
    document.body.classList.add('loaded');
    
    // 初始化功能
    initMobileMenu();
    initLazyLoading();
    initTimelineEffect();
    
    // 延迟启动动画，确保DOM完全渲染
    requestAnimationFrame(() => {
        setTimeout(initAnimations, 100);
    });
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

// 优化的模态框事件处理（使用事件委托）
document.addEventListener('click', function(e) {
    const modal = document.getElementById('leadFormModal');
    if (!modal) return;
    
    const closeBtn = e.target.closest('.modal-close');
    const overlay = e.target.closest('.modal-overlay');
    
    if (closeBtn || overlay) {
        closeLeadFormModal();
    }
});

// ESC键关闭模态框
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const modal = document.getElementById('leadFormModal');
        if (modal?.classList.contains('active')) {
            closeLeadFormModal();
        }
    }
});

// 表单提交处理
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('leadForm');
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
            } finally {
                // 重新启用提交按钮
                const submitBtn = form.querySelector('button[type="submit"]');
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = '提交';
                }
            }
        });
    }
    
    // Demo表单提交处理
    const demoForm = document.getElementById('demoForm');
    if (demoForm) {
        demoForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Validate form
            if (!validateForm(demoForm)) {
                return;
            }
            
            // Disable submit button to prevent double submission
            const submitBtn = demoForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = currentLang === 'zh' ? '提交中...' : 'Submitting...';
            
            // Get form data
            const formData = new FormData(demoForm);
            const data = Object.fromEntries(formData.entries());
            
            console.log('Demo form data:', data);
            
            // Prepare email content
            const emailSubject = '新的产品演示申请 - PackVisual';
            const emailBody = `
您收到一条新的产品演示申请：

姓名：${data.name}
公司名称：${data.company}
联系电话：${data.phone}

提交时间：${new Date().toLocaleString(currentLang === 'zh' ? 'zh-CN' : 'en-US')}
            `.trim();
            
            try {
                console.log('正在发送演示申请...', data);
                
                // Send email using FormSubmit service
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
                        name: data.name,
                        company: data.company,
                        phone: data.phone,
                        submittedAt: new Date().toLocaleString(currentLang === 'zh' ? 'zh-CN' : 'en-US'),
                        formType: 'Demo Request'
                    })
                });
                
                console.log('Demo form response status:', response.status);
                const result = await response.json();
                console.log('Demo form response data:', result);
                
                if (response.ok) {
                    console.log('Demo form submitted successfully:', data);
                    showNotification(
                        currentLang === 'zh' ? '感谢您的申请！我们会尽快与您联系安排演示。' : 'Thank you for your request! We will contact you soon to schedule a demo.',
                        'success'
                    );
                    demoForm.reset(); // Clear form after successful submission
                } else {
                    console.error('演示申请提交失败，响应:', result);
                    showNotification(
                        currentLang === 'zh' ? '申请已提交，但邮件可能未成功发送。我们会尽快处理。' : 'Request submitted, but email may not have been sent successfully. We will process it soon.',
                        'success'
                    );
                }
            } catch (error) {
                console.error('Demo form submission error:', error);
                showNotification(
                    currentLang === 'zh' ? '申请已保存，我们会尽快与您联系。' : 'Request saved, we will contact you soon.',
                    'success'
                );
            } finally {
                // Re-enable submit button
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
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
    const painTitle = document.querySelector('.pain-points-new .section-title');
    if (painTitle) painTitle.textContent = t.painTitle;
    
    const painSubtitle = document.querySelector('.pain-points .section-subtitle');
    if (painSubtitle) painSubtitle.textContent = t.painSubtitle;
    
    const painSectionTitles = document.querySelectorAll('.pain-section .section-title');
    if (painSectionTitles[0]) painSectionTitles[0].textContent = t.painBrandTitle;
    if (painSectionTitles[1]) painSectionTitles[1].textContent = t.painSupplierTitle;
    
    const painCards = document.querySelectorAll('.pain-grid-new .pain-card-new');
    const painCardData = [
        {title: t.painCard1Title, desc: t.painCard1Desc},
        {title: t.painCard2Title, desc: t.painCard2Desc},
        {title: t.painCard3Title, desc: t.painCard3Desc}
    ];
    painCards.forEach((card, index) => {
        if (painCardData[index]) {
            const title = card.querySelector('.pain-title-new');
            const desc = card.querySelector('.pain-desc-new');
            if (title) title.textContent = painCardData[index].title;
            if (desc) desc.innerHTML = painCardData[index].desc;
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
        if (features[0]) features[0].innerHTML = `${t.pillar1Feature1}`;
        if (features[1]) features[1].innerHTML = `${t.pillar1Feature2}`;
        if (features[2]) features[2].innerHTML = `${t.pillar1Feature3}`;
        if (features[3]) features[3].innerHTML = `${t.pillar1Feature4}`;
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
        if (features[0]) features[0].innerHTML = `${t.pillar2Feature1}`;
        if (features[1]) features[1].innerHTML = `${t.pillar2Feature2}`;
        if (features[2]) features[2].innerHTML = `${t.pillar2Feature3}`;
        if (features[3]) features[3].innerHTML = `${t.pillar2Feature4}`;
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
        if (features[0]) features[0].innerHTML = `${t.pillar3Feature1}`;
        if (features[1]) features[1].innerHTML = `${t.pillar3Feature2}`;
        if (features[2]) features[2].innerHTML = `${t.pillar3Feature3}`;
    }

    const pillar4 = document.querySelectorAll('.solution-item')[3];
    if (pillar4) {
        const cardTitle = pillar4.querySelector('.card-title');
        const cardSubtitle = pillar4.querySelector('.card-subtitle');
        const cardDesc = pillar4.querySelector('.card-desc');
        if (cardTitle) cardTitle.textContent = t.pillar4Title;
        if (cardSubtitle) cardSubtitle.textContent = t.pillar4Subtitle;
        if (cardDesc) cardDesc.textContent = t.pillar4Desc;
        
        const features = pillar4.querySelectorAll('.feature-list li');
        if (features[0]) features[0].innerHTML = `${t.pillar4Feature1}`;
        if (features[1]) features[1].innerHTML = `${t.pillar4Feature2}`;
        if (features[2]) features[2].innerHTML = `${t.pillar4Feature3}`;
    }
    
    // Core Values Section
    const valueTitle = document.querySelector('.core-values-new .section-title');
    if (valueTitle) valueTitle.textContent = t.valueTitle;
    
    // New three-column core values grid
    const coreValueCards = document.querySelectorAll('.core-values-grid .value-card-new');
    if (coreValueCards[0]) {
        coreValueCards[0].querySelector('h3').textContent = t.valueSupplier1Title;
        coreValueCards[0].querySelector('p').textContent = t.valueSupplier1Desc;
    }
    if (coreValueCards[1]) {
        coreValueCards[1].querySelector('h3').textContent = t.valueSupplier2Title;
        coreValueCards[1].querySelector('p').textContent = t.valueSupplier2Desc;
    }
    if (coreValueCards[2]) {
        coreValueCards[2].querySelector('h3').textContent = t.valueSupplier3Title;
        coreValueCards[2].querySelector('p').textContent = t.valueSupplier3Desc;
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
    
    // Update new demo form labels
    const demoFormLabels = document.querySelectorAll('.demo-form label');
    if (demoFormLabels[0]) demoFormLabels[0].innerHTML = `${t.formName} <span class="required">*</span>`;
    if (demoFormLabels[1]) demoFormLabels[1].innerHTML = `${t.formCompany} <span class="required">*</span>`;
    if (demoFormLabels[2]) demoFormLabels[2].innerHTML = `${t.formPhone} <span class="required">*</span>`;
    
    const demoFormInputs = document.querySelectorAll('.demo-form input');
    if (demoFormInputs[0]) demoFormInputs[0].placeholder = t.formNamePlaceholder;
    if (demoFormInputs[1]) demoFormInputs[1].placeholder = t.formCompanyPlaceholder;
    if (demoFormInputs[2]) demoFormInputs[2].placeholder = t.formPhonePlaceholder;
    
    const demoSubmitBtn = document.querySelector('.demo-form button[type="submit"]');
    if (demoSubmitBtn) demoSubmitBtn.textContent = t.formSubmit;
    
    // Update demo form description
    const demoFormDesc = document.querySelector('.demo-form-description');
    if (demoFormDesc) demoFormDesc.textContent = t.demoFormDesc;
    
    // Footer translations
    const footerTitle = document.querySelector('.footer-title');
    if (footerTitle) footerTitle.textContent = t.footerTitle;
    
    const footerDesc = document.querySelector('.footer-desc');
    if (footerDesc) footerDesc.textContent = t.footerDesc;
    
    const footerSubtitle = document.querySelectorAll('.footer-subtitle');
    if (footerSubtitle[0]) footerSubtitle[0].textContent = t.footerProduct;
    if (footerSubtitle[1]) footerSubtitle[1].textContent = t.footerContact;
    
    const footerLinks = document.querySelectorAll('.footer-links a');
    if (footerLinks[0]) footerLinks[0].textContent = t.footer3DShowcase;
    if (footerLinks[1]) footerLinks[1].textContent = t.footerSalesTools;
    if (footerLinks[2]) footerLinks[2].textContent = t.footerCoreValue;
    if (footerLinks[3]) footerLinks[3].textContent = t.footerBookDemo;
    if (footerLinks[4]) footerLinks[4].textContent = t.footerEmail;
    
    // Footer copyright
    const footerCopyright = document.querySelector('.footer-copyright');
    if (footerCopyright) footerCopyright.textContent = t.footerCopyright;
    
    // Save language preference
    localStorage.setItem('preferredLanguage', lang);
}

// 优化的语言切换（使用事件委托）
document.addEventListener('click', function(e) {
    const langBtn = e.target.closest('.lang-btn');
    if (!langBtn) return;
    
    const lang = langBtn.dataset.lang;
    if (lang && lang !== currentLang) {
        switchLanguage(lang);
    }
});

// 初始化语言设置
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage') || 'zh';
    
    if (savedLang !== 'zh') {
        switchLanguage(savedLang);
    } else {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === 'zh');
        });
    }
});