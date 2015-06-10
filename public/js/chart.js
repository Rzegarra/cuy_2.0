
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
                type: 'area',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                events: {
                    load: function () {

                        // set up the updating of the chart each second
                        var serie = this.series[0];
                        var serie1 = this.series[1];
                        var serie2 = this.series[2];
                        var serie3 = this.series[3];
                        var serie4 = this.series[4];
                        setInterval(function () {
                            var x = (new Date()).getTime(), // current time
                                y = Math.floor((Math.random() * 32) + 20),
                                y1= Math.floor((Math.random() * 32) + 20),
                                y2= Math.floor((Math.random() * 32) + 20);
                                y3= Math.floor((Math.random() * 32) + 20);
                                y4= Math.floor((Math.random() * 32) + 20);

                            serie.addPoint([x, y], true, true);
                            serie1.addPoint([x, y1], true, true);
                            serie2.addPoint([x, y2], true, true);
                            serie3.addPoint([x, y3], true, true);
                            serie4.addPoint([x, y4], true, true);

                        }, 3000);

                        
                    }
                }
            },
            title: {
                text: 'syshome'
            },
            xAxis: {
                type: 'datetime',
                tickPixelInterval: 150
            },
            yAxis: {
                title: {
                    text: 'temperatura'
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
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f}°C</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        
            },
            legend: {
                enabled: true
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: 'sala',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -15; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 1000,
                            y: Math.floor((Math.random() * 35) + 20)
                        });
                    }
                    return data;
                }())
            },{name: 'cuarto',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -15; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 1000,
                            y: Math.floor((Math.random() * 35) + 20)
                        });
                    }
                    return data;
                }())
            },
            {name: 'cocina',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -15; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 1000,
                            y: Math.floor((Math.random() * 35) + 20)
                        });
                    }
                    return data;
                }())
            },
            {name: 'lavanderia',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -15; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 1000,
                            y: Math.floor((Math.random() * 35) + 20)
                        });
                    }
                    return data;
                }())
            },
            {name: 'patio',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -15; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 1000,
                            y: Math.floor((Math.random() * 35) + 20)
                        });
                    }
                    return data;
                }())
            }]
        });
    });
});
		