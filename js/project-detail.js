document.addEventListener('DOMContentLoaded', function() {
    // 获取URL中的项目ID
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    // 获取项目详情容器
    const detailContainer = document.getElementById('project-detail');

    // 获取模态框元素
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.getElementsByClassName('modal-close')[0];

    // 直接在这里定义项目配置
    const projectConfig = {
        "phjgpt": {
            "title": "普货监管平台",
            "description": "监管工作台和企业工作台的设计，为监管部门和企业提供了全面的运输监管和管理工具。实时的车辆监控、待处理报警概况、企业车辆信息、驾驶员概况等功能，帮助监管人员迅速响应和处理问题。企业工作台则通过报警统计、车辆位置监控、报警高峰时间统计等功能，帮助企业管理层深入了解运输状况，优化资源调配。",
            "category": "网页设计",
            "images": [
                {
                    "src": "./assets/project-images/web-phjgpt/1@2X.png"
                },
                {
                    "src": "./assets/project-images/web-phjgpt/2@2X.png"
                },
                {
                    "src": "./assets/project-images/web-phjgpt/3@2X.png"
                },
                {
                    "src": "./assets/project-images/web-phjgpt/4@2X.png"
                },
                {
                    "src": "./assets/project-images/web-phjgpt/5@2X.png"
                },
                {
                    "src": "./assets/project-images/web-phjgpt/6@2X.png"
                },
                {
                    "src": "./assets/project-images/web-phjgpt/7@2X.png"
                },
                {
                    "src": "./assets/project-images/web-phjgpt/8@2X.png"
                },
                {
                    "src": "./assets/project-images/web-phjgpt/9@2X.png"
                },
                {
                    "src": "./assets/project-images/web-phjgpt/10@2X.png"
                },
                {
                    "src": "./assets/project-images/web-phjgpt/11@2X.png"
                },
                {
                    "src": "./assets/project-images/web-phjgpt/12@2X.png"
                }   
            ]
        },
        "ddjy": {
            "title": "迪迪救援pc端",
            "description": "通过实时监控运营、财务、客户和客服情况，平台有助于提高服务效率，降低成本，并为保险公司提供更准确的财务数据。灵活的计费方案设计使得平台适应不同业务模式，为双方提供更加透明、高效的合作。这一系统的应用将促进道路救援行业与保险行业的协同发展，提升整个行业服务水平。",
            "category": "网页设计",
            "images": [
                {
                    "src": "./assets/project-images/web-ddjy/1@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ddjy/2@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ddjy/3@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ddjy/4@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ddjy/5@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ddjy/6@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ddjy/7@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ddjy/8@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ddjy/9@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ddjy/10@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ddjy/11@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ddjy/12@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ddjy/13@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ddjy/14@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ddjy/15@2X.png"
                }   
            ]
        },
        "ygbxzzfwpt": {
            "title": "阳光保险增值服务平台",
            "description": "为客服团队提供了高效的订单管理和任务监控工具。通过实时监控订单情况、详细查询订单信息以及监控救援任务的详细情况，系统大大提高了客服人员的工作效率，确保了救援服务的快速响应。配置救援服务供应商信息的功能，使得客服团队可以更灵活地协调合作伙伴，提供更优质的服务。这一系统的引入将在客服和救援管理领域带来更高水平的数字化和智能化服务。",
            "category": "网页设计",
            "images": [
                {
                    "src": "./assets/project-images/web-ygbxzzfwpt/1@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ygbxzzfwpt/2@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ygbxzzfwpt/3@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ygbxzzfwpt/4@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ygbxzzfwpt/5@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ygbxzzfwpt/6@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ygbxzzfwpt/7@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ygbxzzfwpt/8@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ygbxzzfwpt/9@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ygbxzzfwpt/10@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ygbxzzfwpt/11@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ygbxzzfwpt/12@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ygbxzzfwpt/13@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ygbxzzfwpt/14@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ygbxzzfwpt/15@2X.png"
                }   
            ]
        },
        "ygbjfgsrcjxhglxt": {
            "title": "阳光北京分公司人车精细化管理系统",
            "description": "阳光北京分公司人车精细化管理系统通过全面集成的车辆与设备管理、实时监控和数据分析功能，提升了车辆调度、运营效率和管理透明度。系统的异常预警和远程指挥功能为公司提供了更高的安全保障，同时证据中心和统计分析的结合能够为决策提供数据支持，有效降低运营成本和风险。该系统的实施将推动公司车辆管理的数字化和智能化，提升整体运营效率和安全性。",
            "category": "网页设计",
            "images": [
                {
                    "src": "./assets/project-images/web-ygbjfgsrcjxhglxt/1@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ygbjfgsrcjxhglxt/2@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ygbjfgsrcjxhglxt/3@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ygbjfgsrcjxhglxt/4@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ygbjfgsrcjxhglxt/5@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ygbjfgsrcjxhglxt/6@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ygbjfgsrcjxhglxt/7@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ygbjfgsrcjxhglxt/8@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ygbjfgsrcjxhglxt/9@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ygbjfgsrcjxhglxt/10@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ygbjfgsrcjxhglxt/11@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ygbjfgsrcjxhglxt/12@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ygbjfgsrcjxhglxt/13@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ygbjfgsrcjxhglxt/14@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ygbjfgsrcjxhglxt/15@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ygbjfgsrcjxhglxt/16@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ygbjfgsrcjxhglxt/17@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ygbjfgsrcjxhglxt/18@2X.png"
                }   
            ]
        },
        "ykglptcjyypt": {
            "title": "云通管理平台场景应用平台",
            "description": "为车辆出行提供了一套完善的解决方案，使其能够更精准、高效地管理未来车辆出行。通过实时监控、统计分析和综合管理各类型车辆，平台有助于保障道路安全、提高交通运输效率，实现更加智慧和可持续的城市交通管理。",
            "category": "网页设计",
            "images": [
                {
                    "src": "./assets/project-images/web-ykglptcjyypt/1@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ykglptcjyypt/2@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ykglptcjyypt/3@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ykglptcjyypt/4@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ykglptcjyypt/5@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ykglptcjyypt/6@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ykglptcjyypt/7@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ykglptcjyypt/8@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ykglptcjyypt/9@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ykglptcjyypt/10@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ykglptcjyypt/11@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ykglptcjyypt/12@2X.png"
                }
            ]
        },
        "ythlpyyjgksh": {
            "title": "一体化理赔运营监控可视化",
            "description": "为用户提供了对案件、车辆、人员、承修方等多方面信息的一站式监控和查询。通过可视化的方式展示各项指标，帮助用户迅速洞察数据，及时做出决策。该系统的引入将大幅提高信息展示的效率和效果，助力用户更好地理解和管理相关数据，促使决策更加智能化。",
            "category": "网页设计",
            "images": [
                {
                    "src": "./assets/project-images/web-ythlpyyjgksh/1@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ythlpyyjgksh/2@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ythlpyyjgksh/3@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ythlpyyjgksh/4@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ythlpyyjgksh/5@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ythlpyyjgksh/6@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ythlpyyjgksh/7@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ythlpyyjgksh/8@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ythlpyyjgksh/9@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ythlpyyjgksh/10@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ythlpyyjgksh/11@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ythlpyyjgksh/12@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ythlpyyjgksh/13@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ythlpyyjgksh/14@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ythlpyyjgksh/15@2X.png"
                },
                {
                    "src": "./assets/project-images/web-ythlpyyjgksh/16@2X.png"
                }
            ]
        },
        "qcfwzxszyyclglpt": {
            "title": "汽车服务中心数字运营管理平台",
            "description": "通过集成化的车辆管理、人员管理、成本分析、服务监控等功能，帮助政企单位实现更加高效和透明的管理。平台不仅优化了资源调配，降低了管理成本，还通过数据分析为决策提供了精准支持。车辆与人员的全生命周期管理确保了资产的最优使用和人员的职业发展，有助于提升整体运营效率与服务质量。该平台将推动政企单位在车辆与人员管理方面的数字化转型，提升管理决策的科学性与精确性。",
            "category": "网页设计",
            "images": [
                {
                    "src": "./assets/project-images/web-qcfwzxszyyglpt/1@2X.png"
                },
                {
                    "src": "./assets/project-images/web-qcfwzxszyyglpt/2@2X.png"
                },
                {
                    "src": "./assets/project-images/web-qcfwzxszyyglpt/3@2X.png"
                },
                {
                    "src": "./assets/project-images/web-qcfwzxszyyglpt/4@2X.png"
                }
            ]
        },
        "webxlt": {
            "title": "晓邻通管理后台",
            "description": "通过集成化的车辆管理、人员管理、成本分析、服务监控等功能，帮助政企单位实现更加高效和透明的管理。平台不仅优化了资源调配，降低了管理成本，还通过数据分析为决策提供了精准支持。车辆与人员的全生命周期管理确保了资产的最优使用和人员的职业发展，有助于提升整体运营效率与服务质量。该平台将推动政企单位在车辆与人员管理方面的数字化转型，提升管理决策的科学性与精确性。",
            "category": "网页设计",
            "images": [
                {
                    "src": "./assets/project-images/web-xlt/1@2X.png"
                },
                {
                    "src": "./assets/project-images/web-xlt/2@2X.png"
                },
                {
                    "src": "./assets/project-images/web-xlt/3@2X.png"
                },
                {
                    "src": "./assets/project-images/web-xlt/4@2X.png"
                },
                {
                    "src": "./assets/project-images/web-xlt/5@2X.png"
                },
                {
                    "src": "./assets/project-images/web-xlt/6@2X.png"
                },
                {
                    "src": "./assets/project-images/web-xlt/7@2X.png"
                },
                {
                    "src": "./assets/project-images/web-xlt/8@2X.png"
                },
                {
                    "src": "./assets/project-images/web-xlt/9@2X.png"
                },
                {
                    "src": "./assets/project-images/web-xlt/10@2X.png"
                },
                {
                    "src": "./assets/project-images/web-xlt/11@2X.png"
                },
                {
                    "src": "./assets/project-images/web-xlt/12@2X.png"
                },
                {
                    "src": "./assets/project-images/web-xlt/13@2X.png"
                },
                {
                    "src": "./assets/project-images/web-xlt/14@2X.png"
                },
                {
                    "src": "./assets/project-images/web-xlt/15@2X.png"
                },
                {
                    "src": "./assets/project-images/web-xlt/16@2X.png"
                }  

            ]
        },




        "ddjyjs": {
            "title": "迪迪救援技师APP（V4.0）",
            "description": "该移动端APP是为救援司机量身定制的，旨在提升救援任务的处理效率和服务质量。通过简便的操作界面和实用功能，帮助救援司机高效完成接单、救援服务信息填写、订单管理和统计查询等任务。",
            "category": "移动端设计",
            "images": [
                {
                    "src": "./assets/project-images/app-ddjyjs/1@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ddjyjs/2@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ddjyjs/3@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ddjyjs/4@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ddjyjs/5@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ddjyjs/6@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ddjyjs/7@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ddjyjs/8@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ddjyjs/9@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ddjyjs/10@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ddjyjs/11@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ddjyjs/12@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ddjyjs/13@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ddjyjs/14@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ddjyjs/15@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ddjyjs/16@2X.png"
                }             
            ]
        },
        "appxlt": {
            "title": "晓邻通",
            "description": "为社区项目管理员提供了一体化、便捷的管理工具，使其能够高效处理社区内的各类管理任务。通过信息发布、诉求管理、申请管理等功能，项目管理员能够更好地与居民互动、解决问题，提高社区内的管理水平和服务质量。这一系统的应用将促进社区内部的良好沟通，增进社区管理与居民之间的信任和合作。",
            "category": "移动端设计",
            "images": [
                {
                    "src": "./assets/project-images/app-xlt/1@2X.png"
                },
                {
                    "src": "./assets/project-images/app-xlt/2@2X.png"
                },
                {
                    "src": "./assets/project-images/app-xlt/3@2X.png"
                },
                {
                    "src": "./assets/project-images/app-xlt/4@2X.png"
                },
                {
                    "src": "./assets/project-images/app-xlt/5@2X.png"
                },
                {
                    "src": "./assets/project-images/app-xlt/6@2X.png"
                },
                {
                    "src": "./assets/project-images/app-xlt/7@2X.png"
                },
                {
                    "src": "./assets/project-images/app-xlt/8@2X.png"
                },
                {
                    "src": "./assets/project-images/app-xlt/9@2X.png"
                },
                {
                    "src": "./assets/project-images/app-xlt/10@2X.png"
                },
                {
                    "src": "./assets/project-images/app-xlt/11@2X.png"
                },
                {
                    "src": "./assets/project-images/app-xlt/12@2X.png"
                },
                {
                    "src": "./assets/project-images/app-xlt/13@2X.png"
                },
                {
                    "src": "./assets/project-images/app-xlt/14@2X.png"
                },
                {
                    "src": "./assets/project-images/app-xlt/15@2X.png"
                },
                {
                    "src": "./assets/project-images/app-xlt/16@2X.png"
                },
                {
                    "src": "./assets/project-images/app-xlt/17@2X.png"
                }            
            ]
        },
        "ddcf": {
            "title": "迪迪车服",
            "description": "该平台通过整合车辆安全检测、保养服务、动力电池检测和人车生活服务，全面提升了车主的用车体验，同时增强了保险公司在售后服务和客户维护方面的竞争力。通过代为送检、定期保养和多元化的服务项目，平台有效降低了车主的用车风险，提高了车辆的安全性和可靠性。此项目为保险公司提供了一个全面的车主权益管理系统，提升了客户满意度，增强了客户的忠诚度，推动了保险行业向更加智能化和个性化的服务转型。",
            "category": "移动端设计",
            "images": [
                {
                    "src": "./assets/project-images/app-ddcf/1@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ddcf/2@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ddcf/3@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ddcf/4@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ddcf/5@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ddcf/6@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ddcf/7@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ddcf/8@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ddcf/9@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ddcf/10@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ddcf/11@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ddcf/12@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ddcf/13@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ddcf/14@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ddcf/15@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ddcf/16@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ddcf/17@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ddcf/18@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ddcf/19@2X.png"
                }              
            ]
        },
        "ddsgjy": {
            "title": "迪迪事故救援",
            "description": "平台通过抢单大厅、实时监控和评价系统，为救援车司机和普通用户提供了高效便捷的转运服务。用户可以通过平台找到合适的救援车司机，而救援车司机则可以更灵活地接单，提高运输效率。促进行业的数字化和智能化发展，为用户和救援车司机创造更多价值。",
            "category": "移动端设计",
            "images": [
                {
                    "src": "./assets/project-images/app-ddsgjy/1@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ddsgjy/2@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ddsgjy/3@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ddsgjy/4@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ddsgjy/5@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ddsgjy/6@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ddsgjy/7@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ddsgjy/8@2X.png"
                }           
            ]
        },
        "hycyzj": {
            "title": "货运车友之家",
            "description": "通过提供全方位的服务，不仅方便了货运公司司机的日常运营，也提升了整个货运行业的效率。通过优化货源匹配和提供紧急救援、加油、维修等服务，平台将为货运公司司机提供更加安全、便捷和高效的运输体验。这不仅有助于提高货运公司的运营水平，还为司机提供了更多的支持和便利。",
            "category": "移动端设计",
            "images": [
                {
                    "src": "./assets/project-images/app-hycyzj/1@2X.png"
                },
                {
                    "src": "./assets/project-images/app-hycyzj/2@2X.png"
                },
                {
                    "src": "./assets/project-images/app-hycyzj/3@2X.png"
                },
                {
                    "src": "./assets/project-images/app-hycyzj/4@2X.png"
                },
                {
                    "src": "./assets/project-images/app-hycyzj/5@2X.png"
                },
                {
                    "src": "./assets/project-images/app-hycyzj/6@2X.png"
                },
                {
                    "src": "./assets/project-images/app-hycyzj/7@2X.png"
                },
                {
                    "src": "./assets/project-images/app-hycyzj/8@2X.png"
                },
                {
                    "src": "./assets/project-images/app-hycyzj/9@2X.png"
                },
                {
                    "src": "./assets/project-images/app-hycyzj/10@2X.png"
                },
                {
                    "src": "./assets/project-images/app-hycyzj/11@2X.png"
                },
                {
                    "src": "./assets/project-images/app-hycyzj/12@2X.png"
                },
                {
                    "src": "./assets/project-images/app-hycyzj/13@2X.png"
                },
                {
                    "src": "./assets/project-images/app-hycyzj/14@2X.png"
                }   

            ]
        },
        "ybjy": {
            "title": "亿保救援",
            "description": "通过智能的订单分配和实时监控功能，为技师和调度管理员提供了更加高效、便捷的工作体验。系统的使用将提高救援服务的整体质量，缩短救援响应时间，增强公司的竞争力。这一系统的引入将有助于提升整个道路救援行业的数字化水平，推动业务向智能、高效的方向发展。",
            "category": "移动端设计",
            "images": [
                {
                    "src": "./assets/project-images/app-ybjy/1@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ybjy/2@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ybjy/3@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ybjy/4@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ybjy/5@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ybjy/6@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ybjy/7@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ybjy/8@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ybjy/9@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ybjy/10@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ybjy/11@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ybjy/12@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ybjy/13@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ybjy/14@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ybjy/15@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ybjy/16@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ybjy/17@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ybjy/18@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ybjy/19@2X.png"
                }      

            ]
        },
        "ybqyyc": {
            "title": "亿保企业用车",
            "description": "这是一款为提升企业内部用车管理效率、降低成本、提高信息透明度而设计的系统。通过数字化、自动化的流程，提供了一种更加高效、安全、可控的用车管理解决方案。",
            "category": "移动端设计",
            "images": [
                {
                    "src": "./assets/project-images/app-ybqyyc/1@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ybqyyc/2@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ybqyyc/3@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ybqyyc/4@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ybqyyc/5@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ybqyyc/6@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ybqyyc/7@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ybqyyc/8@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ybqyyc/9@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ybqyyc/10@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ybqyyc/11@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ybqyyc/12@2X.png"
                }   

            ]
        },
        "ybxptgc": {
            "title": "亿保新平台管车小程序",
            "description": "该移动端是为企业用车管理员和司机提供的综合管理平台，集成了实时监控、轨迹查询、历史报警、监控回放、通知下发和统计分析等功能，旨在提升企业用车管理的效率和安全性。",
            "category": "移动端设计",
            "images": [
                {
                    "src": "./assets/project-images/app-ybxptgc/1@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ybxptgc/2@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ybxptgc/3@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ybxptgc/4@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ybxptgc/5@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ybxptgc/6@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ybxptgc/7@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ybxptgc/8@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ybxptgc/9@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ybxptgc/10@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ybxptgc/11@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ybxptgc/12@2X.png"
                }   

            ]
        },
        "ycgclglxt": {
            "title": "亿车管车辆管理系统",
            "description": "通过全面的功能模块，为企业提供了高效的公车管理解决方案。从申请审批到车辆调度、监控回访以及使用统计分析，系统为企业提供了全方位、数字化的公车管理工具，提高了公车使用的透明度、效率和成本控制能力。这一系统的应用将有助于提升企业公车管理水平，确保公车的安全、合规使用。",
            "category": "移动端设计",
            "images": [
                {
                    "src": "./assets/project-images/app-ycgclglxt/1@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ycgclglxt/2@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ycgclglxt/3@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ycgclglxt/4@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ycgclglxt/5@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ycgclglxt/6@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ycgclglxt/7@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ycgclglxt/8@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ycgclglxt/9@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ycgclglxt/10@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ycgclglxt/11@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ycgclglxt/12@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ycgclglxt/13@2X.png"
                }

            ]
        },
        "ykdywglpt": {
            "title": "亿科达运维管理平台",
            "description": "为技师提供了全面的任务管理和工单查看功能，优化了团队协作和工作流程。通过人员管理、设备管理、统计分析和设备巡检等功能，系统能够提高车载设备的管理效率，确保设备的正常运行。这一系统的应用将为车载设备安装团队提供更高效、可靠的工作平台，提升服务质量和团队绩效。",
            "category": "移动端设计",
            "images": [
                {
                    "src": "./assets/project-images/app-ykdywglpt/1@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ykdywglpt/2@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ykdywglpt/3@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ykdywglpt/4@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ykdywglpt/5@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ykdywglpt/6@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ykdywglpt/7@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ykdywglpt/8@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ykdywglpt/9@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ykdywglpt/10@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ykdywglpt/11@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ykdywglpt/12@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ykdywglpt/13@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ykdywglpt/14@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ykdywglpt/15@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ykdywglpt/16@2X.png"
                }

            ]
        },
        "zjclaqjc": {
            "title": "紫金车辆安全检测",
            "description": "紫金保险车辆安全检测服务平台通过车主权益的整合，简化了车主的安全检测流程，提供了高效、便捷的车辆安全保障。通过代送检、专业检测和详细报告，为车主提供全面的车辆安全状况评估，增强了车主的安全意识和保障感。",
            "category": "移动端设计",
            "images": [
                {
                    "src": "./assets/project-images/app-zjclaqjc/1@2X.png"
                },
                {
                    "src": "./assets/project-images/app-zjclaqjc/2@2X.png"
                },
                {
                    "src": "./assets/project-images/app-zjclaqjc/3@2X.png"
                },
                {
                    "src": "./assets/project-images/app-zjclaqjc/4@2X.png"
                },
                {
                    "src": "./assets/project-images/app-zjclaqjc/5@2X.png"
                },
                {
                    "src": "./assets/project-images/app-zjclaqjc/6@2X.png"
                },
                {
                    "src": "./assets/project-images/app-zjclaqjc/7@2X.png"
                },
                {
                    "src": "./assets/project-images/app-zjclaqjc/8@2X.png"
                },
                {
                    "src": "./assets/project-images/app-zjclaqjc/9@2X.png"
                },
                {
                    "src": "./assets/project-images/app-zjclaqjc/10@2X.png"
                },
                {
                    "src": "./assets/project-images/app-zjclaqjc/11@2X.png"
                },
                {
                    "src": "./assets/project-images/app-zjclaqjc/12@2X.png"
                }

            ]
        },
        "fwjly": {
            "title": "服务记录仪",
            "description": "该服务记录仪为理赔查勘员提供了一个高效、精准的工作工具，全面提升了理赔查勘的透明度和信息处理效率。通过视频采集和远程通话，理赔查勘员可以迅速获取现场情况并与客户实时沟通，有效缩短理赔周期。远程抓拍和文件管理功能为理赔流程提供了精确证据，确保理赔的公正性与准确性。",
            "category": "移动端设计",
            "images": [
                {
                    "src": "./assets/project-images/app-fwjly/1@2X.png"
                },
                {
                    "src": "./assets/project-images/app-fwjly/2@2X.png"
                },
                {
                    "src": "./assets/project-images/app-fwjly/3@2X.png"
                },
                {
                    "src": "./assets/project-images/app-fwjly/4@2X.png"
                },
                {
                    "src": "./assets/project-images/app-fwjly/5@2X.png"
                },
                {
                    "src": "./assets/project-images/app-fwjly/6@2X.png"
                },
                {
                    "src": "./assets/project-images/app-fwjly/7@2X.png"
                },
                {
                    "src": "./assets/project-images/app-fwjly/8@2X.png"
                },
                {
                    "src": "./assets/project-images/app-fwjly/9@2X.png"
                },
                {
                    "src": "./assets/project-images/app-fwjly/10@2X.png"
                },
                {
                    "src": "./assets/project-images/app-fwjly/11@2X.png"
                },
                {
                    "src": "./assets/project-images/app-fwjly/12@2X.png"
                },
                {
                    "src": "./assets/project-images/app-fwjly/13@2X.png"
                },
                {
                    "src": "./assets/project-images/app-fwjly/14@2X.png"
                },
                {
                    "src": "./assets/project-images/app-fwjly/15@2X.png"
                }

            ]
        },
        "ysfbddjy": {
            "title": "云闪付版迪迪救援",
            "description": "云闪付车主救援服务平台通过提供全方位的紧急救援支持，帮助车主在遇到车辆故障或困境时快速获得专业的救援服务。通过一键发起、实时追踪和高效响应，平台为车主提供了便捷的救援体验，显著提升了车主的出行安全感和信任感。",
            "category": "移动端设计",
            "images": [
                {
                    "src": "./assets/project-images/app-ysfbddjy/1@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ysfbddjy/2@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ysfbddjy/3@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ysfbddjy/4@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ysfbddjy/5@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ysfbddjy/6@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ysfbddjy/7@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ysfbddjy/8@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ysfbddjy/9@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ysfbddjy/10@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ysfbddjy/11@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ysfbddjy/12@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ysfbddjy/13@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ysfbddjy/14@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ysfbddjy/15@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ysfbddjy/16@2X.png"
                },
                {
                    "src": "./assets/project-images/app-ysfbddjy/17@2X.png"
                }

            ]
        }
    };

    try {
        // 如果没有找到项目ID，显示错误信息
        if (!projectId || !projectConfig[projectId]) {
            console.log('未找到项目ID:', projectId);
            detailContainer.innerHTML = `
                <header>
                    <h2 class="h2 article-title">项目未找到</h2>
                    <p class="project-description">抱歉，未找到相关项目信息。</p>
                </header>
            `;
            return;
        }

        // 获取项目配置
        const project = projectConfig[projectId];
        console.log('当前项目配置:', project);

        // 构建项目详情HTML
        const detailHTML = `
            <header>
                <h2 class="h2 article-title" style="color: #fff;">${project.title}</h2>
                <p class="project-description" style="color: #fff;">${project.description}</p>
            </header>

            <section class="gallery">
                <div class="masonry-layout">
                    ${project.images.map(image => `
                        <div class="masonry-item">
                            <figure class="gallery-item">
                                <img src="${image.src}" alt="${image.alt}" onclick="openModal(this.src)">
                            </figure>
                        </div>
                    `).join('')}
                </div>
            </section>
        `;

        // 更新页面标题
        document.title = `${project.title} - 项目详情`;

        // 渲染项目详情
        detailContainer.innerHTML = detailHTML;

    } catch (error) {
        console.error('加载项目配置失败:', error);
        console.error('错误详情:', error.message);
        console.error('错误堆栈:', error.stack);
        detailContainer.innerHTML = `
            <header>
                <h2 class="h2 article-title">加载失败</h2>
                <p class="project-description">抱歉，加载项目信息时出现错误。</p>
                <p class="project-description">错误信息: ${error.message}</p>
            </header>
        `;
    }

    // 图片预览功能
    window.openModal = function(imgSrc) {
        modal.style.display = "block";
        modalImg.src = imgSrc;
    }

    // 关闭模态框
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    // 点击模态框外部关闭
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}); 