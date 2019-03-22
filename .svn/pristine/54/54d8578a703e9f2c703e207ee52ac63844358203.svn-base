// var uploadedDataURL = "json/shannan.json";
// console.log(uploadedDataURL)
// var myChart = echarts.init(document.getElementById('mychart_map'));
// console.log(myChart,'myChart')
// myChart.showLoading();
// $.getJSON(uploadedDataURL, function(geoJson) {
//   console.log(geoJson)
//     echarts.registerMap('nanchang', geoJson);
//     myChart.hideLoading();
//     var geoCoordMap = {
//         '南昌县': [115.93, 28.55],
//         '东湖区': [115.9, 28.68],
//         '西湖区': [115.87, 28.67],
//         '青云谱区': [115.92, 28.63],
//         '湾里区': [115.73, 28.72],
//         '青山湖区': [115.95, 28.68],
//         '新建县': [115.82, 28.7],
//         '安义县': [115.55, 28.85],
//         '进贤县': [116.27, 28.37],
//     }
//     var data = [{
//             name: '南昌县',
//             value: 199
//         },
//         {
//             name: '东湖区',
//             value: 39
//         },
//         {
//             name: '西湖区',
//             value: 152
//         },
//         {
//             name: '青云谱区',
//             value: 299
//         },
//         {
//             name: '湾里区',
//             value: 89
//         },
//         {
//             name: '青山湖区',
//             value: 52
//         },
//         {
//             name: '新建县',
//             value: 9
//         },
//         {
//             name: '安义县',
//             value: 352
//         },
//         {
//             name: '进贤县',
//             value: 99
//         },
//     ];
//     var max = 480,
//         min = 9; // todo 
//     var maxSize4Pin = 100,
//         minSize4Pin = 20;

//     var convertData = function(data) {
//         var res = [];
//         for (var i = 0; i < data.length; i++) {
//             var geoCoord = geoCoordMap[data[i].name];
//             if (geoCoord) {
//                 res.push({
//                     name: data[i].name,
//                     value: geoCoord.concat(data[i].value)
//                 });
//             }
//         }
//         return res;
//     };


//     option = {
//         title: {
//             text: '   项目分布',
//             subtext: '',
//             x: 'left',
//             textStyle: {
//                 color: '#ccc'
//             }
//         },
//         tooltip: {
//             trigger: 'item',
//             formatter: function(params) {
//                 // if (typeof(params.value)[2] == "undefined") {
//                 //     return params.name + ' : ' + params.value;
//                 // } else {
//                 //     return params.name + ' : ' + params.value[2];
//                 // }
//                 if (typeof(params.value)[2] == "undefined") {
//                   return params.name 
//               } else {
//                   return params.name 
//               }
//             }
//         },
//         // legend: {
//         //     orient: 'vertical',
//         //     y: 'bottom',
//         //     x: 'right',
//         //     data: ['credit_pm2.5'],
//         //     textStyle: {
//         //         color: '#fff'
//         //     }
//         // },
//         visualMap: {
//             show: false,
//             min: 0,
//             max: 500,
//             left: 'left',
//             top: 'bottom',
//             text: ['高', '低'], // 文本，默认为数值文本
//             calculable: true,
//             seriesIndex: [1],
//             inRange: {
//                 // color: ['#3B5077', '#031525'] // 蓝黑
//                 // color: ['#ffc0cb', '#800080'] // 红紫
//                 // color: ['#3C3B3F', '#605C3C'] // 黑绿
//                 //color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
//                 // color: ['#23074d', '#cc5333'] // 紫红
//                 // color: ['#00467F', '#A5CC82'] // 蓝绿
//                  color: ['#1488CC', '#2B32B2'] // 浅蓝
//                 // color: ['#00467F', '#A5CC82'] // 蓝绿
//                 // color: ['#00467F', '#A5CC82'] // 蓝绿
//                 // color: ['#00467F', '#A5CC82'] // 蓝绿
//                 // color: ['#00467F', '#A5CC82'] // 蓝绿

