function ExecuteScript(strId)
{
  switch (strId)
  {
      case "614OPSw4f3X":
        Script1();
        break;
      case "61UShIp2uq0":
        Script2();
        break;
      case "5xnq4sJ4osF":
        Script3();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  player.once(() => {
const target = object('5aRdNmzRdz9');
const duration = 1250;
const easing = 'ease-out';
const id = '5jTJbF2njKm';
const pulseAmount = 0.03;
const delay = 3000;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  player.once(() => {
const target = object('60N4FNlzFI3');
const duration = 1250;
const easing = 'ease-out';
const id = '5yAgoMLSwrr';
const pulseAmount = 0.03;
const delay = 3000;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script3 = function()
{
  player.once(() => {
const target = object('5wz89gdi0ly');
const duration = 1250;
const easing = 'ease-out';
const id = '6r67CnVRwI6';
const pulseAmount = 0.03;
const delay = 3000;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
