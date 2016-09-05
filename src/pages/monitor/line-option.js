'use strict';

export default function(time, data, lineColor) {
  lineColor = lineColor || '#20a0ff';

  let series = Object.keys(data).map(key => {
    return {
      name: key,
      type: 'line',
      smooth: true,
      itemStyle: {
        normal: {
          borderColor: '#3d4552',
          borderWidth: 4
        }
      },
      areaStyle: {
        normal: {
          opacity: 0.1
        }
      },
      data: data[key]
    };
  });

  return {
    title: {
      show: false
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      show: false
    },
    color: ['#3d4552'],
    dataZoom: [{
      type: 'inside',
      start: 90,
      end: 100
    },
    {
      start: 90,
      end: 100,
      handleSize: '80%',
      handleStyle: {
        color: '#fff',
        shadowBlur: 3,
        shadowColor: 'rgba(0, 0, 0, 0.6)',
        shadowOffsetX: 2,
        shadowOffsetY: 2
      }
    }],
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: time,
      axisLine: {
        show: false
      }
    },
    yAxis: {
      boundaryGap: [0, '100%'],
      min: 'dataMin',
      max: 'dataMax',
      type: 'value'
    },
    series: series,
    backgroundColor: '#FFF'
  };
}
