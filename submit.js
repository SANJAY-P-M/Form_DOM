function displayValue(){
    let name = document.getElementById('name').value;
    let department = document.getElementById('department').value;
    let sportsCollection = document.getElementsByName('sports');
    // let sports;
    // for(i =0;i< sportsCollection.length;i++){
    //     if (sportsCollection[i].checked == true) {
    //         sports = sportsCollection.values;
    //         break;
    //     }
    // }
    alert("NAME : " + name + "  DEPARTMENT : " + department )
    // + " sports : " + sports);
    console.log(document.getElementsByName('sports'))
    //   + "sports : " + getSports() +"language known : " + getLanguage());
}