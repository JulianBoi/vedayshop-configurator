function Verification(){
    if(array_data_steps.get('STEP_CURRENT') == 1) {
        if (array_data_control.get("control-step-1") == "true") {
            const buttonImage1 = document.getElementById('button_step1');
            buttonImage1.style.backgroundImage = 'url(\'media/STEP_1/step_1_on.png\')';
            buttonImage1.setAttribute('onclick', 'AddDataControl("control-step-1","false")');
            const buttonNext = document.getElementById('buttonNext');
            buttonNext.disabled = false;
            buttonNext.style.cursor = "pointer";
            buttonNext.setAttribute('onclick', 'StepBuild("2")');

        }
        if (array_data_control.get("control-step-1") == "false") {
            const buttonImage1 = document.getElementById('button_step1');
            buttonImage1.style.backgroundImage = 'url(\'media/STEP_1/step_1_off.png\')';
            buttonImage1.setAttribute('onclick', 'AddDataControl("control-step-1","true")');
            const buttonNext = document.getElementById('buttonNext');
            buttonNext.disabled = true;
            buttonNext.style.cursor = "not-allowed";
        }
    }
    if(array_data_steps.get('STEP_CURRENT') == 2) {
        if(array_data_control.get("control-step-2") == "true"){
            const buttonImage2 = document.getElementById('button_step2');
            buttonImage2.style.backgroundImage = 'url(\'media/STEP_2/step_2_on.png\')';
            buttonImage2.setAttribute('onclick','AddDataControl("control-step-2","false")');
            const buttonNext = document.getElementById('buttonNext');
            buttonNext.disabled = false;
            buttonNext.style.cursor = "pointer";
            buttonNext.setAttribute('onclick','StepBuild("3")');
        }
        if(array_data_control.get("control-step-2") == "false"){
            const buttonImage2 = document.getElementById('button_step2');
            buttonImage2.style.backgroundImage = 'url(\'media/STEP_2/step_2_off.png\')';
            buttonImage2.setAttribute('onclick','AddDataControl("control-step-2","true")');
            const buttonNext = document.getElementById('buttonNext');
            buttonNext.disabled = true;
            buttonNext.style.cursor = "not-allowed";
        }
    }

    if(array_data_steps.get('STEP_CURRENT') == 3) {
        if (array_data_control.get("control-step-3") == "true") {
            const buttonImage3 = document.getElementById('button_step3');
            buttonImage3.style.backgroundImage = 'url(\'media/STEP_3/step_3_on.png\')';
            buttonImage3.setAttribute('onclick', 'AddDataControl("control-step-3","false")');
            const buttonNext = document.getElementById('buttonNext');
            buttonNext.disabled = false;
            buttonNext.style.cursor = "pointer";
            buttonNext.setAttribute('onclick', 'StepBuild("4")');
        }
        if (array_data_control.get("control-step-3") == "false") {
            const buttonImage3 = document.getElementById('button_step3');
            buttonImage3.style.backgroundImage = 'url(\'media/STEP_3/step_3_off.png\')';
            buttonImage3.setAttribute('onclick', 'AddDataControl("control-step-3","true")');
            const buttonNext = document.getElementById('buttonNext');
            buttonNext.disabled = true;
            buttonNext.style.cursor = "not-allowed";
        }
    }
}

function StepBuild(data,before = false){
    DeleteStep();
    if(before == false){
        if(data == "1"){
            array_data_steps.set('STEP_CURRENT',1);
            Step1();
        }
        if(data == "2"){
            array_data_steps.set('STEP_CURRENT',2);
            Step2();
        }
        if(data == "3"){
            array_data_steps.set('STEP_CURRENT',3);
            Step3();
        }
        if(data == "4"){
            array_data_steps.set('STEP_CURRENT',4);
            Step4();
        }
        if(data == "5"){
            array_data_steps.set('STEP_CURRENT',5);
            Step5();
        }
    }else{
        if(data == "1"){
            array_data_steps.set('STEP_CURRENT',1);
            array_data_control.set('control-step-1','false');
            array_data_control.set('control-step-2','false');
            array_data_control.set('control-step-3','false');
            Step1();
        }
        if(data == "2"){
            array_data_steps.set('STEP_CURRENT',2);
            array_data_control.set('control-step-1','true');
            array_data_control.set('control-step-2','false');
            array_data_control.set('control-step-3','false');
            Step2();
        }
        if(data == "3"){
            array_data_steps.set('STEP_CURRENT',3);
            array_data_control.set('control-step-1','true');
            array_data_control.set('control-step-2','true');
            array_data_control.set('control-step-3','false');
            Step3();
        }
        if(data == "4"){
            array_data_steps.set('STEP_CURRENT',4);
            array_data_control.set('control-step-1','true');
            array_data_control.set('control-step-2','true');
            array_data_control.set('control-step-3','true');
            Step4();
        }
        if(data == "5"){
            array_data_steps.set('STEP_CURRENT',5);
            Step5();
        }
    }

}
