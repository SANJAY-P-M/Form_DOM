function displayValue(){
    let name = document.getElementById('name').value;
    let department = document.getElementById('department').value;

    // analyzing selected radio button
    let sports;
    document.getElementsByName('sports').forEach((element)=>{
        if (element.checked == true) {
            sports = element.id;
        }
    });


    // analyzing selected checkbox
    let language = [];
    document.getElementsByName('language').forEach((element)=>{
        if (element.checked == true) {
            language.push( element.id);
        }
    });
    

    // final alert message 
    alert("NAME : " + name + "  DEPARTMENT : " + department +" SPORTS : " +sports + " LANGUAGES KNOWN : " + language)
}