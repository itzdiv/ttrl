<h1>📝 Question: Rectangle Area Calculator Web App</h1>

<p>
You are required to create a simple <strong>Rectangle Area Calculator</strong> using
<strong>HTML</strong> and <strong>JavaScript</strong>. The application should allow users to input
the <strong>length</strong> and <strong>breadth</strong> of a rectangle, and upon clicking a button,
it should calculate and display the <strong>area</strong>.
</p>

<h2>📁 Files Provided:</h2>
<ul>
<li><code>index.html</code> – The HTML structure of the application.</li>
<li><code>script.js</code> – A separate JavaScript file linked to <code>index.html</code> to handle the functionality.</li>
</ul>

<h2>✅ Your Task Is to:</h2>

<h3>🔹 In <code>index.html</code>:</h3>
<ul>
<li>Create a form-like layout that includes:
<ul>
<li>A labeled <strong>input field for length</strong> (number input).</li>
<li>A labeled <strong>input field for breadth</strong> (number input).</li>
<li>A <strong>button</strong> labeled <em>"Calculate Area"</em>.</li>
<li>A <code>&lt;div&gt;</code> element with <code>id="result"</code> where the calculated area will be displayed.</li>
</ul>
</li>
<li>Link the external JavaScript file <code>script.js</code> just before the closing <code>&lt;/body&gt;</code> tag.</li>
</ul>

<h3>🔹 In <code>script.js</code>:</h3>
<ul>
<li>Write JavaScript code to:
<ul>
<li>Get the values entered for <strong>length</strong> and <strong>breadth</strong>.</li>
<li>Calculate the <strong>area</strong> using the formula:<br>
<code>Area = length × breadth</code>
</li>
<li>Update the text inside <code>&lt;div id="result"&gt;</code> to display the calculated area.</li>
</ul>
</li>
<li>Ensure the calculation is triggered only when the user clicks the <em>"Calculate Area"</em> button.</li>
</ul>

<h2>💡 Additional Notes:</h2>
<ul>
<li>Use DOM methods like <code>document.getElementById()</code> or <code>querySelector()</code> to access and update elements.</li>
<li>Validate inputs: If either field is empty, zero, or not a number, show an appropriate error message in the result div.</li>
<li>Styling is optional but may be rewarded if time permits.</li>
</ul>

<div class="example">
<h3>🧪 Example:</h3>
<p><strong>User enters:</strong></p>
<ul>
<li>Length: <code>5</code></li>
<li>Breadth: <code>4</code></li>
</ul>
<p><strong>On clicking "Calculate Area"</strong>, the output should be:</p>
<p><code>Area of Rectangle: 20</code></p>
</div></div>
