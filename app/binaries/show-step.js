
function AddStep() {
    const render = document.createElement('div');
    render.setAttribute('id','render');
    document.body.prepend(render);
}

function DeleteStep() {
    Reset();
}
function changeTab(number){
    if(number == 0){
        const unitGroup0 =  document.getElementById('unitGroup');
        unitGroup0.setAttribute('class','btn-onglet unitGroupActive');
        const multipleGroup0 =  document.getElementById('multipleGroup');
        multipleGroup0.setAttribute('class','btn-onglet multipleGroupDesactive');

         const hiddentab1 =  document.getElementById('tab1');
         const hiddentab2 =  document.getElementById('tab2');
         hiddentab1.style.display = 'block';
         hiddentab2.style.display = 'none';

    }
    if(number == 1){

        const unitGroup1 =  document.getElementById('unitGroup');
        unitGroup1.setAttribute('class','btn-onglet unitGroupDesactive');
        const multipleGroup1 =  document.getElementById('multipleGroup');
        multipleGroup1.setAttribute('class','btn-onglet multipleGroupActive');


         const hiddentab1 =  document.getElementById('tab1');
         const hiddentab2 =  document.getElementById('tab2');
         hiddentab1.style.display = 'none';
         hiddentab2.style.display = 'block';
    }
}
