function AddDataControl(key,values){
    array_data_control.set(key,values);
    Verification();
}


function RenderTab(render_list0,render_list1) {
    const renderStep = document.getElementById('render');
    listOrder();
    let total = 0;
    if(array_data_resume.size == 0){
        render_list0.innerHTML = "";
        const pText = document.createElement('p');
        pText.setAttribute('class','atMoment');
        pText.innerText = upTextFirst(translate('notOrder'));
        render_list0.append(pText);
    }else{
        render_list0.innerHTML = "";
        const totalText = document.createElement('p');
        const table0 = document.createElement('table');
        if(document.getElementsByName('table').length == 0){
            const tableScroll = document.createElement('div');
            const trHead = document.createElement('tr');
            const thHead0 = document.createElement('th');
            const thHead1 = document.createElement('th');
            const thHead2 = document.createElement('th');
            const thHead3 = document.createElement('th');

            thHead0.innerText = ' ';
            thHead1.innerText = upTextFirst(translate('description'));
            thHead2.innerText = upTextFirst(translate('priceUnit'));
            thHead3.innerText = upTextFirst(translate('modifAndSupp'));
            tableScroll.setAttribute('class','tableScroll');
            trHead.append(thHead0);
            trHead.append(thHead1);
            trHead.append(thHead2);
            trHead.append(thHead3);

            table0.append(trHead);


            tableScroll.append(table0);
            render_list0.append(tableScroll);
        }
        array_data_order.forEach((value, key) => {
            totalText.innerHTML = array_data_order.get(key).get('TOTAL');;
        });
        for (let i = 0; i < array_data_resume.size; i++){
            const trHead0 = document.createElement('tr');
            trHead0.setAttribute('id','table-item-'+i);
            const tdHead0 = document.createElement('td');
            const tdHead1 = document.createElement('td');
            const tdHead2 = document.createElement('td');
            const tdHead3 = document.createElement('td');
            tdHead0.innerHTML = i + 1;
            tdHead1.append(array_data_resume.get(i).get('DESCRIPTION'));
            tdHead2.innerText = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(array_data_resume.get(i).get('PRICE')/100);
            const buttonCopy = document.createElement('button');
            buttonCopy.innerHTML = upTextFirst(translate('copy'));
            buttonCopy.setAttribute('onclick','copyLine('+i+')');
            const buttonDelete = document.createElement('button');
            buttonDelete.innerHTML = upTextFirst(translate('delete'));
            buttonDelete.setAttribute('onclick','deleteLine('+i+')');
            tdHead3.append(buttonCopy);
            tdHead3.append(buttonDelete);
            trHead0.append(tdHead0);
            trHead0.append(tdHead1);
            trHead0.append(tdHead2);
            trHead0.append(tdHead3);
            table0.append(trHead0);
            totalText.innerHTML = 'Total : ' +  new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(calculateTotalFinal()/100);
            render_list0.prepend(totalText);



        }
        // OTHER BOUTON
        const buttonContainer = document.createElement('p');

        const buttonNext = document.createElement('button');
        buttonNext.innerText = upTextFirst(translate('next'));
        buttonNext.setAttribute('id','buttonNext');
        buttonNext.style.cursor = "pointer";
        buttonNext.setAttribute('onclick','StepBuild("5")');
        buttonContainer.append(buttonNext);


        const buttonBefore = document.createElement('button');
        buttonBefore.innerText = upTextFirst(translate('previous'));
        buttonBefore.setAttribute('id','buttonBefore');
        buttonBefore.style.cursor = "pointer";
        buttonBefore.setAttribute('onclick','StepBuild("3",true)');
        buttonContainer.append(buttonBefore);


        render_list0.append(buttonContainer);
    }


    if(array_data_order.size == 0){
        render_list1.innerHTML = "";
        const pText = document.createElement('p');
        pText.setAttribute('class','atMoment');
        pText.innerText = upTextFirst(translate('notOrder'));
        render_list1.append(pText);
    }else{
        render_list1.innerHTML = "";

        const table = document.createElement('table');
        const totalText = document.createElement('p');
        const trHead = document.createElement('tr');
        const thHead0 = document.createElement('th');
        const thHead1 = document.createElement('th');
        const thHead2 = document.createElement('th');
        const thHead3 = document.createElement('th');


        thHead0.innerText = upTextFirst(translate('description'));
        thHead1.innerText = upTextFirst(translate('priceUnit'));
        thHead2.innerText = upTextFirst(translate('quantity'));
        thHead3.innerText = upTextFirst(translate('titlePrice'));

        trHead.append(thHead0);
        trHead.append(thHead1);
        trHead.append(thHead2);
        trHead.append(thHead3);

        table.append(trHead);

        array_data_order.forEach((value, key) => {
            const row = document.createElement('tr');
            const data0 = document.createElement('td');
            const data1 = document.createElement('td');
            const data2 = document.createElement('td');
            const data3 = document.createElement('td');

            data0.innerHTML = config_order_element.get(key).get('NAME');
            data1.innerHTML = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(array_data_order.get(key).get('PRICEFORUNIT')/100);
            data2.innerHTML = array_data_order.get(key).get('QUANTITY');
            data3.innerHTML = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(array_data_order.get(key).get('PRICETOTAL')/100);
            row.append(data0);
            row.append(data1);
            row.append(data2);
            row.append(data3);
            table.append(row);
            totalText.innerHTML = 'Total : ' +  new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(calculateTotalFinal()/100);;
        });
        render_list1.append(totalText);
        render_list1.append(table);
        // OTHER BOUTON
        const buttonContainer = document.createElement('p');

        const buttonNext = document.createElement('button');
        buttonNext.innerText = upTextFirst(translate('next'));
        buttonNext.setAttribute('id','buttonNext');
        buttonNext.style.cursor = "pointer";
        buttonNext.setAttribute('onclick','StepBuild("5")');
        buttonContainer.append(buttonNext);


        const buttonBefore = document.createElement('button');
        buttonBefore.innerText = upTextFirst(translate('previous'));
        buttonBefore.setAttribute('id','buttonBefore');
        buttonBefore.style.cursor = "pointer";
        buttonBefore.setAttribute('onclick','StepBuild("3",true)');
        buttonContainer.append(buttonBefore);

        render_list1.append(buttonContainer);
    }
    totalCount =0;


}

