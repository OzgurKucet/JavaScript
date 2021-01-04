

const now = new Date(); // şuanki zamanı..
const date1 = new Date("10-8-1998 01:15:00");
const date2 = new Date("September 19 1993");
const date3 = new Date("9/19/1993");


console.log(date1);
console.log(date2);
console.log(date3);
console.log(now);

console.log(date1.getMonth());/*0 dan başlayarak yazar o yüzden 9*/
console.log((date1.getDay()));/*pazar 0 pazartesi 1 salı 2*/
console.log(date1.getDate());/*Hangi gün.*/
console.log(date1.getHours());/*getMinutes hetSeconds getMilliseconds*/

date2.setMonth(10);/*ekim değil kasım ayı bu 0 dan itibaren sayıyor*/
console.log(date2.getMonth());


/*Karşılaştırma Operatörleri*/
/*
*  ==   2 == "2" true verir.
*  ===  2 == "2" false verir.
*  !==
*   &&    and mantıksal bağlaç.
*   ||    or
*
*
* */


const process = 1;

switch (process) {
    case 1:
        console.log("İslem1");
        break;
    case 2:
        console.log("islem2");
        break;
    default:
        console.log("geçersiz");
        //break; kullanmaya gerek yok sonuncu çünkü
}
