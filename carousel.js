// Addon Provided by rect for smooth transition animations.
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

/* 
 * React component to initialise a Carousel Component
 */
var Carousel = React.createClass({
	// Sets the initial state variables.
	getInitialState: function(){
		return{
			imageList: this.props.imageList,
			currImage: 0,
		};
	},

	// Sets the id of the clicked image in the state variables.
  	handleClick: function(e){
  		this.state.currImage = $(e.target).parent().attr('id');
  		this.setState(this.state);
  	},

  	// Renders the corousel
	render: function(){
		var imageList = this.state.imageList;

		// Check if images are passed to the component.
		if(imageList.length === 0){
			return null;
		}

		var currImage = this.state.currImage,
			count = 0, 
			selected = 0,
			total = imageList.length;

		// Prepares the li elements with the images fetched in imageList array.
		var imageLi = imageList === "" ? '' : imageList.map(function(image){
			var imageTag;
			currImage = currImage || image.id;
			count++;
			if(image.id == currImage){
				selected = --count;
				return(<li key={image.id} id={image.id} className='evenLi' onClick={this.handleClick}><img src={image.image.large}/></li>)
			}
			else{
				return(<li key={image.id} id={image.id} className='oddLi' onClick={this.handleClick}><img src={image.image.large}/></li>)
			}
		}.bind(this));

		// Determines the 3 images to be displayed in the carousel based on the selected carousel.
		var leftImage = (selected > 0) ? (selected - 1) : (total-1);
		var rightImage = (selected + 1) % total;
		var myLi = [imageLi[leftImage], imageLi[selected], imageLi[rightImage]];
		
		return(
			<div className='slider'>
				<ul>
					<ReactCSSTransitionGroup transitionName="carousel">
          				{myLi}
        			</ReactCSSTransitionGroup>
				</ul>
			</div>
		);
	}
});
