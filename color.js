var request = require('request')

var r = parseInt(process.argv[3],10) 
var g = parseInt(process.argv[4],10) 
var b = parseInt(process.argv[5],10) 
var filterBy = process.argv[2]


var findColor = function(){
	request('https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json', 

		function(error, response, body){

		var x = ''

		if(!error && response.statusCode == 200){
			var x = JSON.parse(body)
			if(filterBy === 'rgb'){
				
				for(var i = 0 ; i < x.length; i++){
					var rgb = x[i].rgb

					if (r === rgb.r && g === rgb.g && b === rgb.b){
						console.log(x[i].name)
						break;
					}

				}
			}
			else if (filterBy === 'name'){
				for (var i = 0; i < x.length; i++){

					if (process.argv[3] === x[i].name){
						for(key in x[i].rgb){
							console.log(x[i].rgb[key])

						}
					}
				}
			}
		}

	})
}

findColor()