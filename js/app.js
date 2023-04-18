const $hora = document.querySelector('.hora');
const $formato = document.querySelector('.formato');
const $dia = document.querySelector('.dia');
const $diaLetras = document.querySelector('.diaLetras');
const $mes = document.querySelector('.mes');
const $anio = document.querySelector('.anio');

function queDiaEsHoy(numero) {
	switch (numero) {
		case 0:
			return 'Domingo'
		case 1:
			return 'Lunes'
		case 2:
			return 'Martes'
		case 3:
			return 'Miercoles'
		case 4:
			return 'Jueves'
		case 5:
			return 'Viernes'
		case 6:
			return 'Sabado'
	};
};

function queMesEsHoy(numero) {
	switch (numero) {
		case 0:
			return 'Enero'
		case 1:
			return 'Febrero'
		case 2:
			return 'Marzo'
		case 3:
			return 'Abril'
		case 4:
			return 'Mayo'
		case 5:
			return 'Junio'
		case 6:
			return 'Julio'
		case 7:
			return 'Agosto'
		case 8:
			return 'Septiembre'
		case 9:
			return 'Octubre'
		case 10:
			return 'Noviembre'
		case 11:
			return 'Diciembre'
	};
};

function escribirFecha() {
	$dia.innerText = hoyEs.getDate();
	$diaLetras.innerText = queDiaEsHoy(hoyEs.getDay());
	$mes.innerText = queMesEsHoy(hoyEs.getMonth());
	$anio.innerText = hoyEs.getFullYear();
};

function queHoraEs() {
	const fecha = new Date;

	let hora = fecha.getHours();
	let minutos = fecha.getMinutes();
	let segundos = fecha.getSeconds();
	let amOPm;

	(hora >= 12) 
		? amOPm = 'PM'
		: amOPm = 'AM'

	hora = (hora < 10) 
		? '0' + hora 
		: (hora > 12 && hora < 22)
			? hora = '0' + (hora - 12)
			: hora;

	minutos = (minutos < 10)? '0' + minutos : minutos;
	segundos = (segundos < 10) ? '0' + segundos : segundos;

	$hora.innerText = `${hora} : ${minutos} : ${segundos}`;
	$formato.innerText = `${amOPm}`
};

const hoyEs = new Date;

setInterval(queHoraEs, 1000);
setInterval(escribirFecha, 1000);