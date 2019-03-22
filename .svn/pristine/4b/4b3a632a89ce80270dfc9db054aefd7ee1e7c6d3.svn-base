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


var uploadedDataURL = "json/shannan.json";
console.log(uploadedDataURL)
var myChart = echarts.init(document.getElementById('mychart_map'));
myChart.showLoading();
$.getJSON(uploadedDataURL, function (geoJson) {
  console.log(geoJson)
  echarts.registerMap('nanchang', geoJson);
  myChart.hideLoading();
  var geoCoordMap = {
    "措那县": [91.877717, 28.272709],
    "隆子县": [92.411239, 28.679125],
    "曲松县": [92.287057, 29.281737],
    "加查县": [92.682599, 29.346235],
    "桑日县": [92.107684, 29.46712],
    "浪卡子县": [90.341543, 29.184911],
    "洛扎县": [90.865866, 28.622322],
    "措美县": [91.38099, 28.687237],
    "琼结县": [91.65235, 29.245438],
    "扎囊县": [91.334997, 29.450957],
    "贡嘎县": [90.939455, 29.51937],
    "乃东区": [91.785731, 29.438879],
  };
  var data = [
    ["措那县", 10, 20],
    ["隆子县", 10, 25],
    ["曲松县", 10, 20],
    ["加查县", 15, 20],
    ["桑日县", 10, 20],
    ["浪卡子县", 10, 20],
    ["洛扎县", 10, 25],
    ["措美县", 10, 20],
    ["琼结县", 15, 20],
    ["扎囊县", 10, 25],
    ["贡嘎县", 15, 20],
    ["乃东区", 10, 20],
  ];
  var max = 480,
    min = 9; // todo 
  var maxSize4Pin = 100,
    minSize4Pin = 20;

  var convertData = function (data) {
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
    // title: {
    //     text: '   项目分布',
    //     subtext: '',
    //     x: 'left',
    //     textStyle: {
    //         color: '#ccc'
    //     }
    // },
    tooltip: {
      trigger: 'item',
      formatter: function (params) {
        // if (typeof(params.value)[2] == "undefined") {
        //     return params.name + ' : ' + params.value;
        // } else {
        //     return params.name + ' : ' + params.value[2];
        // }
        if (typeof (params.value)[2] == "undefined") {
          return params.name
        } else {
          return params.name
        }
      }
    },
    legend: {
      // color: ['#FF7E00', '#E5CE10'],
      orient: 'vertical',
      icon: 'rect',
      itemWidth: 15,
      itemHeight: 15,
      y: 'bottom',
      x: '3%',
      data: ['投资完成率', '开复工率'],
      textStyle: {
        color: '#fff',
        fontSize: 14
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
        // color: ['#3B5077', '#031525'] // 蓝黑
        // color: ['#ffc0cb', '#800080'] // 红紫
        // color: ['#3C3B3F', '#605C3C'] // 黑绿
        //color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
        // color: ['#23074d', '#cc5333'] // 紫红
        // color: ['#00467F', '#A5CC82'] // 蓝绿
        color: ['#1488CC', '#2B32B2'] // 浅蓝
        // color: ['#00467F', '#A5CC82'] // 蓝绿
        // color: ['#00467F', '#A5CC82'] // 蓝绿
        // color: ['#00467F', '#A5CC82'] // 蓝绿
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
          show: false,
        }
      },
      roam: true,
      itemStyle: {
        normal: {
          areaColor: '#2888cf',
          borderColor: '#3B5077',
        },
        emphasis: {
          areaColor: '#125e94',
        }
      }
    },
    series: [{
        name: '投资完成率',
        type: 'scatter',
        coordinateSystem: 'geo',
        data: convertData(data),
        symbolSize: function (val) {
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
            color: '#FF7E00'
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
            areaColor: '#2888cf',
            borderColor: '#3B5077',
          },
          emphasis: {
            areaColor: '#125e94'
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
        symbolSize: function (val) {
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
              fontSize: 9,
            }
          }
        },
        itemStyle: {
          normal: {
            color: '#F62157', //标志颜色
          }
        },
        zlevel: 6,
        data: convertData(data),
      },
      {
        name: '开复工率',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: convertData(data.sort(function (a, b) {
          return b.value - a.value;
        }).slice(0, 5)),
        symbolSize: function (val) {
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
      },

    ]
  };
  myChart.setOption(option);


  myChart.on('click', function (parm) {
    console.log(parm, 'parm')
    // console.log(id, 'id')
    // creatProvince(parm.name);
    if (parm.name == '隆子县') {
      window.location.href = './longzi.html'
    };
  })

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
      option.series.push({
        id: idx,
        type: 'bar',
        xAxisId: idx,
        yAxisId: idx,
        barWidth: 7,
        barGap: 1,
        barCategoryGap: 0,
        data: inflationData,
        z: 100,
        itemStyle: {
          normal: {
            color: function (params) {
              // 柱状图每根柱子颜色
              var colorList = ['#E5CE10', '#FF7E00'];
              return colorList[params.dataIndex];
            }
          }
        }
      });
    });
    myChart.setOption(option);
  }
  setTimeout(renderEachCity, 0);
});




