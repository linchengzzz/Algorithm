class Echart {
    constructor(element, color = '#000') {
        this.myChart = echarts.init(element, null, { renderer: 'canvas' });
        this.count = 0;
        this.color = color;
    }
    init(label, arr) {
        const option = {
            title: {
                text: '排序演示',
            },
            tooltip: {},
            legend: {
                data: [label],
            },
            xAxis: {
                data: [...arr],
            },
            yAxis: {},
            series: [
                {
                    name: label,
                    type: 'bar',
                    data: [...arr],
                    color: [this.color],
                },
            ],
        };
        this.myChart.setOption(option);
    }
    changeChart(arr) {
        this.count++;
        setTimeout(() => {
            this.myChart.setOption({
                xAxis: {
                    data: [...arr],
                },
                series: [
                    {
                        data: [...arr],
                    },
                ],
            });
        }, 150 * this.count);
    }
}
