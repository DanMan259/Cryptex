import echarts from 'echarts';

export function multiCoin() {
    //MultiCoin History Chart
    var myChart = echarts.init(document.getElementById('coin'));
    myChart.setOption({
        /*title: {
            //left: 'center',
            text: 'Multicoin History - 2017',
            textStyle: {fontWeight: 'normal'}
        },*/
        tooltip: {
            trigger: 'axis',
            /*axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }}*/
        },
        toolbox: {
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                restore: {},
                saveAsImage: {}
            }
        },
        legend: {
            //left: 'right',
            data:['BTC','ETC']
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
        },
        yAxis: {
            type: 'value'
        },
        dataZoom: [
            {
                type: 'slider',
                start: 0,
                end: 60
            },
            {
                type: 'inside',
                start: 0,
                end: 60
            }
        ],
        series: [
            {
                name: 'BTC',
                type: 'line' ,
                //areaStyle: {normal: {}},
                smooth: false,
                data: [5, 10, 15, 10, 5, 4, 12, 20, 25, 27, 30, 35]
            },
            {
                name: 'ETC',
                type: 'line' ,
                //areaStyle: {normal: {}},
                /*areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgb(255, 158, 68)'
                        }, {
                            offset: 1,
                            color: 'rgb(255, 70, 131)'
                        }])
                    }
                },*/
                smooth: false,
                data: [10, 15, 16, 15, 10, 8, 5, 2, 5, 7, 10, 12]
            }
        ]
    })
}

export function singleCoin() {
    //Single Coin History Chart
    var myChart = echarts.init(document.getElementById('btc'));
    myChart.setOption({
        /*title: {
            //left: 'center',
            text: 'Bitcoin History - 2015',
            textStyle: {fontWeight: 'normal'}
        },*/
        tooltip: {
            trigger: 'axis',
            /*axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }}*/
        },
        toolbox: {
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
        },
        yAxis: {
            type: 'value'
        },
        dataZoom: [
            {
                type: 'slider',
                start: 0,
                end: 60
            },
            {
                type: 'inside',
                start: 0,
                end: 60
            }
        ],
        series: [
            {
                name: 'BTC',
                type: 'line' ,
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgb(255, 158, 68)'
                        }, {
                            offset: 1,
                            color: 'rgb(255, 70, 131)'
                        }])
                    }
                },
                smooth: false,
                data: [5, 10, 15, 10, 5, 4, 12, 20, 25, 27, 30, 35]
            }
        ]
    })
}

export function minSingleCoin(tag) {
    //Single Coin History Chart
    var myChart = echarts.init(document.getElementById(tag));
    myChart.setOption({
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: 'BTC',
                type: 'line' ,
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgb(255, 158, 68)'
                        }, {
                            offset: 1,
                            color: 'rgb(255, 70, 131)'
                        }])
                    }
                },
                smooth: false,
                data: [5, 10, 15, 10, 5, 4, 12, 20, 25, 27, 30, 35]
            }
        ]
    })
}

export function userPortfolio() {
    //User Portfolio Chart
    var myChart = echarts.init(document.getElementById('portfolio'));
    var icons = {
        'Bitcoin': '/bitcoin.png',
        'LiteCoin': '/litecoin.png',
        'Ethereum': '/ethereum.png'
    };
    myChart.setOption({
        /*title: {
            left: 'center',
            text: 'Personal Portfolio',
            textStyle: {fontWeight: 'normal'}
        },*/
        legend: {
            orient: 'vertical',
            x: 'left',
            y: 'center',
            data:['Bitcoin','Litecoin','Ethereum']
        },
        tooltip : {
            trigger: 'item',
            formatter: "{d}%"
        },
        series : [
            {
                name: 'Personal Portfolio',
                type: 'pie',
                radius: '50%',
                //roseType: 'angle',
                selectedMode: 'single',
                data:[
                    {
                        value:400,
                        name:'Bitcoin',
                        label: {
                            normal: {
                                formatter: [
                                    '{Bitcoin|}',
                                ].join('\n'),
                                position: 'inner',
                                rich: {
                                    Bitcoin: {
                                        height: 50,
                                        align: 'center',
                                        backgroundColor: {
                                            image: icons.Bitcoin
                                        }
                                    }
                                }
                            }
                        }
                    },
                    {
                        value:335,
                        name:'Litecoin',
                        label: {
                            normal: {
                                formatter: [
                                    '{Litecoin|}',
                                ].join('\n'),
                                position: 'inner',
                                rich: {
                                    Litecoin: {
                                        height: 50,
                                        align: 'center',
                                        backgroundColor: {
                                            image: icons.LiteCoin
                                        }
                                    }
                                }
                            }
                        }
                    },
                    {
                        value:310,
                        name:'Ethereum',
                        label: {
                            normal: {
                                formatter: [
                                    '{Ethereum|}',
                                ].join('\n'),
                                position: 'inner',
                                rich: {
                                    Ethereum: {
                                        height: 50,
                                        align: 'center',
                                        backgroundColor: {
                                            image: icons.Ethereum
                                        }
                                    }
                                }
                            }
                        }
                    }
                ]
            }
        ],
        itemStyle: {
            emphasis: {
                shadowBlur: 50,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    })
}
