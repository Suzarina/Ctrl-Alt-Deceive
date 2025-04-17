function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5a12wyjzqQV":
        Script1();
        break;
      case "69sq9NUb6B8":
        Script2();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('6QLa7LwEbyi');
const duration = 750;
const easing = 'ease-out';
const id = '6iemyTxsaRn';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('6QLa7LwEbyi');
const duration = 750;
const easing = 'ease-out';
const id = '66DVml69ECV';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
