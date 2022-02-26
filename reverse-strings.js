// function split(str) {
// 	return str.split('');
// }
// console.log(split("Hello"));

// let startArr = split("Hello there!");
// console.log(startArr);


// console.log(reverse(startArr));
// console.log(reverse("Hello"));


// function reverseCase(arr) {
//     let revArr = [arr.length];
//     for (let i = 0; i<arr.length; i++) {
//         revArr[i] = arr[arr.length-(i+1)];
//         }
//         //return as string
//         let newString = revArr.join('');
    
//         //returns new first letter uppercase
//         return (newString.substring(0,1).toUpperCase() + newString.substring(1).toLowerCase());

//         //return as array
//         //return revArr;
//     }
// console.log(reverseCase("hello"));

// function reverseFixedCase(str) {
//     let revArr = [str.length];
//     for (let i = 0; i<str.length; i++) {
//         revArr[i] = str[str.length-(i+1)];
//         }
//         //return as string
//     let newString = revArr.join('');
//     let x = newString.substring(newString.length-1);
//     return ((newString.substring(0, newString.length-1).toLowerCase()) + x.toUpperCase());
// }

// console.log(reverseFixedCase("heLlo"));


function reverse(arr) {
    let revArr = [arr.length];
    for (let i = 0; i<arr.length; i++) {
        revArr[i] = arr[arr.length-(i+1)];
        }
        if (arr = '') {
            return '';
        }
        //return as string
        return revArr.join('');
    }


let form = document.getElementById("myForm");
//stop page from reloading
function handleForm(event) { 
    event.preventDefault(); 
} 
form.addEventListener('submit', handleForm);

function getWord() {
    const label = document.getElementById('text-label');
    const word = document.querySelector('input').value;
    console.log(reverse(word));
    const reversedWord = document.getElementById('reversedWord');
    
    if (reverse(word) == 0) {
        reversedWord.innerHTML = "";
    }
    else {
        label.innerHTML = ("Reversed text: ");
        reversedWord.innerHTML = reverse(word);
    }
    

}
