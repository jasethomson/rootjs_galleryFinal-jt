/* your javascript goes here */

$(document).ready(initiateApp);

var pictures = [
	'images/landscape-1.jpg',
	'images/landscape-10.jpg',
	'images/landscape-11.jpg',
	'images/landscape-13.jpg',
	'images/landscape-15.jpg',
	'images/landscape-17.jpg',
	'images/landscape-18.jpg',
	'images/landscape-19.jpg',
	'images/landscape-2.jpg',
	'images/landscape-3.jpg',
	'images/landscape-8.jpg',
	'images/landscape-9.jpg',
	'images/pexels-photo-132037.jpeg',
	'images/pretty.jpg',
];

function initiateApp(){
		$("#gallery").sortable();
		/*advanced: add jquery sortable call here to make the gallery able to be sorted
		//on change, rebuild the images array into the new order
	*/

	makeGallery(pictures);
	addModalCloseHandler();



}
function makeGallery(imageArray){
/* <figure class="imageGallery col-xs-12 col-sm-6 col-md-4" style="background-image:url(images/landscape-1.jpg);">
			<figcaption>landscape-1.jpg</figcaption>
		</figure>
		*/
	//use loops and jquery dom creation to make the html structure inside the #gallery section
	//create a loop to go through the pictures
	for (var index = 0; index < imageArray.length; index++) {
		console.log(imageArray[index]);
		var imageObject = {
			'class': 'imageGallery col-xs-12 col-sm-6 col-md-4',
			'css': {
				'background-image': 'url(' + imageArray[index] + ')'
			},
			}
		var image = $("<figure>", imageObject);
		var imageCaption = $("<figcaption>").text(imageArray[index].slice(7));
		image.append(imageCaption);
		image.click(displayImage);
		$("#gallery").append(image);

	}
	//create the elements needed for each picture, store the elements in variable

	//attach a click handler to the figure you create.  call the "displayImage" function.

	//append the element to the #gallery section

}

function addModalCloseHandler(){
	//add a click handler to the img element in the image modal.  When the element is clicked, close the modal
	//for more info, check here: https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp
	$(".close").modal('hide');
}

function displayImage(){

	//find the url of the image by grabbing the background-image source, store it in a variable
	//grab the direct url of the image by getting rid of the other pieces you don't need
	var backgroundImagePull = this.style.backgroundImage;
	var firstSlice = backgroundImagePull.slice(5);
	var lastG = firstSlice.lastIndexOf('g');
	var backgroundImageUrl = firstSlice.slice(0,lastG+1);
	console.log(backgroundImageUrl);

	//grab the name from the file url, ie the part without the path.  so "images/pexels-photo-132037.jpeg" would become
		// pexels-photo-132037
		//take a look at the lastIndexOf method
	var slicePart1 = backgroundImageUrl.slice(7);
	var lastChar = slicePart1.lastIndexOf('.');
	var postSlice = slicePart1.slice(0, lastChar);
	console.log(postSlice);

	/*
	      < !--Modal content-- >
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal">&times;</button>
				<h4 class="modal-title">landscape-10</h4>
	*/
	/*
	        <div class="modal-body">
					<img src="images/landscape-10.jpg">
	*/
	//change the modal-title text to the name you found above
	//change the src of the image in the modal to the url of the image that was clicked on
	$(".modal-title").text(postSlice);
	$(".modal-body img").attr("src", backgroundImageUrl);



	//show the modal with JS.  Check for more info here:
	//https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp
	$("#galleryModal").modal('show');
}
