import request from 'request';
import http from 'http';
import xml2js from 'xml2js';
import parser from 'xml2json';
import tokenValidationService from "../utils/tokenValidationService";
import errorReturnsEntity from "../entities/errorReturnsEntity";
let xml_json = []

export async function getTechPinasFeed(req, res) {

	if (req.header("authorization")) {

		try {

	      	var user_data = tokenValidationService(req.header("authorization")).then((data) => {

		       	if(data.hasOwnProperty("userId") != false){

				  	let new_object = []
					var response =  request({url: 'https://feed2json.org/convert?url=https://www.pinoytechblog.com/feed', json: true}, function(err, json) {
						
						if (err) {
							throw err;
						}
						console.log(json);
						for(var i=0; i < json.body.items.length; i++){

					  		new_object.push({
					  			title: json.body.items[i].title,
					  			url: json.body.items[i].url,
					  			summary: json.body.items[i].summary,
					  			date_published: json.body.items[i].date_published
					  		})
						}
						res.status(200).json({result: new_object});

					})	          	
	          	}
	          	
	          	else{
	            	res.status(400).json({result: { code: "2", error: "Invalid token!" }});
	          	}
	        });



		  } catch (error) {
		    	return error.message;
		  }
	} else {

		res.status(400).json({result: errorReturnsEntity.tokenNotExist});
	}
}

export async function getLifeHack(req, res) {

	if (req.header("authorization")) {

		try {

	      	var user_data = tokenValidationService(req.header("authorization")).then((data) => {

		       	if(data.hasOwnProperty("userId") != false){

				  	let new_object = []
					var response =  request({url: 'https://feed2json.org/convert?url=https://www.lifehacker.com/index.xml', json: true}, function(err, json) {
						
						if (err) {
							throw err;
						}
						console.log(json);
						for(var i=0; i < json.body.items.length; i++){

					  		new_object.push({
					  			title: json.body.items[i].title,
					  			url: json.body.items[i].url,
					  			summary: json.body.items[i].summary,
					  			date_published: json.body.items[i].date_published
					  		})
						}
						res.status(200).json({result: new_object});

					})	          	
	          	}
	          	
	          	else{
	            	res.status(400).json({result: { code: "2", error: "Invalid token!" }});
	          	}
	        });



		  } catch (error) {
		    	return error.message;
		  }
	} else {

		res.status(400).json({result: errorReturnsEntity.tokenNotExist});
	}
}

export async function getUpdatedNews(req, res) {

	if (req.header("authorization")) {

		try {

	      	var user_data = tokenValidationService(req.header("authorization")).then((data) => {

		       	if(data.hasOwnProperty("userId") != false){

				  	let new_object = []
					var response =  request({url: 'https://feed2json.org/convert?url=http://www.interaksyon.com/feed/', json: true}, function(err, json) {
						
						if (err) {
							throw err;
						}
						console.log(json);
						for(var i=0; i < json.body.items.length; i++){

					  		new_object.push({
					  			title: json.body.items[i].title,
					  			url: json.body.items[i].url,
					  			summary: json.body.items[i].summary,
					  			date_published: json.body.items[i].date_published,
					  			author: json.body.items[i].author.name
					  		})
						}
						res.status(200).json({result: new_object});

					})	          	
	          	}
	          	
	          	else{
	            	res.status(400).json({result: { code: "2", error: "Invalid token!"  }});
	          	}
	        });



		  } catch (error) {
		    	return error.message;
		  }
	} else {

		res.status(400).json({result: errorReturnsEntity.tokenNotExist});
	}
}

