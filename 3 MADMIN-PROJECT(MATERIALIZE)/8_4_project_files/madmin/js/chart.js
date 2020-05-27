// window.onload = function() {
//   var chart = new CanvasJS.Chart('chartContainer', {
//     animationEnabled: true,
//     theme: 'light2',
//     title: {
//       text: 'Daily Visitors'
//     },
//     axisY: {
//       includeZero: false
//     },
//     data: [
//       {
//         type: 'line',
//         dataPoints: [
//           { y: 450 },
//           { y: 414 },
//           {
//             y: 520,
//             indexLabel: 'highest',
//             markerColor: 'red',
//             markerType: 'triangle'
//           },
//           { y: 460 },
//           { y: 450 },
//           { y: 500 },
//           { y: 480 },
//           { y: 480 },
//           {
//             y: 410,
//             indexLabel: 'lowest',
//             markerColor: 'DarkSlateGrey',
//             markerType: 'cross'
//           },
//           { y: 500 },
//           { y: 480 },
//           { y: 510 }
//         ]
//       }
//     ]
//   });
//   setTimeout(function() {
//     chart.render();
//   }, 1000);
// };

// window.onload = function() {
// 	var chart = new CanvasJS.Chart('chartContainer', {
// 		animationEnabled: true,
// 		zoomEnabled: true,
// 		theme: 'dark2',
// 		title: {
// 			text: 'Growth in Internet Users Globally'
// 		},
// 		axisX: {
// 			title: 'Year',
// 			valueFormatString: '####',
// 			interval: 2
// 		},
// 		axisY: {
// 			logarithmic: true, //change it to false
// 			title: 'Internet Users (Log)',
// 			titleFontColor: '#6D78AD',
// 			lineColor: '#6D78AD',
// 			gridThickness: 0,
// 			lineThickness: 1,
// 			includeZero: false,
// 			labelFormatter: addSymbols
// 		},
// 		axisY2: {
// 			title: 'Internet Users',
// 			titleFontColor: '#51CDA0',
// 			logarithmic: false, //change it to true
// 			lineColor: '#51CDA0',
// 			gridThickness: 0,
// 			lineThickness: 1,
// 			labelFormatter: addSymbols
// 		},
// 		legend: {
// 			verticalAlign: 'top',
// 			fontSize: 16,
// 			dockInsidePlotArea: true
// 		},
// 		data: [
// 			{
// 				type: 'line',
// 				xValueFormatString: '####',
// 				showInLegend: true,
// 				name: 'Log Scale',
// 				dataPoints: [
// 					{ x: 1994, y: 25437639 },
// 					{ x: 1995, y: 44866595 },
// 					{ x: 1996, y: 77583866 },
// 					{ x: 1997, y: 120992212 },
// 					{ x: 1998, y: 188507628 },
// 					{ x: 1999, y: 281537652 },
// 					{ x: 2000, y: 414794957 },
// 					{ x: 2001, y: 502292245 },
// 					{ x: 2002, y: 665065014 },
// 					{ x: 2003, y: 781435983 },
// 					{ x: 2004, y: 913327771 },
// 					{ x: 2005, y: 1030101289 },
// 					{ x: 2006, y: 1162916818 },
// 					{ x: 2007, y: 1373226988 },
// 					{ x: 2008, y: 1575067520 },
// 					{ x: 2009, y: 1766403814 },
// 					{ x: 2010, y: 2023202974 },
// 					{ x: 2011, y: 2231957359 },
// 					{ x: 2012, y: 2494736248 },
// 					{ x: 2013, y: 2728428107 },
// 					{ x: 2014, y: 2956385569 },
// 					{ x: 2015, y: 3185996155 },
// 					{ x: 2016, y: 3424971237 }
// 				]
// 			},
// 			{
// 				type: 'line',
// 				xValueFormatString: '####',
// 				axisYType: 'secondary',
// 				showInLegend: true,
// 				name: 'Linear Scale',
// 				dataPoints: [
// 					{ x: 1994, y: 25437639 },
// 					{ x: 1995, y: 44866595 },
// 					{ x: 1996, y: 77583866 },
// 					{ x: 1997, y: 120992212 },
// 					{ x: 1998, y: 188507628 },
// 					{ x: 1999, y: 281537652 },
// 					{ x: 2000, y: 414794957 },
// 					{ x: 2001, y: 502292245 },
// 					{ x: 2002, y: 665065014 },
// 					{ x: 2003, y: 781435983 },
// 					{ x: 2004, y: 913327771 },
// 					{ x: 2005, y: 1030101289 },
// 					{ x: 2006, y: 1162916818 },
// 					{ x: 2007, y: 1373226988 },
// 					{ x: 2008, y: 1575067520 },
// 					{ x: 2009, y: 1766403814 },
// 					{ x: 2010, y: 2023202974 },
// 					{ x: 2011, y: 2231957359 },
// 					{ x: 2012, y: 2494736248 },
// 					{ x: 2013, y: 2728428107 },
// 					{ x: 2014, y: 2956385569 },
// 					{ x: 2015, y: 3185996155 },
// 					{ x: 2016, y: 3424971237 }
// 				]
// 			}
// 		]
// 	});
// 	setTimeout(function() {
// 		chart.render();
// 	}, 1000);