// $(function () {
//   // header('Access-Control-Allow-Origin:*'); 
//   creatChinaMap('mychart_map');
//   // $('.back_btn').click(function(){
//   // 	creatChinaMap('main');
//   // })
//   var map_data = [{
//       "name": "北京",
//       "value": 2656
//     },
//     {
//       "name": "天津",
//       "value": 2342
//     },
//     {
//       "name": "上海",
//       "value": 3523
//     },
//     {
//       "name": "重庆",
//       "value": 423
//     },
//     {
//       "name": "河北",
//       "value": 2
//     },
//     {
//       "name": "河南",
//       "value": 323
//     },
//     {
//       "name": "云南",
//       "value": 54
//     },
//     {
//       "name": "辽宁",
//       "value": 42
//     },
//     {
//       "name": "黑龙江",
//       "value": 6464
//     },
//     {
//       "name": "湖南",
//       "value": 4242
//     },
//     {
//       "name": "安徽",
//       "value": 42
//     },
//     {
//       "name": "山东",
//       "value": 532
//     },
//     {
//       "name": "新疆",
//       "value": 455
//     },
//     {
//       "name": "江苏",
//       "value": 4635
//     },
//     {
//       "name": "浙江",
//       "value": 7534
//     },
//     {
//       "name": "江西",
//       "value": 243
//     },
//     {
//       "name": "湖北",
//       "value": 6345
//     },
//     {
//       "name": "广西",
//       "value": 432
//     },
//     {
//       "name": "甘肃",
//       "value": 45234
//     },
//     {
//       "name": "山西",
//       "value": 4234
//     },
//     {
//       "name": "内蒙古",
//       "value": 42
//     },
//     {
//       "name": "陕西",
//       "value": 4324
//     },
//     {
//       "name": "吉林",
//       "value": 432
//     },
//     {
//       "name": "福建",
//       "value": 4324
//     },
//     {
//       "name": "贵州",
//       "value": 43
//     },
//     {
//       "name": "广东",
//       "value": 4324
//     },
//     {
//       "name": "青海",
//       "value": 434
//     },
//     {
//       "name": "西藏",
//       "value": 7567
//     },
//     {
//       "name": "四川",
//       "value": 7657
//     },
//     {
//       "name": "宁夏",
//       "value": 75
//     },
//     {
//       "name": "海南",
//       "value": 3213
//     },
//     {
//       "name": "台湾",
//       "value": 5634
//     },
//     {
//       "name": "香港",
//       "value": 342
//     },
//     {
//       "name": "澳门",
//       "value": 97
//     }
//   ];
//   var geoCoordMap = {
//     "北京市": [116.41433, 39.91095],
//     "天津市": [117.191041, 39.134857],
//     "河北省": [114.511934, 38.058785],
//     "山西省": [112.543424, 37.887658],
//     "内蒙古": [111.694848, 40.836106],
//     "辽宁省": [123.425425, 41.819004],
//     "吉林省": [126.322646, 43.871432],
//     "黑龙江省": [128.60352, 47.758573],
//     "上海市": [121.477611, 31.226174],
//     "江苏省": [118.799398, 32.045042],
//     "浙江省": [120.158498, 30.291092],
//     "安徽省": [117.293119, 31.87839],
//     "福建省": [119.307623, 26.068211],
//     "江西省": [115.92252, 28.68553],
//     "山东省": [116.989563, 36.682589],
//     "河南省": [113.627458, 34.762387],
//     "湖北省": [114.305858, 30.605913],
//     "湖南省": [112.93296, 28.236376],
//     "广东省": [113.261811, 23.118408],
//     "广西": [108.326736, 22.824533],
//     "海南省": [110.290648, 20.012453],
//     "重庆市": [107.546798, 30.978004],
//     "四川省": [102.063163, 30.667561],
//     "贵州省": [106.661781, 27.609054],
//     "云南省": [102.702913, 25.050202],
//     "西藏": [88.112616, 31.668426],
//     "陕西省": [108.925798, 34.296079],
//     "甘肃省": [103.834346, 36.072614],
//     "青海省": [95.778449, 36.625145],
//     "宁夏": [106.230594, 38.490587],
//     "新疆": [83.61023, 40.83845],
//     "台湾省": [121.511849, 25.060677],
//     "香港": [114.179376, 22.318339],
//     "澳门": [113.546969, 22.202741]
//   };
//   var myChart_map = echarts.init(document.getElementById('mychart_map'));

