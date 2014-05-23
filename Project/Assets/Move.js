#pragma strict



function Start () {

	
	var position : Vector3 = transform.position;

}

function Update () {

	if(Input.GetKeyDown(KeyCode.Q)){
	
			
		Debug.Log("Hello!");		
			
	
		rigidbody.AddForce(Vector3(1000, 0, 0));

		
	}

}