//1
  // class Clock {
  //   constructor(time,Date) {
  //     this._time = time;
  //     this.date = Date;
  //       }
  //       showTime (){
  //        console.log( `${this._time}`);
  //       }
  //       static convertTime (...args){
  //           let x = args.join('');
  //           let mss = new Date(+x);
  //           return mss.toLocaleString();
  //
  //         }
  //       }
  //
  //       class Timer extends Clock{
  //         constructor() {
  //           this.interval = interval;
  //         }
  //
  //         countTime (){}
  //       }
  //
  //       let presentTime = new Clock ("23:00");
  //       console.log(presentTime.showTime());
  //
  //
  //       console.log(Timer.convertTime(111111));
      // console.log(Clock.convertTime(111111));
    //1294862756115
//2
// let ul = document.createElement('ul');
//    console.log (ul);
//
//    while (true) {
//      let text = prompt("Введите текст для пункта списка", "");
//
//      if (!text) {
//        break;
//      }
//
//      let li = document.createElement('li');
//      li.appendChild(document.createTextNode(text));
//      ul.appendChild(li);}
