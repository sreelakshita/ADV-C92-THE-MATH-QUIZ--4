function AddUser()
		{
			pl1n=document.getElementById("p1n" ).value;
			p2n=document.getElementById("p2n" ).value;
			
			localStorage.setItem("player1_name" , p1n);
			localStorage.setItem("player2_name" , p2n);
	
			window.location ="game_page.html";
		}