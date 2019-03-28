$(document).ready(function(){
   	
	var salameche = createPokemon("salameche", 59, 52, 43, 65, true);
	var carapuce = createPokemon("carapuce", 44, 48, 65, 43, true);
	var bulbizarre = createPokemon("bulbizarre", 45, 49, 46, 49, false);
	var pikachu = createPokemon("pikachu", 35, 55, 40, 90, false);
	
	var music;
	
	music = new Audio("./music/Pokemon Red & Blue - Opening.mp3");
	
	music.addEventListener('ended', function() {
		
		this.currentTime = 0;
		
		this.play();
		
	}, false);
		
	music.play();
	
	setTimeout(function () {
		
		$("#pokeballLoader").fadeOut();
		
        $("#selectDiv").fadeIn();	
		
    }, 4500);
	
	
	$("#launchFight").click(function(e){
		
		$("#selectDiv").hide();
		
        $("#combatDiv").fadeIn();
		
		music.pause();
		music.currentTime = 0;
		
		music = new Audio("./music/Pokemon Red & Blue - VS Wild Theme (Extended).mp3");
	
		music.addEventListener('ended', function() {
		
			this.currentTime = 0;
		
			this.play();
		
		}, false);
		
		music.play();
		
		setTimeout(function () {
		
			$("#enterCombatAnnimation").hide();
			
			$("#arena").fadeIn();
			$("#fighter").fadeIn();
			
			versus(salameche, bulbizarre);
		
		}, 2777);
	});
	
	function setVilainData(pokemon){
	
		$("#vilainName").text(pokemon.name);
		
		$('#vilainLPBar').css('width', '100%').attr('aria-valuenow', '100');
		
		$("#vilainLifePoint").text(pokemon.PointDeVieMax+" / "+pokemon.PointDeVieMax+" PV");
		
		$("#vilainImage").attr('src', './img/hero/'+pokemon.name+'.gif');
	}
	
	function setHeroData(pokemon){
	
		$("#heroName").text(pokemon.name);
		
		$('#heroLPBar').css('width', '100%').attr('aria-valuenow', '100');
		
		$("#heroLifePoint").text(pokemon.PointDeVieMax+" / "+pokemon.PointDeVieMax+" PV");	
		
		$("#heroImage").attr('src', './img/hero/'+pokemon.name+'.gif');	
	}
	
	function updateVilainLife(actualLifePoint, maxLifePoint){
		
		var pourcentage = parseInt( (actualLifePoint * 100) / maxLifePoint );

		$('#vilainLPBar').css('width', pourcentage+'%').attr('aria-valuenow', pourcentage);    
	
		$("#vilainLifePoint").text(actualLifePoint+" / "+maxLifePoint+" PV");
	}
	
	function updateHeroLife(actualLifePoint, maxLifePoint){
		
		var pourcentage = parseInt( (actualLifePoint * 100) / maxLifePoint );
		
		var barColor = 'bg-success';

		if(pourcentage>=33 && pourcentage<66){
			
			barColor = 'bg-warning';
		}
		else if(pourcentage<33){
		
			barColor = 'bg-danger';
		}
		
		$("#heroLPBar").removeClass("bg-success");
		$("#heroLPBar").removeClass("bg-warning");
		$("#heroLPBar").removeClass("bg-danger");
		
		$('#heroLPBar').css('width', pourcentage+'%').attr('aria-valuenow', pourcentage);	
		
		$("#heroLPBar").addClass(barColor);
		
		$("#heroLifePoint").text(actualLifePoint+" / "+maxLifePoint+" PV");
	}
	
	function logAction(log){
		
		$("#fightLog").attr('disabled', false).focus();
		
		$("#fightLog").append(log+"\n");
	}
	
	function vilainAttackedAnimation(){
	
		$('#vilainRow').animate(
			{ 
		 	  'margin-right': '-30px'
			},
			50,
			'swing'
		);
		
		$('#vilainRow').animate(
			{
			  'margin-right': '30px'
			},
			50,
			'swing'
		);
		
		$('#vilainRow').animate(
			{
			  'margin-right': '0px'
			},
			50,
			'swing'
		);
	}
	
	function heroAttackedAnimation(){
	
		$('#heroRow').animate(
			{ 
		 	  'margin-right': '-30px'
			},
			50,
			'swing'
		);
		
		$('#heroRow').animate(
			{
			  'margin-right': '30px'
			},
			50,
			'swing'
		);
		
		$('#heroRow').animate(
			{
			  'margin-right': '0px'
			},
			50,
			'swing'
		);
	}
	
	function victory(){
	
		music.pause();
		music.currentTime = 0;
	
		music = new Audio("./music/Pokemon Red & Blue - Victory Theme (Extended).mp3");
	
		music.addEventListener('ended', function() {
		
			this.currentTime = 0;
		
			this.play();
		
		}, false);
		
		music.play();
	}	
});