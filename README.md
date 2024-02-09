`````````````````````STEPS``````````````````````````````````````````
1. Initialization

<!-- npm install -g @angular/cli@latest -->
=> angular ki command line interface yaha install ho jayegi
=> har baar karna hota hai? Yes!
<!-- ng new my-angular-app -->
=>  ye app create karta hai
=> different options hote hai regarding CSS/SCSS/etc
<!-- cd my-angular-app -->
=> uss directory m aane ke liye, mltb directly uss folder m aane ke liye hum cd karte hai!
<!-- ng serve -->
=> localhost:4200 pe host kar deta hai



2. Folder structure and all the important files mainly required:


<!-- - app.component.ts : -->
 This is the main component of your application. It contains metadata related to the component like selector.
<!-- - app.component.html :  -->
This is the main component of your application  which contains HTML code for your application. It's like the index.html file in other frameworks   - index.html
<!-- - app.component.spec.ts :  -->
This file tests the functionality of the AppComponent. You can write test cases in this file using Jasmine framework. YET TO LEARN


3. Creating Hello World:
<!-- ng generate component hello-world -->

// src/app/hello-world/hello-world.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  template: '<h1>Hello, World!</h1>',
})
export class HelloWorldComponent {}

<!-- src/app/app.component.html -->

<h1>Welcome to {{ title }}!</h1>
<app-hello-world></app-hello-world>



`````````````````````````````````````````````````````````````````````````````````````````````
<body>

    <!-- Parent div with ID "main-eventlist" -->
    <div id="main-eventlist">

        <!-- Child div 1 -->
        <div class="child-div">
            <div class="header">
                <h1>Event List</h1>
                <div class="sort-container">
                    <span class="sort-text">SORT BY</span>
                    <span class="colon">:</span>
                    <select class="dropdown" id="sortDropdown">
                        <option value="latest">Latest</option>
                        <option value="oldest">Oldest</option>
                    </select>
                </div>
            </div>

            <!-- Table with headings -->
            <table>
                <thead>
                    <th>DATE</th>
                    <th>FROM</th>
                    <th>TO</th>
                    <th>VOYAGE STAGE</th>
                    <th>VOYAGE LEG</th>
                    <th>EVENT</th>
                    <th>POSITION</th>
                </thead>
                <tbody>
                    <!-- Add table rows with data as needed -->
                </tbody>
            </table>
        </div>