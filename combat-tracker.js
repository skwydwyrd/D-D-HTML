function proccessCharInfo() {
    // Get the value from the input field
    let charName = document.getElementById('character-name').value;
    let charHP = document.getElementById('character-hp').value;

    let cardContent=`
        <div>Character Name: ${charName}</div>
        <div>Character HP ${charHP}</div>
    `

    // Display the input in the char-name-output p-tag
    document.getElementById('char-info-output').innerHTML = cardContent

}