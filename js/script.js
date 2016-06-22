$(function(){

    var change = 0;
    $('#question1, #question2, #question3, #question4, #question5, #question6, #question7, #question8, #question9, #question10 ').hide();
    var reponses = $('#rep1, #rep2, #rep3, #rep4');



    if(change === 0){
		$('#question1').show()
		$('#rep1').html('5')
		$('#rep2').html('6')
		$('#rep3').html('7')
		$('#rep4').html('8')
    }

    $(reponses).on('click', function(event){
    	
	var clic = $(event.target);
	var choix1 = this.id;
		
	if(choix1 === 'rep3'){
            clic.addClass('vert');
    	}
    	else if(choix1 === 'rep1' || choix1 === 'rep2' || choix1 === 'rep4'){
            clic.addClass('rouge');
    	}

	change++;

	$('#next').on('click', function(){

        if(change === 1){				
			$('#question1').hide()
			$('#question2').show()
			$('#rep1').html('Brad Pitt')
			$('#rep2').html('Steve Jobs')
			$('#rep3').html('Ronald McDonald')
			$('#rep4').html('Alan Turing')

			clic.removeClass('vert')
			clic.removeClass('rouge')
			
        	$(reponses).on('click', function(event){
    	
				var clic = $(event.target);
				var choix2 = this.id;

				clic.removeClass('vert')
        		clic.removeClass('rouge')

				if( choix2 === 'rep4'){
    				clic.addClass('vert');
    			}
    			else if(choix2 === 'rep1' || choix2 === 'rep2' || choix2 === 'rep3'){
    				clic.addClass('rouge');
    			}
    		})
		}
		else if(change === 2){
			$('#question2').hide()
			$('#question3').show()
			$('#rep1').html('Jaune')
			$('#rep2').html('Blanc')
			$('#rep3').html('gris')
			$('#rep4').html('Noir')

			clic.removeClass('vert')
			clic.removeClass('rouge')
			
        	$(reponses).on('click', function(event){
    	
				var clic = $(event.target);
				var choix3 = this.id;

				clic.removeClass('vert')
        		clic.removeClass('rouge')

				if( choix3 === 'rep2'){
    				clic.addClass('vert');
    			}
    			else if(choix3 === 'rep1' || choix3 === 'rep3' || choix3 === 'rep4'){
    				clic.addClass('rouge');
    			}
    		})
		}
		else if(change === 3){
			$('#question3').hide()
			$('#question4').show()
			$('#rep1').html('Le père d\'Alexandre Dumas')
			$('#rep2').html('Alexandre Dumas')
			$('#rep3').html('Le fils d\'Alexandre Dumas')
			$('#rep4').html('Le neveu d\'Alexandre Dumas')


			clic.removeClass('vert')
			clic.removeClass('rouge')
			
        	$(reponses).on('click', function(event){
    	
				var clic = $(event.target);
				var choix4 = this.id;

				clic.removeClass('vert')
        		clic.removeClass('rouge')

				if( choix4 === 'rep3'){
    				clic.addClass('vert');
    			}
    			else if(choix4 === 'rep1' || choix4 === 'rep2' || choix4 === 'rep4'){
    				clic.addClass('rouge');
    			}
    		})
		}
		else if(change === 4){
			$('#question4').hide()
			$('#question5').show()
			$('#rep1').html('99')
			$('#rep2').html('100')
			$('#rep3').html('101')
			$('#rep4').html('102')

			clic.removeClass('vert')
			clic.removeClass('rouge')
			
        	$(reponses).on('click', function(event){
    	
				var clic = $(event.target);
				var choix5 = this.id;

				clic.removeClass('vert')
        		clic.removeClass('rouge')

				if( choix5 === 'rep3'){
    				clic.addClass('vert');
    			}
    			else if(choix5 === 'rep1' || choix5 === 'rep2' || choix5 === 'rep4'){
    				clic.addClass('rouge');
    			}
    		})
		}
		else if(change === 5){
			$('#question5').hide()
			$('#question6').show()
			$('#rep1').html('C')
			$('#rep2').html('C#')
			$('#rep3').html('JavaScript')
			$('#rep4').html('ActionScript')

			clic.removeClass('vert')
			clic.removeClass('rouge')
			
        	$(reponses).on('click', function(event){
    	
				var clic = $(event.target);
				var choix6 = this.id;

				clic.removeClass('vert')
        		clic.removeClass('rouge')

				if( choix6 === 'rep1'){
    				clic.addClass('vert');
    			}
    			else if(choix6 === 'rep2' || choix6 === 'rep3' || choix6 === 'rep4'){
    				clic.addClass('rouge');
    			}
    		})
		}
		else if(change === 6){
			$('#question6').hide()
			$('#question7').show()
			$('#rep1').html('20')
			$('#rep2').html('24')
			$('#rep3').html('28')
			$('#rep4').html('32')

			clic.removeClass('vert')
			clic.removeClass('rouge')
			
        	$(reponses).on('click', function(event){
    	
				var clic = $(event.target);
				var choix7 = this.id;

				clic.removeClass('vert')
        		clic.removeClass('rouge')

				if( choix7 === 'rep3'){
    				clic.addClass('vert');
    			}
    			else if(choix7 === 'rep1' || choix7 === 'rep2' || choix7 === 'rep4'){
    				clic.addClass('rouge');
    			}
    		})
		}
		else if(change === 7){
			$('#question7').hide()
			$('#question8').show()
			$('#rep1').html('Suède')
			$('#rep2').html('Norvège')
			$('#rep3').html('Danemark')
			$('#rep4').html('Finlande')

			clic.removeClass('vert')
			clic.removeClass('rouge')
			
        	$(reponses).on('click', function(event){
    	
				var clic = $(event.target);
				var choix8 = this.id;

				clic.removeClass('vert')
        		clic.removeClass('rouge')

				if( choix8 === 'rep2'){
    				clic.addClass('vert');
    			}
    			else if(choix8 === 'rep1' || choix8 === 'rep3' || choix8 === 'rep4'){
    				clic.addClass('rouge');
    			}
    		})
		}
		else if(change === 8){
			$('#question8').hide()
			$('#question9').show()
			$('#rep1').html('Jaune')
			$('#rep2').html('Vert')
			$('#rep3').html('violet')
			$('#rep4').html('Marron')

			clic.removeClass('vert')
			clic.removeClass('rouge')
			
        	$(reponses).on('click', function(event){
    	
				var clic = $(event.target);
				var choix9 = this.id;

				clic.removeClass('vert')
        		clic.removeClass('rouge')

				if( choix9 === 'rep4'){
    				clic.addClass('vert');
    			}
    			else if(choix9 === 'rep1' || choix9 === 'rep2' || choix9 === 'rep3'){
    				clic.addClass('rouge');
    			}
    		})
		}
		else if(change === 9){
			$('#question9').hide()
			$('#question10').show()
			$('#rep1').html('363')
			$('#rep2').html('364')
			$('#rep3').html('365')
			$('#rep4').html('366')

			clic.removeClass('vert')
			clic.removeClass('rouge')
			
        	$(reponses).on('click', function(event){
    	
				var clic = $(event.target);
				var choix10 = this.id;

				clic.removeClass('vert')
        		clic.removeClass('rouge')

				if( choix10 === 'rep4'){
    				clic.addClass('vert');
    			}
    			else if(choix10 === 'rep1' || choix10 === 'rep2' || choix10 === 'rep3'){
    				clic.addClass('rouge');
    			}
    		})
		};
	})

/*	$('#prev').on('click', function(){

		clic.removeClass('vert')
        clic.removeClass('rouge')

		if(change === 0){
			$('#question2').hide()
			$('#question1').show()
			$('#rep1').html('5')
			$('#rep2').html('6')
			$('#rep3').html('7')
			$('#rep4').html('8')
			change--;
			console.log(change);
		}
		else if(change === 1){	
			$('#question3').hide()
			$('#question2').show()
			$('#rep1').html('Brad Pitt')
			$('#rep2').html('Steve Jobs')
			$('#rep3').html('Ronald McDonald')
			$('#rep4').html('Alan Turing')
			change--;
		}
		else if(change === 2){
			$('#question4').hide()
			$('#question3').show()
			$('#rep1').html('Jaune')
			$('#rep2').html('Blanc')
			$('#rep3').html('Rouge')
			$('#rep4').html('Noir')
			change--;
		}
		else if(change === 3){
			$('#question5').hide()
			$('#question4').show()
			$('#rep1').html('Le père d\'Alexandre Dumas')
			$('#rep2').html('Alexandre Dumas')
			$('#rep3').html('Le fils d\'Alexandre Dumas')
			$('#rep4').html('Le neveu d\'Alexandre Dumas')
			change--;
		}
		else if(change === 4){
			$('#question6').hide()
			$('#question5').show()
			$('#rep1').html('99')
			$('#rep2').html('100')
			$('#rep3').html('101')
			$('#rep4').html('102')
			change--;
		}
		else if(change === 5){
			$('#question7').hide()
			$('#question6').show()
			$('#rep1').html('C')
			$('#rep2').html('C#')
			$('#rep3').html('JavaScript')
			change--;
		}
		else if(change === 6){
			$('#question8').hide()
			$('#question7').show()
			$('#rep4').html('Java')
			$('#rep1').html('20')
			$('#rep2').html('24')
			$('#rep3').html('28')
			$('#rep4').html('32')
			change--;
		}
		else if(change === 7){
			$('#question9').hide()
			$('#question8').show()
			$('#rep1').html('Suède')
			$('#rep2').html('Norvège')
			$('#rep3').html('Danemark')
			$('#rep4').html('Finlande')
			change--;
		}
		else if(change === 8){
			$('#question10').hide()
			$('#question9').show()
			$('#rep1').html('Jaune')
			$('#rep2').html('Vert')
			$('#rep3').html('violet')
			$('#rep4').html('Marron')
			change--;	
		}
	})*/

	 

})
});


///////

var question1 = {
	titre: "Combien de nains entourent Blanche Neige",
	reponses: [
		3, 4, 7, 9
	],
	bonneReponse: reponses[2],
	ReponsesUtilisateur []
	
};

var questions = [
	question1, question2
];

//// selectionner le premier élément du tableau questions et le mettre dans le html

/// Déclarer une variable qui stocle la question en cours (1)

/// Afficher titre de la question
///Afiicher les réponses de la question
/// Comparer le clic de la personne a la valeur "bonneReponse" de la question
/// Si bonne reponse, classe verte, sinon classe rouge

//Si clic sur suivant, 

/// Enregister dans un tableau la question et les réponses de l'utilisateur
/// remplacer question par element suivant du tableau Questions


