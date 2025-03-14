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
                    "src": "https://i.postimg.cc/RZjcCR4Q/1-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/B63HHn8j/2-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/YC46wVKC/3-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/W4g0dk4R/4-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/9MBTpHTJ/5-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/gjkhttHd/6-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/d3HybR5C/7-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/QN01KsjM/7-2x-2.png"
                },
                {
                    "src": "https://i.postimg.cc/xT8HK7d3/8-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/zXQhpjbZ/9-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/sgZhLh7B/10-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/pdbFMLJs/11-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/jjHJxY8t/12-2x.png"
                }      
            ]
        },
        "ddjy": {
            "title": "迪迪救援pc端",
            "description": "通过实时监控运营、财务、客户和客服情况，平台有助于提高服务效率，降低成本，并为保险公司提供更准确的财务数据。灵活的计费方案设计使得平台适应不同业务模式，为双方提供更加透明、高效的合作。这一系统的应用将促进道路救援行业与保险行业的协同发展，提升整个行业服务水平。",
            "category": "网页设计",
            "images": [
                {
                    "src": "https://i.postimg.cc/pX7mHLJg/10-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/DwX8y3Cm/11-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/zfY3y2M7/12-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/R01hKQxB/13-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/8515HJTr/14-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/ydvNr1Np/15-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/JzDBDkhr/1-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/hGVzMRxN/2-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/dVbZ8V78/3-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/cHZKbkBC/4-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/zBjLZwxj/5-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/kGg2nVZd/6-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/Bb7XtS9P/7-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/v8010zg8/8-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/Fs1Y8L3y/9-2x.png"
                }   
            ]
        },
        "ygbxzzfwpt": {
            "title": "阳光保险增值服务平台",
            "description": "为客服团队提供了高效的订单管理和任务监控工具。通过实时监控订单情况、详细查询订单信息以及监控救援任务的详细情况，系统大大提高了客服人员的工作效率，确保了救援服务的快速响应。配置救援服务供应商信息的功能，使得客服团队可以更灵活地协调合作伙伴，提供更优质的服务。这一系统的引入将在客服和救援管理领域带来更高水平的数字化和智能化服务。",
            "category": "网页设计",
            "images": [
                {
                    "src": "https://i.postimg.cc/zBsx6gG0/1-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/mZ9XM8mq/2-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/Y9GXd3Mv/3-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/4ypWgxKZ/4-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/vHL02DFt/5-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/2Sk2smCR/6-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/R0qG0R3g/7-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/4xWBZM3K/8-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/L5k3WQ78/9-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/yxCTvCLG/10-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/Pf1yNNxn/11-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/4N51bMV8/12-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/BnnBhgCJ/13-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/jS3QB78P/14-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/Bv8c3nyy/15-2x.png"
                }   
            ]
        },
        "ygbjfgsrcjxhglxt": {
            "title": "阳光北京分公司人车精细化管理系统",
            "description": "阳光北京分公司人车精细化管理系统通过全面集成的车辆与设备管理、实时监控和数据分析功能，提升了车辆调度、运营效率和管理透明度。系统的异常预警和远程指挥功能为公司提供了更高的安全保障，同时证据中心和统计分析的结合能够为决策提供数据支持，有效降低运营成本和风险。该系统的实施将推动公司车辆管理的数字化和智能化，提升整体运营效率和安全性。",
            "category": "网页设计",
            "images": [
                {
                    "src": "https://i.postimg.cc/br4tYxt2/1-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/cH932y1h/2-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/MHnB8PvS/3-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/hjPx2Pnh/4-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/g2FZfKpC/5-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/NMM91J8H/6-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/htLdg7Pf/7-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/PqKvvsDH/8-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/k4pVwQwh/9-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/qBWwvy0L/10-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/gr9xbGCV/11-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/8cf7Y70k/12-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/qBNQrjfq/13-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/TYm9L13X/14-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/Njcx1tK2/15-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/SKQ7vG7y/16-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/Jz55xFX6/17-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/438bkhBp/18-2x.png"
                }   
            ]
        },
        "ykglptcjyypt": {
            "title": "云通管理平台场景应用平台",
            "description": "为车辆出行提供了一套完善的解决方案，使其能够更精准、高效地管理未来车辆出行。通过实时监控、统计分析和综合管理各类型车辆，平台有助于保障道路安全、提高交通运输效率，实现更加智慧和可持续的城市交通管理。",
            "category": "网页设计",
            "images": [
                {
                    "src": "https://i.postimg.cc/vmpjFjPr/1-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/X78TGsJW/2-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/sDykgk3K/3-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/sggbp5Qh/4-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/pTzS2Z7g/5-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/sxJ0W23m/6-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/kMNHzTWS/7-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/jds1byhF/8-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/L6Nb6hC6/9-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/3xNby7Vj/10-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/8zYXM9g2/11-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/mrFXwjbt/12-2x.png"
                }
            ]
        },
        "ythlpyyjgksh": {
            "title": "一体化理赔运营监控可视化",
            "description": "为用户提供了对案件、车辆、人员、承修方等多方面信息的一站式监控和查询。通过可视化的方式展示各项指标，帮助用户迅速洞察数据，及时做出决策。该系统的引入将大幅提高信息展示的效率和效果，助力用户更好地理解和管理相关数据，促使决策更加智能化。",
            "category": "网页设计",
            "images": [
                {
                    "src": "https://i.postimg.cc/brzfWWJ6/1-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/9MHhtrjH/2-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/W3mP9T2F/3-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/5tCJC8Tm/4-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/hPtq0kNv/5-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/CLrprvVN/6-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/4xrksmyH/7-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/2SqRs4kf/8-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/QM1LthK4/9-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/4dQr6P5p/10-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/rmkBR3S8/11-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/J07SPX6v/12-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/3NLV6wzR/13-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/bNJKnQ22/14-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/nh9gRp2F/15-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/Gh56xHkg/16-2x.png"
                }
            ]
        },
        "qcfwzxszyyclglpt": {
            "title": "汽车服务中心数字运营管理平台",
            "description": "通过集成化的车辆管理、人员管理、成本分析、服务监控等功能，帮助政企单位实现更加高效和透明的管理。平台不仅优化了资源调配，降低了管理成本，还通过数据分析为决策提供了精准支持。车辆与人员的全生命周期管理确保了资产的最优使用和人员的职业发展，有助于提升整体运营效率与服务质量。该平台将推动政企单位在车辆与人员管理方面的数字化转型，提升管理决策的科学性与精确性。",
            "category": "网页设计",
            "images": [
                {
                    "src": "https://i.postimg.cc/251BP9J7/1-3x.png"
                },
                {
                    "src": "https://i.postimg.cc/7Zs2trBL/2-3x.png"
                },
                {
                    "src": "https://i.postimg.cc/5NJL63Yf/3-3x.png"
                },
                {
                    "src": "https://i.postimg.cc/ZYp6bgqf/4-3x.png"
                }
            ]
        },
        "webxlt": {
            "title": "晓邻通管理后台",
            "description": "通过集成化的车辆管理、人员管理、成本分析、服务监控等功能，帮助政企单位实现更加高效和透明的管理。平台不仅优化了资源调配，降低了管理成本，还通过数据分析为决策提供了精准支持。车辆与人员的全生命周期管理确保了资产的最优使用和人员的职业发展，有助于提升整体运营效率与服务质量。该平台将推动政企单位在车辆与人员管理方面的数字化转型，提升管理决策的科学性与精确性。",
            "category": "网页设计",
            "images": [
                {
                    "src": "https://i.postimg.cc/GmQZZqYt/1-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/5tKDtysM/2-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/Zq51ZpFc/3-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/d17pZFfZ/4-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/90Zk1pCW/5-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/66vF99RD/6-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/TYvF1ZJh/7-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/5N5GCnsg/8-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/2S2KH3RB/9-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/XvqDt341/10-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/k5HhmZ5J/11-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/MTj3KDcy/12-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/gjVM32Hj/13-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/HWXvq61m/14-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/X7W149nC/15-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/SNGTsjKt/16-2x.png"
                }  

            ]
        },




        "ddjyjs": {
            "title": "迪迪救援技师APP（V4.0）",
            "description": "该移动端APP是为救援司机量身定制的，旨在提升救援任务的处理效率和服务质量。通过简便的操作界面和实用功能，帮助救援司机高效完成接单、救援服务信息填写、订单管理和统计查询等任务。",
            "category": "移动端设计",
            "images": [
                {
                    "src": "https://i.postimg.cc/Wp0V3bVB/1-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/762kSq2T/2-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/C5Cp6JJh/3-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/mkWGwKYp/4-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/VL18bQLd/5-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/QxbrQ4HS/6-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/HLJDCT3P/7-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/dVVc42CF/8-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/DwpkDSQX/9-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/CKWyh9QM/10-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/cHYprTpR/11-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/zvr9WKN9/12-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/D0PRc0ym/13-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/BZ5W3Ycs/14-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/bNq7wx3n/15-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/7YXpG5WW/16-2x.png"
                }             
            ]
        },
        "appxlt": {
            "title": "晓邻通",
            "description": "为社区项目管理员提供了一体化、便捷的管理工具，使其能够高效处理社区内的各类管理任务。通过信息发布、诉求管理、申请管理等功能，项目管理员能够更好地与居民互动、解决问题，提高社区内的管理水平和服务质量。这一系统的应用将促进社区内部的良好沟通，增进社区管理与居民之间的信任和合作。",
            "category": "移动端设计",
            "images": [
                {
                    "src": "https://i.postimg.cc/y8cphWQK/1-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/tgbSBywx/2-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/HxsSCzpW/3-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/QMq6PwZn/4-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/mkP8Prz0/5-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/Kzq0cTzP/6-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/6qFznNCT/7-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/9MZyKq9X/8-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/J4BpmGWX/9-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/bwxLDWrN/10-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/Bn9Mv4qV/11-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/nLn2v29K/12-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/zfpjphTs/13-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/C1142KNz/14-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/Tw4cvX7Q/15-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/1XVr9YbS/16-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/3rjgZm7n/17-2x.png"
                }            
            ]
        },
        "ddcf": {
            "title": "迪迪车服",
            "description": "该平台通过整合车辆安全检测、保养服务、动力电池检测和人车生活服务，全面提升了车主的用车体验，同时增强了保险公司在售后服务和客户维护方面的竞争力。通过代为送检、定期保养和多元化的服务项目，平台有效降低了车主的用车风险，提高了车辆的安全性和可靠性。此项目为保险公司提供了一个全面的车主权益管理系统，提升了客户满意度，增强了客户的忠诚度，推动了保险行业向更加智能化和个性化的服务转型。",
            "category": "移动端设计",
            "images": [
                {
                    "src": "https://i.postimg.cc/tgzRYqFR/1-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/P5Y5nzxw/2-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/268kWsxQ/3-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/rpTFV00Y/4-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/xjZfkFNm/5-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/HxZp96Sf/6-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/vT4Gq5kD/7-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/nrNp6Cf2/8-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/bwcqgDTN/9-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/qMCk2X25/10-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/W1GTHNWm/11-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/jjRtVpmp/12-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/rpgcqhLK/13-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/d11F38qn/14-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/76Wk2fh4/15-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/2yLfFrLZ/16-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/DmV3xH1Y/17-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/qBNtZK88/18-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/fW134bK1/19-2x.png"
                }              
            ]
        },
        "ddsgjy": {
            "title": "迪迪事故救援",
            "description": "平台通过抢单大厅、实时监控和评价系统，为救援车司机和普通用户提供了高效便捷的转运服务。用户可以通过平台找到合适的救援车司机，而救援车司机则可以更灵活地接单，提高运输效率。促进行业的数字化和智能化发展，为用户和救援车司机创造更多价值。",
            "category": "移动端设计",
            "images": [
                {
                    "src": "https://i.postimg.cc/k4rZ3K2B/1-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/DwMH6tFQ/2-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/25LJK28s/3-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/pLT3D2NX/4-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/MHqFXwbw/5-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/KznWZjTQ/5-2x-2.png"
                },
                {
                    "src": "https://i.postimg.cc/x85FzZtz/6-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/1Rrd2gs3/7-2x.png"
                } ,
                {
                    "src": "https://i.postimg.cc/656PX9pL/8-2x.png"
                }            
            ]
        },
        "hycyzj": {
            "title": "货运车友之家",
            "description": "通过提供全方位的服务，不仅方便了货运公司司机的日常运营，也提升了整个货运行业的效率。通过优化货源匹配和提供紧急救援、加油、维修等服务，平台将为货运公司司机提供更加安全、便捷和高效的运输体验。这不仅有助于提高货运公司的运营水平，还为司机提供了更多的支持和便利。",
            "category": "移动端设计",
            "images": [
                {
                    "src": "https://i.postimg.cc/nhF92PTL/1-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/3xt4cFbF/2-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/7Yy2G620/3-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/02dJpsY3/4-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/XvXGSBRS/5-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/CKtZFL0Z/6-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/tTxs7QRB/7-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/SRLj76M8/8-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/hPgX45k0/9-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/Yq3hvxkB/10-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/sgg17ZDQ/11-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/qvDqLMzm/12-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/9f4MN59c/13-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/CKWK3PCk/14-2x.png"
                }   

            ]
        },
        "ybjy": {
            "title": "亿保救援",
            "description": "通过智能的订单分配和实时监控功能，为技师和调度管理员提供了更加高效、便捷的工作体验。系统的使用将提高救援服务的整体质量，缩短救援响应时间，增强公司的竞争力。这一系统的引入将有助于提升整个道路救援行业的数字化水平，推动业务向智能、高效的方向发展。",
            "category": "移动端设计",
            "images": [
                {
                    "src": "https://i.postimg.cc/5NNFqrs2/1-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/90cwkgV1/2-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/qBG3KrXF/3-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/J0KHC3z8/4-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/zXtHdkQS/5-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/jSBwTStD/6-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/cLvgPnyq/7-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/R0f3ZxZX/8-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/LXpJqQqR/9-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/1trfD06F/10-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/5yPyRxsN/11-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/sxf1mB9N/12-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/wTv7smBt/13-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/FsB1bHfT/14-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/BnPbmfH4/15-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/N0hMVCkT/16-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/KYnzy70W/17-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/LXD8J9KB/18-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/26r5jqJS/19-2x.png"
                }      

            ]
        },
        "ybqyyc": {
            "title": "亿保企业用车",
            "description": "这是一款为提升企业内部用车管理效率、降低成本、提高信息透明度而设计的系统。通过数字化、自动化的流程，提供了一种更加高效、安全、可控的用车管理解决方案。",
            "category": "移动端设计",
            "images": [
                {
                    "src": "https://i.postimg.cc/pVYnbvmZ/1-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/GtQBkFWN/2-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/9Mywf5Jc/3-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/qq0hhb5y/4-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/jdxnR1Nr/5-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/yYLgxTX3/6-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/4xnK9hBL/7-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/K8V1rvWZ/8-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/QtgV3gdt/9-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/j5YCm3Km/10-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/VNCd7PyX/11-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/fywyT3Vv/12-2x.png"
                }   

            ]
        },
        "ybxptgc": {
            "title": "亿保新平台管车小程序",
            "description": "该移动端是为企业用车管理员和司机提供的综合管理平台，集成了实时监控、轨迹查询、历史报警、监控回放、通知下发和统计分析等功能，旨在提升企业用车管理的效率和安全性。",
            "category": "移动端设计",
            "images": [
                {
                    "src": "https://i.postimg.cc/Bn866fnR/1-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/sgt2GHBx/2-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/xTp8n1nK/3-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/wTjMCm8q/4-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/brCyymcz/5-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/pTBV72s5/6-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/QM1dQg5b/7-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/4dGNBKQT/8-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/tJCRGLcS/9-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/SQDNfxXw/10-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/ZKnY7zp0/11-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/GhfL6gxK/12-2x.png"
                }   

            ]
        },
        "ycgclglxt": {
            "title": "亿车管车辆管理系统",
            "description": "通过全面的功能模块，为企业提供了高效的公车管理解决方案。从申请审批到车辆调度、监控回访以及使用统计分析，系统为企业提供了全方位、数字化的公车管理工具，提高了公车使用的透明度、效率和成本控制能力。这一系统的应用将有助于提升企业公车管理水平，确保公车的安全、合规使用。",
            "category": "移动端设计",
            "images": [
                {
                    "src": "https://i.postimg.cc/FRFXY0x1/1-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/9QThKmMX/2-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/LsppMcYt/3-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/BvBGZmHd/4-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/kGBrc9zm/5-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/xCsDMqs5/6-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/9XnHfRwF/7-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/zvMs26YR/8-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/hPQWQDV8/9-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/g299vCKC/10-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/fbZ6PYp5/11-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/YCQ58dnh/12-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/yNPwCkzK/13-2x.png"
                }

            ]
        },
        "ykdywglpt": {
            "title": "亿科达运维管理平台",
            "description": "为技师提供了全面的任务管理和工单查看功能，优化了团队协作和工作流程。通过人员管理、设备管理、统计分析和设备巡检等功能，系统能够提高车载设备的管理效率，确保设备的正常运行。这一系统的应用将为车载设备安装团队提供更高效、可靠的工作平台，提升服务质量和团队绩效。",
            "category": "移动端设计",
            "images": [
                {
                    "src": "https://i.postimg.cc/fRQF3xzZ/1-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/Mp0L1vHB/2-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/02wF2tqc/3-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/VsT28x2J/4-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/W42H8TqH/5-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/pTr1NCZQ/6-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/5tnkkTwN/7-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/nzWSnmRy/8-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/0jJWjNhb/9-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/Z0tfdShj/10-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/28nYXj3k/11-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/gcCdDLzt/12-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/sfQs74rZ/13-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/XY3WMMyw/14-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/pLZHR0D3/15-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/vmZdBWhT/16-2x.png"
                }

            ]
        },
        "zjclaqjc": {
            "title": "紫金车辆安全检测",
            "description": "紫金保险车辆安全检测服务平台通过车主权益的整合，简化了车主的安全检测流程，提供了高效、便捷的车辆安全保障。通过代送检、专业检测和详细报告，为车主提供全面的车辆安全状况评估，增强了车主的安全意识和保障感。",
            "category": "移动端设计",
            "images": [
                {
                    "src": "https://i.postimg.cc/c40k0dX4/1-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/YqRnSTsN/2-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/W1f5Ggjh/3-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/FHKPkGMM/4-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/W4FXXzbS/5-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/cJpTjWvW/6-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/rm5g2H4r/7-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/ZnZHbLPD/8-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/D0gg8bBf/9-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/xjygsWnr/10-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/Hs6zmXrB/11-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/vHYhC3Z4/12-2x.png"
                }

            ]
        },
        "fwjly": {
            "title": "服务记录仪",
            "description": "该服务记录仪为理赔查勘员提供了一个高效、精准的工作工具，全面提升了理赔查勘的透明度和信息处理效率。通过视频采集和远程通话，理赔查勘员可以迅速获取现场情况并与客户实时沟通，有效缩短理赔周期。远程抓拍和文件管理功能为理赔流程提供了精确证据，确保理赔的公正性与准确性。",
            "category": "移动端设计",
            "images": [
                {
                    "src": "https://i.postimg.cc/52LLKzWP/1-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/ZRKNqDBg/2-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/HLm5qLpT/3-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/s2JSsRX7/4-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/ZR7dvF6q/5-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/5yXFBYmS/6-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/rs7RQVnX/7-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/kMHSnsn1/8-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/4xkhc3Hp/9-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/DybXmG02/10-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/BnTPBG2k/11-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/JhRDTdqn/12-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/nLTsNYR1/13-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/766C4Gjr/14-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/0QBzy5qM/15-2x.png"
                }

            ]
        },
        "ysfbddjy": {
            "title": "云闪付版迪迪救援",
            "description": "云闪付车主救援服务平台通过提供全方位的紧急救援支持，帮助车主在遇到车辆故障或困境时快速获得专业的救援服务。通过一键发起、实时追踪和高效响应，平台为车主提供了便捷的救援体验，显著提升了车主的出行安全感和信任感。",
            "category": "移动端设计",
            "images": [
                {
                    "src": "https://i.postimg.cc/ydwqv2H3/1-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/Hn5qK3YZ/2-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/gcZbncVV/3-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/tCGQP0kL/4-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/150xrWY4/5-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/2SCsc4PG/6-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/sgKttMzr/7-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/N0MWYQGr/8-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/g0T121rt/9-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/wMKPhJXh/10-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/26LMbTZk/11-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/prDSkTC3/12-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/44tjXLGw/13-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/NfcSF6ft/14-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/RVL8HWNH/15-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/K8cWrmMs/16-2x.png"
                },
                {
                    "src": "https://i.postimg.cc/L8ybxGk4/17-2x.png"
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