export async function getUnboxingTech(req, res) {

	if (req.header("authorization")) {

		try {

	      	var user_data = tokenValidationService(req.header("authorization")).then((data) => {

		       	if(data.hasOwnProperty("userId") != false){

				  	let new_object = []
					var response =  request({url: 'https://feed2json.org/convert?url=https://www.unbox.ph/feed/', json: true}, function(err, json) {
						
						if (err) {
							throw err;
						}
						console.log(json);
						for(var i=0; i < json.body.items.length; i++){

					  		new_object.push({
					  			title: json.body.items[i].title,
					  			url: json.body.items[i].url,
					  			summary: json.body.items[i].summary,
					  			date_published: json.body.items[i].date_published,
					  			author: json.body.items[i].author.name
					  		})
						}
						res.status(200).json({result: new_object});

					})	          	
	          	}
	          	
	          	else{
	            	res.status(400).json({result: { code: "2", error: "Invalid token!"  }});
	          	}
	        });



		  } catch (error) {
		    	return error.message;
		  }
	} else {

		res.status(400).json({result: errorReturnsEntity.tokenNotExist});
	}
}

export async function getTheCity(req, res) {

	if (req.header("authorization")) {

		try {

	      	var user_data = tokenValidationService(req.header("authorization")).then((data) => {

		       	if(data.hasOwnProperty("userId") != false){

				  	let new_object = []
					var response =  request({url: 'https://feed2json.org/convert?url=https://www.clickthecity.com/rss/', json: true}, function(err, json) {
						
						if (err) {
							throw err;
						}
						
						for(var i=0; i < json.body.items.length; i++){

					  		new_object.push({
					  			title: json.body.items[i].title,
					  			url: json.body.items[i].url,
					  			author: json.body.items[i].author.name,
					  			author_link: "https://www.clickthecity.com/",
					  			author_image: "https://cnx-home-rss-images.s3.amazonaws.com/Clickthecity-logo.png",
					  			date_published: json.body.items[i].date_published,

					  		})
						}
						res.status(200).json({result: new_object});

					})	          	
	          	}
	          	
	          	else{
	            	res.status(400).json({result: { code: "2", error: "Invalid token!"  }});
	          	}
	        });

		  } catch (error) {
		    	return error.message;
		  }
	} else {

		res.status(400).json({result: errorReturnsEntity.tokenNotExist});
	}
}

export async function getPinoyTaste(req, res) {

	if (req.header("authorization")) {

		try {

	      	var user_data = tokenValidationService(req.header("authorization")).then((data) => {

		       	if(data.hasOwnProperty("userId") != false){

				  	let new_object = []
					var response =  request({url: 'https://feed2json.org/convert?url=https://panlasangpinoy.com/feed/', json: true}, function(err, json) {
						
						if (err) {
							throw err;
						}
						console.log(json);
						for(var i=0; i < json.body.items.length; i++){

					  		new_object.push({
					  			title: json.body.items[i].title,
					  			url: json.body.items[i].url,
					  			summary: json.body.items[i].summary,
					  			date_published: json.body.items[i].date_published
					  		})
						}
						res.status(200).json({result: new_object});

					})	          	
	          	}
	          	
	          	else{
	            	res.status(400).json({result: { code: "2", error: "Invalid token!" }});
	          	}
	        });

		  } catch (error) {
		    	return error.message;
		  }
	} else {

		res.status(400).json({result: errorReturnsEntity.tokenNotExist});
	}
}

export async function getMoneyTalk(req, res) {

	if (req.header("authorization")) {

		try {

	      	var user_data = tokenValidationService(req.header("authorization")).then((data) => {

		       	if(data.hasOwnProperty("userId") != false){

				  	let new_object = []
					var response =  request({url: 'https://feed2json.org/convert?url=https://www.pinoymoneytalk.com/feed/', json: true}, function(err, json) {
						
						if (err) {
							throw err;
						}

						for(var i=0; i < json.body.items.length; i++){

					  		new_object.push({
					  			title: json.body.items[i].title,
					  			url: json.body.items[i].url,
					  			summary: json.body.items[i].summary,
					  			date_published: json.body.items[i].date_published,
					  			author: json.body.items[i].author.name
					  		})
						}
						res.status(200).json({result: new_object});

					})	          	
	          	}
	          	
	          	else{
	            	res.status(400).json({result: { code: "2", error: "Invalid token!"  }});
	          	}
	        });

		  } catch (error) {
		    	return error.message;
		  }
	} else {

		res.status(400).json({result: errorReturnsEntity.tokenNotExist});
	}
}

