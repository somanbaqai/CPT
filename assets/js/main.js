/*
	Industrious by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/
(function($) {

	var	$window = $(window),
		$banner = $('#banner'),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			default:   ['1681px',   null       ],
			xlarge:    ['1281px',   '1680px'   ],
			large:     ['981px',    '1280px'   ],
			medium:    ['737px',    '980px'    ],
			small:     ['481px',    '736px'    ],
			xsmall:    ['361px',    '480px'    ],
			xxsmall:   [null,       '360px'    ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				target: $body,
				visibleClass: 'is-menu-visible',
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right'
			});


			console.log("In ready function...");
    
 
			console.log( "http://"+ window.location.host + "/assets/services/services.php");
			$.get("http://"+ window.location.host + "/assets/services/services.php",
				function (data) { }, "json")
				.then(function (data) {
				   
					console.log('Response received...');
					console.log(data);
					
					var i=0;
					$.each(data, (index, item) => {
					
						var htmlStr = ''
						htmlStr +='<div class="card text-center" style="width: 18rem;">';
						htmlStr += '<div class="card-body">';
						htmlStr += '<img class="card-img-top rounded" src="./images/pic05.jpg" alt="Card image cap">'
						htmlStr += '<h6 class="card-title">' + item.head + '</h5>';
						htmlStr += '<p class="card-text">' + item.maintext + '</p>';
						htmlStr +=   '<a href="#" class="btn btn-primary">More Details...</a>';
						htmlStr += '</div>'
						htmlStr += '</div>'
		
						var oHtml = $.parseHTML(htmlStr);
						$("#events").append(oHtml);
						i++;
					});
				   
				}).fail(function (result) {
					console.log("API called failed....");
					console.log(result)
				})
})(jQuery);