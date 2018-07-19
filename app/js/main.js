$(document).ready(function(){
   $('.sidebar__nav li.first__li').click(function(event) {
		event.target.classList.toggle('active');
		if(event.target.classList.contains('active')) {
			$(event.target).nextAll().show(300);
		} else $(event.target).nextAll().hide(300);
	 });


	 let dataLabels = ["2015-09-12", "2015-11-12", "2015-12-12", "2016-01-12"];
	 let dataDatasets = [233, 242, 262, 280];

	 $('#current__weight')[0].innerText = dataDatasets[dataDatasets.length - 1];

	 let addData = function (chart, label, data) {
			chart.data.labels.push(label);
			chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    	});
			chart.update();
	};

	$('#type_progress').styler({
		onFormStyled: function() {
			$(this).css({
				'padding': '15px 9px',
				'border': '1px solid #D4D4D4'
			})
		}
	});

	 $('#btn_data').click(function() {
		 console.log($('#input_data').val());
		 console.log($('#input_weight').val());
		//  dataLabels.push($('#input_data').val());
		 addData(myChart, $('#input_data').val(), $('#input_weight').val());
		 $('#current__weight')[0].innerText = $('#input_weight').val();
	 })

	 $('#type_progress').change(function() {
		console.log($("#type_progress option:selected").val());

		myChart.options.scales.xAxes[0].time.unit = $("#type_progress option:selected").val();
		myChart.update();
	 })

	 var ctx = document.getElementById("myChart").getContext('2d');
	 var myChart = new Chart(ctx, {
			type: 'line',
			data: {
					// labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
					labels: dataLabels,
					datasets: [{
							label: '',
							data: dataDatasets,
							backgroundColor: [
									'rgba(20, 191, 68, 0.2)'
							],
							borderColor: [
									'rgba(20, 191, 68, 1)'
							],
							borderWidth: 3,
							pointRadius: 6,
							pointBackgroundColor: 'transparent',
							responsive: true
					}]
			},
			options: {
				responsive: true,
					legend: {
						display: false
					},
					scales: {
							yAxes: [{
									ticks: {
											beginAtZero: true
									}
							}],
							xAxes: [{
								type: 'time',
								time: {
									displayFormats: {
										quarter: 'll'
									},
									unit: 'year'
								}
						}]
					}
			}
	});
});