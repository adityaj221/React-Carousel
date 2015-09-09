// Fetch the list of images from the server.
$.ajax({
  url: "https://api.myjson.com/bins/1wqfa",
  type: 'GET',
  dataType: 'json',
  success: function(data) {
  	renderReact(data);
  }.bind(this),
  error: function(xhr, status, err) {
    console.error(this.props.url, status, err.toString());
  }.bind(this)
});

//Render the carousel components using the fetched data.
function renderReact(data){
	var carouselData = data;
	var limit = carouselData.length / 2;
	var carousel1Data = carouselData.splice(0,limit);

	React.render(
	  <Carousel imageList={carousel1Data}/>,
	  document.getElementById('carousel1')
	);

	React.render(
	  <Carousel imageList={carouselData}/>,
	  document.getElementById('carousel2')
	);
}