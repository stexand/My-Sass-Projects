let tabButtons, tabPanels;

tabButtons= document.querySelectorAll('.tabContainer .buttonContainer button');

tabPanels = document.querySelectorAll(' .tabContainer .tabPanel')

function showPanel(panelIndex) {
	

	tabButtons.forEach(function(node){
		node.style.backgroundColor = "";
		node.style.color = "";
		node.style.borderTop = "none"
	});


	tabButtons[panelIndex].style.backgroundColor = "#fff";
	tabButtons[panelIndex].style.color = "#029";
	tabButtons[panelIndex].style.borderTop = "5px solid #38BDFF";


	tabPanels.forEach(function(node){
		node.style.display= "none";
	});


	tabPanels[panelIndex].style.display = "block";
	tabPanels[panelIndex].style.backgroundColor = "#fff";
	
}

showPanel(0);