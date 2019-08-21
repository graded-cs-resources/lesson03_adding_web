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

/* You may have noticed that the button in the HTML had an *attribute* that said
 * `onclick="interact()"`. This means that when we click that button, it will call the javascript
 * function named `interact` with no arguments. Examine that function below.
 */
function interact() {
    /* The line below has a lot going on. Let's examine it bit by bit.
     * `let` recall means this is a variable
     * `input_text_box` is its name.
     * `HTMLInputElement` is its type. This is a special type used for interacting with HTML elements
     *         made with <input> tags.
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
    let input_text_box:HTMLInputElement = 
        <HTMLInputElement>document.getElementById("input_text");

    // input_text_box is a link to the input element. `.value` tells us to look up what's inside the text box.
    let input_text_value:string = input_text_box.value;

    // Okay, at this point we could do lots of col things with the input element. We can now make our computer talk back!
    // First, we need to get a link to the OUTPUT area, so we an make the computer talk back.

    let output_div:HTMLDivElement = 
        <HTMLDivElement>document.getElementById("output_area");

    // QUESTION: Why do we use the type HTMLDivElement her?
    // ANSWER: 

    // Let's make our chatbot chat. We set the value output_div.innerText to what we want it to say.
    if (input_text_value == "Hello" || 
            input_text_value == "hello" || 
            input_text_value == "Hi" || 
            input_text_value == "hi") {
        output_div.innerText = "Hello, how are you?";
    }else if (input_text_value == "Oi" || 
            input_text_value == "oi" || 
            input_text_value == "ola" || 
            input_text_value == "Ola") {
        output_div.innerText = "Oi, tudo bem?";
    }else if (input_text_value == "What's your name?") {
        output_div.innerText = "I'm a computer, I don't have a name.";
    } else {
        output_div.innerText = "I don't understand that, sorry.";
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
 */

/* Challenge time! Everybody should complete at least the first task, and make a solid attempt at the second. Tasks 3 and 4
 * are optional - you know, at this point, how far to stretch yourself.

 * TASK 1
 *  Add at least three new commands to the chatbot. These can be whatever you want! If you speak a language other than
 *  English or Portuguese, perhaps you could add a hello feature in your own language (Asian characters should be supported).
 * 
 *  What commands did you add?
 *   1)
 *   2)
 *   3)
 *  Test your code and make sure it works!
 *

 * Task 2 - a bit more challenging
 * Use the internet to look up "how to use javascript to change the background color of an element."
 * Add a new command to your interaction: 
 *     the input phrase "yellow" should change the background color of the output area to "yellow".
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
      the background color of the ENTIRE PAGE to that value when the button is pressed.
*/