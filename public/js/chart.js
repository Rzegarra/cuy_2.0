
$(function () {
    $(document).ready(function () {
        /**
 * Sand-Signika theme for Highcharts JS
 * @author Torstein Honsi
 */



// Apply the theme
Highcharts.setOptions(Highcharts.theme);
        Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });

        $('#container').highcharts({
            chart: {
                type: 'line',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                events: {
                    load: function () {

                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function () {
                            var x = (new Date()).getTime(), // current time
                                y = Math.floor((Math.random() * 10) + 1);
                            series.addPoint([x, y], true, true);
                        }, 2000);
                    }
                }
            },
            title: {
                text: 'temperatura hogar'
            },
            xAxis: {
                type: 'datetime',
                tickPixelInterval: 150
            },
            yAxis: {
                title: {
                    text: 'grados c.'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        Highcharts.numberFormat(this.y, 2) + '<br/>' +
                        Highcharts.dateFormat('%H:%M:%S', this.x);
                }
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: 'temp.',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 1000,
                            y: Math.floor((Math.random() * 10) + 1)
                        });
                    }
                    return data;
                }())
            }]
        });
    });
});
		