export async function getTravelBook(req, res) {

	if (req.header("authorization")) {

		try {

	      	var user_data = tokenValidationService(req.header("authorization")).then((data) => {

		       	if(data.hasOwnProperty("userId") != false){

				  	let new_object = []
					var response =  request({url: 'https://feed2json.org/convert?url=https://www.lakwatsero.com/feed/', json: true}, function(err, json) {
						
						if (err) {
							throw err;
						}
						
						for(var i=0; i < json.body.items.length; i++){

					  		new_object.push({
					  			title: json.body.items[i].title,
					  			url: json.body.items[i].url,
					  			summary: json.body.items[i].summary,
					  			date_published: json.body.items[i].date_published,
					  			author: json.body.items[i].author.name
					  		})
						}
						res.status(200).json({result: new_object});

					})	          	
	          	}
	          	
	          	else{
	            	res.status(400).json({result: { code: "2", error: "Invalid token!" }});
	          	}
	        });

		  } catch (error) {
		    	return error.message;
		  }
	} else {

		res.status(400).json({result: errorReturnsEntity.tokenNotExist});
	}
}

export async function getPinoyFitness(req, res) {

	if (req.header("authorization")) {

		try {

	      	var user_data = tokenValidationService(req.header("authorization")).then((data) => {

		       	if(data.hasOwnProperty("userId") != false){

				  	let new_object = []
					var response =  request({url: 'https://feed2json.org/convert?url=https://www.pinoyfitness.com/feed/', json: true}, function(err, json) {
						
						if (err) {
							throw err;
						}
						
						for(var i=0; i < json.body.items.length; i++){

					  		new_object.push({
					  			title: json.body.items[i].title,
					  			url: json.body.items[i].url,
					  			summary: json.body.items[i].summary,
					  			date_published: json.body.items[i].date_published,
					  			author: json.body.items[i].author.name
					  		})
						}
						res.status(200).json({result: new_object});

					})	          	
	          	}
	          	
	          	else{
	            	res.status(400).json({result: { code: "2", error: "Invalid token!"  }});
	          	}
	        });

		  } catch (error) {
		    	return error.message;
		  }
	} else {

		res.status(400).json({result: errorReturnsEntity.tokenNotExist});
	}
}

export async function getWhatPinoys2Know(req, res) {

	if (req.header("authorization")) {

		try {

	      	var user_data = tokenValidationService(req.header("authorization")).then((data) => {

		       	if(data.hasOwnProperty("userId") != false){

				  	let new_object = []
					var response =  request({url: 'https://feed2json.org/convert?url=https://filipiknow.net/feed', json: true}, function(err, json) {
						
						if (err) {
							throw err;
						}
						
						for(var i=0; i < json.body.items.length; i++){

					  		new_object.push({
					  			title: json.body.items[i].title,
					  			url: json.body.items[i].url,
					  			summary: json.body.items[i].summary,
					  			date_published: json.body.items[i].date_published,
					  			author: json.body.items[i].author.name
					  		})
						}
						res.status(200).json({result: new_object});

					})	          	
	          	}
	          	
	          	else{
	            	res.status(400).json({result: { code: "2", error: "Invalid token!"  }});
	          	}
	        });

		  } catch (error) {
		    	return error.message;
		  }
	} else {

		res.status(400).json({result: errorReturnsEntity.tokenNotExist});
	}
}

export async function getIntellAsia(req, res) {

	if (req.header("authorization")) {

		try {

	      	var user_data = tokenValidationService(req.header("authorization")).then((data) => {

		       	if(data.hasOwnProperty("userId") != false){

				  	let new_object = []
					var response =  request({url: 'https://feed2json.org/convert?url=https://www.intellasia.net/category/philippines/feed', json: true}, function(err, json) {
						
						if (err) {
							throw err;
						}
						
						for(var i=0; i < json.body.items.length; i++){

					  		new_object.push({
					  			title: json.body.items[i].title,
					  			url: json.body.items[i].url,
					  			summary: json.body.items[i].summary,
					  			date_published: json.body.items[i].date_published,
					  			author: json.body.items[i].author.name
					  		})
						}
						res.status(200).json({result: new_object});

					})	          	
	          	}
	          	
	          	else{
	            	res.status(400).json({result: { code: "2", error: "Invalid token!" }});
	          	}
	        });

		  } catch (error) {
		    	return error.message;
		  }
	} else {

		res.status(400).json({result: errorReturnsEntity.tokenNotExist});
	}
}

