const dataURL = "https://api.myjson.com/bins/jcmhn";

function handleButton() {
// API не работает
};

		
function handleData() {

    let var1 = $('input[name="var1"]').val();
    let var2 = $('input[name="var2"]').val();
    let var3 = $('input[name="var3"]').val();
    let var4 = $('input[name="var4"]').val();
    let var5 = $('input[name="var5"]').val();
    let var6 = $('input[name="var6"]').val();
    let var7 = $('input[name="var7"]').val();
    let speach = $('input[name="speach"]').val();
    console.log(var1);

  	let text = `<p>"Жили-были ${var1} да ${var2}","Была у них ${var3}","Снесла ${var3} ${var4}, не простое - золотое",
	  "- ${var1} бил, бил - не разбил","- ${var2} била, била - не разбила","${var5} бежала, ${var6} задела, ${var4} упало и разбилось."
	  ,"${var1} плачет, ${var2} плачет, а ${var3} кудахчет:","${speach}"</p>`;
		
	const $text = $(text)
	$("#result").html(text);
};

function init() {
	handleData();
	$("#button-fetch").click(handleData);
}

$(document).ready(init);



