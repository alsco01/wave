$.fn.copyAttribute = function(attrName)
{
	var
		$this = this
		,array = new Array()
		,$thead = this.children('thead')
		,$tbody = this.children('tbody')
	;

	// get attribute
	$thead.children().children().each(function(){
		if ($(this).filter('[' + attrName + ']').length)
		{
			array.push($(this).text());
		}
		else
		{
			array.push('');
		}
	});
	
	// set attribute
	$tbody.children().each(function(){
		$(this).children().each(function(i){
			if (array[i])
			{
				$(this).attr('data-cell-header', array[i]);
			}
		});
	});
}

$('#table').copyAttribute('copyTitle');