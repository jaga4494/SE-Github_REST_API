var request = require('request');
var fs = require("fs");
var Promise = require('bluebird');
var parse = require('parse-link-header');

var tocreaterepo=
{
	"name": "jsarava-new-repo",			
	"description": "Create a new repository",
	"homepage": "https://github.com",
	"private": false,
	"has_issues": true,
	"has_projects": true,
	"has_wiki": false
};

var tocreateissue=
{
	"title": "Created a new issue",
	"body": "Help me to solve this problem.",
					
			"labels": [
			  "bug"
			]
} ;

var toeditrepo=
{
	"name": "jsarava-new-repo",			
	"description": "New repository",
	"has_wiki": true
};


////// FILL IN THE BLANKS

var token = "token " + "<Github Api token>";
var userId = "jaga4494";

var urlRoot = "https://api.github.com";
// NCSU Enterprise endpoint:
// https://github.ncsu.edu/api/v3

getYourRepos(userId);
function getYourRepos(userName)
{

	var options = {
		url: urlRoot + '/users/' + userName + "/repos",
		method: 'GET',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token
		}
	};

	// Send a http request to url and specify a callback that will be called upon its return.
	request(options, function (error, response, body) 
	{
		var obj = JSON.parse(body);
		console.log( obj );
		for( var i = 0; i < obj.length; i++ )
		{
			var name = obj[i].name;
			console.log( name );
		}
	});

}
listBranches(userId,'first-repo');
function listBranches(userName,repo)
{
	var options = {
		url: urlRoot + '/repos/' + userName + '/' +repo  + "/branches",
		method: 'GET',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token
		}
	};

	// Send a http request to url and specify a callback that will be called upon its return.
	request(options, function (error, response, body) 
	{
		var obj = JSON.parse(body);
		console.log( obj );
		for( var i = 0; i < obj.length; i++ )
		{
			var name = obj[i].name;
			console.log( name );
		}
	});

}
createRepo();
function createRepo()
{
	var options = {
		
		url: urlRoot + '/user' + "/repos",
		method: 'POST',
		json: tocreaterepo,
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token,
				

		},
				
		
	};

	// Send a http request to url and specify a callback that will be called upon its return.
	request(options, function (error, response, body) 
	{
		//var obj = JSON.parse(body);
		console.log( body );
		/*
		for( var i = 0; i < obj.length; i++ )
		{
			var name = obj[i].name;
			console.log( name );
		}*/
	});

}

createIssue(userId,'jsarava-new-repo');
function createIssue(userName,repo)
{
	var options = {
		url: urlRoot + '/repos/' + userName + '/' +repo  + "/issues",
		method: 'POST',
		json: tocreateissue,
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token,
			
		}
	};

	// Send a http request to url and specify a callback that will be called upon its return.
	request(options, function (error, response, body) 
	{
		//var obj = JSON.parse(body);
		console.log( body );
		/*for( var i = 0; i < body.length; i++ )
		{
			var name = body[i].name;
			console.log( name );
		}*/
	});

}

editRepo(userId,'jsarava-new-repo');
function editRepo(userName,repo)
{
	var options = {
		url: urlRoot + '/repos/' + userName + '/' +repo,
		method: 'PATCH',
		json: toeditrepo,
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token,
			
		}
	};

	// Send a http request to url and specify a callback that will be called upon its return.
	request(options, function (error, response, body) 
	{
		//var obj = JSON.parse(body);
		console.log( body );
		/*for( var i = 0; i < body.length; i++ )
		{
			var name = body[i].name;
			console.log( name );
		}*/
	});

}
listIssueReactions(userId,'jsarava-new-repo', 2)
function listIssueReactions(userName,repo,issuenumber)
{
	var options = {
		url: urlRoot + '/repos/' + userName + '/' +repo + '/issues/' + issuenumber + "/reactions",
		method: 'GET',
		//json: tolist_issue_reactions,
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Accept": "application/vnd.github.squirrel-girl-preview",
			"Authorization": token,
			
		}
	};

	// Send a http request to url and specify a callback that will be called upon its return.
	request(options, function (error, response, body) 
	{
		var obj = JSON.parse(body);
		console.log( obj );
		/*for( var i = 0; i < obj.length; i++ )
		{
			var name = obj[i].name;
			console.log( name );
		}*/
	});

}