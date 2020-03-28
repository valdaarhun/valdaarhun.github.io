var clock = document.getElementById('time');

const getTime = () => {
	var time = new Date();
	var hours = time.getHours();
	var minutes = time.getMinutes();
	var seconds = time.getSeconds();
  var meridian = 'AM';
  if (hours >=12)
    meridian = 'PM';
	if (hours > 12)
		hours = hours - 12;
	if (minutes < 10)
		minutes = '0' + minutes;
	if (seconds < 10)
		seconds = '0' + seconds;
	var final = hours + ':' + minutes + ':' + seconds + ' ' + meridian;
	clock.innerText = final;
}

setInterval(getTime, 1000);