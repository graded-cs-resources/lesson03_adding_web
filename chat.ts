/* In this activity, we will see how typescript / javascript
 * can interact with web sites, the most common use case of these
 * languages.
 *
 * Start by taking at look at the "index.html" file. Though we will
 * not learn this coding language in great detail in class, being
 * able to read it or modify it in simple ways can be very helpful
 * for all modern programmers. Go read the index.html file NOW, then return
 * here and try to answer these questions without looking. After you try, look back.
 *
 * 1. How do you make a comment in html?
 *
 * 2. Where does text between the <title> and </title> tags appear?
 *
 * 3. How could you add an id to the html element below? (edit it)
 *  <h3>Test</h3>
 *
 */

/* The chat() function below will run when the button is pressed; that's what the "onclick=chat()"
 * section of the HTML ensures. There are other ways to make this happen too, but this is the simplest for now.
 */
function chat() {
  let input_text_box = <HTMLInputElement>(document.getElementById("input_text"));
  /* `let`, as you should know by now, simply means this is a variable
   * `input_text_box` is its name.
   * `<HTMLInputElement>` (after the =) is a TYPE ASSERTION. These are used in TypeScript when
   *         TypeScript isn't sure we're going to get the type we want, but WE are sure. You can use
   *         these to assure it we're right and avoid errors.
   * `document` is a variable that refers to the entire webpage. Special for HTML code.
   * `getElementById` is a *method* (a function connected to a variable) of the web document. If you hover
   *         over it it will tell you what it does. It searches the HTML for an element with the id you
   *         put inside the parenthese and returns a link to it.
   *
   *     IMPORTANT: document.getElementById() returns the HTMLElement type. This is because it can find ANY
   *     HTML element - a heading, a title, whatever. However, WE know that we are specifically getting an
   *     input element, which is why we use the <HTMLInputElement> assertion. This tells TypeScript that we
   *     are allowed to use certain features of that type that we otherwise wouldn't have.
   */

  // input_text_box is a link to the input element. The .value *property* lets us access the text in the textbox.
  let input: string = input_text_box.value;

  // Okay, at this point we could do lots of cool things with the input element. 
  // Let's make our computer talk back!
  // First, we need to get a link to the OUTPUT area.

  let output_div = <HTMLDivElement>(document.getElementById("output_area"));

  // QUESTION: Why do you think we use the type HTMLDivElement here?
  // ANSWER:

  // To make the chat go more cleanly, let's make a helper function.
  // This will let us put text in the output with a single word.
  function output(value:string) {
    output_div.innerText=value;
  }

  // Time to give our chatbot some chattiness!
  if (
    input == "Hello" ||
    input == "hello" ||
    input == "Hi" ||
    input == "hi"
  ) {
    output("Hello, how are you?");
  } else if (
    input == "Oi" ||
    input == "oi" ||
    input == "olá" ||
    input == "Olá"
  ) {
    output("Oi, tudo bem?");
  } else if (input == "What's your name?") {
    output("I'm a computer. I don't have a name.");
  } else {
    output("I don't understand that, sorry.");
  }
}

/* Let's run this code and see what it does before doing anything else.
 *  Step 1) Build this file using ctrl-shift-b or cmd-shift-b to create your javascript file.
 *  Step 2) To preview our code, we will use Live Server extension by Ritwick Dey. To install it, find the "Extensions" button
 *          on the left side, then search for the extension and install it. You may have to reboot VS Code.
 *  Step 3) Once it is restarted, click the little "Go Live" button that should appear in the toolbar at the bottom of the screen.
 *          If it doesn't appear, try switching to the index.html tab and looking again. A browser window should open
 *          that shows your page!
 *  Step 4) Test your page. Does it do what you expected?
 *  Step 5) What happens if you type "Hi!"?
 */

/* Challenge time! Everybody should complete at least the first task below, and make a solid attempt at the second. Tasks 3 and 4
 * are optional - you know, at this point, how far to stretch yourself.

 * TASK 1 - Approachable! Required!
 *  Add at least three new commands to the chatbot. These can be whatever you want! If you speak a language other than
 *  English or Portuguese, perhaps you could add a hello feature in your own language (Asian characters *should* be supported).
 * 
 *  What commands did you add?
 *   1)
 *   2)
 *   3)
 *  Test your code and make sure it works!
 *

 * Task 2 - a bit more challenging. Try it though!
 * Use the internet to look up "how to use javascript to change the background color of an element."
 * Add a new command to your interaction: 
 *     the input phrase "yellow" should change the background color of the output area OR input area (your choice) to "yellow".
 *     The input phrase "pink" should change it to "pink". 
 *     Add any other colors you want! Most common color names (in English) will work.
 *

  * Task 3 - Extra Challenging

  * To practice working with elements I didn't set up for you, let's make our "interact" function modify
    the BUTTON as well (remember, its id is "input_button"). 

    Modify the function so that every time the button is pressed, the background color of the button changes. It should 
    change to "green" the first time you press it, then back to "gray" the second time, then alternate back and forth each time.

  

 * Task 4 - Probably too challenging
 * Choose one of these tasks (or do both if you're extra anxious for challenges)
 * 1) Use google to research how to read *substrings* in javascript / TypeScript
 *    and edit the chat bot so that if the phrase entered *starts with* "hi " or "hello " (or the uppercase version)
      the chatbot responds correctly, even if there are other letters or characters after that.

   2) Add ANOTHER input box and button to the HTML specifically designed for changing the background color. Users
      should be allowed to type whatever color name or value they want into the box, and the code should attempt to set
      the background color of the ENTIRE PAGE to that value when the button is pressed. You'll need to write another function for that!
*/
