export default function Lab1() {
  return (
    <><div id="wd-lab1">
      <h2>Lab 1</h2>
      <h3>HTML Examples</h3>
      <div id="wd-h-tag">
        <h4>Heading Tags</h4>
        Text documents are often broken up into several sections and subsections. Each section is usually prefaced with a short title or heading that attempts to summarize the topic of the section it precedes. For instance this paragraph is preceded by the heading Heading Tags. The font of the section headings are usually larger and bolder than their subsection headings. This document uses headings to introduce topics such as HTML Documents, HTML Tags, Heading Tags, etc. HTML heading tags can be used to format plain text so that it renders in a browser as large headings. There are 6 heading tags for different sizes: h1, h2, h3, h4, h5, and h6. Tag h1 is the largest heading and h6 is the smallest heading.
      </div>
    </div>
    <div id="wd-p-tag">
      <h4>Paragraph Tag</h4>
        <p id="wd-p-1">
          This is a paragraph. We often separate a long set of sentences with vertical spaces to make the text easier to read. Browsers ignore vertical white spaces and render all the text as one single set of sentences. To force the browser to add vertical spacing, wrap the paragraphs you want to separate with the paragraph tag
        </p>
        <p id="wd-p-2">
          This is the first paragraph. The paragraph tag is used to format vertical gaps between long pieces of text like this one.
        </p>
        <p id="wd-p-3">
          This is the second paragraph. Even though there is a deliberate white gap between the paragraph above and this paragraph, by default browsers render them as one contiguous piece of text as shown here on the right.
        </p>
        <p id="wd-p-4">
          This is the third paragraph. Wrap each paragraph with the paragraph tag to tell browsers to render the gaps.
        </p>
    </div>
    <div id="wd-lists">
      <h4>List Tags</h4>
      <h5>Ordered List Tag</h5>
        How to make pancakes:
        1. Mix dry ingredients.
        2. Add wet ingredients.
        3. Stir to combine.
        4. Heat a skillet or griddle.
        5. Pour batter onto the skillet.
        6. Cook until bubbly on top.
        7. Flip and cook the other side.
        8. Serve and enjoy!

      <h5>Ordered List Tag with formatting</h5>      
        How to make pancakes:
        <ol id="wd-pancakes">
          <li>Mix dry ingredients.</li>
          <li>Add wet ingredients.</li>
          <li>Stir to combine.</li>
          <li>Heat a skillet or griddle.</li>
          <li>Pour batter onto the skillet.</li>
          <li>Cook until bubbly on top.</li>
          <li>Flip and cook the other side.</li>
          <li>Serve and enjoy!</li>
        </ol>

        How to make a sandwich:
        <ol id="wd-your-favorite-recipe">
          <li>Take 2 slices of bread and toast it.</li>
          <li>Heat oil in a pan, saute cumin, add garlic and fry for a few minutes.</li>
          <li>Add chopped tomatoes on the pan.</li>
          <li>Cook on a medium heat until it turns soft.</li>
          <li>Add chilli powder and saute for a minute.</li>
          <li>Add veggies and saute.</li>
          <li>Fill the sandwich and add some cheese.</li>
          <li>Serve and enjoy!</li>
        </ol>

      <h5>Unordered List Tag</h5>
        My favorite books (in no particular order)
        <ul id="wd-my-books">
          <li>Dune</li>
          <li>Lord of the Rings</li>
          <li>Ender's Game</li>
          <li>Red Mars</li>
          <li>The Forever War</li>
        </ul>
      
        Your favorite books (in no particular order)
        <ul id="wd-your-books">
          <li>Harry Potter</li>
          <li>Lord of the Rings</li>
          <li>Divergent</li>
          <li>A tale of two cities</li>
          <li>The Alchemist</li>
        </ul>
    </div>
    <div id="wd-tables">
        <h4>Table Tag</h4>
        <table border={1} width="100%">
          <thead>
            <tr>
              <th>Quiz</th>
              <th>Topic</th>
              <th>Date</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td align = "center">Q1</td>
              <td align = "center">HTML</td>
              <td align = "center">2/3/21</td>
              <td align = "center">90</td>
            </tr>
            <tr>
              <td align = "center">Q2</td>
              <td align = "center">CSS</td>
              <td align = "center">2/10/21</td>
              <td align = "center">91</td>
            </tr>
            <tr>
              <td align = "center">Q3</td>
              <td align = "center">JavaScript</td>
              <td align = "center">2/17/21</td>
              <td align = "center">92</td>
            </tr>
            <tr>
              <td align = "center">Q4</td>
              <td align = "center">Bootstrap & Flex</td>
              <td align = "center">2/17/21</td>
              <td align = "center">93</td>
            </tr>
            <tr>
              <td align = "center">Q5</td>
              <td align = "center">Routing</td>
              <td align = "center">2/17/21</td>
              <td align = "center">94</td>
            </tr>
            <tr>
              <td align = "center">Q6</td>
              <td align = "center">State & Redux</td>
              <td align = "center">2/17/21</td>
              <td align = "center">95</td>
            </tr>
            <tr>
              <td align = "center">Q7</td>
              <td align = "center">Node</td>
              <td align = "center">2/17/21</td>
              <td align = "center">96</td>
            </tr>
            <tr>
              <td align = "center">Q8</td>
              <td align = "center">Session</td>
              <td align = "center">2/17/21</td>
              <td align = "center">97</td>
            </tr>
            <tr>
              <td align = "center">Q9</td>
              <td align = "center">MongoDB</td>
              <td align = "center">2/17/21</td>
              <td align = "center">98</td>
            </tr>
            <tr>
              <td align = "center">Q10</td>
              <td align = "center">Mongoose</td>
              <td align = "center">2/17/21</td>
              <td align = "center">99</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>Average</td>
              <td align = "center">90</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div id="wd-images">
        <h4>Image tag</h4>
        Loading an image from the internet:
        <br />
          <img alt="Palette"id="wd-palette" width="400px" src="https://i.pinimg.com/originals/e1/e3/d3/e1e3d3588f0bed454eeb2a5d71ea699e.jpg" />
        <br />
        Loading a local image:
        <br />
          <img alt="Sunrise" id="wd-sunrise" src="Images/TestImage.jpg" height="200px" />
      </div>
      <div id="wd-forms">
      <h4>Form Elements</h4>
  <     form id="wd-text-fields">
        <h5>Text Fields</h5>
          <label htmlFor="wd-text-fields-username">Username:</label>
          <input id="wd-text-fields-username" placeholder="Username" /> <br />
          <label htmlFor="wd-text-fields-password">Password:</label>
          <input type="password" id="wd-text-fields-password" value="123@#$asd" />
        <br/>
          <label htmlFor="wd-text-fields-first-name">First name:</label>
          <input type="text" id="wd-text-fields-first-name" title="John" /> 
        <br />
          <label htmlFor="wd-text-fields-last-name">Last name:</label>
          <input type="text" id="wd-text-fields-last-name" placeholder="Last Name" value="Wonderland" title="Last name" />
        <br />
          <label htmlFor="wd-text-fields-email">Student email ID:</label>
          <input type="text" id="wd-text-fields-email" placeholder="@northeastern.edu" title="NEU Email ID" />
        <br />
          <label htmlFor="wd-text-fields-NUID">NUID: </label>
          <input type="text" id="wd-text-fields-NUID" placeholder="NUID" value="002412345" title="NUID" />
        </form>

        <h5>Text boxes</h5>
          <label>Biography: </label><br/>
          <textarea id="wd-textarea" cols={30} rows={10}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</textarea>
        <h5 id="wd-buttons">Buttons</h5>
          <button id="wd-all-good" onClick={() => alert("Life is Good!")} type="button">
          Hello World!
          </button>
        <h5>File upload</h5>
          <input id="wd-upload" type="file"/>
          <h5 id="wd-radio-buttons">Radio buttons</h5>

        <label>Favorite movie genre:</label><br />
          <input type="radio" name="radio-genre" id="wd-radio-comedy"/>
        <label htmlFor="wd-radio-comedy">Comedy</label><br />
          <input type="radio" name="radio-genre" id="wd-radio-drama"/>
        <label htmlFor="wd-radio-drama">Drama</label><br />
          <input type="radio" name="radio-genre" id="wd-radio-scifi"/>
        <label htmlFor="wd-radio-scifi">Science Fiction</label><br />
          <input type="radio" name="radio-genre" id="wd-radio-fantasy"/>
        <label htmlFor="wd-radio-fantasy">Fantasy</label>

        <h5 id="wd-checkboxes">Checkboxes</h5>
        <label>Favorite movie genre:</label><br/>
          <input type="checkbox" name="check-genre" id="wd-chkbox-comedy"/>
        <label htmlFor="wd-chkbox-comedy">Comedy</label><br/>
          <input type="checkbox" name="check-genre" id="wd-chkbox-drama"/>
        <label htmlFor="wd-chkbox-drama">Drama</label><br/>
          <input type="checkbox" name="check-genre" id="wd-chkbox-scifi"/>
        <label htmlFor="wd-chkbox-scifi">Science Fiction</label><br/>
          <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy"/>
        <label htmlFor="wd-chkbox-fantasy">Fantasy</label>

        <h4 id="wd-dropdowns">Dropdowns</h4>
        <h5>Select one</h5>
        <label htmlFor="wd-select-one-genre"> Favorite movie genre: </label><br/>
          <select id="wd-select-one-genre">
          <option value="COMEDY">Comedy</option>
          <option value="DRAMA">Drama</option>
          <option selected value="SCIFI">Science Fiction</option>
          <option value="FANTASY">Fantasy</option></select>

        <h5>Select many</h5>
          <label htmlFor="wd-select-many-genre"> Favorite movie genres: </label><br/>
          <select id="wd-select-many-genre" multiple>
          <option selected value="COMEDY">Comedy</option>
          <option value="DRAMA">Drama</option>
          <option selected value="SCIFI">Science Fiction</option>
          <option value="FANTASY">Fantasy</option></select>
        
        <h4>Other HTML field types</h4>
        <label htmlFor="wd-text-fields-email"> Email: </label>
        <input type="email" placeholder="jdoe@gmail.com" id="wd-text-fields-email"/><br/>
        <label htmlFor="wd-text-fields-salary-start"> Starting salary:</label>
        <input type="number" id="wd-text-fields-salary-start" placeholder="1000" value="100000"/><br/>
        <label htmlFor="wd-text-fields-rating"> Rating: </label>
        <input type="range" id="wd-text-fields-rating" placeholder="Doe" max="5" value="4"/><br/>
        <label htmlFor="wd-text-fields-dob"> Date of birth: </label>
        <input type="date" id="wd-text-fields-dob" value="2000-02-11"/><br/>

        <h4>Anchor tag</h4>
        Please 
        <a id="wd-lipsum" href="https://www.lipsum.com"> click here </a> to get dummy text<br/>
      </div>
      </>
  );
}