//   function creatChinaMap(id) {
//     var myChart_map = echarts.init(document.getElementById('mychart_map'));
//     $('.back_btn').hide();
//     option_map = {
//       // title: {
//       // 	text: '全国各省',
//       // 	left: 'center',
//       // 	textStyle: {
//       // 		color: '#D1DFFF'
//       // 	}
//       // 	,top:30
//       // },
//       tooltip: {
//         trigger: ''
//       },
//       geo: {
//         map: 'china',
//         label: {
//           emphasis: {
//             show: false
//           }
//         },
//         roam: true,
//         itemStyle: {
//           normal: {
//             areaColor: '#323c48',
//             borderColor: '#404a59'
//           },
//           emphasis: {
//             areaColor: '#2a333d'
//           }
//         }
//       },
//       series: [{
//         name: '产品分布',
//         type: 'map',
//         mapType: 'china',
//         roam: false,
//         label: {
//           normal: {
//             show: true
//           },
//           emphasis: {
//             show: true
//           }
//         },
//         data: map_data,
//         itemStyle: {
//           normal: {
//             borderColor: '#000',
//             areaColor: '#00FCF9'
//           },
//           emphasis: {
//             areaColor: '#ccc',
//             color: '#fff',
//             borderWidth: 0,
//             show: false,
//           }
//         },
//       }]
//     };
//     myChart_map.setOption(option_map);
//     myChart_map.on('click', function (parm) {
//       console.log(parm, 'parm')
//       console.log(id, 'id')
//       creatProvince(parm.name, id);
//       if (parm.name == '隆子县') {
//         window.location.href = './longzi.html'
//       };
//     })
//   }

//   function creatProvince(name, id) {
//     var pro = pyChinese(name);
//     if (pro == '') {
//       return false;
//     }
//     $('.back_btn').show();
//     var childChart = echarts.init(document.getElementById(id));
//     var seriesdata = [{
//       type: 'map',
//       mapType: pro,
//       label: {
//         normal: {
//           show: true
//         },
//         emphasis: {
//           show: true
//         }
//       },
//       data: [],
//       itemStyle: {
//         normal: {
//           borderColor: '#000',
//           areaColor: '#00FCF9'
//         },
//         emphasis: {
//           areaColor: '#ccc',
//           color: '#fff',
//           borderWidth: 0,
//           show: false,
//         }
//       },
//       animation: false
//     }];
//     var option = {
//       // title: {
//       // 	text: name,
//       // 	left: 'center',
//       //   top:30,
//       // 	textStyle: {
//       // 		color: '#D1DFFF'
//       //   }
//       // },
//       geo: {
//         map: pro,
//         label: {
//           emphasis: {
//             show: false
//           }
//         },
//         roam: true,
//         itemStyle: {
//           normal: {
//             areaColor: '#323c48',
//             borderColor: '#404a59'
//           },
//           emphasis: {
//             areaColor: '#2a333d'
//           }
//         }
//       },
//       series: seriesdata
//     };
//     $.get('json/' + pro + '.json', function (gdMap) {
//       setTimeout(renderEach_city, 0)
//       echarts.registerMap(pro, gdMap);
//       childChart.setOption(option, true);
//       if (pro == "shannan") {
//         setTimeout(renderEach_City, 0)
//       };
//     });

//     // $.get('json/' + pro + '.json', function (gdMap) {
//     //   console.log(pro,'gdMap' )
//     //   if (pro == "shannan") {
//     //     setTimeout(renderEach_City, 0)
//     //   };
//     //   echarts.registerMap(pro, gdMap);
//     //   childChart.setOption(option, true);
//     // });
//   }


