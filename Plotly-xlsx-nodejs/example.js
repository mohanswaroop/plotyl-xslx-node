const express = require('express');
var cors = require('cors');
const app = express();
const excelToJson = require('convert-excel-to-json');
const port = 8080;
app.use(cors());
// Data can be requested via GET method
var Xdata = [];
var Arr1 = [];
var Arr2 = [];
var Arr3 = [];
var Arr4 = [];
var dataObject;
app.get('/graph', (req, res) => {
	var chartData = excelToJson({
		sourceFile: './test.xlsx'
	});
	if (res) {
		console.log("ms: result:::", chartData);
		dataObject = chartData.testbar;
		for (let a = 0; a < dataObject.length; a++) {
			Xdata.push(dataObject[a].A);
			Arr1.push(dataObject[a].B);
			Arr2.push(dataObject[a].C);
			Arr3.push(dataObject[a].D);
			console.log("data::Xdata::", Xdata);
			console.log("data::Arr1::", Arr1);
			console.log("data::Arr2::", Arr2);
			console.log("data::Arr3::", Arr3);
		}
		var resultObject = { Xdata, Arr1, Arr2, Arr3 };
		console.log("final data object!!!!", resultObject);
		res.send(resultObject);
	}
})
app.listen(port);
