// 获取当前日期
function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = year + seperator1 + month + seperator1 + strDate;
    return currentdate;
}

// var nameMap = {
//     "Afghanistan": "阿富汗",
//     "Angola": "安哥拉",
//     "Albania": "阿尔巴尼亚",
//     "United Arab Emirates": "阿联酋",
//     "Argentina": "阿根廷",
//     "Armenia": "亚美尼亚",
//     "French Southern and Antarctic Lands": "法属南半球和南极领地",
//     "Australia": "澳大利亚",
//     "Austria": "奥地利",
//     "Azerbaijan": "阿塞拜疆",
//     "Burundi": "布隆迪",
//     "Belgium": "比利时",
//     "Benin": "贝宁",
//     "Burkina Faso": "布基纳法索",
//     "Bangladesh": "孟加拉国",
//     "Bulgaria": "保加利亚",
//     "The Bahamas": "巴哈马",
//     "Bosnia and Herz.": "波黑",
//     "Belarus": "白俄罗斯",
//     "Belize": "伯利兹",
//     "Bermuda": "百慕大",
//     "Bolivia": "玻利维亚",
//     "Brazil": "巴西",
//     "Brunei": "文莱",
//     "Bhutan": "不丹",
//     "Botswana": "博茨瓦纳",
//     "Central African Republic": "中非共和国",
//     "Canada": "加拿大",
//     "Switzerland": "瑞士",
//     "Chile": "智利",
//     "China": "中国",
//     "Ivory Coast": "象牙海岸",
//     "Cameroon": "喀麦隆",
//     "Democratic Republic of the Congo": "刚果（金）",
//     "Republic of the Congo": "刚果（布）",
//     "Colombia": "哥伦比亚",
//     "Costa Rica": "哥斯达黎加",
//     "Cuba": "古巴",
//     "Northern Cyprus": "北塞浦路斯",
//     "Cyprus": "塞浦路斯",
//     "Czech Republic": "捷克",
//     "Germany": "德国",
//     "Djibouti": "吉布提",
//     "Denmark": "丹麦",
//     "Dominican Republic": "多米尼加共和国",
//     "Algeria": "阿尔及利亚",
//     "Ecuador": "厄瓜多尔",
//     "Egypt": "埃及",
//     "Eritrea": "厄立特里亚",
//     "Spain": "西班牙",
//     "Estonia": "爱沙尼亚",
//     "Ethiopia": "埃塞俄比亚",
//     "Finland": "芬兰",
//     "Fiji": "斐",
//     "Falkland Islands": "福克兰群岛",
//     "France": "法国",
//     "Gabon": "加蓬",
//     "United Kingdom": "英国",
//     "Georgia": "格鲁吉亚",
//     "Ghana": "加纳",
//     "Guinea": "几内亚",
//     "Gambia": "冈比亚",
//     "Guinea Bissau": "几内亚比绍",
//     "Equatorial Guinea": "赤道几内亚",
//     "Greece": "希腊",
//     "Greenland": "格陵兰",
//     "Guatemala": "危地马拉",
//     "French Guiana": "法属圭亚那",
//     "Guyana": "圭亚那",
//     "Honduras": "洪都拉斯",
//     "Croatia": "克罗地亚",
//     "Haiti": "海地",
//     "Hungary": "匈牙利",
//     "Indonesia": "印度尼西亚",
//     "India": "印度",
//     "Ireland": "爱尔兰",
//     "Iran": "伊朗",
//     "Iraq": "伊拉克",
//     "Iceland": "冰岛",
//     "Israel": "以色列",
//     "Italy": "意大利",
//     "Jamaica": "牙买加",
//     "Jordan": "约旦",
//     "Japan": "日本",
//     "Kazakhstan": "哈萨克斯坦",
//     "Kenya": "肯尼亚",
//     "Kyrgyzstan": "吉尔吉斯斯坦",
//     "Cambodia": "柬埔寨",
//     "South Korea": "韩国",
//     "Kosovo": "科索沃",
//     "Kuwait": "科威特",
//     "Laos": "老挝",
//     "Lebanon": "黎巴嫩",
//     "Liberia": "利比里亚",
//     "Libya": "利比亚",
//     "Sri Lanka": "斯里兰卡",
//     "Lesotho": "莱索托",
//     "Lithuania": "立陶宛",
//     "Luxembourg": "卢森堡",
//     "Latvia": "拉脱维亚",
//     "Morocco": "摩洛哥",
//     "Moldova": "摩尔多瓦",
//     "Madagascar": "马达加斯加",
//     "Mexico": "墨西哥",
//     "Macedonia": "马其顿",
//     "Mali": "马里",
//     "Myanmar": "缅甸",
//     "Montenegro": "黑山",
//     "Mongolia": "蒙古",
//     "Mozambique": "莫桑比克",
//     "Mauritania": "毛里塔尼亚",
//     "Malawi": "马拉维",
//     "Malaysia": "马来西亚",
//     "Namibia": "纳米比亚",
//     "New Caledonia": "新喀里多尼亚",
//     "Niger": "尼日尔",
//     "Nigeria": "尼日利亚",
//     "Nicaragua": "尼加拉瓜",
//     "Netherlands": "荷兰",
//     "Norway": "挪威",
//     "Nepal": "尼泊尔",
//     "New Zealand": "新西兰",
//     "Oman": "阿曼",
//     "Pakistan": "巴基斯坦",
//     "Panama": "巴拿马",
//     "Peru": "秘鲁",
//     "Philippines": "菲律宾",
//     "Papua New Guinea": "巴布亚新几内亚",
//     "Poland": "波兰",
//     "Puerto Rico": "波多黎各",
//     "North Korea": "朝鲜",
//     "Portugal": "葡萄牙",
//     "Paraguay": "巴拉圭",
//     "Qatar": "卡塔尔",
//     "Romania": "罗马尼亚",
//     "Russia": "俄罗斯",
//     "Rwanda": "卢旺达",
//     "Western Sahara": "西撒哈拉",
//     "Saudi Arabia": "沙特阿拉伯",
//     "Sudan": "苏丹",
//     "South Sudan": "南苏丹",
//     "Senegal": "塞内加尔",
//     "Solomon Islands": "所罗门群岛",
//     "Sierra Leone": "塞拉利昂",
//     "El Salvador": "萨尔瓦多",
//     "Somaliland": "索马里兰",
//     "Somalia": "索马里",
//     "Republic of Serbia": "塞尔维亚",
//     "Suriname": "苏里南",
//     "Slovakia": "斯洛伐克",
//     "Slovenia": "斯洛文尼亚",
//     "Sweden": "瑞典",
//     "Swaziland": "斯威士兰",
//     "Syria": "叙利亚",
//     "Chad": "乍得",
//     "Togo": "多哥",
//     "Thailand": "泰国",
//     "Tajikistan": "塔吉克斯坦",
//     "Turkmenistan": "土库曼斯坦",
//     "East Timor": "东帝汶",
//     "Trinidad and Tobago": "特里尼达和多巴哥",
//     "Tunisia": "突尼斯",
//     "Turkey": "土耳其",
//     "United Republic of Tanzania": "坦桑尼亚",
//     "Uganda": "乌干达",
//     "Ukraine": "乌克兰",
//     "Uruguay": "乌拉圭",
//     "United States": "美国",
//     "Uzbekistan": "乌兹别克斯坦",
//     "Venezuela": "委内瑞拉",
//     "Vietnam": "越南",
//     "Vanuatu": "瓦努阿图",
//     "West Bank": "西岸",
//     "Yemen": "也门",
//     "South Africa": "南非",
//     "Zambia": "赞比亚",
//     "Zimbabwe": "津巴布韦",
//     "Singapore Rep.": "新加坡",
//     "Dominican Rep.": "多米尼加",
//     "Palestine": "巴勒斯坦",
//     "Bahamas": "巴哈马",
//     "Timor-Leste": "东帝汶",
//     "Guinea-Bissau": "几内亚比绍",
//     "Côte d'Ivoire": "科特迪瓦",
//     "Siachen Glacier": "锡亚琴冰川",
//     "Br. Indian Ocean Ter.": "英属印度洋领土",
//     "Bosnia and Herz.": "波斯尼亚和黑塞哥维那",
//     "Central African Rep.": "中非",
//     "Dem. Rep. Congo": "刚果民主共和国",
//     "Congo": "刚果",
//     "N. Cyprus": "北塞浦路斯",
//     "Czech Rep.": "捷克",
//     "Eq. Guinea": "赤道几内亚",
//     "Korea": "韩国",
//     "Lao PDR": "老挝",
//     "Dem. Rep. Korea": "朝鲜",
//     "W. Sahara": "西撒哈拉",
//     "S. Sudan": "南苏丹",
//     "Solomon Is.": "所罗门群岛",
//     "Serbia": "塞尔维亚",
//     "Tanzania": "坦桑尼亚",
//     "United States": "美国"
// };
var nameMap = {
    "Dem. Rep. Congo": "刚果（金）",
    "Congo": "刚果（布）",
    "Palestine":"巴勒斯坦",
    'Afghanistan':'阿富汗',
    'Albania':'阿尔巴尼亚',
    'Algeria':'阿尔及利亚',
    'Andorra':'安道尔',
    'Angola':'安哥拉',
    'Antarctica':'南极洲',
    'Antigua and Barbuda':'安提瓜和巴布达',
    'Argentina':'阿根廷',
    'Armenia':'亚美尼亚',
    'Australia':'澳大利亚',
    'Austria':'奥地利',
    'Azerbaijan':'阿塞拜疆',
    'The Bahamas':'巴哈马',
    'Bahrain':'巴林',
    "Bosnia and Herz.":'波黑',
    'Bangladesh':'孟加拉国',
    'Barbados':'巴巴多斯',
    'Belarus':'白俄罗斯',
    'Belgium':'比利时',
    'Belize':'伯利兹',
    'Benin':'贝宁',
    'Bermuda':'百慕大',
    'Bhutan':'不丹',
    'Bolivia':'玻利维亚',
    'Bosnia and Herzegovina':'波斯尼亚和黑塞哥维那',
    'Botswana':'博茨瓦纳',
    'Brazil':'巴西',
    'Brunei':'文莱',
    'Bulgaria':'保加利亚',
    'Burkina Faso':'布基纳法索',
    'Burundi':'布隆迪',
    'Cambodia':'柬埔寨',
    'Cameroon':'喀麦隆',
    'Canada':'加拿大',
    'Cape Verde':'佛得角',
    'Central African Republic':'中非共和国',
    'Chad':'乍得',
    'Chile':'智利',
    'China':'中国',
    'Colombia':'哥伦比亚',
    'Comoros':'科摩罗',
    'Republic of the Congo':'刚果共和国',
    'Costa Rica':'哥斯达黎加',
    'Croatia':'克罗地亚',
    'Cuba':'古巴',
    'Cyprus':'塞浦路斯',
    "Czech Rep.": "捷克",
    'Denmark':'丹麦',
    'Djibouti':'吉布提',
    'Dominica':'多米尼加',
    'Dominican Republic':'多明尼加共和国',
    'Ecuador':'厄瓜多尔',
    'Egypt':'埃及',
    'El Salvador':'萨尔瓦多',
    'Equatorial Guinea':'赤道几内亚',
    'Eritrea':'厄立特里亚',
    'Estonia':'爱沙尼亚',
    'Ethiopia':'埃塞俄比亚',
    'Falkland Islands':'福克兰群岛',
    'Faroe Islands':'法罗群岛',
    'Fiji':'斐济',
    'Finland':'芬兰',
    'France':'法国',
    'French Guiana':'法属圭亚那',
    'French Southern and Antarctic Lands':'法属南半球和南极领地',
    'Gabon':'加蓬',
    'Gambia':'冈比亚',
    'Gaza Strip':'加沙',
    'Georgia':'格鲁吉亚',
    'Germany':'德国',
    'Ghana':'加纳',
    'Greece':'希腊',
    'Greenland':'格陵兰',
    'Grenada':'格林纳达',
    'Guadeloupe':'瓜德罗普岛',
    'Guatemala':'危地马拉',
    'Guinea':'几内亚',
    'Guinea Bissau':'几内亚比绍',
    'Guyana':'圭亚那',
    'Haiti':'海地',
    'Honduras':'洪都拉斯',
    'Hong Kong':'香港',
    'Hungary':'匈牙利',
    'Iceland':'冰岛',
    'India':'印度',
    'Indonesia':'印度尼西亚',
    'Iran':'伊朗',
    'Iraq':'伊拉克',
    'Iraq-Saudi Arabia Neutral Zone':'伊拉克阿拉伯中立区',
    'Ireland':'爱尔兰',
    'Isle of Man':'马恩岛',
    'Israel':'以色列',
    'Italy':'意大利',
    'Ivory Coast':'科特迪瓦',
    'Jamaica':'牙买加',
    'Jan Mayen':'扬马延岛',
    'Japan':'日本',
    'Jordan':'约旦',
    'Kazakhstan':'哈萨克斯坦',
    'Kenya':'肯尼亚',
    'Kerguelen':'凯尔盖朗群岛',
    'Kiribati':'基里巴斯',
    'North Korea':'朝鲜',
    'South Korea':'韩国',
    'Kuwait':'科威特',
    'Kyrgyzstan':'吉尔吉斯斯坦',
    'Laos':'老挝',
    'Latvia':'拉脱维亚',
    'Lebanon':'黎巴嫩',
    'Lesotho':'莱索托',
    'Liberia':'利比里亚',
    'Libya':'利比亚',
    'Liechtenstein':'列支敦士登',
    'Lithuania':'立陶宛',
    'Luxembourg':'卢森堡',
    'Macau':'澳门',
    'Macedonia':'马其顿',
    'Madagascar':'马达加斯加',
    'Malawi':'马拉维',
    'Malaysia':'马来西亚',
    'Maldives':'马尔代夫',
    'Mali':'马里',
    'Malta':'马耳他',
    'Martinique':'马提尼克',
    'Mauritania':'毛里塔尼亚',
    'Mauritius':'毛里求斯',
    'Mexico':'墨西哥',
    'Moldova':'摩尔多瓦',
    'Monaco':'摩纳哥',
    'Mongolia':'蒙古',
    'Morocco':'摩洛哥',
    'Mozambique':'莫桑比克',
    'Myanmar':'缅甸',
    'Namibia':'纳米比亚',
    'Nepal':'尼泊尔',
    'Netherlands':'荷兰',
    'New Caledonia':'新喀里多尼亚',
    'New Zealand':'新西兰',
    'Nicaragua':'尼加拉瓜',
    'Niger':'尼日尔',
    'Nigeria':'尼日利亚',
    'Northern Mariana Islands':'北马里亚纳群岛',
    'Norway':'挪威',
    'Oman':'阿曼',
    'Pakistan':'巴基斯坦',
    'Panama':'巴拿马',
    'Papua New Guinea':'巴布亚新几内亚',
    'Paraguay':'巴拉圭',
    'Peru':'秘鲁',
    'Philippines':'菲律宾',
    'Poland':'波兰',
    'Portugal':'葡萄牙',
    'Puerto Rico':'波多黎各',
    'Qatar':'卡塔尔',
    'Reunion':'留尼旺岛',
    'Romania':'罗马尼亚',
    'Russia':'俄罗斯',
    'Rwanda':'卢旺达',
    'San Marino':'圣马力诺',
    'Sao Tome and Principe':'圣多美和普林西比',
    'Saudi Arabia':'沙特阿拉伯',
    'Senegal':'塞内加尔',
    'Seychelles':'塞舌尔',
    'Sierra Leone':'塞拉利昂',
    'Singapore':'新加坡',
    'Slovakia':'斯洛伐克',
    'Slovenia':'斯洛文尼亚',
    'Solomon Islands':'所罗门群岛',
    'Somalia':'索马里',
    'South Africa':'南非',
    'Spain':'西班牙',
    'Sri Lanka':'斯里兰卡',
    'St. Christopher-Nevis':'圣',
    'St. Lucia':'圣露西亚',
    'St. Vincent and the Grenadines':'圣文森特和格林纳丁斯',
    'Sudan':'苏丹',
    'Suriname':'苏里南',
    'Svalbard':'斯瓦尔巴特群岛',
    'Swaziland':'斯威士兰',
    'Sweden':'瑞典',
    'Switzerland':'瑞士',
    'Syria':'叙利亚',
    'Taiwan':'台湾',
    'Tajikistan':'塔吉克斯坦',
    'United Republic of Tanzania':'坦桑尼亚',
    'Thailand':'泰国',
    'Togo':'多哥',
    'Tonga':'汤加',
    'Trinidad and Tobago':'特里尼达和多巴哥',
    'Tunisia':'突尼斯',
    'Turkey':'土耳其',
    'Turkmenistan':'土库曼斯坦',
    'Turks and Caicos Islands':'特克斯和凯科斯群岛',
    'Uganda':'乌干达',
    'Ukraine':'乌克兰',
    'United Arab Emirates':'阿联酋',
    'United Kingdom':'英国',
    'United States':'美国',
    'Uruguay':'乌拉圭',
    'Uzbekistan':'乌兹别克斯坦',
    'Vanuatu':'瓦努阿图',
    'Venezuela':'委内瑞拉',
    'Vietnam':'越南',
    'Western Sahara':'西撒哈拉',
    'Western Samoa':'西萨摩亚',
    'Yemen':'也门',
    'Yugoslavia':'南斯拉夫',
    'Democratic Republic of the Congo':'刚果民主共和国',
    'Zambia':'赞比亚',
    'Zimbabwe':'津巴布韦',
    'South Sudan':'南苏丹',
    'Somaliland':'索马里兰',
    'Montenegro':'黑山',
    'Kosovo':'科索沃',
    'Republic of Serbia':'塞尔维亚',
}