//   function renderEachCity() {
//     var option = {
//       xAxis: [],
//       yAxis: [],
//       grid: [],
//       series: []
//     };
//     // var inflationStartIdx = 14;
//     // var inflationYearCount = 3;
//     // var inflationYearStart = '2006';
//     // var xAxisCategory = [];
//     // for (var i = 0; i < inflationYearCount; i++) {
//     //     xAxisCategory.push((+inflationYearStart + i) + '');
//     // }

//     echarts.util.each(geoCoordMap, function (dataItem, idx) {
//       var geoCoord = geoCoordMap[idx];
//       console.log(geoCoord,'idx',dataItem)
//       var coord = myChart_map.convertToPixel('geo', geoCoord);
//       // var boundL = -12.782788213627585;
//       // var boundR = 35.92763028872384;
//       // var boundT = 32.22854555899493;
//       // var boundB = 95.18817097360194;
//       // if (!coord ||
//       //     geoCoord[0] < boundL ||
//       //     geoCoord[0] > boundR ||
//       //     geoCoord[1] > boundB ||
//       //     geoCoord[1] < boundT
//       // ) {
//       //     return;
//       // }
//       idx += '';

//       inflationData = [30, 50];
//       // for (var k = 0; k < inflationYearCount; k++) {
//       //     inflationData.push(dataItem[inflationStartIdx + k]);
//       // }

//       option.xAxis.push({
//         id: idx,
//         gridId: idx,
//         type: 'category',
//         name: dataItem.name,
//         // nameStyle: {
//         //     color: 'red',
//         //     fontSize: 12
//         // },
//         nameLocation: 'middle',
//         nameGap: 3,
//         splitLine: {
//           show: false
//         },
//         axisTick: {
//           show: false
//         },
//         axisLabel: {
//           show: false
//         },
//         axisLine: {
//           onZero: false,
//           lineStyle: {
//             color: '#666'
//           }
//         },
//         // data: xAxisCategory,
//         data: ["数据A", "数据B"],
//         z: 100
//       });
//       option.yAxis.push({
//         id: idx,
//         gridId: idx,
//         splitLine: {
//           show: false
//         },
//         axisTick: {
//           show: false
//         },
//         axisLabel: {
//           show: false
//         },
//         axisLine: {
//           show: false,
//           lineStyle: {
//             color: '#1C70B6'
//           }
//         },
//         z: 100
//       });
//       option.grid.push({
//         id: idx,
//         width: 30,
//         height: 40,
//         left: coord[0] - 15,
//         top: coord[1] - 15,
//         z: 100
//       });
//       option.series.push({
//         id: idx,
//         type: 'bar',
//         xAxisId: idx,
//         yAxisId: idx,
//         barGap: 0,
//         barCategoryGap: 0,
//         // data: inflationData,
//         data: inflationData,
//         z: 100,
//         itemStyle: {
//           normal: {
//             color: function (params) {
//               // 柱状图每根柱子颜色
//               var colorList = ['#F75D5D', '#59ED4F', '#4C91E7'];
//               return colorList[params.dataIndex];
//             }
//           }
//         }
//       });
//     });
//     console.time('a');
//     myChart_map.setOption(option);
//     console.timeEnd('a');
//   }
//   setTimeout(renderEachCity, 0)

