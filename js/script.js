'use strict';

// ===== 工具函数 =====
const elementToggleFunc = function (elem) {
    if (!elem) return;
    elem.classList.toggle("active");
}

// ===== 侧边栏功能 =====
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebarBtn) {
    sidebarBtn.addEventListener("click", function() { 
        elementToggleFunc(sidebar);
    });
}

// ===== 作品集筛选功能（仅在portfolio.html中使用）=====
if (window.location.pathname.includes('portfolio.html')) {
    const select = document.querySelector('[data-select]');
    const selectItems = document.querySelectorAll('[data-select-item]');
    const selectValue = document.querySelector('[data-select-value]');
    const filterBtn = document.querySelectorAll('[data-filter-btn]');
    const filterItems = document.querySelectorAll('[data-filter-item]');

    // 筛选函数
    const filterFunc = function (selectedValue) {
        if (!filterItems.length) return;

        filterItems.forEach(item => {
            if (selectedValue === "全部" || selectedValue === item.dataset.category) {
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
                const selectedValue = this.innerText;
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
                const selectedValue = this.innerText;
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
} 