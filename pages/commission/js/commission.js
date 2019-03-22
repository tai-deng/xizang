var uploadedDataURL = './js/s.json';
console.log(uploadedDataURL);
var myChart = echarts.init(document.getElementById('mychart_map01'));
myChart.showLoading();
$.getJSON(uploadedDataURL, function(geoJson) {
  console.log(geoJson);
  echarts.registerMap('nanchang', geoJson);
  myChart.hideLoading();
  var geoCoordMap = {
    措那县: [91.877717, 28.272709],
    隆子县: [92.411239, 28.679125],
    曲松县: [92.287057, 29.281737],
    加查县: [92.682599, 29.346235],
    桑日县: [92.107684, 29.46712],
    浪卡子县: [90.341543, 29.184911],
    洛扎县: [90.865866, 28.622322],
    措美县: [91.38099, 28.687237],
    琼结县: [91.65235, 29.245438],
    扎囊县: [91.334997, 29.450957],
    贡嘎县: [90.939455, 29.51937],
    乃东区: [91.785731, 29.438879]
  };
  var data = [
    ['措那县', 10, 20],
    ['隆子县', 10, 25],
    ['曲松县', 10, 20],
    ['加查县', 15, 20],
    ['桑日县', 10, 20],
    ['浪卡子县', 10, 20],
    ['洛扎县', 10, 25],
    ['措美县', 10, 20],
    ['琼结县', 15, 20],
    ['扎囊县', 10, 25],
    ['贡嘎县', 15, 20],
    ['乃东区', 10, 20]
  ];
  var max = 480,
    min = 9; // todo
  var maxSize4Pin = 100,
    minSize4Pin = 20;

  var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
      var geoCoord = geoCoordMap[data[i].name];
      if (geoCoord) {
        res.push({
          name: data[i].name,
          value: geoCoord.concat(data[i].value)
        });
      }
    }
    return res;
  };

  option = {
    title: {
      text: '   项目分布',
      subtext: '',
      x: 'left',
      textStyle: {
        color: '#ccc'
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: function(params) {
        // if (typeof(params.value)[2] == "undefined") {
        //     return params.name + ' : ' + params.value;
        // } else {
        //     return params.name + ' : ' + params.value[2];
        // }
        if (typeof params.value[2] == 'undefined') {
          return params.name;
        } else {
          return params.name;
        }
      }
    },
    visualMap: {
      show: false,
      min: 0,
      max: 500,
      left: 'left',
      top: 'bottom',
      text: ['高', '低'], // 文本，默认为数值文本
      calculable: true,
      seriesIndex: [1],
      inRange: {
        // color: ['#3B5077', '#031525'], // 蓝黑
        // color: ['#ffc0cb', '#800080'], // 红紫
        // color: ['#3C3B3F', '#605C3C'], // 黑绿
        // color: ['#0f0c29', '#302b63', '#24243e'], // 黑紫黑
        // color: ['#23074d', '#cc5333'], // 紫红
        color: ['#00467F', '#A5CC82'] // 蓝绿
        // color: ['#1488CC', '#2B32B2'], // 浅蓝
        // color: ['#00467F', '#A5CC82'], // 蓝绿
        // color: ['#00467F', '#A5CC82'], // 蓝绿
        // color: ['#00467F', '#A5CC82'], // 蓝绿
        // color: ['#00467F', '#A5CC82'] // 蓝绿
      }
    },
    // toolbox: {
    //     show: true,
    //     orient: 'vertical',
    //     left: 'right',
    //     top: 'center',
    //     feature: {
    //             dataView: {readOnly: false},
    //             restore: {},
    //             saveAsImage: {}
    //             }
    // },
    geo: {
      show: true,
      map: 'nanchang',
      label: {
        normal: {
          show: false
        },
        emphasis: {
          show: false
        }
      },
      roam: true,
      itemStyle: {
        normal: {
          areaColor: 'rgba(55, 158, 232, 1)',
          borderColor: 'rgba(255, 255, 255, 1)'
        },
        emphasis: {
          areaColor: 'rgba(18, 94, 148, 1)'
        }
      }
    },
    series: [
      {
        name: 'credit_pm2.5',
        type: 'scatter',
        coordinateSystem: 'geo',
        data: convertData(data),
        symbolSize: function(val) {
          return val[2] / 10;
        },
        label: {
          normal: {
            formatter: '{b}',
            position: 'right',
            show: true
          },
          emphasis: {
            show: true
          }
        },
        itemStyle: {
          normal: {
            color: '#05C3F9'
          }
        }
      },
      {
        type: 'map',
        map: 'tianjin',
        geoIndex: 0,
        aspectScale: 0.75, //长宽比
        showLegendSymbol: false, // 存在legend时显示
        label: {
          normal: {
            show: false
          },
          emphasis: {
            show: false,
            textStyle: {
              color: '#fff'
            }
          }
        },
        roam: true,
        itemStyle: {
          normal: {
            areaColor: '#031525',
            borderColor: '#3B5077'
          },
          emphasis: {
            areaColor: '#2B91B7'
          }
        },
        animation: false,
        data: data
      },
      {
        name: '点',
        type: 'scatter',
        coordinateSystem: 'geo',
        symbol: 'pin',
        symbolSize: function(val) {
          var a = (maxSize4Pin - minSize4Pin) / (max - min);
          var b = minSize4Pin - a * min;
          b = maxSize4Pin - a * max;
          return a * val[2] + b;
        },
        label: {
          normal: {
            show: true,
            textStyle: {
              color: '#fff',
              fontSize: 9
            }
          }
        },
        itemStyle: {
          normal: {
            color: '#F62157' //标志颜色
          }
        },
        zlevel: 6,
        data: convertData(data)
      },
      {
        name: 'Top 5',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: convertData(
          data
            .sort(function(a, b) {
              return b.value - a.value;
            })
            .slice(0, 5)
        ),
        symbolSize: function(val) {
          return val[2] / 10;
        },
        showEffectOn: 'render',
        rippleEffect: {
          brushType: 'stroke'
        },
        hoverAnimation: true,
        label: {
          normal: {
            formatter: '{b}',
            position: 'right',
            show: true
          }
        },
        itemStyle: {
          normal: {
            color: '#E5CE10',
            shadowBlur: 10,
            shadowColor: '#05C3F9'
          }
        },
        zlevel: 1
      }
    ]
  };
  myChart.setOption(option);

  //给每个城市对应的坐标处加上柱状图
  function renderEachCity() {
    var option = {
      xAxis: [],
      yAxis: [],
      grid: [],
      series: []
    };
    echarts.util.each(data, function (dataItem, idx) {
      // console.log(dataItem,idx);      //["南京", 10, 20, 30], 0
      // console.log(dataItem[0]);       //"南京"
      var inflationData = [dataItem[1], dataItem[2], dataItem[3]];
      var geoCoord = geoCoordMap[dataItem[0]]; //获得城市的坐标
      var coord = myChart.convertToPixel('geo', geoCoord); //转换坐标系上的点到像素坐标值。
      idx += '';
      option.xAxis.push({
        id: idx,
        gridId: idx,
        type: 'category',
        name: dataItem[0],
        nameTextStyle: {
          color: '#F1E04F',
        },
        nameLocation: 'middle',
        nameGap: 3,
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false
        },
        axisLine: {
          show: false
        },
        minInterval: 10,
        data: ["学校", "教师", "学生"],
        z: 100

      });
      option.yAxis.push({
        id: idx,
        gridId: idx,
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: '#1C70B6'
          }
        },
        max: 50,
        z: 100
      });
      option.grid.push({
        id: idx,
        width: 30,
        height: 40,
        left: coord[0] - 15,
        top: coord[1] - 15,
        z: 100
      });
      // option.series.push({
      //   id: idx,
      //   type: 'bar',
      //   xAxisId: idx,
      //   yAxisId: idx,
      //   barWidth: 7,
      //   barGap: 1,
      //   barCategoryGap: 0,
      //   data: inflationData,
      //   z: 100,
      //   itemStyle: {
      //     normal: {
      //       color: function (params) {
      //         // 柱状图每根柱子颜色
      //         var colorList = ['#E5CE10', '#FF7E00'];
      //         return colorList[params.dataIndex];
      //       }
      //     }
      //   }
      // });
    });
    myChart.setOption(option);
  }
  setTimeout(renderEachCity, 0);
});
var xData = [
  '乃东区(项目:113)',
  '琼结县(项目:113)',
  '扎囊县(项目:113)',
  '贡嘎县(项目:113)',
  '浪卡子县(项目:113)',
  '洛扎县(项目:113)',
  '措美县(项目:113)',
  '错那县(项目:113)',
  '隆子县(项目:113)',
  '曲松县(项目:113)',
  '加查县(项目:113)',
  '曲松县(项目:113)'
];
// 项目进度
var option = {
  //   backgroundColor: "#344b58",
  //     title: {
  //       text: '项目进度',
  //       x: '4%',
  //       textStyle: {
  //             color: 'rgba(255, 255, 255, 1)',fontSize: '14',
  //         fontSize: '22'
  //       }
  //     },
  //   "tooltip": {
  //       "trigger": "axis",
  //       "axisPointer": {
  //           "type": "shadow",
  //           textStyle: {
  //               color: "rgba(255, 255, 255, 1)"
  //           }

  //       },
  //   },
  textStyle: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: '14',
    fontSize: '14'
  },
  grid: {
    borderWidth: 0,
    top: 10,
    bottom: 60,
    left: 100,
    right: 20,
    textStyle: {
      color: 'rgba(255, 255, 255, 1)'
    }
  },
  legend: {
    x: 'center',
    y: 'bottom',
    textStyle: {
      color: 'rgba(171, 203, 255, 1)',
      fontSize: '14'
    },
    data: ['2017计划投资', '2017实际完成投资', '2018计划投资', '2018实际完成投资']
  },

  calculable: true,
  xAxis: [
    {
      type: 'category',
      axisLine: {
        lineStyle: {
          color: 'rgba(171, 203, 255, 1)'
        }
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitArea: {
        show: false
      },
      axisLabel: {
        interval: 0,
        fontSize: '14'
      },
      data: xData
    }
  ],
  yAxis: [
    {
      type: 'value',
      splitLine: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(171, 203, 255, 1)'
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        interval: 0,
        fontSize: '14',
        formatter: function(value) {
          return value / 1000000 + 'M(万元)';
        }
      },
      splitArea: {
        show: false
      },
      splitNumber: 2 //坐标轴的分割段数
    }
  ],

  series: [
    {
      name: '2017计划投资',
      type: 'bar',
      stack: '2017',
      barMaxWidth: 36,
      barGap: '10%',
      itemStyle: {
        normal: {
          color: 'rgba(250, 200, 113, 1)',
          label: {
            show: true,
            textStyle: {
              color: 'rgba(255, 255, 255, 1)',
              fontSize: '10'
            },
            position: 'insideTop',
            formatter: function(p) {
              return p.value > 0 ? p.value : '';
            }
          }
        }
      },
      data: [
        137209,
        191147,
        241555,
        266210,
        171729,
        172433,
        215474,
        327285,
        532028,
        324372,
        242584,
        462078,
        612222,
        363233
      ]
    },
    {
      name: '2017实际完成投资',
      type: 'bar',
      stack: '2017',
      itemStyle: {
        normal: {
          color: 'rgba(251, 142, 99, 1)',
          barBorderRadius: 0,
          label: {
            show: true,
            textStyle: {
              color: 'rgba(255, 255, 255, 1)',
              fontSize: '10'
            },
            position: 'insideTop',
            formatter: function(p) {
              return p.value > 0 ? p.value : '';
            }
          }
        }
      },
      data: [
        115327,
        822876,
        224507,
        933200,
        803330,
        543382,
        632204,
        227390,
        292001,
        892251,
        228381,
        922220,
        322222,
        422223
      ]
    },
    {
      name: '2018计划投资',
      type: 'bar',
      stack: '2018',
      barMaxWidth: 36,
      barGap: '10%',
      itemStyle: {
        normal: {
          color: 'rgba(76, 161, 244, 1)',
          label: {
            show: true,
            textStyle: {
              color: 'rgba(255, 255, 255, 1)',
              fontSize: '10'
            },
            position: 'insideTop',
            formatter: function(p) {
              return p.value > 0 ? p.value : '';
            }
          }
        }
      },
      data: [
        171109,
        192217,
        233455,
        261330,
        973319,
        143333,
        153344,
        323385,
        523308,
        533372,
        248334,
        335078,
        633222,
        633333
      ]
    },
    {
      name: '2018实际完成投资',
      type: 'bar',
      stack: '2018',
      itemStyle: {
        normal: {
          color: 'rgba(19, 90, 206, 1)',
          barBorderRadius: 0,
          label: {
            show: true,
            textStyle: {
              color: 'rgba(255, 255, 255, 1)',
              fontSize: '10'
            },
            position: 'insideTop',
            formatter: function(p) {
              return p.value > 0 ? p.value : '';
            }
          }
        }
      },
      data: [
        633327,
        633776,
        653307,
        336200,
        633800,
        648332,
        820433,
        993390,
        133901,
        933519,
        333891,
        293320,
        922332,
        933333
      ]
    }
  ]
};
echarts.init(document.getElementById('project'), null).setOption(option);
// 项目类型分布

