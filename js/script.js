let m__arr = [1,2,3,4,5,6,7,8,9];
const p__el = document.querySelector("#sh__container");

for(var k = 0; k<m__arr.length; k++){
  p__el.innerHTML += '<div class="myCard" index='+ m__arr[k]+'>'+ m__arr[k] + '</div>';
}

const Shuffle__bl = () =>{
  let c__el = document.querySelectorAll(".myCard");
  c__el = Array.prototype.slice.call(c__el);
 while (c__el.length) {
  p__el.append(c__el.splice(Math.floor(Math.random() * c__el.length), 1)[0]);
  }
}

const Sort__bl = () => {
  let c__el = document.querySelectorAll(".myCard");
  let arr_ls =[];
  for(var i = 0; i<c__el.length ; i++){
    arr_ls.push(c__el[i].innerHTML);
  }
  arr_ls.sort();

  for(var j = 0; j<c__el.length ; j++){
    c__el[j].innerHTML = arr_ls[j];
    c__el[j].attributes.index.value = arr_ls[j];
  }
}
const sh_btn = document.querySelector(".shuffleButton");
sh_btn.addEventListener("click", Shuffle__bl, false);

const srt_btn = document.querySelector(".sortButton");
srt_btn.addEventListener("click", Sort__bl, false);
