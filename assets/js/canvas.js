var calendarLine = document.getElementById("calendarCanvas");
/*var calendarLine = function(ctx) {*/
var ctx = calendarLine.getContext("2d");
ctx.save();
ctx.fillStyle = "#5ec7ed";
ctx.strokeStyle = "#fff";
ctx.translate(0,228);
ctx.scale(0.1,-0.1);
ctx.save();
ctx.restore();
ctx.save();
ctx.beginPath();
ctx.moveTo(0,2253);
ctx.bezierCurveTo(0,2240,88,2179,303,2044);
ctx.bezierCurveTo(469,1938,722,1778,866,1687);
ctx.lineTo(1126,1522);
ctx.lineTo(1656,1348);
ctx.lineTo(2185,1174);
ctx.lineTo(2710,1296);
ctx.bezierCurveTo(2999,1364,3242,1419,3251,1419);
ctx.bezierCurveTo(3261,1420,3375,1273,3549,1035);
ctx.bezierCurveTo(3705,823,3836,650,3842,650);
ctx.bezierCurveTo(3850,650,4443,823,4610,875);
ctx.bezierCurveTo(4762,921,4930,970,4939,970);
ctx.bezierCurveTo(4945,970,4950,963,4950,955);
ctx.bezierCurveTo(4950,947,4966,925,4985,906);
ctx.bezierCurveTo(5045,845,5125,846,5187,908);
ctx.lineTo(5223,944);
ctx.lineTo(5344,881);
ctx.bezierCurveTo(5411,847,5596,753,5755,673);
ctx.lineTo(6045,527);
ctx.lineTo(6764,264);
ctx.bezierCurveTo(7159,119,7487,0,7491,0);
ctx.bezierCurveTo(7507,0,7500,28,7483,35);
ctx.bezierCurveTo(7473,39,7152,156,6770,295);
ctx.lineTo(6075,549);
ctx.lineTo(5654,762);
ctx.lineTo(5232,975);
ctx.lineTo(5226,1023);
ctx.bezierCurveTo(5210,1140,5069,1189,4986,1106);
ctx.bezierCurveTo(4969,1088,4951,1059,4945,1040);
ctx.lineTo(4935,1006);
ctx.lineTo(4405,848);
ctx.bezierCurveTo(4114,762,3868,690,3859,690);
ctx.bezierCurveTo(3850,690,3726,850,3560,1076);
ctx.bezierCurveTo(3352,1360,3273,1460,3260,1457);
ctx.bezierCurveTo(3251,1455,3005,1398,2714,1330);
ctx.lineTo(2184,1207);
ctx.lineTo(1656,1383);
ctx.lineTo(1129,1559);
ctx.lineTo(577,1908);
ctx.bezierCurveTo(273,2100,19,2260,13,2264);
ctx.bezierCurveTo(4,2269,0,2265,0,2253);
ctx.closePath();
ctx.moveTo(5140,1105);
ctx.bezierCurveTo(5242,1052,5200,890,5085,890);
ctx.bezierCurveTo(5047,890,5002,916,4985,950);
ctx.bezierCurveTo(4932,1053,5037,1158,5140,1105);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
/*};*/