var setOption = function(id, data, colorList) {
  var option = {
    // tooltip: {
    //     trigger: 'item',
    //     formatter: "{a} <br/>{b}: {c} ({d}%)"
    // },
    series: [
      {
        name: '建设类型',
        type: 'pie',
        radius: ['30%', '35%'],
        hoverAnimation: false,
        color: colorList,
        label: {
          normal: {
            formatter: '{b} \n {c}',
            fontSize: 12,
            color: '#fff',
            position: 'outside'
          }
        },
        data: data
      }
    ]
  };
  echarts.init(document.getElementById(id), null).setOption(option);
};
setOption(
  'type2',
  [
    { name: '市政稳定', value: 182 },
    { name: '农牧业水', value: 39 },
    { name: '交通能源', value: 29 },
    { name: '社会发展', value: 66 },
    { name: '环境资源', value: 19 }
  ],
  ['#FF0000', '#FF7E00', '#E5CE10', '#24C768', '#00A1E4']
);

setOption(
  'type1',
  [
    { name: '续建待复工项目', value: 48 },
    { name: '新开工项目', value: 53 },
    { name: '续建复工项目', value: 118 },
    { name: '拟开工项目', value: 214 }
  ],
  ['#FF0000', '#FF7E00', '#E5CE10', '#24C768']
);