//             }
//         },
//         // toolbox: {
//         //     show: true,
//         //     orient: 'vertical',
//         //     left: 'right',
//         //     top: 'center',
//         //     feature: {
//         //             dataView: {readOnly: false},
//         //             restore: {},
//         //             saveAsImage: {}
//         //             }
//         // },
//         geo: {
//             show: true,
//             map: 'nanchang',
//             label: {
//                 normal: {
//                     show: false
//                 },
//                 emphasis: {
//                     show: false,
//                 }
//             },
//             roam: true,
//             itemStyle: {
//                 normal: {
//                     areaColor: '#031525',
//                     borderColor: '#3B5077',
//                 },
//                 emphasis: {
//                     areaColor: '#2B91B7',
//                 }
//             }
//         },
//         series: [{
//                 name: 'credit_pm2.5',
//                 type: 'scatter',
//                 coordinateSystem: 'geo',
//                 data: convertData(data),
//                 symbolSize: function(val) {
//                     return val[2] / 10;
//                 },
//                 label: {
//                     normal: {
//                         formatter: '{b}',
//                         position: 'right',
//                         show: true
//                     },
//                     emphasis: {
//                         show: true
//                     }
//                 },
//                 itemStyle: {
//                     normal: {
//                         color: '#05C3F9'
//                     }
//                 }
//             },
//             {
//                 type: 'map',
//                 map: 'tianjin',
//                 geoIndex: 0,
//                 aspectScale: 0.75, //长宽比
//                 showLegendSymbol: false, // 存在legend时显示
//                 label: {
//                     normal: {
//                         show: false
//                     },
//                     emphasis: {
//                         show: false,
//                         textStyle: {
//                             color: '#fff'
//                         }
//                     }
//                 },
//                 roam: true,
//                 itemStyle: {
//                     normal: {
//                         areaColor: '#031525',
//                         borderColor: '#3B5077',
//                     },
//                     emphasis: {
//                         areaColor: '#2B91B7'
//                     }
//                 },
//                 animation: false,
//                 data: data
//             },
//             {
//                 name: '点',
//                 type: 'scatter',
//                 coordinateSystem: 'geo',
//                 symbol: 'pin',
//                 symbolSize: function(val) {
//                     var a = (maxSize4Pin - minSize4Pin) / (max - min);
//                     var b = minSize4Pin - a * min;
//                     b = maxSize4Pin - a * max;
//                     return a * val[2] + b;
//                 },
//                 label: {
//                     normal: {
//                         show: true,
//                         textStyle: {
//                             color: '#fff',
//                             fontSize: 9,
//                         }
//                     }
//                 },
//                 itemStyle: {
//                     normal: {
//                         color: '#F62157', //标志颜色
//                     }
//                 },
//                 zlevel: 6,
//                 data: convertData(data),
//             },
//             {
//                 name: 'Top 5',
//                 type: 'effectScatter',
//                 coordinateSystem: 'geo',
//                 data: convertData(data.sort(function(a, b) {
//                     return b.value - a.value;
//                 }).slice(0, 5)),
//                 symbolSize: function(val) {
//                     return val[2] / 10;
//                 },
//                 showEffectOn: 'render',
//                 rippleEffect: {
//                     brushType: 'stroke'
//                 },
//                 hoverAnimation: true,
//                 label: {
//                     normal: {
//                         formatter: '{b}',
//                         position: 'right',
//                         show: true
//                     }
//                 },
//                 itemStyle: {
//                     normal: {
//                         color: '#05C3F9',
//                         shadowBlur: 10,
//                         shadowColor: '#05C3F9'
//                     }
//                 },
//                 zlevel: 1
//             },

//         ]
//     };
//     myChart.setOption(option);
// });




