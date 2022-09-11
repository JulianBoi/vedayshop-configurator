function Reset() {
    if(document.getElementById('render')){
        document.getElementById('render').remove();
        const render = document.createElement('div');
        render.setAttribute('id','render');
        document.getElementById('module-main').append(render);
    }else{
        const render = document.createElement('render');
    }
}