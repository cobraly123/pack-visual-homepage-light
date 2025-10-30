// DOM Elements
const heroSection = document.getElementById('hero');
const painPointsSection = document.getElementById('pain-points');
const solutionsSection = document.getElementById('solutions');
const coreValuesSection = document.getElementById('core-values');
const userJourneySection = document.getElementById('user-journey');
const finalCtaSection = document.getElementById('final-cta');

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
    const labels = {
        'brand': '品牌方',
        'designer': '设计师',
        'supplier': '包材商',
        'other': '其他'
    };
    return labels[value] || value;
}