$(function () {
  /* 工程管理饼状图（左） */
  let mychart_pie_one = echarts.init(document.getElementById("mychart_pie_one"));
  // 圆环图各环节的颜色
  var color = ['#FF0000', '#FF7E00', '#E5CE10', '#24C768'];
  // 圆环图各环节的名称和值(系列中各数据项的名称和值)
  var data = [{
    name: '新开工项目',
    value: 53
  }, {
    name: '续建复工项目',
    value: 118
  }, {
    name: '续建待复工项目',
    value: 348
  }, {
    name: '拟开工项目',
    value: 214
  }];
  // 指定图表的配置项和数据
  var option_pie_one = {
    //背景色
    backgroundColor: "#03155A",
    // 提示框
    // tooltip: {
    //   show: true, // 是否显示提示框
    //   formatter: '{b} </br> 销量{c}件 </br> 占比{d}%' // 提示框显示内容,此处{b}表示各数据项名称，此项配置为默认显示项，{c}表示数据项的值，默认不显示，({d}%)表示数据项项占比，默认不显示。
    // },

    // 系列列表
    series: [{
      name: '圆环图系列名称', // 系列名称
      type: 'pie', // 系列类型 
      center: ['50%', '50%'], // 饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。[ default: ['50%', '50%'] ]
      radius: ['35%', '42%'], // 饼图的半径，数组的第一项是内半径，第二项是外半径。[ default: [0, '75%'] ]
      hoverAnimation: true, // 是否开启 hover 在扇区上的放大动画效果。[ default: true ]
      color: color, // 圆环图的颜色
      label: { // 饼图图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等.
        normal: {
          color: '#fff',
          show: true, // 是否显示标签[ default: false ]
          position: 'outside', // 标签的位置。'outside'饼图扇区外侧，通过视觉引导线连到相应的扇区。'inside','inner' 同 'inside',饼图扇区内部。'center'在饼图中心位置。
          formatter: '{b} \n: {c}' // 标签内容
        }
      },
      labelLine: { // 标签的视觉引导线样式,在 label 位置 设置为'outside'的时候会显示视觉引导线。
        normal: {
          show: true, // 是否显示视觉引导线。
          length: 5, // 在 label 位置 设置为'outside'的时候会显示视觉引导线。
          length2: 6, // 视觉引导项第二段的长度。
          lineStyle: { // 视觉引导线的样式
            //color: '#000',
            //width: 1
          }
        }
      },
      data: data // 系列中的数据内容数组。
    }]
  };
  mychart_pie_one.setOption(option_pie_one);

  /* 工程管理饼状图（右） */
  let mychart_pie_two = echarts.init(document.getElementById("mychart_pie_two"));
  // 圆环图各环节的颜色
  var color = ['#FF0000', '#FF7E00', '#E5CE10', '#24C768', '#00A1E4'];
  // 圆环图各环节的名称和值(系列中各数据项的名称和值)
  var data = [{
    name: '新开工项目',
    value: 53
  }, {
    name: '续建复工项目',
    value: 118
  }, {
    name: '续建待复工项目',
    value: 348
  }, {
    name: '拟开工项目',
    value: 214
  }, {
    name: '环境资源',
    value: 19
  }];
  // 指定图表的配置项和数据
  var option_pie_two = {
    //背景色
    backgroundColor: "#03155A",
    // 提示框
    // tooltip: {
    //   show: true, // 是否显示提示框
    //   formatter: '{b} </br> 销量{c}件 </br> 占比{d}%' // 提示框显示内容,此处{b}表示各数据项名称，此项配置为默认显示项，{c}表示数据项的值，默认不显示，({d}%)表示数据项项占比，默认不显示。
    // },

    // 系列列表
    series: [{
      name: '圆环图系列名称', // 系列名称
      type: 'pie', // 系列类型 
      center: ['50%', '50%'], // 饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。[ default: ['50%', '50%'] ]
      radius: ['35%', '42%'], // 饼图的半径，数组的第一项是内半径，第二项是外半径。[ default: [0, '75%'] ]
      hoverAnimation: true, // 是否开启 hover 在扇区上的放大动画效果。[ default: true ]
      color: color, // 圆环图的颜色
      label: { // 饼图图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等.
        normal: {
          color: '#fff',
          show: true, // 是否显示标签[ default: false ]
          position: 'outside', // 标签的位置。'outside'饼图扇区外侧，通过视觉引导线连到相应的扇区。'inside','inner' 同 'inside',饼图扇区内部。'center'在饼图中心位置。
          formatter: '{b} \n: {c}' // 标签内容
        }
      },
      labelLine: { // 标签的视觉引导线样式,在 label 位置 设置为'outside'的时候会显示视觉引导线。
        normal: {
          show: true, // 是否显示视觉引导线。
          length: 5, // 在 label 位置 设置为'outside'的时候会显示视觉引导线。
          length2: 6, // 视觉引导项第二段的长度。
          lineStyle: { // 视觉引导线的样式
            //color: '#000',
            //width: 1
          }
        }
      },
      data: data // 系列中的数据内容数组。
    }]
  };
  mychart_pie_two.setOption(option_pie_two);



  /* 投资管理（左） */
  let mychart_pie_three = echarts.init(document.getElementById("mychart_pie_three"));
  // 圆环图各环节的颜色
  var color = ['#FF0000', '#FF7E00', '#E5CE10', '#24C768'];
  // 圆环图各环节的名称和值(系列中各数据项的名称和值)
  var data = [{
    name: '新开工',
    value: 967312
  }, {
    name: '续建复工',
    value: 967312
  }, {
    name: '续建待复工',
    value: 967312
  }, {
    name: '拟开工',
    value: 967312
  }];
  // 指定图表的配置项和数据
  var option_pie_three = {
    //背景色
    backgroundColor: "#03155A",
    // 提示框
    // tooltip: {
    //   show: true, // 是否显示提示框
    //   formatter: '{b} </br> 销量{c}件 </br> 占比{d}%' // 提示框显示内容,此处{b}表示各数据项名称，此项配置为默认显示项，{c}表示数据项的值，默认不显示，({d}%)表示数据项项占比，默认不显示。
    // },

    // 系列列表
    series: [{
      name: '圆环图系列名称', // 系列名称
      type: 'pie', // 系列类型 
      center: ['50%', '50%'], // 饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。[ default: ['50%', '50%'] ]
      radius: ['35%', '42%'], // 饼图的半径，数组的第一项是内半径，第二项是外半径。[ default: [0, '75%'] ]
      hoverAnimation: true, // 是否开启 hover 在扇区上的放大动画效果。[ default: true ]
      color: color, // 圆环图的颜色
      label: { // 饼图图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等.
        normal: {
          color: '#fff',
          show: true, // 是否显示标签[ default: false ]
          position: 'outside', // 标签的位置。'outside'饼图扇区外侧，通过视觉引导线连到相应的扇区。'inside','inner' 同 'inside',饼图扇区内部。'center'在饼图中心位置。
          formatter: '{b} \n: {c}' // 标签内容
        }
      },
      labelLine: { // 标签的视觉引导线样式,在 label 位置 设置为'outside'的时候会显示视觉引导线。
        normal: {
          show: true, // 是否显示视觉引导线。
          length: 5, // 在 label 位置 设置为'outside'的时候会显示视觉引导线。
          length2: 6, // 视觉引导项第二段的长度。
          lineStyle: { // 视觉引导线的样式
            //color: '#000',
            //width: 1
          }
        }
      },
      data: data // 系列中的数据内容数组。
    }]
  };
  mychart_pie_three.setOption(option_pie_three);

  /* 投资管理（右） */
  let mychart_pie_four = echarts.init(document.getElementById("mychart_pie_four"));
  // 圆环图各环节的颜色
  var color = ['#FF0000', '#FF7E00', '#E5CE10', '#24C768', '#00A1E4'];
  // 圆环图各环节的名称和值(系列中各数据项的名称和值)
  var data = [{
    name: '铁路',
    value: 967312
  }, {
    name: '农牧林水',
    value: 802222
  }, {
    name: '环境资源',
    value: 302221
  }, {
    name: '农牧业水',
    value: 39
  }, {
    name: '社会发展',
    value: 182
  }];
  // 指定图表的配置项和数据
  var option_pie_four = {
    //背景色
    backgroundColor: "#03155A",
    // 提示框
    // tooltip: {
    //   show: true, // 是否显示提示框
    //   formatter: '{b} </br> 销量{c}件 </br> 占比{d}%' // 提示框显示内容,此处{b}表示各数据项名称，此项配置为默认显示项，{c}表示数据项的值，默认不显示，({d}%)表示数据项项占比，默认不显示。
    // },

    // 系列列表
    series: [{
      name: '圆环图系列名称', // 系列名称
      type: 'pie', // 系列类型 
      center: ['50%', '50%'], // 饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。[ default: ['50%', '50%'] ]
      radius: ['35%', '42%'], // 饼图的半径，数组的第一项是内半径，第二项是外半径。[ default: [0, '75%'] ]
      hoverAnimation: true, // 是否开启 hover 在扇区上的放大动画效果。[ default: true ]
      color: color, // 圆环图的颜色
      label: { // 饼图图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等.
        normal: {
          color: '#fff',
          show: true, // 是否显示标签[ default: false ]
          position: 'outside', // 标签的位置。'outside'饼图扇区外侧，通过视觉引导线连到相应的扇区。'inside','inner' 同 'inside',饼图扇区内部。'center'在饼图中心位置。
          formatter: '{b} \n: {c}' // 标签内容
        }
      },
      labelLine: { // 标签的视觉引导线样式,在 label 位置 设置为'outside'的时候会显示视觉引导线。
        normal: {
          show: true, // 是否显示视觉引导线。
          length: 5, // 在 label 位置 设置为'outside'的时候会显示视觉引导线。
          length2: 6, // 视觉引导项第二段的长度。
          lineStyle: { // 视觉引导线的样式
            //color: '#000',
            //width: 1
          }
        }
      },
      data: data // 系列中的数据内容数组。
    }]
  };
  mychart_pie_four.setOption(option_pie_four);





  /* 总投资额 */
  let mychart_bar = echarts.init(document.getElementById("mychart_bar"));
  option_bar = {
    title: {
      text: '2018季度资金总投资额（万元）',
      textStyle: {
        color: "#ABCBFF",
        fontSize: 16,
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999'
        }
      },
      formatter: '{b} 比例 : {c2}',
      extraCssText: 'width:auto;height:auto;'
    },
    legend: {
      data: ['实际', '计划'],
      top: '6%',
      right: '10%',
      textStyle: {
        fontSize: 16,
        color: '#8597c1'
      }
    },
    xAxis: [{
      type: 'category',
      axisPointer: {
        type: 'shadow'
      },
      axisLine: {
        lineStyle: {
          color: '#8597c1'
        }
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: true,
        interval: '0',
        textStyle: {
          fontSize: 16,
          color: '#8597c1'
        }
      },
    }],
    yAxis: [{
      type: 'value',
      min: 0,
      max: 100,
      interval: 20,
      axisLine: {
        lineStyle: {
          color: '#8597c1'
        }
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: true,
        interval: '0',
        textStyle: {
          fontSize: 16,
          color: '#8597c1'
        }
      },
    }],
    series: [{
        name: '实际',
        type: 'bar',
        barWidth: 14,
        data: [20, 30, 40, 50, 35],
        itemStyle: {
          color: '#DD5A60'
        },
      },
      {
        name: '计划',
        type: 'bar',
        barWidth: 14,
        data: [22, 33, 44, 50, 26],
        itemStyle: {
          color: '#20ACE7'
        },
      }
    ]
  };
  mychart_bar.setOption(option_bar);


})












