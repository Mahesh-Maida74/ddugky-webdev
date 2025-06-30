/* Create a setTimeout that logs "This should not appear" after 3 seconds, but cancel it using clearTimeout() before it runs.*/

function cancelTimeout() {
  console.log("This should not appear");
}

const timeoutId = setTimeout(cancelTimeout, 3000);

clearTimeout(timeoutId);