// 	function addSymbols(e) {
// 		var suffixes = [ '', 'K', 'M', 'B' ];

// 		var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
// 		if (order > suffixes.length - 1) order = suffixes.length - 1;

// 		var suffix = suffixes[order];
// 		return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
// 	}
// };

window.onload = function() {
	let chart = new CanvasJS.Chart('chartContainer', {
		//theme: "light2", // "light1", "light2", "dark1", "dark2"
		animationEnabled: true,
		title: {
			text: 'Daily Visitors'
		},
		subtitles: [
			{
				text: 'Try Clicking and Hovering over Legends!'
			}
		],
		axisX: {
			lineColor: 'black',
			labelFontColor: 'black'
		},
		axisY2: {
			gridThickness: 0,
			title: '% of Population',
			suffix: '%',
			titleFontColor: 'black',
			labelFontColor: 'black'
		},
		legend: {
			cursor: 'pointer',
			itemmouseover: function(e) {
				e.dataSeries.lineThickness = e.chart.data[e.dataSeriesIndex].lineThickness * 2;
				e.dataSeries.markerSize = e.chart.data[e.dataSeriesIndex].markerSize + 2;
				e.chart.render();
			},
			itemmouseout: function(e) {
				e.dataSeries.lineThickness = e.chart.data[e.dataSeriesIndex].lineThickness / 2;
				e.dataSeries.markerSize = e.chart.data[e.dataSeriesIndex].markerSize - 2;
				e.chart.render();
			},
			itemclick: function(e) {
				if (typeof e.dataSeries.visible === 'undefined' || e.dataSeries.visible) {
					e.dataSeries.visible = false;
				} else {
					e.dataSeries.visible = true;
				}
				e.chart.render();
			}
		},
		toolTip: {
			shared: true
		},
		data: [
			{
				type: 'spline',
				name: 'Sweden',
				markerSize: 5,
				axisYType: 'secondary',
				xValueFormatString: 'YYYY',
				yValueFormatString: '#,##0.0"%"',
				showInLegend: true,
				dataPoints: [
					{ x: new Date(2000, 00), y: 47.5 },
					{ x: new Date(2005, 00), y: 84.8 },
					{ x: new Date(2009, 00), y: 91 },
					{ x: new Date(2010, 00), y: 90 },
					{ x: new Date(2011, 00), y: 92.8 },
					{ x: new Date(2012, 00), y: 93.2 },
					{ x: new Date(2013, 00), y: 94.8 },
					{ x: new Date(2014, 00), y: 92.5 }
				]
			},
			{
				type: 'spline',
				name: 'UK',
				markerSize: 5,
				axisYType: 'secondary',
				xValueFormatString: 'YYYY',
				yValueFormatString: '#,##0.0"%"',
				showInLegend: true,
				dataPoints: [
					{ x: new Date(2000, 00), y: 26.8 },
					{ x: new Date(2005, 00), y: 70 },
					{ x: new Date(2009, 00), y: 83.6 },
					{ x: new Date(2010, 00), y: 85 },
					{ x: new Date(2011, 00), y: 85.4 },
					{ x: new Date(2012, 00), y: 87.5 },
					{ x: new Date(2013, 00), y: 89.8 },
					{ x: new Date(2014, 00), y: 91.6 }
				]
			},
			{
				type: 'spline',
				name: 'UAE',
				markerSize: 5,
				axisYType: 'secondary',
				xValueFormatString: 'YYYY',
				yValueFormatString: '#,##0.0"%"',
				showInLegend: true,
				dataPoints: [
					{ x: new Date(2000, 00), y: 23.6 },
					{ x: new Date(2005, 00), y: 40 },
					{ x: new Date(2009, 00), y: 64 },
					{ x: new Date(2010, 00), y: 68 },
					{ x: new Date(2011, 00), y: 78 },
					{ x: new Date(2012, 00), y: 85 },
					{ x: new Date(2013, 00), y: 86 },
					{ x: new Date(2014, 00), y: 90.4 }
				]
			},
			{
				type: 'spline',
				showInLegend: true,
				name: 'USA',
				markerSize: 5,
				axisYType: 'secondary',
				yValueFormatString: '#,##0.0"%"',
				xValueFormatString: 'YYYY',
				dataPoints: [
					{ x: new Date(2000, 00), y: 43.1 },
					{ x: new Date(2005, 00), y: 68 },
					{ x: new Date(2009, 00), y: 71 },
					{ x: new Date(2010, 00), y: 71.7 },
					{ x: new Date(2011, 00), y: 69.7 },
					{ x: new Date(2012, 00), y: 79.3 },
					{ x: new Date(2013, 00), y: 84.2 },
					{ x: new Date(2014, 00), y: 87 }
				]
			},
			{
				type: 'spline',
				name: 'Switzerland',
				markerSize: 5,
				axisYType: 'secondary',
				xValueFormatString: 'YYYY',
				yValueFormatString: '#,##0.0"%"',
				showInLegend: true,
				dataPoints: [
					{ x: new Date(2000, 00), y: 47.1 },
					{ x: new Date(2005, 00), y: 70.1 },
					{ x: new Date(2009, 00), y: 81.3 },
					{ x: new Date(2010, 00), y: 83.9 },
					{ x: new Date(2011, 00), y: 85.2 },
					{ x: new Date(2012, 00), y: 85.2 },
					{ x: new Date(2013, 00), y: 86.7 },
					{ x: new Date(2014, 00), y: 87 }
				]
			},
			{
				type: 'spline',
				name: 'Honk Kong',
				markerSize: 5,
				axisYType: 'secondary',
				xValueFormatString: 'YYYY',
				yValueFormatString: '#,##0.0"%"',
				showInLegend: true,
				dataPoints: [
					{ x: new Date(2000, 00), y: 27.8 },
					{ x: new Date(2005, 00), y: 56.9 },
					{ x: new Date(2009, 00), y: 69.4 },
					{ x: new Date(2010, 00), y: 72 },
					{ x: new Date(2011, 00), y: 72.2 },
					{ x: new Date(2012, 00), y: 72.9 },
					{ x: new Date(2013, 00), y: 74.2 },
					{ x: new Date(2014, 00), y: 74.6 }
				]
			},
			{
				type: 'spline',
				name: 'Russia',
				markerSize: 5,
				axisYType: 'secondary',
				xValueFormatString: 'YYYY',
				yValueFormatString: '#,##0.0"%"',
				showInLegend: true,
				dataPoints: [
					{ x: new Date(2000, 00), y: 2 },
					{ x: new Date(2005, 00), y: 15.2 },
					{ x: new Date(2009, 00), y: 29 },
					{ x: new Date(2010, 00), y: 43 },
					{ x: new Date(2011, 00), y: 49 },
					{ x: new Date(2012, 00), y: 63.8 },
					{ x: new Date(2013, 00), y: 61.4 },
					{ x: new Date(2014, 00), y: 70.5 }
				]
			},
			{
				type: 'spline',
				name: 'Ukraine',
				markerSize: 5,
				axisYType: 'secondary',
				xValueFormatString: 'YYYY',
				yValueFormatString: '#,##0.0"%"',
				showInLegend: true,
				dataPoints: [
					{ x: new Date(2000, 00), y: 0.7 },
					{ x: new Date(2005, 00), y: 3.7 },
					{ x: new Date(2009, 00), y: 17.9 },
					{ x: new Date(2010, 00), y: 23.3 },
					{ x: new Date(2011, 00), y: 28.7 },
					{ x: new Date(2012, 00), y: 35.3 },
					{ x: new Date(2013, 00), y: 41.8 },
					{ x: new Date(2014, 00), y: 43.4 }
				]
			},
			{
				type: 'spline',
				name: 'India',
				markerSize: 5,
				axisYType: 'secondary',
				xValueFormatString: 'YYYY',
				yValueFormatString: '#,##0.0"%"',
				showInLegend: true,
				dataPoints: [
					{ x: new Date(2000, 00), y: 0.5 },
					{ x: new Date(2005, 00), y: 2.4 },
					{ x: new Date(2009, 00), y: 5.1 },
					{ x: new Date(2010, 00), y: 7.5 },
					{ x: new Date(2011, 00), y: 10.1 },
					{ x: new Date(2012, 00), y: 12.6 },
					{ x: new Date(2013, 00), y: 15.1 },
					{ x: new Date(2014, 00), y: 18 }
				]
			}
		]
	});
	setTimeout(function() {
		chart.render();
	}, 1000);
};