let total = [];

function listOrder(){
    array_data_order = new Map();
    // LISTE DE BASE
    let arrayOrderSort = [];

    for (let i = 0; i <array_data_resume.size;i++){
        arrayOrderSort.push(array_data_resume.get(i).get('KEY'));
    }
    var test_with_index = [];
    for (var i in arrayOrderSort) {
        test_with_index.push([arrayOrderSort[i], i]);
    }
    test_with_index.sort(function(left, right) {
        return left[0] < right[0] ? -1 : 1;
    });
    var indexes = [];
    arrayOrderSort = [];
    for (var j in test_with_index) {
        arrayOrderSort.push(test_with_index[j][0]);
        indexes.push(test_with_index[j][1]);
    }
    var arrayCount = [];
    for (let i = 0; i <arrayOrderSort.length;i++) {
        arrayCount.push(arrayOrderSort.filter(x => x === arrayOrderSort[i]).length);
    }
    let tag = "";


    for (let i = 0; i <indexes.length;i++) {
        let quantity = arrayCount[i];
        let arrayPrice = config_order_element.get(arrayOrderSort[i]).get('PRICE');
        let arrayDescription = config_order_element.get(arrayOrderSort[i]).get('DESCRIPTION');
        let infos = new Map();

        infos.set('PRICEFORUNIT',(arrayPrice));
        infos.set('QUANTITY',quantity);
        infos.set('PRICETOTAL', arrayPrice*quantity);
        infos.set('DESCRIPTION',arrayDescription);

        if(i == (indexes.length-1)){
            totalprice =  arrayPrice*quantity;
            total.push(totalprice);

        }
        array_data_order.set(arrayOrderSort[i],infos);
    }


}

function calculateTotalFinal (){
    let calculate = [];
    array_data_order.forEach((value, key) => {
        calculate.push(value.get('PRICETOTAL'));
    });
    return calculate.reduce((partialSum, a) => partialSum + a, 0);
}



function addLine(){
    const tagData = array_data_control.get('editable-product');
    const render_list0  = document.getElementById("tab1");
    const render_list1  = document.getElementById("tab2");
    const config = config_order_element.get(tagData);
    const newArray = new Map();
    newArray.set('DESCRIPTION',config.get('NAME'));
    newArray.set('PRICE',config.get('PRICE'));
    newArray.set('KEY',config.get('DESCRIPTION'));
    array_data_resume.set('-1',newArray);
    array_data_resume = mapChange(array_data_resume);
    RenderTab(render_list0,render_list1);
}

function changeValue(data){
    array_data_control.set('editable-product',data);
}


// Order Maps Change
function mapChange(mapTest){
    const test = mapTest.entries();
    const array = [];
    for (let i = 0; i < mapTest.size;i++)
    {
        array.push(test.next().value);
    }
    const mapNew = new Map();
    for (let i =0;i < array.length; i ++){
        mapNew.set(i,array[i][1]);
    }
    return mapNew;
}
function copyLine(number){
    let maps = new Map();
    maps = array_data_resume.get(number);
    array_data_resume.set('-1',maps);
    array_data_resume = mapChange(array_data_resume);
    const render_list0  = document.getElementById("tab1");
    const render_list1  = document.getElementById("tab2");
    RenderTab(render_list0,render_list1);
}
function deleteLine(number) {
    array_data_resume.delete(number);
    array_data_resume = mapChange(array_data_resume);
    const render_list0  = document.getElementById("tab1");
    const render_list1  = document.getElementById("tab2");
    RenderTab(render_list0,render_list1);
}