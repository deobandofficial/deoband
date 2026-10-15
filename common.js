/* Shared bits for the Deo Band minigames: theme, login token, leaderboard calls. */
(function(){
var SB_URL='https://amxvngubbsuizstdvfnz.supabase.co',SB_KEY='sb_publishable_d2sxmU-ESRJS6iY6GwtDLA_g880Z_Py';
var t='dark';try{t=localStorage.getItem('bandTheme')||'dark'}catch(e){}
document.documentElement.setAttribute('data-theme',t);
function token(){try{return localStorage.getItem('bandToken')}catch(e){return null}}
async function rpc(fn,args){
  var ac=new AbortController(),to=setTimeout(function(){ac.abort()},12000),r;
  try{r=await fetch(SB_URL+'/rest/v1/rpc/'+fn,{method:'POST',signal:ac.signal,headers:{'Content-Type':'application/json',apikey:SB_KEY},body:JSON.stringify(args||{})})}
  catch(e){throw new Error('Could not reach the leaderboard.')}finally{clearTimeout(to)}
  var j=await r.json().catch(function(){return null});
  if(!r.ok)throw new Error((j&&j.message)||'Leaderboard request failed.');
  return j;
}
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]})}
window.G={
  token:token,
  loggedIn:function(){return !!token()},
  esc:esc,
  submit:function(game,score,extra){if(!token())return Promise.reject(new Error('Log in on the band site first.'));return rpc('game_submit',{p_token:token(),p_game:game,p_score:Math.round(score),p_extra:extra||{}})},
  top:function(game){return rpc('game_top',{p_token:token(),p_game:game,p_limit:10})},
  best:function(game){try{return +localStorage.getItem('gameBest:'+game)||0}catch(e){return 0}},
  saveBest:function(game,s){try{if(s>G.best(game))localStorage.setItem('gameBest:'+game,String(Math.round(s)))}catch(e){}},
  board:async function(el,game){
    if(!token()){el.innerHTML='<p class="mute">Log in on the band site to see the leaderboard and submit scores.</p>';return}
    el.innerHTML='<p class="mute">Loading…</p>';
    try{var rows=await G.top(game)||[];
      el.innerHTML=rows.length?'<table class="board">'+rows.map(function(r,i){return'<tr><td>'+(i+1)+'</td><td>'+esc(r.name)+'</td><td>'+Number(r.score).toLocaleString()+'</td></tr>'}).join('')+'</table>':'<p class="mute">No scores yet. Be the first.</p>'}
    catch(e){el.innerHTML='<p class="mute">Leaderboard isn\'t set up yet ('+esc(e.message)+'). Your best score is still saved on this device.</p>'}
  }
};
})();
