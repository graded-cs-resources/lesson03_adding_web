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
 * 3. How could you add an id to the region below? (edit it)
 *  <h3>
 *      Test
 *  </h3>
 *
 */

/* You may have noticed that the button in the HTML had an *attribute* that said
 * `onclick="interact()"`. This means that when we click that button, it will call the javascript
 * function named `interact` with no arguments. Examine that function below.
 */
function interact() {
    /* The line below has a lot going on. Let's examine it bit by bit.
     * `let` means we have a variable. input_text_box is its name.
     * `HTMLInputElement` is its type. When you are interacting with websites, there are a lot
     *      of special types that define the various parts of a site. This is a type reserved
     *      for components made with <input> tags.
     * the command `<HTMLInputElement>` is called a `type assertion` or `cast`. It tells TypeScript
     *      that it should assume the next command will output that type. This is important because
     *      the command after that returns something called an HTMLElement, which is more generic
     *      than an HTMLInputElement, so we have to clarify that WE know we will be getting an input
     *      element.
     * `document.getElementById()` is a function that searches the HTML file for a section of code with
     *      the provided id, and returns a link to that code we can use in javascript/TypeScript. In this case
     *      we are storing that link inside the variable input_text_box so we can use it later.
     */
    let input_text_box:HTMLInputElement =
        <HTMLInputElement>document.getElementById("input_text");

    // `value` is a built-in *property* of HTML elements that returns their, well, value. For a text box, that means the
    // text inside the box. IN this case, it will be a string.
    let input_text_value:string = input_text_box.value;

    // For now, we will simply copy the value of the input box into the output box.

    // First we get a link to the output_area, just like we did the input text above.
    let output_div:HTMLDivElement =
        <HTMLDivElement>document.getElementById("output_area");

    // next we modify the `innerText` property for the div. This changes the text inside the output area.
    output_div.innerText = input_text_value;
}

/* Let's run this code and see what it does before doing anything else.
 *  Step 1) Build this file. Let's use WATCH mode.
    - If in VS Code, press Ctrl-shift-B or Cmd-shift-B and choose "tsc:watch"
    - If in GitPod, choose the "Terminal" menu at top, choose "Run Task", then choose "Typescript watch"
    This will make it so whever you update your typescript code, you automatically get new javascript code!

 *  Step 2) The best way to to view web pages is to open a *local web server* that essentially pretends to be a computer on the internet you can load your website from.
    - Use the "Terminal" -> "Run Task" to select the "Serve" task. If in VS code and you get an error, open your command line and type "npm install -g browser-sync" and try again.
    - in VS Code, this will open a web browser for you that shows your code.
    - in GitPod, you will get a popup telling you to either open a Preview (split screen) or a Browser (new tab) - choose your preference!

 *  Step 3) Test your page. Does it do what you expected?
 */

/* Challenge time!
 * TASK 1
 *  Modify the `interact` function so that it does different things based on
    the input text value.
 *   If the input text is "What's your name?" the output area should say "I'm a website, not a person."
 *   If the input text is "How old are you?" the output area should say "Less than a day, obviously.";
 *   Create one other question and answer combination of your choice.
 *   For any OTHER input, make the output area simply repeat the input area, as it does now.
 *
 *  Test your code and make sure it works!
 */

/* Task 2
 * Use the internet to look up "how to use javascript to change the background color of an element."
 * Add a new command to your interaction:
 *     the input phrase "blue" should change the background color of the output area to blue.
 *     The input phrase "pink" should change it to pink.
 *     Add any other colors you want
 */