// var xData = [
//   '乃东区(项目:113)',
//   '琼结县(项目:113)',
//   '扎囊县(项目:113)',
//   '贡嘎县(项目:113)',
//   '浪卡子县(项目:113)',
//   '洛扎县(项目:113)',
//   '措美县(项目:113)',
//   '错那县(项目:113)',
//   '隆子县(项目:113)',
//   '曲松县(项目:113)',
//   '加查县(项目:113)',
//   '曲松县(项目:113)'
// ];
// // 项目进度
// var option = {
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
//   textStyle: {
//           color: 'rgba(255, 255, 255, 1)',fontSize: '14',
//     fontSize: '14'
//   },
//   grid: {
//     borderWidth: 0,
//     top: 10,
//     bottom: 60,
//     left: 100,
//     right: 20,
//     textStyle: {
//       color: 'rgba(255, 255, 255, 1)'
//     }
//   },
//   legend: {
//     x: 'center',
//     y: 'bottom',
//     textStyle: {
//       color: 'rgba(171, 203, 255, 1)',
//       fontSize: '14'
//     },
//     data: ['2017计划投资', '2017实际完成投资', '2018计划投资', '2018实际完成投资']
//   },

//   calculable: true,
//   xAxis: [
//     {
//       type: 'category',
//       axisLine: {
//         lineStyle: {
//           color: 'rgba(171, 203, 255, 1)'
//         }
//       },
//       splitLine: {
//         show: false
//       },
//       axisTick: {
//         show: false
//       },
//       splitArea: {
//         show: false
//       },
//       axisLabel: {
//         interval: 0,
//         fontSize: '14'
//       },
//       data: xData
//     }
//   ],
//   yAxis: [
//     {
//       type: 'value',
//       splitLine: {
//         show: false
//       },
//       axisLine: {
//         lineStyle: {
//           color: 'rgba(171, 203, 255, 1)'
//         }
//       },
//       axisTick: {
//         show: false
//       },
//       axisLabel: {
//         interval: 0,
//         fontSize: '14',
//         formatter: function(value) {
//           return value / 1000000 + 'M(万元)';
//         }
//       },
//       splitArea: {
//         show: false
//       },
//       splitNumber: 2 //坐标轴的分割段数
//     }
//   ],

