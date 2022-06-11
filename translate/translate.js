

function translate(key,lang=''){
    if(navigator.language == "en-GB" || lang == "en"){
        return array_translate_EN.get(key);
    }
    if(navigator.language == "fr" || lang == "fr"){
        return array_translate_FR.get(key);
    }
    return array_translate_EN.get(key);
}

