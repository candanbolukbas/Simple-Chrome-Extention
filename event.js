function remove(){
	try
	  {
	    document.getElementById('RightRailContainer').style.width="0px";
	    var myElements = document.querySelectorAll(".WithRightRail");
		for (var i = 0; i < myElements.length; i++) {
			myElements[i].style.right = 0;
		}
	  }
	catch(err)
	  {
	    //Skip if "pagelet_ego_pane_w" div tag isn't on this page
	  }
	console.log('All ads have been removed.');
}
remove();