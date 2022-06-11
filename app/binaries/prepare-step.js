function Step1() {
    // RENDER
    const renderStep = document.getElementById('render');
    // TEXTE ENTETE
    const textLine1 = document.createElement('p');
    const textLine2 = document.createElement('p');
    const textLine3 = document.createElement('p');
    const textLine4 = document.createElement('p');
    const textLine5 = document.createElement('p');

    textLine1.innerText = upTextFirst(translate('titlePrimary'));
    textLine2.innerText = upTextFirst(translate('contentPrimary1'));
    textLine3.innerText = upTextFirst(translate('contentPrimary2'));
    textLine4.innerText = upTextFirst(translate('contentPrimary3'));
    textLine5.innerText = upTextFirst(translate('titleSecondary'));


    textLine1.setAttribute('class','textLine1');
    textLine2.setAttribute('class','textLine2');
    textLine3.setAttribute('class','textLine3');
    textLine4.setAttribute('class','textLine4');
    textLine5.setAttribute('class','textLine5');


    renderStep.append(textLine1);
    renderStep.append(textLine2);
    renderStep.append(textLine3);
    renderStep.append(textLine4);
    renderStep.append(textLine5);
    // IMAGE BOUTON
    const buttonImage = document.createElement('button');
    renderStep.append(buttonImage);
    buttonImage.setAttribute('class','button_step1');
    buttonImage.setAttribute('id','button_step1');
    buttonImage.setAttribute('onclick','AddDataControl("control-step-1","true")');
    // OTHER BOUTON
    const buttonContainer = document.createElement('p');
    const buttonNext = document.createElement('button');
    buttonNext.innerText = upTextFirst(translate('next'));
    buttonNext.setAttribute('id','buttonNext');
    buttonNext.disabled = true;
    buttonNext.style.cursor = "not-allowed";
    buttonContainer.append(buttonNext);
    renderStep.append(buttonContainer);
}
function Step2(){
    // RENDER
    const renderStep = document.getElementById('render');
    // TEXTE ENTETE
    const textLine1 = document.createElement('p');
    const textLine2 = document.createElement('p');
    const textLine3 = document.createElement('p');
    const textLine4 = document.createElement('p');
    const textLine5 = document.createElement('p');

    textLine1.innerText = upTextFirst(translate('titlePrimary'));
    textLine2.innerText = upTextFirst(translate('contentPrimary1'));
    textLine3.innerText = upTextFirst(translate('contentPrimary2'));
    textLine4.innerText = upTextFirst(translate('contentPrimary3'));
    textLine5.innerText = upTextFirst(translate('titleSecondary'));


    textLine1.setAttribute('class','textLine1');
    textLine2.setAttribute('class','textLine2');
    textLine3.setAttribute('class','textLine3');
    textLine4.setAttribute('class','textLine4');
    textLine5.setAttribute('class','textLine5');


    renderStep.append(textLine1);
    renderStep.append(textLine2);
    renderStep.append(textLine3);
    renderStep.append(textLine4);
    renderStep.append(textLine5);
    // IMAGE BOUTON
    const buttonImage = document.createElement('button');
    renderStep.append(buttonImage);
    buttonImage.setAttribute('class','button_step2');
    buttonImage.setAttribute('id','button_step2');
    buttonImage.setAttribute('onclick','AddDataControl("control-step-2","true")');

    // OTHER BOUTON
    const buttonContainer = document.createElement('p');

    const buttonNext = document.createElement('button');
    buttonNext.innerText = upTextFirst(translate('next'));
    buttonNext.setAttribute('id','buttonNext');
    buttonNext.disabled = true;
    buttonNext.style.cursor = "not-allowed";
    buttonContainer.append(buttonNext);


    const buttonBefore = document.createElement('button');
    buttonBefore.innerText = upTextFirst(translate('previous'));
    buttonBefore.setAttribute('id','buttonBefore');
    buttonBefore.style.cursor = "pointer";
    buttonBefore.setAttribute('onclick','StepBuild("1",true)');
    buttonContainer.append(buttonBefore);


    renderStep.append(buttonContainer);



}
function Step3() {
    // RENDER
    const renderStep = document.getElementById('render');
    // TEXTE ENTETE
    const textLine1 = document.createElement('p');
    const textLine2 = document.createElement('p');
    const textLine3 = document.createElement('p');
    const textLine4 = document.createElement('p');
    const textLine5 = document.createElement('p');

    textLine1.innerText = upTextFirst(translate('titlePrimary'));
    textLine2.innerText = upTextFirst(translate('contentPrimary1'));
    textLine3.innerText = upTextFirst(translate('contentPrimary2'));
    textLine4.innerText = upTextFirst(translate('contentPrimary3'));
    textLine5.innerText = upTextFirst(translate('titleSecondary'));


    textLine1.setAttribute('class','textLine1');
    textLine2.setAttribute('class','textLine2');
    textLine3.setAttribute('class','textLine3');
    textLine4.setAttribute('class','textLine4');
    textLine5.setAttribute('class','textLine5');


    renderStep.append(textLine1);
    renderStep.append(textLine2);
    renderStep.append(textLine3);
    renderStep.append(textLine4);
    renderStep.append(textLine5);
    // IMAGE BOUTON
    const buttonImage = document.createElement('button');
    renderStep.append(buttonImage);
    buttonImage.setAttribute('class','button_step3');
    buttonImage.setAttribute('id','button_step3');
    buttonImage.setAttribute('onclick','AddDataControl("control-step-3","true")');

    // OTHER BOUTON
    const buttonContainer = document.createElement('p');


    const buttonNext = document.createElement('button');
    buttonNext.innerText = upTextFirst(translate('next'));
    buttonNext.setAttribute('id','buttonNext');
    buttonNext.disabled = true;
    buttonNext.style.cursor = "not-allowed";
    buttonContainer.append(buttonNext);

    const buttonBefore = document.createElement('button');
    buttonBefore.innerText = upTextFirst(translate('previous'));
    buttonBefore.setAttribute('id','buttonBefore');
    buttonBefore.style.cursor = "pointer";
    buttonBefore.setAttribute('onclick','StepBuild("2",true)');
    buttonContainer.append(buttonBefore);

    renderStep.append(buttonContainer);



}
function Step4() {
// RENDER
    const renderStep = document.getElementById('render');
    // TEXTE ENTETE
    const textLine1 = document.createElement('p');
    const textLine2 = document.createElement('p');
    const textLine3 = document.createElement('p');
    const textLine4 = document.createElement('p');
    const textLine5 = document.createElement('p');

    textLine1.innerText = upTextFirst(translate('titlePrimary'));
    textLine2.innerText = upTextFirst(translate('contentPrimary1'));
    textLine3.innerText = upTextFirst(translate('contentPrimary2'));
    textLine4.innerText = upTextFirst(translate('contentPrimary3'));
    textLine5.innerText = upTextFirst(translate('titleSecondary'));


    textLine1.setAttribute('class','textLine1');
    textLine2.setAttribute('class','textLine2');
    textLine3.setAttribute('class','textLine3');
    textLine4.setAttribute('class','textLine4');
    textLine5.setAttribute('class','textLine5');


    renderStep.append(textLine1);
    renderStep.append(textLine2);
    renderStep.append(textLine3);
    renderStep.append(textLine4);
    renderStep.append(textLine5);

    const hr = document.createElement('hr');
    renderStep.append(hr);

    const menu = document.createElement('ul');
    menu.setAttribute('id','menu');
    const unitTab = document.createElement('li');
    const groupTab = document.createElement('li');
    unitTab.setAttribute('class','btn-onglet unitGroupActive');
    groupTab.setAttribute('class','btn-onglet multipleGroupDesactive');
    unitTab.setAttribute('id','unitGroup');
    groupTab.setAttribute('id','multipleGroup');
    unitTab.innerHTML = upTextFirst(translate('unitGroup'));
    groupTab.innerHTML = upTextFirst(translate('multipleGroup'));
    unitTab.setAttribute('onclick','changeTab(0)');
    groupTab.setAttribute('onclick','changeTab(1)');
    menu.append(unitTab);
    menu.append(groupTab);
    renderStep.append(menu);
    const render_list0 = document.createElement('div');
    render_list0.setAttribute('class','boxList');
    render_list0.setAttribute('id','tab1');
    const render_list1 = document.createElement('div');
    render_list1.setAttribute('class','boxList');
    render_list1.setAttribute('id','tab2');

    // Tableau 1


    if(array_data_resume.size == 0){
        const pText = document.createElement('p');
        pText.setAttribute('class','atMoment');
        pText.innerText = upTextFirst(translate('notOrder'));
        render_list0.append(pText);
        const backspace = document.createElement('br');
        render_list0.append(backspace);
        const buttonAdd = document.createElement('button');
        render_list0.setAttribute('onclick','');
        buttonAdd.innerText = upTextFirst(translate('add'));
        buttonAdd.setAttribute('class','btnAddAtMoment');
        render_list0.append(buttonAdd);
    }else{
        const table0 = document.createElement('table');
    }


    // Tableau 2

    if(array_data_order.size == 0){
        const pText = document.createElement('p');
        pText.setAttribute('class','atMoment');
        pText.innerText = upTextFirst(translate('notOrder'));
        render_list1.append(pText);
        const backspace = document.createElement('br');
        render_list1.append(backspace);
        const buttonAdd = document.createElement('button');
        render_list1.setAttribute('onclick','');
        buttonAdd.innerText = upTextFirst(translate('add'));
        buttonAdd.setAttribute('class','btnAddAtMoment');
        render_list1.append(buttonAdd);
    }else{
        const table1 = document.createElement('table');
    }


    renderStep.append(render_list0);
    renderStep.append(render_list1);









}
function Step5() {
// RENDER
    const renderStep = document.getElementById('render');
    // TEXTE ENTETE
    const textLine1 = document.createElement('p');
    const textLine2 = document.createElement('p');
    const textLine3 = document.createElement('p');
    const textLine4 = document.createElement('p');
    const textLine5 = document.createElement('p');

    textLine1.innerText = upTextFirst(translate('titlePrimary'));
    textLine2.innerText = upTextFirst(translate('contentPrimary1'));
    textLine3.innerText = upTextFirst(translate('contentPrimary2'));
    textLine4.innerText = upTextFirst(translate('contentPrimary3'));
    textLine5.innerText = upTextFirst(translate('titleSecondary'));


    textLine1.setAttribute('class','textLine1');
    textLine2.setAttribute('class','textLine2');
    textLine3.setAttribute('class','textLine3');
    textLine4.setAttribute('class','textLine4');
    textLine5.setAttribute('class','textLine5');


    renderStep.append(textLine1);
    renderStep.append(textLine2);
    renderStep.append(textLine3);
    renderStep.append(textLine4);
    renderStep.append(textLine5);




}
function Step6() {

}