function get_globalYQ() {
    // debugger;
    var today = {"date": getNowFormatDate()};

    $.ajax({
        type: 'POST',
        url: '/getGlobalYQ/',
        dataType: 'json',
        async: true,
        data: today,
        error: function (er) {  //失败的话
            alert("Connection error" + er);
        },
        success: function (data) {
            // console.log('成功' + data.status);
            data1ist = data.result; // 列表[{'cname': '厄瓜多尔', 'value': 13}, {'cname': '智利', 'value': 8}]
            for (var i = 0; i < data1ist.length; i++) {
                for (let key in nameMap) {
                    if (nameMap[key] == data1ist[i]['cname']) {
                        data1ist[i]['name'] = key;
                        break;
                    }
                }
            }
            for (let i = 0; i < data1ist.length; i++) {
                if(!data1ist[i]['name']){
                   // console.log(data1ist[i]['cname'])
                }
            }
            // console.log(data1ist.length+data1ist);
            // 加载地图
            var myChart = echarts.init(document.getElementById('main'));
            option = {
                // title: {
                //     text: '全球新冠肺炎疫情分布图',
                //     // subtext: 'from United Nations, Total population, both sexes combined, as of 1 July (thousands)',
                //     // sublink: 'http://esa.un.org/wpp/Excel-Data/population.htm',
                //     left: 'center',
                //     top: '50'
                // },
                tooltip: {
                    trigger: 'item',
                    formatter: function (params) {
                        var value = (params.value + '').split('.');
                        value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')
                            + '.' + value[1];
                        // return params.seriesName + '<br/>' + nation_name + ' : ' + value;
                        span = '<div style="font-size: 40px;height:90px;background-color:rgba(158,158,158,0.8);color: white;text-align: center;display:block;"><div style="display:block;height:45px;padding-top: 10px;">'+params.data.cname+'</div><div style="font-size: 30px;display:block;height:40px;padding: 0 10px 10px">'+" 现存确诊 : " + params.data.value+'</div></div>';
                        return span ;
                    }
                },
                // toolbox: {
                //     show: true,
                //     orient: 'vertical',
                //     right: 'right',
                //     top: 'center',
                //     itemSize:30,
                //     feature: {
                //
                //         restore: { show: true},
                //         saveAsImage: {}
                //     }
                // },
                visualMap:{
                    show:true,                              //是否显示 visualMap-continuous 组件。如果设置为 false，不会显示，但是数据映射的功能还存在
                    type: 'piecewise', // 类型为分段型
                    splitNumber: 7,
                    seriesIndex: [0],
                    itemWidth: 20, // 每个图元的宽度
                    itemGap: 20,    // 每两个图元之间的间隔距离，单位为px
                    orient:"horizontal",
                    left:"center",                              //组件离容器左侧的距离,'left', 'center', 'right','20%'
                    // top:"top",                                   //组件离容器上侧的距离,'top', 'middle', 'bottom','20%'
                    right:"auto",                               //组件离容器右侧的距离,'20%'
                    bottom:"bottom",
                    pieces: [      // 自定义每一段的范围，以及每一段的文字
                        { gte: 10000, label: '>10000', color: '#380000' }, // 不指定 max，表示 max 为无限大（Infinity）。
                        { gte: 1000, lte: 9999, label: '1000-9999', color: '#7d0404' },
                        { gte: 500, lte: 999, label: '500-999', color: '#b25256' },
                        { gte: 100, lte: 499, label: '100-499', color: '#db4747' },
                        { gte: 10, lte: 99, label: '10-99', color: '#e58590' },
                        { lte: 9, label: '1-9', color: '#ffe3e3' } ,         // 不指定 min，表示 min 为无限大（-Infinity）。
                        { lte: 0, label: '0', color: 'white' },
                      ],
                      textStyle: {
                          color: '#737373',
                          fontSize:20,
                      },
                            },
                series: [
                    {
                        name: '全球疫情图',
                        type: 'map',
                        mapType: 'world',
                        roam: true,//是否开启平游或缩放
                        zoom: 1, //当前视角的缩放比例
                        scaleLimit: { //滚轮缩放的极限控制
                          min: 1,
                          max: 9
                        },

                        itemStyle: {
                            emphasis: {label: {show: true}}
                        },
                        data: data1ist
                    }
                ]
            };
            myChart.setOption(option);
        },
    });
}

get_globalYQ();
