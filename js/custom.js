$(function() {

	/* On scroll - Add white background to navbar */
	window.addEventListener('scroll',function(e) {    
	    calculateScroll(this);
	});
	function calculateScroll(thisScroll) {
		var windowWidth = window.innerWidth;		

		if(thisScroll.pageYOffset > 50) {
	    	$('#c-customNavbar').addClass('c-pageScrolled');
	    }
	    else {
	    	$('#c-customNavbar').removeClass('c-pageScrolled');
	    }
	}
	// Also call on page load
	calculateScroll(window);	


	/* On menu toggle - Add Remove HTML for modal-backdrop */
	$(document).on('click', '.navbar-toggle', function() {
		var menuHeight = $('#c-mainMenu').height();
		if(menuHeight > 0) {
			// means already open menu
			$('body').find('.c-menuModalBackdrop').remove();
		}
		else {
			// means already closed menu
			$('body').append('<div class="modal-backdrop fade in c-menuModalBackdrop"></div>');
		}
	});


	/* Scroll To Div */
	$('.c-scrollTo').click(function() {
		var scrollToId = $(this).attr('data-scroll-to');
		$('html, body').animate({
            scrollTop: $(scrollToId).offset().top
        }, 1000);
	});


	/****** Questions Answer *******/
	/* Checkboxes */
	$('body').on('click', '.c-selectAnswer', function() {
		$(this).parent('.c-checkboxes').find('.c-selectAnswer').removeClass('c-selected');
		$(this).toggleClass('c-selected');

		var thisInput = $(this).attr('data-target-input');
		var thisAnswer = $(this).attr('data-target-answer');

		$('input[name='+thisInput+']').val(thisAnswer);

		checkIfAllQuestionsAnswered();
	});
	/* Answer Input Blur Event */
	$('body').on('blur', '.c-inputAnswer .c-customInput', function() {
		checkIfAllQuestionsAnswered();
	});
	// check if all questions answered and remove disable class from submit button.	
	function checkIfAllQuestionsAnswered() {
		var msgObj = [];
		var msgArr = {};

		var txtUserName = $('input[name="c-txtUserName"]').val();
		var txtHomeLocation = $('input[name="c-txtHomeLocation"]').val();
		var txtFamilyMembers = $('input[name="c-txtFamilyMembers"]').val();
		var txtHouseType = $('input[name="c-txtHouseType"]').val();
		var txtAcHours = $('input[name="c-txtAcHours"]').val();
		var txtOfficeLocation = $('input[name="c-txtOfficeLocation"]').val();
		var txtTransportType = $('input[name="c-txtTransportType"]').val();

		if(txtUserName == '') {
			msgArr['message'] = 'Answer first question.';
			$('#c-submitAnswersBtn').attr('disabled', 'disabled').attr('title', 'Answer first question.');
		}
		else if(txtHomeLocation == '') {
			msgArr['message'] = 'Answer second question.';
			$('#c-submitAnswersBtn').attr('disabled', 'disabled').attr('title', 'Answer second question.');
		}
		else if(txtFamilyMembers == '') {
			msgArr['message'] = 'Answer third question.';
			$('#c-submitAnswersBtn').attr('disabled', 'disabled').attr('title', 'Answer third question.');
		}
		else if(txtHouseType == '') {
			msgArr['message'] = 'Answer fourth question.';
			$('#c-submitAnswersBtn').attr('disabled', 'disabled').attr('title', 'Answer fourth question.');
		}
		else if(txtAcHours == '') {
			msgArr['message'] = 'Answer fifth question.';
			$('#c-submitAnswersBtn').attr('disabled', 'disabled').attr('title', 'Answer fifth question.');
		}
		else if(txtOfficeLocation == '') {
			msgArr['message'] = 'Answer sixth question.';
			$('#c-submitAnswersBtn').attr('disabled', 'disabled').attr('title', 'Answer sixth question.');
		}
		else if(txtTransportType == '') {
			msgArr['message'] = 'Answer seventh question.';
			$('#c-submitAnswersBtn').attr('disabled', 'disabled').attr('title', 'Answer seventh question.');
		}
		else {
			msgArr['message'] = 'Success. All questions answered.';

			$('#c-submitAnswersBtn').removeAttr('disabled');
			$('#c-submitAnswersBtn').attr('title', 'Click to submit data and know suggestions from us.');
		}
		msgObj.push(msgArr);
	}
	// Reset questions after close modal
	$('body').on('click', '.c-closeModalAnswers', function() {
		$('.c-questionsForm')[0].reset();

		$('#c-submitAnswersBtn').attr('disabled', 'disabled');
		$('#c-submitAnswersBtn').attr('title', 'Answer all the questions first.');
		$('.c-selectAnswer').removeClass('c-selected');
	});


});
/* END Document Ready */