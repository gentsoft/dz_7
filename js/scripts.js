const diodLed = function(){

document.write ('Давайте пощитаем что нужно для запуска вашей светодиодной ленты.<br/>');
let ledOphins = {
    ledW : 120,
    ledL : 1,
    ledV : 12,
    setV : 220,
    ledI : 0,
    ledR : 0,
    resistorV : 0,
    resistorR : 0,
    resistorW : 0,
    coilTrans : 0
}

ledOphins.ledW = +prompt('введите мощность ленты (Ват/м)');
ledOphins.ledL = +prompt('введите длинну ленты (м)');
ledOphins.ledV = +prompt('введите рабочее напяжение ленты (V)');
ledOphins.setV = +prompt('введите рабочее напяжение сети=  (V)');

ledOphins.ledI = Math.ceil(ledOphins.ledW / ledOphins.ledV * ledOphins.ledL);
ledOphins.ledR = Math.ceil(ledOphins.ledV / ledOphins.ledI);
ledOphins.resistorV = Math.ceil(ledOphins.setV - ledOphins.ledV);
ledOphins.resistorR = Math.ceil(ledOphins.resistorV / ledOphins.ledI);
ledOphins.resistorW = Math.ceil(ledOphins.resistorV * ledOphins.ledI);
ledOphins.coilTrans = Math.ceil(ledOphins.setV / ledOphins.ledV);

document.write ('Введенная информация: <br/> Мощномть ленты (Ват/1м)',ledOphins.ledW,'<br/> напряжение ленты(V)',ledOphins.ledV,'<br/> длинна ленты(м)',ledOphins.ledL,'<br/> напряжение сети (v)',ledOphins.setV);
document.write ('<br/><br/>И так начнем: <br/><br/>');
document.write ('Вариант №1: <br/>');
document.write ('Резистор: ',ledOphins.resistorR,' Ом / ',ledOphins.resistorW,' Ват <br/>');
document.write ('Диодный мост на:',ledOphins.ledI,'А / ',ledOphins.setV,'V<br/>');
document.write ('Канденсатор:',ledOphins.setV,'V<br/><br/>');
document.write ('Вариант №2: <br/>');
document.write ('Катушка с трансфолмациеей:',ledOphins.coilTrans,' / 1  на ',ledOphins.ledI,'А / ',ledOphins.setV,'V<br/>');
document.write ('Диодный мост на:',ledOphins.ledI,'А / ',ledOphins.setV,'V<br/>');
document.write ('Канденсатор:',ledOphins.ledV,'V<br/><br/>');
document.write ('Заметим второй вариант работает стабильнее, и мотребляет в 2раза меньше.');

console.log(ledOphins)
}

diodLed();