export async function getGMANews(req, res) {

	if (req.header("authorization")) {

		try {

	      	var user_data = tokenValidationService(req.header("authorization")).then((data) => {

		       	if(data.hasOwnProperty("userId") != false){

					http.get("http://data.gmanews.tv/gno/rss/videos/show/24oras/feed.xml", function (response) {
				        var completeResponse = '';
				        response.on('data', function (chunk) {
				            completeResponse += chunk;
				        });
				        response.on('end', function() {

				            var object = JSON.parse(parser.toJson(completeResponse, {reversible: true}))

				            for(var i = 0; i < object["rss"]["channel"]["item"].length; i++){

						  		xml_json.push(
							  		{
					  					news_title: object["rss"]["channel"]["item"][i]["title"]["$t"],
							  			news_url: object["rss"]["channel"]["item"][i]["link"]["$t"],
							  			news_image: object["rss"]["channel"]["item"][i]["media:content"]["url"].replace(/^\/*/, ""),
							  			author: "GMA Network - Online Portal of Kapuso News and Entertainment",
										author_url: object["rss"]["channel"]['link']["$t"],
										author_image: "https://cnx-home-rss-images.s3.amazonaws.com/gmanews.png",
										date_published: object["rss"]["channel"]["item"][i]["pubDate"]["$t"]
						  			}
					  			)

				            }

				            res.status(200).json({result:xml_json});
				        })

				    }).on('error', function (e) {
				        console.log('problem with request: ' + e.message);
				    });
	          	}
	          	
	          	else{
	            	res.status(400).json({result: { code: "2", error: "Invalid token!" }});
	          	}
	        });

		  } catch (error) {
		    	return error.message;
		  }
	} else {

		res.status(400).json({result: errorReturnsEntity.tokenNotExist});
	}
}

export async function getTechBeat(req, res) {

	if (req.header("authorization")) {

		try {

	      	var user_data = tokenValidationService(req.header("authorization")).then((data) => {

		       	if(data.hasOwnProperty("userId") != false){

					http.get("http://rss.cnn.com/rss/edition_technology.rss", function (response) {
				        var completeResponse = '';
				        response.on('data', function (chunk) {
				            completeResponse += chunk;
				        });
				        response.on('end', function() {

				            var object = JSON.parse(parser.toJson(completeResponse, {reversible: true}))

				            for(var i = 0; i < object["rss"]["channel"]["item"].length; i++){

						  		xml_json.push(
							  		{
					  					news_title: object["rss"]["channel"]["item"][i]["title"]["$t"],
							  			news_url: object["rss"]["channel"]["item"][i]["link"]["$t"],
							  			news_image: object["rss"]["channel"]["item"][i]["media:content"]["url"].replace(/^\/*/, ""),
							  			author: "CNN.com - Technology",
										author_url: object["rss"]["channel"]['link']["$t"],
										author_image: "http://i.cdn.turner.com/cnn/.e/img/1.0/logo/cnn.logo.rss.gif<",
										date_published: object["rss"]["channel"]["item"][i]["pubDate"]["$t"]
						  			}
					  			)

				            }

				            res.status(200).json({result:xml_json});
				        })

				    }).on('error', function (e) {
				        console.log('problem with request: ' + e.message);
				    });
	          	}
	          	
	          	else{
	            	res.status(400).json({result: { code: "2", error: "Invalid token!"  }});
	          	}
	        });

		  } catch (error) {
		    	return error.message;
		  }
	} else {

		res.status(400).json({result: errorReturnsEntity.tokenNotExist});
	}
}