//   var geoCoord_map = {
//     "阿里地区": [82.708965, 33.287775],
//     "日喀则市": [88.015278, 29.714659],
//     "山南市": [91.283098, 28.793008],
//     "拉萨市": [90.319539, 30.107355],
//     "林芝市": [95.455992, 29.114251],
//     "那曲市": [91.190118, 32.254142],
//     "昌都市": [97.178439, 31.176858],
//   };
//   function renderEach_city() {
//     var option = {
//       xAxis: [],
//       yAxis: [],
//       grid: [],
//       series: []
//     };
//     echarts.util.each(geoCoord_map, function (dataItem, idx) {
//       var geoCoord = geoCoord_map[idx];
//       console.log(geoCoord,'idx',dataItem)
//       var coord = myChart_map.convertToPixel('geo', geoCoord);
//       console.log(coord,'idx')
//       idx += '';
//       inflationData = [30, 50];
//       option.xAxis.push({
//         id: idx,
//         gridId: idx,
//         type: 'category',
//         name: dataItem.name,
//         // nameStyle: {
//         //     color: 'red',
//         //     fontSize: 12
//         // },
//         nameLocation: 'middle',
//         nameGap: 3,
//         splitLine: {
//           show: false
//         },
//         axisTick: {
//           show: false
//         },
//         axisLabel: {
//           show: false
//         },
//         axisLine: {
//           onZero: false,
//           lineStyle: {
//             color: '#666'
//           }
//         },
//         // data: xAxisCategory,
//         data: ["数据A", "数据B"],
//         z: 100
//       });
//       option.yAxis.push({
//         id: idx,
//         gridId: idx,
//         splitLine: {
//           show: false
//         },
//         axisTick: {
//           show: false
//         },
//         axisLabel: {
//           show: false
//         },
//         axisLine: {
//           show: false,
//           lineStyle: {
//             color: '#1C70B6'
//           }
//         },
//         z: 100
//       });
//       option.grid.push({
//         id: idx,
//         width: 30,
//         height: 40,
//         left: coord[0] - 15,
//         top: coord[1] - 15,
//         z: 100
//       });
//       option.series.push({
//         id: idx,
//         type: 'bar',
//         xAxisId: idx,
//         yAxisId: idx,
//         barGap: 0,
//         barCategoryGap: 0,
//         // data: inflationData,
//         data: inflationData,
//         z: 100,
//         itemStyle: {
//           normal: {
//             color: function (params) {
//               // 柱状图每根柱子颜色
//               var colorList = ['#F75D5D', '#59ED4F', '#4C91E7'];
//               return colorList[params.dataIndex];
//             }
//           }
//         }
//       });
//     });
//     console.time('a');
//     myChart_map.setOption(option);
//     console.timeEnd('a');
//   }

//   var geoCoord_Map = {
//     "措那县": [91.877717,28.272709],
//     "隆子县": [92.411239,28.679125],
//     "曲松县": [92.287057,29.281737],
//     "加查县": [92.682599,29.346235],
//     "桑日县": [92.107684, 29.46712],
//     "浪卡子县": [90.341543,29.184911],
//     "洛扎县": [90.865866,28.622322],
//     "措美县": [91.38099,28.687237],
//     "琼结县": [91.65235,29.245438],
//     "扎囊县": [91.334997,29.450957],
//     "贡嘎县": [90.939455,29.51937],
//     "乃东区": [91.785731, 29.438879],
//   };
//   function renderEach_City() {
//     var option = {
//       xAxis: [],
//       yAxis: [],
//       grid: [],
//       series: []
//     };
//     echarts.util.each(geoCoord_Map, function (dataItem, idx) {
//       var geoCoord = geoCoord_Map[idx];
//       console.log(geoCoord,'idx',dataItem)
//       var coord = myChart_map.convertToPixel('geo', geoCoord);
//       console.log(coord,'idx')
//       idx += '';
//       inflationData = [30, 50];
//       option.xAxis.push({
//         id: idx,
//         gridId: idx,
//         type: 'category',
//         name: dataItem.name,
//         // nameStyle: {
//         //     color: 'red',
//         //     fontSize: 12
//         // },
//         nameLocation: 'middle',
//         nameGap: 3,
//         splitLine: {
//           show: false
//         },
//         axisTick: {
//           show: false
//         },
//         axisLabel: {
//           show: false
//         },
//         axisLine: {
//           onZero: false,
//           lineStyle: {
//             color: '#666'
//           }
//         },
//         // data: xAxisCategory,
//         data: ["数据A", "数据B"],
//         z: 100
//       });
//       option.yAxis.push({
//         id: idx,
//         gridId: idx,
//         splitLine: {
//           show: false
//         },
//         axisTick: {
//           show: false
//         },
//         axisLabel: {
//           show: false
//         },
//         axisLine: {
//           show: false,
//           lineStyle: {
//             color: '#1C70B6'
//           }
//         },
//         z: 100
//       });
//       option.grid.push({
//         id: idx,
//         width: 30,
//         height: 40,
//         left: coord[0] - 15,
//         top: coord[1] - 15,
//         z: 100
//       });
//       option.series.push({
//         id: idx,
//         type: 'bar',
//         xAxisId: idx,
//         yAxisId: idx,
//         barGap: 0,
//         barCategoryGap: 0,
//         // data: inflationData,
//         data: inflationData,
//         z: 100,
//         itemStyle: {
//           normal: {
//             color: function (params) {
//               // 柱状图每根柱子颜色
//               var colorList = ['#F75D5D', '#59ED4F', '#4C91E7'];
//               return colorList[params.dataIndex];
//             }
//           }
//         }
//       });
//     });
//     console.time('a');
//     myChart_map.setOption(option);
//     console.timeEnd('a');
//   }

// })