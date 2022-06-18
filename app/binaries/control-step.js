function AddDataControl(key,values){
    array_data_control.set(key,values);
    Verification();
}
function AddTableEditable(data){
    if(data == "resume"){
        const description = config_order_element.get('CABLE_4_PIN_EPS').get('DESCRIPTION');
        const name = config_order_element.get('CABLE_4_PIN_EPS').get('NAME');
        const price = config_order_element.get('CABLE_4_PIN_EPS').get('PRICE');
        const data = new Map();
        data.set('DESCRIPTION',description);
        data.set('NAME',name);
        data.set('PRICE',price);
        data.set('EDITABLE',true);
        array_data_resume.set(array_data_resume.size+1,data);
        const tab0 = document.getElementById('tab1');
        const tab1 = document.getElementById('tab2');
        tab0.remove();
        tab1.remove();
        const render_list_0 = document.createElement('div');
        render_list_0.setAttribute('class','boxList');
        render_list_0.setAttribute('id','tab1');
        const render_list_1 = document.createElement('div');
        render_list_1.setAttribute('class','boxList');
        render_list_1.setAttribute('id','tab2');
        const renderStep = document.getElementById('menu');
        RenderTab(render_list_0,render_list_1);
        renderStep.after(render_list_0);
        render_list_0.after(render_list_1);
    }
    if(data == "order"){

        const title = config_order_element.get('CABLE_4_PIN_EPS').get('DESCRIPTION');
    }

}

function Delete(){

}


function RenderTab(render_list0,render_list1) {


    // Tableau 1


    if(array_data_resume.size == 0){
        const pText = document.createElement('p');
        pText.setAttribute('class','atMoment');
        pText.innerText = upTextFirst(translate('notOrder'));
        render_list0.append(pText);
        const buttonAdd = document.createElement('button');
        buttonAdd.setAttribute('onclick','AddTableEditable("resume")');
        buttonAdd.innerText = upTextFirst(translate('add'));
        buttonAdd.setAttribute('class','btnAddAtMoment');
        render_list0.append(buttonAdd);
    }else{
        const buttonAdd = document.createElement('button');
        buttonAdd.setAttribute('onclick','AddTableEditable("resume")');
        buttonAdd.innerText = upTextFirst(translate('add'));
        buttonAdd.setAttribute('class','btnAddAtMoment');
        const table0 = document.createElement('table');
        render_list0.append(buttonAdd);
        if(document.getElementsByName('table').length == 0){
            const trHead = document.createElement('tr');
            const thHead0 = document.createElement('th');
            const thHead1 = document.createElement('th');
            const thHead2 = document.createElement('th');
            const thHead3 = document.createElement('th');

            thHead0.innerText = ' ';
            thHead1.innerText = upTextFirst(translate('description'));
            thHead2.innerText = upTextFirst(translate('priceUnit'));
            thHead3.innerText = upTextFirst(translate('modifAndSupp'));

            trHead.append(thHead0);
            trHead.append(thHead1);
            trHead.append(thHead2);
            trHead.append(thHead3);

            table0.append(trHead);

            render_list0.append(table0);
        }

        for (let i = 0; i < array_data_resume.size; i++){
                const trHead0 = document.createElement('tr');
                trHead0.setAttribute('id','table-item-'+i);
                const tdHead0 = document.createElement('td');
                const tdHead1 = document.createElement('td');
                const tdHead2 = document.createElement('td');
                const tdHead3 = document.createElement('td');


                const select0 = document.createElement('select');
                select0.setAttribute('id','item-'+i);
                select0.setAttribute('onchange','changeValue("item-'+i+'",this.value)');
                tdHead0.innerText = i+1;
                let count_order_element = 0;
                config_order_element.forEach((value, key) => {
                    const option = document.createElement('option');
                    option.innerText = value.get('NAME') + ' - ' + new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format((value.get('PRICE')/100));
                    option.value = key;
                    select0.append(option);
                    count_order_element ++;
                });
                tdHead1.append(select0);

                tdHead2.innerText = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format((array_data_resume.get(i+1).get('PRICE')/100));

            trHead0.append(tdHead0);
            trHead0.append(tdHead1);
            trHead0.append(tdHead2);
            trHead0.append(tdHead3);

            table0.append(trHead0);
        }
    }

}
