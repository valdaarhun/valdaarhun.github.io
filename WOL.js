const langList = document.querySelectorAll(".langs");
const langListContent = document.querySelectorAll(".langContent");

langListContent[0].style.display = "initial";

const change = (curLang) => {
	langListContent.forEach((lang) => {
		if (lang.getAttribute("value") === curLang){
			lang.style.display = "initial";
		}
		else{
			lang.style.display = "none";
		}
	})
}

langList.forEach((lang) => {
	lang.addEventListener("click", (event) => {
		langList.forEach((testLang) => {
			if (testLang.getAttribute("value") === lang.getAttribute("value")){
				testLang.style.color = "#FF4D00";
			}
			else{
				testLang.style.color = "black";
			}
		})
		change(event.target.getAttribute("value"));
	})
})