var output = document.querySelector('p');
        
/* STEP 1: String Length */
let step1 = 'This is a string';
let stringLength = step1.length;
output.textContent = stringLength;

/* STEP 2: Retrieving a Specific String Character */
let step2 = 'Donald J. Trump';
let firstChar = step2[0];
output.textContent = firstChar;
output.textContent = step2.length;
output.textContent = step2.length-1;
output.textContent = step2[step2.length-1];

/* STEP 3: Extracting Part of a String */
let step3a = step2.indexOf('shivi',1);
output.textContent = step3a;
// Note - if the substring is not found within the string, indexOf() returns -1
let step3b = step2.slice(10,13);
output.textContent = step3b;
// Note - if you don't specify where to end the slice, the method returns the rest of the string

/* STEP 4: Changing Case */
step4a = 'Bank of Canada';
output.textContent = step4a.toUpperCase();

/* STEP 5: Updating Parts of a String */
let step5 = 'Barrie, ON';
output.textContent = step5.replace('ON','Ontario');