//   series: [
//     {
//       name: '2017计划投资',
//       type: 'bar',
//       stack: '2017',
//       barMaxWidth: 36,
//       barGap: '10%',
//       itemStyle: {
//         normal: {
//           color: 'rgba(250, 200, 113, 1)',
//           label: {
//             show: true,
//             textStyle: {
//               color: 'rgba(255, 255, 255, 1)',
//               fontSize: '10'
//             },
//             position: 'insideTop',
//             formatter: function(p) {
//               return p.value > 0 ? p.value : '';
//             }
//           }
//         }
//       },
//       data: [
//         137209,
//         191147,
//         241555,
//         266210,
//         171729,
//         172433,
//         215474,
//         327285,
//         532028,
//         324372,
//         242584,
//         462078,
//         612222,
//         363233
//       ]
//     },
//     {
//       name: '2017实际完成投资',
//       type: 'bar',
//       stack: '2017',
//       itemStyle: {
//         normal: {
//           color: 'rgba(251, 142, 99, 1)',
//           barBorderRadius: 0,
//           label: {
//             show: true,
//             textStyle: {
//               color: 'rgba(255, 255, 255, 1)',
//               fontSize: '10'
//             },
//             position: 'insideTop',
//             formatter: function(p) {
//               return p.value > 0 ? p.value : '';
//             }
//           }
//         }
//       },
//       data: [
//         115327,
//         822876,
//         224507,
//         933200,
//         803330,
//         543382,
//         632204,
//         227390,
//         292001,
//         892251,
//         228381,
//         922220,
//         322222,
//         422223
//       ]
//     },
//     {
//       name: '2018计划投资',
//       type: 'bar',
//       stack: '2018',
//       barMaxWidth: 36,
//       barGap: '10%',
//       itemStyle: {
//         normal: {
//           color: 'rgba(76, 161, 244, 1)',
//           label: {
//             show: true,
//             textStyle: {
//               color: 'rgba(255, 255, 255, 1)',
//               fontSize: '10'
//             },
//             position: 'insideTop',
//             formatter: function(p) {
//               return p.value > 0 ? p.value : '';
//             }
//           }
//         }
//       },
//       data: [
//         171109,
//         192217,
//         233455,
//         261330,
//         973319,
//         143333,
//         153344,
//         323385,
//         523308,
//         533372,
//         248334,
//         335078,
//         633222,
//         633333
//       ]
//     },
//     {
//       name: '2018实际完成投资',
//       type: 'bar',
//       stack: '2018',
//       itemStyle: {
//         normal: {
//           color: 'rgba(19, 90, 206, 1)',
//           barBorderRadius: 0,
//           label: {
//             show: true,
//             textStyle: {
//               color: 'rgba(255, 255, 255, 1)',
//               fontSize: '10'
//             },
//             position: 'insideTop',
//             formatter: function(p) {
//               return p.value > 0 ? p.value : '';
//             }
//           }
//         }
//       },
//       data: [
//         633327,
//         633776,
//         653307,
//         336200,
//         633800,
//         648332,
//         820433,
//         993390,
//         133901,
//         933519,
//         333891,
//         293320,
//         922332,
//         933333
//       ]
//     }
//   ]
// };
// echarts.init(document.getElementById('project'), null).setOption(option);
// // 项目类型分布

