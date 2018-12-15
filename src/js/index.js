document.addEventListener('DOMContentLoaded',function(){
    //管理类目：选中父类目，跳出子类目;
    var listname=document.getElementsByClassName('cms_list_name');
    var listchild=document.getElementsByClassName('cms_list_child');
    var bl=document.getElementsByClassName('bl');
    //初始化
    listchild[0].classList.remove('hide');
    bl[0].classList.add('blue');
    for(var i=0;i<listname.length;i++){
        listname[i].setAttribute('idx',i);
        listname[i].onclick=function(){
            for(var j=0;j<listname.length;j++){
                listchild[j].classList.add('hide');
            }
            // console.log(this.getAttribute('idx'));
            listchild[this.getAttribute('idx')].classList.remove('hide');
        }
    }

    //今日，昨日，近7天，本月
    var orbtn=document.getElementsByClassName("or_btn");
    //初始化
    orbtn[0].classList.add('br');
    for(var i=0;i<orbtn.length;i++){
        orbtn[i].onclick=function(){
            for(var j=0;j<orbtn.length;j++){
                orbtn[j].classList.remove('br');
            }
            this.classList.add('br');
        }
    }
})