#pragma strict

var InvisWall : GameObject;
var Wall : GameObject;

var Placing : boolean = false;

var PrePlaceWall : GameObject;

function Start () {



}

function Update () {

	if(Input.GetMouseButtonDown(0)){ // If left click down
	
		if(Placing == false){ // If there is not currently a wall be previeewed
		
			// There is now a wall being previewed
			Placing = true;
			
			// Define a variable for the preview
			PrePlaceWall = Instantiate(InvisWall, transform.position + transform.forward * 10, transform.rotation);
			
			// Make sure that the preview wall is a child of the camera so it moves with the camera
			PrePlaceWall.transform.parent = transform;
			
			if(PrePlaceWall != null){
				Debug.Log("After placing wall, PrePlaceWall is not null!");
			}
			
			
		}else{ // If there is currently a wall being previewed
		
			if(PrePlaceWall != null){
			
				Debug.Log("PrePlaceWall not null");
				
				// There is no longer a wall being previewed
				Placing = false;
					
				// Place the real wall in the position of the preview wall
				Instantiate(Wall, PrePlaceWall.transform.position, PrePlaceWall.transform.rotation);
					
				// Destroy the Preview wall
				Destroy(PrePlaceWall);
			}
		}
	}
	
	
	// Make sure that if the PrePlaceWall exists that it has not rotated
	if(PrePlaceWall != null){

		//PrePlaceWall.transform.rotation.z = 0;
	
	}
	
}