// const setOption = (id, dataArr) => {
//   var dataStyle = {
//     normal: {
//       label: { show: false },
//       labelLine: { show: false },
//       //传入的是数据项 seriesIndex, dataIndex, data, value 等各个参数。
//       color: function(params) {
//         // var colorList = [
//         //   '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
//         //    '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
//         //    '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
//         // ];
//         var colorList = ['#FF0000', '#FF7E00', '#E5CE10', '#24C768', '#00A1E4'];
//         return colorList[params.seriesIndex];
//       }
//     }
//   };
//   var placeHolderStyle = {
//     // normal: {
//     color: 'rgba(0,0,0,0)',
//     label: { show: false },
//     labelLine: { show: false }
//     // },
//     // emphasis: {
//     //   color: 'rgba(0,0,0,0)'
//     // }
//   };
//   var typeOption1 = {
//     // hoverAnimation :false,
//     // hoverOffset:0,
//     // title: {
//     //   // text: '你幸福吗？',
//     //   // subtext: 'From ExcelHome',
//     //   // sublink: 'http://e.weibo.com/1341556070/AhQXtjbqh',
//     //   x: 'center',
//     //   y: 'center',
//     //   itemGap: 5,
//     //   textStyle: {
//     //     color: 'rgba(30,144,255,0.8)',
//     //     fontFamily: '微软雅黑',
//     //     fontSize: 16
//     //     // fontWeight : 'bolder'
//     //   }
//     // },
//     // center: [400, 300],
//     // radius: [0, '25%'],
//     // grid: {
//     //   top: 20,
//     //   bottom: 20,
//     //   left: 20,
//     //   right: 0,
//     //   width: 230,
//     //   height: 200
//     //   // textStyle: {
//     //   //   color: 'rgba(255, 255, 255, 1)'
//     //   // }
//     // },
//     tooltip: {
//       show: true,
//       // formatter: '{a} <br/>{b} : {c} ({d}%)' //饼图、仪表盘、漏斗图: {a}（系列名称），{b}（数据项名称），{c}（数值）, {d}（百分比）
//       formatter: '{b} :  ({d}%)'
//     },
//     // legend: {
//     //     orient : 'vertical',
//     //     // x : document.getElementById('main').offsetWidth / 2,
//     //     // y : 45,
//     //     itemGap:6,
//     //     data:['68%的人表示过的不错','29%的人表示生活压力很大','3%的人表示“我姓曾”']
//     // },
//     // toolbox: {
//     //     show : true,
//     //     feature : {
//     //         mark : {show: true},
//     //         dataView : {show: true, readOnly: false},
//     //         restore : {show: true},
//     //         saveAsImage : {show: true}
//     //     }
//     // },
//     series: [
//       {
//         // name: '1',
//         type: 'pie',
//         clockWise: true, //饼图的扇区是否是顺时针排布。
//         startAngle: 270, //起始角度，支持范围[0, 360]。
//         radius: [61, 69],
//         itemStyle: dataStyle,
//         data: [
//           {
//             value: dataArr[0].value,
//             name: dataArr[0].name
//           },
//           {
//             value: 100 - dataArr[0].value,
//             name: 'invisible',
//             itemStyle: placeHolderStyle
//           }
//         ]
//       },
//       {
//         // name: '2',
//         type: 'pie',
//         clockWise: true,
//         startAngle: 270,
//         radius: [53, 61],
//         itemStyle: dataStyle,
//         data: [
//           {
//             value: dataArr[1].value,
//             name: dataArr[1].name
//           },
//           {
//             value: 100 - dataArr[1].value,
//             name: 'invisible',
//             itemStyle: placeHolderStyle
//           }
//         ]
//       },
//       {
//         // name: '3',
//         type: 'pie',
//         clockWise: true,
//         startAngle: 270,
//         radius: [45, 53],
//         itemStyle: dataStyle,
//         data: [
//           {
//             value: dataArr[2].value,
//             name: dataArr[2].name
//           },
//           {
//             value: 100 - dataArr[2].value,
//             name: 'invisible',
//             itemStyle: placeHolderStyle
//           }
//         ]
//       },
//       {
//         // name: '4',
//         type: 'pie',
//         clockWise: true,
//         startAngle: 270,
//         radius: [37, 45],
//         itemStyle: dataStyle,
//         data: [
//           {
//             value: dataArr[3].value,
//             name: dataArr[3].name
//           },
//           {
//             value: 100 - dataArr[3].value,
//             name: 'invisible',
//             itemStyle: placeHolderStyle
//           }
//         ]
//       },
//       {
//         // name: '3',
//         type: 'pie',
//         clockWise: true,
//         startAngle: 270,
//         radius: [29, 37],
//         itemStyle: dataStyle,
//         data: [
//           {
//             value: dataArr[4].value,
//             name: dataArr[4].name
//           },
//           {
//             value: 100 - dataArr[4].value,
//             name: 'invisible',
//             itemStyle: placeHolderStyle
//           }
//         ]
//       }
//     ]
//   };
//   echarts.init(document.getElementById(id), null).setOption(typeOption1);
// };

