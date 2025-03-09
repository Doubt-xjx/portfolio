'use strict'; // 使用严格模式，避免一些常见的JavaScript陷阱

// ===== 工具函数 =====
// 切换元素的active类的通用函数
const elementToggleFunc = function (elem) {
    if (!elem) return; // 添加空值检查
    elem.classList.toggle("active");
}

// 导航文字映射表
const PAGE_MAPPING = {
    '关于我': 'about',
    '简历': 'resume',
    '作品集': 'portfolio',
    // 如果之后需要添加更多页面，在这里添加映射
    'blog': 'blog',
    'contact': 'contact'
};

// ===== 侧边栏功能 =====
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebarBtn) {
    sidebarBtn.addEventListener("click", function() { 
        elementToggleFunc(sidebar);
    });
}

// ===== 作品集筛选功能 =====
const select = document.querySelector('[data-select]');
const selectItems = document.querySelectorAll('[data-select-item]');
const selectValue = document.querySelector('[data-select-value]');
const filterBtn = document.querySelectorAll('[data-filter-btn]');
const filterItems = document.querySelectorAll('[data-filter-item]');

// 筛选函数
const filterFunc = function (selectedValue) {
    if (!filterItems.length) return;

    filterItems.forEach(item => {
        if (selectedValue === "all" || selectedValue === item.dataset.category) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// 初始化筛选器
if (select && selectValue) {
    // 下拉选择器点击事件
    select.addEventListener('click', function () { 
        elementToggleFunc(this);
    });

    // 选项点击事件
    selectItems.forEach(item => {
        item.addEventListener('click', function() {
            const selectedValue = this.innerText.toLowerCase();
            selectValue.innerText = this.innerText;
            elementToggleFunc(select);
            filterFunc(selectedValue);
        });
    });
}

// 筛选按钮功能
let lastClickedBtn = filterBtn[0];
if (filterBtn.length) {
    filterBtn.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            const selectedValue = this.innerText.toLowerCase();
            selectValue.innerText = this.innerText;
            filterFunc(selectedValue);

            if (lastClickedBtn) {
                lastClickedBtn.classList.remove('active');
            }
            this.classList.add('active');
            lastClickedBtn = this;
        });
    });
}

// ===== 页面导航功能 =====
const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

// 初始化页面状态
const initializePageState = () => {
    if (!navigationLinks.length || !pages.length) return;
    
    // 确保至少有一个页面和导航项是激活的
    let hasActiveNav = false;
    let hasActivePage = false;
    
    navigationLinks.forEach(nav => {
        if (nav.classList.contains('active')) hasActiveNav = true;
    });
    
    pages.forEach(page => {
        if (page.classList.contains('active')) hasActivePage = true;
    });
    
    // 如果没有激活的导航项和页面，激活第一个
    if (!hasActiveNav && !hasActivePage && navigationLinks[0] && pages[0]) {
        navigationLinks[0].classList.add('active');
        pages[0].classList.add('active');
    }
}

// 页面导航事件处理
if (navigationLinks.length && pages.length) {
    navigationLinks.forEach((link, i) => {
        link.addEventListener('click', function() {
            const navText = this.innerHTML.trim(); // 获取导航文字
            const pageId = PAGE_MAPPING[navText] || navText.toLowerCase(); // 获取对应的页面标识
            
            // 更新导航链接状态
            navigationLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            
            // 更新页面显示状态
            let pageFound = false;
            pages.forEach(page => {
                if (pageId === page.dataset.page) {
                    page.classList.add('active');
                    window.scrollTo(0, 0);
                    pageFound = true;
                } else {
                    page.classList.remove('active');
                }
            });

            // 如果没有找到对应页面，打印警告
            if (!pageFound) {
                console.warn(`No matching page found for navigation: ${navText} (${pageId})`);
            }
        });
    });
}

// 初始化页面状态
initializePageState();