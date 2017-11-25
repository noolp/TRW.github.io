function i(a){ //получение id
	return document.getElementById(a);
}


function rename($,$$){ //принимает кол-во символов и язык (true - rus / false - eng)
	var name = [];
	if($$ == 1){
		let rus = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'к', 'л', 
		'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ы', 'ь', 'э', 'ю', 'я'];//0-30 (нету й, ъ)

		let song = ['а', 'б', 'е', 'ё', 'и', 'о', 'у', 'ь', 'э', 'ю', 'я']; //0 - 10


		for(let i = 0; i < $; i++){
			if(i == 0){
				name.push(rus[Math.round(Math.random()*30)].toUpperCase());
			} else {
				name.push(rus[Math.round(Math.random()*30)]);
			}
		}
		let f = Math.round(Math.random()*$);
		if (f = $){
			f--;
		}
		name[f] = song[Math.round(Math.random()*10)];;

		return name.join(''); //возвращает строку без пробелов

	} else {
		let eng = ['a','b','c','d','e','f','g','h','i','j','k',
		'l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']; //0-25

		let song = ['a','e','i','o','q','u','y']; //0-6

		for(let i = 0; i < $; i++){
			if(i == 0){
				name.push(eng[Math.round(Math.random()*25)].toUpperCase());
			} else {
				name.push(eng[Math.round(Math.random()*25)]);
			}
		}
		let f = Math.round(Math.random()*$);
		if (f = $){
			f--;
		}
		name[f] = song[Math.round(Math.random()*6)];
		return name.join(''); //возвращает строку без пробелов
	}

}


//1-10 букв - 2 языка

var how_much = 5;
var what = 0; //0 eng - 1 rus


var l_eng = i("l_eng");
var l_rus = i("l_rus");
var but = i('but');
var how = i('how');
var logo = i('logo');

l_eng.style.background = "#fff54b";


function up_down(a){

	if(a && how_much < 10){
		how_much++;
		how.innerHTML = `${how_much} букв`;
		dothis();
	} else if(a == false && how_much > 1){
		how_much--;
		how.innerHTML = `${how_much} букв`;
		dothis();
	}

}

function regres(a){
	if(a){ //переход на рус
		what = 1;
		l_rus.style.background = "#fff54b";
		l_eng.style.background = "";
		dothis();
		logo.innerHTML = "Генератор Барабанщины";
	} else if(a == false){ //переход на eng
		what = 0;
		l_rus.style.background = "";
		l_eng.style.background = "#fff54b";
		dothis();
		logo.innerHTML = "The Random Word";
	}

}





function dothis(){
	but.innerHTML = rename(how_much,what);
}