// setOption('type2', [
//   { name: '社会发展182', value: 49 },
//   { name: '农牧业水39', value: 55 },
//   { name: '交通能源29', value: 44 },
//   { name: '社会发展66', value: 39 },
//   { name: '环境资源19', value: 79 }
// ]);
// setOption('type1', [
//   { name: '续建待复工 项目48', value: 39 },
//   { name: '新开工项目53', value: 69 },
//   { name: '续建复工 项目118', value: 89 },
//   { name: '拟开工 项目214', value: 55 },
//   { name: '', value: 0 }
// ]);

// // $(function() {
// //   // header('Access-Control-Allow-Origin:*');
// //   creatChinaMap('mychart_map01');
// //   // $('.back_btn').click(function(){
// //   // 	creatChinaMap('main');
// //   // })
// //   function creatChinaMap(id) {
// //     var myChart = echarts.init(document.getElementById('mychart_map01'));
// //     $('.back_btn').hide();
// //     myChart.setOption({
// //       title: {
// //         text: '全国各省',
// //         left: 'center',
// //         textStyle: {
// //           color: '#D1DFFF'
// //         },
// //         top: 30
// //       },
// //       tooltip: {
// //         trigger: ''
// //       },
// //       series: [
// //         {
// //           name: '产品分布',
// //           type: 'map',
// //           mapType: 'china',
// //           roam: false,
// //           label: {
// //             normal: {
// //               show: true
// //             },
// //             emphasis: {
// //               show: true
// //             }
// //           },
// //           data: [
// //             { name: '北京', value: 2656 },
// //             { name: '天津', value: 2342 },
// //             { name: '上海', value: 3523 },
// //             { name: '重庆', value: 423 },
// //             { name: '河北', value: 2 },
// //             { name: '河南', value: 323 },
// //             { name: '云南', value: 54 },
// //             { name: '辽宁', value: 42 },
// //             { name: '黑龙江', value: 6464 },
// //             { name: '湖南', value: 4242 },
// //             { name: '安徽', value: 42 },
// //             { name: '山东', value: 532 },
// //             { name: '新疆', value: 455 },
// //             { name: '江苏', value: 4635 },
// //             { name: '浙江', value: 7534 },
// //             { name: '江西', value: 243 },
// //             { name: '湖北', value: 6345 },
// //             { name: '广西', value: 432 },
// //             { name: '甘肃', value: 45234 },
// //             { name: '山西', value: 4234 },
// //             { name: '内蒙古', value: 42 },
// //             { name: '陕西', value: 4324 },
// //             { name: '吉林', value: 432 },
// //             { name: '福建', value: 4324 },
// //             { name: '贵州', value: 43 },
// //             { name: '广东', value: 4324 },
// //             { name: '青海', value: 434 },
// //             { name: '西藏', value: 7567 },
// //             { name: '四川', value: 7657 },
// //             { name: '宁夏', value: 75 },
// //             { name: '海南', value: 3213 },
// //             { name: '台湾', value: 5634 },
// //             { name: '香港', value: 342 },
// //             { name: '澳门', value: 97 }
// //           ],
// //           itemStyle: {
// //             normal: {
// //               borderColor: '#fff',
// //               areaColor: '#00FCF9'
// //             },
// //             emphasis: {
// //               areaColor: '#ccc',
// //               color: '#fff',
// //               borderWidth: 0,
// //               show: false
// //             }
// //           }
// //         }
// //       ]
// //     });
// //     myChart.on('click', function(parm) {
// //       console.log(parm, 'parm');
// //       console.log(id, 'id');
// //       creatProvince(parm.name, id);
// //       if (parm.name == '隆子县') {
// //         window.location.href = './longzi.html';
// //       }
// //     });
// //   }

// //   function creatProvince(name, id) {
// //     var pro = pyChinese(name);
// //     if (pro == '') {
// //       return false;
// //     }
// //     $('.back_btn').show();
// //     var childChart = echarts.init(document.getElementById(id));
// //     var seriesdata = [
// //       {
// //         type: 'map',
// //         mapType: pro,
// //         label: {
// //           normal: {
// //             show: true
// //           },
// //           emphasis: {
// //             show: true
// //           }
// //         },
// //         data: [],
// //         itemStyle: {
// //           normal: {
// //             borderColor: '#ccc',
// //             areaColor: '#ffffff'
// //           },
// //           emphasis: {
// //             areaColor: '#ccc',
// //             color: '#fff',
// //             borderWidth: 0,
// //             show: false
// //           }
// //         },
// //         animation: false
// //       }
// //     ];
// //     var option = {
// //       title: {
// //         text: name,
// //         left: 'center',
// //         top: 30,
// //         textStyle: {
// //           color: '#D1DFFF'
// //         }
// //       },
// //       series: seriesdata
// //     };
// //     $.get('json/' + pro + '.json', function(gdMap) {
// //       echarts.registerMap(pro, gdMap);
// //       childChart.setOption(option, true);
// //     });
// //   }
// // });